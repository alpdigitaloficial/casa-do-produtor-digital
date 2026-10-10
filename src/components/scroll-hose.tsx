// A decorative path only: the two approved photographic compositions remain untouched.
export function ScrollHose() {
  return (
    <svg className="scroll-hose" aria-hidden="true" focusable="false" preserveAspectRatio="none">
      <defs>
        <linearGradient id="scroll-hose-chrome" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" className="hose-chrome-dark" />
          <stop offset=".3" className="hose-chrome-bright" />
          <stop offset=".52" className="hose-chrome-mid" />
          <stop offset=".76" className="hose-chrome-light" />
          <stop offset="1" className="hose-chrome-dark" />
        </linearGradient>
      </defs>
      <path className="scroll-hose-edge" />
      <path className="scroll-hose-body" />
      <path className="scroll-hose-ribs" />
      <g className="scroll-hose-tip">
        <rect x="-23" y="-5.5" width="8" height="11" rx="1" />
        <path d="M -16,-4 -13,-7 -7,-7 -4,-4 -4,4 -7,7 -13,7 -16,4 Z" />
        <rect x="-5" y="-3" width="5" height="6" rx=".7" />
        <path className="scroll-hose-collar" d="M -21,-5 V 5 M -18,-5 V 5" />
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
    const thickness = mobile ? 5 : 9;
    const startX = contentRect.left - origin.left + contentRect.width * (mobile ? .5 : .7);
    const startY = heroRect.bottom - origin.top;
    const contentLeft = categoryRect.left - origin.left;
    // Clamp the gutter at narrow desktop widths rather than moving existing content.
    const gutter = mobile ? 11 : Math.max(11, contentLeft - 34);
    const endX = buttonRect.left - origin.left;
    const endY = buttonRect.top - origin.top + buttonRect.height / 2;
    const turnY = Math.min(listRect.top - origin.top, startY + Math.max(24, (listRect.top - heroRect.bottom) * .4));
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
    tip.setAttribute("transform", `translate(${point.x} ${point.y}) rotate(${angle}) scale(${thickness / 9})`);
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