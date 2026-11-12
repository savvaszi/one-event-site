const venueSources = [
  ['Megaron Athens International Conference Centre', 'athens', 'https://www.megaron.gr/en/international-conference-centre/'],
  ['InterContinental Athenaeum Athens', 'athens', 'https://www.thisisathens.org/acvb/meeting-planner/hotels/athenaeum-intercontinental'],
  ['Grand Hyatt Athens', 'athens', 'https://assets.hyatt.com/content/dam/hyatt/hyattdam/documents/2025/04/04/1055/Grand-Hyatt-Athens-Capacity-Charts-English.pdf', 'PDF'],
  ['House of Events, Costa Navarino', 'peloponnese', 'https://www.costanavarino.com/conferences-meetings/'],
  ['Mikis Theodorakis Convention Centre, Creta Maris', 'crete', 'https://www.cretamaris.gr/about-us/about-creta-maris'],
  ['Sheraton Rhodes Resort', 'rhodes', 'https://www.marriott.com/en-us/hotels/rhosi-sheraton-rhodes-resort/events/'],
];

const copy = {
  el: {
    title: 'Οργάνωση εταιρικής εκδήλωσης στην Ελλάδα',
    seoTitle: 'DMC Ελλάδα | Οδηγός εταιρικών εκδηλώσεων',
    description: 'Συγκρίνετε την Αθήνα και τα ελληνικά νησιά για την επόμενη εταιρική εκδήλωσή σας. Δείτε δημοσιευμένες χωρητικότητες, εποχικές συμβουλές και συχνές ερωτήσεις.',
    eyebrow: 'Οδηγός εκδηλώσεων στην Ελλάδα',
    intro: 'Ξεκινήστε από το τι χρειάζεται να κάνει η ομάδα μαζί. Συγκρίνετε την Αθήνα, τα νησιά και τα θέρετρα και επιλέξτε χώρο ανάλογα με τον αριθμό των συμμετεχόντων και τη διάταξη της αίθουσας.',
    nav: 'Σε αυτόν τον οδηγό',
    choicesTitle: 'Αθήνα ή νησιά;',
    choices: [
      ['Αθήνα για πρόγραμμα με κύριο άξονα τις συναντήσεις', 'Εξετάστε πρώτα την Αθήνα για ένα συνέδριο, μια παρουσίαση προϊόντος ή μια ομάδα που φτάνει από πολλές χώρες. Μπορείτε να στεγάσετε την ολομέλεια και τις παράλληλες συνεδρίες στον ίδιο χώρο και να οργανώσετε χωριστά ένα δείπνο στην πόλη ή στην Αθηναϊκή Ριβιέρα.', ['athens']],
      ['Νησιά για ταξίδι επιβράβευσης ή εταιρική απόδραση', 'Επιλέξτε τη Μύκονο για δραστηριότητες στη θάλασσα, τη Σαντορίνη για δείπνο πάνω από την καλντέρα ή την Κέρκυρα για μια μικρότερη εταιρική απόδραση. Για μεγαλύτερη ομάδα που χρειάζεται και αίθουσες συναντήσεων, εξετάστε τα θέρετρα της Κρήτης ή της Ρόδου.', ['mykonos', 'santorini', 'corfu', 'crete', 'rhodes']],
      ['Όταν το πρόγραμμα έχει δύο μέρη', 'Κρατήστε τις συναντήσεις στην Αθήνα και συνεχίστε σε ένα νησί για το ταξίδι επιβράβευσης. Προβλέψτε χρόνο για τη μετακίνηση. Αν μια δεύτερη πτήση ή ένα πλοίο θα σας πάρει πολύ χρόνο, εξετάστε ένα θέρετρο στην Πελοπόννησο με αίθουσες και δραστηριότητες στην ίδια βάση.', ['peloponnese']],
    ],
    venuesTitle: 'Σύγκριση χωρητικότητας χώρων',
    venuesIntro: 'Η θεατρική διάταξη, το καθιστό δείπνο και η όρθια δεξίωση αξιοποιούν διαφορετικά τον χώρο. Χρησιμοποιήστε τα δημοσιευμένα στοιχεία για μια πρώτη επιλογή και επιβεβαιώστε την πραγματική χωρητικότητα με βάση τη σκηνή, τη διάταξη και τις ημερομηνίες σας.',
    venueColumn: 'Χώρος και τοποθεσία',
    capacityColumn: 'Δημοσιευμένη χωρητικότητα',
    capacities: [
      '1.960 θέσεις στην αίθουσα Χρήστος Λαμπράκης. Έως 6.000 σύνεδροι στο σύνολο του κέντρου, ανάλογα με τη διαμόρφωση.',
      'Η αίθουσα Athenaeum χωρά έως 1.500 άτομα σε θεατρική διάταξη ή 637 σε διάταξη καμπαρέ.',
      'Η αίθουσα Caryatids χωρά έως 1.000 άτομα σε θεατρική διάταξη ή 600 σε καθιστό δείπνο.',
      'Έως 1.700 συμμετέχοντες σε θεατρική διάταξη στο συνεδριακό κέντρο Navarino Dunes.',
      'Έως 5.000 σύνεδροι στο σύνολο του συνεδριακού κέντρου. Επιβεβαιώστε τη χωρητικότητα της συγκεκριμένης αίθουσας και διάταξης.',
      'Η αίθουσα Imperial A+B χωρά έως 650 άτομα σε θεατρική διάταξη, 450 σε καθιστό δείπνο ή 900 σε δεξίωση.',
    ],
    faqTitle: 'Συχνές ερωτήσεις για εκδηλώσεις στην Ελλάδα',
    faqs: [
      ['Τι ταιριάζει σε ένα ταξίδι επιβράβευσης στην Ελλάδα;', 'Για ένα σύντομο ταξίδι, επιλέξτε μία βάση και σχεδιάστε μια κοινή εμπειρία, όπως μια βραδιά με θέα στην Ακρόπολη, μια μέρα με ιστιοπλοϊκό στις Κυκλάδες ή ένα γεύμα ανάμεσα στους ελαιώνες της Πελοποννήσου. Ένα μεγαλύτερο πρόγραμμα σάς επιτρέπει να συνδυάσετε πόλη και νησί χωρίς να αφιερώσετε υπερβολικό χρόνο στις μετακινήσεις.'],
      ['Πότε να οργανώσουμε μια εταιρική εκδήλωση στην Ελλάδα;', 'Το διάστημα από τον Απρίλιο έως τον Ιούνιο και εκείνο από τον Σεπτέμβριο έως τον Οκτώβριο είναι καλές περίοδοι για υπαίθρια προγράμματα. Τον Ιούλιο και τον Αύγουστο η ζήτηση είναι αυξημένη, ιδίως στα νησιά, οπότε προγραμματίστε νωρίτερα τη διαμονή και τις μετακινήσεις. Η Αθήνα είναι πρακτική επιλογή για εκδηλώσεις σε εσωτερικούς χώρους τον χειμώνα. Ελέγξτε πτήσεις, πλοία και τη λειτουργία των χώρων για τις ημερομηνίες σας.'],
      ['Πώς να επιλέξουμε ανάμεσα στην Αθήνα και ένα νησί;', 'Ξεκινήστε από την Αθήνα αν χρειάζεστε μεγάλη αίθουσα ολομέλειας, πολλές αίθουσες παράλληλων συνεδριών ή εύκολη άφιξη από διαφορετικές χώρες. Προτιμήστε νησί αν ο βασικός σκοπός είναι ένα ταξίδι επιβράβευσης ή μια εταιρική απόδραση. Η Κρήτη και η Ρόδος μπορούν να εξυπηρετήσουν και μεγαλύτερες ομάδες που χρειάζονται θέρετρο με συνεδριακές υποδομές.'],
      ['Είναι κατάλληλη η Μύκονος ή η Σαντορίνη για μεγάλη ομάδα;', 'Για ένα ιδιωτικό δείπνο ή ένα πρόγραμμα επιβράβευσης σε έναν χώρο, οι 50–150 καλεσμένοι είναι ένα χρήσιμο σημείο εκκίνησης. Για 200 ή περισσότερους, ελέγξτε τη διαθεσιμότητα δωματίων, την πρόσβαση λεωφορείων και πού μπορούν να συναντηθούν ή να δειπνήσουν όλοι μαζί. Η Κρήτη, η Ρόδος, η Αθήνα και η Πελοπόννησος προσφέρουν περισσότερες επιλογές όταν είναι απαραίτητο να μείνει όλη η ομάδα στον ίδιο χώρο.'],
      ['Πώς να οργανώσουμε τις μετακινήσεις από αεροδρόμια και λιμάνια;', 'Κλείστε εγκαίρως τα οχήματα για την ομάδα, ιδιαίτερα το καλοκαίρι. Στείλτε τις ώρες άφιξης των συμμετεχόντων και τις ανάγκες τους σε αποσκευές για να συντονιστούν οι μεταφορές με κάθε πτήση ή δρομολόγιο. Αν το πρόγραμμα μοιράζεται ανάμεσα στην Αθήνα και ένα νησί, προβλέψτε περιθώριο για καθυστερήσεις και εναλλακτική για δραστηριότητες που εξαρτώνται από τον καιρό.'],
      ['Ποιοι χώροι της Αθήνας έχουν περισσότερες από 1.000 θέσεις;', 'Το Μέγαρο Μουσικής αναφέρει 1.960 σταθερές θέσεις στην αίθουσα Χρήστος Λαμπράκης. Η αίθουσα Athenaeum στο InterContinental χωρά έως 1.500 άτομα σε θεατρική διάταξη. Η σκηνή, οι θέσεις του τεχνικού ελέγχου και οι ανάγκες προσβασιμότητας μπορούν να επηρεάσουν τη διαθέσιμη χωρητικότητα.'],
      ['Τι αναλαμβάνει τοπικά μια εταιρεία διαχείρισης προορισμού;', 'Μια DMC μπορεί να προτείνει χώρους, να συντονίσει επισκέψεις και προμηθευτές, να σχεδιάσει μετακινήσεις και δραστηριότητες και να αναλάβει την επιτόπια υλοποίηση. Η τοπική ομάδα ελέγχει επίσης πρακτικές λεπτομέρειες, όπως την πρόσβαση οχημάτων, τον χρόνο εγκατάστασης και τις εναλλακτικές σε περίπτωση βροχής, πριν οριστικοποιήσετε το πρόγραμμα.'],
      ['Μπορεί η εταιρεία μας να κάνει κράτηση απευθείας με την One Event;', 'Ναι. Στείλτε τις ημερομηνίες ή το χρονικό διάστημα, τον αριθμό των συμμετεχόντων, τους στόχους της εκδήλωσης και τυχόν ανάγκες για διαμονή, αίθουσα ολομέλειας ή δραστηριότητες. Αν έχετε ήδη ένα εύρος προϋπολογισμού, συμπεριλάβετέ το ώστε οι πρώτες προτάσεις να ανταποκρίνονται στα διαθέσιμα χρήματα.'],
    ],
    sourceIntro: 'Για περισσότερα παραδείγματα προορισμών, δείτε',
    sourceLabel: 'τη σελίδα του δικτύου One Event για την Ελλάδα',
    ctaTitle: 'Ζητήστε μια πρώτη επιλογή χώρων για την ομάδα σας',
    ctaBody: 'Πείτε μας τις ημερομηνίες, το μέγεθος της ομάδας και το είδος εκδήλωσης που έχετε κατά νου. Θα σας βοηθήσουμε να περιορίσετε τις επιλογές.',
  },
  es: {
    title: 'Cómo organizar un evento corporativo en Grecia',
    seoTitle: 'DMC en Grecia | Guía de eventos corporativos',
    description: 'Compare Atenas y las islas griegas para su próximo evento. Consulte aforos publicados, consejos sobre la temporada y respuestas a preguntas frecuentes.',
    eyebrow: 'Guía de eventos en Grecia',
    intro: 'Empiece por definir qué necesita hacer el grupo en conjunto. Compare Atenas, las islas y los complejos hoteleros y elija un espacio según el número de asistentes y la distribución de la sala.',
    nav: 'En esta guía',
    choicesTitle: '¿Atenas o las islas?',
    choices: [
      ['Atenas para un programa centrado en reuniones', 'Empiece por Atenas si organiza un congreso, el lanzamiento de un producto o un encuentro con asistentes de varios países. Puede reunir la sesión plenaria y las sesiones paralelas bajo un mismo techo y celebrar la cena por separado en la ciudad o en la Riviera de Atenas.', ['athens']],
      ['Las islas para un viaje de incentivo o un retiro', 'Elija Miconos para actividades en el mar, Santorini para una cena sobre la caldera o Corfú para un retiro más pequeño. Si el grupo es más grande y también necesita salas de reuniones, considere los complejos hoteleros de Creta o Rodas.', ['mykonos', 'santorini', 'corfu', 'crete', 'rhodes']],
      ['Cuando el programa tiene dos partes', 'Celebre las sesiones de trabajo en Atenas y continúe en una isla para el incentivo. Reserve tiempo para el traslado. Si un segundo vuelo o un ferry ocupa demasiado tiempo, considere un complejo del Peloponeso con salas y actividades en una misma base.', ['peloponnese']],
    ],
    venuesTitle: 'Comparación de aforos',
    venuesIntro: 'Una sala en formato teatro, una cena sentada y una recepción de pie aprovechan el espacio de forma distinta. Use estos datos publicados para hacer una primera selección y confirme el aforo útil según el escenario, la distribución y sus fechas.',
    venueColumn: 'Espacio y ubicación',
    capacityColumn: 'Aforo publicado',
    capacities: [
      '1.960 plazas en la sala Christos Lambrakis. Hasta 6.000 asistentes en todo el centro, según la configuración.',
      'El salón Athenaeum admite hasta 1.500 personas en formato teatro o 637 en formato cabaré.',
      'El salón Caryatids admite hasta 1.000 personas en formato teatro o 600 en banquete.',
      'Hasta 1.700 asistentes en formato teatro en el centro de congresos Navarino Dunes.',
      'Hasta 5.000 asistentes en todo el centro de convenciones. Confirme el aforo de la sala y la configuración concretas.',
      'El salón Imperial A+B admite hasta 650 personas en formato teatro, 450 en banquete o 900 en recepción.',
    ],
    faqTitle: 'Preguntas frecuentes sobre eventos en Grecia',
    faqs: [
      ['¿Qué funciona bien para un viaje de incentivo en Grecia?', 'Para un viaje corto, elija una sola base y organice una experiencia en común, como una velada con vistas a la Acrópolis, un día de navegación por las Cícladas o una comida entre olivares en el Peloponeso. Un programa más largo permite combinar una ciudad y una isla sin dedicar demasiado tiempo a los traslados.'],
      ['¿Cuándo conviene celebrar un evento corporativo en Grecia?', 'De abril a junio y de septiembre a octubre son buenos puntos de partida para programas al aire libre. Julio y agosto son meses de alta demanda, sobre todo en las islas, así que reserve con más antelación el alojamiento y el transporte. Atenas es práctica para eventos en interiores en invierno. Compruebe los vuelos, ferris y espacios abiertos en sus fechas.'],
      ['¿Cómo elegir entre Atenas y una isla?', 'Empiece por Atenas si necesita una sala plenaria grande, varias salas para sesiones paralelas o llegadas sencillas desde distintos países. Elija una isla si el objetivo principal es un incentivo o un retiro. Creta y Rodas también pueden servir para grupos grandes que busquen un complejo con salas de reuniones.'],
      ['¿Son Miconos o Santorini adecuadas para un grupo grande?', 'Para una cena privada o un incentivo en un solo recinto, entre 50 y 150 invitados es un punto de partida práctico. Para 200 o más, compruebe la disponibilidad de habitaciones, el acceso para autocares y dónde puede reunirse o cenar todo el grupo. Creta, Rodas, Atenas y el Peloponeso ofrecen más opciones cuando es indispensable reunir a todos en un mismo lugar.'],
      ['¿Cómo planificar los traslados desde el aeropuerto o el puerto?', 'Reserve con antelación los vehículos para el grupo, especialmente en verano. Comparta la lista de llegadas y las necesidades de equipaje para ajustar los traslados a cada vuelo o travesía. Si el programa se reparte entre Atenas y una isla, prevea margen para retrasos y un plan alternativo para las actividades que dependan del tiempo.'],
      ['¿Qué espacios de Atenas tienen más de 1.000 plazas?', 'El Megaron indica 1.960 plazas fijas en su sala Christos Lambrakis. El salón Athenaeum del InterContinental admite hasta 1.500 personas en formato teatro. El escenario, los puestos de control técnico y las necesidades de accesibilidad pueden afectar al aforo útil.'],
      ['¿Qué gestiona sobre el terreno una agencia receptiva (DMC)?', 'Una DMC puede preseleccionar espacios, coordinar visitas y proveedores, planificar el transporte y las actividades y gestionar la operación en destino. El equipo local también comprueba cuestiones como el acceso de vehículos, los tiempos de montaje y las alternativas en caso de lluvia antes de cerrar el programa.'],
      ['¿Puede nuestra empresa reservar directamente con One Event?', 'Sí. Envíe sus fechas o el intervalo previsto, el número de asistentes, los objetivos del evento y cualquier necesidad de alojamiento, sala plenaria o actividades. Si ya tiene un presupuesto orientativo, inclúyalo para que la primera selección se ajuste a lo que puede invertir.'],
    ],
    sourceIntro: 'Para ver más ejemplos de destinos, consulte',
    sourceLabel: 'la página de Grecia de la red One Event',
    ctaTitle: 'Solicite una selección de espacios para su grupo',
    ctaBody: 'Comparta las fechas, el tamaño del grupo y el formato que tiene en mente. Le ayudaremos a acotar las opciones.',
  },
};

export function getLocalizedGuide(locale) {
  const guide = copy[locale];
  const venues = venueSources.map(([name, location, source, format], index) => ({
    name, location, source, format, capacity: guide.capacities[index],
  }));
  return { ...guide, venues };
}
