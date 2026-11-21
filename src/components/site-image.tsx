import type { ImgHTMLAttributes } from "react";
import { responsiveImage } from "@/lib/responsive-image";

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> & { src: string; alt: string };

// Intrinsic sizes reserve space; CSS continues to control the approved crops.
export function SiteImage({ src, alt, sizes = "(min-width: 900px) 50vw, 100vw", loading = "lazy", ...props }: Props) {
  const image = responsiveImage(src);
  return <img src={image?.url ?? src} alt={alt} width={image?.width} height={image?.height} srcSet={image?.srcSet} sizes={image ? sizes : undefined} loading={loading} decoding="async" {...props} />;
}