import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useRef } from "react";
import { ArrowRight, Check, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categoryMedia } from "@/lib/editorial-media";

type Props = { title: string; description: string; number: string; whatsappNumber: string };

export function CategoryPanel({ title, description, number, whatsappNumber }: Props) {
  const media = categoryMedia[title];
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const scrollPosition = useRef(0);
  if (!media) return null;

  return (
    <DialogPrimitive.Root onOpenChange={(open) => { if (open) scrollPosition.current = window.scrollY; }}>
      <DialogPrimitive.Trigger asChild>
        <Button ref={triggerRef} variant="ghost" className="stock-category" aria-label={`Ver ${title}`}>
          <Check size={15} aria-hidden="true" /><span>{title}</span><ArrowRight size={16} aria-hidden="true" />
        </Button>
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="category-panel-backdrop" />
        <DialogPrimitive.Content className={`category-panel ${media.photos.length ? "category-panel-with-media" : "category-panel-text"}`}
          onOpenAutoFocus={(event) => { event.preventDefault(); closeRef.current?.focus({ preventScroll: true }); }}
          onCloseAutoFocus={(event) => { event.preventDefault(); triggerRef.current?.focus({ preventScroll: true }); window.scrollTo({ top: scrollPosition.current, behavior: "instant" }); }}>
          <DialogPrimitive.Close asChild>
            <Button ref={closeRef} variant="ghost" size="icon" className="category-panel-close" aria-label="Fechar categoria" title="Fechar">
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
              {media.photos.slice(0, 3).map((photo, index) => <figure key={photo.src} className={index === 0 ? "category-panel-photo-main" : `category-panel-photo-secondary category-panel-photo-secondary-${index}`}><img src={photo.src} alt={photo.alt} loading={index === 0 ? "eager" : "lazy"} decoding="async" />{index === 0 && <figcaption>Produtos reais da loja</figcaption>}</figure>)}
            </div>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}