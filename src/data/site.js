export const WP = 'https://one-event.gr/wp-content/uploads';

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'The Agency', href: '/the-agency/' },
  { label: 'Destinations', href: '/destinations/' },
  { label: 'References', href: '/references/' },
  { label: 'Get in touch', href: '/get-in-touch/' },
];

export const manifesto = [
  'We create moments that inspire',
  'We create memories connected to profound experience',
  'We look for the extraordinary and the unusual',
  'We act sustainably and prefer local suppliers',
  'We are passionate for perfection',
];

export const destinations = [
  {
    slug: 'athens',
    name: 'Athens',
    tagline: 'Home of Parthenon, pinnacle of perfection.',
    image: `${WP}/2024/08/Athens20Main20for20Website_resized.jpg`,
    highlights: [
      ['All time classic', 'home of Parthenon, pinnacle of perfection'],
      ['Vibrant', 'the city that never sleeps'],
      ['Exceptional gastronomy', "voted as one of the world's best gastronomic destinations"],
      ['Stunning', 'hidden gems to be discovered'],
      ['Expressive', 'creative and open to different mind sets'],
    ],
  },
  {
    slug: 'crete',
    name: 'Crete',
    tagline: 'Where hospitality is a way of life.',
    image: `${WP}/2022/04/Crete.jpg`,
    highlights: [
      ['Hospitable', 'before visitors all doors and hearts are open'],
      ['Unreal', 'natural wonders spread along your way'],
      ['Cultural', 'thousands of years of culture & tradition'],
      ['Historic', "home to one of the world's oldest civilizations"],
      ['Charming', 'winding alleys filled with bougainvillea and jasmine'],
    ],
  },
  {
    slug: 'cyprus',
    name: 'Cyprus',
    tagline: 'A crossroad of civilizations, bathed in light.',
    image: `${WP}/2022/04/cyprus.jpg`,
    highlights: [
      ['Historic', 'a crossroad of civilizations'],
      ['Delicious', 'home of the famous halloumi cheese'],
      ['Mesmerizing', 'stunning beaches & breath-taking landscapes'],
      ['Traditional', 'stone built villages maintaining customs and traditions'],
      ['Vibrant', 'great blend between tradition, history, modern architecture and lifestyle'],
    ],
  },
  {
    slug: 'mykonos',
    name: 'Mykonos',
    tagline: 'The luminous playground of the Aegean.',
    image: `${WP}/2022/04/mykonos.jpg`,
    highlights: [
      ['Breathtaking', 'stunning panoramic views'],
      ['Picturesque', 'iconic Cycladic alleys to get lost into'],
      ['Artistic', 'amazing blend of colors, senses and feelings'],
      ['Luxurious', 'high end venues & exceptional service'],
      ['Top-notch', 'exceptional and creative gastronomy'],
    ],
  },
  {
    slug: 'peloponnese',
    name: 'Peloponnese',
    tagline: 'A place of unexplored beauty and hidden treasures.',
    image: `${WP}/2022/04/peloponesse.jpg`,
    highlights: [
      ['Mythical', 'a place of unexplored beauty and hidden treasures'],
      ['Gastronomic', 'home of the world famous Kalamata olives'],
      ['Historic', 'major ancient sites and attractions'],
      ['Mesmerizing', 'landscapes that take your breath away'],
      ['Adventurous', 'a paradise for thrill seekers with plethora of options'],
    ],
  },
  {
    slug: 'santorini',
    name: 'Santorini',
    tagline: 'The Caldera — nature’s own amphitheater.',
    image: `${WP}/2022/04/santorini.jpg`,
    highlights: [
      ['Natural wonder', 'magnificent Caldera views and picturesque whitewashed houses'],
      ['Exquisite', 'unique venues with breath-taking views'],
      ['Gastronomic', 'renowned vineyards and wineries'],
      ['Historic', 'a colony dating back to the Neolithic era'],
      ['Authentic', 'a nice blend of local traditions, culture and recipes'],
    ],
  },
];

export const team = [
  {
    name: 'Alexis Onoufriou',
    role: 'Managing Partner & CEO',
    image: `${WP}/2022/04/Alexis.jpg`,
    bio: `Alexis is a Chartered Accountant who has diversified his field of expertise by following his passion in the Corporate Tourism Industry. For over 10 years, he was leading the execution of Corporate Events, as a Managing Partner of Liberty International Tourism Group for Greece & Cyprus. His accounting and numeric literacy combined with his long experience in the Event and Destination Management fields give Alexis a great advantage in providing tailored solutions to any need and within any budget.`,
    quote: `“He always has that special ‘out of the box’ plan for any company, those ideas that make his events extra-ordinary and life memorable.”`,
  },
  {
    name: 'Demetra Onoufriou',
    role: 'Managing Partner, Sales & Marketing',
    image: `${WP}/2022/05/Demetra-O.jpg`,
    bio: `Demetra is a Marketer who has been heading the Marketing Department of AstroBank in Cyprus, former Piraeus Bank, the leading bank in Greece. She has a track record of producing, presenting and managing innovative ideas and business solutions, with great expertise in event management. Demetra’s successful 20+ year career in Banking came to a close when she decided to join forces with her brother and take Destination & Event Management to a different level.`,
    quote: `“Identifying niches and creating opportunities for any corporate need.”`,
  },
];

const yt = (id) => `https://www.youtube.com/watch?v=${id}`;

export const references = [
  { title: 'ISST Schema Conference Thessaloniki', meta: 'Thessaloniki, Greece · 2026', video: yt('dyRbEd9IuBw') },
  { title: 'Corfu by One Event', meta: 'Corfu, Greece · 2025', video: yt('bu-QQIMjU4Q') },
  { title: 'Customised Awards out of Dionysus Marbles', meta: 'Athens, Greece · 2025', video: yt('QBk5doCJvB0') },
  { title: 'Costa Navarino Event', meta: 'Peloponnese, Greece · 2025 · 100 guests', video: yt('D94KntYywCQ') },
  { title: 'Traditional Night under the Olive Trees', meta: 'Paphos, Cyprus · 2025 · 200 guests', video: yt('oq08q1Wq0BQ') },
  { title: 'Corporate Gala Dinner & Party', meta: 'Paphos, Cyprus · 2025 · 200 guests', video: yt('ZFjkdQnp2tU') },
  { title: 'Traditional Village Privatization', meta: 'Lefkara, Cyprus · 2025 · 200 guests', video: yt('ONIHLTBqIoU') },
  { title: 'Traditional Theme Night', meta: 'Athens, Greece · 2025 · 400 guests', video: yt('0DXGBNhwpaY') },
  { title: 'Gala Dinner Zappeio', meta: 'Athens, Greece · 2025 · 400 guests', video: yt('sjmcW-WO9aA') },
  { title: 'Ancient Olympic Games', meta: 'Athens, Greece · 2025 · 400 guests', video: yt('iwznBXI1N7Q') },
  { title: 'TE Connectivity Highlights', meta: 'Athens, Greece · 2025 · 400 guests', video: yt('1_BHAS8sO_I') },
  { title: 'Lefkara Village Experience', meta: 'Lefkara, Cyprus · 2025 · 200 guests', video: yt('A6tn9yOd3A0') },
  { title: 'European Brokers Meeting', meta: 'Limassol, Cyprus · 2024 · 850 guests', video: yt('K3rE-RNf5lg') },
  { title: 'PwC Football Tournament', meta: 'Cyprus · 2024 · 600 guests', video: yt('1vVf4M4YrR8') },
  { title: 'Lawyer Company Meeting & Leisure', meta: 'Elounda, Crete · 180 guests', video: yt('LvU_njT-ae8') },
  { title: 'DIOR Staff Meeting & Leisure', meta: 'Cyprus · 2024 · 450 guests', video: yt('1w9qPn6tciQ') },
  { title: 'InMode Summit', meta: 'Cyprus · 2023 · 450 guests', video: yt('YQfgwNiGMn0') },
  { title: 'Beach Olympics', meta: 'Greece · 2023', video: yt('_FAc9HodLtU') },
  { title: 'Traditional Village Theme Night', meta: 'Cyprus · 2023 · Oil & Gas · 150 guests', video: yt('86mCUzibBLo') },
  { title: 'Oil & Gas Summit STEM', meta: 'Cyprus · 2023 · 200 guests', video: yt('8PODsxlNB4Y') },
  { title: 'Viatris Conference', meta: 'Limassol, Cyprus · 2023 · 160 guests', video: yt('i6UWYWL48Ss') },
  { title: 'Merck Meeting & Leisure', meta: 'Cyprus · 2023 · 180 guests', video: yt('HLb40ad1XXo') },
  { title: 'Optibus Global Week', meta: 'Athens, Greece · 2022 · 450 guests', video: yt('mJBC29VSA24') },
  { title: 'APGAR Team Building & Incentive', meta: 'Paphos, Cyprus · 2022 · 170 guests', video: yt('G5I5_LJgj3c') },
];

export const gallery = [
  { src: `${WP}/2022/10/Philopappou-3.jpg`, alt: 'Event at Philopappou Hill, Athens' },
  { src: `${WP}/2022/10/Bounty.jpg`, alt: 'Bounty themed event' },
  { src: `${WP}/2022/10/Lets-Zorba-3.jpg`, alt: 'Let’s Zorba traditional night' },
  { src: `${WP}/2022/10/Dionysos-Zonars-1.jpg`, alt: 'Dionysus marbles awards' },
  { src: `${WP}/2022/10/Sunset-Beach-Dinner-1.jpg`, alt: 'Sunset beach dinner' },
  { src: `${WP}/2022/10/Salone-1.jpg`, alt: 'Salone gala' },
  { src: `${WP}/2022/10/Raft-Building-2.jpg`, alt: 'Raft building team activity' },
  { src: `${WP}/2022/10/Traditional-Village-Fiesta-1.jpg`, alt: 'Traditional village fiesta' },
];

export const contacts = [
  {
    name: 'Alexis Onoufriou',
    role: 'Managing Partner',
    email: 'aonoufriou@one-event.net',
    phones: ['GR: +30 69 0739 1694', 'CY: +357 99 432 030'],
  },
  {
    name: 'Demetra Onoufriou',
    role: 'Managing Partner',
    email: 'donoufriou@one-event.net',
    phones: ['+357 99 449 952'],
  },
];

export const offices = [
  { country: 'Greece', address: '20 Dinocharous Street, 11852, Athens' },
  { country: 'Cyprus', address: '10 Delfon Street, 1101, Nicosia' },
];
