// Populate only with approved real media pointer URLs supplied by the business.
import hose from "@/assets/mangueira-oficial-fase4.png.asset.json";
import sprays from "@/assets/produtos-sprays.jpg.asset.json";
import tools from "@/assets/produtos-ferramentas.jpg.asset.json";
import agricultural from "@/assets/produtos-linha-agricola.jpg.asset.json";
import cleaning from "@/assets/produtos-limpeza.jpg.asset.json";
import paints from "@/assets/produtos-tintas-brasilux.jpg.asset.json";
import finishes from "@/assets/produtos-tintas-acabamentos.jpg.asset.json";
import equipment from "@/assets/equipamentos-casa-do-produtor.jpg.asset.json";

export type ProductPhoto = { src: string; alt: string };
export const categoryMedia: Record<string, { message: string; photos: ProductPhoto[] }> = {
  "Linha agrícola": { message: "Olá! Vim pelo site da Casa do Produtor e gostaria de consultar produtos da linha agrícola.", photos: [
    { src: agricultural.url, alt: "Sabres de motosserra e ferramentas para a propriedade rural na Casa do Produtor" },
    { src: cleaning.url, alt: "Produtos de limpeza e manutenção disponíveis na Casa do Produtor" },
  ] },
  "Parafusos": { message: "Olá! Vim pelo site da Casa do Produtor e gostaria de consultar parafusos.", photos: [] },
  "Ferramentas": { message: "Olá! Vim pelo site da Casa do Produtor e gostaria de consultar ferramentas.", photos: [
    { src: tools.url, alt: "Chaves, alicates e ferramentas manuais da Casa do Produtor" },
  ] },
  "Roçadeiras": { message: "Olá! Vim pelo site da Casa do Produtor e gostaria de consultar roçadeiras.", photos: [
    { src: equipment.url, alt: "Equipamentos reais para manutenção de áreas urbanas e rurais da Casa do Produtor" },
  ] },
  "Tintas": { message: "Olá! Vim pelo site da Casa do Produtor e gostaria de consultar tintas.", photos: [
    { src: paints.url, alt: "Esmaltes e tintas Brasilux nas prateleiras da loja" },
    { src: finishes.url, alt: "Tintas e acabamentos Brasilux, Anjo e Luztol" },
    { src: sprays.url, alt: "Tintas em spray, selantes e produtos de acabamento" },
  ] },
};

// No artificial fallback: absent assets leave the approved composition intact.
export const hydraulicMedia: { src?: string } = { src: hose.url };
export const teamMedia: { videoSrc?: string; posterSrc?: string } = {};