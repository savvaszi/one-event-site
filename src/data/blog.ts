import { athensPost } from './blog-athens';
import { cyprusPost } from './blog-cyprus';
import type { Locale } from './i18n';

export interface BlogPost {
  slug: string;
  image: string;
  copy: Record<Locale, {
    category: string;
    title: string;
    summary: string;
    introduction: string;
    sections: {
      heading: string;
      paragraphs: string[];
      links: { label: string; href: string }[];
    }[];
  }>;
}

export const blogPosts = [athensPost, cyprusPost];

export const blogCopy = {
  en: {
    label: 'Blog',
    heading: 'Event planning in Greece and Cyprus',
    introduction: 'Practical guides from the One Event team on choosing destinations, planning conferences and building incentive trips.',
    back: 'All articles',
    related: 'Read next',
    contact: 'Discuss your event with us',
  },
  el: {
    label: 'Άρθρα',
    heading: 'Οργάνωση εκδηλώσεων στην Ελλάδα και την Κύπρο',
    introduction: 'Πρακτικοί οδηγοί από την ομάδα της One Event για την επιλογή προορισμού, τη διοργάνωση συνεδρίων και τον σχεδιασμό ταξιδιών επιβράβευσης.',
    back: 'Όλα τα άρθρα',
    related: 'Διαβάστε επίσης',
    contact: 'Μιλήστε μας για την εκδήλωσή σας',
  },
  es: {
    label: 'Blog',
    heading: 'Cómo organizar eventos en Grecia y Chipre',
    introduction: 'Guías prácticas del equipo de One Event para elegir destino, organizar congresos y diseñar viajes de incentivo.',
    back: 'Todos los artículos',
    related: 'Sigue leyendo',
    contact: 'Cuéntanos qué evento quieres organizar',
  },
};
