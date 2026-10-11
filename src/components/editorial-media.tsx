import { hydraulicMedia, teamMedia } from "@/lib/editorial-media";

// Section-bound views of one approved source, never a fixed travelling object.
// Cropping and subtle local transforms are driven by the shared scroll frame.
export function HydraulicComposition({ stage }: { stage: "hero" | "service" }) {
  // The static service hose was explicitly cancelled; never render it here.
  if (stage === "service" || !hydraulicMedia.src) return null;
  return <div className={`hydraulic-composition hydraulic-composition-${stage}`} aria-hidden="true"><img src={hydraulicMedia.src} alt="" decoding="async" /></div>;
}

export function TeamFilm({ fallbackPoster }: { fallbackPoster: string }) {
  const poster = teamMedia.posterSrc ?? fallbackPoster;
  if (!teamMedia.videoSrc) return <img src={poster} alt="Equipe completa da Casa do Produtor" loading="lazy" />;
  return <video className="team-film" src={teamMedia.videoSrc} poster={poster} controls playsInline preload="metadata" aria-label="Vídeo institucional da Casa do Produtor" />;
}