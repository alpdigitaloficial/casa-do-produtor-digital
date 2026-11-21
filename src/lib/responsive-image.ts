import manifest from "./image-manifest.json";

type ImageInfo = { url: string; width: number; height: number; srcSet: string };
const images: Record<string, ImageInfo> = manifest;

export function responsiveImage(src: string) {
  return images[src];
}