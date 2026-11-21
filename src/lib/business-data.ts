export const SITE_URL = "https://www.casadoprodutorms.com.br/";

export const BUSINESS = {
  name: "Casa do Produtor",
  address: "Avenida Dorvalino dos Santos, 1760 — Centro, Sidrolândia/MS",
  whatsappNumber: "5567992991091",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Avenida+Dorvalino+dos+Santos+1760+Centro+Sidrolandia+MS",
} as const;

export const BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "HardwareStore",
  "@id": `${SITE_URL}#loja`,
  name: BUSINESS.name,
  url: SITE_URL,
  telephone: `+${BUSINESS.whatsappNumber}`,
  image: `${SITE_URL}images/fachada-casa-do-produtor.webp`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenida Dorvalino dos Santos, 1760 — Centro",
    addressLocality: "Sidrolândia",
    addressRegion: "MS",
    postalCode: "79170-000",
    addressCountry: "BR",
  },
  openingHours: ["Mo-Fr 06:50-17:30", "Sa 07:00-11:30"],
  // Coordinates of the matching 1760 listing, not a city-center estimate.
  geo: { "@type": "GeoCoordinates", latitude: -20.938722, longitude: -54.963705 },
};