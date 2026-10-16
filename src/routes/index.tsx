import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  Camera,
  ChevronDown,
  Clock3,
  ExternalLink,
  MapPin,
  Menu,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
  X,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

import logoAsset from "@/assets/casa-do-produtor-logo.png.asset.json";
import teamPeopleAsset from "@/assets/equipe-so-pessoas.jpg.asset.json";
import teamCounterAsset from "@/assets/equipe-quatro-balcao.jpeg.asset.json";
import equipmentAsset from "@/assets/equipamentos-casa-do-produtor.jpg.asset.json";
import facadeAsset from "@/assets/fachada-casa-do-produtor.jpg.asset.json";
import toolsAsset from "@/assets/ferramentas-casa-do-produtor.jpg.asset.json";
import pressAsset from "@/assets/prensa-melhorada.jpg.asset.json";
import paintAsset from "@/assets/tintas-casa-do-produtor.jpg.asset.json";
import bootsAsset from "@/assets/produtos-botas.jpg.asset.json";
import { CategoryPanel } from "@/components/category-panel";
import { TeamFilm } from "@/components/editorial-media";
import { ScrollHose, createScrollHose } from "@/components/scroll-hose";

const BUSINESS = {
  name: "Casa do Produtor",
  address: "Avenida Dorvalino dos Santos, 1760 — Centro, Sidrolândia/MS",
  whatsappNumber: "5567992991091",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Avenida+Dorvalino+dos+Santos+1760+Centro+Sidrolandia+MS",
} as const;

const messages = {
  hero: "Olá! Vim pelo site da Casa do Produtor e gostaria de conhecer melhor os produtos e serviços.",
  product: "Olá! Vim pelo site da Casa do Produtor e gostaria de consultar um produto.",
  service: "Olá! Vim pelo site da Casa do Produtor e gostaria de saber mais sobre a prensagem de mangueiras hidráulicas.",
  photo: "Olá! Vim pelo site da Casa do Produtor e gostaria de enviar uma foto para consultar um produto.",
  location: "Olá! Vim pelo site da Casa do Produtor e gostaria de confirmar algumas informações da loja.",
};

const categories = [
  ["01", "Linha agrícola", "Produtos para diferentes necessidades do campo e da propriedade."],
  ["02", "Parafusos", "Opções para diferentes tipos de trabalho e aplicação."],
  ["03", "Ferramentas", "Soluções para oficina, manutenção e trabalho diário."],
  ["04", "Roçadeiras", "Equipamentos para o cuidado de áreas urbanas e rurais."],
  ["05", "Tintas", "Produtos para proteção, acabamento e renovação."],
] as const;

const timeline = [
  ["2020", "Nascimento da Casa do Produtor."],
  ["2021", "Um dos maiores desafios da história: a pandemia."],
  ["Depois", "Aprendizado, superação e crescimento."],
  ["Hoje", "Uma empresa construída por clientes, colaboradores, fornecedores e parceiros."],
] as const;

const BRANDS = ["Husqvarna", "Brudden", "Zebu", "Tiger", "Savana", "Rossel", "Tae Cera", "Basillux", "Tramontina"] as const;

const SHOW_REVIEWS = true;

const REVIEWS: { text?: string; name: string }[] = [
  { name: "Geremias S." },
  { text: "Excelente serviço recomendo", name: "Claudinei B." },
  { text: "Tudo que preciso acho aqui! Ótimo atendimento", name: "Eric S." },
];

const FAQ_ITEMS: { question: string; answer: string; visible?: boolean; directions?: boolean }[] = [
  { question: "Qual o horário de atendimento?", answer: "Segunda a sexta, das 06:50 às 17:30. Sábado, das 07:00 às 11:30. Domingo, fechado." },
  { question: "Onde fica a loja?", answer: "Avenida Dorvalino dos Santos, 1760 — Centro, Sidrolândia/MS.", directions: true },
  { question: "Não sei o nome da peça. Como peço?", answer: "Sem problema. Tire uma foto da peça, do conector, da ferramenta ou do item e envie pelo WhatsApp. Nossa equipe ajuda a identificar e verifica a disponibilidade." },
  { question: "Vocês fazem prensagem de mangueira hidráulica?", answer: "Sim. A Casa do Produtor faz prensagem de mangueiras de alta pressão, com praticidade e agilidade. Chame no WhatsApp, conte o que você precisa e, se puder, envie uma foto da mangueira e do conector." },
  { question: "Quais produtos vocês têm?", answer: "Parafusos, ferramentas e acessórios, linha agrícola, roçadeiras e itens para roçadeiras, tintas e produtos de limpeza doméstica, agrícola e automotiva. Na seção 'Variedade que acompanha o seu trabalho' você vê fotos de cada categoria." },
  { question: "Vocês atendem empresas e propriedades rurais?", answer: "Sim. A loja atende a cidade e o campo: quem busca solução para casa, oficina, empresa ou propriedade rural." },
  { question: "Como sei se o produto está disponível?", answer: "Chame no WhatsApp com o nome do produto ou uma foto. Nossa equipe confirma a disponibilidade e as opções que temos." },
  { question: "Vale levar a peça antiga ou mandar uma foto?", answer: "Vale. Se puder, leve a peça antiga ou envie uma foto com a medida. Isso ajuda a escolher o item certo, principalmente em parafusos, conectores e peças de reposição." },
  { question: "Vocês entregam?", answer: "[a preencher]", visible: false },
  { question: "Quais as formas de pagamento?", answer: "[a preencher]", visible: false },
];

const FAQ_VISIBLE = FAQ_ITEMS.filter((item) => item.visible !== false);

const FAQ_WHATSAPP_MESSAGE = "Olá! Vim pelo site da Casa do Produtor e tenho uma dúvida.";

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_VISIBLE.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casa do Produtor | Ferragens e soluções em Sidrolândia/MS" },
      {
        name: "description",
        content:
          "Ferragens, ferramentas, parafusos, produtos agrícolas e prensagem de mangueiras hidráulicas em Sidrolândia/MS.",
      },
      { property: "og:title", content: "Casa do Produtor — Soluções para a cidade e para o campo" },
      {
        property: "og:description",
        content: "Produtos, ferramentas e soluções com atendimento próximo em Sidrolândia/MS.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(FAQ_JSON_LD) }],
  }),
  component: Index,
});

function WhatsAppLink({ message, className = "", compact = false }: { message: string; className?: string; compact?: boolean }) {
  const href = BUSINESS.whatsappNumber
    ? `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`
    : undefined;

  const content = (
    <>
      <MessageCircle aria-hidden="true" size={19} />
      <span>{compact ? "WhatsApp" : "Falar pelo WhatsApp"}</span>
    </>
  );

  if (href) {
    return (
      <a className={`button-primary ${className}`} href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button
      className={`button-primary ${className}`}
      type="button"
      onClick={() => window.alert("O número de WhatsApp será informado em breve.")}
      title="Número de WhatsApp aguardando cadastro"
    >
      {content}
    </button>
  );
}

function Reveal({ children, className = "", ...props }: { children: ReactNode; className?: string; "data-depth"?: string }) {
  return <div className={`reveal ${className}`} {...props}>{children}</div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Produtos", "#produtos"],
    ["Serviços", "#servicos"],
    ["Nossa história", "#historia"],
    ["Localização", "#localizacao"],
  ];

  return (
    <header className="site-header">
      <a href="#inicio" className="brand-link" aria-label="Casa do Produtor — início">
        <img src={logoAsset.url} alt="Casa do Produtor — Parafusos e Ferragens" />
      </a>
      <nav className="desktop-nav" aria-label="Navegação principal">
        {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <div className="header-action"><WhatsAppLink message={messages.hero} compact /></div>
      <button className="menu-button" type="button" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <nav className="mobile-nav" aria-label="Navegação móvel">
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<ArrowRight size={18} /></a>)}
        </nav>
      )}
    </header>
  );
}

function Index() {
  const [brandsPaused, setBrandsPaused] = useState(false);
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal, .motion-section");
    const timelineElement = document.querySelector<HTMLElement>(".timeline");
    const timelineItems = document.querySelectorAll<HTMLElement>(".timeline-item");
    const motionElements = document.querySelectorAll<HTMLElement>("[data-depth]");
    const heroElement = document.querySelector<HTMLElement>(".hero-section");
    const serviceElement = document.querySelector<HTMLElement>(".service-section");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const hoseSvg = document.querySelector<SVGSVGElement>(".scroll-hose");
    const updateHose = hoseSvg ? createScrollHose(hoseSvg) : undefined;
    let animationFrame = 0;

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));

    const updateMotion = () => {
      const viewportHeight = window.innerHeight;
      const heroHeight = heroElement?.getBoundingClientRect().height ?? viewportHeight;
      const heroProgress = Math.min(Math.max(window.scrollY / Math.max(heroHeight, 1), 0), 1);
      const mobileFactor = window.innerWidth < 768 ? 0.5 : 1;
      heroElement?.style.setProperty("--hero-photo-shift", `${(heroProgress * 14 * mobileFactor).toFixed(2)}px`);
      heroElement?.style.setProperty("--hero-content-shift", `${(heroProgress * -8 * mobileFactor).toFixed(2)}px`);
      heroElement?.style.setProperty("--hero-content-opacity", (1 - heroProgress * 0.025).toFixed(3));
      document.documentElement.classList.toggle("has-scrolled", window.scrollY > 40);

      // Local transformations of the official source; no cross-page route.
      const hydraulicHeroProgress = reducedMotion.matches ? 0 : heroProgress;
      heroElement?.style.setProperty("--composition-scale", (1 + hydraulicHeroProgress * 0.12 * mobileFactor).toFixed(3));
      heroElement?.style.setProperty("--composition-rotation", `${(hydraulicHeroProgress * -2).toFixed(2)}deg`);
      heroElement?.style.setProperty("--composition-crop", `${(hydraulicHeroProgress * 20 * mobileFactor).toFixed(2)}%`);
      if (serviceElement) {
        const rect = serviceElement.getBoundingClientRect();
        const progress = reducedMotion.matches ? 1 : Math.min(Math.max((viewportHeight - rect.top) / viewportHeight, 0), 1);
        serviceElement.style.setProperty("--composition-scale", (0.92 + progress * 0.08).toFixed(3));
        serviceElement.style.setProperty("--composition-crop", `${((1 - progress) * 20).toFixed(2)}%`);
      }

      motionElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const centerOffset = (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight;
        const depth = Number(element.dataset["depth"] ?? "0");
        const limit = Math.abs(depth) * mobileFactor;
        const shift = Math.min(Math.max(centerOffset * depth * mobileFactor, -limit), limit);
        element.style.setProperty("--depth-shift", `${shift.toFixed(2)}px`);
      });

      if (timelineElement) {
        const timelineRect = timelineElement.getBoundingClientRect();
        const mobileTimeline = window.innerWidth < 768;
        const startLine = viewportHeight * (mobileTimeline ? 0.82 : 0.76);
        const endLine = viewportHeight * (mobileTimeline ? 0.24 : 0.28);
        const travel = Math.max(timelineRect.height + startLine - endLine, 1);
        const progress = Math.min(Math.max((startLine - timelineRect.top) / travel, 0), 1);
        timelineElement.style.setProperty("--timeline-progress", progress.toFixed(3));
        timelineItems.forEach((item, index) => {
          const markerPosition = (index + 0.15) / timelineItems.length;
          const responseWindow = mobileTimeline ? 0.2 : 0.16;
          const itemProgress = Math.min(Math.max((progress - markerPosition) / responseWindow, 0), 1);
          item.style.setProperty("--timeline-item-progress", itemProgress.toFixed(3));
          item.style.setProperty("--timeline-item-opacity", (0.38 + itemProgress * 0.62).toFixed(3));
          item.style.setProperty("--timeline-copy-opacity", (0.42 + itemProgress * 0.58).toFixed(3));
          item.style.setProperty("--timeline-item-shift", `${((1 - itemProgress) * 6).toFixed(2)}px`);
          item.style.setProperty("--timeline-marker-scale", (0.68 + itemProgress * 0.32).toFixed(3));
        });
      }
      updateHose?.(reducedMotion.matches);
    };

    const requestMotionUpdate = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = 0;
        updateMotion();
      });
    };

    document.documentElement.classList.add("motion-ready");
    updateMotion();
    window.addEventListener("scroll", requestMotionUpdate, { passive: true });
    window.addEventListener("resize", requestMotionUpdate);
    document.addEventListener("load", requestMotionUpdate, true);
    reducedMotion.addEventListener("change", requestMotionUpdate);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestMotionUpdate);
      window.removeEventListener("resize", requestMotionUpdate);
      document.removeEventListener("load", requestMotionUpdate, true);
      reducedMotion.removeEventListener("change", requestMotionUpdate);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      document.documentElement.classList.remove("motion-ready");
      document.documentElement.classList.remove("has-scrolled");
    };
  }, []);

  return (
    <div id="inicio" className="site-shell">
      <ScrollHose />
      <Header />
      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-photo-wrap"><img className="hero-photo" src={facadeAsset.url} alt="Fachada da Casa do Produtor na Avenida Dorvalino dos Santos em Sidrolândia" fetchPriority="high" /><span>Loja física · Sidrolândia/MS</span></div>
          <div className="hero-shade" />
          <div className="hero-lines" aria-hidden="true" />
          <div className="hero-content">
            <p className="eyebrow light">Casa do Produtor · Sidrolândia/MS</p>
            <h1 id="hero-title">Soluções para a cidade<br />e para o campo.</h1>
            <p className="hero-copy">Produtos, ferramentas e soluções para o dia a dia, para o trabalho e para a propriedade rural.</p>
            <div className="hero-actions">
              <WhatsAppLink message={messages.hero} />
              <a className="button-ghost" href="#produtos">Conhecer produtos <ArrowDown size={18} /></a>
            </div>
          </div>
          <div className="hero-tag" aria-hidden="true"><span>Desde</span><strong>2020</strong></div>
          <div className="hero-mobile-badges">
            <span className="hero-mobile-since">Desde <strong>2020</strong></span>
            <span className="hero-mobile-location">Loja física · Sidrolândia/MS</span>
          </div>
        </section>

        <section className="section categories-section motion-section" id="produtos" aria-labelledby="categories-title">
          <Reveal className="section-heading split-heading">
            <div><p className="eyebrow">Cidade + campo</p><h2 id="categories-title">Encontre o que<br />você precisa</h2></div>
            <p>Uma seleção pensada para resolver necessidades da casa, oficina, empresa e propriedade rural.</p>
          </Reveal>
          <div className="category-editorial">
            {categories.map(([number, title, description], index) => (
              <Reveal key={title} className={`category-row category-row-${index + 1}`}>
                <a className="category-link" href={`https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(`${messages.product} Tenho interesse em ${title.toLowerCase()}.`)}`} target="_blank" rel="noreferrer" aria-label={`Consultar ${title} pelo WhatsApp`}>
                <span className="category-number">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <ArrowRight aria-hidden="true" />
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="service-section motion-section" id="servicos" aria-labelledby="service-title">
          <div className="service-grid">
            <Reveal className="service-copy" data-depth="-3">
              <div className="service-heading-anchor"><p className="eyebrow light">Serviço especializado</p></div>
              <h2 id="service-title">Prensagem de<br />mangueiras hidráulicas</h2>
              <p>Mais praticidade para quem precisa de uma solução rápida e adequada para mangueiras de alta pressão.</p>
              <WhatsAppLink message={messages.service} />
            </Reveal>
            <Reveal className="service-visual" data-depth="7">
              <img src={pressAsset.url} alt="Máquina de prensagem de mangueiras hidráulicas na Casa do Produtor" loading="lazy" />
              <p>Equipamento real<br />da Casa do Produtor</p>
            </Reveal>
          </div>
        </section>

        <section className="section showcase-section motion-section" aria-labelledby="showcase-title">
          <Reveal className="showcase-intro">
            <p className="eyebrow">Nossa vitrine</p>
            <h2 id="showcase-title">Variedade que acompanha<br />o seu trabalho.</h2>
            <p>Ferramentas, ferragens, equipamentos, produtos agrícolas, limpeza e muito mais.</p>
          </Reveal>
          <div className="showcase-layout">
            <Reveal className="showcase-composition">
              <figure className="showcase-photo showcase-photo-main" data-depth="3">
                <img src={toolsAsset.url} alt="Parede de ferramentas e ferragens da Casa do Produtor" loading="lazy" />
              </figure>
              <figure className="showcase-photo showcase-photo-equipment" data-depth="7">
                <img src={equipmentAsset.url} alt="Equipamentos para cuidado de áreas urbanas e rurais disponíveis na loja" loading="lazy" />
              </figure>
              <figure className="showcase-photo showcase-photo-boots" data-depth="4">
                <img src={bootsAsset.url} alt="Botas de trabalho disponíveis na Casa do Produtor" loading="lazy" />
              </figure>
              <figure className="showcase-photo showcase-photo-paint" data-depth="-5">
                <img src={paintAsset.url} alt="Tintas organizadas nas prateleiras da Casa do Produtor" loading="lazy" />
              </figure>
              <span>Produtos reais. Atendimento próximo.</span>
            </Reveal>
            <Reveal className="showcase-side">
              <div className="stock-list">
                {categories.map(([number, title, description]) => <CategoryPanel key={title} number={number} title={title} description={description} whatsappNumber={BUSINESS.whatsappNumber} />)}
              </div>
              <p>Consulte nossa equipe para verificar opções e disponibilidade.</p>
              <WhatsAppLink message={messages.product} />
            </Reveal>
          </div>
        </section>

        <section className="brands-section" aria-label="Marcas trabalhadas na loja">
          <p>Trabalhamos com marcas em que você confia</p>
          <div className={`brands-marquee${brandsPaused ? " is-paused" : ""}`} tabIndex={0} onPointerDown={(event) => { if (event.pointerType === "touch") setBrandsPaused((paused) => !paused); }}>
            <div className="brands-track">
              <ul className="brands-list">
                {BRANDS.map((brand) => <li key={brand}>{brand}</li>)}
              </ul>
              <ul className="brands-list brands-list-copy" aria-hidden="true">
                {BRANDS.map((brand) => <li key={brand}>{brand}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="section benefits-section" aria-labelledby="benefits-title">
          <Reveal className="section-heading"><p className="eyebrow">Nossos diferenciais</p><h2 id="benefits-title">Mais do que uma loja</h2></Reveal>
          <div className="benefits-grid">
            {[
              [Sparkles, "Variedade", "Produtos para diferentes necessidades da cidade, oficina, empresa e propriedade rural."],
              [Users, "Atendimento próximo", "Uma equipe que busca entender o que cada cliente precisa."],
              [Wrench, "Soluções práticas", "Além dos produtos, oferecemos serviços como a prensagem de mangueiras hidráulicas."],
              [ShieldCheck, "Qualidade", "Produtos selecionados para diferentes necessidades do dia a dia e do trabalho."],
            ].map(([Icon, title, copy]) => {
              const BenefitIcon = Icon as typeof Sparkles;
              return <Reveal className="benefit-item" key={String(title)}><BenefitIcon /><h3>{String(title)}</h3><p>{String(copy)}</p></Reveal>;
            })}
          </div>
        </section>

        {SHOW_REVIEWS && (
          <section className="reviews-section" aria-labelledby="reviews-title">
            <Reveal className="section-heading"><p className="eyebrow light">Clientes</p><h2 id="reviews-title">Quem compra, recomenda</h2></Reveal>
            <div className="reviews-grid">
              {REVIEWS.map((review, index) => (
                <Reveal className="review-card" key={index}>
                  <span className="review-quote" aria-hidden="true">“</span>
                  <span className="review-stars" role="img" aria-label="Avaliação 5 de 5 estrelas">
                    {[0, 1, 2, 3, 4].map((star) => (
                      <svg key={star} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z" /></svg>
                    ))}
                  </span>
                  {review.text && <p>{review.text}</p>}
                  <strong>{review.name}</strong>
                  <small>Avaliação no Google</small>
                </Reveal>
              ))}
            </div>
          </section>
        )}

        <section className="photo-help-section motion-section" aria-labelledby="photo-help-title">
          <Reveal className="photo-help-copy">
            <p className="eyebrow">A gente ajuda</p>
            <h2 id="photo-help-title">Não encontrou<br />o que procura?</h2>
            <p>Não sabe o nome do produto? Envie uma foto da peça, conexão, ferramenta ou item pelo WhatsApp. Nossa equipe pode ajudar a identificar ou verificar a disponibilidade.</p>
            <WhatsAppLink message={messages.photo} />
          </Reveal>
          <Reveal className="photo-steps">
            <div><Camera /><span>01</span><strong>Tire uma foto</strong></div>
            <ArrowDown aria-hidden="true" />
            <div><Send /><span>02</span><strong>Envie pelo WhatsApp</strong></div>
            <ArrowDown aria-hidden="true" />
            <div><Wrench /><span>03</span><strong>Consulte com nossa equipe</strong></div>
          </Reveal>
        </section>

        <section className="history-section" id="historia" aria-labelledby="history-title">
          <div className="history-intro">
            <Reveal><p className="eyebrow light">Nossa trajetória</p><h2 id="history-title">Uma história construída junto com Sidrolândia</h2></Reveal>
            <Reveal><p>A Casa do Produtor nasceu em 2020 com o sonho de construir algo nosso e oferecer à cidade e ao campo um lugar com variedade, qualidade e confiança.</p></Reveal>
          </div>
          <div className="timeline">
            {timeline.map(([year, copy]) => <div className="timeline-item" key={year}><span>{year}</span><div /><p>{copy}</p></div>)}
          </div>
          <details className="history-more">
            <summary>Conhecer mais da nossa história <ArrowDown size={18} /></summary>
            <p>O caminho foi marcado por desafios, aprendizado e pelo apoio de quem acredita no nosso trabalho. A história continua sendo construída todos os dias, junto com clientes, colaboradores, fornecedores e parceiros.</p>
          </details>
        </section>

        <section className="team-section motion-section" aria-labelledby="team-title">
          <div className="team-composition">
            <Reveal className="team-photos" data-depth="5">
              <div className="team-image-large"><TeamFilm fallbackPoster={teamPeopleAsset.url} /></div>
              <div className="team-image-small team-image-complete"><img src={teamCounterAsset.url} alt="Quatro funcionários da Casa do Produtor atrás do balcão da loja" loading="lazy" /></div>
            </Reveal>
            <Reveal className="team-copy" data-depth="-3"><p className="eyebrow">Nossa equipe</p><h2 id="team-title">Quem faz a Casa do Produtor acontecer</h2><p>A Casa do Produtor é feita de pessoas, histórias, trabalho e confiança.</p><div className="team-words" aria-label="Valores da equipe"><span>Pessoas.</span><span>Trabalho.</span><span>Confiança.</span><span>História.</span></div></Reveal>
          </div>
        </section>

        <section className="location-section" id="localizacao" aria-labelledby="location-title">
          <div className="location-photo" data-depth="5"><img src={facadeAsset.url} alt="Fachada da Casa do Produtor na Avenida Dorvalino dos Santos" loading="lazy" /></div>
          <div className="location-info">
            <Reveal><p className="eyebrow">Visite a loja</p><h2 id="location-title">Venha conhecer<br />a Casa do Produtor</h2></Reveal>
            <div className="address-line"><MapPin /><p>{BUSINESS.address}</p></div>
            <div className="hours-block" aria-label="Horário de atendimento">
              <div className="hours-heading"><Clock3 /><strong>Horário de atendimento</strong></div>
              <dl>
                <div><dt>Seg — Sex</dt><dd>06:50 — 17:30</dd></div>
                <div><dt>Sáb</dt><dd>07:00 — 11:30</dd></div>
                <div><dt>Dom</dt><dd>Fechado</dd></div>
              </dl>
            </div>
            <div className="location-actions">
              <a className="button-dark" href={BUSINESS.mapsUrl} target="_blank" rel="noreferrer">Como chegar <ExternalLink size={17} /></a>
              <WhatsAppLink message={messages.location} />
            </div>
          </div>
          <iframe className="map-frame" title="Mapa da Casa do Produtor em Sidrolândia" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Avenida%20Dorvalino%20dos%20Santos%201760%20Centro%20Sidrolandia%20MS&output=embed" />
        </section>

        <section className="final-cta" aria-labelledby="final-title">
          <img src={logoAsset.url} alt="" aria-hidden="true" />
          <Reveal><p className="eyebrow light">Casa do Produtor</p><h2 id="final-title">Precisa de uma solução?</h2><h3>Fale com a Casa do Produtor.</h3><p>Produtos, ferramentas e soluções para a cidade e para o campo.</p><WhatsAppLink message={messages.hero} /></Reveal>
        </section>
      </main>

      <footer>
        <div className="footer-brand"><img src={logoAsset.url} alt="Casa do Produtor" /><p>Soluções para a cidade e para o campo.</p></div>
        <nav aria-label="Links do rodapé"><a href="#inicio">Início</a><a href="#produtos">Produtos</a><a href="#servicos">Serviços</a><a href="#historia">Nossa história</a><a href="#localizacao">Localização</a><a href={`https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(messages.hero)}`} target="_blank" rel="noreferrer">WhatsApp</a></nav>
        <div className="footer-address"><p>{BUSINESS.address}</p><small>© {new Date().getFullYear()} Casa do Produtor</small></div>
      </footer>
      <WhatsAppLink message={messages.hero} className="floating-whatsapp" />
    </div>
  );
}
