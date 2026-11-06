export const WP = 'https://one-event.gr/wp-content/uploads';

export const companyVatNumber = 'CY10423210U';
export const eventFigures = { total: 120, largest: 1500 };

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'The Agency', href: '/the-agency/' },
  { label: 'Destinations', href: '/destinations/' },
  { label: 'References', href: '/references/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Blog', href: '/blog/' },
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
    image: '/img/destinations/athens.jpg',
    highlights: [
      ['All time classic', 'home of Parthenon, pinnacle of perfection'],
      ['Vibrant', 'the city that never sleeps'],
      ['Exceptional gastronomy', "voted as one of the world's best gastronomic destinations"],
      ['Stunning', 'hidden gems to be discovered'],
      ['Expressive', 'creative and open to different mind sets'],
    ],
  },
  {
    slug: 'corfu',
    name: 'Corfu',
    tagline: 'Venetian streets and evenings on the Ionian coast.',
    image: '/img/destinations/corfu.jpg',
    imageAlt: 'Rooftops of Corfu’s Old Town seen from the New Fortress',
    photoCredit: {
      title: 'The Old Town of Corfu',
      name: 'Robin',
      source: 'https://commons.wikimedia.org/wiki/File:The_Old_Town_of_Corfu.jpg',
      license: 'CC BY 2.0',
      licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
    },
    highlights: [
      ['Old Town walks', 'Explore the UNESCO-listed Old Town on foot, from the arcades of the Liston to the narrow streets of Campiello.'],
      ['Incentives on the water', 'Build a day around the Ionian coast, with a boat outing, time ashore and lunch by the sea.'],
      ['Group dining', 'Plan a welcome dinner in town or a closing evening by the water, with a menu drawn from Corfiot cooking.'],
      ['Meetings and retreats', 'Use a resort as a base for meetings, then split the group for guided walks, coastal activities or a shared dinner.'],
    ],
  },
  {
    slug: 'crete',
    name: 'Crete',
    tagline: 'Where hospitality is a way of life.',
    image: '/img/destinations/crete.jpg',
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
    image: '/img/destinations/cyprus.jpg',
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
    image: '/img/destinations/mykonos.jpg',
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
    image: '/img/destinations/peloponnese.jpg',
    highlights: [
      ['Mythical', 'a place of unexplored beauty and hidden treasures'],
      ['Gastronomic', 'home of the world famous Kalamata olives'],
      ['Historic', 'major ancient sites and attractions'],
      ['Mesmerizing', 'landscapes that take your breath away'],
      ['Adventurous', 'a paradise for thrill seekers with plethora of options'],
    ],
  },
  {
    slug: 'rhodes',
    name: 'Rhodes',
    tagline: 'Medieval streets, Aegean shores and room to bring a group together.',
    image: '/img/destinations/rhodes.jpg',
    imageAlt: 'Medieval stone walls and towers in the Old Town of Rhodes',
    photoCredit: {
      title: 'Rodos old town walls panorama',
      name: 'Tomisti',
      source: 'https://commons.wikimedia.org/wiki/File:Rodos_old_town_walls_panorama.jpg',
      license: 'CC BY-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
      changes: 'Resized',
    },
    highlights: [
      ['Medieval City', 'Take a guided walk through the UNESCO-listed walled city, including the Street of the Knights and the Palace of the Grand Master.'],
      ['Conferences and meetings', 'Base the programme at a resort with meeting facilities and coordinate transfers for off-site activities.'],
      ['An afternoon in Lindos', 'Build an incentive around the village’s whitewashed lanes, the Acropolis of Lindos and time on the coast.'],
      ['Gala evenings', 'Plan an evening in the Old Town or by the sea, with the venue and format matched to the group size and season.'],
    ],
  },
  {
    slug: 'santorini',
    name: 'Santorini',
    tagline: 'The Caldera — nature’s own amphitheater.',
    image: '/img/destinations/santorini.jpg',
    highlights: [
      ['Natural wonder', 'magnificent Caldera views and picturesque whitewashed houses'],
      ['Exquisite', 'unique venues with breath-taking views'],
      ['Gastronomic', 'renowned vineyards and wineries'],
      ['Historic', 'a colony dating back to the Neolithic era'],
      ['Authentic', 'a nice blend of local traditions, culture and recipes'],
    ],
  },
  {
    slug: 'thessaloniki',
    name: 'Thessaloniki',
    tagline: 'A northern Greek conference city with a waterfront built for exploring.',
    image: '/img/projects/isst-conference/img-0292.webp',
    imageAlt: 'The ISST Conference in Thessaloniki',
    project: 'isst-conference',
    highlights: [
      ['Conferences and exhibitions', 'Plan plenaries, breakouts and exhibitions around venues such as the Ioannis Vellidis Congress Centre.'],
      ['Time by the water', 'Take a group along the waterfront past the White Tower, then build in time for a shared dinner.'],
      ['Historic neighbourhoods', 'Use a guided walk through Ano Poli to explore the city’s older streets and Byzantine heritage.'],
      ['A programme with local character', 'Pair meeting days with neighbourhood food stops, local produce and an evening built around northern Greek cooking.'],
    ],
  },
];

export const team = [
  {
    name: 'Alexis Onoufriou',
    role: 'Managing Partner & CEO',
    image: '/img/team/alexis.jpg',
    bio: `Alexis is a Chartered Accountant who has diversified his field of expertise by following his passion in the Corporate Tourism Industry. For over 10 years, he was leading the execution of Corporate Events, as a Managing Partner of Liberty International Tourism Group for Greece & Cyprus. His accounting and numeric literacy combined with his long experience in the Event and Destination Management fields give Alexis a great advantage in providing tailored solutions to any need and within any budget.`,
    quote: `“He always has that special ‘out of the box’ plan for any company, those ideas that make his events extra-ordinary and life memorable.”`,
  },
  {
    name: 'Demetra Onoufriou',
    role: 'Managing Partner, Sales & Marketing',
    image: '/img/team/demetra.jpg',
    bio: `Demetra is a Marketer who has been heading the Marketing Department of AstroBank in Cyprus, former Piraeus Bank, the leading bank in Greece. She has a track record of producing, presenting and managing innovative ideas and business solutions, with great expertise in event management. Demetra’s successful 20+ year career in Banking came to a close when she decided to join forces with her brother and take Destination & Event Management to a different level.`,
    quote: `“Identifying niches and creating opportunities for any corporate need.”`,
  },
];

const yt = (id) => `https://www.youtube.com/watch?v=${id}`;

export const references = [
  { title: 'ISST Schema Conference Thessaloniki', meta: 'Thessaloniki, Greece · 2026', video: yt('dyRbEd9IuBw'), project: 'isst-conference' },
  { title: 'Corfu by One Event', meta: 'Corfu, Greece · 2025', video: yt('bu-QQIMjU4Q') },
  { title: 'Customised Awards out of Dionysus Marbles', meta: 'Athens, Greece · 2025', video: yt('QBk5doCJvB0') },
  { title: 'Costa Navarino Event', meta: 'Peloponnese, Greece · 2025 · 100 guests', video: yt('D94KntYywCQ') },
  { title: 'Traditional Night under the Olive Trees', meta: 'Paphos, Cyprus · 2025 · 200 guests', video: yt('oq08q1Wq0BQ') },
  { title: 'Corporate Gala Dinner & Party', meta: 'Paphos, Cyprus · 2025 · 200 guests', video: yt('ZFjkdQnp2tU') },
  { title: 'Traditional Village Privatization', meta: 'Lefkara, Cyprus · 2025 · 200 guests', video: yt('ONIHLTBqIoU') },
  { title: 'Traditional Theme Night', meta: 'Athens, Greece · 2025 · 400 guests', video: yt('0DXGBNhwpaY') },
  { title: 'Gala Dinner Zappeio', meta: 'Athens, Greece · 2025 · 400 guests', video: yt('sjmcW-WO9aA') },
  { title: 'Ancient Olympic Games', meta: 'Athens, Greece · 2025 · 400 guests', video: yt('iwznBXI1N7Q') },
  { title: 'TE Connectivity Highlights', meta: 'Athens, Greece · 2025 · 450 guests', video: yt('1_BHAS8sO_I'), project: 'te-connectivity' },
  { title: 'Lefkara Village Experience', meta: 'Lefkara, Cyprus · 2025 · 200 guests', video: yt('A6tn9yOd3A0') },
  { title: 'European Brokers Meeting', meta: 'Limassol, Cyprus · 2024 · 850 guests', video: yt('K3rE-RNf5lg') },
  { title: 'PwC Football Tournament', meta: 'Cyprus · 2024 · 600 guests', video: yt('1vVf4M4YrR8'), project: 'pwc-football' },
  { title: 'Lawyer Company Meeting & Leisure', meta: 'Elounda, Crete · 180 guests', video: yt('LvU_njT-ae8') },
  { title: 'DIOR Staff Meeting & Leisure', meta: 'Cyprus · 2024 · 450 guests', video: yt('1w9qPn6tciQ'), project: 'dior-cyprus' },
  { title: 'InMode Summit', meta: 'Cyprus · 2023 · 450 guests', video: yt('YQfgwNiGMn0') },
  { title: 'Beach Olympics', meta: 'Greece · 2023', video: yt('_FAc9HodLtU') },
  { title: 'Traditional Village Theme Night', meta: 'Cyprus · 2023 · Oil & Gas · 150 guests', video: yt('86mCUzibBLo') },
  { title: 'Oil & Gas Summit STEM', meta: 'Cyprus · 2023 · 200 guests', video: yt('8PODsxlNB4Y') },
  { title: 'Viatris Conference', meta: 'Limassol, Cyprus · 2023 · 160 guests', video: yt('i6UWYWL48Ss') },
  { title: 'Merck Meeting & Leisure', meta: 'Cyprus · 2023 · 180 guests', video: yt('HLb40ad1XXo') },
  { title: 'Optibus Global Week', meta: 'Athens, Greece · 2022 · 450 guests', video: yt('mJBC29VSA24'), project: 'optibus' },
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
  {
    country: 'Greece',
    countryCode: 'GR',
    streetAddress: '20 Dinocharous Street',
    postalCode: '11852',
    city: 'Athens',
  },
  {
    country: 'Cyprus',
    countryCode: 'CY',
    streetAddress: '10 Delfon Street',
    postalCode: '1101',
    city: 'Nicosia',
  },
].map((office) => ({
  ...office,
  id: `office-${office.countryCode.toLowerCase()}`,
  address: `${office.streetAddress}, ${office.postalCode}, ${office.city}`,
}));
