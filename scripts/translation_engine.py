"""Run the two pinned OPUS/Argos models locally on the review runner."""

from hashlib import sha256
from pathlib import Path
from shutil import copyfileobj
from tempfile import TemporaryDirectory
from urllib.request import Request, urlopen
from zipfile import ZipFile

MODELS = {
    "el": (
        "translate-en_el-1_9.argosmodel",
        "translate-en_el-1_9",
        "ac5a359363b14490a2c6614e6c5ae4a58a8bbbc739b17a4cb3616fe46f2c329b",
    ),
    "es": (
        "translate-en_es-1_0.argosmodel",
        "en_es",
        "d698d0ef87ad70d5d184b7fa6965905bf4368f09a2bb9ffb165a79bac96af0c4",
    ),
}


def load_model(locale: str, cache: Path) -> Path:
    archive_name, package, digest = MODELS[locale]
    destination = cache / digest
    if destination.is_dir():
        return destination

    cache.mkdir(parents=True, exist_ok=True)
    with TemporaryDirectory(dir=cache) as directory:
        directory = Path(directory)
        archive_path = directory / archive_name
        request = Request(
            f"https://argos-net.com/v1/{archive_name}",
            headers={"User-Agent": "OneEventTranslationDrafts/1.0"},
        )
        with urlopen(request, timeout=45) as source:
            with archive_path.open("wb") as output:
                copyfileobj(source, output)

        fingerprint = sha256()
        with archive_path.open("rb") as archive:
            for chunk in iter(lambda: archive.read(1024 * 1024), b""):
                fingerprint.update(chunk)
        if fingerprint.hexdigest() != digest:
            raise ValueError(f"The downloaded {locale} translation model has an unexpected checksum.")

        with ZipFile(archive_path) as archive:
            members = [
                name for name in archive.namelist()
                if name.startswith(f"{package}/model/") or name == f"{package}/sentencepiece.model"
            ]
            archive.extractall(directory, members)
        extracted = directory / package
        try:
            extracted.rename(destination)
        except OSError:
            if not destination.is_dir():
                raise
    return destination


def token_chunks(tokens: list[str], limit: int = 300):
    # Leave room for the target language to expand and keep splits between words.
    while len(tokens) > limit:
        boundary = next(
            (index for index in range(limit, limit // 2, -1) if tokens[index].startswith("▁")),
            limit,
        )
        yield tokens[:boundary]
        tokens = tokens[boundary:]
    if tokens:
        yield tokens


def translate(originals: list[str], locale: str, cache: Path) -> list[str]:
    from ctranslate2 import Translator
    from sentencepiece import SentencePieceProcessor

    model = load_model(locale, cache)
    tokenizer = SentencePieceProcessor(model_file=str(model / "sentencepiece.model"))
    engine = Translator(str(model / "model"), device="cpu", compute_type="auto", intra_threads=2)

    segments = [list(token_chunks(tokens)) for tokens in tokenizer.encode(originals, out_type=str)]
    batches = engine.translate_batch(
        [chunk for entry in segments for chunk in entry],
        beam_size=4,
        max_batch_size=16,
        max_input_length=300,
        max_decoding_length=512,
        replace_unknowns=True,
    )
    translated = iter(batches)
    results = []
    for entry in segments:
        parts = [tokenizer.decode(next(translated).hypotheses[0]).replace("▁", " ").strip() for _ in entry]
        results.append(" ".join(parts))
    return results
