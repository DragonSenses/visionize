# Architectural Decision Log for **Visionize**

***My aim in writing this document was to share the positive impact it made on me with you.***

- An architecture decision log (**ADL**) is the collection of all ADRs created and maintained for a particular project (or organization).

- An architectural decision record (**ADR**) is a document that captures an important architectural decision made along with its context and consequences. 

- An architecture decision (**AD**) is a software design choice that addresses a significant requirement.

This file isn't the formal document mentioned above, but it's similiar. I'm also really fond of the name "Architectural Decision Record", which gives it that extra level of sophistication.

This is simply the documentation for the process of building the project. This is like my `journey.md` files that come with my previous projects, but this time I will also explain the rationale behind certain choices and design decisions made while making this project.

I've really start to recognize the full worth of (appreciate) documentation, especially ones like ADR that facilitate the [onboarding process](https://en.wikipedia.org/wiki/Onboarding). 

Here are some links if you are interested in learning more about ADR:

- [Architecture decision record (ADR) - GitHub](https://github.com/joelparkerhenderson/architecture-decision-record)
- [ADR process - AWS Prescriptive Guidance](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)
- [Architecture decision records overview - Google Cloud](https://cloud.google.com/architecture/architecture-decision-records)
- [Getting Started with Architecture Decision Records | Blog - Ardalis](https://ardalis.com/getting-started-with-architecture-decision-records/)
- [1. Record architecture decisions - Code With Engineering Playbook](https://microsoft.github.io/code-with-engineering-playbook/design/design-reviews/decision-log/doc/adr/0001-record-architecture-decisions/)

With that out of the way, let's move on to development.

# Visionize

*Visualize* and *realize* your vision with Visionize, a task management app that will help you reach your goals.

Inspired by the [Kanban](https://en.wikipedia.org/wiki/Kanban_(development)) developmentt process, allows users to vieew their progress and process, from start to finish.

## Specifications

- Auth 
- Organizations / Workspaces
- Board creation
- Unsplash API for random beautiful cover images
- Activity log for entire organization
- Board rename and delete
- List creation
- List rename, delete, drag & drop reorder and copy
- Card creation
- Card description, rename, delete, drag & drop reorder and copy
- Card activity log
- Board limit for every organization
- Stripe subscription for each organization to unlock unlimited boards
- Landing page
- MySQL DB
- Prisma ORM
- shadcnUI & TailwindCSS

## Technologies

The technologies I plan to use:

Programming Language
- TypeScript

Browsers
  - Google Chrome
  - Microsoftt Edge

Code Editor
- VSCode
- Vim

Front-End
- Next.js 14's App Router
- Tailwind CSS
- [shadcn/ui](https://ui.shadcn.com/)
- zustand (global state management)

Database
- MySQL
- PlanetScale
- Prisma (ORM)

Payment and Billing
- Stripe

Authentication
- Clerk

HTTP Client
- Axios


## Discussion on why each tech was used

- Next.js 14 App Router is my new favorite way to create front-end applications.

  - [Next.js 14](https://nextjs.org/blog/next-14) released around Oct. 2023, yet my previous projects only used Next.js 13. 
  - I wanted to incorporate its latest features such as: *partial prerendering* and *server actions*.

- Tailwind CSS is another favorite choice, I prefer the ease of styling and responsive design.

- [shadcn/ui](https://ui.shadcn.com/) has become ny favorite collection of re-usable components
  - We can build our own component system and not be dependent on any 3rd party npm library which needs to be updated and maintained.


## Project configuration

Let's get started with [Next.js 14 - App Router](https://nextjs.org/docs).

- [Nextjs Installation](https://nextjs.org/docs/getting-started/installation)

```sh
npx create-next-app@latest visionize
```

Now we answer the prompts that defines the set up of our project

```sh
√ Would you like to use TypeScript? ... No / [Yes]
√ Would you like to use ESLint? ... No / [Yes]
√ Would you like to use Tailwind CSS? ... No / [Yes]
√ Would you like to use `src/` directory? ... [No] / Yes
√ Would you like to use App Router? (recommended) ... No / [Yes]
√ Would you like to customize the default import alias (@/*)? ... [No] / Yes
```

Initialize Next.js 14 project

- This commit sets up the basic structure and configuration for a nextjs 14 project with the following setup:
- Typescript, ESLint, TailwindCSS
- App Router

The next step is to initialize [shadcn/ui](https://ui.shadcn.com/docs/installation/next).

```sh
npx shadcn-ui@latest init
```

This should give us the following prompts

```sh
Need to install the following packages:
  shadcn-ui@0.6.0
Ok to proceed? (y) y
√ Would you like to use TypeScript (recommended)? ... no / *yes*
√ Which style would you like to use? » *Default*
√ Which color would you like to use as base color? » *Neutral*
√ Where is your global CSS file? ... *app/globals.css*
√ Would you like to use CSS variables for colors? ... no / *yes*
√ Are you using a custom tailwind prefix eg. tw-? (Leave blank if not) ...
√ Where is your tailwind.config.js located? ... *tailwind.config.ts*
√ Configure the import alias for components: ... *@/components*
√ Configure the import alias for utils: ... *@/lib/utils*
√ Are you using React Server Components? ... no / *yes*
√ Write configuration to components.json. Proceed? ... *yes*
```

Initialize shadcn-ui@0.6.0

Let's take a closer look at the `/lib/utils.ts` file that `shadcn/ui` installed. Going to add comments to describe `utils.ts` and the `cn` function that it contains.

The `cn()` function allows us to safely combine and merge tailwind classes. Useful for applying both conditional and merged class names to a React component or element. e.g., we may have a specific class for a `success` state, and another class for the `error` state.

```ts
/* A utility function that combines clsx and tailwind-merge to create a single
string of class names */
import { type ClassValue, clsx } from "clsx";
/* twMerge is a function that takes one or more strings of Tailwind CSS 
classes and returns a single string of merged classes, following the 
Tailwind CSS rules. twMerge is useful for combining and overriding class 
names from different sources, such as props, state, or theme */
import { twMerge } from "tailwind-merge";

/**
 * Export the cn helper function, which takes one or more ClassValue arguments
 * and returns a single string of merged class names. Useful for applying both
 * conditional and merged class names to a React component or element.
 * @param inputs ClassValue is a type that represents a valid CSS class name
 * @returns a single string of merged classnames
 */
export function cn(...inputs: ClassValue[]) {
  // Use clsx to convert the inputs to a single string of class names
  // Use twMerge to merge the class names according to the Tailwind CSS rules
  // Return the merged string of class names
  return twMerge(clsx(inputs));
}
```