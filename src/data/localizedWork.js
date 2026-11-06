import { gallery, references } from './site.js';
import { projects } from './projects.js';

const projectCopy = {
  buyme: {
    el: ['Εταιρική εκδήλωση της BuyMe', 'Πάφος, Κύπρος', 'Ιούνιος 2026', 'Εταιρική εκδήλωση της BuyMe στην Πάφο, με φωτογραφίες του Tomer Foltyn.', [
      'Τον Ιούνιο του 2026 διοργανώσαμε μια εταιρική εκδήλωση για την BuyMe στην Πάφο. Τη φωτογράφιση ανέλαβε ο Tomer Foltyn. Περισσότερες πληροφορίες είναι διαθέσιμες κατόπιν αιτήματος.',
    ]],
    es: ['Evento corporativo de BuyMe', 'Pafos, Chipre', 'Junio de 2026', 'Un evento corporativo de BuyMe en Pafos, con fotografías de Tomer Foltyn.', [
      'En junio de 2026 organizamos un evento corporativo para BuyMe en Pafos, Chipre. Tomer Foltyn se encargó de la fotografía. Hay más información disponible previa solicitud.',
    ]],
  },
  'isst-conference': {
    el: ['Συνέδριο ISST Schema', 'Θεσσαλονίκη, Ελλάδα', '27–28 Μαΐου 2026', 'Το συνέδριο ISST Schema στη Θεσσαλονίκη, στα τέλη Μαΐου 2026.', [
      'Το συνέδριο ISST Schema πραγματοποιήθηκε στη Θεσσαλονίκη στις 27 και 28 Μαΐου 2026. Η τοπική ομάδα της One Event στην Ελλάδα ανέλαβε τον σχεδιασμό και την υλοποίηση του διημέρου.',
      'Οι φωτογραφίες καλύπτουν και τις δύο ημέρες, από την αίθουσα του συνεδρίου μέχρι τις συναντήσεις στα διαλείμματα.',
    ]],
    es: ['Congreso ISST Schema', 'Salónica, Grecia', '27–28 de mayo de 2026', 'El congreso ISST Schema celebrado en Salónica a finales de mayo de 2026.', [
      'El congreso ISST Schema se celebró en Salónica los días 27 y 28 de mayo de 2026. El equipo local de One Event en Grecia se encargó del diseño y la ejecución de las dos jornadas.',
      'Las fotos recorren ambas jornadas, desde la sala de conferencias hasta los encuentros entre sesiones.',
    ]],
  },
  'te-connectivity': {
    el: ['TE Connectivity στην Αθήνα', 'Αθήνα, Ελλάδα', '3–7 Μαΐου 2025', 'Πέντε ημέρες στην Αθήνα για την ομάδα τεχνολογίας της TE Connectivity από τις ΗΠΑ.', [
      'Τον Μάιο του 2025, 450 καλεσμένοι από την ομάδα τεχνολογίας της TE Connectivity στις ΗΠΑ βρέθηκαν στην Αθήνα για πέντε ημέρες. Το πρόγραμμα περιλάμβανε παραδοσιακή ελληνική βραδιά, αναβίωση των αρχαίων Ολυμπιακών Αγώνων στο Παναθηναϊκό Στάδιο, επίσημο δείπνο στο Ζάππειο και μια βραδιά στο Dionysos Zonar’s.',
      'Η φωτογραφική συλλογή καλύπτει όλους τους χώρους του προγράμματος, με επιπλέον στιγμιότυπα από το Παναθηναϊκό Στάδιο.',
    ]],
    es: ['TE Connectivity en Atenas', 'Atenas, Grecia', '3–7 de mayo de 2025', 'Cinco días en Atenas para el equipo de tecnología de TE Connectivity de Estados Unidos.', [
      'En mayo de 2025, 450 invitados del equipo de tecnología de TE Connectivity de Estados Unidos pasaron cinco días en Atenas. El programa incluyó una velada tradicional griega, una recreación de los Juegos Olímpicos de la Antigüedad en el Estadio Panatenaico, una cena de gala en el Zappeion y una velada en Dionysos Zonar’s.',
      'La galería recoge todos los espacios del programa e incluye imágenes adicionales del Estadio Panatenaico.',
    ]],
  },
  'dior-cyprus': {
    el: ['Συνάντηση και δραστηριότητες για την ομάδα της DIOR', 'Πάφος και Λευκωσία, Κύπρος', '15–19 Μαΐου 2024', 'Πενθήμερη συνάντηση προσωπικού και πρόγραμμα αναψυχής για 450 καλεσμένους της DIOR στην Πάφο και τη Λευκωσία.', [
      'Η DIOR έφερε την ομάδα της στην Κύπρο για μια συνάντηση προσωπικού με δραστηριότητες αναψυχής. Το πενθήμερο πρόγραμμα για 450 καλεσμένους πραγματοποιήθηκε από τις 15 έως τις 19 Μαΐου 2024. Η συλλογή περιλαμβάνει φωτογραφίες από την Πάφο και τη Λευκωσία.',
      'Στη συλλογή περιλαμβάνονται φωτογραφίες του Thomas Saito και στιγμιότυπα από την ομάδα διοργάνωσης.',
    ]],
    es: ['Reunión y actividades para el equipo de DIOR', 'Pafos y Nicosia, Chipre', '15–19 de mayo de 2024', 'Cinco días de reuniones y actividades para 450 invitados de DIOR en Pafos y Nicosia.', [
      'DIOR reunió a su equipo en Chipre para un encuentro que combinó sesiones de trabajo y actividades de ocio. El programa para 450 invitados se celebró del 15 al 19 de mayo de 2024. La galería recoge imágenes de Pafos y Nicosia.',
      'La galería incluye fotografías de Thomas Saito y otras imágenes tomadas por el equipo de organización.',
    ]],
  },
  'pwc-football': {
    el: ['Τουρνουά ποδοσφαίρου της PwC', 'Κύπρος', '2024', 'Το τουρνουά ποδοσφαίρου της PwC στην Κύπρο το 2024.', [
      'Το τουρνουά ποδοσφαίρου της PwC στην Κύπρο το 2024 συγκέντρωσε 600 καλεσμένους μέσα και έξω από το γήπεδο.',
    ]],
    es: ['Torneo de fútbol de PwC', 'Chipre', '2024', 'El torneo de fútbol de PwC en Chipre en 2024.', [
      'El torneo de fútbol de PwC en Chipre reunió en 2024 a 600 invitados dentro y fuera del campo.',
    ]],
  },
  optibus: {
    el: ['Optibus Global Week', 'Αθηναϊκή Ριβιέρα, Ελλάδα', '4–7 Σεπτεμβρίου 2022', 'Η Optibus συγκέντρωσε τη διεθνή ομάδα της στην Αθηναϊκή Ριβιέρα για το Global Week του 2022.', [
      'Το Global Week της Optibus έφερε 450 καλεσμένους στην Αθηναϊκή Ριβιέρα τον Σεπτέμβριο του 2022. Το πρόγραμμα περιλάμβανε συνεδριακές ημέρες, ειδική κατασκευή για τον πελάτη και δραστηριότητες αναψυχής στην ακτή.',
      'Η συλλογή συνδυάζει επίγειες λήψεις με εναέρια στιγμιότυπα της Ριβιέρας από τις 4 και τις 6 Σεπτεμβρίου.',
    ]],
    es: ['Optibus Global Week', 'Riviera de Atenas, Grecia', '4–7 de septiembre de 2022', 'Optibus reunió a su equipo internacional en la Riviera de Atenas para su Global Week de 2022.', [
      'La Global Week de Optibus llevó a 450 invitados a la Riviera de Atenas en septiembre de 2022. El programa incluyó jornadas de conferencias, un montaje a medida para el cliente y actividades de ocio en la costa.',
      'La galería combina fotografías a pie de tierra con imágenes aéreas de la Riviera tomadas los días 4 y 6 de septiembre.',
    ]],
  },
};

const referenceTitles = {
  el: [
    'Συνέδριο ISST Schema στη Θεσσαλονίκη', 'Η Κέρκυρα με την One Event', 'Βραβεία κατά παραγγελία από μάρμαρο Διονύσου',
    'Εκδήλωση στο Costa Navarino', 'Παραδοσιακή βραδιά στους ελαιώνες', 'Εταιρικό δείπνο και πάρτι',
    'Αποκλειστική εκδήλωση σε παραδοσιακό χωριό', 'Βραδιά με παραδοσιακό θέμα', 'Επίσημο δείπνο στο Ζάππειο',
    'Αναβίωση των αρχαίων Ολυμπιακών Αγώνων', 'Στιγμιότυπα της TE Connectivity', 'Εμπειρία στο χωριό Λεύκαρα',
    'Συνάντηση European Brokers', 'Τουρνουά ποδοσφαίρου της PwC', 'Συνάντηση και αναψυχή για δικηγορική εταιρεία',
    'Συνάντηση και δραστηριότητες για την ομάδα της DIOR', 'Σύνοδος InMode', 'Ολυμπιακοί αγώνες στην παραλία',
    'Θεματική βραδιά σε παραδοσιακό χωριό', 'Σύνοδος STEM για πετρέλαιο και φυσικό αέριο', 'Συνέδριο Viatris',
    'Συνάντηση και αναψυχή για τη Merck', 'Optibus Global Week', 'Ομαδικές δραστηριότητες και επιβράβευση για την APGAR',
  ],
  es: [
    'Congreso ISST Schema en Salónica', 'Corfú con One Event', 'Premios personalizados en mármol de Dionisos',
    'Evento en Costa Navarino', 'Velada tradicional entre olivos', 'Cena y fiesta corporativas',
    'Evento exclusivo en un pueblo tradicional', 'Velada de temática tradicional', 'Cena de gala en el Zappeion',
    'Recreación de los Juegos Olímpicos de la Antigüedad', 'Momentos de TE Connectivity', 'Experiencia en el pueblo de Léfkara',
    'European Brokers Meeting', 'Torneo de fútbol de PwC', 'Reunión y ocio para un despacho de abogados',
    'Reunión y actividades para el equipo de DIOR', 'Cumbre InMode', 'Olimpiadas en la playa',
    'Velada temática en un pueblo tradicional', 'Cumbre STEM de petróleo y gas', 'Congreso de Viatris',
    'Reunión y actividades para Merck', 'Optibus Global Week', 'Cohesión de equipo e incentivos para APGAR',
  ],
};

const referenceTerms = {
  el: {
    'Thessaloniki': 'Θεσσαλονίκη', 'Greece': 'Ελλάδα', 'Corfu': 'Κέρκυρα', 'Athens': 'Αθήνα', 'Peloponnese': 'Πελοπόννησος',
    'Paphos': 'Πάφος', 'Cyprus': 'Κύπρος', 'Lefkara': 'Λεύκαρα', 'Limassol': 'Λεμεσός', 'Elounda': 'Ελούντα',
    'Crete': 'Κρήτη', 'Oil & Gas': 'Πετρέλαιο και φυσικό αέριο', 'guests': 'καλεσμένοι',
  },
  es: {
    'Thessaloniki': 'Salónica', 'Greece': 'Grecia', 'Corfu': 'Corfú', 'Athens': 'Atenas', 'Peloponnese': 'Peloponeso',
    'Paphos': 'Pafos', 'Cyprus': 'Chipre', 'Lefkara': 'Léfkara', 'Limassol': 'Limasol', 'Elounda': 'Elunda',
    'Crete': 'Creta', 'Oil & Gas': 'Petróleo y gas', 'guests': 'invitados',
  },
};

const galleryAlt = {
  el: ['Εκδήλωση στον λόφο του Φιλοπάππου στην Αθήνα', 'Εκδήλωση με θέμα το Bounty', 'Παραδοσιακή βραδιά Let’s Zorba', 'Βραβεία από μάρμαρο Διονύσου', 'Δείπνο στην παραλία στο ηλιοβασίλεμα', 'Επίσημο δείπνο στο Salone', 'Ομαδική κατασκευή σχεδίας', 'Γιορτή σε παραδοσιακό χωριό'],
  es: ['Evento en la colina de Filopapo, Atenas', 'Evento con temática Bounty', 'Velada tradicional Let’s Zorba', 'Premios de mármol de Dionisos', 'Cena en la playa al atardecer', 'Cena de gala en Salone', 'Construcción de balsas en equipo', 'Fiesta en un pueblo tradicional'],
};

export function getLocalizedWork(locale) {
  const terms = referenceTerms[locale];
  return {
    projects: projects.map((project) => {
      const [title, location, dates, summary, body] = projectCopy[project.slug][locale];
      return { ...project, title, location, dates, summary, body, guests: project.guests?.replace('guests', terms.guests) };
    }),
    references: references.map((entry, index) => ({
      ...entry,
      title: referenceTitles[locale][index],
      meta: Object.entries(terms).reduce((meta, [from, to]) => meta.replaceAll(from, to), entry.meta),
    })),
    gallery: gallery.map((image, index) => ({ ...image, alt: galleryAlt[locale][index] })),
  };
}
