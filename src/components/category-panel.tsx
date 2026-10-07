import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ArrowRight, Check, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categoryMedia } from "@/lib/editorial-media";

type Props = { title: string; description: string; number: string; whatsappNumber: string };

export function CategoryPanel({ title, description, number, whatsappNumber }: Props) {
  const media = categoryMedia[title];
  if (!media) return null;

  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger asChild>
        <Button variant="ghost" className="stock-category" aria-label={`Ver ${title}`}>
          <Check size={15} aria-hidden="true" /><span>{title}</span><ArrowRight size={16} aria-hidden="true" />
        </Button>
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="category-panel-backdrop" />
        <DialogPrimitive.Content className={`category-panel ${media.photos.length ? "category-panel-with-media" : "category-panel-text"}`}>
          <DialogPrimitive.Close asChild>
            <Button variant="ghost" size="icon" className="category-panel-close" aria-label="Fechar categoria" title="Fechar">
              <X aria-hidden="true" />
            </Button>
          </DialogPrimitive.Close>
          <div className="category-panel-copy">
            <p className="eyebrow">Casa do Produtor <span aria-hidden="true">/ {number}</span></p>
            <DialogPrimitive.Title className="category-panel-title">{title}</DialogPrimitive.Title>
            <DialogPrimitive.Description className="category-panel-description">{description}</DialogPrimitive.Description>
            <p className="category-panel-availability">Consulte nossa equipe para verificar opções e disponibilidade.</p>
            <Button asChild className="button-primary category-panel-whatsapp">
              <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(media.message)}`} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" size={19} /><span>Falar pelo WhatsApp</span>
              </a>
            </Button>
          </div>
          {media.photos.length > 0 && (
            <div className="category-panel-photos">
              {media.photos.map((photo, index) => <figure key={photo.src} className={index === 0 ? "category-panel-photo-main" : "category-panel-photo-secondary"}><img src={photo.src} alt={photo.alt} loading={index === 0 ? "eager" : "lazy"} decoding="async" /></figure>)}
            </div>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}