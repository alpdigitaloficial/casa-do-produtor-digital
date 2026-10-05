import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  Camera,
  Check,
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
import counterTeamAsset from "@/assets/equipe-balcao.jpg.asset.json";
import facadeTeamAsset from "@/assets/equipe-fachada.jpg.asset.json";
import equipmentAsset from "@/assets/equipamentos-casa-do-produtor.jpg.asset.json";
import facadeAsset from "@/assets/fachada-casa-do-produtor.jpg.asset.json";
import toolsAsset from "@/assets/ferramentas-casa-do-produtor.jpg.asset.json";
import pressAsset from "@/assets/prensa-hidraulica-casa-do-produtor.jpg.asset.json";
import paintAsset from "@/assets/tintas-casa-do-produtor.jpg.asset.json";

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
  ["02", "Ferragens", "Itens essenciais para manutenção, montagem e reparos."],
  ["03", "Parafusos", "Opções para diferentes tipos de trabalho e aplicação."],
  ["04", "Ferramentas", "Soluções para oficina, manutenção e trabalho diário."],
  ["05", "Roçadeiras", "Equipamentos para o cuidado de áreas urbanas e rurais."],
  ["06", "Tintas", "Produtos para proteção, acabamento e renovação."],
] as const;

const timeline = [
  ["2020", "Nascimento da Casa do Produtor."],
  ["2021", "Um dos maiores desafios da história: a pandemia."],
  ["Depois", "Aprendizado, superação e crescimento."],
  ["Hoje", "Uma empresa construída por clientes, colaboradores, fornecedores e parceiros."],
] as const;

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
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal, .motion-section");
    const historyElement = document.querySelector<HTMLElement>(".history-section");
    const timelineElement = document.querySelector<HTMLElement>(".timeline");
    const timelineItems = document.querySelectorAll<HTMLElement>(".timeline-item");
    const motionElements = document.querySelectorAll<HTMLElement>("[data-depth]");
    const heroElement = document.querySelector<HTMLElement>(".hero-section");
    let animationFrame = 0;

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));

    const updateMotion = () => {
      const viewportHeight = window.innerHeight;
      const heroProgress = Math.min(Math.max(window.scrollY / Math.max(viewportHeight * 0.72, 1), 0), 1);
      const mobileFactor = window.innerWidth < 768 ? 0.55 : 1;
      heroElement?.style.setProperty("--hero-photo-shift", `${(heroProgress * 8 * mobileFactor).toFixed(2)}px`);
      heroElement?.style.setProperty("--hero-content-shift", `${(heroProgress * -12 * mobileFactor).toFixed(2)}px`);
      heroElement?.style.setProperty("--hero-content-opacity", (1 - heroProgress * 0.04).toFixed(3));
      document.documentElement.classList.toggle("has-scrolled", window.scrollY > 40);

      motionElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const centerOffset = (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight;
        const depth = Number(element.dataset["depth"] ?? "0");
        const limit = Math.abs(depth) * mobileFactor;
        const shift = Math.min(Math.max(centerOffset * depth * mobileFactor, -limit), limit);
        element.style.setProperty("--depth-shift", `${shift.toFixed(2)}px`);
      });

      if (historyElement && timelineElement) {
        const historyRect = historyElement.getBoundingClientRect();
        const timelineRect = timelineElement.getBoundingClientRect();
        const mobileTimeline = window.innerWidth < 768;
        const startLine = mobileTimeline ? viewportHeight * 0.76 : viewportHeight * 0.7;
        const travel = mobileTimeline
          ? Math.max(timelineRect.height * 0.88, 1)
          : Math.max(historyRect.height * 0.58, 1);
        const progress = Math.min(Math.max((startLine - timelineRect.top) / travel, 0), 1);
        timelineElement.style.setProperty("--timeline-progress", progress.toFixed(3));
        timelineItems.forEach((item, index) => {
          const markerPosition = (index + 0.25) / timelineItems.length;
          const responseWindow = mobileTimeline ? 0.2 : 0.16;
          const itemProgress = Math.min(Math.max((progress - markerPosition) / responseWindow, 0), 1);
          item.style.setProperty("--timeline-item-progress", itemProgress.toFixed(3));
          item.style.setProperty("--timeline-item-opacity", (0.38 + itemProgress * 0.62).toFixed(3));
          item.style.setProperty("--timeline-copy-opacity", (0.42 + itemProgress * 0.58).toFixed(3));
          item.style.setProperty("--timeline-item-shift", `${((1 - itemProgress) * 6).toFixed(2)}px`);
          item.style.setProperty("--timeline-marker-scale", (0.68 + itemProgress * 0.32).toFixed(3));
        });
      }
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

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestMotionUpdate);
      window.removeEventListener("resize", requestMotionUpdate);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      document.documentElement.classList.remove("motion-ready");
      document.documentElement.classList.remove("has-scrolled");
    };
  }, []);

  return (
    <div id="inicio" className="site-shell">
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
              <p className="eyebrow light">Serviço especializado</p>
              <h2 id="service-title">Prensagem de<br />mangueiras hidráulicas</h2>
              <p>Mais praticidade para quem precisa de uma solução rápida e adequada para mangueiras de alta pressão.</p>
              <WhatsAppLink message={messages.service} />
            </Reveal>
            <Reveal className="service-visual" data-depth="7">
              <img src={pressAsset.url} alt="Prensa hidráulica real utilizada pela Casa do Produtor na prensagem de mangueiras" loading="lazy" />
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
              <figure className="showcase-photo showcase-photo-paint" data-depth="-5">
                <img src={paintAsset.url} alt="Tintas organizadas nas prateleiras da Casa do Produtor" loading="lazy" />
              </figure>
              <span>Produtos reais. Atendimento próximo.</span>
            </Reveal>
            <Reveal className="showcase-side">
              <div className="stock-list">
                {categories.map(([, title]) => <span key={title}><Check size={15} />{title}</span>)}
              </div>
              <p>Consulte nossa equipe para verificar opções e disponibilidade.</p>
              <WhatsAppLink message={messages.product} />
            </Reveal>
          </div>
        </section>

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

        <section className="history-section" id="historia" aria-labelledby="history-title">
          <div className="history-intro">
            <Reveal><p className="eyebrow light">Nossa trajetória</p><h2 id="history-title">Uma história construída junto com Sidrolândia</h2></Reveal>
            <Reveal><p>A Casa do Produtor nasceu em 2020 com o sonho de construir algo nosso e oferecer à cidade e ao campo um lugar com variedade, qualidade e confiança.</p></Reveal>
          </div>
          <div className="timeline">
            {timeline.map(([year, copy]) => <Reveal className="timeline-item" key={year}><span>{year}</span><div /><p>{copy}</p></Reveal>)}
          </div>
          <details className="history-more">
            <summary>Conhecer mais da nossa história <ArrowDown size={18} /></summary>
            <p>O caminho foi marcado por desafios, aprendizado e pelo apoio de quem acredita no nosso trabalho. A história continua sendo construída todos os dias, junto com clientes, colaboradores, fornecedores e parceiros.</p>
          </details>
        </section>

        <section className="team-section motion-section" aria-labelledby="team-title">
          <div className="team-composition">
            <Reveal className="team-image-large" data-depth="5"><img src={facadeTeamAsset.url} alt="Equipe completa da Casa do Produtor" loading="lazy" /></Reveal>
            <Reveal className="team-image-small" data-depth="8"><img src={counterTeamAsset.url} alt="Equipe de atendimento da Casa do Produtor" loading="lazy" /></Reveal>
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