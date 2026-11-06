export const languages = [
  { code: 'en', name: 'English' },
  { code: 'el', name: 'Ελληνικά' },
  { code: 'es', name: 'Español' },
] as const;

export type Locale = (typeof languages)[number]['code'];

export function localizePath(path: string, locale: Locale) {
  return locale === 'en' ? path : `/${locale}${path}`;
}

export function englishPath(path: string) {
  return path.replace(/^\/(el|es)(?=\/|$)/, '') || '/';
}

export const headerCopy = {
  en: { home: 'Home', primary: 'Primary navigation', mobile: 'Mobile navigation', language: 'Language', menu: 'Menu', skip: 'Skip to content' },
  el: { home: 'Αρχική', primary: 'Κύρια πλοήγηση', mobile: 'Πλοήγηση κινητού', language: 'Γλώσσα', menu: 'Μενού', skip: 'Μετάβαση στο περιεχόμενο' },
  es: { home: 'Inicio', primary: 'Navegación principal', mobile: 'Navegación móvil', language: 'Idioma', menu: 'Menú', skip: 'Saltar al contenido' },
};

const navTranslations: Record<string, Record<'el' | 'es', string>> = {
  '/': { el: 'Αρχική', es: 'Inicio' },
  '/the-agency/': { el: 'Η ομάδα μας', es: 'La agencia' },
  '/destinations/': { el: 'Προορισμοί', es: 'Destinos' },
  '/references/': { el: 'Εκδηλώσεις', es: 'Referencias' },
  '/projects/': { el: 'Έργα', es: 'Proyectos' },
  '/blog/': { el: 'Άρθρα', es: 'Blog' },
  '/get-in-touch/': { el: 'Επικοινωνία', es: 'Contacto' },
};

export function navLabel(item: { href: string; label: string }, locale: Locale) {
  return locale === 'en' ? item.label : navTranslations[item.href][locale];
}
