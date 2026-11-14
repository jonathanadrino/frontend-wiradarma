import en from "./en";
import id from "./id";

import { locales } from "./locales";

export { locales };

const dictionaries = { en, id };

export function getContent(locale) {
  return dictionaries[locale] ?? en;
}

export function getMetadata(locale) {
  const { meta } = getContent(locale);
  const self = locales.find((l) => l.code === locale) ?? locales[0];
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: self.path,
      languages: Object.fromEntries(locales.map((l) => [l.code, l.path])),
    },
    openGraph: { title: meta.title, description: meta.description, locale: locale === "id" ? "id_ID" : "en_US" },
  };
}
