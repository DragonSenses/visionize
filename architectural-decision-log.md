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

Inspired by the [Kanban](https://en.wikipedia.org/wiki/Kanban_(development)) development process, allows users to vieew their progress and process, from start to finish.

Currently, this project is just a way to learn and implement and practice skills and is not meant for commercial use. Certain design decisions made here favor ease of development over costs in service (e.g., Clerk as authentication as a service as opposed to a self-hosting solution) so may not be lucrative in the long-term. See section on [commercial feasibility](#commercial-feasibility) for more discussion on service pricing, commercial feasaibility, and alternatives to improve it.

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
  - Microsoft Edge

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
- Clerk*
- *For now Clerk is fine to develop quickly, but may switch to [Passportjs](https://www.passportjs.org/docs/)
- [Passportjs | Better Documentation](https://github.com/jwalton/passport-api-docs)

HTTP Client
- Axios

Packages
-

## Discussion on tech design choices

- Next.js 14 App Router is my new favorite way to create front-end applications.

  - [Next.js 14](https://nextjs.org/blog/next-14) released around Oct. 2023, yet my previous projects only used Next.js 13. 
  - I wanted to incorporate its latest features such as: *partial prerendering* and *server actions*.

- Tailwind CSS is another favorite choice, I prefer the ease of styling and responsive design.

- [shadcn/ui](https://ui.shadcn.com/) has become ny favorite collection of re-usable components
  - We can build our own component system and not be dependent on any 3rd party npm library which needs to be updated and maintained.

## Commercial Feasibility

Add note on service pricing to commercial feasibility

Explain why services such as Clerk is not a viable option for visionize in the long-term due to its high per-user cost. Compare Clerk's pricing with other authentication providers and suggest alternatives.

A collaboration app that uses organizations even on a decent free-to-paid plan conversion rate, we can take a look at the costs. $0.02 per Monthly Active User (MAU) after 10,000 with $25 on the pro plan. Then we include the cost for every additional MAO (Monthly Active Organization) for $1 each. Not to mention all the overhead costs for additional features such as "authentication add-on" and more, then for a small business it is no longer feasible to use Clerk. Because this assumes that every user is a paid user which is not the case for this app.

Some alternatives to authentication are:

1. Authentication Providers
  - Auth0, Okta, Firebase, Duo

2. Self-hosted authentication servers
  - [Supertokens](https://supertokens.com/)
  - [Authelia](https://www.authelia.com/)
  - [Authentik](https://goauthentik.io/)
  - [FusionAuth](https://fusionauth.io/)

To self-host your own authentication server, you need to:

- Choose a software or library that suits your needs and supports the protocols and features you want, such as OAuth, OpenID Connect, SAML, JWT, etc.

- Install and configure the software or library on your server or cloud platform, following the documentation and best practices.

- Integrate the software or library with your web application, using the SDKs, APIs, or plugins provided.

- Test and monitor your authentication server, ensuring its security, performance, and reliability.

Also in the Next.js tutorial it covers the authentication using nextauth ([Nextjs adding authentication](https://nextjs.org/learn/dashboard-app/adding-authentication)).

## Coding style & naming conventions

Here I'd like to list out some general rules I'd like to set for myself to ensure consistent coding style and naming conventions. I'll be updating this section intermittently.

Enforcing these rules keeps the codebase consistent and reduces overhead when thinking about how to name files and variables.

### Coding Style

- Favor vertical code hierarchy over horizontal

### Naming Conventions

In this React, Typescript project here is some rules to adhere to:

<table>
  <tr>
    <td>Case</td>
    <td>Subject</td>
    <td>Example</td>
  </tr>
  <tr>
    <td>camelCase (start with lowercase letter and capitalizes the first letter of each subsequent word)</td>
    <td>Code: variables, functions, objects, etc.</td>
    <td>someVariable, doSomething, myId</td>
  </tr>
  <tr>
    <td>PascalCase (Uppercase with no separators, first letter must be uppercase)</td>
    <td>Components</td>
    <td>App, Layout, Navbar, CardList </td>
  </tr>
  <tr>
    <td>kebab-case (lowercase words separated by hypens)</td>
    <td>File names that are NOT components</td>
    <td>pages, API routes, utils, etc.</td>
  </tr>
  <tr>
    <td>Square brackets ([ ])</td>
    <td>Dynamic route segments</td>
    <td>[id], [slug], [boardId], etc.</td>
  </tr>
  <tr>
    <td>Underscore ( _ )</td>
    <td>Special files, or private properties</td>
    <td>_app, _document, _error, etc.</td>
  </tr>
</table>

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

### Developing the app

Start with the `globals.css`, and set all `html`, `body` and `:root` elements to 100% of the viewport height.

`app\globals.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body,
:root {
  height: 100%;
}

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;

/* ... */
```

## Why Next.js?

Some Next.js app router features:

- [Pages and Layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)
- [Route Groups](https://nextjs.org/docs/app/building-your-application/routing/route-groups)
- [Dynamic Routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)
- [Catch-all Segments](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#catch-all-segments)
- [API Routes](https://nextjs.org/docs/app/api-reference/file-conventions/route)
  - [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)


### Creating Routes

[Creating routes](https://nextjs.org/docs/app/building-your-application/routing/defining-routes#creating-routes)

Next.js uses a file-system based router where folders are used to define routes.

- Each folder represents a route segment that maps to a URL segment. To create a nested route, you can nest folders inside each other.

- A special `page.js` file is used to make route segments publicly accessible.

[Pages in Next.js](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages)

- A page is UI that is unique to a route. You can define pages by exporting a component from a page.js file. Use nested folders to define a route and a page.js file to make the route publicly accessible.

Every page component should be exported as default, becauses of the file-system based routing, it needs to know which component is the default one for each page.

### Project Structure

Using App router, we can see all the use cases for how to name our folders and files for our project.

- [Next.js Project Structure | Reference](https://nextjs.org/docs/getting-started/project-structure)

Another reference is:

- [Next.js Routing](https://nextjs.org/docs/app/building-your-application/routing)

As we can see in the [documentation](https://nextjs.org/docs/app/building-your-application/routing#roles-of-folders-and-files), Next.js uses a file-system based router where:

- Folders are used to define routes. A route is a single path of nested folders, following the file-system hierarchy from the root folder down to a final leaf folder that includes a page.js file.

- Files are used to create UI that is shown for a route segment.

So in order to organize our project without affecting routing, we need to use [Route Groups and Private Folders](https://nextjs.org/docs/getting-started/project-structure#route-groups-and-private-folders) which is denoted by `(folder)` and `_folder` respectively.

#### Next.js exports

### On to project development

Let's look at the entry point to our application, the home page. We'll remove the boilerplate that it shipped with and keep it simple, a `Home` component that returns a `div`.

`app\page.tsx`
```tsx
export default function Home() {
  return (
    <div className="text-sky-500">
      Visionize
    </div>
  )
}
```

### Metadata, HTML `head` and SEO

One thing to make sure to update is the metadata. In most web pages, we have a document meta data thats set in the `<head>` HTML element which adds titles, scripts, and stylesheets. For example, we can set the title (the text on top of a browser tab).

- [HTML head element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head)
- [Metadata | Nextjs Reference](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Metadata Object | Reference](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)

Next.js has a Metadata API that can be used to define your application metadata (e.g. `meta` and `link` tags inside your HTML head element) for improved SEO and web shareability.

The meta description should consist of the following elements:

- The name of your app and its main feature (kanban-style productivity app)
- The benefit of using your app (turn your vision into reality)
- The main functionalities of your app (boards, lists, and cards)
- A call to action (try Visionize for free today)

```sh
Visionize is a kanban-style productivity app that helps you turn your vision into reality. Plan, prioritize, and execute your goals with boards, lists, and cards. Visionize your tasks with visionary kanban boards. Try Visionize for free today.
```
May even mention a catchy slogan such as "*Visionize your tasks with visionary kanban boards*". As we want to draw the connection between visonary (i.e., (especially of a person) thinking about or planning the future with imagination or wisdom) and visual representation of the tasks.

Let's add the static metadata to our global layout. Inside `app\layout.tsx`, we modify the properties of the `metadata` object. 

```tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Visionize',
  description: `Visionize is a kanban-style productivity app that helps you
  turn your vision into reality. Plan, prioritize, and execute your goals
  with boards, lists, and cards. Visionize your tasks with visionary kanban
  boards. Try Visionize for free today.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

With that we set our static metadata object which now properly sets the `<head>` element.

Let's make a `config` so we can have dynamic metadata.

- [Dynamic Metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata#dynamic-metadata)

#### Separation of concerns - Metadata

The CS concept of separation is also known as **separation of concerns**. It is a design principle for separating a computer program into distinct sections, each addressing a separate concern, a set of information that affects the code of a computer program. Separation of concerns can improve the modularity, readability, reusability, and maintainability of the code, as well as reduce the complexity and potential errors.

One way to achieve separation of concerns is to use modules, which are units of code that encapsulate some functionality and have a well-defined interface. Modules can be imported and used by other modules, without exposing their implementation details. For example, the `siteConfig` module that will define an object that contains the name and description of our app. 

This object can be used by other modules, such as the `RootLayout` component, to customize the metadata of our pages. **By separating the configuration data from the presentation logic**, you can easily change the app name or description without affecting the rest of the code. You can also reuse the `siteConfig` module in other projects that need similar functionality.

Create a folder named `config` at the root of the project, then create a file named `site.ts` inside. We create and export the object named `siteConfig`, which will have the same contents as our static metadata object we specified in our root layout. 

`/config`
```ts
export const siteConfig = {
  name: "Visionize",
  description: `Visionize is a kanban-style productivity app that helps you
  turn your vision into reality. Plan, prioritize, and execute your goals
  with boards, lists, and cards. Visionize your tasks with visionary kanban
  boards. Try Visionize for free today.`,
};
```

Why did we do this? Well later on when we have authentication and user is signed-in, then we want them to skip the landing page and go straight to the application. In that application they will have a different title. By separating the configuration data from presentation logic, we can now do this a lot easier and present the `head` and metadata differently depending on the user.

Let's parameterize the metadata in our root layout now using the `siteConfig`.

```tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { siteConfig } from '@/config/site'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: `Visionize is a kanban-style productivity app that helps you
  turn your vision into reality. Plan, prioritize, and execute your goals
  with boards, lists, and cards. Visionize your tasks with visionary kanban
  boards. Try Visionize for free today.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

This code is using the **config-based metadata** [feature of Next.js](https://nextjs.org/docs/app/building-your-application/optimizing/metadata), which allows you to define your application metadata (such as title and description) for improved SEO and web shareability. 

The `metadata` object t exported from the `page.tsx` file contains the following fields:

- `title`: an object that specifies the title of your page. It has two properties:
    - `default`: the default title of your page, which is the name of your app (`Visionize`) from the `siteConfig` object that you imported.
    - `template`: a template string that can be used to generate dynamic titles based on the current route. It uses `%s` as a placeholder for the route-specific title, and appends the app name after a `|` character. For example, if the route-specific title is `Home`, the template will produce `Home | Visionize`.
- `description`: a string that describes your app and its features. This will be used as the content of the `<meta name="description">` tag in the `<head>` element of your page.

The `RootLayout` component that you exported as the default export from the `page.tsx` file is a **Server Component** that renders the `<html>` and `<body>` elements of your page. It also imports the `Inter` font from Google Fonts and applies it to the `<body>` element using the `inter.className` property. The `RootLayout` component takes a `children` prop, which is the content of your page, and renders it inside the `<body>` element.

##### Add favicon to customized metadata

To change the favicon for the site, we can also specify it inside our metadata.

```tsx
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/logo.svg",
      href: "/logo.svg",
    }
  ],
};
```

This will set the favicon to the `/logo.svg` from the public folder.

## Landing Page

Better yet, we should create an organizational folder named `(landing)` and move the `page.tsx` in there. Next rename the function to `LandingPage`.

`app\(landing)\page.tsx`
```tsx
import React from 'react';

export default function LandingPage() {
  return (
    <div>page</div>
  )
}
```

A landing page is a standalone web page that is created for a specific marketing or advertising campaign. It has a single goal or call to action, such as capturing leads or making sales.

A marketing page is a more general term that can refer to any web page that is used to promote a product, service, or brand. A marketing page can have multiple goals or links, such as providing information, building trust, or directing visitors to other page.

A landing page is a type of marketing page, but not all marketing pages are landing pages. For example, a homepage is a marketing page that showcases a brand and its offerings, but it is not a landing page because it does not have a specific campaign goal or a clear call to action. A landing page, on the other hand, is designed to persuade visitors to take one action, such as signing up for a free trial, downloading an ebook, or buying a product.

Next, create a specific layout for the `LandingPage`. Create `layout.tsx` inside `(landing)`, a `LandingLayout` component which accepts a `children` prop that will be populated with a child page.

`app\(landing)\layout.tsx`
```tsx
const LandingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default LandingLayout;
```

Next let's give the `LandingLayout` some styles, `h-full` and `bg-slate-100`. Wrap the `children` in a `<main>` with the same background color, and padding for both the top and bottom side. The padding is there for the components `Navbar` and `Footer` that we will add later, for now we'll add comments to mark as indicators for where it should be.

`app\(landing)\layout.tsx`
```tsx
const LandingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-full bg-slate-100">
      {/* Navbar */}
      <main className="pt-40 pb-20 bg-slate-100">
        {children}
      </main>
      {/* Footer */}
    </div>
  );
};

export default LandingLayout;
```

Let's develop the `LandingPage`.

- Center the contents inside the element using `flex-col`
- Add a `Medal` icon from `lucide-react`
- Add some text right under that

`app\(landing)\page.tsx`
```tsx
import React from 'react';
import { Medal } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className='flex items-center justify-center flex-col'>
      <div className='flex items-center justify-center flex-col'>
        <div>
          <Medal className='h-6 w-6 mr-2'/>
          Achieve more with <strong><em>Visionize</em></strong>, the ultimate task management app
        </div>
      </div>
    </div>
  )
}
```

Instead of a catch-phrase, let's change it to a badge. Reduce the text to something shorter. Let's also style the innermost `div` with some amber coloring, box shadow and slightly rounded corners. Switch the icons up to symbolically represent what the app is clsoer too.

`lucide-react` has icons for `Kanban`, this better conveys the purpose of the app.

```tsx
import React from 'react';
import { ClipboardCheck, KanbanSquare } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className='flex items-center justify-center flex-col'>
      <div className='flex items-center justify-center flex-col'>
        <div className='mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase'>
          <KanbanSquare className='h-6 w-6 mr-2'/>
          <span className='mr-1'><strong>Visionize</strong></span> your tasks
          <ClipboardCheck className='h-6 w-6 mx-2'/>
        </div>
      </div>
    </div>
  )
}
```

Add an `h1` as a sibling to the innermost `div`, and another `div` sibling. We will add some more text as marketing and descriptive phrases to describe the project.

```tsx
export default function LandingPage() {
  return (
    <div className='flex items-center justify-center flex-col'>
      <div className='flex items-center justify-center flex-col'>
        <div className='mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase'>
          <KanbanSquare className='h-6 w-6 mr-2'/>
          Kanban your way
          <ClipboardCheck className='h-6 w-6 mx-2'/>
        </div>
        <h1 className='text-3xl md:text-6xl text-center text-neutral-800 mb-6'>
          <span className='mr-1'><strong>Visionize</strong></span> your tasks
        </h1>
        <div className='text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit'>
          Turn your vision into reality.
        </div>
      </div>
    </div>
  )
}
```

Going to brainstorm some ideas of some promotional text I could use here. Visionize allows for: project management, task management, brainstorming, resource hub, meetings and onboarding.

Let's add another `div` with promotional text.

```tsx
import React from 'react';
import { ClipboardCheck, KanbanSquare } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className='flex items-center justify-center flex-col'>
      <div className='flex items-center justify-center flex-col'>
        <div className='mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase'>
          <KanbanSquare className='h-6 w-6 mr-2'/>
          Kanban your way
          <ClipboardCheck className='h-6 w-6 mx-2'/>
        </div>
        <h1 className='text-3xl md:text-6xl text-center text-neutral-800 mb-6'>
          <span className='mr-1'><strong>Visionize</strong></span> your tasks
        </h1>
        <div className='text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit'>
          Turn your vision into reality.
        </div>
      </div>
      <div className='text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto'>
        Fight mediocrity with Visionize. With just boards, lists and cards you can 
        get a clear overview of your tasks. Then you can plan, prioritize, and
        execute your goals with confidence.      
        You can drag and drop tasks, add labels and due dates, attach files 
        and comments, and more.
      </div>
    </div>
  )
}
```

### Landing Page - Button component

Install [shadcn/ui - Button](https://ui.shadcn.com/docs/components/button) component.

```sh
npx shadcn-ui@latest add button
```

Notice that this installed two things: `components/ui/button.tsx` and a package named `@radix-ui-react/slot` as a dependency. Let's break it down, starting with the latter.

- [Radix-ui/react-slot](https://www.radix-ui.com/primitives/docs/utilities/slot) is a React component that merges its props onto its immediate child. It can be used to create your own asChild API, which allows you to render a component as a child of another component. 
  - For example, you can use radix-ui/react-slot to create a custom button component that can accept an anchor tag as a child and inherit its props. 
  - Radix-ui/react-slot also handles event handlers correctly, so that the child handler takes precedence over the slot handler. 
  - Radix-ui/react-slot is part of the Radix Primitives library, which provides low-level UI components for building design systems and web applications.

So in the `package.json`,
Add @radix-ui/react-slot dependency.

Next the `button.tsx` component, we can see the actual code (which usually isn't the case for other component libraries.). We can customize it to our liking  Some changes we could make:

- Modifying the `const buttonVariants`:
  - focus-visible
  - opacity when its disabled
- `variants`
- `sizes`

shadcn has created multiple variants for the button here - including `default`, `destructive`, `outline`, `subtle`, `ghost`, and `link`. Each of these variants is set up with specific tailwind classes that will be applied to the button.

All of these variants are built on top of the core button set of tailwind classes

The `VariantProps` type from CVA is used to ensure that the `variant` and `size` props are typed correctly.

Now you can easily import the `Button` component and use it in your app.

Alright so what is our broader goal here? We want want to redirect the user and have them navigate to the sign-up or log-in page. For that we will be using both `Button` component and `Link` component from `next/link`.

Wait a minute. Link inside a button? That's bad!

#### Issue: Link inside a Button

A link inside a button is **bad** because it violates the HTML5 specification and the accessibility guidelines. According to the [HTML5 spec](http://w3c.github.io/html/textlevel-semantics.html#the-a-element), interactive elements such as links and buttons are not allowed to be nested inside each other.

> Content model: Transparent, but there must be no interactive content descendant.

The a element may be wrapped around entire paragraphs, lists, tables, and so forth, even entire sections, so long as there is no interactive content within (e.g. buttons or other links).

In other words, you can nest any elements inside an `<a>` except the following:

- `<a>`
- `<audio>` (if the controls attribute is present)
- `<button>`
- `<details>`
- `<embed>`
- `<iframe>`
- `<img>` (if the usemap attribute is present)
- `<input>` (if the type attribute is not in the hidden state)
- `<keygen>`
- `<label>`
- `<menu>` (if the type attribute is in the toolbar state)
- `<object>` (if the usemap attribute is present)
- `<select>`
- `<textarea>`
- `<video>` (if the controls attribute is present)

[Source: stackoverflow | nest a button element inside an a](https://stackoverflow.com/questions/6393827/can-i-nest-a-button-element-inside-an-a-using-html5)

According to the HTML5 spec, interactive elements such as links and buttons are not allowed to be nested inside each other. This is because it creates confusion and ambiguity for the user’s intention. For example, if a user clicks on a link inside a button, should the link or the button action be triggered? Different browsers may handle this situation differently, resulting in inconsistent and unpredictable behavior.

A link inside a button is bad for accessibility, as it makes it harder for keyboard and screen reader users to navigate and interact with the web page. A link and a button have different roles and expectations for how they should behave when activated. A link should navigate the user to another page or location, while a button should perform a specific action or submit a form. A link inside a button breaks these conventions and confuses the assistive technology and the user.

Therefore, it is best to avoid nesting a link inside a button, and instead use either a link or a button depending on the purpose and context. If you want to create a link that looks like a button, you can style it with CSS. If you want to create a button that navigates to another page, you can use a form element or a JavaScript function.

#### Solution: shadcn/ui `Button` with a link inside

We have two options:

1. You can use the `asChild` prop of the shadcn/ui Button component, which lets you render the button as a child of another component. This way, you can wrap the button with a Next.js Link component and pass the link props to the button. For example:

```tsx
import { Button } from "@shadcn/ui/button";
import Link from "next/link";

export default function MyComponent() {
  return (
    <Link href="/about" passHref>
      <Button asChild>Go to About Page</Button>
    </Link>
  );
}
```

2. You can use the `as` prop of the shadcn/ui Button component, which lets you change the underlying element of the button. This way, you can render the button as an anchor tag and pass the link props to the button. For example:

```tsx
import { Button } from "@shadcn/ui/button";

export default function MyComponent() {
  return (
    <Button as="a" href="/about">
      Go to About Page
    </Button>
  );
}
```

Both options are good for accessibility, as they will produce semantic HTML elements that are keyboard and screen reader friendly. However, the first option may be more convenient if you want to use Next.js features such as prefetching or dynamic routes. The second option may be simpler if you want to use external links or custom styles.

3. Another option is to use `buttonVariants` helper directly to create a link that looks like a button. For example:

```tsx
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export default function page() {
  return (
    <div>
      <Link className={buttonVariants({ variant: "outline" })} href="/login">
        login
      </Link>
    </div>
  );
}
```

There is an interesting [GitHub discussion on hyperlink button component for shadcn/ui](https://github.com/shadcn-ui/ui/issues/1015#issuecomment-1789906140), and according to elie222 we can use the `Slot` from `@radix-ui/react-slot` like this:

```tsx
<Button asChild>
   <Link href="#" target="_blank">My Link</Link>
</Button>
```

And the output of the code will have an `<a>` tag instead of a `<button>` tag.

We will go with that option, using the `asChild` prop of the shadcn/ui Button component to render the button as a child of the Next.js `Link` component. This is a valid option if you want to create a button that navigates to another page in your Next.js app.

`app\(landing)\page.tsx`
```tsx
import React from 'react';
import { ClipboardCheck, KanbanSquare } from 'lucide-react';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className='flex items-center justify-center flex-col'>
      <div className='flex items-center justify-center flex-col'>
        <div className='mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase'>
          <KanbanSquare className='h-6 w-6 mr-2'/>
          Kanban your way
          <ClipboardCheck className='h-6 w-6 mx-2'/>
        </div>
        <h1 className='text-3xl md:text-6xl text-center text-neutral-800 mb-6'>
          <span className='mr-1'><strong>Visionize</strong></span> your tasks
        </h1>
        <div className='text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit'>
          Turn your vision into reality.
        </div>
      </div>
      <div className='text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto'>
        Fight mediocrity with Visionize. With just boards, lists and cards you can 
        get a clear overview of your tasks. Then you can plan, prioritize, and
        execute your goals with confidence.      
        You can drag and drop tasks, add labels and due dates, attach files 
        and comments, and more.
      </div>

      <Button className='mt-6' size='lg' asChild>
        <Link href="/sign-up">
          Try Visionize for free
        </Link>
      </Button>

    </div>
  )
}
```

Now let's check the `localhost:3000` developer console pressing F12, under Elements tab.

Find the element for our Link to confirm that the output is an `<a>` tag instead of a `<button>`.

```html
  <a class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 mt-6" href="/sign-up">Try Visionize for free</a>
```

Awesome, using the `asChild` prop to `Button` component renders the button as a child of the `Link` component. This properly navigates to another page in our Next.js app when we click on it.

#### Landing Page - pad text in the icon container

After looking through, there needs to be some top padding for the textt inside the icon container. So wrapped the text that's between the two icons inside a span and gave it top padding.

```tsx
export default function LandingPage() {
  return (
    <div className='flex items-center justify-center flex-col'>
      <div className={cn(
        'flex items-center justify-center flex-col',
        headingFont.className,
        )}>
        <div className='mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase'>

          <KanbanSquare className='h-6 w-6 mr-2'/>
          <span className='pt-1'>Kanban your way</span>
          <ClipboardCheck className='h-6 w-6 mx-2'/>

        </div>
```

### Fonts

#### Using local fonts in Next.js

Let's import a local font in Next.js. Going to use [Cal Sans 1.0](https://github.com/calcom/font) font.

Now to install a font we can check the [Nextjs Font | Reference](https://nextjs.org/docs/app/api-reference/components/font).

Create a folder named `font` inside `public`. Then drag and drop or copy over your font of choice. Then save the relative path name as we'll use it for later.

Next in our landing page:

- `import localFont from 'next/font/local';`
- Create a `headingFont` that has an object with a `src` property set to the relative path of the font, like this: `../../public/fonts/YOUR_FONT_HERE`
- import `cn` util

```tsx
import localFont from 'next/font/local';

import { cn } from '@/lib/utils';

const headingFont = localFont({
  src: "../../public/fonts/CalSans-SemiBold.woff2",
});
```

Now we can use the `cn` function to append the font to the already existing tailwind css clasnames.

- To do so we wrap our default className styles in curly brackets `({})` so that we can step into TypeScript and interpolate code here. We call the `cn()` function with the default classNames as the first argument, and the `headingFont.className` as the second argument.

```tsx
// ...
import localFont from 'next/font/local';

import { cn } from '@/lib/utils';

const headingFont = localFont({
  src: "../../public/fonts/CalSans-SemiBold.woff2",
});

export default function LandingPage() {
  return (
    <div className='flex items-center justify-center flex-col'>

      <div className={cn(
        'flex items-center justify-center flex-col',
        headingFont.className,
        )}>

      {/* ... */}
```

#### Importing and using fonts in Next.js

Next we can try importing the [Poppins](https://fonts.google.com/specimen/Poppins) font from `next/font/google`.

Then we initialize the font in a similar way but calling the variable `textFont`. Also gove it font function arguments using the [API reference for next/font/google](https://nextjs.org/docs/app/api-reference/components/font). We will set the `weight` to "latin" and `subsets` from "100-900".

```tsx
import { Poppins } from 'next/font/google';

const textFont = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
});
```

Now append the font to the rest of the text, this time let's add the `textFont` to the promotional text.

```tsx
import { Poppins } from 'next/font/google';

const textFont = Poppins({
  subsets: ["latin"],
  weight: [
    100,
    // ...
  ],
});

export default function LandingPage() {
  return (
    <div className='flex items-center justify-center flex-col'>
      <div className={cn(
        'flex items-center justify-center flex-col',
        headingFont.className,
        )}>
        <div className='mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase'>
          <KanbanSquare className='h-6 w-6 mr-2'/>
          <span className='pt-1'>Kanban your way</span>
          <ClipboardCheck className='h-6 w-6 mx-2'/>
        </div>
        {/* Headings here... */}
      </div>

      {/* Promotional Text */}
      <div className={cn(
        'text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto',
        textFont.className,
      )}>
        Fight mediocrity with Visionize. With just boards, lists and cards you can 
        get a clear overview of your tasks. Then you can plan, prioritize, and
        execute your goals with confidence.      
        You can drag and drop tasks, add labels and due dates, attach files 
        and comments, and more.
      </div>
```

Add heading and text fonts to landing page

- Use localFont and Poppins from next/font
- Add KanbanSquare and ClipboardCheck icons from lucide-react
- Add padding to text between icons
- Add gradient background and padding to title and subtitle

## Components

### Components for the `LandingLayout`

Now we develop the `Navbar` and `Footer` components for the `LandingLayout`. Also make a re-usable component the `Logo`.

### Logo

To make a logo then convert to SVG I used [Adobe Express](https://www.adobe.com/express/create/logo).

Then move the file with the name `logo.svg` to the `/public` folder. Then in `/components` we can create `Logo.tsx`.

Add reusable Logo component

- Import Image and Link from next/image and next/link
- Create Logo component that renders a logo image inside a link
- Use hover, transition, and gap utilities from Tailwind CSS
- Export Logo component as default

```tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href="/">
      <div className='hover:opacity-75 transition items-center gap-x-2 hidden md:flex'>
        <Image 
          src='/logo.svg'
          alt='Logo for Visionize'
          height={30}
          width={30}
        />
      </div>
    </Link>
  )
}

export default Logo
```

Notice the `hidden` class which sets the `display: none` on devices smaller than 768px.

Add text to logo component & use custom font

- Add the text next to the logo image and style it with Tailwind CSS classes.
- Import the CalSans-SemiBold font from the local folder and use it for the text. 
- Use the cn function from the utils library to combine the classes.

```tsx
import Image from 'next/image';
import Link from 'next/link';
import localFont from 'next/font/local';
import React from 'react';

import { cn } from '@/lib/utils';

const headingFont = localFont({
  src: "../public/fonts/CalSans-SemiBold.woff2",
});

const Logo = () => {
  return (
    <Link href="/">
      <div className='hover:opacity-75 transition items-center gap-x-2 hidden md:flex'>
        <Image 
          src='/logo.svg'
          alt='Logo for Visionize'
          height={30}
          width={30}
        />
        <p className={cn(
          'text-xl text-neutral-700 px-1 pt-1',
          headingFont.className,
        )}>
          Visionize
        </p>
      </div>
    </Link>
  )
}

export default Logo
```

### Navbar

Let's use a private folder in next.js so that we can opt folder and all child segments out of routing.

We will create a `_components` folder under the route group `(landing)` and create the `Navbar.tsx` component. Make it a named export, not a default export so that we do not have inconsistency and naming conflicts.

`app\(landing)\_components\Navbar.tsx`
```tsx
import React from 'react';

export const Navbar = () => {
  return (
    <div>Navbar</div>
  );
};
```

Now import the `Navbar` inside the `LandingLayout`

`app\(landing)\layout.tsx`
```tsx
import { Navbar } from "./_components/Navbar";

const LandingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-full bg-slate-100">
      <Navbar />
      <main className="pt-40 pb-20 bg-slate-100">
        {children}
      </main>
      {/* Footer */}
    </div>
  );
};

export default LandingLayout;
```

Let's style the `Navbar`. Keep it fixed, centered. Also add another `div` which sets the max screen width to 2xl.

Then render the `Logo` inside the inner `div`.

Update Navbar component with logo

Adds a new navbar component that renders a logo and a placeholder for a button. The navbar is fixed at the top of the page and has a border and a shadow. It uses the Logo component from '@/components/Logo' and tailwindcss for styling.

```tsx
import React from 'react';

import Logo from '@/components/Logo';

export const Navbar = () => {
  return (
    <div className='fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center'>
      <div className='md:max-w-screen-2-xl mx-auto flex items-center w-full justify-between'>
        <Logo />
        {/* Button */}
      </div>
    </div>
  );
};
```

After the Logo let's add the sign-in and sign-up buttons

```tsx
import React from 'react';
import Link from 'next/link';

import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  return (
    <div className='fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center'>
      <div className='md:max-w-screen-2-xl mx-auto flex items-center w-full justify-between'>
        <Logo />
        <div className='space-x-4 md:block md:w-auto flex items-center justify-between w-full'>
          <Button size='sm' asChild>
            <Link href="/sign-up">
              Sign Up
            </Link>
          </Button>
          <Button size='sm' variant='outline' asChild>
            <Link href="/sign-in">
              Login
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
```

Add sign-in and sign-up buttons for Navbar

This commit adds two buttons for sign-in and sign-up to the Navbar component. The buttons use the Link component from 'next/link' to navigate to the corresponding pages.

### Footer

Create `Footer.tsx` inside `app\(landing)\_components`.

The `Footer` component will be fixed at the bottom, it will also have a container that has the `Logo` and two `Link` components that uses the `Button` component's `buttonVariants`. The `Button` components will have "Privacy Policy" and "Terms of Service" as children text.

`app\(landing)\_components\Footer.tsx`
```tsx
import React from 'react';
import Link from 'next/link';

import { buttonVariants } from "@/components/ui/button";


export const Footer = () => {
  return (
    <div className='fixed bottom-0 w-full p-4 border-t flex items-center bg-slate-100'>
      <div className='md:max-w-screen-2-xl mx-auto flex items-center w-full justify-center'>
        <div className='space-x-4 md:block md:w-auto flex items-center justify-center w-full'>
          <Link className={buttonVariants({ size: "lg", variant: "ghost" })} href="/privacy-policy">
            Privacy Policy
          </Link>
          <Link className={buttonVariants({ size: "lg", variant: "ghost" })} href="/terms-of-service">
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
};
```

Add footer component with links

Create a responsive footer component that displays two links for privacy policy and terms of service.

Refactor Footer with buttonVariants & Link

Replace the Button component with buttonVariants and use the Link component from next.js to render the links. Resize links to improve user experience. Also center the content horizontally and vertically with flexbox.

Now import the `Footer` and render it inside the `LandingLayout`:

`app\(landing)\layout.tsx`
```tsx
import { Footer } from "./_components/Footer";
import { Navbar } from "./_components/Navbar";

const LandingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-full bg-slate-100">
      <Navbar />
      <main className="pt-40 pb-20 bg-slate-100">
        {children}
      </main>
      <Footer />
    </div>
  );
};
```

## Authentication

We will use [Clerk](https://clerk.com/) to handler user authentication.

Go ahead and sign up and click "Add an Application", this will bring us to a modal with the "Let's build your `<SignIn />`" which allows you to customize the component users will see when they log-in. You can specify the application name and the ways a user can sign in.

I'm going to go with email, username, google and microsoft as ways to login.

Go ahead and create the component. Next we will see another page that contains our API keys. We can also click the framework the app will be using, Next.js for our case.

### Environment Variables

Before we add sensitive data (e.g., API keys, passwords, etc.) to our application you want to make sure these are not published or found publicly in any way.

#### Add .env to .gitignore to protect sensitive data

Navigate to `.gitignore` file and add `.env`. 

Although we may see `.env*local` already there, we want to specifically add our own `.env` file because later on we will use `prisma` which uses the `.env` file.

`.gitignore`
```.gitignore
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

This way the `.env` file will not be committed to git or GitHub, so `.env` won't exist anywhere except our local computer. We do not want our API keys to be stolen, especially if we made the mistake of adding it to our public repository.

**Exposing our API keys, especially on paid services, would be disastrous. It would allow malicious actors to abuse our resources and incur huge expenses for us.**

### Add our first environment variables

Now add the two API keys we got from Clerk to your `.env` file. Use the clipboard at the top right to copy the full data. The variables should be `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY`.

Next we can click the "Continue in docs", which should send us to [clerk quickstart nextjs | reference](https://clerk.com/docs/quickstarts/nextjs).

1. Install Clerk and add auth to protected routes.

```sh
npm install @clerk/nextjs
```

Add Clerk dependency and secure routes with auth.

2. Set environment keys

3. Wrap your app in `<ClerkProvider>`

The `<ClerkProvider>` component provides active session and user context to Clerk's hooks and other components. Import it into your app by adding `import { ClerkProvider } from '@clerk/nextjs'` at the top of your file.

Note that we won't wrap the provider around our main layout, (i.e., `app\layout.tsx`), like it does in the documentation. We only want to wrap the provider around the layouts that are protected, the routes where we would want the user to be authenticated.

Wrap AppLayout with ClerkProvider for auth

Create a route group, folder named `(app)` inside the `/app` folder. Then create a `layout.tsx` within. Inside we create a react arrow functional component export named `AppLayout`.

`app\(app)\layout.tsx`
```tsx
import React from 'react';

const AppLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <div>AppLayout</div>
  )
}

export default AppLayout
```

The user needs to be logged-in to be in the app. As opposed to `(landing)`, where we don't the user to be logged-in. So to secure the `(app)` routes we need to wrap it in the `ClerkProvider`.

```tsx
import { ClerkProvider } from '@clerk/nextjs';
import React from 'react';

const AppLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <ClerkProvider>
      {children}
    </ClerkProvider>
  )
}

export default AppLayout
```

4. Require authentication to access your app

Now that Clerk is installed and mounted in your application, you can decide which pages are public and which should require authentication to access.

Create a `middleware.ts` file in your root directory alongside `.env`.

`middleware.ts`
```ts
import { authMiddleware } from "@clerk/nextjs";
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
```

This adds the auth middleware to all routes, so to make certain routes public we have to use `publicRoutes`. See the docs for more details.

- [Clerk middleware | Reference](https://clerk.com/docs/references/nextjs/auth-middleware)

So we have to modify the `authMiddleware` so that it will make the following routes `/`, `/sign-in` and `/sign-up` public, no routes ignored, and all remaining routes protected.

```ts
import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes: ["/"],
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
```

Assuming that the `.env` based settings for sign-in and sign-up are set to `/sign-in` and `/sign-up` respectively, the following authMiddleware would make the routes `/`, `/contact`, `/sign-in` and `/sign-up `public, no routes ignored, and all remaining routes protected.

```ts
import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes: ["/", "/contact"],
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
```

5. Embed the `<UserButton />`

Clerk offers a set of prebuilt components to add functionality to your app with minimal effort. The `<UserButton />` allows users to manage their account information and log out, completing the full authentication circle.

Before we embed this component we need to create the sign-in and sign-up pages to allow users to login or create an account.

### Sign-Up and Sign-In pages

We need to create the `Sign-Up` and `Sign-In` pages.

- [Clerk nextjs Sign-Up and Sign-In pages](https://clerk.com/docs/references/nextjs/custom-signup-signin-pages)

The first step in the documentation for the sign-up page is to create the file `app/sign-up/[[...sign-up]]/page.tsx` and add the code 

```tsx
import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return <SignUp />;
}
```

Notice how it uses a [catch-all segment](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#catch-all-segments) which is a dynamic segment that is extended to **catch-all** subsequent segments by adding an ellipsis inside the brackets `[...folderName]`.

For example, `app/shop/[...slug]/page.js` will `match /shop/clothes`, but also `/shop/clothes/`tops, `/shop/clothes/tops/t-shirts`, and so on.

### Route group to hold our authentication

Let's first create the route group `(auth)` inside `(app)` to group these related files.

Create sign-up page using Clerk

1. Create the folder `sign-up` inside `(auth)`
2. Create the folder `[[...sign-up]]` inside `sign-up`
3. Create `page.tsx` file inside `[[...sign-up]]`

`app\(app)\(auth)\sign-up\[[...sign-up]]\page.tsx`
```tsx
import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return <SignUp />;
}
```

Create sign-in page using Clerk

1. Create the folder `sign-in` inside `(auth)`
2. Create the folder `[[...sign-in]]` inside `sign-in`
3. Create `page.tsx` file inside `[[...sign-in]]`

`app\(app)\(auth)\sign-in\[[...sign-in]]\page.tsx`
```tsx
import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return <SignIn />;
}
```

Next, add environment variables for the signIn, signUp, afterSignUp, and afterSignIn paths: 

`.env`
```env
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

These values control the behavior of the components when you sign in or sign up and when you click on the respective links at the bottom of each component.

This will let the middleware know where to redirect. See how our project structure aligns with this in `app\(app)\(auth)\sign-in\[[...sign-in]]\page.tsx`.

Remember that route groups are not part of the URL. So the route would become `localhost:3000/sign-in`.

### Style the Sign-In and Sign-Up Page

- [Pages & Layouts | Nextjs Reference](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#nesting-layouts)

Let's create a nested layout so that we can center both the sign-in page and sign-up page.

Create a `layout.tsx` inside the `(auth)` folder, which centers the `children` prop.

Add layout component for clerk pages

Create a nested layout called `AuthLayout` that renders a centered flex container for clerk pages. This component can be used to wrap other components that need to be aligned in the center of the screen.

`app\(app)\(auth)\layout.tsx`
```tsx
import React from 'react';

const AuthLayout = ({ children}:{ 
  children: React.ReactNode;
}) => {
  return (
    <div className='h-full flex items-center justify-center'>
      {children}
    </div>
  );
};

export default AuthLayout;
```

## Organizations

We can check our organizations through `https://dashboard.clerk.com`, click the Organizations tab.

Then enable organizations.

With that we can now create a protected route where users can create or select an organization. We now need to create a route that has `org-selection` route with a catch all segment.

- [Organization List | Clerk Reference](https://clerk.com/docs/components/organization/organization-list)

The `<OrganizationList />` component is used to display organization related memberships, invitations, and suggestions for the user.

Inside `(auth)` create a route named `org-selection/[[...org-selection]]/page.tsx`

Add page to create new organization

This commit adds a new React component called OrganizationSelectionPage that renders an OrganizationList component from @clerk/nextjs. This component allows the user to create a new organization and see the existing ones.

`app\(app)\(auth)\org-selection\[[...org-selection]]\page.tsx`
```tsx
import React from 'react';
import { OrganizationList } from '@clerk/nextjs';

export default function OrganizationSelectionPage() {
  return (
    <OrganizationList />
  );
};
```

This page is already centered as it shares the layout with the `(auth)` route group.

### Use both personal and organization accounts

We have the decision to either have individual users and organizations or just organizations. Visionize will be for both individuals and organizations so that more will benefit.

Allow for both personal & organizational use

This commit changes the app logic and UI to enable visionize to be used for both personal and organizational purposes. The user can now switch between different modes and access different features depending on their needs.

We can add the prop `hidePersonal` to `OrganizationalList` to remove selecting a personal account if we intend this app to only be between groups, teams and organizations. But we want this app to be tailored towards individual users too, so we omit that.

Let's add the props according to the [docs](https://clerk.com/docs/components/organization/organization-list#usage).

```tsx
import React from 'react';
import { OrganizationList } from '@clerk/nextjs';

export default function OrganizationSelectionPage() {
  return (
    <OrganizationList 
      afterCreateOrganizationUrl='/org/:id'
      afterSelectPersonalUrl='/user/:id'
      afterSelectOrganizationUrl='/org/:id'
    />
  );
};
```

This commit adds three props to the OrganizationList component from @clerk/nextjs: afterCreateOrganizationUrl, afterSelectPersonalUrl, and afterSelectOrganizationUrl. These props allow the user to to navigate to after creating or selecting an organization or a personal account. This design decision enables both teams and individuals.

## Dashboard

We want the user to be routed to the app's dashboard so they can start using the app.

The urls to navigate to will be in a route group named `(dashboard)`. Inside will be both the `user` and `organization` routes, containing the [dynamic routes/ dynamic segments](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes) for each using `id`. Each will have a `page.tsx`.

Add organization page to dashboard

`app\(app)\(dashboard)\org\[orgId]\page.tsx`
```tsx
import React from 'react';

const OrganizationIdPage = () => {
  return (
    <div>Organization Page</div>
  );
};

export default OrganizationIdPage
```

Add personal user page to dashboard

`app\(app)\(dashboard)\user\[userId]\page.tsx`
```tsx
import React from 'react';

const UserIdPage = () => {
  return (
    <div>User Page</div>
  );
};

export default UserIdPage
```

- [auth() | Clerk Reference](https://clerk.com/docs/references/nextjs/auth) is a helper that returns the `Authentication` object of the currently active user. 

Let's retrieve the `userId` in the `UserIdPage` and interpolate the data.

```tsx
import { auth } from '@clerk/nextjs';
import React from 'react';

const UserIdPage = () => {
  const { userId } : { userId: string | null } = auth();

  return (
    <div>
      `User: ${userId}`
    </div>
  );
};

export default UserIdPage
```

Let's also do the same for `OrganizationIdPage`.

```tsx
import { auth } from '@clerk/nextjs';
import React from 'react';

const OrganizationIdPage = () => {
  const { userId, orgId } = auth();

  return (
    <div>
      {`Organization: ${orgId}`}
    </div>
  );
};

export default OrganizationIdPage
```

### Dashboard layout

Let's create the `layout.tsx` file for the `(dashboard)`, which accepts a `children` prop that will be populated with a child layout or a child page during rendering.

`app\(app)\(dashboard)\layout.tsx`
```tsx
import React from 'react';

const DashboardLayout = ({children}: {
  children: React.ReactNode;
}) => {
  return (
    <div className='h-full'>
      {/* Navbar */}
      {children}
    </div>
  )
}

export default DashboardLayout
```

We are also going to create local components for the dashboard, which includes a `<Navbar />`.

Create the folder under `(dashboard)` named `_components` with a file named `Navbar.tsx`

`app\(app)\(dashboard)\_components\Navbar.tsx`
```tsx
export const Navbar = () => {
  return (
    <div>
      Navbar
    </div>
  );
};
```

Then import and add it inside the `DashboardLayout`.

`app\(app)\(dashboard)\layout.tsx`
```tsx
import { Navbar } from './_components/navbar';

const DashboardLayout = ({children}: {
  children: React.ReactNode;
}) => {
  return (
    <div className='h-full'>
      <Navbar />
      {children}
    </div>
  )
}

export default DashboardLayout
```

Now add responsive styles to the `Navbar` and include a create `Button`. Also change the `div` to the semantic tag `nav`.

```tsx
import React from 'react';
import { Plus } from 'lucide-react';

import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  return (
    <nav className='flex items-center fixed px-4 z-10 top-0 w-full h-14 border-b shadow-sm bg-white'>
      {/* Responsive Container */}
      <div className='flex items-center gap-x-4'>
        {/* For screens 768px and larger  */}
        <div className='hidden md:flex'>
          <Logo />
        </div>
        <Button 
          size='sm' 
          className='rounded-sm py-1.5 px-2 h-auto'
        >
          <span className='hidden md:block'>Create</span>
          <Plus className='block md:pl-1 h-4 w-4'/>
        </Button>
      </div>
    </nav>
  );
};
```

Add create button & responsive styles to navbar

This commit adds a new feature to the navbar that allows users to create new organizations. It also improves the appearance and functionality of the navbar on different screen sizes and devices.

#### Customize `Button` component

One thing to add is to modify the `Button` component to have a lighter color that matches the background.

Navigate to `button.tsx` and add a `primary` variant that gives the `Button` a sky blue color.

Add primary variant to buttonVariants

Add a new variant called primary to the buttonVariants object in the Button.tsx component. The primary variant has a sky blue background color and a white text color. It also has a hover effect that changes the background color to a darker shade of sky blue. The primary variant can be used for buttons that need to stand out or indicate a primary action.

Gives the Button component in Navbar a primary variant, which has a sky blue background color and a white text color. It also has a hover effect that changes the background color to a darker shade of sky blue. This indicates to the user the action to create.

`components\ui\button.tsx`
```tsx
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        primary: "bg-sky-500 hover:bg-sky-600/90 text-primary-foreground",
      },
```

Then add add the `variant` prop and set it to `primary` in `Navbar.tsx`.

`app\(app)\(dashboard)\_components\Navbar.tsx`
```tsx
export const Navbar = () => {
  return (
    <nav className='flex items-center fixed px-4 z-10 top-0 w-full h-14 border-b shadow-sm bg-white'>
      {/* Responsive Container */}
      <div className='flex items-center gap-x-4'>
        {/* For screens 768px and larger  */}
        <div className='hidden md:flex'>
          <Logo />
        </div>
        <Button
          variant='primary'
          size='sm' 
          className='rounded-sm py-1.5 px-2 h-auto'
        >
```

#### `OrganizationSwitcher` component

Let's add [OrganizationSwitcher](https://clerk.com/docs/references/javascript/clerk/organization-switcher#organization-switcher-component) in the `Navbar` and set the prop urls.

```tsx
import { OrganizationSwitcher } from '@clerk/nextjs';

export const Navbar = () => {
  return (
    <nav className='flex items-center fixed px-4 z-10 top-0 w-full h-14 border-b shadow-sm bg-white'>
      {/* Responsive Container */}
      <div className='flex items-center gap-x-4'>
        {/* For screens 768px and larger  */}
        <div className='hidden md:flex'>
          <Logo />
        </div>
        <Button 
          size='sm' 
          className='rounded-sm py-1.5 px-2 h-auto'
        >
          <span className='hidden md:block'>Create</span>
          <Plus className='block md:pl-1 h-4 w-4'/>
        </Button>
      </div>
      <div className='ml-auto flex items-center gap-x-2'>
        <OrganizationSwitcher 
          afterCreateOrganizationUrl='/org/:id'
          afterLeaveOrganizationUrl='/org-selection'
          afterSelectOrganizationUrl="/org/:id"
          afterSelectPersonalUrl='/user/:id'
        />
      </div>
    </nav>
  );
};
```

Let's use the `appearance` prop to style the `OrganizationSwitcher` component.

- [Appearance prop](https://clerk.com/docs/components/customization/overview)
- [Use inline CSS objects to style Clerk components](https://clerk.com/docs/components/customization/overview#use-inline-css-objects-to-style-clerk-components)

```tsx
<OrganizationSwitcher 
  afterCreateOrganizationUrl='/org/:id'
  afterLeaveOrganizationUrl='/org-selection'
  afterSelectOrganizationUrl="/org/:id"
  afterSelectPersonalUrl='/user/:id'
  appearance={{
    elements: {
      rootBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
    },
  }}
/>
```

Now add the [UserButton](https://clerk.com/docs/components/user/user-button) right next to the switcher. Give it the props `afterSignOutUrl` and `appearance`.

```tsx
import React from 'react';
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';
import { Plus } from 'lucide-react';

import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  return (
    <nav className='flex items-center fixed px-4 z-10 top-0 w-full h-14 border-b shadow-sm bg-white'>
      {/* Responsive Container */}
      <div className='flex items-center gap-x-4'>
        {/* For screens 768px and larger  */}
        <div className='hidden md:flex'>
          <Logo />
        </div>
        <Button 
          size='sm' 
          className='rounded-sm py-1.5 px-2 h-auto'
        >
          <span className='hidden md:block'>Create</span>
          <Plus className='block md:pl-1 h-4 w-4'/>
        </Button>
      </div>
      <div className='ml-auto flex items-center gap-x-2'>
        <OrganizationSwitcher 
          afterCreateOrganizationUrl='/org/:id'
          afterLeaveOrganizationUrl='/org-selection'
          afterSelectOrganizationUrl="/org/:id"
          afterSelectPersonalUrl='/user/:id'
          appearance={{
            elements: {
              rootBox: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              },
            },
          }}
        />
        <UserButton 
          afterSignOutUrl='/'
          appearance={{
              elements: {
                avatarBox: {
                  height: 30,
                  width: 30,
                },
              },
          }}
        />
      </div>
    </nav>
  );
};
```

Add account and logout options in navbar

In Navbar, add `UserButton` component which allows users to manage their account information and log out.

### Update middleware to control navigation after authentication

Let's change the behavior for when user is already logged-in and they attempt to visit the landing page. We want the user to always be on a specific organization or their individual page. We want to be redirected to `SelectOrganizationPage`.

One way to do this is to use the the [afterAuth()](https://clerk.com/docs/references/nextjs/auth-middleware#use-after-auth-for-fine-grained-control) in our middleware.

Some developers will need to handle specific cases such as handling redirects differently or detecting if a user is inside an organization. These cases can be handled with `afterAuth()`.

Configure redirects for public & private routes

`middleware.ts`
```ts
import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: ["/"],

  afterAuth(auth, req, evt) {
    // Handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }

    // If user is logged-in and on the landing page, redirect them
    if (
      auth.userId && 
      req.nextUrl.pathname === "/") 
    {
      const orgSelection = new URL("/org-selection", req.url);
      return NextResponse.redirect(orgSelection);
    }

    // If the user is logged in and trying to access a protected route, allow them to access route
    if (auth.userId && !auth.isPublicRoute) {
      return NextResponse.next();
    }
    // Allow users visiting public routes to access them
    return NextResponse.next();
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

```

The first case when we handle users who aren't authenticated we want to redirect them to the sign-in page. Then after signing in, we return them back to the URL they came from. The URL they come from was either a private route that they couldn't access earlier, e.g., they bookmarked the dashboard page.

```ts
  afterAuth(auth, req, evt) {
    // Handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }
```

```ts
    // If user is logged-in and on the landing page, redirect them
    if (
      auth.userId && 
      req.nextUrl.pathname === "/") 
    {
      const orgSelection = new URL("/org-selection", req.url);
      return NextResponse.redirect(orgSelection);
    }
```

In this next condition we redirect users already logged-in and on the landing page to the selection page.

### Organization and User layouts

Now we work on the content of the pages within the dashboard.

So far we have the `Navbar` at the top. We want a layout that wraps the content below the navbar, along with a sidebar to the left that allows users to switch between profiles.

Create a `layout.tsx` inside `app\(app)\(dashboard)\org`, which accepts a `children` prop and returns a `<main>`.

`app\(app)\(dashboard)\org\layout.tsx`
```tsx
import React from 'react';

export default function OrganizationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      {children}
    </main>
  )
}
```

Similarly, create the `UserLayout` inside `app\(app)\(dashboard)\user`/

`app\(app)\(dashboard)\user\layout.tsx`
```tsx
import React from 'react';

export default function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      {children}
    </main>
  )
}
```

Start with the `OrganizationLayout`. Style it so that we have padding and space for our content and a sidebar. We also want a `div` that appears only on medium screens and larger with a fixed `w-64`.

```tsx
export default function OrganizationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='px-4 pt-20 md:pt-24 mx-auto max-w-6xl 2xl:max-w-screen-xl'>
      <div className='flex '>
        <div className='w-64 shrink-0 hidden md:block'>
        </div>
        {children}
      </div>
    </main>
  )
}
```

We come across the issue where if you go to a organization page with a specific ID it does not switch to that component. We are going to have to check whether a user ID or organization ID matches the URL and switch to that. Create `OrganizationIdLayout.tsx`.

```tsx
import React from 'react';

export default function OrganizationIdLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
    </div>
  )
}
```

#### Issue: ID in the URL does not match the switcher and the content

When using the `OrganizationSwitcher` the URL and the `orgId` will match the chosen group. But if a user were to save the URL of one organization, use the switcher to switch to another, then load the saved URL back to the browser without using the switcher then we come across an issue where the URL and contents are not synchronized.

An issue we come across is that the user may access another organization directly, such as a bookmark. The ID inside the URL may not reflect the content of the layout. We need a way to match and sychronize the ID of the URL to that of the content of the page.

Create a private components folder with the component `URLMatcher.tsx` inside `[orgId]`.

Create URLMatcher.tsx

Create a component that actively checks the URL and matches the ID with the content currently displayed on the page.

`app\(app)\(dashboard)\org\[orgId]\_components\URLMatcher.tsx`
```tsx
"use client";

import { useOrganizationList } from '@clerk/nextjs';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';

// Checks the organization ID of the URL and synchronize it with the page
export default function URLMatcher() {
  const params = useParams();
  const { setActive } = useOrganizationList();

  useEffect(() => {
    if (!setActive) return;

    setActive({
      organization: params.orgId as string,
    });
  }, [setActive, params.orgId]);

  return null;
}
```

Now render that inside `OrganizationIdLayout` right above the `children`.

`app\(app)\(dashboard)\org\[orgId]\layout.tsx`
```tsx
import React from 'react';
import URLMatcher from './_components/URLMatcher';

export default function OrganizationIdLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <URLMatcher />
      {children}
    </>
  )
}
```

#### Testing to see if URLMatcher fixes the issue

1. Create two organizations. 
2. Use switcher to choose 1st organization
3. Copy the URL
4. Switch to 2nd org.
5. Paste copied URL of 1st organization and hit Enter

What we should see is that the content and display will sychronize with the ID in the URL. The switcher will also reflect this change and it should be the name of the 1st organization.

### Installing packages

Before we start developing the Sidebar, we are going to install some packages.

- [npm useHooks.ts](https://usehooks-ts.com/) are simple, type-safe react hooks that we can use

```sh
npm i usehooks-ts
```

- [shadcn/ui - Accordion](https://ui.shadcn.com/docs/components/accordion) is a vertically stacked set of interactive headings that each reveal a section of content.

```sh
npx shadcn-ui@latest add accordion
```

- [shadcn/ui - Skeleton](https://ui.shadcn.com/docs/components/skeleton) is used to show a placeholder while content is loading

```sh
npx shadcn-ui@latest add skeleton
```

-[shadcn/ui - Separator](https://ui.shadcn.com/docs/components/separator), visually or semantically separates content.

```sh
npx shadcn-ui@latest add separator
```

### Sidebar

Create a client component `Sidebar.tsx` under `(dashboard)/_components` folder.

`app\(app)\(dashboard)\_components\Sidebar.tsx`
```tsx
"use client";

import React from 'react'

export default function Sidebar() {
  return (
    <div>Sidebar</div>
  );
};
```

Now render the `Sidebar` inside `OrganizationLayout`.

`app\(app)\(dashboard)\org\layout.tsx`
```tsx
import React from 'react';
import Sidebar from '../_components/Sidebar';

export default function OrganizationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='px-4 pt-20 md:pt-24 mx-auto max-w-6xl 2xl:max-w-screen-xl'>
      <div className='flex '>
        <div className='w-64 shrink-0 hidden md:block'>
          <Sidebar />
        </div>
        {children}
      </div>
    </main>
  )
}
```

#### Preserve user interaction with Accordion component in Sidebar

The Accordion is a component that expands to reveals a section of content, or collapses to hide the content. 

We need to preserve the user's interaction with the accordion across UI reloads. The Accordion should maintain its previous state after reloading.

To do that we will use [localStorage](https://javascript.info/localstorage) and the hook [useLocalStorage](https://usehooks-ts.com/react-hook/use-local-storage) to store this information.

Let's start with the imports we may need to use for the `Sidebar`.

`app\(app)\(dashboard)\_components\Sidebar.tsx`
```tsx
"use client";

import Link from 'next/link';
import React from 'react'
import { Plus } from 'lucide-react';
import { useLocalStorage } from 'usehooks-ts';
import { useOrganization, useOrganizationList } from '@clerk/nextjs';

import { Accordion } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
```

Then we create the prop interface that has the `storageKey` property. We call it `storageKey` because in the [useLocalStorage docs](https://usehooks-ts.com/react-hook/use-local-storage), the hook is used like `useState` except that you must pass the **storage key** in the 1st parameter.

We want to create this `storageKey` property in the prop interface in order to make the `Sidebar` component more re-usable.

Update Sidebar with local storage to persist state

Save the open or collapse state of Accordion component with local storage inside the sidebar.

- Create prop interface SideBarProps which contain the storageKey
- Accept a storageKey prop with a default value
- Create a state variable open and persist it with local storage so that it remains after a page refresh

```tsx
"use client";

import React from 'react'
import { useLocalStorage } from 'usehooks-ts';

interface SidebarProps {
  storageKey?: string;
};

export default function Sidebar({
  storageKey = "sidebarState",
}: SidebarProps ) {
  const [open, setOpen] = useLocalStorage(storageKey, {});

  return (
    <div>
      Sidebar
    </div>  
  );
};
```

Let's also give `useLocalStorage` hook a defined type of what to expect. In this case we expect a [Record](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type), with `string` as keys and `any` as values.

```tsx
  const [open, setOpen] = useLocalStorage<Record<string, any>>(
    storageKey, 
    {}
  );
```

So far:

```tsx
"use client";

import React from 'react'
import { useLocalStorage } from 'usehooks-ts';

import { Accordion } from '@/components/ui/accordion';

// Define an interface for the Sidebar component props
interface SidebarProps {
  // Optional prop to specify the storage key for the sidebar state
  storageKey?: string;
};

// Define the Sidebar component as a default export
export default function Sidebar({
  // Destructure the storageKey prop and assign a default value
  storageKey = "sidebarState",
}: SidebarProps ) {
  
  // Use the useLocalStorage hook to store and retrieve the open state of the sidebar
  // The open state is an object that maps each accordion item key to a boolean value
  const [open, setOpen] = useLocalStorage<Record<string, any>>(
    storageKey, 
    {} // Initial value is an empty object
  );

  return (
    <div>
      Sidebar
    </div>  
  );
};
```

With that we can now start taking the active organization and the infinite list of joined organizations.

- [useOrganization | Clerk reference](https://clerk.com/docs/references/react/use-organization)
- [useOrganizationList | Clerk reference](https://clerk.com/docs/references/react/use-organization-list)

We want to use the useOrganization hook to get the active organization and its loading status. The active organization is the one that the user is currently viewing or managing.

Use the useOrganizationList hook to get the user memberships and their loading status. 
The user memberships are the organizations that the user belongs to or has access to.
The infinite option enables pagination and infinite scrolling for the organization list.

```tsx
export default function Sidebar({
  storageKey = "sidebarState",
}: SidebarProps) {

  const [open, setOpen] = useLocalStorage<Record<string, any>>(
    storageKey,
    {} 
  );

  const {
    organization: activeOrg,
    isLoaded: isLoadedOrg,
  } = useOrganization();


  const {
    userMemberships,
    isLoaded: isLoadedOrgList,
  } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  return (
    <div>
      Sidebar
    </div>
  );
};
```

feat: add hooks for active org & org list in Sidebar

- Use useOrganization hook to get the active organization and its loading status
- Use useOrganizationList hook to get the user memberships and their loading status
- Display the organization name in the sidebar header
- Display the organization list in the sidebar accordion

Finally define the function `onOpen` that uses the `setOpen` method to toggle the open state of an accordion item by its id. Copy the current open state and update the id key with the opposite value.

Then we handle the loading states for active organization, organization list and `userMemberships`. In place of it, we use the `Skeleton` component as a placeholder for the loading progress.

```tsx
  /**
   * Toggles the open state of an accordion item by its id
   * Use the setOpen function to update the open state object
   * Use the spread operator to copy the current open state and 
   * update the id key with the opposite value
   * @param id the id of the accordion item
   */
  function onOpen(id: string) {
    setOpen((current) => ({
      ...current,
      [id]: !open[id],
    }));
  };

  // Check if the organization data and the user memberships data are loaded
  // If any of them is not loaded or is loading, return a div element with a Skeleton component
  // The Skeleton component is a placeholder that shows the loading progress
  if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) {
    return (
      <div>
        <Skeleton />
      </div>
    )
  }

  // Return the JSX for the sidebar component
  return (
    <div>
      Sidebar
    </div>
  );
};
```
Handle the open & loading states in sidebar

feat: add onOpen function and loading logic

- Add onOpen function to toggle the open state of an accordion item by its id
- Use the spread operator to copy and update the open state object
- Check the loading status of the organization data and the user memberships data
- Return a Skeleton component if any of the data is not loaded or is loading

#### Sidebar output

Add a link styled as a button that adds workspaces, an organization or user board, to the sidebar.

```tsx
"use client";

import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function Sidebar({
  storageKey = "sidebarState",
}: SidebarProps) {

  // ...

  // Return the JSX for the sidebar component
  return (
    <div className='flex items-center mb-1 font-medium text-xs'>
      <span className='pl-4'>
        Workspaces
      </span>
      <Button 
        asChild
        className='ml-auto'
        size='icon'
        type='button'
        variant='ghost'
      >
        <Link href='/org-selection'>
          <Plus 
            className='h-4 w-4'
          />
        </Link>
      </Button>
    </div>
  );
};
```

Now we want to actually render the actual workspaces with the `Accordion` component.

- [Accordion | radix-ui Reference](https://www.radix-ui.com/primitives/docs/components/accordion)

For the props: a `type` of `multiple`, so that multiple items can be opened at the same time. And a `defaultValue` prop set to `prevAccordionValue`.

```tsx
import { Accordion } from '@/components/ui/accordion';

export default function Sidebar({
  storageKey = "sidebarState",
}: SidebarProps) {

  // ...
  // Return the JSX for the sidebar component
  return (
    <>
      <div className='flex items-center mb-1 font-medium text-xs'>
        <span className='pl-4'>
          Workspaces
        </span>
        <Button
          asChild
          className='ml-auto'
          size='icon'
          type='button'
          variant='ghost'
        >
          <Link href='/org-selection'>
            <Plus
              className='h-4 w-4'
            />
          </Link>
        </Button>
      </div>
      <Accordion
        type='multiple'
        defaultValue={prevAccordionValue}
      >

      </Accordion>
    </>
  );
};
```

Hold on what's `prevAccordionValue`? Well the way we store values inside local storage through the `open` state is not compatible to how the `defaultValue` is expected inside the `Accordion`. So we need to create a constant that transforms and reduces the data we have inside local storage and the open state into something that matches with the prop `defaultValue` and what default values expect.

`prevAccordionValue` converts the accordion data in local storage to conform to `defaultValue` prop of the `Accordion` component.

- Define a variable to store the previous accordion value as an array of keys
- Use the `Object.keys` method to get the keys of the `open` state object
- Use the `reduce` method to filter out the keys that have a `false` value
- If the value of the key is `true` (i.e., it is open & expanded), add it to the accumulator array

```tsx
export default function Sidebar({
  storageKey = "sidebarState",
}: SidebarProps) {

  // Use the useLocalStorage hook to store and retrieve the open state of the sidebar
  // The open state is an object that maps each accordion item key to a boolean value
  const [open, setOpen] = useLocalStorage<Record<string, any>>(
    storageKey,
    {} // Initial value is an empty object
  );

  // Define a variable to store the previous accordion value as an array of keys
  // Use the Object.keys method to get the keys of the open state object
  // Use the reduce method to filter out the keys that have a false value
  const prevAccordionValue: string[] = Object.keys(open)
    .reduce((accumulator: string[], key: string) => {
      // If the value of the key is true, add it to the accumulator array
      if (open[key]) {
        accumulator.push(key);
      }

      // Return the accumulator array
      return accumulator;
    }, [])

  return (
    <>
      <div className='flex items-center mb-1 font-medium text-xs'>
        <span className='pl-4'>
          Workspaces
        </span>
        <Button
          asChild
          className='ml-auto'
          size='icon'
          type='button'
          variant='ghost'
        >
          <Link href='/org-selection'>
            <Plus
              className='h-4 w-4'
            />
          </Link>
        </Button>
      </div>
      <Accordion
        type='multiple'
        defaultValue={prevAccordionValue}
      >

      </Accordion>
    </>
  );
};
```

In short, it reduces over the `open` state object, which looks like this as an example:

```js
{
  "my-organization-id" : true
}
```

It reduces this entire `open` object to create an array that only holds active IDs. e.g.,

```js
// open state object
{ "123" : true } 
// prevAccordionValue
["123"]
```

Now let's style and render the organizations inside `Accordion`. We map the `userMemberships.data` to a `<p>` with `key` prop as the `organization.id`

```tsx
      <Accordion
        type='multiple'
        defaultValue={prevAccordionValue}
        className='space-y-2'
      >
        {userMemberships.data.map(({ organization }) => (
          <p key={organization.id}>
            {organization.id}
          </p>
        ))}
      </Accordion>
```

Now we can see the output of the `Sidebar` on the web page, which renders each org ID.

#### SidebarItem component

Instead of a `<p>`, we should return a component that has more functionality.

Create a `SidebarItem` client component inside the `(dashboard)/_components` folder.

```tsx
import React from 'react';

export default function SidebarItem() {
  return (
    <div>SidebarItem</div>
  )
}
```

Then import and use `SidebarItem`

Add SidebarItem to display user workspaces

```tsx
import SidebarItem from './SidebarItem';

interface SidebarProps {
  storageKey?: string;
};

export default function Sidebar({
  storageKey = "sidebarState",
}: SidebarProps) {

  const [open, setOpen] = useLocalStorage<Record<string, any>>(
    storageKey,
    {}
  );

  // Use the useOrganization hook to get the active organization and its loading status
  // The active organization is the one that the user is currently viewing or managing
  const {
    organization: activeOrg,
    isLoaded: isLoadedOrg,
  } = useOrganization();

  // Use the useOrganizationList hook to get the user memberships and their loading status
  // The user memberships are the organizations that the user belongs to or has access to
  // The infinite option enables pagination and infinite scrolling for the organization list
  const {
    userMemberships,
    isLoaded: isLoadedOrgList,
  } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  // Define a variable to store the previous accordion value as an array of keys
  // Use the Object.keys method to get the keys of the open state object
  // Use the reduce method to filter out the keys that have a false value
  const prevAccordionValue: string[] = Object.keys(open)
    .reduce((accumulator: string[], key: string) => {
      // If the value of the key is true, add it to the accumulator array
      if (open[key]) {
        accumulator.push(key);
      }

      // Return the accumulator array
      return accumulator;
    }, [])

  /**
   * Toggles the open state of an accordion item by its id
   * Use the setOpen function to update the open state object
   * Use the spread operator to copy the current open state and 
   * update the id key with the opposite value
   * @param id the id of the accordion item
   */
  function onOpen(id: string) {
    setOpen((current) => ({
      ...current,
      [id]: !open[id],
    }));
  };

  // Check if the organization data and the user memberships data are loaded
  // If any of them is not loaded or is loading, return a div element with a Skeleton component
  // The Skeleton component is a placeholder that shows the loading progress
  if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) {
    return (
      <div>
        <Skeleton />
      </div>
    )
  }

  // Return the JSX for the sidebar component
  return (
    <>
      <div className='flex items-center mb-1 font-medium text-xs'>
        <span className='pl-4'>
          Workspaces
        </span>
        <Button
          asChild
          className='ml-auto'
          size='icon'
          type='button'
          variant='ghost'
        >
          <Link href='/org-selection'>
            <Plus
              className='h-4 w-4'
            />
          </Link>
        </Button>
      </div>
      <Accordion
        type='multiple'
        defaultValue={prevAccordionValue}
        className='space-y-2'
      >
        {userMemberships.data.map(({ organization }) => (
          <SidebarItem
            key={organization.id}
            isActive={activeOrg?.id === organization.id}
            isOpen={open[organization.id]}
            onOpen={onOpen}
            organization={organization}
          />
        ))}
      </Accordion>
    </>
  );
};
```

##### SidebarItem props

Before making the prop interface, create a `types/Organization.ts` file. Inside an `Organization` type with `{ id, imageUrl, name, slug }`, and export it.

`types\Organization.ts`
```ts
type Organization = {
  id: string;
  imageUrl: string;
  name: string;
  slug: string;
};

export default Organization;
```

Next we want to create the `SidebarItemProps`, containing `{ isActive, isOpen, onOpen, organization }`. Have `SidebarItem` component accept these props.

```tsx
import React from 'react';

import Organization from '@/types/organization';

interface SidebarItemProps {
  isActive: boolean;
  isOpen: boolean;
  onOpen: (id: string) => void;
  organization: Organization;
}

export default function SidebarItem({
  isActive,
  isOpen,
  onOpen,
  organization,
}: SidebarItemProps ) {
  return (
    <div>SidebarItem</div>
  )
}
```

Back in `Sidebar.tsx`, we have an error:

```sh
Type 'OrganizationResource' is not assignable to type 'Organization'.
  Types of property 'slug' are incompatible.
    Type 'string | null' is not assignable to type 'string'.
      Type 'null' is not assignable to type 'string'.ts(2322)
SidebarItem.tsx(9, 3): The expected type comes from property 'organization' which is declared here on type 'IntrinsicAttributes & SidebarItemProps'
```

in this code:

```tsx
<SidebarItem
  key={organization.id}
  isActive={activeOrg?.id === organization.id}
  isOpen={open[organization.id]}
  onOpen={onOpen}
  organization={organization}
/>
```

We can fix that with 

```tsx
import Organization from '@/types/Organization';
// ...
  <SidebarItem
    key={organization.id}
    isActive={activeOrg?.id === organization.id}
    isOpen={open[organization.id]}
    onOpen={onOpen}
    organization={organization as Organization}
  />
```

##### Output of SidebarItem

- [Accordion | Reference](https://ui.shadcn.com/docs/components/accordion)

Now render an `AccordionItem` as output of SidebarItem. After that an `AccordionTrigger`, which contains the `onClick` property set to `onOpen` function. Within that is a nested `div` containing an `Image` from next and a `span` that contains the organization name. Import `cn` to combine tailwind utility classes for the trigger.

```tsx
import React from 'react';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import Organization from '@/types/Organization';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface SidebarItemProps {
  isActive: boolean;
  isOpen: boolean;
  onOpen: (id: string) => void;
  organization: Organization;
}

export default function SidebarItem({
  isActive,
  isOpen,
  onOpen,
  organization,
}: SidebarItemProps ) {
  return (
    <AccordionItem
      value={organization.id}
      className='border-none'
    >
      <AccordionTrigger
        onClick={() => onOpen(organization.id)}
        className={cn()}
      >
        <div className=''>
          <div className=''>
            <Image 
            />
          </div>
          <span className=''>
            {organization.name}
          </span>
        </div>
      </AccordionTrigger>
    </AccordionItem>
  )
}
```

Add styles `SidebarItem` and fill out `Image` properties.

```tsx
export default function SidebarItem({
  isActive,
  isOpen,
  onOpen,
  organization,
}: SidebarItemProps ) {
  return (
    <AccordionItem
      value={organization.id}
      className='border-none'
    >
      <AccordionTrigger
        onClick={() => onOpen(organization.id)}
        className={cn()}
      >
        <div className='flex items-center gap-x-2'>
          <div className='relative w-7 h-7'>
            <Image
              fill
              src={organization.imageUrl}
              alt="organization image"
              className='rounded-sm object-cover'
            />
          </div>
          <span className='font-medium text-sm'>
            {organization.name}
          </span>
        </div>
      </AccordionTrigger>
    </AccordionItem>
  )
}
```

We also need to improve `Image` performance by addding `sizes` prop which gives info on how wide the image will be at different breakpoints.

- [NextJS Image and sizes](https://nextjs.org/docs/app/api-reference/components/image#sizes)

feat: add sizes prop to Image in SidebarItem

This commit adds the sizes prop to the Image component from nextjs
in the SidebarItem component. This prop allows the image to adjust
its size according to the viewport width, improving the performance
and responsiveness of the app.

```tsx
<Image
  fill
  src={organization.imageUrl}
  alt="organization image"
  className='rounded-sm object-cover'
  sizes="(max-width: 768px) 33vw, (max-width: 1200px) 30vw, 25vw"
/>
```

###### Unhandled runtime error - invalid `src` prop for next/image

We get an error because the `src` prop for `Image` is not configured in `next.config.js`, to allow images to be used from that source.

Go to `next.config.js` and add the `images` object

feat(images): add remotePatterns to nextConfig

Configure Next.js to allow images from img.clerk.com domain. This enables the use of Clerk's image service for user avatars and other images in the app.

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
    ],
  },
}

module.exports = nextConfig
```

###### AccordionContent

Add routes array and navigateTo function

Create an array of routes with display name, href, and icon for each route. Create a navigateTo function that takes an href as a parameter and uses the router hook to perform client-side navigation. Use the useRouter and usePathname hooks to get the router instance and the current URL pathname.

To finish our `SidebarItem` we need `AccordionContent`, but we need to create `routes`, an array of objects that contain `{ displayName, href, icon }`. These properties will be used to render a `Button` when we map the `routes` inside the `AccordionContent`.

Here is the `routes` we create before we return `SidebarItem`

```tsx
import { Activity, CreditCard, Layout, Settings } from 'lucide-react';
// ...
export default function SidebarItem({
  // ...
}: SidebarItemProps ) {

  const routes = [
    {
      displayName: "Boards",
      href: `/org/${organization.id}`,
      icon: <Layout className='h-4 w-4 mr-2' />,
    },
    {
      displayName: "Activity",
      href: `/org/${organization.id}/activity`,
      icon: <Activity className='h-4 w-4 mr-2' />,
    },
    {
      displayName: "Settings",
      href: `/org/${organization.id}/settings`,
      icon: <Settings className='h-4 w-4 mr-2' />,
    },
    {
      displayName: "Billing",
      href: `/org/${organization.id}/billing`,
      icon: <CreditCard className='h-4 w-4 mr-2' />,
    },
  ];
```

Next import hooks `useRouter` and `usePathname` from `next/navigation`. Create the click handler function `navigateTo` that takes in `href` string as parameter, and pushes to the specified href URL.

```tsx

import { usePathname, useRouter } from 'next/navigation';

export default function SidebarItem({
  // ...
}: SidebarItemProps ) {
  // Get router instance from useRouter hook to perform client-side navigation
  const router = useRouter();

  // Get current URL pathname from the usePathname hook
  const pathname = usePathname();

  /**
   * Click handler that performs client-side navigation to the specified href.
   * @param href the URL link to navigate to
   */
  function navigateTo(href: string): void {
    router.push(href);
  }
```

Finally after `AccordionTrigger`, add `AccordionContent` which maps each route to a `Button` that has an `onClick` function of `navigateTo` along with the `icon` and `displayName` interpolated inside.

Add AccordionContent component to SidebarItem

This component maps each route to a Button component and renders them inside an AccordionItem. It allows the user to navigate to different pages within the organization. The routes are defined as an array of objects with the displayName, href, and icon properties.

```tsx
import { Button } from '@/components/ui/button';

export default function SidebarItem({
  // ...
  }: SidebarItemProps) {
    // ...
  return (
    <AccordionItem
      value={organization.id}
      className='border-none'
    >
      <AccordionTrigger
        onClick={() => onOpen(organization.id)}
        className={cn()}
      >
        <div className='flex items-center gap-x-2'>
          <div className='relative w-7 h-7'>
            <Image
              fill
              src={organization.imageUrl}
              alt="organization image"
              className='rounded-sm object-cover'
            />
          </div>
          <span className='font-medium text-sm'>
            {organization.name}
          </span>
        </div>
      </AccordionTrigger>
      <AccordionContent className=''>
        {routes.map((route) => (
          <Button
            key={route.href}
            size='sm'
            onClick={() => navigateTo(route.href)}
            className={cn()}
            variant='ghost'
          >
            {route.icon}
            {route.displayName}
          </Button>
        ))}
      </AccordionContent>
    </AccordionItem>
  )
}
```

##### Style SidebarItem

Add conditional styling to AccordionTrigger

- Add flex, items-center, padding, gap, and rounded-md
- Align text to the start with neutral gray color. On hover, set background to neutral gray. Remove the underline of text in both non-hover and hover states
- Conditional styling that will give a background and text color change to the AccordionItem that is currently active using the `isActive` prop, but lose the styling when the AccordionItem is open and expanded.
- When AccordionItem is expanded it should highlight the active element within it.

```tsx
      <AccordionTrigger
        onClick={() => onOpen(organization.id)}
        className={cn(
          'flex items-center p-1.5 gap-x-2 rounded-md',
          'transition text-start text-neutral-700 hover:bg-neutral-500/10 no-underline hover:no-underline',
          isActive && !isOpen && 'bg-sky-500/10 text-sky-700'
        )}
      >
```

Similarly, add conditional styling for the `Button` inside `AccordionContent`.

```tsx
      <AccordionContent className='pt-1 text-neutral-700'>
        {routes.map((route) => (
          <Button
            key={route.href}
            size='sm'
            onClick={() => navigateTo(route.href)}
            className={cn(
              'justify-start w-full font-normal pl-10 mb-1',
              pathname === route.href && 'bg-sky-500/10 text-sky-700'
            )}
            variant='ghost'
          >
            {route.icon}
            {route.displayName}
          </Button>
        ))}
      </AccordionContent>
```

#### Sidebar testing

With that we can now test the functionality of the Sidebar. We can see the conditional styling makes it visually easy for the user to determine which route or organization is active at any given moment. 

Another key feature is that clicking the `Boards` of another organization while a different one is active, will switch to that organization while also reflecting that change in both the URL and switcher component.

The next issue that comes up is that we need a way to render the `Sidebar` menu on mobile screens.

### Mobile Sidebar

There are a few ways to implement a mobile sidebar. One way is to put the sidebar in a column layout where it would be at the top, pushing the content downwards. Another way is to have a sidebar pop out with a button.

The architectural decision we'll go with for the mobile sidebar is to use state to control the mobile sidebar.

Let's install what we need:

- [Sheet | shadcn/ui Reference](https://ui.shadcn.com/docs/components/sheet)

```sh
npx shadcn-ui@latest add sheet
```

feat: add shadcn/ui Sheet component

- Install shadcn/ui Sheet component from [shadcn-ui/ui](https://github.com/shadcn-ui/ui) repository
- Copy and paste the code from [Sheet - shadcn/ui](https://ui.shadcn.com/docs/components/sheet) documentation
- Modify the code to fit the project requirements
- Import and use the Sheet component in `components\ui\sheet.tsx`

#### zustand state management

Next we want to use `zustand`, a state management solution.

- [zustand | Reference](https://docs.pmnd.rs/zustand/getting-started/introduction), a state management package

First let's walktrhough the [introduction of the zustand docs](https://docs.pmnd.rs/zustand/getting-started/introduction).

1. Installation

```sh
npm install zustand
```

2. First create a store

Your store is a hook! You can put anything in it: primitives, objects, functions. The `set` function merges state.

```js
import { create } from 'zustand'

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))
```

3. Then bind your components, and that's it!

You can use the hook anywhere, without the need of providers. Select your state and the consuming component will re-render when that state changes.

```js
function BearCounter() {
  const bears = useStore((state) => state.bears)
  return <h1>{bears} around here...</h1>
}

function Controls() {
  const increasePopulation = useStore((state) => state.increasePopulation)
  return <button onClick={increasePopulation}>one up</button>
}
```

Ok let's explain step 2.

zustand library is a state management solution for React. Zustand allows you to create a custom hook that can store and update your application's state.

```js
import { create } from 'zustand'

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))
```

```js
import { create } from 'zustand'
```

The first line of the code imports the `create` function from zustand, which is used to create a store hook. The `create` function takes a callback function as an argument, which receives a `set` function as a parameter. The `set` function is used to update the state immutably.

```js
const useStore = create((set) => ({
  // ...
}))
```

The second line of the code declares a constant called `useStore`, which is the name of the custom hook. The value of `useStore` is the result of calling the `create` function with a callback function.

```js
const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))
```

- The callback function returns an object that represents the initial state and some actions that can modify the state. 
- The state has *one* property called `bears`, which is a number that indicates how many bears are in the store. 
- The actions are *two* functions: `increasePopulation`, `removeAllBears`. 
- The `increasePopulation` function increments the `bears` property by one using the `set` function. 
- The `removeAllBears` function sets the `bears` property to zero using the `set` function. 

Lastly, with step 3 we "bind our components", which means to use the custom hook that you create with the `create` function to access and update state in your React components.

- [React Hooks | Reference](https://react.dev/reference/react/hooks), hooks let you use different React features from your components. TThey often start with the word `use`.

You can use the zustand hook anywhere, without the need of providers. You can also pass a selector function to the hook to get a slice of the state that you are interested in. 

To use the store hook in a React component, you can call it with a selector function as an argument. The selector function takes the state object as a parameter and returns a slice of the state that you want to access. For example, if you want to get the number of bears, you can write:

```js
const bears = useStore((state) => state.bears)
```

This will make the component re-render whenever the `bears` property changes. 

You can also access the actions from the state object and use them to update the state. For example, if you want to increase the population of bears, you can write:

```js
const increasePopulation = useStore((state) => state.increasePopulation)
increasePopulation()
```

This will update the state and cause the components that depend on the `bears` property to re-render.

###### Note: arrow function expression and function body

- [MDN - Arrow Functions and function body](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#function_body)

Let's take a closer look at the callback function inside `create()`.

```js
(set) => ({
  object: 1
})
```

is the same as

```js
(set) => {
  return {
    object: 1
  }
}
```

Arrow functions can have either an *expression* body or the usual *block body*.

In an expression body, only a single expression is specified, which becomes the implicit return value. In a block body, you must use an explicit `return` statement.

Returning object literals using the expression body syntax `(params) => { object: literal }` does not work as expected.

```js
// Calling func() returns undefined!
const func = () => { object: 1 }
```

This is because JavaScript only sees the arrow function as having an expression body if the token following the arrow is not a left brace, so the code inside braces ({}) is parsed as a sequence of statements, where `object` is a label, not a key in an object literal.

To fix this, wrap the object literal in parentheses:

```js
const func = () => ({ object: 1 });
```

##### zustand store

What's a "store" exactly? Are all hooks made in zustand a store?

In zustand, a store is a container for a specific piece of state and any functions that modify that state.

You can create a store with the `create` function, which returns a custom hook that you can use to access and update the state in your React components. So, yes, all hooks made in zustand are stores, and you can have multiple stores for different parts of your state.

There isn't a standard naming convention for zustand hooks, but the general rule is to use the "hook" prefix such as `useStore`, `useTodo` or `useCounter`. This is because zustand stores are custom hooks that can be used in React components.

In our case, we can name our hook either `useMobileSidebarStore` or just `useMobileSidebar`. I will go with the latter since it is shorter and more consistent with the hook prefix convention.

#### Use zustand to handle the state for our mobile sidebar

Now we can create a hook to help manage our state for the mobile sidebar.

Create a `hooks` folder at the base of the project, with a file named `useMobileSidebar.ts`.

- `import { create } from 'zustand'`
- Create type `MobileSidebar` which has the following properties: `{ isOpen, onOpen, onClose }`
- Use the `create` function to create the custom hook `useMobileSidebar` with *one* property `isOpen` and *two* actions `onOpen` and `onClose`

`hooks\useMobileSidebar.ts`

```ts
import { create } from 'zustand';

type MobileSidebarStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const useMobileSidebar = create<MobileSidebarStore>((set) => ({
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
}));
```

Let's assign the functions to the actions. We want to change the property of `isOpen` in the `useMobileSidebar`. 

To update and change the state we must use the `set` function.
- `onOpen` will use `set` to change the state of `isOpen` to `true`
- `onClose` will use `set` to change the state of `isOpen` to `false`

```ts
import { create } from 'zustand';

type MobileSidebarStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const useMobileSidebar = create<MobileSidebarStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
```

feat: implement onOpen and onClose actions for mobile sidebar

- Use the set function from zustand to update the isOpen state
- Set isOpen to true when onOpen is called
- Set isOpen to false when onClose is called

Then export the custom hook `useMobileSidebar` and also add [currying parenthesis](#zustand-with-typescript) to `create` by rewriting `create(...)` to `create<T>()(...)`.

```ts
import { create } from 'zustand';

type MobileSidebarStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useMobileSidebar = create<MobileSidebarStore>()((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
```

feat: export useMobileSidebar hook

Export the useMobileSidebar hook from the module, so that it can be imported and used by other components. This hook provides the state and actions for the mobile sidebar component, using Zustand and TypeScript.

##### zustand with TypeScript

There is one final change we have to make in our code, we have to add the currying `()(...)` as a workaround for [microsoft/TypeScript#10571](https://github.com/microsoft/TypeScript/issues/10571).

Going to provide two sources that states we need the currying parenthesis.

1. [zustand TypeScript Guide](https://docs.pmnd.rs/zustand/guides/typescript)

  The difference when using TypeScript is that instead of writing `create(...)`, you have to write `create<T>()(...)` (notice the extra parentheses `()` too along with the type parameter) where `T` is the type of the state to annotate it.

2. [zustand Github TypeScript Usage](https://github.com/pmndrs/zustand?tab=readme-ov-file#typescript-usage)

  Basic typescript usage doesn't require anything special except for writing `create<State>()(...)` instead of `create(...)`...

This is because the TypeScript version of `create` is a curried function that takes a type parameter and a state creator function as separate arguments. Without the parentheses, TypeScript will not be able to infer the type of the state correctly.

##### Why use a state management library like zustand?

I'll address some common questions that even I had when learning React and the intricacies of state.

1. What problem do state management libraries try to solve? Doesn't React have built-in state management solutions like [React useContext](https://react.dev/reference/react/useContext)?

- `useContext` is a React Hook that lets you read and subscribe to [context](https://react.dev/learn/passing-data-deeply-with-context) from your component.

**Answer: it's about preventing React from unnecessarily re-rendering our components.** 

We commonly build views where a certain data is accessed in multiple components. Data accessed in multiple components needs to be handled in a higher level common component. Handling the data accessed in multiple components in a common is called [lifting the state up](https://react.dev/learn/sharing-state-between-components). A side-effect of lifting the state up is that it causes unnecessary rendering of some components.

A state management library allows us to have a global state while re-rendering only those components that use the changing parts of the global state. With a state management library, our lifted-up sttate doesn't cause re-render of those children components that don't use the changing parts of the state.

2. How about React context API?

React Context API only enables us to avoid prop-drilling. It doesn't prevent the re-renders. On any changed to the lifted-up state, every component and its children that use the Context containing the state re-render. Context API does not provide a way to re-render only for a subset of the state changes.

3. So shouldn't we always use a state management library? 

No. There may be situations where we may not need a state management library even when we may have a global state.

We don't need to ooptimize state management if our global state changes in-frequently or if it causes only a few components to re-render.

Cons to adding a third-party state management library is:
- Additional learning
- Additional depedendency to be maintained
- More boilerplate code to repo

We should use it only if rendering components with React's built-in state management causes our UI to be heavy, slow or sluggish.

4. What state management library should we use?

It depends on the kind of state we seek to manage. There's two kinds of these.

 - I. Manage state based on the data on the sever?
 
 e.g., display products fetched from the server & allow update, delete for these product records stored on the server

 Use server state management libraries like react-query, redux-query, swx

- II. Manage state based on the client-side activity and no server-side syncing?

  e.g., browser-side filtering, slicing, zoom-in / zoom-out of the data on an analytics dashboard

  Use state management libraries like Zustand, Redux toolkit

Here is a an [npm package download trends for React state managment in the last 3 years](https://npm-compare.com/@reduxjs/toolkit,zustand,recoil,jotai,valtio/#timeRange=THREE_YEARS). As of Jan. 2024, @reduxjs/toolkit has had weekly downloads of 3,126,930 over zustand's 2,913,681 downloads. But @reduxjs/toolkit has 10,219 Github stars and zustand has 39,641 Github stars.

#### Develop the MobileSidebar

Create a file `app\(app)\(dashboard)\_components\MobileSidebar.tsx`

```tsx
import React from 'react';

export default function MobileSidebar() {
  return (
    <div>MobileSidebar</div>
  )
}
```

Inside `Navbar`, import and add the `MobileSidebar` right under the `<nav>`.

`app\(app)\(dashboard)\_components\Navbar.tsx`
```tsx
import MobileSidebar from './MobileSidebar';

export const Navbar = () => {
  return (
    <nav className='flex items-center fixed px-4 z-10 top-0 w-full h-14 border-b shadow-sm bg-white'>
      <MobileSidebar />
```

Back to `MobileSidebar.tsx`, mark it as `"use client"` at the top. Then add the imports we need:

- import { usePathname } from 'next/navigation';
- import React, { useEffect, useState } from 'react';
- import { useMobileSidebar } from '@/hooks/useMobileSidebar';

Then get the `pathname` from the `usePathname` hook. Afterwards, get the the state values from the `useMobileSidebar` hook.

```tsx
"use client";

import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { useMobileSidebar } from '@/hooks/useMobileSidebar';

export default function MobileSidebar() {
  // Get the current path of the page
  const pathname = usePathname();

  /* These values are used to control the visibility and behavior 
  of the mobile sidebar component */
  const isOpen = useMobileSidebar((state) => state.isOpen);
  const onOpen = useMobileSidebar((state) => state.onOpen);
  const onClose = useMobileSidebar((state) => state.onClose);

  return (
    <div>MobileSidebar</div>
  )
}
```

After adding the imports, state and actions to `MobileSidebar` we need to make sure that it runs only after component has mounted. In other words, we want to guarantee that the component runs on the client-side.

Before I explain it myself, there is a wonderful blog post named [The Perils of Hydration](https://www.joshwcomeau.com/react/the-perils-of-rehydration/) by Josh Comeau that discusses this in a user-friendly, accessible way that goes into deeper details of React, server-side rendering of Next.js, React app hydration and the DOM.

##### Mounting trick to fix Hydration errors in Next.js

What are hydration errors?

Hydration errors are errors that occur when React tries to attach event handlers and manage the state of a component that doesn't match the initial rendering. This mismatch can lead to unexpected behavior, such as missing or doubled event listeners, unhandled state changes, or even crashing the application. Hydration errors can happen when the server-rendered HTML and the client-rendered HTML are different, or when the client-side code relies on browser-only APIs or checks.

The mounting trick creates a `isMounted` state variable. It then runs `setIsMounted` to `true` inside a `useEffect`. Finally, it checks if the component has been mounted. If it hasn't, it returns `null`. Otherwise, it continues to render the component. This can help prevent hydration errors in Next.js.

```tsx
  // Declare isMounted state variable and initialize it to false
  const [isMounted, setIsMounted] = useState(false);

  // useEffect hook to set isMounted variable to true
  // Delays the execution of client-side-only code until after hydration
  useEffect(() => {
    setIsMounted(true);
  }, []); // Only run once after the initial render

  // Prevent rendering of the component before the effect has run
  // To protect from hydration errors or unwanted flashes of content
  if (!isMounted) {
    return null;
  }
```

This code does the following:

- It uses the `useState` hook to create a state variable called `isMounted` and a function to update it called `setIsMounted`. The initial value of `isMounted` is `false`, which means the component is not mounted yet.
- It uses the `useEffect` hook to run a function that sets `isMounted` to `true` after the component is mounted. The empty dependency array `[]` ensures that this function only runs once, after the initial render.
- It uses a conditional statement to return `null` if `isMounted` is `false`. This prevents the component from rendering anything before the `useEffect` function has run. This is done to avoid hydration errors or unwanted flashes of content.

To prevent hydration errors, the code above delays the execution of any client-side-only code until after the hydration process is completed. By returning `null` until `isMounted` is `true`, the code ensures that the server-rendered HTML and the client-rendered HTML are identical, and that no browser-only APIs or checks are used before the component is mounted. This way, the hydration process can succeed without any errors or flashes of content.

fix: add mounting trick to MobileSidebar component

Add a mounting trick to the MobileSidebar component to prevent hydration errors or flashes of content. The trick uses a state variable called isMounted and a useEffect hook to delay the rendering of the component until after the hydration process is completed. This ensures that the server-rendered HTML and the client-rendered HTML are identical, and that no browser-only APIs or checks are used before the component is mounted.

#### Mobile Sidebar functionality and output

feat: add UI elements and logic to MobileSidebar

Add UI elements such as Button, Menu, Sheet, and SheetContent to the MobileSidebar component. Use the useMobileSidebar hook to access and update the state of the sidebar. Add logic to close the sidebar when the pathname changes or before the component is mounted. This improves the user experience and performance of the mobile sidebar component.

Next we import some components we need for the output:

- `Menu` icon from `lucide-react`
- `Button`, `Sheet` & `SheetContent` from `@/components/ui`
- `Sidebar`

Next create a `useEffect` that calls `onClose` with a dependency array of `pathname` and `onClose`. This will close the `MobileSidebar` every time the pathname changes.

Then the output should contain a `Button` with the `Menu` icon which should be shown on screen sizes less than 768px and hidden when screen sizes are equal or larger than 768px. This `Button` will contain the `onOpen` function and encapsulates the interaction and functionality of the `MobileSidebar`.

After the `Button` is the `Sheet` with `SheetContent`. The `SheetContent` will reuse the `Sidebar` component but pass in a different `storageKey` so that the state for the `MobileSidebar` is saved but separate from the main desktop `Sidebar`. The `Sheet` will props `open={isOpen} onOpenChange={onClose}`.

```tsx
"use client";

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

import { useMobileSidebar } from '@/hooks/useMobileSidebar';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
} from '@/components/ui/sheet';
import Sidebar from './Sidebar';

export default function MobileSidebar() {
  // Get 0the current path of the page
  const pathname = usePathname();

  /* These values are used to control the visibility and behavior 
  of the mobile sidebar component */
  const isOpen = useMobileSidebar((state) => state.isOpen);
  const onOpen = useMobileSidebar((state) => state.onOpen);
  const onClose = useMobileSidebar((state) => state.onClose);

  // Declare isMounted state variable and initialize it to false
  const [isMounted, setIsMounted] = useState(false);

  // useEffect hook to set isMounted variable to true
  // Delays the execution of client-side-only code until after hydration
  useEffect(() => {
    setIsMounted(true);
  }, []); // Only run once after the initial render
  
  // Every time the pathname changes, close the MobileSidebar
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Prevent rendering of the component before the effect has run
  // To protect from hydration errors or unwanted flashes of content
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Button
        onClick={onOpen}
        className='block md:hidden'
        variant='ghost'
        size='sm'
      >
        <Menu className='h-4 w-4'/>
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent
          side='left'
          className='p-2 pt-10'
        >
          <Sidebar
            storageKey="mobileSidebarState"
          />
        </SheetContent>
      </Sheet>
    </>
  )
}
```

### Skeleton for Sidebar

- [Skeleton from shadcn/ui](https://ui.shadcn.com/docs/components/skeleton)

A skeleton component is a UI element that shows a placeholder for the expected shape of a component while it is loading. It is often used to improve the user experience by reducing the perceived loading time and avoiding layout shifts.

Goal: create a `Skeleton` for the `Sidebar`. Let's look at the place where we render the placeholder.

`app\(app)\(dashboard)\_components\Sidebar.tsx`
```tsx
  // Check if the organization data and the user memberships data are loaded
  // If any of them is not loaded or is loading, return a div element with a Skeleton component
  // The Skeleton component is a placeholder that shows the loading progress
  if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) {
    return (
      <div>
        <Skeleton />
      </div>
    )
  }
```

Instead we should return a component that follows the same structure as the output of the `Sidebar`.

Create a component `SkeletonSidebar` inside the global `components/ui` folder. We want it to be server-side rendered and in global `components/ui` so it can be loaded in first as a way to improve user experience by reducing the perceived loading time.

`components\ui\SkeletonSidebar.tsx`
```tsx
import React from 'react';

export default function SkeletonSidebar() {
  return (
    <div>SkeletonSidebar</div>
  )
}
```

Now import `SkeletonSidebar` and return that when conditionally rendering the placeholder.

feat: add SkeletonSidebar component to Sidebar

This commit adds the SkeletonSidebar component, which shows a placeholder for the sidebar while the data is loading, improving the user experience and avoiding layout shifts.

```tsx
import SkeletonSidebar from '@/components/SkeletonSidebar';

export default function Sidebar({
  storageKey = "sidebarState",
}: SidebarProps) {

  if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) {
    return (
      <SkeletonSidebar />
    )
  }

}
```

We want to emulate the output of the `Sidebar` component:

`app\(app)\(dashboard)\_components\Sidebar.tsx`
```tsx
  // Return the JSX for the sidebar component
  return (
    <>
      <div className='flex items-center mb-1 font-medium text-xs'>
        <span className='text-base pl-4'>
          Workspaces
        </span>
        <Button
          asChild
          className='ml-1'
          size='icon'
          type='button'
          variant='ghost'
        >
          <Link href='/org-selection'>
            <Plus
              className='h-4 w-4'
            />
          </Link>
        </Button>
      </div>
      <Accordion
        type='multiple'
        defaultValue={prevAccordionValue}
        className='space-y-2'
      >
        {userMemberships.data.map(({ organization }) => (
          <SidebarItem
            key={organization.id}
            isActive={activeOrg?.id === organization.id}
            isOpen={open[organization.id]}
            onOpen={onOpen}
            organization={organization as Organization}
          />
        ))}
      </Accordion>
    </>
  );
};
```

Let's first create a `Skeleton` for the `span`, `Button` and `Link`.

```tsx
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function SkeletonSidebar() {
  return (
    <div className='flex items-center justify-between mb-2'>
      {/* Skeleton for the Workspace text and Button */}
      <Skeleton className='h-10 w-[60%]' />
    </div>
  )
}
```

Next we want a way to represent the `SidebarItem`, to do that we need to create `SkeletonSidebarItem` component.

- Create the two styled `divs`that contains the `SidebarItem`
- Create the `Skeleton` for the `Image` component
- Create the `Skeleton` for the `Accordion` component

Enhance SkeletonSidebarItem component

This commit improves the SkeletonSidebarItem component, which renders
a placeholder for the SidebarItem component while it is loading.
It uses the Skeleton component from shadcn/ui to create the
image and accordion shapes.

`components\ui\SkeletonSidebarItem.tsx`
```tsx
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function SkeletonSidebarItem() {
  return (
    <div className="flex items-center gap-x-2">
      {/* Skeleton for the Image component of SidebarItem */}
      <div className="w-10 h-10 relative shrink-0">
        <Skeleton className='h-full w-full absolute'/>
      </div>
      {/* Skeleton for the Accordion component of SidebarItem */}
      <Skeleton className='h-10 w-full'/>
    </div>
  );
};
```

Now we can go back to the `SkeletonSidebar` and add a `div` withh `SkeletonSidebarItem` to represent the organizations.

```tsx
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import SkeletonSidebarItem from '@/components/ui/SkeletonSidebarItem';

/**
 * A skeleton component is a UI element that shows a placeholder for 
 * the expected shape of a Sidebar component while it is loading.
 * @returns A placeholder for the expected shape of a Sidebar
 */
export default function SkeletonSidebar() {
  return (
    <div className='flex items-center justify-between mb-2'>
      {/* Skeleton for the Workspace text and Button */}
      <Skeleton className='h-10 w-[60%]' />
      {/* Skeleton for the Sidebar item list */}
      <div className='space-y-2'>
        <SkeletonSidebarItem />
        <SkeletonSidebarItem />
        <SkeletonSidebarItem />
      </div>
    </div>
  )
}
```

### Settings Page

- [Clerk Organization Profile component | Reference](https://clerk.com/docs/references/javascript/clerk/organization-profile)

Next we need to create the `SettingsPage` for the organization.

`app\(app)\(dashboard)\org\settings\page.tsx`
```tsx
import React from 'react';

export default function SettingsPage() {
  return (
    <div>page</div>
  )
}
```

Then use `OrganizationProfile` component inside the `SettingsPage`

```tsx
import { OrganizationProfile } from '@clerk/nextjs';

export default function SettingsPage() {
  return (
    <div className='w-full'>
     <OrganizationProfile />
    </div>
  )
}
```

Now add the `appearance` and `card` prop to `OrganizationProfile` to enhance the appearance of the component.

style: update OrganizationProfile appearance

Use the appearance prop of the OrganizationProfile component from @clerk/nextjs to customize the rootBox and card elements. Remove the boxShadow and add a border to the card element. Set the width of both elements to 100% to fit the container.

```tsx
import React from 'react';
import { OrganizationProfile } from '@clerk/nextjs';

export default function SettingsPage() {
  return (
    <div className='w-full'>
     <OrganizationProfile
      appearance={{
        elements: {
          rootBox: {
            boxShadow: "none",
            width: "100%"
          },
          card: {
            border: "1px solid #e5e5e5",
            boxShadow: "none",
            width: "100%"
          }
        }
      }}
      />
    </div>
  )
}
```

Why remove the box shadow? Well we don't want it to look like a Modal. The `OrganizationProfile` should be on the page.

## Database

Let's setup the database. We are going to use Prisma.

- [Relational databases](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases-typescript-postgresql)

Let's start by installing:

```sh
npm install prisma --save-dev
```

You can now invoke the Prisma CLI by prefixing it with npx:
```sh
npx prisma
```
vNext, set up your Prisma project by creating your [Prisma schema](https://www.prisma.io/docs/orm/prisma-schema) file template with the following command:

```sh
npx prisma init
```

This command does two things:

1. creates a new directory called `prisma` that contains a file called `schema.prisma`, which contains the Prisma schema with your database connection variable and schema models

2. creates the [.env file](https://www.prisma.io/docs/orm/more/development-environment/environment-variables/env-files) in the root directory of the project, which is used for defining environment variables (such as your database connection)

The output of `npx prisma init`

```sh
npx prisma init                                                                                      

✔ Your Prisma schema was created at prisma/schema.prisma
  You can now open it in your favorite editor.

warn You already have a .gitignore file. Don't forget to add `.env` in it to not commit any private information.

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.

More information in our documentation:
https://pris.ly/d/getting-started
```

Next we either host our own database locally on our computer or use a database service. Whatever we go with we need two things:

1. database connection string, save it under `DATABASE_URL` inside `.env` file
2. Configure `schema.prisma`

Whenever we create changes to `schema.prisma`, we need to run the command:

```sh
prisma generate
```

This command will generate the Prisma Client. Then we can start querying our database. 

Next, we want to run the following command in the terminal

```sh
npx prisma db push
```

This will push the initial schema to the database. It will also synchronize it with a database provider service like planetscale, so that they will be in sync with any changes we made to the schema.

- [Prototyping your schema](https://www.prisma.io/docs/orm/prisma-migrate/workflows/prototyping-your-schema)

The command npx prisma db push is a way to prototype your database schema using Prisma. It does the following:

- It introspects your database to infer the current schema and compares it with your Prisma schema file.
- It executes the changes required to make your database schema reflect the state of your Prisma schema file. This may involve creating, altering, or dropping tables, columns, indexes, etc.
- It triggers the generators defined in your Prisma schema file, such as Prisma Client, to update your application code with the latest database schema.

### Prisma Client

- [Install Prisma Client](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/install-prisma-client-typescript-postgresql)

```sh
npm install @prisma/client
```

The install command invokes `prisma generate` for you which reads your Prisma schema and generates a version of Prisma Client that is tailored to your models.

Whenever you update your Prisma schema, you will have to update your database schema using either `prisma migrate dev` or `prisma db push`. This will keep your database schema in sync with your Prisma schema. The commands will also regenerate Prisma Client.

#### Querying the database

- [Querying the database | Prisma](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/querying-the-database-typescript-postgresql)

Create a library called `database.ts`, and set up Prisma Client.

`lib\database.ts`
```ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
```

Here's a quick overview of the different parts of the code snippet:

1. Import the `PrismaClient` constructor from the `@prisma/client` node module
2. Instantiate `PrismaClient`
3. Define an `async` function named `main` to send queries to the database
4. Call the `main` function
5. Close the database connections when the script terminates

Initialize Prisma Client and handle errors

- Import Prisma Client from @prisma/client
- Create a prisma instance and use it in an async main function
- Use .then() and .catch() to disconnect from the database and exit the process with an appropriate status code

#### Use global variable to avoid multiple Prisma Client instances

Since we are using NextJS 14, there is a feature in development called [Fast Refresh](https://nextjs.org/docs/architecture/fast-refresh) which gives you instantaneous feedback on edits made to your React components. Fast Refresh is enabled by default in all Next.js applications on 9.4 or newer. With Next.js Fast Refresh enabled, most edits should be visible within a second, **without losing component state**.

Fast Refresh however, can become an issue with Prisma Client in that it may create more than one instance. To solve this we need to create a utility in the `lib` that creates a global variable that saves the existing global prisma instance. We then compare the global instance of Prisma Client or create a new one. We also check if the environment is in production, then set it to the global instance.

feat: use global variable to avoid multiple Prisma Client instances

`lib\db.ts`
```ts
import { PrismaClient } from '@prisma/client'

/** 
 * Instantiate Prisma Client by defining a global prisma instance.
 *  
 * This code is a way to prevent creating multiple instances of 
 * Prisma Client in your application, which can lead to performance
 * issues or errors.
*/

// Declare a global variable prisma of type PrismaClient or undefined
declare global {
  var prisma: PrismaClient | undefined;
};

// Export a database variable that is either the existing global prisma instance or a new one
export const database = globalThis.prisma || new PrismaClient();

// If the environment is not production, assign the database variable to the global prisma variable
if(process.env.NODE_ENV !== "production") {
  globalThis.prisma = database;
}
```

### Planetscale

To streamline the process we will use prisma with SQL on planetscale.

**Option 2**: postgresql with [neon tech](https://neon.tech/docs/connect/connect-from-any-app)

Go through the [planetscale documentation](https://planetscale.com/docs) to set it up and get your DB connection string and paste into `.env` file.

Now in our `.env` file we have a variable `DATABASE_URL`, where it will store our connection string.

Next configure `schema.prisma`, for planetscale mySQL

```prisma
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
  relationMode = "prisma
}
```

### Models

The Prisma schema is a declarative way to define your application models and map them to your database. The Prisma schema is independent of the database provider you choose, so you can use the same syntax and logic to define your models for MySQL or PostgreSQL. However, there may be some differences in how Prisma handles certain features or data types depending on the database provider. For example, PostgreSQL supports enums and arrays, while MySQL does not. Prisma will automatically generate the appropriate SQL code for each database provider based on your Prisma schema.


#### Board Model

Let's create the first Model, `Board` which will have a `id` and `title`.

`prisma\schema.prisma`
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Board {
  id String @id @default(uuid())
  title String
}
```

Now to prototype the schema we can run the command

```sh
npx prisma db push
```

## Server Actions

[Server Actions & Mutations | Nextjs reference](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)

- Server Actions are **asynchronous functions** that are executed on the server. They can be used in Server and Client Components to handle form submissions and data mutations in Next.js applications.

### Mutate data in a server component

Instead of creating a POST route and API to create a `Board` in our database, we can use server actions.

Navigate to `[orgId]` page and render a `form` with an `input`.

`app\(app)\(dashboard)\org\[orgId]\page.tsx`
```tsx
import React from 'react';
import { auth } from '@clerk/nextjs';

const OrganizationIdPage = () => {
  const { userId, orgId } = auth();

  return (
    <div>
      <form>
        <input 
          id='title'
          name='title'
          placeholder='Enter a board title'
          required
          className='border-black border p-1'
        />
      </form>
    </div>
  );
};

export default OrganizationIdPage
```

Next we create an `async` function that takes the `title` from the `form` `input` and creates it in our database. Then we assign the function to the `action` property of the `form`.

```tsx
import { database } from "@/lib/database";

const OrganizationIdPage = () => {
  const { userId, orgId } = auth();

  async function createBoard(formData: FormData) {
    "use server";

    const title = formData.get("title") as string;

    await database.board.create({
      data: {
        title,
      },
    });
  }

  return (
    <div>
      <form action={createBoard}>
        <input 
          id='title'
          name='title'
          placeholder='Enter a board title'
          required
          className='border-black border p-1'
        />
      </form>
    </div>
  );
};
```

Let's refactor the server action and move it to a folder named `actions` at the base of the project. Name the file `createBoard.ts` and cut and paste the server action into it. Also move the `"use server"` directive to the top.

refactor: move createBoard logic to actions folder

`actions\createBoard.ts`
```tsx
"use server";

import { database } from "@/lib/database";

export default async function createBoard(formData: FormData) {
  const title = formData.get("title") as string;

  await database.board.create({
    data: {
      title,
    },
  });
}
```

Then we can clean up the org id page and simply import the server action and use it like this:

`app\(app)\(dashboard)\org\[orgId]\page.tsx`
```tsx
import createBoard from '@/actions/createBoard';

const OrganizationIdPage = () => {
  return (
    <div>
      <form action={createBoard}>
        <input 
          id='title'
          name='title'
          placeholder='Enter a board title'
          required
          className='border-black border p-1'
        />
      </form>
    </div>
  );
};
```

Let's also add a submit button for the org ID page.

```tsx
import { Button } from '@/components/ui/button';

const OrganizationIdPage = () => {
  return (
    <div>
      <form action={createBoard}>
        <input
          id='title'
          name='title'
          placeholder='Enter a board title'
          required
          className='border-black border p-1'
        />
        {/* Submit Button */}
        <Button type='submit'>
          Submit
        </Button>
      </form>
    </div>
  );
};
```

### Form Validation

As of now, the only form of validation and error checking we have is the native HTML that adds a `required` property to the form input. Let's improve it with [Zod](https://zod.dev/).

What is Zod?

Zod is a TypeScript-first schema declaration and validation library. It allows you to define the structure and constraints of your data types, and then validate them against any input. Zod can also infer the static TypeScript type from your schema, eliminating the need for duplicating type declarations. Zod is designed to be developer-friendly, flexible, and performant. You can use Zod to validate user input, API requests, configuration files, and more.

feat: use zod validation library for user data

Use Zod to define and validate the structure and constraints of user data types. Zod can also infer the TypeScript types from the schemas, eliminating the need for duplicating type declarations. Zod improves the readability, maintainability, and performance of the validation logic.

Install zod

```sh
npm install zod
```

- [zod basic usage](https://zod.dev/?id=basic-usage)

Create a `CreateBoard` object schema in `createBoard` server action.

`actions\createBoard.ts`
```ts
import { z } from "zod";

const CreateBoard = z.object({
  title: z.string(),
});

// ...
```

Then we can add form validation to the `title`.

Before zod validation:

`actions\createBoard.ts`
```ts
export default async function createBoard(formData: FormData) {
  const title = formData.get("title") as string;
```

After zod validation:

```ts
import { z } from "zod";

const CreateBoard = z.object({
  title: z.string(),
});

export default async function createBoard(formData: FormData) {
  const { title } = CreateBoard.parse({
    title: formData.get("title"),
  });
```

refactor(board): validate user input with zod

Use Zod to define and validate the structure and constraints of the title field. Zod can also infer the TypeScript types from the schemas, eliminating the need for duplicating type declarations. Zod improves the readability, maintainability, and performance of the validation logic.

### Query and display Boards

In the org ID page, query the boards. Then create a `div` below the output to map out each board to a div.

```tsx
import { database } from '@/lib/database';

const OrganizationIdPage = async () => {
  const boards = await database.board.findMany();

  return (
    <div className='flex flex-col space-y-4'>
      <form action={createBoard}>
        <input
          id='title'
          name='title'
          placeholder='Enter a board title'
          required
          className='border-black border p-1'
        />
        {/* Submit Button */}
        <Button type='submit'>
          Submit
        </Button>
      </form>
      <div className='space-y-2'>
        {boards.map((board) => (
          <div key={board.id}>
            {board.title}
          </div>
        ))} 
      </div>
    </div>
  );
};
```

### Display new boards

A current issue at the moment is that when a user submits a new board in the org ID page, the new board does not display in the mapping. However the new board is in the database.

We need to revalidate the path so that the newly added board will be display immediately to the user.

Introducing a new feature for revalidation in [Next.js_14](https://nextjs.org/blog/next-14)
- [revalidatePath() | Nextjs 14](https://nextjs.org/docs/app/api-reference/functions/revalidatePath)

`revalidatePath` allows you to purge [cached data](https://nextjs.org/docs/app/building-your-application/caching) on-demand for a specific path.

We want to do this in our server action `createBoard`. We should pass in the path to the `/org` with the dynamic organization id. For now we can hardcode it, but later we will dynamically get the org ID.

`actions\createBoard.ts`
```typescript
"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { database } from "@/lib/database";

const CreateBoard = z.object({
  title: z.string(),
});

export default async function createBoard(formData: FormData) {
  const { title } = CreateBoard.parse({
    title: formData.get("title"),
  });

  await database.board.create({
    data: {
      title,
    },
  });

  revalidatePath('/org/org_yourOrgIdHere');
}
```

With this in place, we can now add a new board in the org ID page and when we hit submit we will see the list of boards update to incorporate the new board.

### Passing data into Server action

Now that we can create a board, how do we update and delete? 

We need to have access to an ID inside the server action `createBoard`.

Let's first refactor the code where we map out the Board. Create a `Board.tsx` component inside `/components/ui` which accepts two props: `{ id, title }` and renders them as output. 

```tsx
import React from 'react';

interface BoardProps {
  id: string;
  title: string;
};

export default function Board({
  id,
  title,
}: BoardProps) {
  return (
    <div>
      {title}
      {id}
    </div>
  )
}
```

Then inside org ID page, import the Board component and map out the fetched boards into a `Board` component.

```tsx
import Board from '@/components/Board';

const OrganizationIdPage = async () => {
  const boards = await database.board.findMany();

  return (
    <div className='flex flex-col space-y-4'>
      {/* ... */}
      <div className='space-y-2'>

        {boards.map((board) => (
          <Board  
            key={board.id} 
            id={board.id}
            title={board.title}
          />
        ))}

      </div>
    </div>
  );
};
```

### Develop the Board component

feat: add update and delete buttons to Board

- Convert the `div` to a `form` in the output
- Add update and delete buttons

```tsx
import React from 'react';
import { Button } from '@/components/ui/button';

interface BoardProps {
  id: string;
  title: string;
};

export default function Board({
  id,
  title,
}: BoardProps) {
  return (
    <form className='flex items-center gap-x-2'>
      <p>{title}</p>
      <p>{id}</p>
      <Button 
        type="submit"
        variant="default"
        size="sm"
      >
        Update
      </Button>
      <Button 
        type="submit"
        variant="destructive"
        size="sm"
      >
        Delete
      </Button>
    </form>
  )
}
```

Next we create the server actions to add the functionality to the buttons.

In `/actions` create the files: `updateBoard.ts` and `deleteBoard.ts`.

updateBoard server action will
- Have `{ id, boardData }` as parameters
- Update the board un the database with `boardData` using the the `id`
- Revalidate path to reflect the newly updated board

`actions\updateBoard.ts`
```ts
"use server";

import { revalidatePath } from 'next/cache';

import { database } from '@/lib/database';

interface BoardData {
  title: string;
};

export default async function updateBoard(id: string, boardData: BoardData) {

  await database.board.update({
    where: {
      id: id,
    },
    data: {
      title: boardData.title
    }
  });

  revalidatePath('/org/org_yourOrgIdHere');
}
```

deleteBoard server action wwill
- Have `id` as parameters
- Delete the board in the database given the `id`
- Revalidate path to reflect the deleted board

```ts
"use server";

import { revalidatePath } from 'next/cache';

import { database } from '@/lib/database';

export default async function deleteBoard(id: string) {
  // 
  await database.board.delete({
    where: {
      id: id
    }
  });

  revalidatePath('/org/org_yourOrgIdHere');
}
```

Now we can use the server actions and assign it to the corresponding buttons in the `Board` component

`components\Board.tsx`
```tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import deleteBoard from '@/actions/deleteBoard';
import updateBoard from '@/actions/updateBoard';

interface BoardProps {
  id: string;
  title: string;
};

interface BoardData {
  title: string;
};

export default function Board({
  id,
  title,
}: BoardProps) {
  
  const handleDelete = async () => {
    console.log('Deleting board with id:', id);
    await deleteBoard(id);
  };
  
  const handleUpdate = async () => {
    console.log('Updating board with id:', id);
    const data = { title: "updated_title"};
    await updateBoard(id, data);
  };

  return (
    <form className='flex items-center gap-x-2'>
      <p>{title}</p>
      <p>{id}</p>
      <Button 
        type="submit"
        variant="default"
        size="sm"
        onClick={handleUpdate}
      >
        Update
      </Button>
      <Button 
        type="submit"
        variant="destructive"
        size="sm"
        onClick={handleDelete}
      >
        Delete
      </Button>
    </form>
  )
}
```

### BoardForm component

Looking at the org ID page, we should also isolate the form that creates a board. Refactor the create `form` including the submit button into a component called `BoardForm`.

Let's also make it a client component

`components\BoardForm.tsx`
```tsx
"use client";

import React from 'react';

import createBoard from '@/actions/createBoard';
import { Button } from '@/components/ui/button';

/* Create a form for creating a new board */
export default function BoardForm() {
  return (
    <form action={createBoard}>
      <input
        id='title'
        name='title'
        placeholder='Enter a board title'
        required
        className='border-black border p-1'
      />
      <Button type='submit'>
        Submit
      </Button>
    </form>
  )
}
```

Now refactor `OrganizationIdPage` with `BoardForm`

refactor: use BoardForm component

- Replace the inline form with the BoardForm component
- Import BoardForm from '@/components/BoardForm'
- Remove unused imports and comments

```tsx
import React from 'react';
import { database } from '@/lib/database';
import Board from '@/components/Board';
import BoardForm from '@/components/BoardForm';

const OrganizationIdPage = async () => {
  // Fetch the boards from the database
  const boards = await database.board.findMany();

  return (
    <div className='flex flex-col space-y-4'>
      <BoardForm />
      {/* Create a div for displaying the boards */}
      <div className='space-y-2'>
        {/* Map over the boards and render a Board component for each one */}
        {boards.map((board) => (
          <Board
            key={board.id}
            id={board.id}
            title={board.title}
          />
        ))}
      </div>
    </div>
  );
};

export default OrganizationIdPage
```

## Loading states and errors in form fields

An advantage of refactoring the `BoardForm` client component is that we can have specific loading states and display errors inside the fields. We will be using `useFormState` hook.

- [useFormState | React Reference](https://react.dev/reference/react-dom/hooks/useFormState)
- `useFormState` is a Hook that allows you to update state based on the result of a form action.
- Usage: `const [state, formAction] = useFormState(fn, initialState, permalink?);`
  
Call useFormState at the top level of your component to create component state that is updated when a form action is invoked. You pass `useFormState` an existing form action function as well as an initial state, and it returns a new action that you use in your form, along with the latest form state. The latest form state is also passed to the function that you provided.

The form state is the value returned by the action when the form was last submitted. If the form has not yet been submitted, it is the initial state that you pass.

If used with a **Server Action**, `useFormState` **allows the server's response from submitting the form to be shown even before hydration has completed.**

Parameters of `useFormState`:

- `fn`: The function to be called when the form is submitted or button pressed. When the function is called, it will receive the previous state of the form (initially the `initialState` that you pass, subsequently its previous return value) as its initial argument, followed by the arguments that a form action normally receives.
- `initialState`: The value you want the state to be initially. It can be any serializable value. This argument is ignored after the action is first invoked.

### Use `useFormState` hook for form control

feat: use useFormState hook for form control

- Import useFormState hook from react-dom
- Create a state and an action for the form using useFormState
- Pass the formAction as the action prop to the form element

Let's create the `initialState` and call the hook `useFormState` inside the `BoardForm`. Instead of using the`createBoard` server action directly inside the form's `action`, we use the `formAction` that we get from the `useFormState` hook.

`components\BoardForm.tsx`
```tsx
"use client";

import React from 'react';
import { useFormState } from 'react-dom';

import createBoard from '@/actions/createBoard';
import { Button } from '@/components/ui/button';

/* Create a form for creating a new board */
export default function BoardForm() {

  const initialState = {
    errors: {},
    message: "",
  };

  const [state, formAction] = useFormState(createBoard, initialState);

  return (
    <form action={formAction}>
      <input
        id='title'
        name='title'
        placeholder='Enter a board title'
        required
        className='border-black border p-1'
      />
      <Button type='submit'>
        Submit
      </Button>
    </form>
  )
}
```

#### Modify `createBoard` server action to fix "No overload matches this call"

By adding `useFormState` we also need to modify the `createBoard` server action as we get this error in the terminal:

```sh
No overload matches this call.
  Overload 1 of 2, '(action: (state: void) => void | Promise<void>, initialState: void, permalink?: string | undefined): [state: void, dispatch: () => void]', gave the following error.
    Argument of type '(formData: FormData) => Promise<void>' is not assignable to parameter of type '(state: void) => void | Promise<void>'.
      Types of parameters 'formData' and 'state' are incompatible.
        Type 'void' is not assignable to type 'FormData'.
  Overload 2 of 2, '(action: (state: void, payload: unknown) => void | Promise<void>, initialState: void, permalink?: string | undefined): [state: void, dispatch: (payload: unknown) => void]', gave the following error.
    Argument of type '(formData: FormData) => Promise<void>' is not assignable to parameter of type '(state: void, payload: unknown) => void | Promise<void>'.
```

Navigate to `createBoard.ts`.

feat: add field validation & state to createBoard

- Add [zod's string-specific validations](https://zod.dev/?id=strings) to the object schema, a minimum of 3 characters and a message on error
- Create a type `State` which is similar in shape as the `initialState`, meaning it contains a message of type string and errors
- Assign the type of `State` to a new parameter called `prevState` to the `createBoard` function
- During validation we do not want Zod to throw an error, but an error instance so replace `parse()` with [safeParse](https://zod.dev/?id=safeparse) method and assign it to variable called `validatedFields`
- Check if `validateFields` has `success` property, if not then return with error message

`actions\createBoard.ts`
```tsx
"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { database } from "@/lib/database";

export type State = {
  errors?: {
    title?: string[];
  };
  message?: string | null;
};

const CreateBoard = z.object({
  title: z.string().min(3, {
    message: "Must be 3 or more characters long",
  }),
});

export default async function createBoard(
  prevState: State,
  formData: FormData
) {
  const validatedFields = CreateBoard.safeParse({
    title: formData.get("title"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields.",
    };
  }

  const { title } = validatedFields.data;

  try {
    await database.board.create({
      data: {
        title,
      },
    });
  } catch (error) {
    console.log(`Database Error: ${error}`);
  }

  revalidatePath("/org/org_yourOrgIdHere");
}
```

Let's also add a redirect to the path at the end:

```ts
import { redirect } from "next/navigation";

export default async function createBoard(
  prevState: State,
  formData: FormData
) {
  // ...

  const pathname = `/org/org_yourOrgIdHere`;
  revalidatePath(pathname);
  redirect(pathname);
}
```

Now with that setup this should fix the "No overload matches this call" error.

#### Render the error message for the form field

feat(board): display validation errors in BoardForm

Back to `BoardForm`, let's render the error message if it exists within the `state`

```tsx
"use client";

import React from 'react';
import { useFormState } from 'react-dom';

import createBoard from '@/actions/createBoard';
import { Button } from '@/components/ui/button';

export default function BoardForm() {

  const initialState = {
    errors: {},
    message: "",
  };

  const [state, formAction] = useFormState(createBoard, initialState);

  return (
    <form action={formAction}>
      <div className="flex flex-col space-y-2">
        <input
          id='title'
          name='title'
          placeholder='Enter a board title'
          required
          className='border-black border p-1'
        />
        {state?.errors?.title ? (
           <div>
              {state.errors.title.map((error: string) => (
                <p key={error} className='text-rose-500'>
                  {error}
                </p>
              ))}
           </div>
        ) : null}
      </div>
      <Button type='submit'>
        Submit
      </Button>
    </form>
  )
}
```

Why is this really interesting? We do not need to have javascript enabled to have form validation or error states. We are doing server-side form validation and error state management through server actions.

#### Loading states 

When user submits an item in the `BoardForm` and it was successful, during that time we would want to disable the submit button.

- [useFormStatus | React Reference](https://react.dev/reference/react-dom/hooks/useFormStatus)
- `useFormStatus` is a Hook that gives you status information of the last form submission.
- `const { pending, data, method, action } = useFormStatus();`
- To get status information, the `Submit` component must be rendered within a `<form>`. The Hook returns information like the `pending` property which tells you if the form is actively submitting.

Let's first refactor the output of the `BoardForm` into `BoardFormInput` component (create it in `/components` folder) that accepts the prop `errors` where we will pass in the `state.errors` directly.

Refactor both board form input and board form button inside `BoardForm`.

```tsx
import BoardFormInput from '@/components/BoardFormInput';
import BoardFormButton from '@/components/BoardFormButton';

export default function BoardForm() {

  const initialState = {
    errors: {},
    message: "",
  };

  const [state, formAction] = useFormState(createBoard, initialState);

  return (
    <form action={formAction}>
      <BoardFormInput errors={state?.errors}/>
      <BoardFormButton />
    </form>
  )
}
```

Install [shadcn/ui Input](https://ui.shadcn.com/docs/components/input)

```sh
npx shadcn-ui@latest add input
```

Then inside the `BoardFormInput`

- Create `BoardFormInputProps` interface to accept `errors`
- Return a `div` that contains the `input` and the conditional render for error messages
- Replace the `input` element with `Input` component, and we can remove the `className` prop

`components\BoardFormInput.tsx`
```tsx
"use client";

import React from 'react';

import { Input } from '@/components/ui/input';

interface BoardFormInputProps {
  errors?: {
    title?: string[];
  }
}

export default function BoardFormInput({
  errors
} : BoardFormInputProps) {

  return (
    <div className="flex flex-col space-y-2">
      <Input
        id='title'
        name='title'
        placeholder='Enter a board title'
        required
      />
      {errors?.title ? (
        <div>
          {errors.title.map((error: string) => (
            <p key={error} className='text-rose-500'>
              {error}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  )
}
```

Now we can add the loading state by using the `pending` property from `useFormStatus` hook. We can now add the `disabled` prop to the `Input` component using the `pending` status:

useFormStatus to disable input on form submission

```tsx
import { useFormStatus } from 'react-dom';
// ...
export default function BoardFormInput({
  errors
} : BoardFormInputProps) {

  const { pending } = useFormStatus();

  return (
    <div className="flex flex-col space-y-2">
      <Input
        id='title'
        name='title'
        placeholder='Enter a board title'
        required
        disabled={pending}
      />
```

Similary, extract out `BoardFormButton` and add the `disabled` prop

useFormStatus to disable button when submitting

`components\BoardFormButton.tsx`
```tsx
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';

export default function BoardFormButton() {

  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type='submit'>
      Submit
    </Button>
  )
}
```

So far `BoardFormButton` hardcodes "Submit" as the children prop, but we want to re-use this component to also handle other types of buttons such as the delete button. Let's parameterize `BoardFormButton`.

Parameterize BoardFormButton component

The BoardFormButton component was previously hard-coded to render a submit button with the text "Submit". This commit adds props to the component to allow customization of the button content, size, type, variant, and onClick handler. This makes the component more re-usable and flexible for different use cases.

```tsx
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';

interface BoardFormButtonProps {
  children: React.ReactNode;
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
  type: "submit" | "reset" | "button";
  variant?: "default" | "destructive" | "outline" | "secondary" | 
            "ghost" | "link" | "primary" | null | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function BoardFormButton({
  children,
  size,
  type,
  variant,
  onClick,
}: BoardFormButtonProps ) {

  const { pending } = useFormStatus();

  return (
    <Button 
      disabled={pending} 
      type={type} 
      variant={variant} 
      size={size} 
      onClick={onClick}
    >
      {children}
    </Button>
  )
}
```

Now we can pass the right props to "Submit" button in the `BoardForm`

`components\BoardForm.tsx`
```tsx
export default function BoardForm() {
  // ...
  return (
    <form action={formAction}>
      <BoardFormInput errors={state?.errors}/>
      <BoardFormButton type="submit" variant="default" size="default">
        Submit
      </BoardFormButton>
    </form>
  )
}
```

And also re-use the `BoardFormButton` component to create a delete button with the `onClick` assigned to a delete handler.

Refactor delete button to BoardFormButton in Board

The BoardFormButton component is a parameterized version of the Button component that can be customized with props. This commit replaces the Button component with the BoardFormButton component in deleting a board. The variant prop is set to destructive to characterize the desired functionality and appearance of the button.

```tsx
export default function Board({
  id,
  title,
}: BoardProps) {
  
  const handleDelete = async () => {
    console.log('Deleting board with id:', id);
    await deleteBoard(id);
  };
  
  // ...

  return (
    <form className='flex items-center gap-x-2'>
      <p>{title}</p>
      <p>{id}</p>

      <BoardFormButton
        type="submit"
        variant="destructive"
        size="sm"
        onClick={handleDelete}
      >
        Delete
      </BoardFormButton>

    </form>
  )
}
```

## Server Action Abstraction

---

Add section on server action abstraction

This commit adds a new section to the markdown file that explains how to create a server action abstraction that is type safe. The server action abstraction is a asynchronous function that is executed on the server to handle form submissions and data mutations. The abstraction handles the input, output, validation, and error handling. The section describes the motivation, design, implementation, and usage of the creating the function.

---

I plan to use as much server actions and as little API routes as possible in this project.

This section will be a way to aggregate my notes and design phase of the app.

Here is a diagram of the use case for server actions. 

- Server Action
  1. Input & Output (serverActionTypes.ts)
  2. Zod Validation (serverActionSchema.ts)
  3. Server Action  (serverAction.ts) or (index.ts)

We can break this up into 3 sections:

1. Input & Output
   - types.ts
   - Defines the shape of the data that the user will input
   - Defines the shape of the data that we expect to output from the server action
     - e.g., an Error or specific type from Prisma Database
2. Zod Validation
  - schema.ts
  - Contains our zod validation, schema, etc.
  - The schema will be our input type
3. Server Action
  - index.ts
  - The server action itself
  - Executes the asynchrounouse function that are executed on the server
  - Handle form submissions and data mutations in Next.js applications

### Server Action Abstraction

Let's say we want to break down the `createBoard` server action. When abstracting the `createBoard.ts` file into three distinct parts, you can organize them as follows:

1. **Type Definitions (Inputs and Outputs)**:
    - In this section, define the TypeScript types or interfaces that represent the inputs and outputs for creating a board. These types should capture the relevant data structures needed for the `createBoard` functionality. For example:

    ```typescript
    // createBoardTypes.ts

    // Input type for creating a board
    export interface CreateBoardInput {
      title: string;
      // Other relevant properties...
    }

    // Output type for the result of creating a board
    export interface CreateBoardOutput {
      boardId: string;
      // Other relevant properties...
    }
    ```

2. **Validation Rules**:
    - Here, encapsulate the validation rules specific to creating a board. You can use a library like Zod (as mentioned earlier) to define validation schemas. For instance:

    ```typescript
    // createBoardValidation.ts

    import { z } from 'zod';

    export const CreateBoardSchema = z.object({
      title: z.string().min(3, 'Must be 3 or more characters long.'),
      // Other validation rules...
    });
    ```

3. **Server Action (createBoard)**:
    - Implement the actual server action responsible for creating a board. This section should handle business logic, database interactions, and any other necessary steps. For example:

    ```typescript
    // createBoardServerAction.ts

    import { CreateBoardInput, CreateBoardOutput } from './createBoardTypes';
    import { CreateBoardSchema } from './createBoardValidation';

    export async function createBoard(input: CreateBoardInput): Promise<CreateBoardOutput> {
      // Validate input using CreateBoardSchema
      const validatedInput = CreateBoardSchema.parse(input);

      // Perform database operations, create the board, and return the result
      const boardId = await createBoardInDatabase(validatedInput);

      return { boardId };
    }

    // Other helper functions or database interactions...
    ```

In summary, we can break it down to these 3 distinct parts:

- Server Action Abstraction (Type-safe)
  1. **Type Definitions: Inputs & Outputs** 
      - `serverActionTypes.ts`
  2. **Validation Rules**
      - `serverActionSchema.ts`
  3. **Server Action**    
      - `serverAction.ts`

### Benefits of Abstraction in programming

The form of abstraction we described, where we break down a single file into three distinct parts, has several related terms in programming:

1. **Data Abstraction**:
    - This pertains to abstracting data entities. It involves defining types, interfaces, and structures that represent data without exposing the internal implementation details. In our case, defining the types of inputs and outputs for creating a board falls under data abstraction.

2. **Process Abstraction**:
    - Process abstraction hides the underlying implementation of a process or functionality. It focuses on how a task is performed rather than the specific details of how it's done. Our third part, the `createBoard` server action itself, aligns with process abstraction.

3. **Modularization**:
    - Modularization is the practice of dividing a program into smaller, self-contained modules or components. Each module handles a specific aspect of functionality. In our scenario, splitting the `createBoard.ts` file into separate parts demonstrates modularization.

4. **Decomposition**:
    - Decomposition involves breaking down a complex problem or system into smaller, manageable parts. By separating the validation rules, type definitions, and server action, we're effectively decomposing the original file.

5. **Separation of Concerns (SoC)**:
    - SoC is a design principle that advocates separating different aspects of a software system to improve maintainability and readability. Our approach aligns with SoC by clearly delineating responsibilities for validation, types, and server logic.

Remember that these terms are not mutually exclusive, and often, multiple concepts overlap when designing well-structured software. 

#### Extra notes to help create server action abstraction

Approaches:

- Planning to create a function called `createServerAction`.
- Higher order function
- Type safe on both inputs and outputs
- Wrap each of these distinct segments with a wrapper
  - useSafeServerAction?
  - createAction?
  - useActionEffect<T, U, V>(input: T, schema: z.Schema<U>, handler: (output: U) => Promise<V>)

A function that creates another function is called a **higher-order function**. Higher-order functions are functions that can take other functions as arguments or return other functions as results. For example, in JavaScript, the `map` function is a higher-order function that takes a function and an array as arguments, and returns a new array with the function applied to each element.

A wrapper function is a specific kind of higher-order function that calls another function with little or no additional computation. Wrapper functions are used to simplify complex systems by hiding the details of the inner function and focusing on the essential features of the outer function. For example, in Java, the `MouseAdapter` class is a wrapper function that implements the `MouseListener` interface with empty methods, so that subclasses can override only the methods they need.

A factory in programming is a function or a method that creates and returns objects of different types or classes, without specifying the exact type or class of the object in advance. A factory can be useful for simplifying complex systems, reusing code, and increasing flexibility and modularity. A factory can be implemented in various ways, such as using abstract data types, subroutines, polymorphism, or software components. There are also different design patterns that use factories, such as the factory method pattern and the abstract factory pattern.

A factory for functions is a higher-order function that creates and returns other functions, without specifying the exact type or implementation of the function in advance. A factory for functions can be implemented in various ways, depending on the programming language and the design pattern. For example, in JavaScript, a factory for functions can be a function that takes some parameters and returns a closure that uses those parameters in its scope. In Java, a factory for functions can be a method that uses lambda expressions or method references to create instances of functional interfaces.

### Implementation Attempt 1

Create a file named `createServerAction.ts` inside `/lib`.

It follows the convention of starting with `create`, which indicates that it is a factory function that returns a new object or function. It also uses a descriptive name that reflects the purpose of the function, which is to create a server action. 

However, it does not specify what kind of server action it creates, or how it is different from other server actions. It also does not reflect the return value or type of the function, which could be useful for type checking and documentation.

An alternative could be: 

```ts
createServerActionEffect<T, U, V>(input: T, schema: z.Schema<U>, handler: (output: U) => Promise<V>)
```

This name indicates that the function creates a server action effect, which is a async function that performs a side effect based on the input, schema, and handler parameters. It also uses generics to specify the types of the input, output, and return value of the function. The name is descriptive, concise, and follows the convention of factory functions.

For now let's keep it at `createServerAction`.

### Implementation of createBoard with abstraction

- Server Action Abstraction (Type-safe)
  1. **Type Definitions: Inputs & Outputs** 
      - `serverActionTypes.ts`
  2. **Validation Rules**
      - `serverActionSchema.ts`
  3. **Server Action**    
      - `index.ts`

Let's try re-creating `createBoard` server action with the abstraction.

Let's look at the `createBoard.ts` server action in its entirety and see how we can break it down to the 3 parts.

`actions\createBoard.ts`
```ts
"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

import { database } from "@/lib/database";

export type State = {
  errors?: {
    title?: string[];
  },
  message?: string | null;
};

// Define the CreateBoard object schema
const CreateBoard = z.object({
  title: z.string().min(3, {
    message: "Must be 3 or more characters long",
  }),
});

export default async function createBoard(
  prevState: State,
  formData: FormData
) {
  // Validate the form data using the CreateBoard schema
  const validatedFields = CreateBoard.safeParse({
    title: formData.get("title"),
  });

  // If zod validation fails, then we will have an array of errors for a specific field
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields.",
    }
  }

  // Destructure the title property from the validated data
  const { title } = validatedFields.data;

  // Try to create a new board in the database
  try {
    await database.board.create({
      data: {
        title,
      },
    });
  } catch (error) {
    console.log(error);
    return {
      message: `Database Error: {error}`,
    }
  }

  // Revalidate and redirect to given path
  const pathname = `/org/org_yourOrgIdHere`;
  revalidatePath(pathname);
  redirect(pathname);
}
```

Inside of `/actions` create a folder `createBoard`. Inside we will create the following files:

- Server Action: createBoard
  1. Input & Output (createBoardTypes.ts)
  2. Zod Validation (createBoardSchema.ts)
  3. Server Action  (index.ts)

#### createBoard: schema that defines Validation Rules

`createBoardSchema.ts` is a zod object schema that defines validation rules for creating a board.

`actions\createBoard\createBoardSchema.ts`
```ts
import { z } from 'zod';

/**
 * Define the CreateBoard object schema.
 * 
 * Add custom error messages for: required fields, 
 * invalid type and minimum length.
 */
export const CreateBoard = z.object({
  title: z.string({
    required_error: "Title is required", 
    invalid_type_error: "Title is required", 
  }).min(3, {
    message: "Must be 3 or more characters long.", 
  }),
});
```

In this code snippet:
- We import the `z` module from the Zod library.
- We create a schema called `CreateBoard` using `z.object()`.
- The `CreateBoard` schema defines an object with a single property called `title`.
- The `title` property is of type `z.string()`, which means it should be a string.
- We customize the error messages for required fields and invalid types.
- Additionally, we specify that the `title` must be at least 3 characters long.

#### createBoard: Type Definitions

`createBoardTypes.ts` defines the TypeScript types or interfaces that represent the inputs and outputs for creating a board. These types should capture the relevant data structures needed for the `createBoard` functionality.

`actions\createBoard\createBoardTypes.ts`
```ts
import { z } from 'zod';

// Import Board, the expected output type, from Prisma client
import { Board } from '@prisma/client';

// Import the 'CreateBoard' schema (validation rules)
import { CreateBoard } from './createBoardSchema';

// Define a TypeScript type named 'Input'
// The type is inferred from the 'CreateBoard' schema using 'z.infer'
export type Input = z.infer<typeof CreateBoard>;
```

Here's what each part does:

1. **Importing 'z' Module**:
    - We import the `z` module from the Zod library. This module provides tools for defining validation schemas and working with data types.

2. **Importing 'Board' Type**:
    - We import the `Board` type from the Prisma client. This type likely represents a database entity related to boards (e.g., a table in the database).

3. **Importing 'CreateBoard' Schema**:
    - We import the `CreateBoard` schema from the local file `createBoardSchema.ts`. This schema likely defines validation rules for creating a board (e.g., title length, required fields).

4. **Defining 'Input' Type**:
    - We create a TypeScript type called `Input`.
    - The type is inferred using `z.infer<typeof CreateBoard>`, which means it takes on the shape of the `CreateBoard` schema.
    - In other words, `Input` represents the expected input data structure when creating a board, based on the validation rules defined in `CreateBoard`.

### Improve createServerAction

Currently, `createServerAction.ts` just has this:

`lib\createServerAction.ts`
```ts
/* Imports */
import { z } from "zod";

function createServerActionEffect<T, U, V>(input: T, schema: z.Schema<U>, handler: (output: U) => Promise<V>)
```

We need to define a type with [generics](https://www.typescriptlang.org/docs/handbook/2/generics.html) which should be type-safe for every action we create. All we need is the `Input` type we expect the user to pass in, and the `Output` type which we expect the user to receive.

- Output could either be a 
  - success like `data` which can either be a `Board` type from prisma 
  - error which is a string
  - fieldErrors which is an object with keys inside and values set to an array of errors (string)

Let's defines two types: `FieldErrors<T>` and `ActionState<InputType, OutputType>`. 

feat: add FieldErrors and ActionState types

This commit adds the FieldErrors<T> and ActionState<InputType, OutputType> types
to the lib/createServerAction.ts file. These types will be used for handling
validation errors and action outcomes in our application.

```ts
/* Types */
export type FieldErrors<T> = {
  [K in keyof T]?: string[];
};

export type ActionState<InputType, OutputType> = {
  fieldErrors?: FieldErrors<InputType>;
  error?: string | null;
  data?: OutputType;
};
```

Let's break it down:

1. **`FieldErrors<T>`**:
    - This type is a generic type that takes another type `T` as a parameter.
    - It represents an object where each property key (denoted by `K`) corresponds to a key in the `T` type.
    - The value associated with each property key is an array of strings (denoted by `string[]`).
    - Essentially, it's a way to define error messages for specific fields in an input object.

2. **`ActionState<InputType, OutputType>`**:
    - Another generic type that takes two type parameters: `InputType` and `OutputType`.
    - It represents the state of an action or operation.
    - The properties it can have are:
        - `fieldErrors`: An optional object of field errors (using the `FieldErrors<InputType>` type).
        - `error`: An optional string representing a general error message.
        - `data`: An optional value of type `OutputType`, which could be the result of the action.
    - This type is useful for handling responses from APIs, form submissions, or any other asynchronous operations.

In summary, this code snippet provides a foundation for handling errors and action states in a TypeScript application. It defines reusable types that can be used to structure data related to validation errors and action outcomes.

#### Create the `createServerAction` function

The type-safe `createServerAction` should accept `schema` and `performAction` as parameters. It then returns an `async` function. The async function has a `data: InputType` parameter and returns a `Promise`.

`lib\createServerAction.ts`
```ts
import { z } from "zod";

/* Types */
// Define a generic type for field errors.
export type FieldErrors<T> = {
  [K in keyof T]?: string[];
};

// Define a generic type for action state.
export type ActionState<InputType, OutputType> = {
  fieldErrors?: FieldErrors<InputType>; // Optional field errors
  error?: string | null; // Optional general error message
  data?: OutputType; // Optional output data
};

/**
 * Creates a type-safe server action, an async function that runs on the server
 * and can be invoked from the client using a special URL. This returns another
 * function  that takes the input data as a parameter and returns a promise 
 * that resolves to an object that contains the output data or any errors. 
 * 
 * This function does the following:
 * - It validates the input data using the provided schema. It uses Zod, a 
 *  library that allows defining and parsing TypeScript types at runtime.
 * - If the validation fails, it returns an object with a fieldErrors property
 *  that contains an array of error messages for each invalid field.
 * - If the validation succeeds, it invokes the handler function with the 
 *  validated data and returns the result of the handler function.
 * 
 * The createServerAction function can be used to create different server 
 * actions for different purposes. For example, the code you provided creates
 * a server action called createBoard that creates a new board in the database. 
 * 
 * @param schema - defines the shape and validation rules of the input data for the server action.
 * @param performAction - handler function performs the actual logic of the server action and 
 * returns an object that contains the output data or any errors.
 * @returns  another function that takes the input data as a parameter and 
 * returns a promise that resolves to an object that contains the output data
 * or any errors.
 */
export function createServerAction<InputType, OutputType>(
  // Input validation schema
  schema: z.Schema<InputType>,
  // Handler function
  performAction: (validatedData: InputType) => Promise<ActionState<InputType, OutputType>> 
): (data: InputType) => Promise<ActionState<InputType, OutputType>> {
  return async (data: InputType): Promise<ActionState<InputType, OutputType>> => {
    // Validate input data using the provided schema.
    const validation = schema.safeParse(data);

    if (!validation.success) {
      // If validation fails, return field errors.
      return {
        fieldErrors: validation.error.flatten().fieldErrors as FieldErrors<InputType>,
      };
    }

    // Otherwise, invoke the performAction handler with validated data.
    return performAction(validation.data);
  };
}
```

Let's break it down:

1. **`createServerAction` Function**:
    - This function takes two parameters:
        - `schema`: A `zod.Schema<InputType>` representing a validation schema for the input data.
        - `performAction`: A function that takes validated data of type `InputType` and returns a promise of `ActionState<InputType, OutputType>`.
    - Inside the function:
        - It validates the input data using the provided schema.
        - If validation fails, it returns an object with field errors extracted from the validation error.
        - Otherwise, it invokes the `performAction` function with the validated data and returns its result.

In summary, this provides a function for creating server actions with input validation.

feat: add createServerAction function

This commit introduces the createServerAction function to the lib/createServerAction.ts file. The function validates input data using the provided schema and invokes the performAction handler. It enhances our error handling and action state management.

#### createBoard: Type Definitions (Inputs & Outputs) Pt. 2

We can now improve our type definitions for `createBoard` by defining the inputs and output types.

Define InputType and ReturnType

This commit defines the InputType (inferred from CreateBoard schema) and ReturnType
(ActionState with Board as the output data type) in the createBoardTypes.ts file.

```ts
import { z } from 'zod';

// Import Board, the expected output type, from Prisma client
import { Board } from '@prisma/client';

import { ActionState } from '@/lib/createServerAction';

import { CreateBoard } from './createBoardSchema';

export type InputType = z.infer<typeof CreateBoard>;
export type ReturnType = ActionState<InputType, Board>;
```

#### createBoard: Server Action

Finally, create an `index.ts` file inside `/createBoard`. Here we create the server action.

In summary, this code handles user authentication, creates a board in the database, and provides appropriate responses based on the outcome.

Implement performAction function

This commit adds the performAction function to createBoard.ts. The function authenticates the user, creates a board in the database, and handles error cases. Additionally, it revalidates the path related to the newly created board.

```ts
"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs";

import { database } from "@/lib/database";
import { createServerAction } from "@/lib/createServerAction";

import { InputType, ReturnType } from "./createBoardTypes";
import { CreateBoard } from "./createBoardSchema";

async function performAction (data: InputType): Promise<ReturnType> {
  // Verify that the user is logged in with Clerk & get their unique identifier
  const { userId } = auth();

  // If user is not logged-in, return an object with error property: Unauthorized
  if (!userId) {
    return {
      error: 'Unauthorized',
    }
  }

  // Destructure the title property from the validated data
  const { title } = data;

  let board;

  // Try to create a new board in the database
  try {
    board = await database.board.create({
      data: {
        title,
      }
    });
  } catch(error) {
    return {
      error: "Internal error: failed to create in database."
    }
  }

  // Invalidates the cache for a given path on the server 
  // and triggers a re-fetch of the data for that page
  revalidatePath(`/board/${board.id}`);

  // Return an object with a data property set to the board object, which 
  // contains the information about the newly created board
  return { data: board };
}

/**
 * Create and export a type-safe server action createBoard, that creates a 
 * Board in the database with validated input data from the user. 
 * 
 * createServerAction function with two arguments: CreateBoard and performAction.
 * 
 * First argument is the schema that validates the input data. 
 * Second argument is the function that performs the actual logic of the server action.
 * 
 * createServerAction takes two parameters: a schema and a handler function.
 * 
 * The schema defines the shape and validation rules of the input data for the 
 * server action. 
 * 
 * The handler function performs the actual logic of the server action and 
 * returns an object that contains the output data or any errors.
 */
export const createBoard = createServerAction(CreateBoard, performAction);
```

Let's break down the provided TypeScript code:

1. **Imports**:
    - The code imports necessary modules and functions:
        - `revalidatePath` from `"next/cache"`: A function used for revalidating a specific path in Next.js.
        - `auth` from `"@clerk/nextjs"`: A function for authenticating users using Clerk authentication.
        - `database` from `"@/lib/database"`: Presumably, this module provides access to database-related functionality.

2. **Function Definition**:
    - The function is named `performAction`.
    - It takes an input of type `InputType` (inferred from the `CreateBoard` schema) and returns a promise of type `ReturnType`.
    - The purpose of this function is to perform an action (presumably related to creating a board) based on the provided input data.

3. **Authentication**:
    - It authenticates the user by extracting the `userId` using the `auth()` function.
    - If the user is not logged in (no `userId`), it returns an error with the message `'Unauthorized'`.

4. **Database Interaction**:
    - The function extracts the `title` from the input data.
    - It attempts to create a new board in the database using the `database.board.create` method.
    - If successful, it assigns the created board to the `board` variable.
    - If an error occurs during database interaction, it returns an error message indicating an internal error.

5. **Revalidation**:
    - It revalidates the path `/board/${board.id}` (presumably to update cached data related to the board).

6. **Return Value**:
    - The function returns an object:
        - If there was an error during authentication or database interaction, it includes an `error` property.
        - Otherwise, it includes a `data` property containing the created board.

7. **Server Action**:
    - The `createServerAction` function returns an object that contains the server action itself and some helper components for rendering forms and displaying errors
    - Two arguments: CreateBoard and performAction
    - The first argument is the schema that validates the input data, and the second argument is the function that performs the actual logic of the server action

## useServerAction hook

With the server action created with the `createServerAction` abstraction, we now need to create a hook that accepts the newly created server action. The hook will give us access to callbacks such as `onSuccess` and `onComplete`.

Create the file `useServerAction.ts` in `/hooks`.

Then we define a custom hook called `useServerAction` that takes a server action as a parameter and returns a memoized callback function. A server action is a function that runs on the server and can be invoked from the client using a special URL. A memoized callback function is a function that is cached and does not get redefined on every render. This can improve performance and prevent unnecessary re-rendering of components.

```ts
import { useCallback, useState } from "react";

import { ActionState, FieldErrors } from "@/lib/createServerAction";

// A generic type alias for a server action function
// A server action function takes an input data of type InputType and returns a
// promise that resolves to an object of type ActionState<InputType, OutputType>
type ServerAction<InputType, OutputType> = (data: InputType) => 
  Promise<ActionState<InputType, OutputType>>;

// A custom hook that takes a server action function as a parameter and returns
// a memoized callback function
export const useServerAction = <InputType, OutputType>(
  action: ServerAction<InputType, OutputType>
) => {
  // Declare a constant called cachedFn and assign it to the result of calling the useCallback hook with a callback function and an array of dependencies
  // The useCallback hook returns a memoized version of the callback function that only changes if one of the dependencies has changed
  // The callback function simply returns the input data as it is
  // The only dependency is the action function that is passed as a parameter
  const cachedFn = useCallback(
    async (input) => {
      return input;
    }, [action]
  );

  return cachedFn;
}
```


### useServerActionOptions interface

Define the interface for what we expect from this hook.

The `UseServerActionOptions` interface has three optional properties: `onSuccess`, `onError`, and `onComplete`. Each property is a function that can be passed as an option to a server action hook. A server action hook is a custom hook that lets you memoize a server action function. A server action function is a function that runs on the server and can be invoked from the client using a special URL.

- The `onSuccess` property is a function that takes the output data as a parameter and returns nothing. This function is called when the server action succeeds and returns some data. 
- The `onError` property is a function that takes an error message as a parameter and returns nothing. This function is called when the server action fails and returns an error. 
- The `onComplete` property is a function that takes no parameters and returns nothing. This function is called when the server action is finished, regardless of whether it succeeded or failed.

```ts
interface UseServerActionOptions<OutputType> {
  onComplete?: () => void;
  onError?: (error: string) => void;
  onSuccess?: (data: OutputType) => void;
};
```

### useServerAction state variables

Then we define our state variables: `data`, `error`, `fieldErrors` and `isLoading`

```ts
import { useCallback, useState } from "react";

import { ActionState, FieldErrors } from "@/lib/createServerAction";

type ServerAction<InputType, OutputType> = (data: InputType) => 
  Promise<ActionState<InputType, OutputType>>;

interface UseServerActionOptions<OutputType> {
  onComplete?: () => void;
  onError?: (error: string) => void;
  onSuccess?: (data: OutputType) => void;
};

export const useServerAction = <InputType, OutputType> (
  action: ServerAction<InputType, OutputType>,
  options: UseServerActionOptions<OutputType> = {},
) => {

  const [data, setData] = useState<OutputType | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  const [fieldErrors, setFieldErrors] = useState<FieldErrors<InputType> | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const cachedFn = useCallback(
    async (input) => {
      return input;
    }, [action]
  );

  return cachedFn;
}
```

Add state and options to useServerAction hook

The useServerAction hook is a custom hook that lets you memoize a server action function. A server action is a function that runs on the server and can be invoked from the client using a special URL. The useServerAction hook takes a server action function and an optional object of options as parameters, and returns a memoized callback function. The options object can contain three functions: onSuccess, onError, and onComplete, which are called when the server action succeeds, fails, or finishes, respectively. The useServerAction hook also manages the state of the server action, such as the output data, the error message, the field errors, and the loading status. The useServerAction hook uses the useState hook from React to create and update the state variables, and the useCallback hook to create the memoized callback function.

### useServerAction callback function

#### useCallback hook

- [useCallback | React Reference](https://react.dev/reference/react/useCallback)
- `useCallback` is a React Hook that lets you cache a function definition between re-renders.
- `const cachedFn = useCallback(fn, dependencies)`

The useCallback hook is a React hook that lets you memoize a callback function. Memoization is a technique that caches the result of a function so that it does not need to be recalculated every time it is called with the same arguments. This can improve the performance and avoid unnecessary re-rendering of components that depend on the callback function.

The useCallback hook takes two parameters: a callback function and an array of dependencies. The callback function is the function that you want to memoize. The array of dependencies is a list of values that the callback function depends on. The useCallback hook returns a memoized version of the callback function that only changes if one of the dependencies has changed.

You can use the useCallback hook when you have a component that passes a callback function to a child component as a prop. If the callback function is not memoized, it will be recreated on every render of the parent component, which will cause the child component to re-render as well, even if the props have not changed. By using the useCallback hook, you can prevent this unnecessary re-rendering and improve the performance of your application.

Inside `useServerAction` we call the `useCallback` hook and save it to a cached function called `cachedFn` like this:

```ts
  const cachedFn = useCallback(
    async (input) => {
      return input;
    }, [action]
  );
```

Rename this to `executeServerAction`, which we call inside our components, which calls an `async` function that takes the `input` argument. We send that input inside of our `action`. This `action` will run through our `ActionState` to be validated. Afterwards, it will follow the server action logic.

### useServerAction logic

Now for the `executeServerAction`, inside the `useCallback` hook we want to have a an `async` function with `input` as the argument. Inside the function we immediately set the `loading` state to `true`. Then open up a `try..catch..finally` where we call `action(input)` and take save the result to `actionOutput`. Then we check for a series of conditions.

- if `actionOutput` is falsy then we have an early `return`
- Otherise, check the properties of `actionOutput` if they contain `error`, `fieldErrors` or `data` and set the state variables accordingly.

Next let's catch any errors and log it to the console. Then in the `finally` block we should set the `loading` state to `false`.

```ts
export const useServerAction = <InputType, OutputType> (
  action: ServerAction<InputType, OutputType>,
  options: UseServerActionOptions<OutputType> = {},
) => {

  const [data, setData] = useState<OutputType | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors<InputType> | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const executeServerAction = useCallback(
    async (input: InputType) => {
      setIsLoading(true);

      try {
        const actionOutput = await action(input);

        if (!actionOutput) {
          return;
        }

        if (actionOutput.error) {
          setError(actionOutput.error);
        }

        if (actionOutput.fieldErrors) {
          setFieldErrors(actionOutput.fieldErrors);
        }
        
        if(actionOutput.data) {
          setData(actionOutput.data);
        }

      } catch (error) {
        console.error(`An error occurred during a server action.\n${error}`);
      } finally {
        setIsLoading(false);
      }

      return input;
    }, [action]
  );

  return executeServerAction;
}
```

#### Add options object to specify callback functions

Lastly, we will use the options object to specify callback functions to handle the completion, error, or success of the server action.

We just need to add the callback functions to the `error` and `data` conditions, and the `onComplete` in the finally block. To recap:

- If the server action had no output our results then we do an early return and have no callbacks. 
- If output has `fieldErrors` then something went wrong with validation
  - This has no callback function
- If output has a `error`, which is a server error, we set the `error` state
  - Invoke options callback for `onError` since this is not an error we want for the input field but rather pass in that error to something else like an error notification such as toast
- If output has `data` then it successfully created the record
  - Invoke options callback for `onSuccess` and pass in the the record so we can operate on the record (e.g., redirecting to a specific ID of a page, or success message)
- In the `finally` block, we set the `loading` state to `false`
  - Invoke options callback for `onComplete`

feat: add callback functions to useServerAction

This commit modifies the useServerAction hook to accept an options object that can specify callback functions to handle the completion, error, or success of the server action. The hook will invoke the corresponding callback function depending on the outcome of the action. This allows the caller code to customize the behavior and side effects of the hook.

`hooks\useServerAction.ts`
```ts
import { useCallback, useState } from "react";

import { ActionState, FieldErrors } from "@/lib/createServerAction";

type ServerAction<InputType, OutputType> = (data: InputType) => 
  Promise<ActionState<InputType, OutputType>>;

interface UseServerActionOptions<OutputType> {
  onComplete?: () => void;
  onError?: (error: string) => void;
  onSuccess?: (data: OutputType) => void;
};

export const useServerAction = <InputType, OutputType> (
  action: ServerAction<InputType, OutputType>,
  options: UseServerActionOptions<OutputType> = {},
) => {

  const [data, setData] = useState<OutputType | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors<InputType> | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const executeServerAction = useCallback(
    async (input: InputType) => {
      setIsLoading(true);

      try {
        const actionOutput = await action(input);

        if (!actionOutput) {
          return;
        }

        if (actionOutput.error) {
          setError(actionOutput.error);
          options.onError?.(actionOutput.error);
        }

        if (actionOutput.fieldErrors) {
          setFieldErrors(actionOutput.fieldErrors);
        }
        
        if(actionOutput.data) {
          setData(actionOutput.data);
          options.onSuccess?.(actionOutput.data);
        }

      } catch (error) {
        console.error(`An error occurred during a server action.\n${error}`);
      } finally {
        setIsLoading(false);
        options.onComplete?.();
      }

      return input;
    }, [action, options]
  );

  return {
    executeServerAction,
    data,
    error,
    fieldErrors,
    isLoading,
  };
}
```

feat: add useServerAction hook to handle server actions

This commit adds a custom React hook that takes a server action function and an optional options object as parameters. The hook returns a cached function that can be called with an input to execute the server action. The hook also manages the state of the data, error, field errors, and loading status of the server action. The options object can specify callback functions to handle the completion, error, or success of the server action.

refactor: rename cachedFn to executeServerAction

This commit renames the variable cachedFn to executeServerAction in the useServerAction hook to better reflect the proper name and context it will be used in. The new name indicates that the variable is a function that executes a server action with a given input, rather than a generic cached function. This improves the readability and clarity of the code and the hook usage.

## BoardForm: use createBoard using createServerAction abstraction

Navigate back to `BoardForm.tsx`, as a reminder:

`components\BoardForm.tsx`
```tsx
"use client";

import React from 'react';
import { useFormState } from 'react-dom';

import createBoard from '@/actions/createBoard';
import BoardFormInput from '@/components/BoardFormInput';
import BoardFormButton from '@/components/BoardFormButton';

/* Create a form for creating a new board */
export default function BoardForm() {

  const initialState = {
    errors: {},
    message: "",
  };

  // Use the useFormState hook to create a state and an action for the form
  const [state, formAction] = useFormState(createBoard, initialState);

  /* The state will be updated by the createBoard action when the form is submitted
  The createBoard action is a function that takes the previous state and the form 
  data as arguments and returns a new state */

  // Pass the formAction as the action prop to the form element
  return (
    <form action={formAction}>
      <BoardFormInput errors={state?.errors}/>
      <BoardFormButton type="submit" variant="default" size="default">
        Submit
      </BoardFormButton>
    </form>
  )
}
```

We can remove the `createBoard` import, the `useFormState` hook and the `initialState` too.

Then import and invoke `useServerAction` and destructure out `{ executeServerAction, fieldErrors }`. Create an `onSubmit` function handler that extracts the `title` from the `formData` and passes `title` into `executeServerAction`.

Finally, pass in `onSubmit` and `fieldErrors` to their corresponding props.

```tsx
"use client";

import React from 'react';

import { createBoard } from "@/actions/createBoard/index";
import BoardFormInput from '@/components/BoardFormInput';
import BoardFormButton from '@/components/BoardFormButton';
import { useServerAction } from '@/hooks/useServerAction';

/* Create a form for creating a new board */
export default function BoardForm() {
  const { executeServerAction, fieldErrors } = useServerAction(createBoard);

  function onSubmit(formData: FormData) {
    const title = formData.get('title') as string;

    executeServerAction({ title });
  }

  return (
    <form action={onSubmit}>
      <BoardFormInput errors={fieldErrors}/>
      <BoardFormButton type="submit" variant="default" size="default">
        Submit
      </BoardFormButton>
    </form>
  )
}
```

refactor: replace useFormState with useServerAction

This commit replaces the useFormState hook with the useServerAction hook in the BoardForm component. The useServerAction hook simplifies the logic and state management of the server action by handling the data, error, field errors, and loading status internally. The BoardForm component only needs to pass the createBoard action and the input to the executeServerAction function returned by the hook. This improves the readability and maintainability of the code and the component usage.


Next let's add the callback functions depending on the server action outcomes: `onSuccess` and `onError`

feat: add callback functions to useServerAction hook

This commit adds an options object to the useServerAction hook in the BoardForm component that specifies callback functions to handle the error and success of the createBoard action. The hook will invoke the corresponding callback function depending on the outcome of the action and log the error or data to the console. This allows the BoardForm component to customize the behavior and side effects of the hook.

```tsx
export default function BoardForm() {
  const { executeServerAction, fieldErrors } = useServerAction(createBoard, {
    onError: (error) => { console.error(error); },
    onSuccess: (data) => { console.log(data, 'Successfully created Board!'); },
  });

  function onSubmit(formData: FormData) {
    const title = formData.get('title') as string;

    executeServerAction({ title });
  }

  return (
    <form action={onSubmit}>
      <BoardFormInput errors={fieldErrors}/>
      <BoardFormButton type="submit" variant="default" size="default">
        Submit
      </BoardFormButton>
    </form>
  )
}
```

## Form components

Goal is to make a set of re-usable components for the `Form`. This will allow us to refactor `BoardForm` and other components accordingly.

Create `/form` folder in `/components`. 

### FormInput component

Inside `/form/components/` create file `FormInput.tsx`.

`components\form\FormInput.tsx`
```tsx
import React from 'react'

export default function FormInput() {
  return (
    <div>FormInput</div>
  )
}
```

Let's add the `FormInputProp` interface with the properties we plan to have

```tsx
interface FormInputProps {
  id: string;
  className?: string;
  defaultValue?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  errors?: Record<string, string[] | undefined>;
  onBlur?: () => void;
}
```