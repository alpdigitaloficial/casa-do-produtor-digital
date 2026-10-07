// Populate only with approved real media pointer URLs supplied by the business.
export type ProductPhoto = { src: string; alt: string };
export const categoryMedia: Record<string, { message: string; photos: ProductPhoto[] }> = {
  "Linha agrícola": { message: "Olá! Vim pelo site da Casa do Produtor e gostaria de consultar produtos da linha agrícola.", photos: [] },
  "Ferragens": { message: "Olá! Vim pelo site da Casa do Produtor e gostaria de consultar produtos de ferragens.", photos: [] },
  "Parafusos": { message: "Olá! Vim pelo site da Casa do Produtor e gostaria de consultar parafusos.", photos: [] },
  "Ferramentas": { message: "Olá! Vim pelo site da Casa do Produtor e gostaria de consultar ferramentas.", photos: [] },
  "Roçadeiras": { message: "Olá! Vim pelo site da Casa do Produtor e gostaria de consultar roçadeiras.", photos: [] },
  "Tintas": { message: "Olá! Vim pelo site da Casa do Produtor e gostaria de consultar tintas.", photos: [] },
};

// No artificial fallback: absent assets leave the approved composition intact.
export const hydraulicMedia: { src?: string } = {};
export const teamMedia: { videoSrc?: string; posterSrc?: string } = {};