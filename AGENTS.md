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

## Serial Pals architecture
- Keep all site content static and centralized in `src/data/content.ts`; the proof of concept intentionally has no backend.
- Use shared folder chrome in the root layout and separate leaf routes for major sections; this keeps navigation and page metadata consistent.
- Reuse the article template through the dynamic file slug route; every file is backed by the same independent content model.
- Use semantic CSS tokens and responsive physical-paper primitives; brand values can change without rewriting page content.
- Reference uploaded artwork through asset pointers and generated editorial imagery through local imports; keep media provenance distinct.
