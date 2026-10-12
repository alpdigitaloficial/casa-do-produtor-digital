// A decorative path only: the approved service photograph remains untouched.
export function ScrollHose() {
  return (
    <svg className="scroll-hose" aria-hidden="true" focusable="false" preserveAspectRatio="none">
      <defs>
        <linearGradient id="scroll-hose-chrome" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" className="hose-chrome-bright" />
          <stop offset=".35" className="hose-chrome-mid" />
          <stop offset=".6" className="hose-chrome-dark" />
          <stop offset="1" className="hose-chrome-light" />
        </linearGradient>
      </defs>
      <path className="scroll-hose-edge" />
      <path className="scroll-hose-body" />
      <path className="scroll-hose-ribs" />
      <g className="scroll-hose-tip">
        <rect x="-38" y="-8" width="16" height="16" rx="2" />
        <path className="scroll-hose-collar" d="M-34 -8V8M-30 -8V8M-26 -8V8" strokeOpacity=".35" />
        <rect x="-22" y="-5.5" width="12" height="11" />
        <rect x="-10" y="-11" width="12" height="22" rx="2" />
        <path className="scroll-hose-collar" d="M-10 -5.5H2M-10 5.5H2" strokeOpacity=".45" />
      </g>
      <rect className="scroll-hose-arrival" rx="6" />
    </svg>
  );
}

export function createScrollHose(svg: SVGSVGElement) {
  const hero = document.querySelector<HTMLElement>(".hero-section");
  const content = document.querySelector<HTMLElement>(".hero-content");
  const categories = document.querySelector<HTMLElement>(".categories-section");
  const list = document.querySelector<HTMLElement>(".category-editorial");
  const target = document.querySelector<HTMLElement>(".service-copy .button-primary");
  const shell = document.querySelector<HTMLElement>(".site-shell");
  const paths = Array.from(svg.querySelectorAll<SVGPathElement>(":scope > path"));
  const body = svg.querySelector<SVGPathElement>(".scroll-hose-body");
  const tip = svg.querySelector<SVGGElement>(".scroll-hose-tip");
  const ring = svg.querySelector<SVGRectElement>(".scroll-hose-arrival");
  let previousPath = "";
  let length = 0;
  let arrived = false;

  return (reducedMotion: boolean) => {
    if (!hero || !content || !categories || !list || !target || !shell || !body || !tip || !ring) return;
    const origin = shell.getBoundingClientRect();
    const heroRect = hero.getBoundingClientRect();
    const contentRect = content.getBoundingClientRect();
    const categoryRect = categories.getBoundingClientRect();
    const listRect = list.getBoundingClientRect();
    const buttonRect = target.getBoundingClientRect();
    const mobile = window.innerWidth < 768;
    const narrowMobile = window.innerWidth < 720;
    const thickness = narrowMobile ? 4 : mobile ? 5 : 9;
    const startX = contentRect.left - origin.left + contentRect.width * (mobile ? .5 : .7);
    const startY = heroRect.bottom - origin.top;
    const contentLeft = categoryRect.left - origin.left;
    // Clamp the gutter at narrow desktop widths rather than moving existing content.
    const gutter = narrowMobile ? 6 : mobile ? 11 : Math.max(thickness / 2 + 1, contentLeft - 34);
    const endX = buttonRect.left - origin.left;
    const endY = buttonRect.top - origin.top + buttonRect.height / 2;
    const categoryPadding = Number.parseFloat(getComputedStyle(categories).paddingTop) || 0;
    const turnY = Math.min(listRect.top - origin.top, categoryRect.top - origin.top + Math.max(12, categoryPadding - 14));
    const listTop = listRect.top - origin.top;
    const listBottom = Math.min(listRect.bottom - origin.top, endY - 36);
    const waveSpan = Math.max(0, listBottom - listTop);
    const wave = mobile ? 0 : Math.min(16, Math.max(0, gutter - thickness));
    const d = [
      `M ${startX} ${startY}`,
      `C ${startX} ${turnY}, ${gutter} ${startY}, ${gutter} ${turnY}`,
      `L ${gutter} ${listTop}`,
      `C ${gutter - wave} ${listTop + waveSpan * .08}, ${gutter - wave} ${listTop + waveSpan * .17}, ${gutter} ${listTop + waveSpan * .25}`,
      `C ${gutter + wave} ${listTop + waveSpan * .33}, ${gutter + wave} ${listTop + waveSpan * .42}, ${gutter} ${listTop + waveSpan * .5}`,
      `C ${gutter - wave} ${listTop + waveSpan * .58}, ${gutter - wave} ${listTop + waveSpan * .67}, ${gutter} ${listTop + waveSpan * .75}`,
      `C ${gutter + wave} ${listTop + waveSpan * .83}, ${gutter + wave} ${listTop + waveSpan * .92}, ${gutter} ${listBottom}`,
      `L ${gutter} ${Math.max(listBottom, endY - 30)}`,
      `C ${gutter} ${endY}, ${gutter} ${endY}, ${endX} ${endY}`,
    ].join(" ");
    if (d !== previousPath) {
      paths.forEach(path => path.setAttribute("d", d));
      length = body.getTotalLength();
      previousPath = d;
    }
    const width = shell.clientWidth;
    const height = shell.scrollHeight;
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    svg.setAttribute("width", String(width));
    svg.setAttribute("height", String(height));
    svg.style.setProperty("--scroll-hose-width", String(thickness));
    const startScroll = Math.max(0, heroRect.bottom + window.scrollY - window.innerHeight * .65);
    const endScroll = Math.max(startScroll + 1, buttonRect.top + window.scrollY + buttonRect.height / 2 - window.innerHeight * .45);
    const progress = reducedMotion ? 1 : Math.min(1, Math.max(0, (window.scrollY - startScroll) / (endScroll - startScroll)));
    svg.dataset["progress"] = progress.toFixed(4);
    svg.dataset["startScroll"] = String(startScroll);
    svg.dataset["endScroll"] = String(endScroll);
    svg.dataset["reducedMotion"] = String(reducedMotion);
    svg.style.visibility = progress > 0 ? "visible" : "hidden";
    paths.slice(0, 2).forEach(path => {
      path.setAttribute("stroke-dasharray", `${length} ${length}`);
      path.setAttribute("stroke-dashoffset", String(length * (1 - progress)));
    });
    // Short visible ribs, with the unrevealed tail excluded from the dash pattern.
    const visibleLength = length * progress;
    const spacing = thickness * 2.8;
    const rib = thickness * .22;
    const count = Math.floor(visibleLength / spacing);
    const ribs = Array.from({ length: count }, () => `${rib} ${spacing - rib}`).join(" ");
    paths[2]?.setAttribute("stroke-dasharray", `${ribs} 0 ${length + 1}`);
    const point = body.getPointAtLength(visibleLength);
    const before = body.getPointAtLength(Math.max(0, visibleLength - 1));
    const after = body.getPointAtLength(Math.min(length, visibleLength + 1));
    const angle = Math.atan2(after.y - before.y, after.x - before.x) * 180 / Math.PI;
    const scale = thickness / 9;
    // The supplied nut extends two units past its origin: align its front to the path tip.
    const radians = angle * Math.PI / 180;
    // Keep the collar's cross-section inside the narrow gutter's text clearance.
    tip.setAttribute("transform", `translate(${point.x - 2 * scale * Math.cos(radians)} ${point.y - 2 * scale * Math.sin(radians)}) rotate(${angle}) scale(${scale} ${scale * (narrowMobile ? .75 : 1)})`);
    tip.setAttribute("opacity", progress > 0 ? "1" : "0");
    ring.setAttribute("x", String(endX - 4));
    ring.setAttribute("y", String(buttonRect.top - origin.top - 4));
    ring.setAttribute("width", String(buttonRect.width + 8));
    ring.setAttribute("height", String(buttonRect.height + 8));
    if (progress >= .99 && !reducedMotion) {
      if (!arrived) ring.classList.add("is-pulsing");
      arrived = true;
    } else {
      ring.classList.remove("is-pulsing");
      arrived = false;
    }
  };
}