# CivWiki Monday Newsletter

This is a repo which is essentially just the source to [https://civwiki.news/], a newsletter (which, doesn't get sent, it's merely a blog) released every Monday about the Minecraft Civ server community, which seeks to emulate aspects of real-life civilization and human interaction in Minecraft. Essentially, just an anarchy server but less anarchy.

I personally write the newsletter each weekend, with generous contributions from the server's community. If you'd like to contribute, let me know! 
It's run with the cooperation of [CivWiki](https://civwiki.org), which aims to document these events. I'm still working on backfilling previous editions from 2022 and early 2023, so they're not present here.

---
## Build

Run `pnpm dev` (or `npm dev`) to see the server on localhost. You won't be able to use polls as they're restricted for the live server. [You can, however, create your own backend and database using the polls repository.](https://github.com/specificlanguage/NewsletterPolls)

---

## How it Got Made

While the focus of the repository is on the writing, the website's design has been from the ground up. A previous iteration of the site used Jekyll, but a want for more customization was necessary, after contributors suggested the addition of community polls, which required a backend. Additionally, designing with CSS in the previous site was (a little) cumbersome, and it became frustrating when attempting to add new features.

When it came to rewriting the website, several frameworks, such as Next.js, Svelte, and Gatsby got offered up, but settled on Astro due to
- the component structure, which allows for any JS framework to be used
- dynamic route system for creating new newsletter pages, and most importantly, 
- integration of MDX, which is like JSX but for Markdown.

That last one is important as the newsletter is written on a fast deadline, and MDX makes it easy to write in Markdown while also leveraging components to create interactive features that require some Javascript, such as polls or page scrolling progress bars. The rest however, is pretty simple: 
- it gets deployed to Cloudflare Workers when pushed
- styling is done with Tailwind, which although not necessary, made the site look good fast
- for more complex, interactive components like the polls, I used Svelte because I really like its simplistic structure
