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
- Render the Hero-to-press hydraulic journey as one fixed, pointer-free element whose route is computed inside the shared scroll frame; this preserves visual continuity and interaction safety.
