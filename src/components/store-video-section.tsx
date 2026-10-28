import { useState } from "react";
import { MessageCircle, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import coverAsset from "@/assets/capa-video-17s.jpg.asset.json";

export const VIDEO_URL = "https://player.mux.com/0047Di3sQzYmp9GL8hWASgYGvypqttl5wmOx6dutTabk";
export const STORE_VIDEO_POSTER = coverAsset.url;

export function resolveStoreVideo(value: string) {
  if (!value.trim()) return null;
  try {
    const url = new URL(value);
    if (url.protocol !== "https:") return null;
    if (url.hostname === "player.mux.com") {
      const id = url.pathname.split("/").filter(Boolean)[0];
      if (!id) return null;
      return { native: false, src: `https://player.mux.com/${id}?autoplay=true` };
    }
    if (/\.mp4$/i.test(url.pathname)) return { native: true, src: url.href };
    if (["youtube.com", "www.youtube.com", "m.youtube.com", "youtu.be", "www.youtube-nocookie.com"].includes(url.hostname)) {
      const id = url.hostname === "youtu.be" ? url.pathname.split("/")[1] : url.searchParams.get("v") ?? url.pathname.split("/")[2];
      if (!id || !/^[\w-]+$/.test(id)) return null;
      return { native: false, src: `https://www.youtube-nocookie.com/embed/${id}` };
    }
    return { native: false, src: url.href };
  } catch {
    return null;
  }
}

export function StoreVideoSection({ whatsappHref }: { whatsappHref: string }) {
  const [activated, setActivated] = useState(false);
  const media = resolveStoreVideo(VIDEO_URL);
  if (!media) return null;
  const poster = STORE_VIDEO_POSTER;

  return (
    <section className="store-video-section" aria-labelledby="store-video-title">
      <div className="store-video-layout">
        <header className="store-video-heading">
          <p className="eyebrow">A loja</p>
          <h2 id="store-video-title">Por dentro da Casa do Produtor</h2>
          <p className="store-video-subtitle">Um passeio pela loja e pela equipe que atende você.</p>
        </header>
        <div className="store-video-player">
          {media.native ? (
            <video src={media.src} poster={poster} playsInline controls preload="none" aria-label="Vídeo Por dentro da Casa do Produtor" />
          ) : activated ? (
            <iframe src={media.src} title="Vídeo Por dentro da Casa do Produtor" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture" allowFullScreen />
          ) : (
            <>
              <img src={poster} alt="Capa do vídeo Por dentro da Casa do Produtor" loading="lazy" />
              <Button className="store-video-play" size="icon" aria-label="Reproduzir vídeo da Casa do Produtor" onClick={() => setActivated(true)}><Play aria-hidden="true" /></Button>
            </>
          )}
        </div>
        <div className="store-video-details">
          <div className="store-video-description">
            <p>A Casa do Produtor nasceu em 2020 para oferecer à cidade e ao campo variedade, qualidade e confiança. Hoje atendemos casa, oficina, empresa e propriedade rural, com uma ampla variedade de parafusos, ferramentas e acessórios, além de produtos de limpeza doméstica, agrícola e automotiva.</p>
            <p>Também fazemos a prensagem de mangueiras de alta pressão, com praticidade e agilidade. E o nosso diferencial é o atendimento personalizado: buscamos entender o que cada cliente precisa para oferecer a solução mais adequada.</p>
          </div>
          <div className="store-video-badges"><span>Desde 2020</span><span>Atendimento personalizado</span><span>Cidade e campo</span></div>
          <Button asChild className="button-primary"><a href={whatsappHref} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" size={19} /><span>Falar pelo WhatsApp</span></a></Button>
        </div>
      </div>
    </section>
  );
}