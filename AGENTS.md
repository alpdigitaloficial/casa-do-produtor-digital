<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep page motion coordinated by one passive scroll listener and one animation frame; this preserves smooth mobile scrolling and reduced-motion support.
- Drive timeline progress from its own viewport geometry and keep timeline items outside one-shot reveal effects; this preserves bidirectional scroll feedback.
- Hydraulic media stays section-bound in Hero and service compositions, with crop/scale computed in the shared scroll frame; never use a fixed cross-section journey, which was rejected.
- Centralize pending real media URLs and category messages in the editorial media configuration; absence renders no fabricated hydraulic/product asset and retains the approved team poster.
- Use accessible Radix dialog primitives for the editorial category panels and the design-system Button for their controls; this provides focus return, Escape/outside dismissal and modal scroll locking.
- Team media uses a poster fallback until a real video URL exists, then native controls, playsInline and metadata preload without autoplay; this preserves mobile access and reduced-motion safety.
