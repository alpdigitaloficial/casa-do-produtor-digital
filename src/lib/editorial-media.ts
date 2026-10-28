// Populate only with approved real media pointer URLs supplied by the business.
import hose from "@/assets/mangueira-oficial-fase4.png.asset.json";
import {
  sprays, paints, finishes, equipmentAsset as equipment,
  agrFacas, agrCubo, agrFlanges,
  parafusosAmarelos, parafusosZincados, parafusosCavacos,
  ferramentasSoquetes, ferramentasTramontinaSoquetes, ferramentasTramontinaChaves,
} from "@/lib/local-media";

export type ProductPhoto = { src: string; alt: string };
export const categoryMedia: Record<string, { message: string; photos: ProductPhoto[] }> = {
  "Linha agrícola": { message: "Olá! Vim pelo site da Casa do Produtor e gostaria de consultar produtos da linha agrícola.", photos: [
    { src: agrFacas.url, alt: "Facas de grade agrícolas na Casa do Produtor" },
    { src: agrCubo.url, alt: "Cubo com flange para implementos agrícolas na Casa do Produtor" },
    { src: agrFlanges.url, alt: "Flanges e carcaças metálicas para maquinário agrícola na Casa do Produtor" },
  ] },
  "Parafusos": { message: "Olá! Vim pelo site da Casa do Produtor e gostaria de consultar parafusos.", photos: [
    { src: parafusosAmarelos.url, alt: "Parafusos para madeira com cabeça chata na Casa do Produtor" },
    { src: parafusosZincados.url, alt: "Parafusos zincados com arruela e sextavado na Casa do Produtor" },
    { src: parafusosCavacos.url, alt: "Cavacos e parafusos sextavados zincados na Casa do Produtor" },
  ] },
  "Ferramentas": { message: "Olá! Vim pelo site da Casa do Produtor e gostaria de consultar ferramentas.", photos: [
    { src: ferramentasSoquetes.url, alt: "Parede de chaves fixas, soquetes e alicates na Casa do Produtor" },
    { src: ferramentasTramontinaSoquetes.url, alt: "Expositor Tramontina de soquetes e chaves catraca na Casa do Produtor" },
    { src: ferramentasTramontinaChaves.url, alt: "Expositor Tramontina de chaves combinadas e fixas na Casa do Produtor" },
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
