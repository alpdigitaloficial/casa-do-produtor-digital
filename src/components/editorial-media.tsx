import { hydraulicMedia, teamMedia } from "@/lib/editorial-media";
import { SiteImage } from "@/components/site-image";

// Section-bound views of one approved source, never a fixed travelling object.
// Cropping and subtle local transforms are driven by the shared scroll frame.
export function HydraulicComposition({ stage }: { stage: "hero" | "service" }) {
  // The static service hose was explicitly cancelled; never render it here.
  if (stage === "service" || !hydraulicMedia.src) return null;
  return <div className={`hydraulic-composition hydraulic-composition-${stage}`} aria-hidden="true"><img src={hydraulicMedia.src} alt="" decoding="async" /></div>;
}

export function TeamFilm({ fallbackPoster }: { fallbackPoster: string }) {
  const poster = teamMedia.posterSrc ?? fallbackPoster;
  if (!teamMedia.videoSrc) return <SiteImage src={poster} alt="Equipe completa da Casa do Produtor" sizes="(min-width: 900px) 58vw, calc(100vw - 32px)" />;
  return <video className="team-film" src={teamMedia.videoSrc} poster={poster} controls playsInline preload="metadata" aria-label="Vídeo institucional da Casa do Produtor" />;
}