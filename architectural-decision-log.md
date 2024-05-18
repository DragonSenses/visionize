# Architectural Decision Log for **Visionize**

***My aim in writing this document was to share the positive impact it made on me with you.***

**Visionize** is a Next.js 14 Kanban productivity app designed for task management. Built with a focus on server actions, utilizes the [FormData Web API](https://developer.mozilla.org/en-US/docs/Web/API/FormData), and implements loading and error states using React hooks such as [useFormStatus](https://react.dev/reference/react-dom/hooks/useFormStatus) and [useFormState](https://react.dev/reference/react-dom/hooks/useFormState).

This is simply the documentation for the process of building the project. This is like my `journey.md` files that come with my previous projects, but this time I will also explain the rationale behind certain choices and design decisions made while making this project.

This file is an *informal* document, named "Architectural Decision Record" because I'm fond of the name and it gives it that extra level of sophistication.

Let's demystify some jargon:

- An architecture decision log (**ADL**) is the collection of all ADRs created and maintained for a particular project (or organization).

- An architectural decision record (**ADR**) is a document that captures an important architectural decision made along with its context and consequences. 

- An architecture decision (**AD**) is a software design choice that addresses a significant requirement.

I've really start to appreciate and recognize the full worth of documentation, especially ones like ADR that facilitate the [onboarding process](https://en.wikipedia.org/wiki/Onboarding). 

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
- PlanetScale (TODO: Pending removal)
- Prisma (ORM)

Payment and Billing
- Stripe

Authentication
- Clerk
  - For now Clerk is fine to develop quickly, but may switch to [Passportjs](https://www.passportjs.org/docs/)
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

According to the HTML5 spec, interactive elements such as links and buttons are not allowed to be nested inside each other. This is because it creates confusion and ambiguity for the user's intention. For example, if a user clicks on a link inside a button, should the link or the button action be triggered? Different browsers may handle this situation differently, resulting in inconsistent and unpredictable behavior.

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

### Prisma schema overview

[Prisma Schema Overview](https://www.prisma.io/docs/orm/prisma-schema/overview)

The Prisma schema file (short: schema file, Prisma schema or schema) is the main configuration file for your Prisma ORM setup. It is typically called `schema.prisma` and consists of the following parts:

- [Data sources](https://www.prisma.io/docs/orm/prisma-schema/overview/data-sources): Specify the details of the data sources Prisma ORM should connect to (e.g. a PostgreSQL database)
- [Generators](https://www.prisma.io/docs/orm/prisma-schema/overview/generators): Specifies what clients should be generated based on the data model (e.g. Prisma Client)
- [Data model definition](https://www.prisma.io/docs/orm/prisma-schema/data-model): Specifies your application [models](https://www.prisma.io/docs/orm/prisma-schema/data-model/models#defining-models) (the shape of the data per data source) and their [relations](https://www.prisma.io/docs/orm/prisma-schema/data-model/relations)

See the [Prisma schema API reference](https://www.prisma.io/docs/orm/reference/prisma-schema-reference) for detailed information about each section of the schema.

Whenever a `prisma` command is invoked, the CLI typically reads some information from the schema file, e.g.:

- `prisma generate`: Reads all above mentioned information from the Prisma schema to generate the correct data source client code (e.g. Prisma Client).
- `prisma migrate dev`: Reads the data sources and data model definition to create a new migration.

You can also use [environment variables](https://www.prisma.io/docs/orm/prisma-schema/overview#accessing-environment-variables-from-the-schema) inside the schema file to provide configuration options when a CLI command is invoked.

#### Prisma schema example

The following is an example of a Prisma schema file that specifies:

- A data source (PostgreSQL or MongoDB)
- A generator (Prisma Client)
- A data model definition with two models (with one relation) and one enum
- Several [native data type attributes](https://www.prisma.io/docs/orm/prisma-schema/data-model/models#native-types-mapping) (`@db.VarChar(255)`, `@db.ObjectId`)


For a relational database such as **PostgreSQL**:

`schema.prisma`
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  email     String   @unique
  name      String?
  role      Role     @default(USER)
  posts     Post[]
}

model Post {
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  published Boolean  @default(false)
  title     String   @db.VarChar(255)
  author    User?    @relation(fields: [authorId], references: [id])
  authorId  Int?
}

enum Role {
  USER
  ADMIN
}
```

For a non-relational database such as **MongoDB**:

```prisma
datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  createdAt DateTime @default(now())
  email     String   @unique
  name      String?
  role      Role     @default(USER)
  posts     Post[]
}

model Post {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  published Boolean  @default(false)
  title     String
  author    User?    @relation(fields: [authorId], references: [id])
  authorId  String   @db.ObjectId
}

enum Role {
  USER
  ADMIN
}
```

### Set up postgreSQL and prisma

docs: Add Prisma setup instructions for PostgreSQL

- [PostgreSQL | Prisma.io](https://www.prisma.io/dataguide/postgresql)
- [Setting up a PostgreSQL database](https://www.prisma.io/dataguide/postgresql/setting-up-a-local-postgresql-database)
- [Connecting to PostgreSQL databases](https://www.prisma.io/dataguide/postgresql/connecting-to-postgresql-databases)
- [Intro to PostgreSQL connection URIs](https://www.prisma.io/dataguide/postgresql/short-guides/connection-uris)
- [Data Sources in Prisma Schema](https://www.prisma.io/docs/orm/prisma-schema/overview/data-sources)

### Set up prisma schema with local database

- [Connection Urls | Prisma docs](https://pris.ly/d/connection-strings)
- [PostgreSQL in prisma connection string](https://www.prisma.io/docs/orm/overview/databases/postgresql)

Create an `.env` file. Add an environment variable for the postgresql connection URI.

Inside the `.env` file create a `DATABASE_URL` variable. This will store the connection URI string to our local database. 

An example connection URI string should be something like this: 

`.env`
```shell
DATABASE_URL="postgresql://johndoe:mypassword@localhost:5432/mydb?schema=public"
```

1. **Provider**: The `provider` specifies the type of database you're connecting to. In this case, it's PostgreSQL.

2. **URL Components**:
   - **User**: `"johndoe"` is the username for the database.
   - **Password**: `"mypassword"` is the password for the user.
   - **Host**: `"localhost"` refers to the machine where the PostgreSQL server is running.
   - **Port**: `5432` is the default port for PostgreSQL.
   - **Database Name**: `"mydb"` is the name of the database.
   - **Schema**: `"public"` specifies the schema within the database.
     - If you omit the schema, Prisma will use the `"public"` schema by default

So, the complete URL connects to a PostgreSQL database with the given credentials and schema. If you're using Prisma, this URL allows Prisma ORM to connect to your database when executing queries with Prisma Client or making schema changes with Prisma Migrate. If you need to make the URL dynamic, you can pass it programmatically when creating the Prisma Client. 

To connect to a PostgreSQL database server, you need to configure a [datasource](https://www.prisma.io/docs/orm/prisma-schema/overview/data-sources) block in your [Prisma schema file](https://www.prisma.io/docs/orm/prisma-schema):

`schema.prisma`
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

The fields passed to the datasource block are:

- `provider`: Specifies the `postgresql` data source connector.
- `url`: Specifies the [connection URL](https://www.prisma.io/docs/orm/overview/databases/postgresql#connection-url) for the PostgreSQL database server. In this case, an [environment variable is used](https://www.prisma.io/docs/orm/prisma-schema/overview#accessing-environment-variables-from-the-schema) to provide the connection URL.

Or without environment variables (not recommended):

```prisma
datasource db {
  provider = "postgresql"
  url      = "postgresql://johndoe:mypassword@localhost:5432/mydb?schema=public"
}
```

#### Connection URI strings

- [Connection Urls | Prisma docs](https://pris.ly/d/connection-strings)

- [Intro to PostgreSQL connection URIs](https://www.prisma.io/dataguide/postgresql/short-guides/connection-uris)

Let's look at the spec for a PostgreSQL connection URI:
```sh
postgres[ql]://[username[:password]@][host[:port],]/database[?parameter_list]

\_____________/\____________________/\____________/\_______/\_______________/
     |                   |                  |          |            |
     |- schema           |- userspec        |          |            |- parameter list
                                            |          |
                                            |          |- database name
                                            |
                                            |- hostspec
```

We can test a PostgreSQL connection string in the terminal by running the command `pg_isready`

```sh
pg_isready -d DATABASE_NAME -h HOST_NAME -p PORT_NUMBER -U DATABASE_USER
```

##### Find connection URI string with database tool like pgAdmin

To find the **URI (connection URL)** for your PostgreSQL database in **pgAdmin 4**, follow these steps:

1. Open your desktop **pgAdmin 4** application.
2. Click on **File** > **Runtime** > **View Log**.
3. Scroll to the bottom of the log, where you'll find the **Application Server URL**. It will look something like this:
   - `http://127.0.0.1:{PORT_NUMBER}/?key={YOUR_KEY}`
4. Copy this URL and open it in your web browser.

This URL allows you to connect to your PostgreSQL server using **pgAdmin 4**. Make sure to replace `{PORT_NUMBER}` and `{YOUR_KEY}` with the actual values specific to your setup. 

### (Optional) Database providers

We can host our database online with database providers. Here are some free or affordable options:

1. **Supabase**: Offers a fantastic free tier with PostgreSQL, authentication, real-time subscriptions, and storage. It's an open-source alternative to Firebase
2. **Neon**: Fully managed serverless platform with a free tier, providing autoscaling, branching, and unlimited storage
3. **Turso**: Offers a generous free tier with SQLite, especially known for ultra-low latency edge deployments
4. **CockroachDB**: Provides a free tier with distributed SQL, suitable for most hobby projects
5. **AWS RDS**: AWS offers free usage (750 hours and 20GB storage) for Amazon RDS with MySQL, MariaDB, and PostgreSQL

#### Neon tech

We can use postgresql with [neon tech](https://neon.tech/docs/connect/connect-from-any-app).

#### Planetscale

To streamline the process we can use prisma with SQL on planetscale.

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

**Update:** On 6 March 2024, the **Planetscale** team announced their decision **to remove their Hobby plan — a free tier developers used to manage and deploy their serverless databases**. According to Sam Lambert, the CEO of Planetscale, they made this decision to "prioritize profitability and build a company that can last forever."

- Note: I'm a tad bit crestfallen that planetscale discontinued their free tier for developers, but I appreciate their transparency in not providing any other reason or hiding behind a pretense.

## Database Models

The Prisma schema is a declarative way to define your application models and map them to your database. The Prisma schema is independent of the database provider you choose, so you can use the same syntax and logic to define your models for MySQL or PostgreSQL. However, there may be some differences in how Prisma handles certain features or data types depending on the database provider. For example, PostgreSQL supports enums and arrays, while MySQL does not. Prisma will automatically generate the appropriate SQL code for each database provider based on your Prisma schema.

### Board Model

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
  - `useActionEffect<T, U, V>(input: T, schema: z.Schema<U>, handler: (output: U) => Promise<V>)`

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

### Summary: useServerAction hook

`useServerAction` is a custom hook for handling server actions with callbacks. Let's break down its key components:

1. **`useServerAction` Hook**:
   - This hook encapsulates the logic for executing a server action with callbacks.
   - It takes an `action` (a function that represents the server action) and optional `options` (callbacks for different scenarios) as parameters.
   - The hook returns an object containing relevant state variables (`data`, `error`, `fieldErrors`, and `isLoading`) and the `executeServerAction` function.

2. **State Variables**:
   - `data`: Represents the output data from the server action (if successful).
   - `error`: Holds any error message returned by the server action.
   - `fieldErrors`: Stores field-specific errors (if any).
   - `isLoading`: Indicates whether the server action is currently being executed.

3. **`executeServerAction` Function**:
   - This function handles the execution of the server action.
   - It sets the loading state, calls the provided `action`, and processes the output.
   - If successful, it updates the state variables (`data`, `error`, and `fieldErrors`).
   - It also invokes the provided callbacks (`onError`, `onSuccess`, and `onComplete`).

4. **Callback Options**:
   - `onError`: Invoked when an error occurs during the server action.
   - `onSuccess`: Called when the server action completes successfully.
   - `onComplete`: Executed regardless of success or failure.

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
"use client";

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

#### forwardRef API

Before we assign the props, we have to learn about `forwardRef` and what it means to manipulate the DOM with Refs.

- [forwardRef | React Reference](https://react.dev/reference/react/forwardRef)
- `forwardRef` lets your component expose a DOM node to parent component with a [ref](https://react.dev/learn/manipulating-the-dom-with-refs).
  
**forwardRef** in React is a utility function that allows you to pass a **ref** (a reference to a DOM element or a component instance) from a parent component to a child component. This is useful when you need to access or manipulate the child's DOM element or instance directly from the parent component. For example, you may want to focus an input field, scroll to a position, or measure the size and position of an element.

**Manipulating the DOM with Refs** means using refs to access and modify the DOM elements managed by React. React usually updates the DOM automatically to match your render output, but sometimes you may need to interact with the underlying HTML elements directly. For example, you may want to trigger an animation, integrate with a third-party library, or manage focus, text selection, or media playback.

To use refs in React, you need to import the **useRef** Hook and use it to create a ref object. Then, you can pass the ref object as the **ref** attribute to the JSX element that you want to get a reference to. You can then access the DOM node or instance from the ref object's **current** property and use any browser APIs on it.

Here is a simple example of using forwardRef and manipulating the DOM with refs:

```jsx
// Import the useRef and forwardRef Hooks
import { useRef, forwardRef } from "react";

// Define a child component that takes a ref as the second argument
const MyInput = forwardRef(function MyInput(props, ref) {
  return <input type="text" ref={ref} />;
});

// Define a parent component that creates and passes a ref to the child
function Form() {
  // Create a ref object
  const inputRef = useRef(null);

  // Define a function that focuses the input using the ref
  function focusInput() {
    inputRef.current.focus();
  }

  // Render the child component and pass the ref as the ref attribute
  return (
    <div>
      <MyInput ref={inputRef} />
      <button onClick={focusInput}>Focus the input</button>
    </div>
  );
}
```

Here is a simple example of focusing a text input:

`App.js`
```js
import { useRef } from 'react';

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}
```

#### FormInput and forwardRef

feat: use forwardRef for FormInput component

Use the forwardRef utility function to pass a ref from the parent component to the FormInput component. This allows the parent component to access or manipulate the input element directly. Add a displayName property to the component for debugging purposes.

Now let's use `forwardRef` and assign the props to `FormInput` component.

```tsx
"use client";

import React, { forwardRef } from 'react'

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

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(({
  id,
  className,
  defaultValue = "",
  label,
  placeholder,
  type,
  disabled,
  required,
  errors,
  onBlur,
}, ref) => {

  return (
    <div>FormInput</div>
  )
});

export default FormInput;
```

There is an issue if we hover over the return,

```sh
Component definition is missing display name eslint react/display-name
```

This error means that you have not specified a `displayName` property for your component, which is required by the ESLint rule [react/display-name](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md). This rule helps with debugging and testing by giving your component a human-readable name.

We can fix this by adding the following line after the component

```tsx
FormInput.displayName = "FormInput";
```

#### FormInput output

Now onto the form output.

First lets extract the `pending` status with [useFormStatus](https://react.dev/reference/react-dom/hooks/useFormStatus) so we can disable the FormInput when loading.

Next install [Label](https://ui.shadcn.com/docs/components/label) from shadcn/ui.

```sh
npx shadcn-ui@latest add label
```

Then we create a `div` within a `div` with vertical space between. Inside we conditionally render the `Label` component. Then assign the prop `htmlFor` to improve accessibility and usability of the form. The htmlFor attribute is an HTML attribute that is used with the `<label>` element. It specifies the id of the form element that the label is associated with. This way, when the user clicks on the label, the focus will move to the input field. After the `Label` render the `Input` component.

feat: add output for FormInput component

Use the forwardRef utility function to pass a ref from the parent component to the FormInput component. Render a Label and an Input element inside a div with spacing. Use the useFormStatus hook to get the status of the form submission.

```tsx
const FormInput = forwardRef<HTMLInputElement, FormInputProps>(({
  // ...
}, ref) => {
  const { pending, data, method, action } = useFormStatus();

  return (
    <div className='space-y-2'>
      <div className='space-y-1'>
        {label ? (
          <Label 
            htmlFor={id}
          >
            {label}
          </Label>
        ) : null}
        <Input />
      </div>
    </div>
  )
});
```

feat: implement FormInput component with useFormStatus hook

Create a FormInput component that renders a Label and an Input element with spacing. Use the useFormStatus hook to get the status of the form submission. Use the forwardRef utility function to pass a ref from the parent component to the FormInput component.

Assign props to Input component

Use forwardRef to pass ref to Input component and add label, placeholder, type, disabled, required, errors, and onBlur props. Use useFormStatus hook to get pending state and disable input accordingly. Use cn utility to combine class names.

```tsx
"use client";

import React, { forwardRef } from 'react'
import { useFormStatus } from 'react-dom';

import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

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

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(({
  id,
  className,
  defaultValue = "",
  label,
  placeholder,
  type,
  disabled,
  required,
  errors,
  onBlur,
}, ref) => {
  const { pending } = useFormStatus();

  return (
    <div className='space-y-2'>
      <div className='space-y-1'>
        {label ? (
          <Label 
            htmlFor={id}
            className='text-xs font-semibold text-neutral-700'
          >
            {label}
          </Label>
        ) : null}
        <Input 
          id={id}
          defaultValue={defaultValue}
          name={id}
          placeholder={placeholder}
          type={type}
          disabled={pending || disabled}
          required={required}
          onBlur={onBlur}
          ref={ref}
          className={cn(
            'text-sm px-2 py-1 h-7',
            className,
          )}
        />
      </div>
    </div>
  )
});

FormInput.displayName = "FormInput";

export default FormInput;
```

#### FormErrors component

To assign the `errors` prop in `FormInput`, create a `FormErrors` component in `/components/form`.

`components\form\FormErrors.tsx`
```tsx
import React from 'react'

export default function FormErrors() {
  return (
    <div>FormErrors</div>
  )
}
```

Then import and render `FormErrors` in `FormInput`, assign the props `id` and `errors`. While here we can also add the `aria-describedby` prop to the `Input` component, and set it to `${id}-error`.

`components\form\FormInput.tsx`
```tsx
const FormInput = forwardRef<HTMLInputElement, FormInputProps>(({
  // ...
}, ref) => {
  const { pending } = useFormStatus();

  return (
    <div className='space-y-2'>
      <div className='space-y-1'>
        {label ? (
          <Label 
            htmlFor={id}
            className='text-xs font-semibold text-neutral-700'
          >
            {label}
          </Label>
        ) : null}
        <Input 
          id={id}
          defaultValue={defaultValue}
          name={id}
          placeholder={placeholder}
          type={type}
          disabled={pending || disabled}
          required={required}
          onBlur={onBlur}
          ref={ref}
          className={cn(
            'text-sm px-2 py-1 h-7',
            className,
          )}
          aria-describedby={`${id}-error`}
        />
      </div>
      <FormErrors 
        id={id}
        errors={errors}
      />
    </div>
  )
});
```

Inside the output of `FormErrors` we want to map out the `errors` into a new array of JSX elements. The JSX element will be a div that contains the XCircle icon and the error string as children.

Implement FormErrors component

Use id prop to link input and error elements.  Use aria-live attribute to announce errors to screen readers. Use XCircle icon from lucide-react to display errors for each input.

`components\form\FormErrors.tsx`
```tsx
import { XCircle } from 'lucide-react';
import React from 'react'

interface FormErrorsProp {
  id: string;
  errors?: Record<string, string[] | undefined>;
};

export default function FormErrors({
  id, 
  errors,
}: FormErrorsProp) {
  
  if (!errors) {
    return null;
  }

  return (
    <div
      id={`${id}-error`}
      aria-live='polite'
      className='mt-2 text-xs text-rose-500'
    >
      {errors?.[id]?.map((error: string) => (
        <div
          key={error}
          className='flex items-center rounded-sm font-medium p-2 border border-rose-500 bg-rose-500/10'
        >
          <XCircle className='h-4 w-4 mr-2'/>
          {error}
        </div>
      ))}
    </div>
  )
}
```

With this complete, we can refactor our `BoardForm` to replace the `BoardFormInput` with the more re-usable `FormInput` component.

refactor: BoardForm to use FormInput component

Replace BoardFormInput component with FormInput component to avoid duplication and improve reusability. Pass errors, id and label props to FormInput component.

`components\BoardForm.tsx`
```tsx
"use client";

import React from 'react';

import { createBoard } from "@/actions/createBoard/index";
import BoardFormButton from '@/components/BoardFormButton';
import { useServerAction } from '@/hooks/useServerAction';
import FormInput from '@/components/form/FormInput';

/* Create a form for creating a new board */
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
      <FormInput 
        errors={fieldErrors}
        id="title"
        label="Board Title"
      />
      <BoardFormButton type="submit" variant="default" size="default">
        Submit
      </BoardFormButton>
    </form>
  )
}
```

### FormSubmitButton component

Create client component `FormSubmitButton` in `/components/form`. Then create the prop interface with `{children, disabled, className, variant }`.

feat: add FormSubmitProps interface

Add FormSubmitProps interface to define the props for the FormSubmitButton component. The interface includes the following properties:

- children: the content of the button
- className: an optional CSS class name
- disabled: an optional boolean flag to disable the button
- variant: an optional string to specify the button style

`components\form\FormSubmitButton.tsx`
```tsx
"use client";

import React from 'react';

interface FormSubmitProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' 
    | 'link' | 'primary';
};

export default function FormSubmitButton({
  children,
  className,
  disabled,
  variant,
}: FormSubmitProps) {
  return (
    <div>FormSubmitButton</div>
  )
}
```

Now for the output let's get the `pending` from `useFormStatus` hook. Then we return a `Button` component which has the props assigned.

feat: add size prop to FormSubmitButton

Add size prop to FormSubmitButton component to allow different button sizes. The size prop can be one of 'default', 'sm', 'lg', or 'icon'. The component also uses the useFormStatus hook to disable the button when the form is pending. Also add cn utility function to merge Tailwind CSS class names.

```tsx
"use client";

import React from 'react';
import { useFormStatus } from 'react-dom';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface FormSubmitProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  size: 'default' | 'sm' | 'lg' | 'icon';
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' 
    | 'link' | 'primary';
};

export default function FormSubmitButton({
  children,
  className,
  disabled,
  size,
  variant,
}: FormSubmitProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending || disabled}
      size={size}
      type='submit'
      variant={variant}
      className={cn(className)}
    >
      {children}
    </Button>
  )
}
```

feat: Set FormSubmitButton variant to primary

This change applies the Tailwind styles: "bg-sky-500 hover:bg-sky-600/90 text-primary-foreground".
It now applies to any FormSubmitButtons that do not specify a variant prop.

```tsx
import { Button } from '@/components/ui/button';

interface FormSubmitProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  size?: 'default' | 'sm' | 'lg' | 'icon';
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' 
    | 'link' | 'primary';
};

export default function FormSubmitButton({
  children,
  className,
  disabled,
  size = 'default',
  variant = 'primary',
}: FormSubmitProps) {
```

#### Use FormSubmitButton

Now add the re-usable `FormSubmitButton` inside the `BoardForm`.

refactor: BoardForm to use FormSubmitButton

Replace BoardFormButton component with FormSubmitButton component to avoid duplication and improve reusability.

`components\BoardForm.tsx`
```tsx
"use client";

import React from 'react';

import { createBoard } from "@/actions/createBoard/index";
import { useServerAction } from '@/hooks/useServerAction';
import FormInput from '@/components/form/FormInput';
import FormSubmitButton from '@/components/form/FormSubmitButton';

/* Create a form for creating a new board */
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
      <FormInput 
        errors={fieldErrors}
        id="title"
        label="Board Title"
      />
      <FormSubmitButton 
        size="default" 
        variant="default" 
        className='p-1'
      >
        Save
      </FormSubmitButton>
    </form>
  )
}
```

## Debug Issue: `FormErrors` component message on `FormInput` validation does not reset.

Steps to reproduce the error:

1. Navigate to `BoardForm`
2. Type an invalid title (i.e., less than 3 characters) for the Board inside the input
3. Hit the submit button
4. After form submission, type a valid title name for the Board and submit
5. Error message displays below the input but does not go away after a valid input is placed

The error message can be traced back to the zod validation:

`actions\createBoard\createBoardSchema.ts`
```ts
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

Error message does not reset inside the `FormInput` component wwhich renders `FormErrors`

```tsx
const FormInput = forwardRef<HTMLInputElement, FormInputProps>(({
// ...
}, ref) => {
  return (
    <div className='space-y-2'>
      <div className='space-y-1'>
        {label ? (
          <Label 
            htmlFor={id}
            className='text-xs font-semibold text-neutral-700'
          >
            {label}
          </Label>
        ) : null}
        <Input 
          id={id}
          defaultValue={defaultValue}
          name={id}
          placeholder={placeholder}
          type={type}
          disabled={pending || disabled}
          required={required}
          onBlur={onBlur}
          ref={ref}
          className={cn(
            'text-sm px-2 py-1 h-7',
            className,
          )}
          aria-describedby={`${id}-error`}
        />
      </div>
      <FormErrors 
        id={id}
        errors={errors}
      />
    </div>
  )
});
```

The issue can be traced back to 

`hooks\useServerAction.ts`
```ts
  const executeServerAction = useCallback(
    async (input: InputType) => {
      setIsLoading(true);

      try {
        const actionOutput = await action(input);

        // ...

        if (actionOutput.fieldErrors) {
          setFieldErrors(actionOutput.fieldErrors);
        }
```

As we can see we invoke `setFieldErrors(actionOutput.fieldErrors)` IF we have the `actionOutput.fieldErrors` to be truthy.

HOWEVER, let's navigate back to our creator function `createServerAction`

`lib\createServerAction.ts`
```ts
export function createServerAction<InputType, OutputType>(
  schema: z.Schema<InputType>,
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

    return performAction(validation.data);
  };
}
```

Look closely where we return `fieldErrors` object only when validation is NOT successful.

This means that because of 

`lib\createServerAction.ts`
```ts
    if (!validation.success) {
      // If validation fails, return field errors.
      return {
        fieldErrors: validation.error.flatten().fieldErrors as FieldErrors<InputType>,
      };
    }
```

The `setFieldErrors` will not update in `useServerAction` hook, because `actionOutput.fieldErrors` must be truthy. That means we ONLY update the `fieldErrors` state when we do have a `fieldError` object being returned.

`hooks\useServerAction.ts`
```ts
  const executeServerAction = useCallback(
    async (input: InputType) => {
      setIsLoading(true);

      try {
        const actionOutput = await action(input);

        // ...

        if (actionOutput.fieldErrors) {
          setFieldErrors(actionOutput.fieldErrors);
        }
```

Fix: always update the `fieldErrors` state variable, regardless if `fieldErrors` exists or not.

Field errors are usually returned by the server when the input data does not meet some validation criteria. If you want to display the field errors to the user, then you should always check for them and render them accordingly. 

refactor: update fieldErrors state in useServerAction

Update the fieldErrors state in the useServerAction hook whenever the actionOutput is received. This ensures that the field errors are always in sync with the server response, regardless of whether there is an error or data.

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

        setFieldErrors(actionOutput.fieldErrors);

        if (actionOutput.error) {
          setError(actionOutput.error);
          options.onError?.(actionOutput.error);
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

fix: update FormErrors state on input submission

Update the FormErrors state in the FormInput component whenever a new input value is submitted. This also changes the useServerAction hook to update the state of the fieldErrors every time an actionOutput is receieved. This ensures that the form validation errors are always in sync with the user input.

refactor: update fieldErrors state in useServerAction

Update the fieldErrors state in the useServerAction hook whenever the actionOutput is received. This ensures that the field errors are always in sync with the server response, regardless of whether there is an error or data. This fixes the issue where the FormErrors component does not disappear on subsequent form submissions.

## Redesign of organization ID page

The current org ID page:

`app\(app)\(dashboard)\org\[orgId]\page.tsx`
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

Let's redesign it.

Going to build an `Info` component which describes a quick summary of the currently selected team, organization, or personal profile. Then another component `BoardList` that should render a list of boards. Make basic react functional components in `/components` and then use them in the org ID page.

refactor: org ID page with BoardList & Info

```tsx
import BoardList from '@/components/BoardList';
import Info from '@/components/Info';
import { Separator } from '@/components/ui/separator';
import React from 'react';

const OrganizationIdPage = () => {

  return (
    <div className='flex flex-col w-full mb-20'>
      <Info />
      <Separator className='my-4'/>
      <div className='px-2 md:px-4'>
        <BoardList />
      </div>
    </div>
  );
};

export default OrganizationIdPage
```

### Info component

In `Info`, we want to render an `Image` for the organization or team. We will use the `useOrganization` hook to get the `organization` data and the `isLoaded`. We will conditionally render a loading element when the `isLoaded` is `false`. In the output we create an imagee container to hold the organization image.

feat: display organization image in Info component

`components\Info.tsx`
```tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { useOrganization } from '@clerk/nextjs';

export default function Info() {
  const { organization, isLoaded } = useOrganization();

  if (!isLoaded) {
    return (
      <p>Loading...</p>
    )
  }

  return (
    <div className='flex items-center gap-x-4'>
      {/* Image container */}
      <div className='relative w-[60px] h-[60px]'>
        <Image
          fill
          src={organization?.imageUrl}
          alt="organization image"
          className='rounded-md object-cover'
          sizes="(max-width: 768px) 33vw, (max-width: 1200px) 30vw, 25vw"
        />
      </div>
    </div>
  )
}
```

#### Issue: the `src` prop in `Image` gives an error

Hovering over the `src` prop in the `Image` gives a type not assignable to type error.

```sh
Type 'string | undefined' is not assignable to type 'string | StaticImport'.
  Type 'undefined' is not assignable to type 'string | StaticImport'.ts(2322)
image-component.d.ts(7, 5): The expected type comes from property 'src' which is declared here on type 'IntrinsicAttributes & Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "ref" | ... 5 more ... | "srcSet"> & { ...; } & RefAttributes<...>'
(property) src: string | StaticImport
```

This error means that the `src` prop of the `Image` component expects either a string or a StaticImport type, but the value you are passing to it (`organization?.imageUrl`) could be undefined if `organization` is null or undefined. TypeScript does not allow assigning a possibly undefined value to something that expects a specific type.

There are a few ways to fix this error, depending on your use case and preference. Here are some possible solutions:

- Use the non-null assertion operator (!) to tell TypeScript that you are sure that `organization` and `organization.imageUrl` are not null or undefined. This will suppress the error, but it could cause runtime errors if your assumption is wrong. For example:

```TSX
<Image
  fill
  src={organization!.imageUrl!} // use ! to assert non-null
  alt="organization image"
  className='rounded-md object-cover'
  sizes="(max-width: 768px) 33vw, (max-width: 1200px) 30vw, 25vw"
/>
```

- Use the optional chaining operator (?.) and the nullish coalescing operator (??) to provide a fallback value for `src` in case `organization` or `organization.imageUrl` is null or undefined. This will ensure that `src` always receives a valid value, but you need to decide what the fallback value should be. For example:

```TSX
<Image
  fill
  src={organization?.imageUrl ?? "/default.png"} // use ?? to provide a fallback
  alt="organization image"
  className='rounded-md object-cover'
  sizes="(max-width: 768px) 33vw, (max-width: 1200px) 30vw, 25vw"
/>
```

- Use a type guard to check if `organization` and `organization.imageUrl` are defined before rendering the `Image` component. This will ensure that `src` only receives a valid value when `organization` and `organization.imageUrl` are not null or undefined, but it will also prevent the `Image` component from rendering otherwise. For example:

```TSX
{organization && organization.imageUrl && ( // use && to check if both are defined
  <Image
    fill
    src={organization.imageUrl}
    alt="organization image"
    className='rounded-md object-cover'
    sizes="(max-width: 768px) 33vw, (max-width: 1200px) 30vw, 25vw"
  />
)}
```

Going with the second option by providing a fallback image with nullish coalescing.

fix: use default image when imageUrl is undefined

`components\Info.tsx`
```tsx
export default function Info() {
  const { organization, isLoaded } = useOrganization();
  // ...
  return (
    <div className='flex items-center gap-x-4'>
      {/* Image container */}
      <div className='relative w-[60px] h-[60px]'>
        <Image
          fill
          src={organization?.imageUrl ?? '/logo.svg'}
          alt="organization image"
          className='rounded-md object-cover'
          sizes="(max-width: 768px) 33vw, (max-width: 1200px) 30vw, 25vw"
        />
      </div>
    </div>
  )
}
```

Finish up the output of the `Info` component with the org name and a icon next to text indicating whether its premium or free.

```tsx
export default function Info() {
  const { organization, isLoaded } = useOrganization();

  if (!isLoaded) {
    return (
      <p>Loading...</p>
    )
  }

  return (
    <div className='flex items-center gap-x-4'>
      {/* Image container */}
      <div className='relative w-[60px] h-[60px]'>
        <Image
          fill
          src={organization?.imageUrl ?? '/logo.svg'}
          alt="organization image"
          className='rounded-md object-cover'
          sizes="(max-width: 768px) 33vw, (max-width: 1200px) 30vw, 25vw"
        />
      </div>
      {/* Organization Info */}
      <div className='space-y-1'>
        <p className='font-semibold text-xl'>
          {organization?.name}
        </p>
        {/* Premium or Free info is dynamically rendered */}
        <div className='flex items-center text-xs text-muted-foreground'>
          <CreditCard />
          Free
        </div>
      </div>
    </div>
  )
}
```

#### Info skeleton

Wrap the `Info` component up with a skeleton, a placeholder preview of the content before it fully loads. It mimics the layout and structure of the actual content, but without the details. It reduces the perceived loading time, keeps the user engaged improving the user experience.

Instead of creating a new component called `InfoSkeleton`, we are going to define a static property for the `Info` component.

##### Defining skeletons inside components as static properties

In React, a static property is a property that belongs to the component class or function, not to the instance. It can be accessed without creating an instance of the component. Static properties are useful for defining constants, default props, context types, or subcomponents.

There are different ways to define a static property in React, depending on whether you are using a class component or a function component, and whether you are using TypeScript or JavaScript. Here are some examples:

- For a class component in JavaScript, you can define a static property inside the class body, using the `static` keyword. For example:

```jsx
class Example extends React.Component {
  // Define a static property called displayName
  static displayName = "Example";

  render() {
    return <p>This is an example component.</p>;
  }
}
```

- For a function component in JavaScript, you can define a static property on the function itself, using the dot notation. For example:

```jsx
function Example(props) {
  return <p>This is an example component.</p>;
}

// Define a static property called displayName
Example.displayName = "Example";
```

- For a class component in TypeScript, you can define a static property inside the class body, using the `static` keyword, and optionally provide a type annotation. For example:

```tsx
class Example extends React.Component {
  // Define a static property called displayName with a string type
  static displayName: string = "Example";

  render() {
    return <p>This is an example component.</p>;
  }
}
```

- For a function component in TypeScript, you can define a static property on the function itself, using the dot notation, and optionally provide a type annotation. You can also use a generic type parameter to specify the props type for the component. For example:

```tsx
function Example<T>(props: T) {
  return <p>This is an example component.</p>;
}

// Define a static property called displayName with a string type
Example.displayName: string = "Example";
```

So let's create the `Info.Skeleton`

```tsx
import { Skeleton } from '@/components/ui/skeleton';

export default function Info() {
  // ...
}

// Define a static property on the Info component called Skeleton and 
// assign a function component called InfoSkeleton
Info.Skeleton = function InfoSkeleton() {
  return (
    <Skeleton />
  )
}
```

Add the layout and structure inside the `InfoSkeleton`. Then when we check for the loading state, we render the Skeleton instead.

feat: add skeleton to Info component

Use the static property syntax to define a subcomponent called Skeleton on the Info component. The Skeleton component shows a placeholder preview of the content before it fully loads. This improves the user experience and reduces the perceived loading time.

```tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { useOrganization } from '@clerk/nextjs';
import { CreditCard } from 'lucide-react';

import { Skeleton } from '@/components/ui/skeleton';

export default function Info() {
  const { organization, isLoaded } = useOrganization();

  if (!isLoaded) {
    return (
      <Info.Skeleton />
    )
  }

  return (
    <div className='flex items-center gap-x-4'>
      {/* Image container */}
      <div className='relative w-[60px] h-[60px]'>
        <Image
          fill
          src={organization?.imageUrl ?? '/logo.svg'}
          alt="organization image"
          className='rounded-md object-cover'
          sizes="(max-width: 768px) 33vw, (max-width: 1200px) 30vw, 25vw"
        />
      </div>
      {/* Organization Info */}
      <div className='space-y-1'>
        <p className='font-semibold text-xl'>
          {organization?.name}
        </p>
        {/* Premium or Free info is dynamically rendered */}
        <div className='flex items-center text-xs text-muted-foreground'>
          <CreditCard />
          Free
        </div>
      </div>
    </div>
  )
}

/**
 * Shows a placeholder preview of the content before it fully loads. Improves
 * user experience by showing a layout & structure of the component content,
 * but withoout the details. Reduces the perceived loading time and keeps the
 * user engaged.
 * 
 * Uses React syntax to define a static property on the Info component and 
 * assign the function component which renders the skeleton.
 * @returns the skeleton of the Info component
 */
Info.Skeleton = function InfoSkeleton() {
  return (
    <div className='flex items-center gap-x-4'>
      {/* Image container */}
      <div className='relative w-[60px] h-[60px]'>
        <Skeleton className='absolute w-full h-full' />
      </div>
      {/* Organization Info */}
      <div className='space-y-2'>
        <Skeleton className='h-10 w-[200px]' />
        <div className='flex items-center'>
          <Skeleton className='h-4 w-4 mr-2' />
          <Skeleton className='h-4 w-[100px]' />
        </div>
      </div>
    </div>
  )
}
```

### BoardList component

Before making the `BoardList`, we are going to make a `BoardCreationButton`. This will be a `Button` along with some text "Create new board" and text indicating how many free boards are left for the user. Also give it a hover effect and styling.

`components\BoardCreationButton.tsx`
```tsx
import React from 'react';
import { Button } from '@/components/ui/button';

export default function BoardCreationButton() {
  return (
    <Button
      className='relative flex flex-col items-center h-full w-full rounded-sm aspect-video bg-muted gap-y-1 justify-center transition hover:opacity-75'
    >
      <p className='text-sm'>Create new board</p>
      <span className='text-xs'>
        15 remaining
      </span>
    </Button>
  )
}
```

Now import the `BoardCreationButton` inside `BoardList.tsx`.

Then inside add a board list header containing a header containg a user icon (`UserRound` icon from lucide-react) and text. Then after a `div` container for the responsive board of grids. Then render the `BoardCreationButton` inside the grid.

`components\BoardList.tsx`
```tsx
import React from 'react';
import { UserRound } from 'lucide-react';
import BoardCreationButton from '@/components/BoardCreationButton';

export default function BoardList() {
  // Fetch boards here

  return (
    <div className='space-y-4'>
      {/* User icon header */}
      <div className='flex items-center text-lg text-neutral-700 font-semibold'>
        <UserRound className='h-6 w-6 mr-2' />
        Your boards
      </div>
      {/* Grid of boards */}
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
        <BoardCreationButton />
      </div>

    </div>
  )
}
```

#### Issue: Hydration error when expected server HTML to contain a matching button

```sh
Unhandled Runtime Error
Error: Hydration failed because the initial UI does not match what was rendered on the server.

Warning: Expected server HTML to contain a matching <button> in <button>.

See more info here: https://nextjs.org/docs/messages/react-hydration-error
```

After debugging, the hydration issue seems to be with the `BoardCreationButton`.

`components\BoardCreationButton.tsx`
```tsx
import React from 'react';
import { HelpCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import BoardTooltip from '@/components/BoardTooltip';

const freeBoards = 15;

export default function BoardCreationButton() {
  return (
    <Button
      className='relative flex flex-col items-center h-full w-full rounded-sm aspect-video bg-muted gap-y-1 justify-center transition hover:opacity-75'
    >
      <p className='text-sm'>Create new board</p>
      <span className='text-xs'>
        {freeBoards} remaining
      </span>
      <BoardTooltip 
        sideOffset={40}
        description={`
          Free workspaces allow up to ${freeBoards} boards. 
          Upgrade this workspace to create unlimited boards.
        `}
      >
        <HelpCircle className='absolute bottom-2 right-2 h-[14px] w-[14px]'/>
      </BoardTooltip>
    </Button>
  )
}
```

Thhe error indicates that the initial UI rendered by the server does not match what was rendered on the client. This can cause problems with React's hydration process, which tries to attach event listeners and manage the state of the component.

One possible reason for this mismatch is that we are using the `aspect-video` class in `Button` component, which sets the padding-top property to 56.25%. This property is calculated based on the width of the parent element, which may be different on the server and the client.

Possible fixes:

To fix this error, we can try to use a fixed height for the `Button` component instead of relying on the `aspect-video` class. For example, we can use the `h-40` class to set the height to 10rem. Alternatively, we can use a different way to achieve the aspect ratio we want, such as using an invisible image or a pseudo-element.

##### Fix: replace `Button` element with `div` with role of button

```tsx
import React from 'react';
import { HelpCircle } from 'lucide-react';

import BoardTooltip from '@/components/BoardTooltip';

const freeBoards = 15;

export default function BoardCreationButton() {
  return (
    <div
      role='button'
      className='relative flex flex-col items-center h-full w-full rounded-sm aspect-video bg-muted gap-y-1 justify-center transition hover:opacity-75'
    >
      <p className='text-sm'>Create new board</p>
      <span className='text-xs'>
        {freeBoards} remaining
      </span>
      <BoardTooltip 
        sideOffset={40}
        description={`
          Free workspaces allow up to ${freeBoards} boards. 
          Upgrade this workspace to create unlimited boards.
        `}
      >
        <HelpCircle className='absolute bottom-2 right-2 h-[14px] w-[14px]'/>
      </BoardTooltip>
    </div>
  )
}
```

docs: Note button hydration error and its fix

- Explain why Button component causes mismatch between server and client HTML
- Replace Button component with div element with role='button' attribute
- Prevent hydration error from React

fix: use div instead of Button component in BoardCreationButton

- Replace Button component with div element with role='button' attribute
- Avoid mismatch between server and client HTML caused by Button component rendering differently
- Prevent hydration error from React

## Board popover

### Board tooltip

Now for the `BoardCreationButton` we added the hover effect because we want the user to hover over it and be able to see the hint or tooltip that gives the user more information on what it means to have boards remaining.

To do that we need to create another component `BoardTooltip`.

`components\BoardTooltip.tsx`
```tsx
import React from 'react'

interface BoardTooltipProps {
  children: React.ReactNode;
};

export default function BoardTooltip({
  children,
}: BoardTooltipProps) {
  return (
    <div>
      {children}
    </div>
  )
}
```

Next install the [Tooltip from shadcn/ui](https://ui.shadcn.com/docs/components/tooltip).

```sh
npx shadcn-ui@latest add tooltip
```

Now import and add the `Tooltip` component inside `BoardTooltip`.

```tsx
import React from 'react'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface BoardTooltipProps {
  children: React.ReactNode;
};

export default function BoardTooltip({
  children,
}: BoardTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
```

We are going to need more props: `{description, side, sideOffset}`. The `description` is the content the tooltip will contain. The `side` will determine where the tooltip will be within the component, default at bottom. The `sideOffset` is the offset of the tooltip relative to the parent component, default at 0.

```tsx
interface BoardTooltipProps {
  children: React.ReactNode;
  description: string;
  sideOffset?: number;
  side?: 'top' | 'right' | 'bottom' | 'left';
};

export default function BoardTooltip({
  children,
  description,
  sideOffset = 0,
  side = 'bottom',
}: BoardTooltipProps) {
```

feat: assign props & add styles to BoardTooltip

Create a reusable BoardTooltip component that accepts children, description, sideOffset, and side props. Use the Tooltip, TooltipContent, TooltipProvider, and TooltipTrigger components to implement the BoardTooltip component. The BoardTooltip component displays a tooltip with the given description on the specified side of the children element, with an optional sideOffset value.

Now we can add the `BoardTooltip` to the `BoardCreationButton`, and assign the right props.

feat: add BoardTooltip to BoardCreationButton component

Use the BoardTooltip component to display a tooltip with the number of remaining free boards and an upgrade option on the BoardCreationButton component. The tooltip appears on the bottom right corner of the button, with a 40px side offset. The tooltip uses the HelpCircle icon from lucide-react as a trigger.

```tsx
import React from 'react';
import { HelpCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import BoardTooltip from '@/components/BoardTooltip';

const freeBoards = 15;

export default function BoardCreationButton() {
  return (
    <Button
      className='relative flex flex-col items-center h-full w-full rounded-sm aspect-video bg-muted gap-y-1 justify-center transition hover:opacity-75'
    >
      <p className='text-sm'>Create new board</p>
      <span className='text-xs'>
        {freeBoards} remaining
      </span>
      <BoardTooltip 
        sideOffset={40}
        description={`
          Free workspaces allow up to ${freeBoards} boards. 
          Upgrade this workspace to create unlimited boards.
        `}
      >
        <HelpCircle className='absolute bottom-2 right-2 h-[14px] w-[14px]'/>
      </BoardTooltip>
    </Button>
  )
}
```

### Form Popover

- [Popover from shadcn/ui](https://ui.shadcn.com/docs/components/popover)

```sh
npx shadcn-ui@latest add popover
```

Now time to implement the Popover. Create `FormPopover` component inside `/components/form`, with the `FormPropoverProps` interface that contains `children`.

`components\form\FormPopover.tsx`
```tsx
"use client";

import React from 'react';

interface FormPopoverProps {
  children: React.ReactNode;
}

export default function FormPopover({
  children,
}: FormPopoverProps) {
  return (
    <div>
      FormPopover
      {children}
    </div>
  )
}
```

Also add a `align`, `side` and `sideOffset` props. The default offset is 0 and side is bottom.

feat: Add more props to FormPopover component

Additional props to the FormPopover component are now available:

- `align`: Specifies the alignment of the popover content (options: 'start', 'center', 'end').
- `sideOffset`: Allows adjusting the distance between the popover and its target element.
- `side`: Determines the side of the target element where the popover should appear (options: 'top', 'right', 'bottom', 'left').

These props enhance the flexibility and customization options for the FormPopover component.

```tsx
interface FormPopoverProps {
  children: React.ReactNode;
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
  side?: 'top' | 'right' | 'bottom' | 'left';
};

export default function FormPopover({
  children,
  align,
  sideOffset = 0,
  side = 'bottom',
}: FormPopoverProps) {
```

Add the `Popover` imports and render them in the output.
  - return `Popover`
  - For `PopoverTrigger`
    - assign `asChild` prop
    - render `children`
  - `PopoverContent`
    - Assign props to `align, side, sideOffset`
    - Add `className` w-80 and pt-3 styles
    - Create a `div` inside
  - `div` will contain the text "Create board" with styles:
    - pb-4 font-medium text-sm text-center text-neutral-600

`components\form\FormPopover.tsx`
```tsx
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface FormPopoverProps {
  children: React.ReactNode;
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
  side?: 'top' | 'right' | 'bottom' | 'left';
};

export default function FormPopover({
  children,
  align,
  sideOffset = 0,
  side = 'bottom',
}: FormPopoverProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
      {children}
      </PopoverTrigger>
      <PopoverContent
        align={align}
        sideOffset={sideOffset}
        side={side}
        className='w-80 pt-3'
      >
        <div className='pb-4 font-medium text-sm text-center text-neutral-600'>
          Create board
        </div>
      </PopoverContent>
    </Popover>
  )
}
```

feat: add Popover functionality to FormPopover

This commit enhances the FormPopover component by incorporating Popover functionality. The following changes have been made:

1. Added a Popover wrapper around the existing content.
2. Utilized the PopoverTrigger component to trigger the popover display.
3. Introduced the PopoverContent component with customizable props:
   - `align`: Determines the alignment of the popover content (options: 'start', 'center', 'end').
   - `sideOffset`: Allows adjusting the distance between the popover and its target element.
   - `side`: Specifies the side of the target element where the popover should appear (options: 'top', 'right', 'bottom', 'left').

This enhancement enhances the flexibility and user experience of the FormPopover component.

#### Use popover functionality

As we can see, we pass in the `children` to the `PopoverTrigger`. This means that we can wrap a component with the `FormPopover` component which modifies the functionality of the children to serve as a trigger.

Let's wrap the `BoardCreationButton` inside of `BoardList`:

`components\BoardList.tsx`
```tsx
import FormPopover from '@/components/form/FormPopover';

export default function BoardList() {

  return (
    <div className='space-y-4'>
      <div className='flex items-center text-lg text-neutral-700 font-semibold'>
        <UserRound className='h-6 w-6 mr-2' />
        Your boards
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>

        <FormPopover side='right' sideOffset={10}>
          <BoardCreationButton />
        </FormPopover>

      </div>

    </div>
  )
}
```

Now when we click the `BoardCreationButton` we should see a popover window to the right with the text "Create board".

#### Add close functionality to Popover component

One thing to add to to the current popover component is the ability to close it. We'd like to add a close button to the popover itself to make it behave like a window.

Let's look at the `Popover` component:

`components\ui\popover.tsx`
```tsx
"use client"

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent }
```

Let's add a `PopoverClose` and export it.

feat: extend Popover with close functionality

This commit enhances the Popover component by adding the PopoverClose component, allowing users to close the popover when needed.

```tsx
"use client"

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

// Add close functionality to the Popover
const PopoverClose = PopoverPrimitive.Close

const PopoverContent = React.forwardRef<
  // ...
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent, PopoverClose }
```

Navigate back to `FormPopover` and import and render the `PopoverClose` component. Inside we can add a `Button` and an `X` icon.

feat: implement close feature for FormPopover

This commit enhances the FormPopover component by introducing the PopoverClose component, enabling users to easily close the popover. An 'X' icon button has also been included for improved user experience.

`components\form\FormPopover.tsx`
```tsx
"use client";

import React from 'react';
import { X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface FormPopoverProps {
  children: React.ReactNode;
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
  side?: 'top' | 'right' | 'bottom' | 'left';
};

export default function FormPopover({
  children,
  align,
  sideOffset = 0,
  side = 'bottom',
}: FormPopoverProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent
        align={align}
        sideOffset={sideOffset}
        side={side}
        className='w-80 pt-3'
      >
        <div className='pb-4 font-medium text-sm text-center text-neutral-600'>
          Create board
        </div>
        <PopoverClose asChild>
          <Button
            variant='destructive'
            className='absolute top-2 right-2 h-auto w-auto text-neutral-600'
          >
            <X className='h-4 w-4' />
          </Button>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  )
}
```

#### Add form inputs to FormPopover

Now to make the popover into a `FormPopover`, we need to add the inputs, mainly the `form` element including the `FormInput` and `FormSubmit` components. Add these after the ending tag for `PopoverClose`.

feat: Add form to FormPopover component

This commit introduces a form within the FormPopover component. The form allows users to input a board title when creating a new board. The form includes a text input field for the title and a 'Create' button for submission.

```tsx
"use client";

import FormInput from '@/components/form/FormInput';
import FormSubmitButton from '@/components/form/FormSubmitButton';

export default function FormPopover({
  // ...props
}: FormPopoverProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent
        align={align}
        sideOffset={sideOffset}
        side={side}
        className='w-80 pt-3'
      >
        <div className='pb-4 font-medium text-sm text-center text-neutral-600'>
          Create board
        </div>
        <PopoverClose asChild>
          <Button
            variant='destructive'
            className='absolute top-2 right-2 h-auto w-auto text-neutral-600'
          >
            <X className='h-4 w-4' />
          </Button>
        </PopoverClose>
        <form className='space-y-4'>
          <div className='space-y-4'>
            <FormInput
              id='title'
              label='Board title'
              type='text'
            />
          </div>
          <FormSubmitButton 
            size='default'
            variant='default'
            className='w-full'
          >
            Create
          </FormSubmitButton>
        </form>
      </PopoverContent>
    </Popover>
  )
}
```

Now we can add the `createBoard` server action to the `form`.

- Destructure `executeServerAction` and `fieldErrors` from `useServerAction`
- Pass in `createBoard` as the first argument and the callback functions `onSuccess` and `onError`  as the second argument to `useServerAction`
- Create a submit handler function that takes `formData`, which extracts the `title` and invokes `executeServerAction` with it
- Assign `onSubmit` handler to the form's `action` property
- Assign `fieldErrors` to the `FormInput`'s `error` property

`components\form\FormPopover.tsx`
```tsx
"use client";

import React from 'react';
import { X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import FormInput from '@/components/form/FormInput';
import FormSubmitButton from '@/components/form/FormSubmitButton';

import { useServerAction } from '@/hooks/useServerAction';
import { createBoard } from "@/actions/createBoard/index";

interface FormPopoverProps {
  children: React.ReactNode;
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
  side?: 'top' | 'right' | 'bottom' | 'left';
};

export default function FormPopover({
  children,
  align,
  sideOffset = 0,
  side = 'bottom',
}: FormPopoverProps) {
  const { executeServerAction, fieldErrors } = useServerAction(createBoard, {
    onSuccess: (data) => { 
      console.log({ data }); 
    },
    onError: (error) => {
      console.log({ error });
    },
  });

  function onSubmit(formData: FormData){
    const title = formData.get('title') as string;

    executeServerAction({ title });
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent
        align={align}
        sideOffset={sideOffset}
        side={side}
        className='w-80 pt-3'
      >
        <div className='pb-4 font-medium text-sm text-center text-neutral-600'>
          Create board
        </div>
        <PopoverClose asChild>
          <Button
            variant='destructive'
            className='absolute top-2 right-2 h-auto w-auto text-neutral-600'
          >
            <X className='h-4 w-4' />
          </Button>
        </PopoverClose>
        <form action={onSubmit} className='space-y-4'>
          <div className='space-y-4'>
            <FormInput
              id='title'
              label='Board title'
              type='text'
              errors={fieldErrors}
            />
          </div>
          <FormSubmitButton 
            size='default'
            variant='default'
            className='w-full'
          >
            Create
          </FormSubmitButton>
        </form>
      </PopoverContent>
    </Popover>
  )
}
```

### React toast component 

React toast is a term that can refer to different packages or components that allow you to display notifications or messages to your users in a pop-up style. These notifications are often called toasts because they appear and disappear like a toast popping out of a toaster. Some examples of react toast packages are:

- [react-hot-toast](https://react-hot-toast.com/): A lightweight and customizable package that supports RTL, swipe to close, emoji, animations, and more.
- [react-toastify](https://www.npmjs.com/package/react-toastify): A popular package that offers easy setup, dark mode, pause on hover, promise API, and more.
- [sonner](https://sonner.emilkowal.ski/), an opinionated toast component with fluid animations for swiping and transitions.

Going to use **sonner**, an opinionated toast component for React. It has clean enter and exit animations. Here are the [motivations to why sonner was made](https://emilkowal.ski/ui/building-a-toast-component).

- [sonner](https://sonner.emilkowal.ski/)
- [sonner | npm](https://www.npmjs.com/package/sonner)
  
```sh
npm install sonner
```

Then render the toaster in the root of the app. For our Next.js 14 app router, it's inside the uppermost layout we need the toast notifications in. For some they may want it in the `RootLayout` (app\layout.tsx), but for this project we can put it inside the `app\(app)` layout.

Go ahead and import `Toaster` from sonner and render it right before the `children` inside `ClerkProvider`.

feat: add sonner toaster component to app layout

`app\(app)\layout.tsx`
```tsx
import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from "sonner";

const AppLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <ClerkProvider>
      <Toaster />
      {children}
    </ClerkProvider>
  )
}

export default AppLayout
```

Now with this we can return to the `FormPopover` and add react toast notifications to the callback functions. Note that we can pass in `error` to `toast.error()` because we specify the type of there error that comes from the databse as a `string`.

Add toast notifications for createBoard action

This commit adds toast notifications for the createBoard action using the sonner library. The notifications show success or error within the callback functions. 

```tsx
import { toast } from 'sonner';

import { useServerAction } from '@/hooks/useServerAction';
import { createBoard } from "@/actions/createBoard/index";

export default function FormPopover({
  // ...
}: FormPopoverProps) {
  const { executeServerAction, fieldErrors } = useServerAction(createBoard, {
    onSuccess: (data) => { 
      console.log({ data });
      toast.success("Board created.")
    },
    onError: (error) => {
      console.log({ error });
      toast.error(error);
    },
  });
```

Now to test out the notifications for two scenarios:

1. Create a board successfully
2. Throw an error and display it successfully

We can simulate the error inside the `createBoard` server action.

`actions\createBoard\index.ts`
```ts
async function performAction (data: InputType): Promise<ReturnType> {
  // ...

  let board;

  try {
    // Add an error to test the toast notification
    throw new Error("Error_for_toast_notification");

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
```

With that we should see both toast notifications display on the bottom side of the page.

## Board image selector

The next feature we'd want to focus on is to allow the user to pick an image for the Board. These images allow the users to customize their workspaces.

### Unsplash Image API

- [Unsplash Image API](https://unsplash.com/developers)
- [Unsplash documentation - Getting started](https://unsplash.com/documentation#getting-started)
- [Unsplash-js](https://github.com/unsplash/unsplash-js)

Going to use Unsplash image API to gather images for the user to choose from. Go ahead and register as a developer at https://unsplash.com/developers

After registering, click "Your applications" and click "New Applications". Go ahead and checkbox all the guides and terms. Add app name and description, the create application.

```sh
Visionize

A kanban productivity app.
```

We are now in the page for "Apply for production". If you are going to make your application live then you can run this but for visionize, which is currently in development, we won't apply for production.

#### Add Unsplash API to environment variables

We can scroll down to find our `Keys` section which contains the:

- Application ID
- Access Key
- Secret Key

Inside `.env`, create the environment variable: `NEXT_PUBLIC_UNSPLASH_ACCESS_KEY` and assign the `Access Key` to it.

##### Allow Next.js to expose the environment variable to the browser

Use `NEXT_PUBLIC_UNSPLASH_ACCESS_KEY` as the name of the environment variable.

The name of the environment variable is important here as it allows you to use the Unsplash API in your Next.js application without exposing your access key to the public. 

The prefix `NEXT_PUBLIC_` tells Next.js to expose the environment variable to the browser, where it can be used to fetch images from Unsplash. However, the access key is still hidden from the source code and the build output, as it is only injected at runtime

`.env`
```.env
<!-- ...environment variables and other sensitive data here -->

# Unsplash API
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY="YOUR_ACCESS_KEY_HERE"
```

So if you named this environment variable anything different, you need the following fix.

fix: OAuth error, access token invalid w/ prefix

- Fixes the OAuth error: access token invalid from Unsplash by telling Next.js to expose the environment variable to the browser
- Use the NEXT_PUBLIC_ prefix to expose the access key to the browser
- Hide the access key from the source code and the build output
- Follow Unsplash API guidelines and security best practices

#### Install Unsplash API for JS

Let's install the official JS wrapper for [Unsplash API](https://github.com/unsplash/unsplash-js).

```sh
npm i unsplash-js
```

Now what we need to do is create an instance of unsplash. Create the file `unsplashAPI.ts` in the `/lib` folder.

```ts
import { createApi } from 'unsplash-js';

/* Create API object from unsplash-js library, to access and manipulate photos
from https://unsplash.com
 */
export const unsplashApi = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
  fetch: fetch,
});

/** 
 * 
 * @see https://github.com/unsplash/unsplash-js?tab=readme-ov-file#usage
*/
/* 

// on your node server
const serverApi = createApi({
  accessKey: 'MY_ACCESS_KEY',
  //...other fetch options
});

// in the browser
const browserApi = createApi({
  apiUrl: 'https://mywebsite.com/unsplash-proxy',
  //...other fetch options
});

*/
```

Issue: we get a type error under `accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY`.

Tried adding an `apiUrl` property but it still throws the error.

```ts
export const unsplashApi = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
  fetch: fetch,
  apiUrl: 'https://api.unsplash.com',
});
```

So just added a `!` and it fixed the issue.

fix: add non-null assertion operator access key

This commit adds a non-null assertion operator to the environment variable that stores the unsplash API access key. The operator excludes null and undefined from the type, which is useful for when we have knowledge that the TypeScript compiler lacks, such as the existence of an environment variable.

```ts
export const unsplashApi = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY!,
  fetch: fetch,
});
```

This code works because it uses the **non-null assertion operator** (!) to tell TypeScript that the value of `process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY` is not null or undefined. This operator is a postfix expression that is used to exclude null and undefined from the type of a variable. It is useful when you have some knowledge that the TypeScript compiler lacks, such as the existence of an environment variable.

The non-null assertion operator is simply removed in the emitted JavaScript code, so it has no runtime effect. However, it can help you avoid type errors and unnecessary checks when you are confident that a value is not nullish.

### FormSelector component

Create client component `FormSelector.tsx` in `/components/form`.

It will contain a prop interface that contains an `id`, and `errors` which will contain the `fieldErrors` from `useServerAction.ts`

feat: add prop interface to FormSelector

Define the FormSelectorProps interface with id and errors properties
and use it as the prop type for the FormSelector component.
This improves the type safety and readability of the code.

```tsx
"use client";

import React from 'react';

interface FormSelectorProps {
  id: string;
  errors?: Record<string, string[] | undefined>;
};

export default function FormSelector({
  id,
  errors,
}: FormSelectorProps) {
  return (
    <div>FormSelector</div>
  )
}
```

With that we can import and use `FormSelector` inside `FormPopover`. Render it inside the `form` and above the `FormInput`.

```tsx
import FormSelector from '@/components/form/FormSelector';

export default function FormPopover({
  // ...
}: FormPopoverProps) {
  const { executeServerAction, fieldErrors } = useServerAction(createBoard, {
    // ...
  });

  return (
    <Popover>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent
        align={align}
        sideOffset={sideOffset}
        side={side}
        className='w-80 pt-3'
      >
        <div className='pb-4 font-medium text-sm text-center text-neutral-600'>
          Create board
        </div>
        <PopoverClose asChild>
          <Button
            variant='destructive'
            className='absolute top-2 right-2 h-auto w-auto text-neutral-600'
          >
            <X className='h-4 w-4' />
          </Button>
        </PopoverClose>

        <form action={onSubmit} className='space-y-4'>
          <div className='space-y-4'>

            <FormSelector 
              id='image'
              errors={fieldErrors}
            />

            <FormInput
              id='title'
              label='Board title'
              type='text'
              errors={fieldErrors}
            />
          </div>
          <FormSubmitButton 
            size='default'
            variant='default'
            className='w-full'
          >
            Create
          </FormSubmitButton>
        </form>

      </PopoverContent>
    </Popover>
  )
}
```

Now develop the `FormSelector`.

Start with the imports:

```tsx
import React, { useEffect, useState } from 'react';
import { unsplashApi } from '@/lib/unsplashAPI';
```

Next what we want to attempt is to a set of images from a collection. Will use [photos.getRandom()](https://github.com/unsplash/unsplash-js?tab=readme-ov-file#photosgetrandomarguments-additionalfetchoptions) method from Unsplash.

- create `images` state variable which is type `Array<Record<string, any>>>`
- Inside a `useEffect` hook create an arrow function which contains a `fetchImages` async function
- `fetchImages` opens up a `try..catch` where it uses `unsplashApi` to get 9 random photos from collection 317099.
- Set the `images` to the result of the fetch's response property, if it exists
- Otherwise, print an error to the console for failing to fetch images
- catch any errors, reset the images array in these situations

The collectionId we will use is `317099` which leads to the [Unsplash Editorial - 317099](https://unsplash.com/collections/317099/unsplash-editorial) a collection with the theme "The Road Less Traveled".

1. It features photos of landscapes, nature and adventure from around the world
2. Curated by the Unsplash Editorial team
3. Wallpaper compatible photos, which fits the resolution and/or aspect ratio that we need to fit our boards

```tsx
"use client";

import React, { useEffect, useState } from 'react';
import { unsplashApi } from '@/lib/unsplashAPI';

interface FormSelectorProps {
  id: string;
  errors?: Record<string, string[] | undefined>;
};

export default function FormSelector({
  id,
  errors,
}: FormSelectorProps) {
  const [images, setImages] = useState<Array<Record<string, any>>>([]);

  const selectionCount: number = 9;

  // Use useEffect hook to fetch images on component mount
  useEffect(() => {
    // Fetch images from collection 317099, curated by Unsplash Editorial
    const fetchImages = async () => {
      try {
        const result = await unsplashApi.photos.getRandom({
          collectionIds: ["317099"],
          count: selectionCount,
        });
        if (result && result.response) {
          const imageData = (result.response as Array<Record<string, any>>);
          setImages(imageData);
        } else {
          console.error("Failed to fetch images from Unsplash.")
        }

      } catch(error) {
        console.log(error);
        // Reset images array
        setImages([]);
      }
    }

    fetchImages();
  }, []);

  return (
    <div>FormSelector</div>
  )
}
```

feat: integrate Unsplash API with FormSelector 

- Use unsplashApi to fetch random images from collection 317099
- Use useEffect hook to fetch images on component mount
- Use useState hook to store images in local state
- Display images in FormSelector component

Next add a `isLoading` state, true by default and set to false in the finally block. Then render a `Loading2` from lucide-react with a spin animation to indicate to the user that the image fetch is still underway.

Add loading state & parameterize selectionCount

- Add isLoading state to show a loader while fetching images from Unsplash API
- Add selectionCount variable to control the number of images to fetch
- Use selectionCount as a parameter in unsplashApi.photos.getRandom method
- Handle errors and loading state in fetchImages function

```tsx
"use client";

import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

import { unsplashApi } from '@/lib/unsplashAPI';

export default function FormSelector({
  // ...
}: FormSelectorProps) {
  const [images, setImages] = useState<Array<Record<string, any>>>([]);

  // Add isLoading state, true by default because fetch starts immediately
  const [isLoading, setIsLoading] = useState(true);

  const selectionCount: number = 9;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Fetch images from collection 317099, curated by Unsplash Editorial
        // ...
      } catch(error) {
        console.log(error);
        setImages([]);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchImages();
  }, []);

  if (isLoading) {
    return (
      <div className='flex items-center justify-center p-6'>
        <Loader2 className='h-6 w-6 text-sky-700 animate-spin' />
      </div>
    )
  }

  return (
    <div>FormSelector</div>
  )
}
```

#### FormSelector output

For the output we want to display a grid of images we fetched from Unsplash and allow users to select one of them. Before we work on the return get two variables

- `pending` from `useFormStatus`
- `selectedImageId` state variable

```tsx
import { useFormStatus } from 'react-dom';
import { Loader2 } from 'lucide-react';

import { unsplashApi } from '@/lib/unsplashAPI';

export default function FormSelector({
  // ...
}: FormSelectorProps) {
  const { pending } = useFormStatus();
  
  const [images, setImages] = useState<Array<Record<string, any>>>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const [selectedImageId, setSelectedImageId] = useState(null);
```

Next create a `div` that contains a grid which will store the images. The `images` will be mapped to a `div` with an `Image` inside. The `div` will have the `key` set to `image.id`, an `onClick` that does returns early if `pending` state of form is `true`, otherwise it sets the `selectedImageId`.

feat: add image selection to FormSelector

- Use useFormStatus hook to get the pending state of the form
- Use useState hook to store images, isLoading, and selectedImageId in local state
- Display images in a grid using Image and Loader2 components
- Add onClick handler to select an image and update selectedImageId state
- Use cn utility function to apply conditional class names based on the pending state

`components\form\FormSelector.tsx`
```tsx
"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { Loader2 } from 'lucide-react';

import { unsplashApi } from '@/lib/unsplashAPI';
import { cn } from '@/lib/utils';

interface FormSelectorProps {
  id: string;
  errors?: Record<string, string[] | undefined>;
};

export default function FormSelector({
  id,
  errors,
}: FormSelectorProps) {
  // Use useFormStatus hook to get the pending state of the form
  const { pending } = useFormStatus();

  // Define images state variable as an array of objects
  const [images, setImages] = useState<Array<Record<string, any>>>([]);

  // Add isLoading state, true by default because fetch starts immediately
  const [isLoading, setIsLoading] = useState(true);

  // Define a state for storing the selected image
  const [selectedImageId, setSelectedImageId] = useState(null);

  // Selection count determines how many images to fetch
  const selectionCount: number = 9;

  // Use useEffect hook to fetch images on component mount
  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Use unsplashApi to get random photos from collection 317099
        const result = await unsplashApi.photos.getRandom({
          collectionIds: ["317099"],
          count: selectionCount,
        });
        
        if (result && result.response) {
          // Cast result.response as an array of objects & assign it to imageData
          const imageData = (result.response as Array<Record<string, any>>);
          setImages(imageData);
        } else {
          console.error("Failed to fetch images from Unsplash.")
        }

      } catch(error) {
        console.log(error);
        // Reset images state to an empty array
        setImages([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  // Return a loader component when isLoading state is true
  if (isLoading) {
    return (
      <div className='flex items-center justify-center p-6'>
        <Loader2 className='h-6 w-6 text-sky-700 animate-spin' />
      </div>
    )
  }

  // Return a div element with a grid of images
  return (
    <div className='relative'>
      <div className="grid grid-cols-3 gap-2 mb-2">
        {images.map((image) => (
          <div 
            key={image.id}
            onClick={() => {
              // Check if the form is pending and return early if true
              if (pending) {
                return;
              }
              setSelectedImageId(image.id)
            }}
            // Use cn function to apply conditional class names based on the pending state
            className={cn(
              'relative aspect-video bg-muted cursor-pointer group transition hover:opacity-75',
              pending && 'cursor-auto opacity-50 hover:opacity-50'
            )}
          >
            <Image
              src={image.urls.thumb} 
              alt="Image from Unsplash"
              className='object-cover rounded-sm'
              fill
            />
          </div>
        ))}
      </div>
    </div>
  )
}
```

So far:

feat: add FormSelector component with Unsplash API integration and image selection

- Use unsplashApi to fetch random images from collection 317099
- Use useEffect hook to fetch images on component mount
- Use useState hook to store images, isLoading, and selectedImageId in local state
- Use useFormStatus hook to get the pending state of the form
- Display images in a grid using Image and Loader2 components
- Add onClick handler to select an image and update selectedImageId state
- Use cn utility function to apply conditional class names based on the pending state

##### Issue: Unhandled Runtime Error, Invalid src prop "images.unsplash.com" is not configred under images in your `next.config.js`

Add unsplash to remotePatterns in next.config.js

- Resolve the Unhandled Runtime Error caused by invalid src prop for Next.js Image component
- Allow Next.js Image component to optimize images from Unsplash
- Add a new object with protocol and hostname properties to the remotePatterns array

Add another remote pattern to fix the error:

`next.config.js`
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig
```

#### Issue: Unsplash API requests are limited to 50 an hour, too little for development

To fix this issue we want to create a constant that stores 9 images that we can use as a fallback for when we run out of requests. We can create a `constants` folder. 

##### constants folder

A constants folder in a Next.js project is a folder that contains files with constant values that can be used throughout the application. Constants are variables that have a fixed value and do not change during the execution of the program. They can be useful for storing configuration options, API keys, URLs, colors, themes, and other data that are not expected to change.

There is no official or standard way to create a constants folder in a Next.js project, but one common approach is to create a `constants` folder inside the `src` folder, which is an optional folder that can be used to organize the application source code. Inside the `constants` folder, one can create different files for different categories of constants, such as `api.ts`, `colors.ts`, `routes.ts`, etc. Each file can export one or more constants using the `export` keyword.

Using a constants folder can help to keep the code more organized, maintainable, and consistent. It can also make it easier to change the values of the constants in one place, without having to update them in multiple files. However, it is not a mandatory or enforced convention, and some developers may prefer to use other ways to manage their constants, such as environment variables, custom configuration files, or inline values. Ultimately, the choice of how to structure and use constants in a Next.js project depends on the preferences and needs of the developer and the project.

##### Use images constants as fallback

- Create `/constants/images.ts` at the root of the project.
  
```ts
// An array of default images to use as a fallback
export const defaultImages = [];
```

We can get the default images from Unsplash like this:

1. Open up the project and try to "create new board".
2. When the `FormSelector` component loads, open up the developer tools (in Chrome, developer tools is [F12] key), and switch to Network tab
3. In the filters (e.g., All, Fetch/XHR, Doc, CSS, JS, Font, Img, Media, Manifest), click "All".
4. Then we can see in another pane the "Name", "Status", "Initiator", "Size", "Time" and "Waterfall". We want to find the API request whose "Name" starts with "random?"
5. The API request is a fetch with the name starting with "random?count". Click it and go to the Response tab, and we can see the images in JSON format.
6. Highlight the entire Response object and paste it into `/constants/images.ts`

Now we have a set of default images.

#### Use default images as fallback to image fetch error

Navigate back to `FormSelector` and we can display the `defaultImages` as the initial state of the `images` and also set it during the `catch`.

feat: add defaultImages as fallback to img fetch

- Import defaultImages from /constants/images.ts
- Set images state to defaultImages initially
- Use defaultImages as fallback in case of fetch error

`components\form\FormSelector.tsx`
```tsx
import { defaultImages } from '@/constants/images';

export default function FormSelector({
  id,
  errors,
}: FormSelectorProps) {
  const { pending } = useFormStatus();

  // Define images state variable as an array of objects
  const [images, setImages] = useState<Array<Record<string, any>>>(
    defaultImages
  );

  const [isLoading, setIsLoading] = useState(true);

  const [selectedImageId, setSelectedImageId] = useState(null);

  const selectionCount: number = 9;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const result = await unsplashApi.photos.getRandom({
          collectionIds: ["317099"],
          count: selectionCount,
        });
        
        if (result && result.response) {
          const imageData = (result.response as Array<Record<string, any>>);
          setImages(imageData);
        } else {
          console.error("Failed to fetch images from Unsplash.")
        }

      } catch(error) {
        console.log(error);
        // Use the images constant as fallback in case of fetch error
        setImages(defaultImages);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);
```

#### Adhere to Unsplash API guidelines

According to [Unsplash API guidelines](https://unsplash.com/documentation#hotlinking), we need to hotlink to the original created.

> Unlike most APIs, we require the image URLs returned by the API to be directly used or embedded in your applications (generally referred to as hotlinking).

So let's create a container at the bottom of every image to attribute to hotlink to the creators.

- import `Link` from next/link
- Add target='_blank' to open a new tab
- add styles that indicate a black bar with white text
- the group hover style will allow it to be visible when the parent contain `div` is also hovered over by the user

feat: add hotlink & image attribution

- Import Link component from next/link
- Add Link element with image.links.html as href and target='_blank'
- Style the Link element with CSS classes and hover effects
- Follow the Unsplash API guidelines on hotlinking and attribution

`components\form\FormSelector.tsx`
```tsx
import Link from 'next/link';

export default function FormSelector({
  id,
  errors,
}: FormSelectorProps) {
  // ...
  return (
    <div className='relative'>
      <div className="grid grid-cols-3 gap-2 mb-2">
        {images.map((image) => (
          <div 
            key={image.id}
            onClick={() => {
              // Check if the form is pending and return early if true
              if (pending) {
                return;
              }
              setSelectedImageId(image.id)
            }}
            // Use cn function to apply conditional class names based on the pending state
            className={cn(
              'relative aspect-video bg-muted cursor-pointer group transition hover:opacity-75',
              pending && 'cursor-auto opacity-50 hover:opacity-50'
            )}
          >
            <Image
              src={image.urls.thumb} 
              alt="Image from Unsplash"
              className='object-cover rounded-sm'
              fill
            />
            <Link 
              href={image.links.html}
              target='_blank'
              className='absolute w-full bottom-0 p-1 bg-black/70 text-white text-[10px] truncate hover:underline opacity-0 group-hover:opacity-100'
            >
              {image.user.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
```

By adhering to Unsplash API guidelines, we can later apply for production to increates our rate limits (requests/hour).

#### Display to user the selected image with checkmark overlay

To display to the user that they selected an image, render a checkmark in the middle of the image. We check for the `selectedImageId` and if the current `image.id` are equal then render the overlay. Use `Check` from `lucide-react`.

feat: Display selected image to the user

Add functionality to show the selected image with a checkmark overlay.

```tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';

import { Check, Loader2 } from 'lucide-react';

export default function FormSelector({
  // ...
}: FormSelectorProps) {
  // ...
  return (
    <div className='relative'>
      <div className="grid grid-cols-3 gap-2 mb-2">
        {images.map((image) => (
          <div
            key={image.id}
            onClick={() => {
              if (pending) {
                return;
              }
              setSelectedImageId(image.id)
            }}
            className={cn(
              'relative aspect-video bg-muted cursor-pointer group transition hover:opacity-75',
              pending && 'cursor-auto opacity-50 hover:opacity-50'
            )}
          >
            <Image
              src={image.urls.thumb}
              alt="Image from Unsplash"
              className='object-cover rounded-sm'
              fill
            />
            {selectedImageId === image.id && (
              <div className='absolute flex items-center justify-center h-full w-full inset-y-0 bg-black/30'>
                <Check className='h-4 w-4 text-white' />
              </div>
            )}
            <Link
              href={image.links.html}
              target='_blank'
              className='absolute w-full bottom-0 p-1 bg-black/70 text-white text-[10px] truncate hover:underline opacity-0 group-hover:opacity-100'
            >
              {image.user.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
```

#### Display errors in FormSelector

The reason why we had the `errors` prop was to be able to display some form validation for the `FormInput` when user defines the board title. We want the error message to be right above the input and below the grid of images. We can re-use the `FormErrors` component to display this.

feat: Add FormErrors to display validation errors

```tsx
import FormErrors from '@/components/form/FormErrors';

export default function FormSelector({
  // ...
}: FormSelectorProps) {
  // ...
  return (
    <div className='relative'>
      <div className="grid grid-cols-3 gap-2 mb-2">
        { /* ... */}
      </div>
      <FormErrors 
        id='image'
        errors={errors}
      />
    </div>
  )
}
```

#### Trigger an action when an image is selected in FormSelector

The next goal is to be able to trigger or activate an action when the user selects an image in FormSelector. One way to do this is to use a hidden native HTML `input` element with the `type` set to radio. The `value` however will be in a certain format so that we can parse it for later. How the value is determined is based on the network request when we fetch the images. If we look into the response, or we can check the `/constants/images.ts` we can see an example object:

`constants\images.ts`
```ts
export const defaultImages = [
  {
      "id": "trYGJ2qpwp0",
      "slug": "a-couple-of-boats-floating-on-top-of-a-lake-trYGJ2qpwp0",
      "created_at": "2023-03-23T15:58:09Z",
      "updated_at": "2024-02-26T06:04:04Z",
      "promoted_at": "2023-03-26T07:08:01Z",
      "width": 5981,
      "height": 3987,
      "color": "#c07340",
      "blur_hash": "LeJ=+6}rR+W;^PxFbGfkxZs.s.oe",
      "description": null,
      "alt_description": "a couple of boats floating on top of a lake",
      "breadcrumbs": [],
      "urls": {
          "raw": "...",
          "full": "...",
          "regular": "...",
          "small": "...",
          "thumb": "...",
          "small_s3": "..."
      },
      "links": {
          "self": "...",
          "html": "...",
          "download": "...",
          "download_location": "..."
      },
      "user": {
          "id": "4ajb4CE1HEI",
          "updated_at": "2024-01-31T22:39:33Z",
          "username": "gunderandson",
          "name": "Luna Berry",
          "first_name": "Luna",
          "last_name": "Berry",
```

We can see that an image object has a `urls` property where we can extract an object that contains the urls for certain sized images: `{ raw, full, regular, small, thumb, small_s3 }`. We also have a `user` object that contains their `name`.

The following information we'd like to extract are:

- image.id
- image.urls.thumb
- image.urls.full
- image.links.html
- image.user.name

We will pass this information down to `value` prop of the `input`, delimited by an `|`.

```tsx
value={`${image.id}|${image.urls.thumb}|${image.urls.full}|${image.links.html}|${image.user.name}`}
```

Now for the hidden radio `input` inside thhe `FormSelector`, render this above the `Image`.

feat: Add hidden input for passing image data

Include a hidden input field to store image details (ID, URLs, and photographer name).

```tsx
export default function FormSelector({
  id,
  errors,
}: FormSelectorProps) {
  // ...
 
  return (
    <div className='relative'>
      <div className="grid grid-cols-3 gap-2 mb-2">
        {images.map((image) => (
          <div
            key={image.id}
            onClick={() => {
              if (pending) {
                return;
              }
              setSelectedImageId(image.id)
            }}
            className={cn(
              'relative aspect-video bg-muted cursor-pointer group transition hover:opacity-75',
              pending && 'cursor-auto opacity-50 hover:opacity-50'
            )}
          >
            <input 
              type='radio'
              id={id}
              name={id}
              checked={selectedImageId === image.id}
              disabled={pending}
              className='hidden'
              value={`${image.id}|${image.urls.thumb}|${image.urls.full}|${image.links.html}|${image.user.name}`}
            />

            <Image
              src={image.urls.thumb}
              alt="Image from Unsplash"
              className='object-cover rounded-sm'
              fill
            />
            {selectedImageId === image.id && (
              <div className='absolute flex items-center justify-center h-full w-full inset-y-0 bg-black/30'>
                <Check className='h-4 w-4 text-white' />
              </div>
            )}
            <Link
              href={image.links.html}
              target='_blank'
              className='absolute w-full bottom-0 p-1 bg-black/70 text-white text-[10px] truncate hover:underline opacity-0 group-hover:opacity-100'
            >
              {image.user.name}
            </Link>
          </div>
        ))}
      </div>
      <FormErrors 
        id='image'
        errors={errors}
      />
    </div>
  )
}
```

### Pass image data to server action in FormPopover

Now when the user fills out the form by selecting an image, filling out the board title in the form input then the app has access to the `id` of the image inside of the `FormData`. 

We can extract the image data inside the `onSubmit` handler of the `FormPopover`.

feat: Extract image data from FormData

This commit improves the FormPopover component by extracting the 'title' and 'image' fields from the FormData object. It then uses these fields to execute a server action.

`components\form\FormPopover.tsx`
```tsx
export default function FormPopover({
  children,
  align,
  sideOffset = 0,
  side = 'bottom',
}: FormPopoverProps) {
  const { executeServerAction, fieldErrors } = useServerAction(createBoard, {
    onSuccess: (data) => { 
      console.log({ data });
      toast.success("Board created.")
    },
    onError: (error) => {
      console.log({ error });
      toast.error(error);
    },
  });

  function onSubmit(formData: FormData){
    const title = formData.get('title') as string;
    const image = formData.get('image') as string;

    executeServerAction({ title, image });
  }
```

If we add a log statement inside `onSubmit` and print out the `image` variable we get an object that contains the actual value, with the `id`|`urls.thumb`|`urls.full`|`links.html`|`user.name`. Just as we assigned to `value` of the hidden radio input element from earlier:

```tsx
value={`${image.id}|${image.urls.thumb}|${image.urls.full}|${image.links.html}|${image.user.name}`}
```

The example log statement:

```ts
{image: 'someImageId|https://images.unsplash...|Luna Berry'}
```

We can follow how the execution of this works:

1. In `FormPopover`, assign "image" to `id` prop of `FormSelector`

```tsx
export default function FormPopover({
  // ...
}: FormPopoverProps) {

  return (
    // ...
        <form action={onSubmit} className='space-y-4'>
          <div className='space-y-4'>
            <FormSelector 
              id='image'
              errors={fieldErrors}
            />
```

2. Inside `FormSelector`, we pass the `id` prop data to the `id` and `name` of the hidden `input`

```tsx
export default function FormSelector({
  id,
  errors,
}: FormSelectorProps) {
  // ...
 
  return (
    // ...
            <input 
              type='radio'
              id={id}
              name={id}
              checked={selectedImageId === image.id}
              disabled={pending}
              className='hidden'
              value={`${image.id}|${image.urls.thumb}|${image.urls.full}|${image.links.html}|${image.user.name}`}
            />
```

3. The hidden `input` is a `radio` button which is `checked` when the user clicks an image and sets the `selectedImageId`

## Update Board data model with new fields

Update schema to accept image data

Recall the values we can get from the image data:

```tsx
value={`${image.id}|${image.urls.thumb}|${image.urls.full}|${image.links.html}|${image.user.name}`}
```

We can add the additional [fields](https://www.prisma.io/docs/orm/prisma-schema/data-model/models#defining-fields) to the `Board` model.

Navigate to `schema.prisma` and add `orgId, imageId, imageThumbUrl, imageFullUrl, imageUserName, imageLinkHTML, createdAt, updatedAt`.

feat: Update Board model with new fields

```prisma
model Board {
  id            String    @id @default(uuid())
  orgId         String
  title         String
  imageId       String
  imageThumbUrl String    @db.Text
  imageFullUrl  String    @db.Text
  imageUserName String    @db.Text
  imageLinkHTML String    @db.Text
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}
```

### Reset the development database

- [Reset the development database in prisma](https://www.prisma.io/docs/orm/prisma-migrate/workflows/development-and-production#reset-the-development-database)
  
You can also reset the database yourself to undo manual changes or db push experiments by running:

```sh
npx prisma migrate reset
```

**Warning: migrate reset is a development command and should *never* be used in a production environment.**

This command:

1. Drops the database/schema¹ if possible, or performs a soft reset if the environment does not allow deleting databases/schemas¹
2. Creates a new database/schema¹ with the same name if the database/schema¹ was dropped
3. Applies all migrations
4. Runs seed scripts
¹ For MySQL and MongoDB this refers to the database, for PostgreSQL and SQL Server to the schema, and for SQLite to the database file.

### Generate Prisma Client with prisma schema changes

docs: reset database & regenerate Prisma client

Here is what we want to do:

- Reset the database in development (because we created `Boards` using the old model without the new fields)
  
```sh
npx prisma migrate reset
```

- Push the new schema in the MySQL database

```sh
npx prisma db push
```

- Generate Prisma Client

```sh
npx prisma generate
```

- [Generating Prisma Client](https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/generating-prisma-client)

### Validate image data

feat: Add image property to CreateBoard schema

This commit adds the image property to the CreateBoard object schema, which is used to validate the input for creating a new board. The image property is a string that is required and has no minimum length. The commit also adds custom error messages for the image property, similar to the title property.

`actions\createBoard\createBoardSchema.ts`
```tsx
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
  image: z.string({
    required_error: "Image is required",
    invalid_type_error: "Image is required",
  }),
});
```

#### Process image data in createBoard action

Navigate to `/createBoard/index.ts`, then process the image data and add error checking.

feat: Enhance image handling and error checking

- Extract `orgId` in `auth()` and return an error if missing
- Destructure `image` from `data`
- Split image data by "|" and destructure values into an array
- Return an error if any image field is missing
  
`actions\createBoard\index.ts`
```ts
async function performAction (data: InputType): Promise<ReturnType> {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: 'Unauthorized',
    }
  }

  const { title, image } = data;

  const [
    imageId,
    imageThumbUrl,
    imageFullUrl,
    imageLinkHTML,
    imageUserName,
  ] = image.split("|");

  if (!imageId || !imageThumbUrl || !imageFullUrl 
  || !imageLinkHTML || !imageUserName) {
    return {
      error: 'Failed to create board. A field is missing.'
    };
  }
```

Now create the board in the database with the new fields

feat: createBoard in database w/ new image fields

```ts
async function performAction (data: InputType): Promise<ReturnType> {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: 'Unauthorized',
    }
  }

  const { title, image } = data;

  const [
    imageId,
    imageThumbUrl,
    imageFullUrl,
    imageLinkHTML,
    imageUserName,
  ] = image.split("|");

  if (!imageId || !imageThumbUrl || !imageFullUrl 
  || !imageLinkHTML || !imageUserName) {
    return {
      error: 'Failed to create board. A field is missing.'
    };
  }

  let board;

  // Try to create a new board in the database
  try {
    board = await database.board.create({
      data: {
        title,
        orgId,
        imageId,
        imageThumbUrl,
        imageFullUrl,
        imageUserName,
        imageLinkHTML,
      }
    });
  } catch(error) {
    return {
      error: "Internal error: failed to create in database."
    }
  }
```

Now in order to test the code we can add a log statement right after we create the array containing the data. We will print it out as an object to make it easier to see a missing property.

```ts
  const [
    imageId,
    imageThumbUrl,
    imageFullUrl,
    imageLinkHTML,
    imageUserName,
  ] = image.split("|");

  // Print image data to the console
  console.log({
    imageId,
    imageThumbUrl,
    imageFullUrl,
    imageLinkHTML,
    imageUserName,
  });
```

When we print the data out to the console, we should that none of the properties are undefined.

The toast message should display a successful message of "Board created." which is found in the `FormPopover`.

### Prisma Studio to view data in the database

[Prisma Studio](https://www.prisma.io/docs/orm/tools/prisma-studio)

After successfully creating a new board with the new image fields, we can view our data using the visual editor **Prisma Studio**.

```sh
npx prisma studio
```

Before adding the next feature (to close the FormPopover after successful board creation) we are going to have to dive deep on **Ref**. To skip the ref section, go here: [Close FormPopover](#close-formpopover-after-a-successful-board-creation).

### Ref

- [useRef](https://react.dev/reference/react/useRef)
- [Referencing Values with Refs](https://react.dev/learn/referencing-values-with-refs)

When you want a component to "remember" some information, but you don't want that information to trigger new renders, you can use a ref.

You can access the current value of that ref through the `ref.current` property. This value is intentionally mutable, meaning you can both read and write to it. It's like a secret pocket of your component that React doesn't track. (This is what makes it an **"escape hatch"** from React's one-way data flow).

Like state, refs are retained by React between re-renders. However, setting state re-renders a component. Changing a ref does not!

##### Ref Recap

- Refs are an escape hatch to hold onto values that aren't used for rendering. You won't need them often.
- A ref is a plain JavaScript object with a single property called `current`, which you can read or set.
- You can ask React to give you a ref by calling the useRef Hook.
- Like state, refs let you retain information between re-renders of a component.
- Unlike state, setting the ref's `current` value does not trigger a re-render.
- Don't read or write `ref.current` during rendering. This makes your component hard to predict.

##### Differences between refs and state 

Perhaps you're thinking refs seem less "strict" than state -- you can mutate them instead of always having to use a state setting function, for instance. But in most cases, you'll want to use state. Refs are an "escape hatch" you won't need often. Here's how state and refs compare:

|refs|state|
|----|-----|
|`useRef(initialValue)` returns `{ current: initialValue }`| `useState(initialValue) `returns the current value of a state variable and a state setter function ( `[value, setValue]`) | 
| Doesn't trigger re-render when you change it. | Triggers re-render when you change it. |
| Mutable -- you can modify and update `current`'s value outside of the rendering process. | "Immutable" -- you must use the state setting function to modify state variables to queue a re-render. |
| You shouldn't read (or write) the current value during rendering. | You can read state at any time. However, each render has its own [snapshot](https://react.dev/learn/state-as-a-snapshot) of state which does not change. |

##### Refs and the DOM

You can point a ref to any value. However, the most common use case for a ref is to access a DOM element. For example, this is handy if you want to focus an input programmatically. When you pass a ref to a `ref` attribute in JSX, like `<div ref={myRef}>`, React will put the corresponding DOM element into `myRef.current`. Once the element is removed from the DOM, React will update `myRef.current` to be `null`. You can read more about this in [Manipulating the DOM with Refs](https://react.dev/learn/manipulating-the-dom-with-refs).

##### Best practices for refs

Following these principles will make your components more predictable:

- **Treat refs as an escape hatch**. Refs are useful when you work with external systems or browser APIs. If much of your application logic and data flow relies on refs, you might want to rethink your approach.

- **Don't read or write `ref.current` during rendering**. If some information is needed during rendering, use [state](https://react.dev/learn/state-a-components-memory) instead. Since React doesn't know when `ref.current` changes, even reading it while rendering makes your component's behavior difficult to predict. (The only exception to this is code like `if (!ref.current) ref.current = new Thing()` which only sets the ref once during the first render.)

Limitations of React state don't apply to refs. For example, state acts like a [snapshot for every render](https://react.dev/learn/state-as-a-snapshot) and [doesn't update synchronously](https://react.dev/learn/queueing-a-series-of-state-updates). But when you mutate the current value of a ref, it changes immediately:

```js
ref.current = 5;
console.log(ref.current); // 5
```

This is because the **ref itself is a regular JavaScript object**, and so it behaves like one.

You also don't need to worry about [avoiding mutation](https://react.dev/learn/updating-objects-in-state) when you work with a ref. As long as the object you're mutating isn't used for rendering, React doesn't care what you do with the ref or its contents.

### Close FormPopover after a successful board creation

- QoL in technology means allowing something to be done more intuitively/easier when it is already being done.

An extra QoL change to make is to close the `FormPopover` component automatically after a successful board creation.

To do that we can use the React hook: **useRef**. 

- A **ref** is an object that provides a way to reference a **DOM node** or a **React component instance**.
- It allows you to access and interact with the underlying DOM elements directly.

Now to add the automatic close behavior, we want to close the `FormPopover` within the `onSuccess` callback function. We can add a ref to the `button` on the `PopoverClose`.

feat: automatically close popover on board creation

This commit enhances the user experience by automatically closing the FormPopover upon successful board creation. The following changes have been implemented:

- Import `ElementRef` and `useRef` from React
- Create `closeRef` a ref to the button that will close the `FormPopover`
- Call the `closeRef.current.?click()` in the success callback function
- Assign `closeRef` to the `PopoverClose` component

`components\form\FormPopover.tsx`
```tsx
import React, { ElementRef, useRef } from 'react';

export default function FormPopover({
  //  ...props
}: FormPopoverProps) {
  
  const closeRef = useRef<ElementRef<"button">>(null);

  const { executeServerAction, fieldErrors } = useServerAction(createBoard, {
    onSuccess: (data) => { 
      toast.success("Board created.")
      closeRef.current?.click();
    },
    onError: (error) => {
      console.log({ error });
      toast.error(error);
    },
  });

  return (
    <Popover>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent
        align={align}
        sideOffset={sideOffset}
        side={side}
        className='w-80 pt-3'
      >
        <div className='pb-4 font-medium text-sm text-center text-neutral-600'>
          Create board
        </div>
        <PopoverClose ref={closeRef} asChild>
          <Button
            variant='destructive'
            className='absolute top-2 right-2 h-auto w-auto text-neutral-600'
          >
            <X className='h-4 w-4' />
          </Button>
        </PopoverClose>
```

Now test the new close functionality.

1. Click the `BoardCreationButton`
2. Click an image for the board and fill out the title
3. Click the "Create" button

- A toast notification for successful board creation should appear and the Popover should close shortly after

### Route user to new board page after successful Board creation

Another feature to add to the `FormPopover` is to perform client-side navigation to the board page after successful creation.

feat: Navigate to newly created board page

```tsx
import { useRouter } from 'next/navigation';

export default function FormPopover({
  // ...props
}: FormPopoverProps) {
  const router = useRouter();

  const closeRef = useRef<ElementRef<"button">>(null);

  const { executeServerAction, fieldErrors } = useServerAction(createBoard, {
    onSuccess: (data) => { 
      toast.success("Board created.")
      closeRef.current?.click();
      router.push(`/board/${data.id}`);
    },
```

### Link up `FormPopover` component with create button in `Navbar`

With FormPopover complete let's use it to wrap the create button from the `Navbar`.

feat: Wrap create button with popover in Navbar

`app\(app)\(dashboard)\_components\Navbar.tsx`
```tsx
import FormPopover from '@/components/form/FormPopover';

export const Navbar = () => {
  return (
    <nav className='flex items-center fixed px-4 z-10 top-0 w-full h-14 border-b shadow-sm bg-white'>
      <MobileSidebar />
      <div className='flex items-center gap-x-4'>
        {/* For screens 768px and larger  */}
        <div className='hidden md:flex'>
          <Logo />
        </div>
        <FormPopover align='start' side='bottom' sideOffset={18}>
          <Button
            variant='primary'
            size='sm'
            className='rounded-sm py-1.5 px-2 h-auto'
          >
            <span className='hidden md:block'>Create</span>
            <Plus className='block md:pl-1 h-4 w-4' />
          </Button>
        </FormPopover>
      </div>
```

## BoardList component revisited

Navigate to `BoardList.tsx` and import the `database` from `/lib`. Fetch the boards from the database using `orgId`. Then map out each board as a `Link` which uses `imageThumbUrl` as the background image and has an `href` to the `board.id`.

feat: Fetch & map out boards in BoardList

- Import database from '/lib' which uses either an existing a global Prisma Client instance or a new instance
- Fetch the boards from the database using orgId
- Map out each board as a Link

`components\BoardList.tsx`
```tsx
import React from 'react';
import Link from 'next/link';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { UserRound } from 'lucide-react';

import { database } from '@/lib/database';
import BoardCreationButton from '@/components/BoardCreationButton';
import FormPopover from '@/components/form/FormPopover';

export default async function BoardList() {
  const { orgId } = auth();

  if (!orgId) {
    return redirect('/org-selection');
  }

  const boards = await database.board.findMany({
    where: {
      orgId,
    },
    orderBy: {
      createdAt: 'desc',
    }
  });

  return (
    <div className='space-y-4'>
      {/* User icon header */}
      <div className='flex items-center text-lg text-neutral-700 font-semibold'>
        <UserRound className='h-6 w-6 mr-2' />
        Your boards
      </div>
      {/* Grid of boards */}
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
        {boards.map((board) => (
          <Link
            key={board.id}
            href={`/board/${board.id}`}
            style={{ backgroundImage: `url(${board.imageThumbUrl})` }}
          >
            <p>
              {board.title}
            </p>
          </Link>
        ))}
        <FormPopover side='right' sideOffset={10}>
          <BoardCreationButton />
        </FormPopover>
      </div>

    </div>
  )
}
```

- Inside the `Link` add a void element `div` right before the paragraph, with the styles 'absolute inset-0 bg-black/30 group-hover:bg-black/40 transition'. Then give the `p` a 'relative font-semibold text-white' Finally the `Link` should have the className of 'group relative h-full w-full p-2 aspect-video bg-no-repeat bg-center bg-cover bg-sky-700 rounded-sm overflow-hidden'.

Now when we hover on a board we have a darken effect, clicking on one will redirect to the specific board ID page.

style: Add darken effect to board thumbnails

In the `BoardList` component, each board thumbnail is now displayed with a dark overlay on hover. The background image (`imageThumbUrl`) remains visible, but the overlay enhances readability of the board title.

```tsx
// ...
export default async function BoardList() {
  // ...
  return (
    <div className='space-y-4'>
      {/* User icon header */}
      {/* Grid of boards */}
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
        {boards.map((board) => (
          <Link
            key={board.id}
            href={`/board/${board.id}`}
            className='group relative h-full w-full p-2 aspect-video bg-no-repeat bg-center bg-cover bg-sky-700 rounded-sm overflow-hidden'
            style={{ backgroundImage: `url(${board.imageThumbUrl})` }}
          >
            <div
              className='absolute inset-0 bg-black/30 group-hover:bg-black/40 transition'
            />
            <p className="relative font-semibold text-white">
              {board.title}
            </p>
          </Link>
        ))}
        <FormPopover side='right' sideOffset={10}>
          <BoardCreationButton />
        </FormPopover>
      </div>

    </div>
  )
}
```

### Handle loading state in `BoardList`

feat: Create BoardList skeleton placeholder

This commit adds a skeleton placeholder for the `BoardList` component. The placeholder emulates a grid of boards with approximately 8 individual board placeholders. Each board is represented by a `Skeleton` component.

```tsx
import { Skeleton } from '@/components/ui/skeleton';

export default async function BoardList() {
  // ...
}

BoardList.Skeleton = function BoardListSkeleton() {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
      <Skeleton className='h-full w-full p-2 aspect-video' />
      <Skeleton className='h-full w-full p-2 aspect-video' />
      <Skeleton className='h-full w-full p-2 aspect-video' />
      <Skeleton className='h-full w-full p-2 aspect-video' />
      <Skeleton className='h-full w-full p-2 aspect-video' />
      <Skeleton className='h-full w-full p-2 aspect-video' />
      <Skeleton className='h-full w-full p-2 aspect-video' />
      <Skeleton className='h-full w-full p-2 aspect-video' />
    </div>
  );
}
```

#### Using React Suspense to display a fallback while content is loading

Next we navigate to where the `BoardList` will be rendered (i.e., the org ID page).

And here we will use `Suspense` from React.

- [Suspense](https://react.dev/reference/react/Suspense) lets you display a fallback until its children have finished loading.
- [Loading UI and Streaming | Next.js](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming)

Wrap the `BoardList` in the org ID page with the `BoardList.Skeleton`.

feat: Suspend BoardList in Org ID page

In the `OrganizationIdPage`, the `BoardList` component is now wrapped in a `Suspense` fallback. When loading, it displays a skeleton placeholder to enhance user experience.

`app\(app)\(dashboard)\org\[orgId]\page.tsx`
```tsx
import React, { Suspense } from 'react';

import BoardList from '@/components/BoardList';
import Info from '@/components/Info';
import { Separator } from '@/components/ui/separator';

const OrganizationIdPage = () => {

  return (
    <div className='flex flex-col w-full mb-20'>
      <Info />
      <Separator className='my-4' />
      <div className='px-2 md:px-4'>
        <Suspense fallback={<BoardList.Skeleton />}>
          <BoardList />
        </Suspense>
      </div>
    </div>
  );
};

export default OrganizationIdPage
```

In this example, the `BoardList` component suspends while fetching the list of boards for the organization. Until it's ready to render, React switches the closest Suspense boundary above to show the fallback - the `BoardList.Skeleton` component. Then, when the data loads, React hides the `BoardList.Skeleton` fallback and renders the `BoardList` component with data.

Now when we can test the loading of the `BoardList`,

- Refresh an organization page
- Switch between organizations using the `Sidebar`

We should be able to see the placeholder preview of the content in these situations.

## Dynamic Metadata

- [generateMetadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function)

Dynamic metadata depends on **dynamic information**, such as the current route parameters, external data, or `metadata` in parent segments, can be set by exporting a `generateMetadata` function that returns a [Metadata object](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields).

Recall that our `RootLayout` had this:

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
  description: siteConfig.description,
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

Let's break down the `metadata` object in the `RootLayout` component in Next.js:

1. **`metadata` Object**:
   - This object contains metadata information for the layout.
   - It affects how the page title and description appear in search engine results, browser tabs, and social media previews.

2. **`title` Property**:
   - The `title` property specifies the page title.
   - It has two sub-properties:
     - `default`: Represents the default title (likely the site name).
     - `template`: A template string where `%s` is a placeholder for dynamic content (e.g., specific page titles).

3. **`description` Property**:
   - The `description` property provides a brief description of the page.
   - It may be used by search engines or social media platforms to display additional context about the page.

4. **`siteConfig`**:
   - The `siteConfig` object contains global configuration settings for the site (e.g., site name, description).

In summary, this `metadata` object helps manage page titles and descriptions dynamically based on the site configuration and specific page content. It's essential for SEO and user experience.

### Generate Dynamic Metadata for Organization ID Layout

The goal here is to use the organization name to create the metadata object.

First let's make a function which ensures that the organization name is in a user-friendly [letter-case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).

We will go with "Start case", where the first letter of each word is capitalized.

Here is the function `startCase`:

```ts
/**
 * Takes a string (usually in camel case, snake case, or kebab case) 
 * and returns a new string where each word starts with an uppercase 
 * letter, and words are separated by spaces.
 * @param input the input string to convert to
 * @returns the input string in startCase form
 */
function startCase(input: string): string {
  // Convert the input string to lowercase
  const lowerCaseInput = input.toLowerCase();

  // Split the string into words, using regex
  // (/\s+/ matches one or more whitespace characters)
  const words = lowerCaseInput.split(/\s+/);

  // Capitalize the first letter of each word
  const startCasedWords = words.map((word) => word.charAt(0).
      toUpperCase() + word.slice(1)
  );

  // Join the words back together with spaces
  return startCasedWords.join(' ');
}
```

Now we can use the `generateMetadata` to call return the start case of `orgSlug` (we get from clerk [auth object](https://clerk.com/docs/references/nextjs/auth-object)), which is the current user's active organization slug. Or a fallback "your group" in case there `orgSlug` is falsy.

feat: Generate metadata for OrganizationIdLayout

In the `OrganizationIdLayout` component, metadata is dynamically generated for the page title based on the organization slug. The `startCase` function ensures that the title is in proper case.

`app\(app)\(dashboard)\org\[orgId]\layout.tsx`
```tsx
import React from 'react';
import { auth } from '@clerk/nextjs';

import URLMatcher from './_components/URLMatcher';

function startCase(input: string): string {
  const lowerCaseInput = input.toLowerCase();
  const words = lowerCaseInput.split(/\s+/);
  const startCasedWords = words.map((word) => word.charAt(0).
      toUpperCase() + word.slice(1)
  );

  return startCasedWords.join(' ');
}

export async function generateMetadata() {
  const { orgSlug } = auth();

  return {
    title: startCase(orgSlug || 'your group'),
  }
}

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

Let's follow the execution: `generateMetadata()` returns an object with `title` property. Now back in the `RootLayout` we have the global metadata, where we defined the `template`:

```tsx
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
}
```

When we return a `title` using `generateMetadata` in anywhere else besides the root layout, it passes in the new title and is interpolated in the variable `%s` while appending the `| ${siteConfigName}`. So the output would be: "Organization Name | Visionize".

## Board Page

Create the `BoardIdPage`.

`app\(app)\(dashboard)\board\[boardId]\page.tsx`
```tsx
import React from 'react';

export default function BoardIdPage() {
  return (
    <div>
      BoardIdPage
    </div>
  )
}
```

### BoardIdLayout

Create `BoardIdLayout` which accepts `children` 

`app\(app)\(dashboard)\board\[boardId]\layout.tsx`
```tsx
import React from 'react';

export default function BoardIdLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
    </div>
  )
}
```

Now let's modify the layout a bit, wrap `children` in a `main` tag and move it so it is visible (not hidden behind the navbar). Then also add `params` prop. Get orgId, and fetch board in database.

feat: Retrieve ID & fetch board in BoardIdLayout

This commit introduces the BoardIdLayout component, which retrieves the organization ID (orgId) and fetches a board from the database based on the provided boardId. The component handles redirection to '/org-selection' if orgId is not available.

```tsx
import React from 'react';
import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';

import { database } from '@/lib/database';

export default async function BoardIdLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { boardId: string; }
}) {
  const { orgId } = auth();

  if (!orgId) {
    redirect('/org-selection');
  }

  const board = await database.board.findUnique({
    where: { 
      id: params.boardId,
      orgId,
    },
  });

  return (
    <div>
      <main className='relative h-full pt-28'>
        {children}
      </main>
    </div>
  )
}
```

#### Nextjs `notFound` can gracefully handle 404 errors 

If the there is no `board`, we can use `notFound` from next/navigation to manually trigger a 404.

- [notFound | Nextjs API Reference](https://nextjs.org/docs/app/api-reference/functions/not-found)
- [notFound file](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)

The `notFound` function allows you to render the `not-found file` within a route segment as well as inject a `<meta name="robots" content="noindex" />` tag.

Invoking the `notFound()` function throws a `NEXT_NOT_FOUND` error and terminates rendering of the route segment in which it was thrown. Specifying a `not-found file` allows you to gracefully handle such errors by rendering a Not Found UI within the segment.

- Good to know: `notFound()` does not require you to use `return notFound()` due to using the TypeScript [never](https://www.typescriptlang.org/docs/handbook/2/functions.html#never) type.

Let's invoke `notFound()` when there is no `board` found from the fetch.

feat: Handle board not found error in layout

This commit adds error handling to the BoardIdLayout component. If a board with the specified boardId is not found in the database, the `notFound()` function is invoked. Additionally, redirection to '/org-selection' occurs if orgId is missing.

`app\(app)\(dashboard)\board\[boardId]\layout.tsx`
```tsx
import React from 'react';
import { notFound, redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';

import { database } from '@/lib/database';

export default async function BoardIdLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { boardId: string; }
}) {
  const { orgId } = auth();

  if (!orgId) {
    redirect('/org-selection');
  }

  const board = await database.board.findUnique({
    where: { 
      id: params.boardId,
      orgId,
    },
  });

  if (!board) {
    notFound();
  }

  return (
    <div>
      <main className='relative h-full pt-28'>
        {children}
      </main>
    </div>
  )
}
```

- Create and style the not found page.

In `/app`, create a file named `not-found.tsx`.

feat: Implement custom 404 page (not-found.tsx)

`/app/not-found.tsx`
```tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Not Found - 404!</h1>
      <p className="text-gray-600">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link className="mt-4 text-blue-500 hover:underline" href="/">
        Return Home
      </Link>
    </div>
  );
}
```

#### BoardIdLayout output

Finally use the full `board.imageFullUrl` as the backdrop for every specific Board page.

feat: Set full background image for Board layout

```tsx
export default async function BoardIdLayout(
  // ...
) {
  // ...
  return (
    <div
      className='relative h-full bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: `url(${board.imageFullUrl})` }}
    >
      <main className='relative h-full pt-28'>
        {children}
      </main>
    </div>
  )
}
```

Create dynamic metadata for each individual board.

feat: Implement metadata generation in each board

```tsx
import { database } from '@/lib/database';

export async function generateMetadata({
  params
}: {
  params: { boardId: string; };
}) {
  const { orgId } = auth();

  if (!orgId) {
    return { title: 'Board' };
  }

  const board = await database.board.findUnique({
    where: { 
      id: params.boardId,
      orgId,
    },
  });

  return {
    title: board?.title || 'My Board',
  };
}

export default async function BoardIdLayout({
```

### BoardNavbar component

Create `BoardNavbar` that accepts a `data` prop which is a type of `Board`.

`app\(app)\(dashboard)\board\[boardId]\_components\BoardNavbar.tsx`
```tsx
import React from 'react';
import { Board } from '@prisma/client';

interface BoardNavbarProps {
  data: Board;
}

export default async function BoardNavbar({
  data
}: BoardNavbarProps) {

  return (
    <div>BoardNavbar</div>
  )
}
```

Then import and render it inside the `BoardIdLayout`, right above the `main` tag. Also pass in the `board` to the `data` prop.

feat: import and render BoardNavbar in BoardIdLayout

refactor: Pass board data to BoardNavbar as prop

In BoardIdLayout component, fetch board data and provide it as a prop to BoardNavbar. This change ensures that the necessary data is available for rendering the component.

```tsx
import BoardNavbar from './_components/BoardNavbar';
// ...
export default async function BoardIdLayout(
  // ...
) {
  // ...
  const board = await database.board.findUnique({
    where: { 
      id: params.boardId,
      orgId,
    },
  });

  return (
    <div
      className='relative h-full bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: `url(${board.imageFullUrl})` }}
    >
      <BoardNavbar data={board} />
      <main className='relative h-full pt-28'>
        {children}
      </main>
    </div>
  )
}
```

feat: Add dark overlay to improve contrast

- Introduced an absolute overlay with a semi-transparent black background.
- Enhances readability and visual contrast.

```tsx
import BoardNavbar from './_components/BoardNavbar';
// ...
export default async function BoardIdLayout(
  // ...
) {
  // ...
  return (
    <div
      className='relative h-full bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: `url(${board.imageFullUrl})` }}
    >
      <BoardNavbar data={board} />
      <div className='absolute inset-0 bg-black/20' />
      <main className='relative h-full pt-28'>
        {children}
      </main>
    </div>
  )
}
```

Back to `BoardNavbar`, let's add some styles that give it slightly dark overlay with white text.

style: Enhance visual presentation of BoardNavbar

In the BoardNavbar component, adjust styling for improved visual output. Now displays a fixed, transparent black background with white text for better contrast and readability.

```tsx
export default async function BoardNavbar({
  data
}: BoardNavbarProps) {

  return (
    <div className='flex items-center fixed h-14 w-full top-14 z-[30] bg-black/50 px-6 gap-x-4 text-white'>
      BoardNavbar
    </div>
  )
}
```

#### BoardTitleForm component

The `BoardTitleForm` component will display the title of the board and also allow the user to update the title.

feat: Create BoardTitleForm to render board title

- Mark as client component
- Accept data prop of type Board
- Interpolate the board title inside a Button

`app\(app)\(dashboard)\board\[boardId]\_components\BoardTitleForm.tsx`
```tsx
"use client";

import React from 'react';
import { Board } from '@prisma/client';

import { Button } from '@/components/ui/button';

interface BoardTitleFormProps {
  data: Board;
};

export default function BoardTitleForm({
  data,
}: BoardTitleFormProps) {
  return (
    <Button>
      {data.title}
    </Button>
  )
}
```

feat: Use BoardTitleForm component in BoardNavbar

```tsx
import BoardTitleForm from './BoardTitleForm';

interface BoardNavbarProps {
  data: Board;
}

export default async function BoardNavbar({
  data
}: BoardNavbarProps) {

  return (
    <div>
      <BoardTitleForm data={data} />
    </div>
  )
}
```

feat: Enhance BoardTitleForm to accurately reflect functionality

In the BoardTitleForm component, ensure that the button accurately represents its intended functionality. Styling adjustments have been made to align with the expected behavior.

feat: Add transparent variant to Button component

The new `transparent` variant includes a see-through background with white text. When hovered over, it subtly transitions to a semi-transparent white background, signaling user interactivity.

`components\ui\button.tsx`
```tsx
const buttonVariants = cva(
  // ...
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
        transparent: "bg-transparent text-white hover:bg-white/20",
      },
      // ...
    },
    // ...
  }
)

export interface ButtonProps
  // ...
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
```

style: Add transparent button to signal user action

In the BoardTitleForm component, add a transparent button to display the board title. The button's styling includes auto height, auto width, padding, bold font, and a larger text size. Additionally, it is set to the transparent variant, which provides a subtle white background on hover to indicate user interaction.

```tsx
export default function BoardTitleForm({
  data,
}: BoardTitleFormProps) {
  return (
    <Button
      variant='transparent'
      className='h-auto w-auto p-1 px-2 font-bold text-lg'
    >
      {data.title}
    </Button>
  );
}
```

##### Develop BoardTitleForm

Next, we add a `isEditing` state to the `BoardTitleForm`. Add two functions that disable and enable the editing state. And a check that if `isEditing` is true, return a `form`.

feat: Add isEditing state to BoardTitleForm

This commit introduces the isEditing state to the BoardTitleForm component. The state is used to track whether the user is currently editing the board title. When editing is disabled, the form is displayed, allowing users to modify the title.

The `disableEditing` function sets the isEditing state to `false`, while the `enableEditing` function sets it to `true`.

This change enhances the user experience by providing a dynamic editing feature for board titles.

```tsx
"use client";

import React, { useState } from 'react';

export default function BoardTitleForm({
  data,
}: BoardTitleFormProps) {
  const [isEditing, setIsEditing] = useState(false);

  
  function disableEditing() {
    setIsEditing(false);
  }
  
  function enableEditing() {
    setIsEditing(true);
  }

  if (isEditing) {
    return (
      <form>
      </form>
    )
  }

  return (
    // ...
  );
}
```

Inside the `form` render a `FormInput` component while passing props to `id, defaultValue, onBlur and className`.

feat: Render FormInput component when editing

```tsx
export default function BoardTitleForm({
  data,
}: BoardTitleFormProps) {
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return (
      <form className='flex items-center gap-x-2'>
        <FormInput 
          id='title'
          defaultValue={data.title}
          onBlur={() => {}}
          className=''
        />
      </form>
    )
  }
  // ...
```

style: Enhance visual appearance of FormInput

Refines the styling of the FormInput component within the form. The provided CSS classes ensure a transparent background, appropriate height, font weight, and focus behavior.

```tsx
  if (isEditing) {
    return (
      <form className='flex items-center gap-x-2'>
        <FormInput 
          id='title'
          defaultValue={data.title}
          onBlur={() => {}}
          className='bg-transparent h-7 px-[7px] py-1 border-none text-lg font-bold focus-visible:outline-none focus-visible:ring-transparent'
        />
      </form>
    )
```

##### useRef to reference form and input DOM elements

Create `formRef` and `inputRef`, and assign them to the `form` and `FormInput` elements respectively. This allows direct interaction with the form and input elements.

feat: Add formRef and inputRef in BoardTitleForm

```tsx
import React, { ElementRef, useRef, useState } from 'react';

export default function BoardTitleForm({
  data,
}: BoardTitleFormProps) {
  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);
  // ...

  if (isEditing) {
    return (
      <form ref={formRef} className='flex items-center gap-x-2'>
        <FormInput
          ref={inputRef}
          id='title'
          defaultValue={data.title}
          onBlur={() => {}}
          className='bg-transparent h-7 px-[7px] py-1 border-none text-lg font-bold focus-visible:outline-none focus-visible:ring-transparent'
        />
      </form>
    )
  }
```

We use **refs** to **reference specific DOM elements** within the React component. Here's a breakdown:

1. **`formRef`**:
   - This ref is associated with the `<form>` element.
   - By setting `ref={formRef}` on the `<form>` tag, you create a reference to the actual DOM node representing the form.
   - This allows you to access and manipulate the form directly (e.g., programmatically triggering form submission or focusing on form elements).

2. **`inputRef`**:
   - This ref is associated with the `<FormInput>` component (assuming it's a custom component).
   - By setting `ref={inputRef}` on the `<FormInput>` component, you create a reference to the underlying input element (e.g., an `<input>` or `<textarea>`).
   - This allows you to interact with the input element directly (e.g., programmatically setting its value or focusing on it).

3. **Use Cases**:
   - **Form Validation**: You can use `formRef` to access form properties (e.g., `formRef.current.submit()`) or validate form data.
   - **Input Manipulation**: With `inputRef`, you can focus on the input field (`inputRef.current.focus()`) or retrieve its current value (`inputRef.current.value`).
   - **Custom Logic**: Refs are often used for custom logic, such as handling user interactions or integrating with third-party libraries.

Remember that using refs should be done judiciously, as direct manipulation of the DOM can sometimes lead to less predictable behavior in React applications. However, in cases like form handling or integrating with external libraries, refs can be quite useful! 

With this in place we can work on the feature to enabled editing.

##### Enable editing in BoardTitleForm

Now we can use the `inputRef.current` to invoke `focus()` and `select()` inside the `enableEditing` function. Let's wrap this in a `setTimeout`. Then assign the function to the `onClick` of the `Button`.

feat: Enable editing mode with focus & selection

When invoked, the `enableEditing` function sets the `isEditing` state to `true`. Within a timeout callback:
1. It focuses on the input field, ensuring the cursor is inside for editing (`inputRef.current?.focus()`).
2. It selects the entire input value, making it easy for the user to modify the existing title (`inputRef.current?.select()`).

The function is assigned to the `onClick` prop of the `Button` in the output.

```tsx
export default function BoardTitleForm({
  data,
}: BoardTitleFormProps) {
  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);

  const [isEditing, setIsEditing] = useState(false);
  
  /**
   * Enables editing mode and focus input.
   */
  function enableEditing() {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    })
  }

  return (
    <Button
      onClick={enableEditing}
      variant='transparent'
      className='h-auto w-auto p-1 px-2 font-bold text-lg'
    >
      {data.title}
    </Button>
  );
}
```

Let's break down what `enableEditing` does:

1. When the user triggers an action (such as clicking the button or interacting with a specific UI element), the `enableEditing` function is called.

2. Inside the `enableEditing` function:
   - It sets the `isEditing` state to `true`, indicating that the form is now in edit mode.
   - After setting `isEditing` to `true`, it schedules a **timeout** using `setTimeout`.
   - Within the timeout callback:
     - It focuses on the input field (`inputRef.current?.focus()`), ensuring that the cursor is placed inside the input for immediate editing.
     - It also selects the entire input value (`inputRef.current?.select()`), making it convenient for the user to modify the existing title.

In summary, `enableEditing` prepares the form for user input by setting the `isEditing` state to `true` and focusing on the input field. This allows users to edit the board title effectively.

3.  On Render
   - If `isEditing` is `true` it renders a form with the `<FormInput>` component
   - Otherwise, it rendersa  transparent button displaying the `data.title`

Now when we click on the `BoardTitleForm` on the page, it switches the component from a `Button` that displays the board title to an `input` type which enables editing mode.

##### Add form submission in BoardTitleForm

feat: Allow users to submit title edits in BoardNavbar

This commit enables users to edit and submit board titles directly from the BoardNavbar component. When editing, users can modify the title and trigger the submission process.

Create the `onSubmit` function with parameter `formData` and logs the title. Assign the `onSubmit` function to the `form`'s `action`.

feat: Add form submission handling in board page

This commit introduces the `onSubmit` function, which receives `formData` as a parameter and logs the title. The function is assigned to the `action` attribute of the form. When editing the board title, users can submit the form by pressing the Enter key, triggering the `onSubmit` logic.

```tsx
export default function BoardTitleForm({
  data,
}: BoardTitleFormProps) {
  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);

  const [isEditing, setIsEditing] = useState(false);
  
  function onSubmit(formData: FormData) {
    const title = formData.get('title') as string;
    console.log(`Submitted: ${title}`);
  }

  if (isEditing) {
    return (
      <form action={onSubmit} ref={formRef} className='flex items-center gap-x-2'>
        <FormInput
          ref={inputRef}
          id='title'
          defaultValue={data.title}
          onBlur={() => {}}
          className='bg-transparent h-7 px-[7px] py-1 border-none text-lg font-bold focus-visible:outline-none focus-visible:ring-transparent'
        />
      </form>
    )
  }
  return (
    <Button
      onClick={enableEditing}
      variant='transparent'
      className='h-auto w-auto p-1 px-2 font-bold text-lg'
    >
      {data.title}
    </Button>
  );
}
```

With this implemented the user can click on the `BoardTitleForm`. 

- When clicked this enables editing mode which changes the element from a `Button` to a `form`
- User can update the title of the board
- After a title is finished, user can press the `Enter` key to submit the form.
- The updated title is now displayed

##### BoardTitleForm feature: submit form on blur

feat: Submit the form on blur in BoardTitleForm

- Implement form submission when input loses focus

```tsx
export default function BoardTitleForm({
  data,
}: BoardTitleFormProps) {
  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);

  // ...
  
  function onSubmit(formData: FormData) {
    const title = formData.get('title') as string;
    console.log(`Submitted: ${title}`);
  }

  function onBlur() {
    formRef.current?.requestSubmit();
  }

  if (isEditing) {
    return (
      <form 
        action={onSubmit} 
        ref={formRef} 
        className='flex items-center gap-x-2'
      >
        <FormInput
          ref={inputRef}
          id='title'
          defaultValue={data.title}
          onBlur={onBlur}
          className='bg-transparent h-7 px-[7px] py-1 border-none text-lg font-bold focus-visible:outline-none focus-visible:ring-transparent'
        />
      </form>
    )
  }

  return (
    <Button
      onClick={enableEditing}
      variant='transparent'
      className='h-auto w-auto p-1 px-2 font-bold text-lg'
    >
      {data.title}
    </Button>
  );
}
```

This improves the user experience by saving the title and submitting the form for the user when the input loses focus (e.g., if they click elsewhere after in editing mode).

#### Modify `Input` component for a more fluid experience

style: Modify input for a smoother user experience

- Change focus-visible:ring-offset-2 to focus-visible:ring-offset-0
- Update rounded-md to rounded-sm

## UpdateBoard server action

In `/actions` create a folder `/updateBoard` then create the files:

- updateBoardSchema.ts
- updateBoardTypes.ts
- index.ts

### UpdateBoard schema

Let's define the schema:

It will have to validate two properties:
  - title
  - id

feat: Define UpdateBoard schema validation

`actions\updateBoard\updateBoardSchema.ts`
```ts
import { z } from 'zod';

/**
 * Define the UpdateBoard object schema.
 * 
 */
export const UpdateBoard = z.object({
  title: z.string({
    required_error: "Title is required", 
    invalid_type_error: "Title is required", 
  }).min(3, {
    message: "Must be 3 or more characters long.", 
  }),
  id: z.string(),
});
```

### UpdateBoard types

Similarly to `createBoardTypes.ts`, we do the following:

- Imports:
  - `zod`
  - `Board` from prisma/client
  - `ActionState` from createServerAction
    - `ActionState` is used to encapsulate the state of various actions (e.g., fetching data, submitting forms, etc.). It provides a structured way to handle errors and manage data flow.
    - It has the optional properties: `fieldErrors`, `error` and `data`
  - `UpdateBoard` schema validation rules
-  We use `ActionState` to represent the state of an API request, or in this case a server action where:
  - `InputType` - the request payload
  - `OutputType` - the response data

feat: Add UpdateBoard action schema

This commit introduces the UpdateBoard action schema, which defines the input and output types for server actions related to board updates. The schema is based on Zod validation and includes types for both input data and the resulting board state.

`actions\updateBoard\updateBoardTypes.ts`
```ts
import { z } from 'zod';

// Import Board, the expected output type, from Prisma client
import { Board } from '@prisma/client';

// Encapsulate the state of various actions (e.g., fetching data, submitting forms, etc.)
// Provides a structured way to handlee errors and manage data flow
import { ActionState } from '@/lib/createServerAction';

// Import the UpdateBoard schema (validation rules)
import { UpdateBoard } from './updateBoardSchema';

// Define the input type based on the UpdateBoard schema
export type InputType = z.infer<typeof UpdateBoard>;

// Define the output data type (ActionState) with Board
export type OutputType = ActionState<InputType, Board>;
```

### UpdateBoard action

- "use server"
- import types
- define `performAction` handler with input and output types defined

`actions\updateBoard\index.ts`
```ts
"use server";

import { InputType, OutputType } from "./updateBoardTypes";

async function performAction (data: InputType): Promise<OutputType> {
  // ...
}
```

feat: Implement update board as server action

```ts
"use server";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { createServerAction } from "@/lib/createServerAction";
import { database } from "@/lib/database";

import { UpdateBoard } from "./updateBoardSchema";
import { InputType, OutputType } from "./updateBoardTypes";

// Define an asynchronous function to perform the action
async function performAction (data: InputType): Promise<OutputType> {
  // Extract user and organization IDs from authentication
  const { userId, orgId } = auth();
// Check if user or organization IDs are missing
  if (!userId || !orgId) {
    return {
      error: 'Unauthorized',
    };
  }

  // Extract data properties
  const { title, id } = data;

  let board;

  try {
    // Update the board title in the database
    board = await database.board.update({
      where: {
        id,
        orgId,
      },
      data: {
        title,
      },
    });
  } catch (error) {
    return {
      error: 'Failed to update board.'
    }
  }

  // Revalidate the path for caching purposes
  revalidatePath(`/board/${id}`);

  // Return the updated board
  return {
    data: board
  };
}

// Create a server action using the defined function
export const updateBoard = createServerAction(UpdateBoard, performAction);
```

### Use UpdateBoard action in `BoardTitleForm`

feat: updateBoard with useServerAction hook

```ts
import { useServerAction } from '@/hooks/useServerAction';
import { updateBoard } from '@/actions/updateBoard';
import { toast } from 'sonner';

export default function BoardTitleForm({
  data,
}: BoardTitleFormProps) {

  const { executeServerAction } = useServerAction(updateBoard, {
    onSuccess: (data) => {
      toast.success(`Board "${data.title} updated!`);
      disableEditing();
    }
  });

  const [isEditing, setIsEditing] = useState(false);
  
  function disableEditing() {
    setIsEditing(false);
  }
  
  function onSubmit(formData: FormData) {
    const title = formData.get('title') as string;
    console.log(`Submitted: ${title}`);
    executeServerAction({
      id: data.id,
      title,
    });
  }

  // ...
}
```

## Optimistic State

Let's delve into optimistic updates in React with TypeScript.

**Optimistic updates** are a technique used to enhance user experience by making UI interactions feel more responsive. When an action (such as submitting a form or making an API request) is initiated, the UI is immediately updated with the expected outcome, even before the actual operation completes. This approach gives users the impression of speed and responsiveness.

In the context of React applications, optimistic updates can be achieved using various strategies. One common approach is to **save a data property in state** while an asynchronous action (like a network request) is underway. Here's how it works:

1. **Initial State**:
   - You start with an initial state that represents the data you want to display.
   - This state is typically fetched from an API or set based on user input.

2. **Optimistic State**:
   - When an action (e.g., form submission) triggers an async operation, you create an **optimistic state**.
   - The optimistic state is a copy of the original state, but it can be different during the duration of the async action.
   - You provide a function that takes the current state and an optimistic value (e.g., the user's input) and returns the optimistic state.
   - This optimistic state is used to immediately present the user with the expected result of the action, even though the actual action takes time to complete.

3. **Updating the State**:
   - As the async action progresses (e.g., a network request), you update the optimistic state.
   - Once the action is complete, the actual state is updated with the final result (which may or may not match the optimistic state).

Here's an example of using the `useOptimistic` hook (available in React's Canary and experimental channels) to achieve optimistic updates:

```tsx
import { useOptimistic } from 'react';

function MyComponent() {
  const [data, setData] = useState<MyData>(initialData); // Initial data
  const [message, setMessage] = useState<string>(''); // User input (e.g., form submission)

  // Define an update function for optimistic state
  const updateOptimisticState = (currentState: MyData, optimisticValue: string) => {
    // Merge and return new state with optimistic value
    // For example, update a message field in the data
    return { ...currentState, message: optimisticValue };
  };

  // Use the useOptimistic hook
  const [optimisticData, addOptimistic] = useOptimistic(data, updateOptimisticState);

  // Handle form submission
  const handleSubmit = async () => {
    // Show the optimistic message immediately
    addOptimistic(message);

    // Perform the actual async action (e.g., API request)
    try {
      const response = await api.post('/submit', { message });
      // Update the actual data with the response
      setData(response.data);
    } catch (error) {
      // Handle errors (e.g., show an error message)
    }
  };

  return (
    <div>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
      <p>Optimistic Message: {optimisticData.message}</p>
    </div>
  );
}
```

Remember that optimistic updates involve trade-offs. While they improve perceived performance, they may lead to inconsistencies if the actual action fails or returns different results. Therefore, use them judiciously based on your application's requirements.

For more details, refer to the [official React documentation on useOptimistic](https://react.dev/reference/react/useOptimistic).

### Optimisitic state: save title data property in state

Let's save `data.title` in state so that we can have optimistic updates.

1. First, create the `titleData` state variable. 

In the `useServerAction` success callback function we can set the `titleData` with the newly updated `data.title` from the user. Inside the editing condition we replace the `FormInput` `default` prop to `titleData`. Likewise, in the output we render `titleData`.

refactor: Save title data property in state

To simulate optimistic state, the board title data is stored as a state variable named titleData. When the user edits the board title, the form is submitted which executes the updateBoard server action. On success, the tileData state is set.

```tsx
"use client";

import React, { ElementRef, useRef, useState } from 'react';
import { Board } from '@prisma/client';

import { Button } from '@/components/ui/button';
import FormInput from '@/components/form/FormInput';
import { useServerAction } from '@/hooks/useServerAction';
import { updateBoard } from '@/actions/updateBoard';
import { toast } from 'sonner';

interface BoardTitleFormProps {
  data: Board;
};

export default function BoardTitleForm({
  data,
}: BoardTitleFormProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [titleData, setTitleData] = useState(data.title);

  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);

  const { executeServerAction } = useServerAction(updateBoard, {
    onSuccess: (data) => {
      toast.success(`Board "${data.title} updated!`);
      setTitleData(data.title);
      disableEditing();
    },
    onError: (error) => {
      toast.error(error);
    }
  });

  function disableEditing() {
    setIsEditing(false);
  }
  
  /**
   * Enables editing mode and focus input.
   */
  function enableEditing() {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    })
  }

  function onSubmit(formData: FormData) {
    const title = formData.get('title') as string;
    console.log(`Submitted: ${title}`);
    executeServerAction({
      id: data.id,
      title,
    });
  }

  function onBlur() {
    formRef.current?.requestSubmit();
  }

  if (isEditing) {
    return (
      <form 
        action={onSubmit} 
        ref={formRef} 
        className='flex items-center gap-x-2'
      >
        <FormInput
          ref={inputRef}
          id='title'
          defaultValue={titleData}
          onBlur={onBlur}
          className='bg-transparent h-7 px-[7px] py-1 border-none text-lg font-bold focus-visible:outline-none focus-visible:ring-transparent'
        />
      </form>
    )
  }

  return (
    <Button
      onClick={enableEditing}
      variant='transparent'
      className='h-auto w-auto p-1 px-2 font-bold text-lg'
    >
      {titleData}
    </Button>
  );
}
```

1. Now integrate `useOptimistic` hook to optimistically update the UI

- Define the update function for optimistic state
- useOptimistic hook for the title
- Display the optimistic title

feat: Implement optimistic updates for board title

To enhance user experience, this commit introduces optimistic updates for the board title in the `BoardTitleForm` component. The `titleData` state now reflects the expected outcome of the action (e.g., form submission) even before the actual server response. Upon success or error, the actual title is updated accordingly.

Changes made:
- Added `useOptimistic` hook to manage optimistic state.
- Updated UI immediately with the optimistic title.
- Executed the actual server action (e.g., `updateBoard`) afterward.

```tsx
"use client";

import React, { ElementRef, useOptimistic, useRef, useState } from 'react';
import { Board } from '@prisma/client';

import { Button } from '@/components/ui/button';
import FormInput from '@/components/form/FormInput';
import { useServerAction } from '@/hooks/useServerAction';
import { updateBoard } from '@/actions/updateBoard';
import { toast } from 'sonner';

interface BoardTitleFormProps {
  data: Board;
};

export default function BoardTitleForm({
  data,
}: BoardTitleFormProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [titleData, setTitleData] = useState(data.title);

  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);

  // Define an update function for optimistic state
  const updateOptimisticTitle = (currentState: string, optimisticValue: string) => {
    return optimisticValue; // Simply update with the new title
  };

  // Use the useOptimistic hook
  const [optimisticTitle, setOptimisticTitle] = useOptimistic(titleData, updateOptimisticTitle);

  const { executeServerAction } = useServerAction(updateBoard, {
    onSuccess: (data) => {
      toast.success(`Board "${ data.title } updated!`);
      setTitleData(data.title);
      disableEditing();
    },
    onError: (error) => {
      toast.error(error);
    }
  });

  function disableEditing() {
    setIsEditing(false);
  }

  function enableEditing() {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    })
  }

  function onSubmit(formData: FormData) {
    const title = formData.get('title') as string;

    // Show the optimistic title immediately
    setOptimisticTitle(title);

    executeServerAction({
      id: data.id,
      title,
    });
  }

  function onBlur() {
    formRef.current?.requestSubmit();
  }

  if (isEditing) {
    return (
      <form
        action={onSubmit}
        ref={formRef}
        className='flex items-center gap-x-2'
      >
        <FormInput
          ref={inputRef}
          id='title'
          defaultValue={titleData}
          onBlur={onBlur}
          className='bg-transparent h-7 px-[7px] py-1 border-none text-lg font-bold focus-visible:outline-none focus-visible:ring-transparent'
        />
      </form>
    )
  }

  return (
    <Button
      onClick={enableEditing}
      variant='transparent'
      className='h-auto w-auto p-1 px-2 font-bold text-lg'
    >
      {optimisticTitle} {/* Display the optimistic title */}
    </Button>
  );
}
```

Testing the optimistic UI:

- Edit the board title, press Enter
  - In pending status, the new board title displays optimistically
  - A toast notification displays for the new board title
  - Refresh the page, the updated title remains
- Edit the board title, on blur (click away from the input)
  - UI should display the new title

## BoardOptions

Next action we want to implement is the ability to delete a board. We will do this with a `BoardOptions` component which will be rendered in the `BoardNavbar`.

We can pass in the board ID to this component as a prop.

`app\(app)\(dashboard)\board\[boardId]\_components\BoardOptions.tsx`
```tsx
"use client";

import React from 'react'

interface BoardOptionsProps {
  id: string;
};

export default function BoardOptions({ id }: BoardOptionsProps) {
  return (
    <div>BoardOptions</div>
  )
}
```

feat: Use BoardOptions component in BoardNavbar

`app\(app)\(dashboard)\board\[boardId]\_components\BoardNavbar.tsx`
```tsx
import React from 'react';
import { Board } from '@prisma/client';
import BoardTitleForm from './BoardTitleForm';
import BoardOptions from './BoardOptions';

interface BoardNavbarProps {
  data: Board;
}

export default async function BoardNavbar({
  data
}: BoardNavbarProps) {

  return (
    <div className='flex items-center fixed h-14 w-full top-14 z-[30] bg-black/50 px-6 gap-x-4 text-white'>
      <BoardTitleForm data={data} />
      <div className='ml-auto'>
        <BoardOptions
          id={data.id}
        />
      </div>
    </div>
  )
}
```

### Develop the output of `BoardOptions`

We will make `BoardOptions` use the `Popover` component.

- Return a `Popover` element
- `PopoverTrigger` contains a transparent `Button` with an `MoreHorizontal` icon
- `PopoverContent` with a `div` containing some text
  - `PopoverClose` contains a `Button` with an `X` icon

`app\(app)\(dashboard)\board\[boardId]\_components\BoardOptions.tsx`
```tsx
"use client";

import React from 'react'

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { MoreHorizontal, X } from 'lucide-react';

interface BoardOptionsProps {
  id: string;
};

export default function BoardOptions({ id }: BoardOptionsProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant='transparent'
          className='h-auto w-auto p-2'
        >
          <MoreHorizontal className='h-4 w-4' />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align='start'
        side='bottom'
        className='px-0 pt-3 pb-3'
      >
        <div className='pb-4 text-sm text-center text-neutral-600 font-medium'>
          BoardOptions
        </div>
        <PopoverClose asChild>
          <Button
            variant='ghost'
            className='absolute h-auto w-auto p-2 top-2 right-2 text-neutral-600'
          >
            <X className='h-4 w-4' />
          </Button>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  );
}
```

## Delete Board

feat: Add delete button to list of BoardOptions

```tsx
export default function BoardOptions({ id }: BoardOptionsProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
          {/* ... */}
      </PopoverTrigger>
      <PopoverContent>
          {/* ... */}
        <PopoverClose asChild>
          {/* ... */}
        </PopoverClose>
        {/* Board Options contain each action */}
        <Button
          variant='ghost'
          onClick={() => {}}
          className='justify-start h-auto w-full p-2 px-5 rounded-none font-normal text-sm'
        >
          Delete this board
        </Button>
      </PopoverContent>
    </Popover>
  );
}
```

Next create server action to delete our board.

### DeleteBoard server action

Let's go through the process again to create the type-safe server action.

1. Schema
2. Types
3. Server Action handler

#### DeleteBoard schema

We just need to validate the ID of the board to delete it.

```ts
import { z } from 'zod';

/**
 * Define the DeleteBoard object schema.
 * 
 */
export const DeleteBoard = z.object({
  id: z.string(),
});
```

#### DeleteBoard types

```ts
import { z } from 'zod';

// Import Board, the expected output type, from Prisma client
import { Board } from '@prisma/client';

// Encapsulate the state of various actions (e.g., fetching data, submitting forms, etc.)
// Provides a structured way to handle errors and manage data flow
import { ActionState } from '@/lib/createServerAction';

// Import the DeleteBoard schema (validation rules)
import { DeleteBoard } from './deleteBoardSchema';

// Define the input type based on the DeleteBoard schema
export type InputType = z.infer<typeof DeleteBoard>;

// Define the output data type (ActionState) with Board
export type OutputType = ActionState<InputType, Board>;
```

#### DeleteBoard server action handler

`deleteBoard` is a **handler**. It is a server-side action responsible for handling the deletion of a board. Let's break down its functionality:

1. **Authentication**:
    - The handler first extracts the `userId` and `orgId` using the `auth()` function.
    - If either of these values is missing (i.e., the user is not authenticated), it returns an error response with the message "Unauthorized."

2. **Board Deletion**:
    - Assuming the user is authorized, the handler proceeds to delete a board.
    - It uses the `database.board.delete` method to delete the board based on the provided `id` and `orgId`.
    - If the deletion fails (due to an exception), it returns an error response with the message "Failed to delete board."

3. **Cache Revalidation and Redirection**:
    - After successful deletion, the handler sets a `path` variable (likely related to the organization) and revalidates the cache for that path.
    - Finally, it redirects the user to the specified path.

In summary, `deleteBoard` handles the entire process of deleting a board, including authentication, database operations, and cache management.

feat: Create deleteBoard server action handler

deleteBoard is a server-side action responsible for the deletion of the board. The handler covers:

1. Authentication
2. Board deletion in the database
3. Cache revalidation and redirection to a path after deletion

`actions\deleteBoard\index.ts`
```tsx
"use server";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { createServerAction } from "@/lib/createServerAction";
import { database } from "@/lib/database";

import { DeleteBoard } from "./deleteBoardSchema";
import { InputType, OutputType } from "./deleteBoardTypes";

async function performAction (data: InputType): Promise<OutputType> {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: 'Unauthorized',
    };
  }

  const { id } = data;

  let board;

  try {
    board = await database.board.delete({
      where: {
        id,
        orgId,
      },
    });
  } catch (error) {
    return {
      error: 'Failed to delete board.'
    }
  }

  const path = `/organization/${orgId}`;
  revalidatePath(path);
  redirect(path);
}

export const deleteBoard = createServerAction(DeleteBoard, performAction);
```

### Add delete functionality to BoardOptions

Instantiate the deleteBoard with `useServerAction` hook. 

  - Destructure `{ executeServerAction, isLoading }` from `useServerAction`. 
  - Pass in `deleteBoard` as the first argument and an object with the `onError` callback function as the second argument to `useServerAction`.
  - Create `onDelete` handler that invokes `executeServerAction({ id })`
  - Assign `onDelete` to the `onClick` prop of the `Button`
  - Assign `isLoading` to the `disabled` prop of the `Button`

```tsx
import { toast } from 'sonner';

import { deleteBoard } from '@/actions/deleteBoard';
import { useServerAction } from '@/hooks/useServerAction';

export default function BoardOptions({ id }: BoardOptionsProps) {

  const { 
    executeServerAction, 
    isLoading,
  } = useServerAction(deleteBoard, {
    onError: (error) => {
      toast.error(error);
    }
  });

  function onDelete() {
    executeServerAction({ id });
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        {/* ... */}
      </PopoverTrigger>
      <PopoverContent>
        {/* ... */}
        <Button
          disabled={isLoading}
          onClick={onDelete}
          variant='ghost'
          className='justify-start h-auto w-full p-2 px-5 rounded-none font-normal text-sm'
        >
          Delete this board
        </Button>
      </PopoverContent>
    </Popover>
  );
}
```

## List

### List model

Navigate back to `schema.prisma` and create a `List`.

It will have the fields:
  - id
  - title
  - order (an integer that will define the order where it will be positioned, as the order can change during drag-and-drop)
  - createdAt, updatedAt

Also add a one-to-many relation with a Board. There will be many lists to one board.

- [Relation mode - ORM Prisma schema](https://www.prisma.io/docs/orm/prisma-schema/data-model/relations/relation-mode)

- [Referential actions](https://www.prisma.io/docs/orm/prisma-schema/data-model/relations/referential-actions)
  - When `onDelete: Cascade` is added to `board` field on the `List` model means that deleting the `Board` record will also delete all related `List` records

Also define an index in the database for `boardId` within the `List` model
- [@@index | Prisma](https://www.prisma.io/docs/orm/reference/prisma-schema-reference#index)

feat: Add List model to prisma schema

```prisma
model Board {
  id            String @id @default(uuid())
  orgId         String
  title         String
  imageId       String
  imageThumbUrl String @db.Text
  imageFullUrl  String @db.Text
  imageUserName String @db.Text
  imageLinkHTML String @db.Text
  lists         List[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model List {
  id    String @id @default(uuid())
  title String
  order Int

  boardId String
  board   Board  @relation(fields: [boardId], references: [id], onDelete: Cascade)

  @@index([boardId])
}
```

Notes: 
- `order` field will be used to fetch the lists by which affects the placement within the board
- Will not add `onUpdate: Cascade` in the `List` model in the `@relation` because when the `Board` title updates it should not affect the `List`


### Card model

Let's also add the `Card` model.

fields:
  - id, title, order
  - description (an optional String)
  - createdAt, updatedAt
  
relation: one-to-many with List

feat: Add Card model to prisma schema

```prisma
model List {
  id    String @id @default(uuid())
  title String
  order Int

  boardId String
  board   Board  @relation(fields: [boardId], references: [id], onDelete: Cascade)

  cards Card[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([boardId])
}

model Card {
  id          String  @id @default(uuid())
  title       String
  order       Int
  description String? @db.Text

  listId String
  list   List   @relation(fields: [listId], references: [id], onDelete: Cascade)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([listId])
}
```

#### Push to the database

0. We may need to clear the database, since the Board model now has a relation with List

```sh
npx prisma migrate reset
```

1. Push

```sh
npx prisma db push
```

2. Generate

```sh
npx prisma generate
```

### Modify individual board page

Create prop interface for individual board page that takes in params and props.

```tsx
import React from 'react';

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
};

export default async function BoardIdPage({
  params
}: BoardIdPageProps) {


  return (
    <div>
      BoardIdPage
    </div>
  )
}
```

Next handle authentication. Check for `orgId` and redirect to `org-selection` if it does not exist.

feat: Implement board authentication using orgId

```tsx
import React from 'react';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
};

export default async function BoardIdPage({
  params
}: BoardIdPageProps) {
  const { orgId } = auth();

  if (!orgId) {
    return redirect('/org-selection');
  }

  return (
    <div>
      BoardIdPage
    </div>
  )
}
```

then we fetch the lists in the board from the database.
 
- Fetch, in ascending order, the lists by the individual board ID
- Also check if the related board that list is created in also has matching `orgId` of the current user
- Include cards in ascending order

feat: Fetch lists for individual board pages

```tsx
import { database } from '@/lib/database';

export default async function BoardIdPage({
  params
}: BoardIdPageProps) {
  const { orgId } = auth();

  if (!orgId) {
    return redirect('/org-selection');
  }

  // Retrieve lists for the individual board ID in ascending order.
  // Additionally, verify that the related board associated with each list
  // has a matching orgId for the current user.
  // Include cards within each list, also sorted in ascending order.
  const lists = await database.list.findMany({
    where: {
      boardId: params.boardId,
      board: {
        orgId,
      },
    },
    include: {
      cards: {
        orderBy: {
          order: 'asc',
        },
      },
    },
    orderBy: {
      order: 'asc',
    }
  });

  return (
    <div>
      BoardIdPage
    </div>
  )
}
```

#### ListContainer component

Create a `ListContainer` component in `/components/list` folder.

- It will have a prop interface for `boardId` a string, and `data` a `List` array.

feat: Define prop types for ListContainer

`components\list\ListContainer.tsx`
```tsx
import React from 'react';

import { List } from '@prisma/client';

interface ListContainerProps {
  boardId: string;
  data: List[];
}

export default function ListContainer({
  boardId,
  data,
}: ListContainerProps) {
  return (
    <div>ListContainer</div>
  )
}
```

Then pass the props to ListContainer within BoardIdPage.

feat: Use ListContainer component in BoardIdPage

```tsx
import ListContainer from '@/components/list/ListContainer';

export default async function BoardIdPage({
  params
}: BoardIdPageProps) {
  // ...
  return (
    <div className='h-full p-4 overflow-x-auto'>
      <ListContainer 
        boardId={params.boardId}
        data={lists}
      />
    </div>
  )
}
```

refactor: Centralize ListContainer in components/list

- Enhance modularity and reusability by consolidating all List components in a single folder.
- Ensure consistent naming conventions, styling, and functionality by grouping related components.
- Simplify maintenance, improve scalability, and facilitate testing and debugging.

### Types for List

When organizing your **Next.js** project, structuring the **types** folder is essential for maintainability and readability. Let's explore some best practices:

1. **One File for All Types**:
   - **Advantages**:
     - **Simplicity**: Having a single file (e.g., `types.ts`) with all your types and interfaces keeps things straightforward.
     - **Easy Access**: Developers can quickly find and reference types from a central location.
   - **Disadvantages**:
     - **Clutter**: As your project grows, this file might become unwieldy, especially if you have many types.
     - **Potential Conflicts**: If multiple developers work on the same file, conflicts may arise during merges.
   - **Example**:
     - Create a `types.ts` file at the root of your project and define all your types and interfaces there².

2. **One File per Type or Group of Related Types**:
   - **Advantages**:
     - **Modularity**: Each type has its own file, making it easier to manage and locate specific definitions.
     - **Scalability**: As your project expands, you can add new type files without affecting existing ones.
   - **Disadvantages**:
     - **Initial Complexity**: Setting up separate files requires more upfront organization.
   - **Example**:
     - Create individual files for different types or groups of related types (e.g., `user.ts`, `product.ts`, etc.) within the `types/` folder⁴.

3. **Hybrid Approach**:
   - Combine both methods:
     - Use a central `types.ts` file for common types shared across the entire project.
     - Create separate files for specific types or modules (e.g., `user.ts`, `product.ts`) when needed.
   - This approach strikes a balance between simplicity and modularity.

Remember that there's no one-size-fits-all solution. Choose an approach that aligns with your project's size, complexity, and team preferences. Consistency and clear documentation are key to maintaining a well-organized codebase.

We will go with the **Hybrid Approach**.

In `/types` create a file named `types.ts`, a central file that contains reusable common types shared across the entire project.

In `ListContainer` we define the type for the `data` in the interface. 

```tsx
interface ListContainerProps {
  boardId: string;
  data: List[];
}
```

`List[]` is not the accurate type for the data, when we fetched the `lists` in BoardIdPage, hover over it in VSCode:

```tsx
  const lists = await database.list.findMany({
```

we see that `lists` is a specific type:

- A List with cards

We also need to define the `Card` type
- Card with List

feat: Add reusable types for List and Card

`types\types.ts`
```ts
import { Card, List } from '@prisma/client';

export type ListWithCards = List & {
  cards: Card[]
};

export type CardWithList = Card & {
  list: List
};
```

Now use the `ListWithCards` type for `ListContainer`:

refactor: Use ListWithCards type in ListContainer

```tsx
import { ListWithCards } from '@/types/types';

interface ListContainerProps {
  boardId: string;
  data: ListWithCards[];
}
```

### ListForm

Create `ListForm` component inside `/components/list`.

```tsx
"use client";

import React from 'react';

export default function ListForm() {
  return (
    <div>ListForm</div>
  )
}
```

In `ListContainer`, render a `<ol>` that contains a `ListForm` and a `div`.

```tsx
import ListForm from '@/components/list/ListForm';

export default function ListContainer({
  boardId,
  data,
}: ListContainerProps) {
  return (
    <ol>
      <ListForm />
      <div>ListContainer</div>
    </ol>
  )
}
```

#### ListWrapper

Let's also create a reusable component `ListWrapper` in `components/list`.

It will have the prop for `children` and render it inside a `li` element.

feat: Define prop types for ListWrapper

`components\list\ListWrapper.tsx`
```tsx
import React from 'react';

interface ListWrapperProps {
  children: React.ReactNode;
};

export default function ListWrapper({
  children
}: ListWrapperProps) {
  return (
    <li>
      {children}
    </li>
  )
}
```

Now back to the `ListForm`, it should return a `ListWrapper` that contains a `button` element with a `Plus` icon and "Add list" text as children.

feat: Render a ListWrapper, button and plus icon

```tsx
"use client";

import React from 'react';
import { Plus } from 'lucide-react';

import ListWrapper from './ListWrapper';

export default function ListForm() {
  return (
    <ListWrapper>
      <button>
        <Plus />
        Add list
      </button>
    </ListWrapper>
  )
}
```

##### Styling the List components

feat: Add styles for list components

style: Enhance visual appearance of ListForm

```tsx
export default function ListForm() {
  return (
    <ListWrapper>
      <button
        className='flex items-center w-full rounded-md p-3 font-medium text-sm bg-white/80 hover:bg-white/50 transition'
      >
        <Plus className='h-4 w-4 mr-2'/>
        Add list
      </button>
    </ListWrapper>
  )
}
```

style: Prevent shrink and text selection on li

The styles added ensures that the list item won't shrink, has a fixed width, and prevents text selection.

```tsx
export default function ListWrapper({
  children
}: ListWrapperProps) {
  return (
    <li className='shrink-0 h-full w-72 select-none'>
      {children}
    </li>
  )
}
```

For the `ListContainer`, we can have a `div` at the end which represents the empty space at the end of the x-axis. When scrolling through the list that contains items, we will have a generic container element `div` that prevents itself from shrinking when there's limited space (`flex-shrink-0`) and has a fixed width of 1 (0.25rem or 4px in TailwindCSS).

This provides extra padding at the bottom when the [overflow-x](https://tailwindcss.com/docs/overflow) activates, when the normal behavior will have it flushed at the end of the screen.

style: Add extra padding for x-axis overflow

```tsx
export default function ListContainer({
  boardId,
  data,
}: ListContainerProps) {
  return (
    <ol>
      <ListForm />
      <div className='flex-shrink-0 w-1' />
    </ol>
  )
}
```

#### ListForm development

Similar to `BoardTitleForm`, the `ListForm` will have 
-`isEditing` state
- `enableEditing` and `disableEditing` function handlers
-`formRef` and `inputRef`

feat: Enable editing mode for ListForm component

```tsx
"use client";

import React, { ElementRef, useRef, useState } from 'react';
import { Plus } from 'lucide-react';

import ListWrapper from './ListWrapper';

export default function ListForm() {
  const [isEditing, setIsEditing] = useState(false);

  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);

  function disableEditing() {
    setIsEditing(false);
  }

  /**
   * Enables editing mode and focus input.
   */
  function enableEditing() {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    })
  }

  return (
    <ListWrapper>
      <button
        className='flex items-center w-full rounded-md p-3 font-medium text-sm bg-white/80 hover:bg-white/50 transition'
      >
        <Plus className='h-4 w-4 mr-2' />
        Add list
      </button>
    </ListWrapper>
  )
}
```

feat: Allow user to disable editing with Escape key

```tsx
  /**
   * When user clicks "Escape" key, it disables editing mode.
   * @param event the key press event
   */
  function handleEscapeKey(event: KeyboardEvent) {
    if (event.key === "Escape") {
      disableEditing();
    }
  }
```

feat: Handle escape key events and outside click
docs: Add comments to event and click handlers

Now we need to add the event listener to listen for the key event on the entire document (window level). When the user presses a key, the `handleEscapeKey` function is called, allowing us to respond to the "Escape" key press globally.

- [useEventListener hook](https://usehooks-ts.com/react-hook/use-event-listener)

```tsx
  /**
   * When user clicks "Escape" key, it disables editing mode.
   * @param event the key press event
   */
  function handleEscapeKey(event: KeyboardEvent) {
    if (event.key === "Escape") {
      disableEditing();
    }
  }

  // Custom hook that attaches event listeners to DOM elements, the window, or media query lists.
  // Listen for the 'keydown' event on the entire document (window level)
  useEventListener('keydown', handleEscapeKey);
```

Next also disable editing when the user clicks outside the form.

- [useOnClickOutside hook](https://usehooks-ts.com/react-hook/use-on-click-outside)

```tsx
  const formRef = useRef<ElementRef<"form">>(null);

  function disableEditing() {
    setIsEditing(false);
  }

  // Custom hook that handles clicks outside a specified element.
  // Disable editing when user clicks outside the form
  useOnClickOutside(formRef, disableEditing);
```

#### ListForm editing mode

When `isEditing` is true, the `ListForm` component returns a different JSX element which contains a `form` wrapped by `ListWrapper`. Inside is the `FormInput` component, which has the `id` prop set to 'title'.

feat: Render FormInput for ListForm in editing mode

```tsx
"use client";

import React, { ElementRef, useRef, useState } from 'react';
import { Plus } from 'lucide-react';
import { useEventListener, useOnClickOutside } from 'usehooks-ts';

import ListWrapper from './ListWrapper';
import FormInput from '@/components/form/FormInput';

export default function ListForm() {
  const [isEditing, setIsEditing] = useState(false);

  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);

  function disableEditing() {
    setIsEditing(false);
  }

  /**
   * Enables editing mode and focus input.
   */
  function enableEditing() {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    })
  }

  /**
   * When user clicks "Escape" key, it disables editing mode.
   * @param event the key press event
   */
  function handleEscapeKey(event: KeyboardEvent) {
    if (event.key === "Escape") {
      disableEditing();
    }
  }

  // Custom hook that attaches event listeners to DOM elements, the window, or media query lists.
  // Listen for the 'keydown' event on the entire document (window level)
  useEventListener('keydown', handleEscapeKey);

  // Custom hook that handles clicks outside a specified element.
  // Disable editing when user clicks outside the form
  useOnClickOutside(formRef, disableEditing);

  /* Editing mode */
  if (isEditing) {
    return (
      <ListWrapper>
        <form
          ref={formRef}
          className='w-full p-3 space-y-4 rounded-md bg-white shadow-md'
        >
          <FormInput 
            ref={inputRef}
            id='title'
            placeholder='Edit list title...'
            className='px-2 py-1 h-7 font-medium text-sm border-transparent focus:border-input hover:border-input transition'
          />
        </form>
      </ListWrapper>
    )
  }

  return (
    <ListWrapper>
      <button
        onClick={enableEditing}
        className='flex items-center w-full rounded-md p-3 font-medium text-sm bg-white/80 hover:bg-white/50 transition'
      >
        <Plus className='h-4 w-4 mr-2' />
        Add list
      </button>
    </ListWrapper>
  )
}
```

style: Make transition seamless for FormInput

This commit ensures a seamless transition for ListForm's editing form, enhancing the user experience. When the user clicks on the ListForm button, it enables editing mode and renders a FormInput. The FormInput component maintains consistent spacing, font weight, and border behavior. The input field's border will exhibit different behaviors based on its normal state, hover state, focus state, and transitions.

```tsx
          <FormInput 
            ref={inputRef}
            id='title'
            placeholder='Edit list title...'
            className='px-2 py-1 h-7 font-medium text-sm border-transparent focus:border-input hover:border-input transition'
          />
```

Test:

- User clicks on ListForm button to enter editing mode
- Editing mode returns a FormInput where user can update the list title
- User can press Escape key to exit editing mode
- User can click outside the form to exit editing mode

##### Storing board ID in ListForm editing mode

There are two approaches to storing the board ID.

1. Fetch the board ID in the submit handler
2. Extract board ID in params and store it inside an `input` element
   - The benefit of this approach allows us to work purely with `FormData`

Let's store the `boardId` in a hidden `input` element during editing mode.

feat: Store boardId in hidden input on list edit

```tsx
import { useParams } from 'next/navigation';

export default function ListForm() {
  const params = useParams();

  /* Editing mode */
  if (isEditing) {
    return (
      <ListWrapper>
        <form
          ref={formRef}
          className='w-full p-3 space-y-4 rounded-md bg-white shadow-md'
        >
          <FormInput 
            ref={inputRef}
            id='title'
            placeholder='Edit list title...'
            className='px-2 py-1 h-7 font-medium text-sm border-transparent focus:border-input hover:border-input transition'
          />
          {/* Hidden input that stores Board ID */}
          <input 
            hidden
            name='boardId'
            value={params.boardId}
          />

        </form>
      </ListWrapper>
    )
  }
```

##### Submit and Exit buttons in editing mode

Next let's render a `FormSubmitButton` and a `Button` with an `X` icon to disabled editing.

feat: Add submit and exit buttons during editing

```tsx
import { Plus, X } from 'lucide-react';

import FormSubmitButton from '@/components/form/FormSubmitButton';
import { Button } from '@/components/ui/button';

export default function ListForm() {

  if (isEditing) {
    return (
      <ListWrapper>
        <form
          ref={formRef}
          className='w-full p-3 space-y-4 rounded-md bg-white shadow-md'
        >
          <FormInput 
            ref={inputRef}
            id='title'
            placeholder='Edit list title...'
            className='px-2 py-1 h-7 font-medium text-sm border-transparent focus:border-input hover:border-input transition'
          />
          {/* Hidden input that stores Board ID */}
          <input 
            hidden
            name='boardId'
            value={params.boardId}
          />
          {/* Submit and Exit buttons */}
          <div className='flex items-center gap-x-1'>
            <FormSubmitButton>
              Add list
            </FormSubmitButton>
            <Button
              onClick={disableEditing}
              size='sm'
              variant='ghost'
            >
              <X className='h-5 w-5' />
            </Button>
          </div>
        </form>
      </ListWrapper>
    )
  }
```

## CreateList server action

Make `createList` folder inside `/actions` and add the following:

1. Schema
2. Types
3. Server Action handler

### createList schema

We expect the user to input a `title` and we also expect a `boardId` (which we extract from the params and store in the hidden input). We can change the minimum to 1 character as we should allow the user to make lists with one character names.

`actions\createList\createListSchema.ts`
```ts
import { z } from 'zod';

/**
 * Define the CreateList object schema.
 * 
 */
export const CreateList = z.object({
  title: z.string({
    required_error: "Title is required", 
    invalid_type_error: "Title is required", 
  }).min(1, {
    message: "Must be 1 or more characters long.", 
  }),
  boardId: z.string(),
});
```

### createList types

Similarly, create the types we expect to have for the createList server action.

feat: Define types for createList server action

`actions\createList\createListTypes.ts`
```ts
import { z } from 'zod';

// Import Board, the expected output type, from Prisma client
import { Board } from '@prisma/client';

// Encapsulate the state of various actions (e.g., fetching data, submitting forms, etc.)
// Provides a structured way to handle errors and manage data flow
import { ActionState } from '@/lib/createServerAction';

// Import the CreateList schema (validation rules)
import { CreateList } from './createListSchema';

// Define the input type based on the CreateList schema
export type InputType = z.infer<typeof CreateList>;

// Define the output data type (ActionState) with Board
export type OutputType = ActionState<InputType, Board>;
```

### createList server action

To create a list we will authenticate, then extract title and boardId data, then open up a try..catch block. Inside the try block we want to fetch the board where we want to create the list, fetch the most recent list created in the database and calculate the order number. Create the list in the database with the new order assigned. Revalidate the board id page, and return the data of newly created list.

feat: Implement createList action with order sequencing

```tsx
"use server";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { createServerAction } from "@/lib/createServerAction";
import { database } from "@/lib/database";

import { CreateList } from "./createListSchema";
import { InputType, OutputType } from "./createListTypes";

async function performAction(data: InputType): Promise<OutputType> {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: "Unauthorized",
    };
  }

  const { title, boardId } = data;

  let list;

  try {
    // Fetch the board
    const board = await database.board.findUnique({
      where: {
        id: boardId,
        orgId,
      },
    });

    if (!board) {
      return {
        error: "Board not found",
      };
    }

    // Fetch the most recent list in the board to properly assign the newest order to the list
    const mostRecentList = await database.list.findFirst({
      where: { boardId: boardId },
      orderBy: { order: "desc" },
      select: { order: true },
    });

    // Get the next order depending on whether a mostRecentList is present or not
    const nextOrder = mostRecentList ? mostRecentList.order + 1 : 1;

    // Create the list in the database
    list = await database.list.create({
      data: {
        title,
        boardId,
        order: nextOrder,
      },
    });
  } catch (error) {
    return {
      error: "Failed to create list.",
    };
  }

  revalidatePath(`/board/${boardId}`);

  // Return the list
  return {
    data: list,
  };
}

export const createList = createServerAction(CreateList, performAction);
```

#### Issue: modify output type to match the data we expect

When we return the `{ data: list }`, we get an error when we hover over it in VSCode.

```sh
Type '{ id: string; title: string; order: number; boardId: string; createdAt: Date; updatedAt: Date; }' is missing the following properties from type '{ id: string; orgId: string; title: string; imageId: string; imageThumbUrl: string; imageFullUrl: string; imageUserName: string; imageLinkHTML: string; createdAt: Date; updatedAt: Date; }': orgId, imageId, imageThumbUrl, imageFullUrl, and 2 more.ts(2740)
createServerAction.ts(13, 3): The expected type comes from property 'data' which is declared here on type 'OutputType'

(property) data?: {
    id: string;
    orgId: string;
    title: string;
    imageId: string;
    imageThumbUrl: string;
    imageFullUrl: string;
    imageUserName: string;
    imageLinkHTML: string;
    createdAt: Date;
    updatedAt: Date;
} | undefined
```

We just need to update the types in `createListTypes` to use `List` instead of `Board`.

fix: createList to return correct data type

Changed the output data type of the createList action from Board to List to match the expected data structure.

`actions\createList\createListTypes.ts`
```ts
import { z } from 'zod';

// Import List, the expected output type, from Prisma client
import { List } from '@prisma/client';

// Encapsulate the state of various actions (e.g., fetching data, submitting forms, etc.)
// Provides a structured way to handle errors and manage data flow
import { ActionState } from '@/lib/createServerAction';

// Import the CreateList schema (validation rules)
import { CreateList } from './createListSchema';

// Define the input type based on the CreateList schema
export type InputType = z.infer<typeof CreateList>;

// Define the output data type (ActionState) with List
export type OutputType = ActionState<InputType, List>;
```

Ensure createList returns List type as per schema

This update modifies the createList function to correctly return an instance of the List type, aligning with the defined schema and resolving type inconsistencies.

### Implement createList server action

Let's import what we need and implement the createList server action in `ListForm`.

feat: Add createList server action to ListForm

Implemented a new server action, createList, in the ListForm component to handle list creation with success toast notification.

`components\list\ListForm.tsx`
```tsx
import { toast } from 'sonner';
import { createList } from '@/actions/createList';
import { useServerAction } from '@/hooks/useServerAction';

export default function ListForm() {

  const { executeServerAction, fieldErrors } = useServerAction(createList, {
    onSuccess: (data) => {
      toast.success(`List "${data.title}" created`);
      disableEditing();
    }
  });

}
```

Let's also add router to refresh the page in order to refresh all of the server components in `onSuccess` callback.

feat: Integrate useRouter for state refresh in ListForm

Enhanced the ListForm component with useRouter hook to enable state refresh after successful list creation, ensuring up-to-date server component data.

```ts
import { useParams, useRouter } from 'next/navigation';

export default function ListForm() {

  const router = useRouter();

  const { executeServerAction, fieldErrors } = useServerAction(createList, {
    onSuccess: (data) => {
      toast.success(`List "${data.title}" created`);
      disableEditing();
      // Refresh the router to refetch all the server components
      router.refresh();
    }
  });

}
```

### Develop the ListForm component

Let's also add the error handling for the callback function

Feat: Implement error handling for list creation

Added robust error handling to the ListForm component to display toast notifications and log errors during list creation failures.

```tsx
  const { executeServerAction, fieldErrors } = useServerAction(createList, {
    onSuccess: (data) => {
      toast.success(`List "${data.title}" created`);
      disableEditing();
      // Refresh the router to refetch all the server components
      router.refresh();
    },
    onError: (error) => {
      toast.error(error);
      console.log(error);
    },
  });
```

Now implement the submit handler, create the list with form data, and assign the submit function to the `action` prop of the form.

- The `action` prop is used in plain HTML to specify the URL where the form data is sent when submitted

feat: Implement onSubmit handler for list creation

Implemented an onSubmit handler in the ListForm component to process form data and trigger list creation with server action integration. 

```tsx
  function onSubmit(formData: FormData) {
    // Extract title of the list from FormInput
    const title = formData.get('title') as string;

    // Extract boardId found in the hidden input
    const boardId = formData.get('boardId') as string;

    // Create the list with the given form data
    executeServerAction({
      title,
      boardId,
    });
  }

  /* Editing mode */
  if (isEditing) {
    return (
      <ListWrapper>
        <form
          action={onSubmit}
          ref={formRef}
          className='w-full p-3 space-y-4 rounded-md bg-white shadow-md'
        >
```

feat: Integrate field error display in ListForm's FormInput

Enhanced the FormInput component within ListForm to display validation errors, improving user feedback on form submission.

```tsx
<FormInput 
  ref={inputRef}
  errors={fieldErrors}
  id='title'
  placeholder='Edit list title...'
  className='px-2 py-1 h-7 font-medium text-sm border-transparent focus:border-input hover:border-input transition'
/>
```

## Develop the ListContainer

With the functionality to create the list in place, we now should develop a way to display the lists. 

We fetch the list data from the database in individual board ID page. There we render a `ListContainer`.

Let's create a state variable `orderedListData` to have a local optimistic mutation for the order of the list. Optimistic updates improves the user experience, especially for the drag-and-drop feature of our lists.

Implement ListContainer with ordered list display

Next, map out the `orderListData` to a `div` that contains the list information.

feat: Add ordered list display to ListContainer

```tsx
"use client";

import React, { useState } from 'react';

import { ListWithCards } from '@/types/types';
import ListForm from '@/components/list/ListForm';

interface ListContainerProps {
  boardId: string;
  data: ListWithCards[];
}

export default function ListContainer({
  boardId,
  data,
}: ListContainerProps) {
  const [orderedListData, setOrderedListData] = useState(data);

  return (
    <ol>
      {
        orderedListData.map((list, index) => {
          return (
            <div
              key={list.id}
            >
              {list.id}
            </div>
          )
        })
      }
      <ListForm />
      <div className='flex-shrink-0 w-1' />
    </ol>
  )
}
```

### Display list data

Instead of a `div` let's map out a `ListItem` component, which accepts the props `{ key, index, data }`.

feat: Integrate ListItem for dynamic list rendering

```tsx
import ListItem from '@/components/list/ListItem';

export default function ListContainer({
  boardId,
  data,
}: ListContainerProps) {
  const [orderedListData, setOrderedListData] = useState(data);

  return (
    <ol>
      {
        orderedListData.map((list, index) => {
          return (
            <ListItem
              key={list.id}
              index={index}
              data={list}
            />
          )
        })
      }
      <ListForm />
      <div className='flex-shrink-0 w-1' />
    </ol>
  )
}
```

style: Apply flex layout and horizontal spacing to list elements

```tsx
export default function ListContainer({
  boardId,
  data,
}: ListContainerProps) {
  const [orderedListData, setOrderedListData] = useState(data);

  return (
    <ol className='flex h-full gap-x-3'>
      {
        orderedListData.map((list, index) => {
          return (
            <ListItem
              key={list.id}
              index={index}
              data={list}
            />
          )
        })
      }
      <ListForm />
      <div className='flex-shrink-0 w-1' />
    </ol>
  )
}
```

#### ListItem

Let's create the `ListItem` component with the prop interface that contains `data` and `index`.

feat: Define prop types for ListItem component

`components\list\ListItem.tsx`
```tsx
"use client";

import React from 'react';

import { ListWithCards } from '@/types/types';

interface ListItemProps{
  data: ListWithCards;
  index: number;
}

export default function ListItem({
  data,
  index,
}: ListItemProps) {
  return (
    <div>ListItem</div>
  )
}
```

##### ListHeader

Before working on the output of `ListItem`, let's create a quick `ListHeader` component.

feat: Define prop types for ListHeader component

`components\list\ListHeader.tsx`
```tsx
"use client";

import React from 'react'

import { List } from '@prisma/client';

interface ListHeaderProps {
  data: List;
}

export default function ListHeader({
  data,
}: ListHeaderProps) {
  return (
    <div>{data.title}</div>
  )
}
```

style: Enhance ListHeader layout & style

- Refine layout with padding, font adjustments, and flexbox alignment.

Enhanced the ListHeader component's visual appeal and user experience with refined padding, font adjustments for improved readability, and flexbox alignment for a cleaner layout.

```tsx
export default function ListHeader({
  data,
}: ListHeaderProps) {
  return (
    <div className='flex pt-2 px-2 text-sm font-semibold justify-between items-start gap-x-2'>
      <div className='h-7 w-full px-2.5 py-1 text-sm font-medium border-transparent'>
        {data.title}
      </div>
    </div>
  )
}
```

For `ListItem`, render a `li` > `div` > `ListHeader`.

feat: Add ListHeader rendering within li element

style: Enhance visual appearance of ListItem

- Increase width for better content fit
- Adjust padding for improved spacing
- Enhance background color for higher contrast

```tsx
export default function ListItem({
  data,
  index,
}: ListItemProps) {
  return (
    <li className='h-full w-72 shrink-0 select-none'>
      <div className='w-full rounded-md bg-[#f1f2f4] shadow-md pb-2'>
        <ListHeader />
      </div>
    </li>
  )
}
```

feat(ListItem): Integrate ListHeader with list data

- Pass `data` prop to ListHeader for dynamic content rendering.
- Ensure ListHeader receives necessary information for display.

```tsx
"use client";

import React from 'react';

import { ListWithCards } from '@/types/types';
import ListHeader from '@/components/list/ListHeader';

interface ListItemProps {
  data: ListWithCards;
  index: number;
}

export default function ListItem({
  data,
  index,
}: ListItemProps) {
  return (
    <li className='h-full w-72 shrink-0 select-none'>
      <div className='w-full rounded-md bg-[#f1f2f4] shadow-md pb-2'>
        <ListHeader data={data} />
      </div>
    </li>
  )
}
```

Next, in `ListHeader` let's create a state for `title`.

It will also have `isEditing` state along with the `formRef` and `inputRef`.

feat: Implement title editing & refs in ListHeader

- Initialize state for title and editing mode.
- Create form and input refs for managing focus.

`components\list\ListHeader.tsx`
```tsx
"use client";

import React, { ElementRef, useRef, useState } from 'react';

import { List } from '@prisma/client';

interface ListHeaderProps {
  data: List;
}

export default function ListHeader({
  data,
}: ListHeaderProps) {

  const [title, setTitle] = useState(data.title);
  const [isEditing, setIsEditing] = useState(false);

  const formRef = useRef<ElementRef<'form'>>(null);
  const inputRef = useRef<ElementRef<'input'>>(null);

  return (
    <div className='flex pt-2 px-2 text-sm font-semibold justify-between items-start gap-x-2'>
      <div className='h-7 w-full px-2.5 py-1 text-sm font-medium border-transparent'>
        {data.title}
      </div>
    </div>
  )
}
```

###### Editing mode for ListHeader

Next create the `enableEditing` and `disableEditing` functions.

feat: Implement interactive title editing

- Introduce `enableEditing` to activate edit mode and focus on the input field.
- Add `disableEditing` to exit edit mode and preserve changes.
- Enhance user interaction by streamlining title editing within the list item.

```tsx
"use client";

import React, { ElementRef, useRef, useState } from 'react';

import { List } from '@prisma/client';

interface ListHeaderProps {
  data: List;
}

export default function ListHeader({
  data,
}: ListHeaderProps) {

  const [title, setTitle] = useState(data.title);
  const [isEditing, setIsEditing] = useState(false);

  const formRef = useRef<ElementRef<'form'>>(null);
  const inputRef = useRef<ElementRef<'input'>>(null);

  function disableEditing() {
    setIsEditing(false);
  }

  // Enables editing mode and focus input
  function enableEditing() {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    });
  }

  return (
    <div className='flex pt-2 px-2 text-sm font-semibold justify-between items-start gap-x-2'>
      <div className='h-7 w-full px-2.5 py-1 text-sm font-medium border-transparent'>
        {data.title}
      </div>
    </div>
  )
}
```

Now in the output of `ListHeader` let's try to implement editing mode. It should conditionally render a form in editing mode, otherwise a div with the list title if `isEditing` is false.

feat(ListHeader): Enhance UX with clickable title and edit mode toggle

- Introduce conditional rendering to switch between a form for editing and a static view of the list title.
- Implement an `onClick` event on the title div that triggers `enableEditing`, allowing users to enter edit mode directly by clicking on the title.
- The update enhances the user experience by making the title interaction more intuitive and the transition to edit mode seamless.

```tsx
export default function ListHeader({
  data,
}: ListHeaderProps) {
  const [title, setTitle] = useState(data.title);

  return (
    <div className='flex pt-2 px-2 text-sm font-semibold justify-between items-start gap-x-2'>
      {isEditing ? (
        <p>Form</p>
      ) : (
        <div 
          onClick={enableEditing}
          className='h-7 w-full px-2.5 py-1 text-sm font-medium border-transparent'
        >
          {title}
        </div>
      )}
    </div>
  )
}
```

feat: Add 'Escape' key functionality to exit edit mode

- Implement an escape key event handler within ListHeader to enhance keyboard accessibility.
- The `handleEscapeKey` function listens for the 'Escape' key press, allowing users to quickly exit the editing mode without mouse interaction.
- This feature contributes to a more intuitive and efficient user experience by streamlining the editing process.

```tsx
import { useEventListener } from 'usehooks-ts';

export default function ListHeader({
  data,
}: ListHeaderProps) {

  const [isEditing, setIsEditing] = useState(false);

  function disableEditing() {
    setIsEditing(false);
  }

  /**
   * When user clicks "Escape" key, it disables editing mode.
   * @param event the key press event
   */
  function handleEscapeKey(event: KeyboardEvent) {
    if (event.key === "Escape") {
      disableEditing();
    }
  }

  // Custom hook that attaches event listeners to DOM elements, the window, or media query lists.
  // Listen for the 'keydown' event on the entire document (window level)
  useEventListener('keydown', handleEscapeKey);
```

Next, instead of rendering a `<p>Form</p>` we want to render a `form` element with two hidden inputs that store the `id` and `boardId`. It also contains the `FormInput` with the proper props passed into it.

feat: Introduce form rendering for title editing

- Enable a form with `FormInput` component to appear in `ListHeader` when in edit mode.
- Include hidden fields to maintain list `id` and `boardId` for potential submission handling.
- Offer an interactive, user-friendly interface for editing list titles directly within the header.

```tsx
import FormInput from '@/components/form/FormInput';

export default function ListHeader({
  data,
}: ListHeaderProps) {
  const [isEditing, setIsEditing] = useState(false);

  const formRef = useRef<ElementRef<'form'>>(null);

  return (
    <div className='flex pt-2 px-2 text-sm font-semibold justify-between items-start gap-x-2'>
      {isEditing ? (
        <form className='flex-1 px-[2px]'>
          <input hidden id='id' name='id' value={data.id} />
          <input hidden id='boardId' name='boardId' value={data.boardId} />
          <FormInput
            id='title'
            defaultValue={title}
            placeholder='Enter list title...'
            onBlur={() => {}}
            ref={inputRef}
          />
        </form>
      ) : (
        <div
          onClick={enableEditing}
          className='h-7 w-full px-2.5 py-1 text-sm font-medium border-transparent'
        >
          {title}
        </div>
      )}
    </div>
  )
}
```

Issue: View and editing mode isn't consistent

We have two modes (i.e., a particular functioning condition or arrangement), a display and edit mode.

When we switch between modes `form` and `div` to render input or title, we want the styles and content to match. We also want the text and focus to remain consistent.

feat: Standardize ListHeader edit/display styles for better UX

- Ensure consistent styling between edit and display modes in ListHeader.
- Improve user experience by making the transition between states seamless.

`components\list\ListHeader.tsx`
```tsx
  return (
    <div className='flex pt-2 px-2 text-sm font-semibold justify-between items-start gap-x-2'>
      {isEditing ? (
        <form className='flex-1 px-[2px]'>
          <input hidden id='id' name='id' value={data.id} />
          <input hidden id='boardId' name='boardId' value={data.boardId} />
          <FormInput
            id='title'
            defaultValue={title}
            placeholder='Enter list title...'
            onBlur={() => {}}
            ref={inputRef}
            className='h-7 px-[7px] py-1 text-sm font-medium border-transparent hover:border-input focus:border-input transition truncate bg-transparent focus:bg-white'
          />
        </form>
      ) : (
        <div
          onClick={enableEditing}
          className='h-7 w-full px-2.5 py-1 text-sm font-medium border-transparent'
        >
          {title}
        </div>
      )}
    </div>
  )
```

## UpdateList server action

Make `updateList` folder inside `/actions` and add the following:

1. Schema
2. Types
3. Server Action handler

### UpdateList schema

For the zod schema validation we ask: what data do we expect? 

- title
- id
- boardId

feat: Implement validation for UpdateList schema with Zod

- Introduce Zod schema validation to ensure data integrity for UpdateList.
- Enforce minimum length requirement for 'title' to enhance data quality.

```tsx
import { z } from 'zod';

/**
 * Define the UpdateList object schema.
 * 
 */
export const UpdateList = z.object({
  title: z.string({
    required_error: "Title is required", 
    invalid_type_error: "Title is required", 
  }).min(3, {
    message: "Must be 3 or more characters long.", 
  }),
  id: z.string(),
  boardId: z.string(),
});
```

### UpdateList types

feat: Establish type definitions for UpdateList

- Set up type definitions for UpdateList server action
- Introduce Zod-based type inference for input validation, ensuring reliable data handling.
- Define ActionState types to streamline error management and data flow in server interactions.

```tsx
import { z } from 'zod';

// Import List, the expected output type, from Prisma client
import { List } from '@prisma/client';

// Encapsulate the state of various actions (e.g., fetching data, submitting forms, etc.)
// Provides a structured way to handle errors and manage data flow
import { ActionState } from '@/lib/createServerAction';

// Import the UpdateList schema (validation rules)
import { UpdateList } from './updateListSchema';

// Define the input type based on the UpdateList schema
export type InputType = z.infer<typeof UpdateList>;

// Define the output data type (ActionState) with List
export type OutputType = ActionState<InputType, List>;
```

### UpdateList server action

feat: Implement UpdateList handler for secure list updates

- Add server-side action handler to process list updates with authorization checks.
- Utilize 'auth' for user and organization ID verification to ensure secure transactions.
- Integrate 'revalidatePath' to refresh list paths post-update for immediate UI consistency.

docs: Enhance updateList with descriptive comments

- Added comprehensive comments to the updateList handler for better maintainability.
- Described the functionality of server-side authentication and cache revalidation.
- Clarified the purpose and usage of each imported module and function.

```tsx
// Enforce server-side execution context for security and performance
"use server";

import { auth } from "@clerk/nextjs"; // Authentication module
import { revalidatePath } from "next/cache"; // Cache revalidation module

import { createServerAction } from "@/lib/createServerAction"; // Server action creator
import { database } from "@/lib/database"; // Database interface

import { UpdateList } from "./updateListSchema"; // Input validation schema
import { InputType, OutputType } from "./updateListTypes"; // Type definitions

/**
 * Defines the server action to update a list.
 * @param data an object that contains the data needed to update the list
 * @returns the updated list
 */
async function performAction (data: InputType): Promise<OutputType> {
  // Authenticate the user and get their organization ID
  const { userId, orgId } = auth();

  // If authentication fails, return an error
  if (!userId || !orgId) {
    return {
      error: 'Unauthorized',
    };
  }

  // Destructure the necessary data from the input
  const { 
    title, 
    id,
    boardId,
  } = data;

  // Declare a variable to store the updated list
  let list;

  try {
    // Attempt to update the list in the database
    list = await database.list.update({
      where: {
        id,
        boardId,
        board: {
          // Organization ID for additional security check
          orgId, 
        },
      },
      data: {
        title,
      },
    });
  } catch (error) {
    // If the update fails, return an error
    return {
      error: 'Failed to update list.'
    }
  }

  // Revalidate the cache for the updated board path 
  // to ensure immediate UI consistency post-update
  revalidatePath(`/board/${boardId}`);

  // Return the updated list
  return {
    data: list
  };
}

// Export the server action for external use
export const updateList = createServerAction(UpdateList, performAction);
```

A recap for "use server" directive, which marks the `async performAction` as a [server action](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).

```tsx
// The "use server" directive ensures that this file runs in a server-side context only,
// enhancing security by preventing exposure of sensitive logic to the client side,
// and improving performance by leveraging server resources for execution.
"use server";
```

## ListHeader continued

Navigate back to `ListHeader` and let's create the server action to update list.

### Use updateList server action

feat: Integrate updateList Action in ListHeader

- Leveraged `updateList` action within `ListHeader` for list renaming functionality.
- Implemented success and error toasts for immediate user feedback on list update status.

`components\list\ListHeader.tsx`
```tsx
import { toast } from 'sonner';
import { updateList } from '@/actions/updateList';
import { useServerAction } from '@/hooks/useServerAction';

export default function ListHeader({
  data,
}: ListHeaderProps) {
  // ...
  
  const { executeServerAction } = useServerAction(updateList, {
    onSuccess(data) {
      toast.success(`Renamed to "${data.title}"`);
      setTitle(data.title);
      disableEditing();
    },
    onError(error) {
      toast.error(error);
    },
  });
```

### ListHeader submit handler

Let's implement list title editing in `ListHeader`.

feat: Implement submit handler for title editing

- Developed a submit handler in `ListHeader.tsx` for list title updates.
- Utilized `updateList` server action for changes, with feedback via toasts.

```tsx
  function onSubmit(formData: FormData) {
    // Extract title of the list from FormInput
    const title = formData.get('title') as string;

    // Extract list id and boardId found in the hidden inputs
    const id = formData.get('id') as string;
    const boardId = formData.get('boardId') as string;

    if (title === data.title) {
      return disableEditing();
    }

    // Update the list with the given form data
    executeServerAction({
      title,
      id,
      boardId,
    });
  }
```

### ListHeader onBlur function

feat: Implement onBlur submission for ListHeader editing

- Added `onBlur` event handler to `ListHeader` form input for automatic submission.
- Ensures list title changes are submitted when input loses focus, streamlining the update process.

```tsx
  function onBlur() {
    formRef.current?.requestSubmit();
  }

export default function ListHeader({
  data,
}: ListHeaderProps) {
// ...
  return (
    <div className='flex pt-2 px-2 text-sm font-semibold justify-between items-start gap-x-2'>
      {isEditing ? (
        <form className='flex-1 px-[2px]'>
          <input hidden id='id' name='id' value={data.id} />
          <input hidden id='boardId' name='boardId' value={data.boardId} />
          <FormInput
            id='title'
            defaultValue={title}
            placeholder='Enter list title...'
            onBlur={onBlur}
            ref={inputRef}
            className='h-7 px-[7px] py-1 text-sm font-medium border-transparent hover:border-input focus:border-input transition truncate bg-transparent focus:bg-white'
          />
        </form>
      ) : (
        <div
          onClick={enableEditing}
          className='h-7 w-full px-2.5 py-1 text-sm font-medium border-transparent'
        >
          {title}
        </div>
      )}
    </div>
  )
}
```

### Bind ref and onSubmit to form element in ListHeader's edit mode

feat: Bind ref and onSubmit to form in edit mode

- Bound `formRef` to the form element to facilitate programmatic actions in edit mode.
- Attached `onSubmit` handler to the form to process list title updates on submission.

```tsx
export default function ListHeader({
  data,
}: ListHeaderProps) {
// ...

  return (
    <div className='flex pt-2 px-2 text-sm font-semibold justify-between items-start gap-x-2'>
      {isEditing ? (

        <form 
          ref={formRef}
          action={onSubmit}
          className='flex-1 px-[2px]'
        >
```

#### ListHeader hidden submit button

The hidden submit button in the form (`<button type='submit' hidden />`) serves a specific purpose in the context of a web application where form submission is intended to be triggered by an event other than the user clicking a submit button. Here's a breakdown of its role:

- **Programmatic Submission**: The hidden button allows the form to be submitted programmatically. In your code, the `onBlur` event handler on the `FormInput` component calls `formRef.current?.requestSubmit();` when the input field loses focus. This method simulates a submit button click, which is why the hidden submit button is necessary.
  
- **Non-Interactive**: Since the button is hidden, it doesn't provide any visual interface or interaction point for the user. It's purely functional and not meant to be interacted with directly.

- **Fallback Mechanism**: In some cases, especially with complex forms or dynamic content, having a submit button (even if hidden) ensures that the form can be submitted in various scenarios, such as pressing the Enter key while focusing on a field.

In summary, the hidden submit button is a non-interactive, functional element that enables the form to be submitted through JavaScript without requiring a visible button that the user must click. It's a common technique used to improve user experience by allowing forms to be submitted as a result of custom logic or user actions other than the traditional button click.

feat: Add hidden submit button for streamlined form submission

- Implemented a hidden submit button in `ListHeader` to enhance form submission UX.
- Facilitates automatic form submission on input field's blur event, improving user interaction.

```tsx
export default function ListHeader({
  data,
}: ListHeaderProps) {
// ...

  return (
    <div className='flex pt-2 px-2 text-sm font-semibold justify-between items-start gap-x-2'>
      {isEditing ? (
        <form 
          ref={formRef}
          action={onSubmit}
          className='flex-1 px-[2px]'
        >
          <input hidden id='id' name='id' value={data.id} />
          <input hidden id='boardId' name='boardId' value={data.boardId} />
          <FormInput
            id='title'
            defaultValue={title}
            placeholder='Enter list title...'
            onBlur={onBlur}
            ref={inputRef}
            className='h-7 px-[7px] py-1 text-sm font-medium border-transparent hover:border-input focus:border-input transition truncate bg-transparent focus:bg-white'
          />
          {/* Hidden submit button */}
          <button type='submit' hidden />
        </form>
      ) : (
        <div
          onClick={enableEditing}
          className='h-7 w-full px-2.5 py-1 text-sm font-medium border-transparent'
        >
          {title}
        </div>
      )}
    </div>
  )
}
```

### ListHeader tests

Create a List then update the title with these actions:

1. Change the list title, press Enter
2. Change the list title, click away and activate the on blur
3. Change the list title, press "Esc" key

Each should trigger the toast notification and submit button to activate the server action to update list title.

## ListOptions

We want to add a component that can provide a list of options within the `ListHeader`. The `ListOptions` component will open a Popover and allows the user to perform multiple actions or options. Options include adding a card to the list, delete the list, or copy the list.

feat: Add ListOptions for list interactions

Introduce the ListOptions component, enabling users to interact with lists. This component provides functionalities such as adding a card to a list, deleting a list, and copying a list.

Create a `ListOptions` component with the prop interface that accepts `data` a `List` and `handleAddCardToList` a function that returns `void`.

feat: Define prop types for ListOptions

`components\list\ListOptions.tsx`
```tsx
"use client";

import React from 'react';
import { List } from '@prisma/client';

interface ListOptionsProps {
  data: List;
  handleAddCardToList: () => void;
};

export default function ListOptions({
  data,
  handleAddCardToList,
}: ListOptionsProps) {
  return (
    <div>ListOptions</div>
  )
}
```

feat(ListHeader): Integrate ListOptions for enhanced list management

Embed the ListOptions component within ListHeader to provide users with interactive capabilities such as adding cards, deleting lists, and copying list data. This update enriches the user interface by facilitating direct list manipulation from the ListHeader component.

```tsx
import ListOptions from '@/components/list/ListOptions';

export default function ListHeader({
  data,
}: ListHeaderProps) {

  return (
    <div className='flex pt-2 px-2 text-sm font-semibold justify-between items-start gap-x-2'>
      { /* ListHeader display... */ }
      <ListOptions
        data={data}
        handleAddCardToList={() => {}}
      />
    </div>
  )
}
```

### ListOptions output

feat: Add Popover for interactive list management

feat(ListOptions): Implement Popover for interactive list management options

Incorporate a Popover component into ListOptions to provide a dynamic and user-friendly interface for list interactions. This enhancement allows users to perform actions such as adding cards and managing lists within a neatly contained overlay, improving the overall user experience.

```tsx
"use client";

import React from 'react';
import { List } from '@prisma/client';
import { MoreHorizontal, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ListOptionsProps {
  data: List;
  handleAddCardToList: () => void;
};

export default function ListOptions({
  data,
  handleAddCardToList,
}: ListOptionsProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        {/* Open button */}
        <Button>
          <MoreHorizontal />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div>
          List actions
        </div>
        {/* Close button */}
        <PopoverClose asChild>
          <Button>
            <X />
          </Button>
        </PopoverClose>
        {/* List Actions */}
      </PopoverContent>
    </Popover>
  )
}
```

style(ListOptions): Enhance UI with refined Popover styling

Elevate the visual design of the ListOptions component by applying a more sophisticated styling to the Popover. This update includes ghost buttons for a cleaner look, precise alignment for better structure, and subtle color adjustments for improved readability.

```tsx
export default function ListOptions({
  data,
  handleAddCardToList,
}: ListOptionsProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        {/* Open button */}
        <Button variant='ghost' className='h-auto w-auto p-2'>
          <MoreHorizontal className='h-4 w-4'/>
        </Button>
      </PopoverTrigger>
      <PopoverContent align='start' side='bottom' className='px-0 pt-3 pb-3'>
        <div className='pb-4 text-center text-sm font-medium text-neutral-600'>
          List actions
        </div>
        {/* Close button */}
        <PopoverClose asChild>
          <Button 
            variant='ghost'
            className='absolute top-2 right-2 h-auto w-auto p-2 text-neutral-600'
          >
            <X className='h-4 w-4'/>
          </Button>
        </PopoverClose>
        {/* List Actions */}
      </PopoverContent>
    </Popover>
  )
}
```

### ListOptions actions

Let's first add the button which adds the card to the List.

#### Add card to list

feat: Add button for user-initiated list updates

Introduce a new button within the ListOptions component that allows users to add cards to their lists directly. This feature streamlines the process of updating list content, making it more intuitive and accessible from the user interface.

```tsx
export default function ListOptions({
  data,
  handleAddCardToList,
}: ListOptionsProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        {/* ... */}
      </PopoverTrigger>
      <PopoverContent align='start' side='bottom' className='px-0 pt-3 pb-3'>
        {/* ... */}

        {/* List Actions */}
        <Button
          onClick={handleAddCardToList}
          variant='ghost'
          className='justify-start w-full h-auto p-2 px-5 rounded-none font-normal text-sm'
        >
          Add card +
        </Button>

      </PopoverContent>
    </Popover>
  )
}
```

#### User can copy or delete list

Then we want to add the actions that allows the user to copy or delete the list. 

There are a few approaches to this.

- Add a button and activate the `useServerAction` hook and call an `executeServerAction` on click
- Use server actions with `form` element

We will go with the latter.

Render two `form` elements which contains a two hidden `input` elements and a `FormSubmitButton`. The hidden input elements will extract the `id` and `boardId` respectively.

feat(ListOptions): Integrate form-based list management actions

Enhance the ListOptions component with form-driven 'Copy list' and 'Delete list' actions. These server-supported operations empower users to manage their lists more effectively, directly from the UI, with seamless server interaction.

```tsx
"use client";

import React from 'react';
import { List } from '@prisma/client';
import { MoreHorizontal, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from '@/components/ui/separator';
import FormSubmitButton from '@/components/form/FormSubmitButton';

interface ListOptionsProps {
  data: List;
  handleAddCardToList: () => void;
};

export default function ListOptions({
  data,
  handleAddCardToList,
}: ListOptionsProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        {/* Open button */}
        <Button variant='ghost' className='h-auto w-auto p-2'>
          <MoreHorizontal className='h-4 w-4' />
        </Button>
      </PopoverTrigger>
      <PopoverContent align='start' side='bottom' className='px-0 pt-3 pb-3'>
        <div className='pb-4 text-center text-sm font-medium text-neutral-600'>
          List actions
        </div>
        {/* Close button */}
        <PopoverClose asChild>
          <Button
            variant='ghost'
            className='absolute top-2 right-2 h-auto w-auto p-2 text-neutral-600'
          >
            <X className='h-4 w-4' />
          </Button>
        </PopoverClose>
        {/* List Actions */}
        <Button
          onClick={handleAddCardToList}
          variant='ghost'
          className='justify-start w-full h-auto p-2 px-5 rounded-none font-normal text-sm'
        >
          Add card +
        </Button>
        <form>
          <input hidden id='id' name='id' value={data.id} />
          <input hidden id='boardId' name='boardId' value={data.boardId} />
          <FormSubmitButton>
            Copy list
          </FormSubmitButton>
        </form>
        <Separator />
        <form>
          <input hidden id='id' name='id' value={data.id} />
          <input hidden id='boardId' name='boardId' value={data.boardId} />
          <FormSubmitButton>
            Delete list
          </FormSubmitButton>
        </form>
      </PopoverContent>
    </Popover>
  )
}
```

## CopyList

Make `copyList` folder inside `/actions` and add the following:

1. Schema
2. Types
3. Server Action handler
   
### CopyList schema

The `CopyList` object schema specifies the expected structure of data for deleting a list.

Let's define it using the zod library:

feat: Add CopyList schema validation

- Introduce Zod schema validation to ensure data integrity for CopyList
- Schema enforces that both `id` and `boardId` are of type string

`actions\copyList\copyListSchema.ts`
```tsx
import { z } from 'zod';

/**
 * Define the CopyList object schema.
 * 
 */
export const CopyList = z.object({
  id: z.string(),
  boardId: z.string(),
});
```

### CopyList types

feat: Establish type definitions for CopyList

- Set up type definitions for CopyList server action
- Introduce Zod-based type inference for input validation, ensuring reliable data handling.
- Define ActionState types to streamline error management and data flow in server interactions.

`actions\copyList\copyListTypes.ts`
```tsx
import { z } from 'zod';

// Import List, the expected output type, from Prisma client
import { List } from '@prisma/client';

// Encapsulate the state of various actions (e.g., fetching data, submitting forms, etc.)
// Provides a structured way to handle errors and manage data flow
import { ActionState } from '@/lib/createServerAction';

// Import the CopyList schema (validation rules)
import { CopyList } from './copyListSchema';

// Define the input type based on the CopyList schema
export type InputType = z.infer<typeof CopyList>;

// Define the output data type (ActionState) with List
export type OutputType = ActionState<InputType, List>;
```

### CopyList server action

feat: Create copyList server action handler

```tsx
"use server";

import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { createServerAction } from "@/lib/createServerAction";
import { database } from "@/lib/database";

import { CopyList } from "./copyListSchema";
import { InputType, OutputType } from "./copyListTypes";

/**
 * Defines a server action to copy a list.
 *
 * @param {InputType} data - An object containing the data needed to copy the list.
 * @returns {Promise<OutputType>} - The copied list or an error message.
 */
async function performAction (data: InputType): Promise<OutputType> {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: 'Unauthorized',
    };
  }

  const { 
    id,
    boardId,
  } = data;

  let list;

  // try..catch block to fetch and copy list

  revalidatePath(`/board/${boardId}`);

  return {
    data: list
  };
}

export const copyList = createServerAction(CopyList, performAction);
```

Let's work on the try block. Let's first fetch the list.

feat: Fetch the list to copy

```tsx
  try {
    // Find the list to copy
    const foundList = await database.list.findUnique({
      where: {
        id,
        boardId,
        board: {
          orgId,
        },
      },
      include: {
        cards: true,
      },
    });

    if (!foundList) {
      return { error: 'List not found.' };
    }
```

Next find the latest list order in the board to calculate the `nextOrder`.

feat: Calculate order of most recent list in board

```tsx
    // Fetch the most recent list in the board to properly assign the newest order to the list
    const mostRecentList = await database.list.findFirst({
      where: { boardId: boardId },
      orderBy: { order: "desc" },
      select: { order: true },
    });

    // Get the next order depending on whether a mostRecentList is present or not
    const nextOrder = mostRecentList ? mostRecentList.order + 1 : 1;
```

Create a new copy of the list in the database, including a copy of all the cards.

feat: Implement list copying functionality

```tsx
    // Create a new copy of the list in the database
    list = await database.list.create({
      data: {
        boardId: foundList.boardId,
        title: `${foundList.title} - Copy`,
        order: nextOrder,
        cards: {
          createMany: {
            data: foundList.cards.map((card) => ({
              title: card.title,
              description: card.description,
              order: card.order
            })),
          },
        },
      },
      include: {
        cards: true,
      },
    });
```

docs: Update copyList with descriptive comments

feat: Implement copyList server action

This commit introduces a server-side action handler, 'copyList', that securely copies lists. Key features include:

- **Authorization Checks**: The handler incorporates stringent authorization checks to validate user and organization IDs before proceeding with list copies.
- **User Verification**: Utilizes the 'auth' module from '@clerk/nextjs' to authenticate user sessions and ensure that only authorized users can copy lists.
- **Database Interaction**: Employs Prisma ORM for database operations, enabling type-safe transactions and streamlined list copies.
- **UI Consistency**: Integrates 'revalidatePath' from 'next/cache' to update list paths dynamically, maintaining immediate consistency across the user interface post-copy.

```tsx
"use server";

import { auth } from "@clerk/nextjs"; // Authentication module
import { revalidatePath } from "next/cache"; // Cache revalidation module

import { createServerAction } from "@/lib/createServerAction"; // Server action creator
import { database } from "@/lib/database"; // Database interface

import { CopyList } from "./copyListSchema"; // Input validation schema
import { InputType, OutputType } from "./copyListTypes"; // Type definitions

/**
 * Defines a server action to copy a list.
 *
 * @param {InputType} data - An object containing the data needed to copy the list.
 * @returns {Promise<OutputType>} - The copied list or an error message.
 */
async function performAction(data: InputType): Promise<OutputType> {
  // Authenticate the user and get their organization ID
  const { userId, orgId } = auth();

  // If authentication fails, return an error
  if (!userId || !orgId) {
    return {
      error: "Unauthorized",
    };
  }

  // Destructure the necessary data from the input
  const { id, boardId } = data;

  // Declare a variable to store the copied list
  let list;

  try {
    // Find the list to copy
    const foundList = await database.list.findUnique({
      where: {
        id,
        boardId,
        board: {
          orgId,
        },
      },
      include: {
        cards: true,
      },
    });

    // Return an error message if the list to copy is not found
    if (!foundList) {
      return { error: "List not found." };
    }

    // Fetch the most recent list in the board to properly assign the newest order to the list
    const mostRecentList = await database.list.findFirst({
      where: { boardId: boardId },
      orderBy: { order: "desc" },
      select: { order: true },
    });

    // Get the next order depending on whether a mostRecentList is present or not
    const nextOrder = mostRecentList ? mostRecentList.order + 1 : 1;

    // Create a new copy of the list in the database
    list = await database.list.create({
      data: {
        boardId: foundList.boardId,
        title: `${foundList.title} - Copy`,
        order: nextOrder,
        cards: {
          createMany: {
            data: foundList.cards.map((card) => ({
              title: card.title,
              description: card.description,
              order: card.order,
            })),
          },
        },
      },
      include: {
        cards: true,
      },
    });
  } catch (error) {
    // If the copy fails, return an error
    return {
      error: "Failed to copy list.",
    };
  }

  // Revalidate the cache for the board path where list was copied to
  // to ensure immediate UI consistency post-copy
  revalidatePath(`/board/${boardId}`);

  // Return the copied list
  return {
    data: list,
  };
}

// Export the server action for external use
export const copyList = createServerAction(CopyList, performAction);
```

### Use copyList in ListOptions

feat(ListOptions): Implement list copy server action

Create the server action to copy a list, which implements success and error callbacks to display appropriate toasts.

```tsx
  const { executeServerAction: executeCopyServerAction } = useServerAction(copyList, {
    onSuccess(data) {
      toast.success(`List "${ data.title }" copied.`);
      closeRef.current?.click();
    },
    onError(error) {
      toast.error(error);
    },
  });
```

Next create the `onCopy` function to handle the action.

feat: Implement onCopy handler in ListOptions component

This commit introduces the "onCopy" handler within the ListOptions component, which facilitates list management. The handler extracts the list ID and board ID from form data and triggers the copy action. Additionally, error handling has been improved to handle cases where IDs are missing or invalid.

```tsx
export default function ListOptions({
  data,
  handleAddCardToList,
}: ListOptionsProps) {
  const closeRef = useRef<ElementRef<'button'>>(null);

  /* Copy list server action */
  const { executeServerAction: executeCopyServerAction } = useServerAction(copyList, {
    onSuccess(data) {
      toast.success(`List "${ data.title }" copied.`);
      closeRef.current?.click();
    },
    onError(error) {
      toast.error(error);
    },
  });

  function onCopy(formData: FormData) {
    // Extract list id and boardId found in the hidden inputs
    const id = formData.get('id') as string;
    const boardId = formData.get('boardId') as string;

    executeCopyServerAction({ id, boardId });
  }
```

feat: Assign onCopy action to corresponding form

This commit updates the `ListOptions` component to assign the "onCopy" action to the corresponding form. The form includes hidden input fields for the list ID and board ID, which are extracted from the provided data. Additionally, a `FormSubmitButton` triggers the copy list action.

Changes made:
- Assigned "onCopy" action to the form

```tsx
export default function ListOptions({
  data,
  handleAddCardToList,
}: ListOptionsProps) {
  // ...
  return (
    <Popover>
      <PopoverContent align='start' side='bottom' className='px-0 pt-3 pb-3'>

        <form action={onCopy}>
          <input hidden id='id' name='id' value={data.id} />
          <input hidden id='boardId' name='boardId' value={data.boardId} />
          <FormSubmitButton>
            Copy list
          </FormSubmitButton>
        </form>

      </PopoverContent>
    </Popover>
  )
}
```

### copyList simple tests

1. Create a list
2. Click the `ListOptions` component to copy the list
3. Click the "Copy list" action
   
This should trigger a toast notification that list was created, then creates a new list with a title 'Original list - Copy'.

## DeleteList

Make `deleteList` folder inside `/actions` and add the following:

1. Schema
2. Types
3. Server Action handler

### DeleteList schema

The `DeleteList` object schema specifies the expected structure of data for deleting a list.

Let's define it using the zod library:

feat: Implement validation for DeleteList schema with Zod

- Introduce Zod schema validation to ensure data integrity for DeleteList
- Schema enforces that both `id` and `boardId` are of type string

`actions\deleteList\deleteListSchema.ts`
```tsx
import { z } from 'zod';

/**
 * Define the DeleteList object schema.
 * 
 */
export const DeleteList = z.object({
  id: z.string(),
  boardId: z.string(),
});
```

### DeleteList types

feat: Establish type definitions for DeleteList

- Set up type definitions for DeleteList server action
- Introduce Zod-based type inference for input validation, ensuring reliable data handling.
- Define ActionState types to streamline error management and data flow in server interactions.

`actions\deleteList\deleteListTypes.ts`
```tsx
import { z } from 'zod';

// Import List, the expected output type, from Prisma client
import { List } from '@prisma/client';

// Encapsulate the state of various actions (e.g., fetching data, submitting forms, etc.)
// Provides a structured way to handle errors and manage data flow
import { ActionState } from '@/lib/createServerAction';

// Import the DeleteList schema (validation rules)
import { DeleteList } from './deleteListSchema';

// Define the input type based on the DeleteList schema
export type InputType = z.infer<typeof DeleteList>;

// Define the output data type (ActionState) with List
export type OutputType = ActionState<InputType, List>;
```

### DeleteList server action

feat: Implement deleteList server action

This commit introduces a server-side action handler, 'deleteList', that securely process list deletions. Key features include:

- **Authorization Checks**: The handler incorporates stringent authorization checks to validate user and organization IDs before proceeding with list deletions.
- **User Verification**: Utilizes the 'auth' module from '@clerk/nextjs' to authenticate user sessions and ensure that only authorized users can delete lists.
- **Database Interaction**: Employs Prisma ORM for database operations, enabling type-safe transactions and streamlined list deletion processes.
- **UI Consistency**: Integrates 'revalidatePath' from 'next/cache' to update list paths dynamically, maintaining immediate consistency across the user interface post-deletion.

`actions\deleteList\index.ts`
```tsx
// Enforce server-side execution context for security and performance
"use server";

import { auth } from "@clerk/nextjs"; // Authentication module
import { revalidatePath } from "next/cache"; // Cache revalidation module

import { createServerAction } from "@/lib/createServerAction"; // Server action creator
import { database } from "@/lib/database"; // Database interface

import { DeleteList } from "./deleteListSchema"; // Input validation schema
import { InputType, OutputType } from "./deleteListTypes"; // Type definitions

/**
 * Defines the server action to delete a list.
 * @param data an object that contains the data needed to delete the list
 * @returns the deleted list
 */
async function performAction (data: InputType): Promise<OutputType> {
  // Authenticate the user and get their organization ID
  const { userId, orgId } = auth();

  // If authentication fails, return an error
  if (!userId || !orgId) {
    return {
      error: 'Unauthorized',
    };
  }

  // Destructure the necessary data from the input
  const { 
    id,
    boardId,
  } = data;

  // Declare a variable to store the deleted list
  let list;

  // Attempt to delete the list in the database using Prisma ORM
  try {
    list = await database.list.delete({
      where: {
        id,
        boardId,
        board: {
          // Organization ID for additional security check
          orgId, 
        },
      },
    });
  } catch (error) {
    // If the delete fails, return an error
    return {
      error: 'Failed to delete list.'
    }
  }

  // Revalidate the cache for the deleted board path 
  // to ensure immediate UI consistency post-delete
  revalidatePath(`/board/${boardId}`);

  // Return the deleted list
  return {
    data: list
  };
}

// Export the server action for external use
export const deleteList = createServerAction(DeleteList, performAction);
```

### Use deleteList in ListOptions

feat(ListOptions): Implement list delete server action

Create the server action to delete a list, which implements success and error callbacks to display appropriate toasts.

```tsx
import { toast } from 'sonner';
import { deleteList } from '@/actions/deleteList';
import { useServerAction } from '@/hooks/useServerAction';

export default function ListOptions({
  data,
  handleAddCardToList,
}: ListOptionsProps) {

  /* Delete server action */
  const { executeServerAction: executeDeleteServerAction } = useServerAction(deleteList, {
    onSuccess(data) {
      toast.success(`List "${ data.title }" deleted.`);
    },
    onError(error) {
      toast.error(error);
    },
  });
```

Now create the delete handler and assign it as the `action` prop to the form element that corresponds to the list deletion.

feat: Create onDelete handler and assign to form

```tsx
export default function ListOptions({
  data,
  handleAddCardToList,
}: ListOptionsProps) {

  /* Delete server action */
  const { executeServerAction: executeDeleteServerAction } = useServerAction(deleteList, {
    onSuccess(data) {
      toast.success(`List "${ data.title }" deleted.`);
    },
    onError(error) {
      toast.error(error);
    },
  });

  function onDelete(formData: FormData) {
    // Extract list id and boardId found in the hidden inputs
    const id = formData.get('id') as string;
    const boardId = formData.get('boardId') as string;

    executeDeleteServerAction({ id, boardId });
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        {/* Open button... */}
      </PopoverTrigger>
      <PopoverContent align='start' side='bottom' className='px-0 pt-3 pb-3'>
        {/* ... */}
        <Separator />
        <form action={onDelete}>
          <input hidden id='id' name='id' value={data.id} />
          <input hidden id='boardId' name='boardId' value={data.boardId} />
          <FormSubmitButton>
            Delete list
          </FormSubmitButton>
        </form>
      </PopoverContent>
    </Popover>
  )
```

### Closing a Popover on action/user interaction.

We want to close the Popover when user calls an action such as `deleteList`. Create a `closeRef`, in the `onSuccess` callback of the server action add `closeRef.current?.click()`. Then assign the `closeRef` to the `PopoverClose` component `ref` prop.

feat(ListOptions): Automatically close Popover after server action

```tsx
import React, { ElementRef, useRef } from 'react';

export default function ListOptions({
  data,
  handleAddCardToList,
}: ListOptionsProps) {
  const closeRef = useRef<ElementRef<'button'>>(null);

  const { executeServerAction: executeDeleteServerAction } = useServerAction(deleteList, {
    onSuccess(data) {
      toast.success(`List "${ data.title }" deleted.`);
      
      closeRef.current?.click();
    },
    onError(error) {
      toast.error(error);
    },
  });

    return (
    <Popover>
      <PopoverTrigger asChild>
        {/* Open button */}
        <Button variant='ghost' className='h-auto w-auto p-2'>
          <MoreHorizontal className='h-4 w-4' />
        </Button>
      </PopoverTrigger>
      <PopoverContent align='start' side='bottom' className='px-0 pt-3 pb-3'>
        <div className='pb-4 text-center text-sm font-medium text-neutral-600'>
          List actions
        </div>
        {/* Close button */}
        <PopoverClose ref={closeRef} asChild>
          <Button
            variant='ghost'
            className='absolute top-2 right-2 h-auto w-auto p-2 text-neutral-600'
          >
            <X className='h-4 w-4' />
          </Button>
        </PopoverClose>
```

## ListItem setup

Let's setup `ListItem` component with `isEditing` state and an input ref named `textAreaRef`. Define the `enableEditing` and `disableEditing` functions. Then pass the `enableEditing` to the `handleAddCardToList` prop of `ListHeader`.

feat: Add textAreaRef and isEditing state to ListItem

This commit enhances the `ListItem` component by introducing the following features:

1. **textAreaRef**: A reference to a `<textarea>` element, allowing better control over focus and interaction.
2. **isEditing state**: A boolean state that tracks whether the component is in an editing mode.
3. **disableEditing**: A function to disable editing mode.
4. **enableEditing**: A function to enable editing mode and focus on the text area.

Additionally, the `enableEditing` function is now passed as a prop to the `ListHeader` component, enabling the ability to trigger editing behavior.

Changes made:
- Added `textAreaRef` and `isEditing` state
- Improved focus handling with `setTimeout`
- Added `enableEditing` and `disableEditing` functions
- Passed `enableEditing` prop to `ListHeader`

`components\list\ListItem.tsx`
```tsx
"use client";

import React, { ElementRef, useRef, useState } from 'react';

import { ListWithCards } from '@/types/types';
import ListHeader from '@/components/list/ListHeader';

interface ListItemProps {
  data: ListWithCards;
  index: number;
}

export default function ListItem({
  data,
  index,
}: ListItemProps) {
  const textAreaRef = useRef<ElementRef<"textarea">>(null);
  const [isEditing, setIsEditing] = useState(false);

  function disableEditing() {
    setIsEditing(false);
  }

  function enableEditing() {
    setIsEditing(true);
    setTimeout(() => {
      textAreaRef.current?.focus();
    });
  }

  return (
    <li className='h-full w-72 shrink-0 select-none'>
      <div className='w-full rounded-md bg-[#f1f2f4] shadow-md pb-2'>
        <ListHeader 
          data={data} 
          handleAddCardToList={enableEditing}
        />
      </div>
    </li>
  )
}
```

Why are we defining the state and ref in `ListItem`? Recall that we have a method in `ListOptions` which is used to add a new card.

#### Pass editing state across List components

feat: Propagate handleAddCardToList action in ListHeader

This enhancement enables communication between the `ListItem` and `ListOptions` components by passing the `handleAddCardToList` action. The action facilitates the editing state management.

Changes made:
- Passed `handleAddCardToList` prop from `ListHeader`

```tsx
interface ListHeaderProps {
  data: List;
  handleAddCardToList: () => void;
}

export default function ListHeader({
  data,
  handleAddCardToList,
}: ListHeaderProps) {
  // ...

    return (
    <div className='flex pt-2 px-2 text-sm font-semibold justify-between items-start gap-x-2'>
      {/* ... */}
      <ListOptions
        data={data}
        handleAddCardToList={handleAddCardToList}
      />
    </div>
  )
}
```

## CardForm component

With the List components setup, we can now work on the first card component.

Create `components\card\CardForm.tsx` component.

feat: Define prop types for CardForm component

```tsx
"use client";

import React from 'react';

interface CardFormProps {
  listId: string;
  isEditing: boolean;
  disableEditing: () => void;
  enableEditing: () => void;
}

export default function CardForm({
  listId,
  isEditing,
  disableEditing,
  enableEditing,
}: CardFormProps) {
  return (
    <div>CardForm</div>
  )
}
```

Now import and use `CardForm` in `ListItem`, render it below the `ListHeader`.

feat: Render CardForm in ListItem component

```tsx
export default function ListItem({
  data,
  index,
}: ListItemProps) {
  const textAreaRef = useRef<ElementRef<"textarea">>(null);
  const [isEditing, setIsEditing] = useState(false);

  function disableEditing() {
    setIsEditing(false);
  }

  function enableEditing() {
    setIsEditing(true);
    setTimeout(() => {
      textAreaRef.current?.focus();
    });
  }

  return (
    <li className='h-full w-72 shrink-0 select-none'>
      <div className='w-full rounded-md bg-[#f1f2f4] shadow-md pb-2'>
        <ListHeader 
          data={data} 
          handleAddCardToList={enableEditing}
        />
        <CardForm 
          listId={data.id}
          isEditing={isEditing}
          enableEditing={enableEditing}
          disableEditing={disableEditing}
        />
      </div>
    </li>
  )
}
```

### Configure CardForm with forwardRef

- [forwardRef](https://react.dev/reference/react/forwardRef)

Let's first add an additional prop to the `CardForm` which accepts the `textAreaRef`.

feat(ListItem): Forward textAreaRef to CardForm

```tsx
export default function ListItem({
  data,
  index,
}: ListItemProps) {
  const textAreaRef = useRef<ElementRef<"textarea">>(null);

  return (
    <li className='h-full w-72 shrink-0 select-none'>
      <div className='w-full rounded-md bg-[#f1f2f4] shadow-md pb-2'>
        { /* ListHeader... */ }

        <CardForm
          ref={textAreaRef}
          listId={data.id}
          isEditing={isEditing}
          enableEditing={enableEditing}
          disableEditing={disableEditing}
        />

      </div>
    </li>
  )
}
```

Next we need to configure `CardForm` with `forwardRef` to let the component expose a DOM node to a parent component with a ref.

feat: Enable CardForm to receive and forward a ref

```tsx
"use client";

import React, { forwardRef } from 'react';

interface CardFormProps {
  listId: string;
  isEditing: boolean;
  disableEditing: () => void;
  enableEditing: () => void;
}

const CardForm = forwardRef<HTMLTextAreaElement, CardFormProps>(({
  listId,
  isEditing,
  disableEditing,
  enableEditing,
}, ref) => {
  return (
    <div>CardForm</div>
  )
});

CardForm.displayName="CardForm";

export default CardForm;
```

#### Add `displayName` when forwarding a ref

Notice that a problem occurs if we don't specify the `displayName`

```sh
Component definition is missing display name eslintreact/display-name
```

- For more details, you can refer to the [official React documentation on `displayName`](https://reactjs.org/docs/react-component.html#displayname).

The error message "**Component definition is missing display name**" typically occurs in React when you define a component (usually a functional component) without specifying a `displayName`. Let's break it down:

1. **What Causes the Error?**
   - When you create a functional component using an **arrow function**, it doesn't automatically get a `displayName`.
   - The `displayName` is used by tools like React DevTools to provide meaningful names for components during debugging.
   - If a component lacks a `displayName`, it may appear as `<Unknown />` in the DevTools.

2. **How to Fix It?**
   - To resolve this error, you can assign a `displayName` to your component. There are a few ways to do this:
     - **Named Function Expression**:
       ```tsx
       export default function MyComponent() {
         // Component implementation...
       }
       ```
       In this case, the function name (`MyComponent`) becomes the `displayName`.
     - **Assign Manually**:
       ```tsx
       const MyComponent = () => {
         // Component implementation...
       };
       MyComponent.displayName = 'MyComponent';
       export default MyComponent;
       ```
       Here, we explicitly set the `displayName` property.
     - **Higher-Order Components (HOCs)**:
       If you're using an HOC, ensure that the wrapped component has a `displayName`.

3. **Why Does `displayName` Matter?**
   - The `displayName` is mainly used by developer tools for debugging purposes.
   - It helps identify components in the component tree during development.
   - Without a `displayName`, components may appear as generic placeholders (e.g., `<Unknown />`).

4. **Example Usage**:
   Suppose you have a `LoadingSpinner` component. You can set its `displayName` like this:
   ```tsx
   export default function LoadingSpinner() {
     // Component implementation...
   }
   LoadingSpinner.displayName = 'LoadingSpinner';
   ```

Remember that while `displayName` is not strictly required for your application to function correctly, it's good practice to provide meaningful names for better debugging and maintainability. 

Another solution is to rewrite `CardForm` to a function declaration. Here's how to do that while being able to receieve and forward a ref:

```tsx
import React, { forwardRef, Ref } from 'react';

interface CardFormProps {
  listId: string;
  isEditing: boolean;
  disableEditing: () => void;
  enableEditing: () => void;
}

function CardForm({
  listId,
  isEditing,
  disableEditing,
  enableEditing,
}: CardFormProps, ref: Ref<HTMLDivElement>) {
  // Your CardForm component implementation...
  // Use the ref as needed (e.g., attach it to a DOM element)
  return (
    <div ref={ref}>CardForm</div>
  );
}

export default forwardRef(CardForm);
```

### CardForm output

feat(CardForm): Implement "Add Card" button

```tsx
import React, { forwardRef } from 'react';
import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';

const CardForm = forwardRef<HTMLTextAreaElement, CardFormProps>(({
  listId,
  isEditing,
  disableEditing,
  enableEditing,
}, ref) => {
  return (
    <div>
      <Button onClick={enableEditing}>
        <Plus />
        Add card
      </Button>
    </div>
  )
});
```

style: Make subtle, compact button for adding new cards

The styles create a compact, subtle button with appropriate spacing and visual cues for adding a new card.

```tsx
const CardForm = forwardRef<HTMLTextAreaElement, CardFormProps>(({
// ...
}, ref) => {
  return (
    <div className='pt-2 px-2'>
      <Button 
        onClick={enableEditing}
        size='sm'
        variant='ghost'
        className='justify-start h-auto px-2 py-1.5 w-full text-sm text-muted-foreground'
      >
        <Plus className='h-4 w-4 mr-2'/>
        Add card
      </Button>
    </div>
  )
});
```

## FormTextArea component

feat: Define prop types for FormTextArea component

`components\form\FormTextArea.tsx`
```tsx
"use client";

import React, { KeyboardEventHandler } from 'react';

interface FormTextAreaProps {
  id: string;
  label?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  errors?: Record<string, string[] | undefined>;
  className?: string;
  onBlur?: () => void;
  onClick?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement> | undefined;
}

export default function FormTextArea() {
  return (
    <div>FormTextArea</div>
  )
}
```

### Configure FormTextArea with forwardRef

Let's also setup the [forwardRef](https://react.dev/reference/react/forwardRef), this time pass in a named function to `forwardRef()` so we don't need to add a displayName.

feat: Enable FormTextArea to receive and forward a ref

```tsx
"use client";

import React, { KeyboardEventHandler, Ref, forwardRef } from 'react';

interface FormTextAreaProps {
  id: string;
  label?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  errors: Record<string, string[] | undefined>;
  className?: string;
  onBlur?: () => void;
  onClick?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement> | undefined;
}

const FormTextArea = forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
  function FormTextArea(
    {
      id,
      label,
      value,
      defaultValue,
      placeholder,
      required,
      disabled,
      errors,
      className,
      onBlur,
      onClick,
      onChange,
      onKeyDown,
    }: FormTextAreaProps,
    ref: Ref<HTMLTextAreaElement>
  ) {
    return (
      <div>
        {/* Render FormTextArea component */}
        <textarea
          id={id}
          ref={ref} // Attach the ref to the textarea
          value={value} 
          onChange={onChange} 
          placeholder={placeholder}
        // Add other necessary props
        />
      </div>
    );
  }
);

export default FormTextArea;
```

### FormTextArea output

- [Textarea | shadcn/ui](https://ui.shadcn.com/docs/components/textarea)

```sh
npx shadcn-ui@latest add textarea
```

Create a nested `div`, then render a `Label` component on the conditionally using `label`.

feat: Conditionally render Label in FormTextArea

```tsx
import { Label } from '@/components/ui/label';

const FormTextArea = forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
  function FormTextArea(
    {
      // ...props
    }: FormTextAreaProps,
    ref: Ref<HTMLTextAreaElement>
  ) {
    return (
      <div className='w-full space-y-2'>
        <div className='w-full space-y-1'>
          {label ? (
            <Label
              htmlFor={id}
              className='text-xs text-neutral-700 font-semibold'
            >
              {label}
            </Label>
          ): null}
        </div>
      </div>
    );
  }
);
```

#### Add Textarea component

After that add the `Textarea` component passing in all the props.

feat: Render Textarea component in FormTextArea

```tsx
import { Textarea } from '@/components/ui/textarea';

interface FormTextAreaProps {
  id: string;
  label?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  errors: Record<string, string[] | undefined>;
  className?: string;
  onBlur?: () => void;
  onClick?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement> | undefined;
}

const FormTextArea = forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
  function FormTextArea(
    {
      id,
      label,
      value,
      defaultValue,
      placeholder,
      required,
      disabled,
      errors,
      className,
      onBlur,
      onClick,
      onChange,
      onKeyDown,
    }: FormTextAreaProps,
    ref: Ref<HTMLTextAreaElement>
  ) {
    return (
      <div className='w-full space-y-2'>
        <div className='w-full space-y-1'>
          {label ? (
            <Label
              htmlFor={id}
              className='text-xs text-neutral-700 font-semibold'
            >
              {label}
            </Label>
          ): null}
          <Textarea 
            ref={ref}
            id={id}
            name={id}
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            onBlur={onBlur}
            onClick={onClick}
            onChange={onChange}
            onKeyDown={onKeyDown}
            aria-describedby={`${id}-error`}
          />
        </div>
      </div>
    );
  }
);
```

feat: Add more props to Textarea component

Added the following props to the Textarea component:

- value: To control the input value programmatically.
- defaultValue: To set the initial value when the component mounts.
- aria-describedby: To associate the input with an error message (if any).

feat: Enable customizable styles for the Textarea

Introduce `cn` utility function to enable customizable styles for the Textarea component. This enhancement promotes flexibility and maintainability in styling.

style: Apply consistent base styles to Textarea

Applied base styles to the `Textarea` component to achieve consistency across browsers and enhance usability. The following changes were made:

- Disable resizing of the textarea element (`resize-none`)
- Remove focus rings (`ring-0` and `focus-visible:ring-0`)
- Add a subtle shadow (`shadow-sm`)

```tsx
import { cn } from '@/lib/utils';

const FormTextArea = forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
  function FormTextArea(
    {
      // ...props
    }: FormTextAreaProps,
    ref: Ref<HTMLTextAreaElement>
  ) {
    return (
      <div className='w-full space-y-2'>
        <div className='w-full space-y-1'>
          { /* Label... */ }
          <Textarea 
            className={cn(
              'resize-none shadow-sm ring-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0',
              className
            )}
          />
        </div>
      </div>
    );
  }
);
```

#### Display errors in FormTextArea

feat: Add FormErrors to display validation errors

Add the `FormErrors` component to handle validation errors for the `FormTextArea` component. The `FormErrors` component receives the `id` and `errors` as props, allowing it to display relevant error messages associated with the textarea input field. 

By integrating `FormErrors`, we enhance the user experience by providing clear feedback when form validation fails.

```tsx
import FormErrors from '@/components/form/FormErrors';

const FormTextArea = forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
  function FormTextArea(
    {
      // ...props
    }: FormTextAreaProps,
    ref: Ref<HTMLTextAreaElement>
  ) {
    return (
      <div className='w-full space-y-2'>
        <div className='w-full space-y-1'>
          { /* Label... */ }
          { /* Textarea... */ }
        </div>
        <FormErrors 
          id={id}
          errors={errors}
        />
      </div>
    );
  }
);
```

#### Disable textarea input with useFormStatus

Let's import `useFormStatus` from `react-dom` and use the `pending` status to disable the `Textarea`.

feat: Specify textarea behavior on form submission

This commit enhances the behavior of the textarea input with the `useFormStatus` hook. The `disabled` attribute is set to `true` when the form is in a pending state.

By disabling the input during form submission, we prevent users from making further changes until the operation completes. This behavior enhances the overall user experience.

```tsx
import { useFormStatus } from 'react-dom';

const FormTextArea = forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
  function FormTextArea(
    {
      // ...props
    }: FormTextAreaProps,
    ref: Ref<HTMLTextAreaElement>
  ) {
    const { pending } = useFormStatus();

    return (
      <div className='w-full space-y-2'>
        <div className='w-full space-y-1'>
          { /* Label... */ }
          <Textarea 
            ref={ref}
            id={id}
            name={id}
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            required={required}
            disabled={pending || disabled}
            onBlur={onBlur}
            onClick={onClick}
            onChange={onChange}
            onKeyDown={onKeyDown}
            aria-describedby={`${id}-error`}
            className={cn(
              'resize-none shadow-sm ring-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0',
              className
            )}
          />
        </div>
          { /* Form Errors... */ }
      </div>
    );
  }
);
```

### CardForm edit mode

Back in `CardForm`, when in editing mode render the `FormTextArea`.

feat(CardForm): Render FormTextArea in editing mode

`components\card\CardForm.tsx`
```tsx
import FormTextArea from '@/components/form/FormTextArea';

const CardForm = forwardRef<HTMLTextAreaElement, CardFormProps>(({
  listId,
  isEditing,
  disableEditing,
  enableEditing,
}, ref) => {

  if (isEditing) {
    return (
      <form>
        <FormTextArea />
      </form>
    )
  }

  return (
    { /* ... */ }
  )
});
```

style(CardForm): Add padding and spacing to form

```tsx
const CardForm = forwardRef<HTMLTextAreaElement, CardFormProps>(({
  // ...
}, ref) => {

  if (isEditing) {
    return (
      <form className='px-1 py-0.5 m-1 space-y-4'>
        <FormTextArea />
      </form>
    )
  }
```

feat: Add inputs in CardForm edit mode

- Introduce the `FormTextArea` component within `CardForm` to facilitate editing
- Include a hidden input element to store the `listId` for internal reference

feat(CardForm): Pass props to FormTextArea

```tsx
const CardForm = forwardRef<HTMLTextAreaElement, CardFormProps>(({
  // ...
}, ref) => {

  if (isEditing) {
    return (
      <form className='px-1 py-0.5 m-1 space-y-4'>
        <FormTextArea 
          id='title'
          label='title'
          value='title'
          defaultValue='title'
          placeholder="Enter a title for this card..."
          required={false}
          errors={}
          className={}
          onBlur={() => {}}
          onClick={() => {}}
          onChange={() => {}}
          onKeyDown={() => {}}
          ref={ref}
        />
      </form>
    )
  }

}
```

feat: Add hidden input for listId in CardForm

```tsx
const CardForm = forwardRef<HTMLTextAreaElement, CardFormProps>(({
  listId,
  isEditing,
  disableEditing,
  enableEditing,
}, ref) => {

  if (isEditing) {
    return (
      <form className='px-1 py-0.5 m-1 space-y-4'>
        <FormTextArea 
          id='title'
          value='title'
          defaultValue='title'
          placeholder="Enter a title for this card..."
          ref={ref}
        />
        <input 
          hidden
          id='listId'
          name='listId'
          value={listId}
        />
      </form>
    )
  }
```

feat: Add submit and exit buttons to CardForm

- Added an "Add Card" button to submit the input form with the card title
- Included an "Exit" button with an "X" icon to exit editing mode and toggle `CardForm` to display mode

feat: Add submit & toggle buttons in edit mode

- Add a submit button within `CardForm` for form submission
- Add a toggle button to exit editing mode in `CardForm`

```tsx
const CardForm = forwardRef<HTMLTextAreaElement, CardFormProps>(({
  listId,
  isEditing,
  disableEditing,
  enableEditing,
}, ref) => {

  if (isEditing) {
    return (
      <form className='px-1 py-0.5 m-1 space-y-4'>
        <FormTextArea 
          id='title'
          value='title'
          defaultValue='title'
          placeholder="Enter a title for this card..."
          ref={ref}
        />
        <input 
          hidden
          id='listId'
          name='listId'
          value={listId}
        />
        <div className='flex items-center gap-x-1'>
          <FormSubmitButton>
            Add card
          </FormSubmitButton>
          <Button onClick={disableEditing} size='sm' variant='ghost'>
            <X className='h-5 w-5' />
          </Button>
        </div>
      </form>
    )
  }
```

## createCard server action

Make `createCard` folder inside `/actions` and add the following:

1. Schema
2. Types
3. Server Action handler

### createCard schema

feat: Implement Zod schema validation for CreateCard

- Introduce Zod schema validation to ensure data integrity for CreateCard
- Enforce minimum length requirement for 'title' field to enhance data quality

`actions\createCard\createCardSchema.ts`
```ts
import { z } from 'zod';

/**
 * Define the CreateCard object schema.
 * 
 */
export const CreateCard = z.object({
  title: z.string({
    required_error: "Title is required", 
    invalid_type_error: "Title is required", 
  }).min(1, {
    message: "Must be 1 or more characters long.", 
  }),
  boardId: z.string(),
  listId: z.string(),
});
```

### createCard types

Create the types we expect to have for the createCard server action.

feat: Define types for createCard server action

`actions\createCard\createCardTypes.ts`
```ts
import { z } from 'zod';

// Import Card, the expected output type, from Prisma client
import { Card } from '@prisma/client';

// Encapsulate the state of various actions (e.g., fetching data, submitting forms, etc.)
// Provides a structured way to handle errors and manage data flow
import { ActionState } from '@/lib/createServerAction';

// Import the CreateCard schema (validation rules)
import { CreateCard } from './createCardSchema';

// Define the input type based on the CreateCard schema
export type InputType = z.infer<typeof CreateCard>;

// Define the output data type (ActionState) with Card
export type OutputType = ActionState<InputType, Card>;
```

### createCard server action

feat: Implement handler for secure card creation

- Add server-side action handler to process card creation with authorization checks
- Utilize 'auth' for user and organization ID verification to ensure secure transactions
- Integrate 'revalidatePath' to refresh list paths post-update for immediate UI consistency

`actions\createCard\index.ts`
```ts
"use server";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { createServerAction } from "@/lib/createServerAction";
import { database } from "@/lib/database";

import { CreateCard } from "./createCardSchema";
import { InputType, OutputType } from "./createCardTypes";

async function performAction(data: InputType): Promise<OutputType> {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: "Unauthorized",
    };
  }

  const { title, boardId, listId, } = data;

  let card;

  try {
    // Fetch list to create the card in
    const list = await database.list.findUnique({
      where: {
        id: listId,
        board: {
          orgId,
        }
      },
    });

    if (!list) {
      return {
        error: "List not found",
      };
    }

    // Fetch the most recent card in the list to properly assign the newest order to the card
    const mostRecentCard = await database.card.findFirst({
      where: { listId: listId },
      orderBy: { order: "desc" },
      select: { order: true },
    });

    // Get the next order depending on whether a mostRecentCard is present or not
    const nextOrder = mostRecentCard ? mostRecentCard.order + 1 : 1;

    // Create the card in the database
    card = await database.card.create({
      data: {
        title,
        listId,
        order: nextOrder,
      },
    });
    
  } catch (error) {
    return {
      error: "Failed to create card.",
    };
  }

  revalidatePath(`/board/${boardId}`);

  // Return the card
  return {
    data: card,
  };
}

export const createCard = createServerAction(CreateCard, performAction);
```

### Use createCard in CardForm

Back in `CardForm.tsx`, let's quickly fix some compiler errors.

fix: Add placeholder values to FormTextArea props

- Set valid error information for the 'errors' prop
- Provide appropriate CSS class names for the 'className' prop

```tsx
const CardForm = forwardRef<HTMLTextAreaElement, CardFormProps>(({
  listId,
  isEditing,
  disableEditing,
  enableEditing,
}, ref) => {


  if (isEditing) {
    return (
      <form className='px-1 py-0.5 m-1 space-y-4'>
        <FormTextArea 
          id='title'
          label='title'
          value='title'
          defaultValue='title'
          placeholder="Enter a title for this card..."
          required={false}
          errors={{}}
          className={''}
          onBlur={() => {}}
          onClick={() => {}}
          onChange={() => {}}
          onKeyDown={() => {}}
          ref={ref}
        />
```

Next import `useAction` from hooks and `createCard` from actions.

feat: Implement createCard action in CardForm

```ts
import { createCard } from '@/actions/createCard';
import { useServerAction } from '@/hooks/useServerAction';

const CardForm = forwardRef<HTMLTextAreaElement, CardFormProps>(({
  listId,
  isEditing,
  disableEditing,
  enableEditing,
}, ref) => {

  const { executeServerAction: executeCreateCard } = useServerAction(createCard);
```

Let's also destructure `fieldErrors` and pass it to `errors` prop of `FormTextArea`.

feat(CardForm): Add error handling to FormTextArea

```tsx
const CardForm = forwardRef<HTMLTextAreaElement, CardFormProps>(({
  listId,
  isEditing,
  disableEditing,
  enableEditing,
}, ref) => {
  const { executeServerAction: executeCreateCard, fieldErrors } = useServerAction(createCard);

  if (isEditing) {
    return (
      <form>
        <FormTextArea
          // ...props
          errors={fieldErrors}
        />
```

Next enhance the user experience by allowing the user to exit edit mode within CardForm when they either press the escape key or outside click.

## Improve user experience in CardForm

Recap: the `CardForm` component provides a form for creating new cards within a list. It includes functionality for handling user input, such as pressing the 'Escape' key to exit editing mode, and submitting the form when the 'Enter' key is pressed (unless the 'Shift' key is also held down).

feat: Enhance UX with Escape key & outside click handling

feat: Add 'Escape' key functionality to exit edit mode

- Implement an escape key event handler within CardForm to enhance keyboard accessibility
- The `handleEscapeKey` function listens for the 'Escape' key press, allowing users to quickly exit editing mode without mouse interaction
- This feature contributes to a more intuitive and efficient user experience by streamlining the editing process

feat: Add formRef and disable editing on outside click

```tsx
import React, { ElementRef, forwardRef, useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

const CardForm = forwardRef<HTMLTextAreaElement, CardFormProps>(({
  listId,
  isEditing,
  disableEditing,
  enableEditing,
}, ref) => {
  const formRef = useRef<ElementRef<"form">>(null);

  // Custom hook that handles clicks outside a specified element.
  // Disable editing when user clicks outside the form
  useOnClickOutside(formRef, disableEditing);
```

Let's wire up the event listener for the key. Import and use the `useEventListener` hook and pass in `'keydown'` and the key handler.

feat: Add keydown event handling for Escape key

```tsx
import { useEventListener, useOnClickOutside } from 'usehooks-ts';

const CardForm = forwardRef<HTMLTextAreaElement, CardFormProps>(({
  listId,
  isEditing,
  disableEditing,
  enableEditing,
}, ref) => {
  const formRef = useRef<ElementRef<"form">>(null);

  const { executeServerAction: executeCreateCard } = useServerAction(createCard);

  function handleEscapeKey(event: KeyboardEvent) {
    if (event.key === "Escape") {
      disableEditing();
    }
  }

  useOnClickOutside(formRef, disableEditing);

  // Custom hook that attaches event listeners to DOM elements, the window, or media query lists.
  // Listen for the 'keydown' event on the entire document (window level)
  useEventListener('keydown', handleEscapeKey);
```

#### KeyboardEvent general vs KeyboardEvent React type

Note that there is a type issue for `KeyboardEvent` from react and the general Keyboard event.

If you import `KeyboardEvent` from React you will not be able to pass it down to the `useEventListener` hook. Instead, do not import it and use the general `KeyboardEvent`.

The error message states that the argument of type `(event: KeyboardEvent<Element>) => void` (referring to your `handleEscapeKey` function) is not assignable to a parameter of type `(event: KeyboardEvent) => void`.

fix: Correct event type for Escape key handler

```tsx
// Remove the following import:
// import { KeyboardEvent } from 'react';

// ...

  function handleEscapeKey(event: KeyboardEvent) {
    if (event.key === "Escape") {
      disableEditing();
    }
  }

  useOnClickOutside(formRef, disableEditing);

  // (event: KeyboardEvent) => void
  useEventListener('keydown', handleEscapeKey);
```

Here is an indepth comparison:

The **`KeyboardEvent`** type in React is specifically tailored for handling keyboard events within React components. It extends the more general **`KeyboardEvent`** type available in standard JavaScript and the DOM.

Here are the key differences:

1. **Scope**:
    - **React's `KeyboardEvent`**: It is specific to React components and is used within event handlers for keyboard-related interactions within React applications.
    - **General `KeyboardEvent`**: It is a standard DOM event type available globally in JavaScript and can be used outside of React, such as in vanilla JavaScript or other frameworks.

2. **Event Target**:
    - **React's `KeyboardEvent`**: It is associated with a specific React component (e.g., a text input, textarea, or custom component) where the event occurred.
    - **General `KeyboardEvent`**: It can be associated with any DOM element (e.g., window, document, or specific HTML elements).

3. **Properties and Methods**:
    - **React's `KeyboardEvent`**: It includes additional properties and methods specific to React components, such as `target`, `currentTarget`, and React-specific event handling methods.
    - **General `KeyboardEvent`**: It provides standard properties like `key`, `keyCode`, `shiftKey`, `ctrlKey`, etc., which are common across all DOM elements.

4. **Usage**:
    - **React's `KeyboardEvent`**: You'll encounter it mainly when working with React components, handling keyboard events within JSX (e.g., in event handlers like `onKeyDown`).
    - **General `KeyboardEvent`**: You'll use it in broader contexts, such as vanilla JavaScript event listeners or when interacting directly with the DOM.

In summary, while both types represent keyboard events, the React-specific `KeyboardEvent` is designed for use within React components, while the general `KeyboardEvent` is more versatile and applicable across different contexts.

### Override default behavior of textarea for the escape key

Add escape key handler for textarea in CardForm

feat: Override textarea default behavior for Enter key

```tsx
import React, { ElementRef, KeyboardEvent, KeyboardEventHandler, forwardRef, useRef } from 'react';

const CardForm = forwardRef<HTMLTextAreaElement, CardFormProps>(({
  listId,
  isEditing,
  disableEditing,
  enableEditing,
}, ref) => {

  const formRef = useRef<ElementRef<"form">>(null);

  /**
   * Handles the "Enter" key press inside the TextArea.
   * Overrides the default behavior (new line) to submit the form,
   * unless the user is also holding the "Shift" key.
   * @param event The keyboard event
   */
  const onTextAreaKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      formRef.current?.requestSubmit();
    }
  }
```

Now assign this handler to the `FormTextArea` component.

feat: Assign onKeyDown prop to FormTextArea

```tsx
const CardForm = forwardRef<HTMLTextAreaElement, CardFormProps>(({
  // ...
}, ref) => {

  if (isEditing) {
    return (
      <form 
        action={onSubmit}
        ref={formRef}
        className='px-1 py-0.5 m-1 space-y-4'
      >
        <FormTextArea
          // ...props
          onKeyDown={onTextAreaKeyDown}
          ref={ref}
        />
```

### Implement CardForm submission logic

The `onSubmit` function extracts relevant form data (such as `title`, `listId`, and `boardId`) and executes the `createCard` server action.

The CardForm component relies on this function to enable card creation functionality within the application.

We need the following data to be able to submit the form:
- `title` which is taken from the user input
- `listId` which is taken from the hidden input element
- `boardId` can be taken in two ways
  1. Create a hidden input that stores the `boardId`
  2. Get `boardId` directly from params.

First let's try to get `boardId` as `formData`

feat(CardForm): Add form submission handler for creating cards

```tsx
  function onSubmit(formData: FormData) {
    const title = formData.get('title') as string;
    const listId = formData.get('listId') as string;
    const boardId = formData.get('boardId') as string;

    executeCreateCard({ title, listId, boardId });
  }

    if (isEditing) {
    return (
      <form>
        <FormTextArea
          // ...props
        />
        <input
          hidden
          id='listId'
          name='listId'
          value={listId}
        />
        <input
          hidden
          id='boardId'
          name='boardId'
          value={params.boardId}
        />
        { /* ... */ }
      </form>
    )
  }
```

Or get `boardId` directly from `useParams` hook.

refactor: Improve submit handler for CardForm

In this refactored version, import useParams from next/navigation and use it to retrieve the boardId parameter. This ensures consistency and improves code readability.

feat(CardForm): Retrieve boardId from params

In this enhancement, we utilize the `useParams` hook from `next/navigation` to obtain the `boardId` parameter. This ensures consistency and simplifies the retrieval process within the `CardForm` component.

```tsx
import { useParams } from 'next/navigation';

const CardForm = forwardRef<HTMLTextAreaElement, CardFormProps>(({
  listId,
  isEditing,
  disableEditing,
  enableEditing,
}, ref) => {
  const params = useParams();

  function onSubmit(formData: FormData) {
    const title = formData.get('title') as string;
    const listId = formData.get('listId') as string;
    const boardId = params.boardId as string;

    executeCreateCard({ title, listId, boardId });
  }

}
```

#### Side note: Assign the props or Wire up the props?

Both **"Assign the props to form"** and **"Wire up the props to form"** are valid phrasings, but they convey slightly different meanings:

1. **Assign the props to form**:
   - This phrasing suggests that you are directly setting the props (such as `listId`, `isEditing`, etc.) on the form component.
   - It emphasizes the act of providing the necessary data to the form.

2. **Wire up the props to form**:
   - This phrasing implies a more dynamic process. It suggests that you are connecting or linking the props to the form's behavior.
   - It emphasizes the interaction between the props and the form's functionality.

Choose the one that best aligns with the context and your intention in your code. Both convey the idea of passing props to the form, but the second option adds a layer of dynamic behavior. 

#### Connect the ref and submit behavior to CardForm component in edit mode

Next let's wire up the formRef and submit handler for the form when in edit mode.

feat: Set up formRef and submit handler for form

```tsx
const CardForm = forwardRef<HTMLTextAreaElement, CardFormProps>(({
  listId,
  isEditing,
  disableEditing,
  enableEditing,
}, ref) => {
  const formRef = useRef<ElementRef<"form">>(null);

    function onSubmit(formData: FormData) {
      // ...
    }

  if (isEditing) {
    return (
      <form 
        action={onSubmit}
        ref={formRef}
        className='px-1 py-0.5 m-1 space-y-4'
      >
```

### CardForm success and error callbacks

Import toast from sonner, then add the `onSuccess` and `onError` callback functions.

Implement toast notifications in CardForm for success and error callbacks

feat: Add success & error handling in CardForm

```tsx
import { toast } from 'sonner';

const CardForm = forwardRef<HTMLTextAreaElement, CardFormProps>(({
  // ...props
}, ref) => {
  const formRef = useRef<ElementRef<"form">>(null);

  const { executeServerAction: executeCreateCard, fieldErrors } = useServerAction(createCard, {
    onSuccess: (data) => {
      toast.success(`Card "${data.title} created.`);
      formRef.current?.reset(); // Clear the form after success
    },
    onError: (error) => {
      toast.error(error);
    },
  });
```

### Test CardForm

Let's run a quick test to create a card.

test: Verify card creation process

1. Navigate to a board page and create a list.
2. Click on the `CardForm` to enable editing mode.
3. The `CardForm` converts to a `TextFormArea` where we can submit the title of the card.
4. Add a title to the card and submit it using either of the following methods:
   - Press the Enter key.
   - Click the "Add card" button.
5. Observe that a toast notification appears, indicating that the card has been successfully created.
6. Open your terminal and run the following command to launch Prisma Studio:
   ```sh
   npx prisma studio
   ```
7. Verify that the newly created card is visible in the database.

These steps ensure that the card creation process functions as expected and that the card data is correctly stored in the database.

## Card display

docs: Document the process for displaying cards

Now to render the cards in the database.

Let's analyze the order in which the cards will be rendered. 

- In `boardIdPage` we fetch the `lists` which `includes` the `cards`
- Pass that `lists` data down to `ListContainer` component

`app\(app)\(dashboard)\board\[boardId]\page.tsx`
```tsx
export default async function BoardIdPage({
  params
}: BoardIdPageProps) {
  // ...

  const lists = await database.list.findMany({
    where: {
      boardId: params.boardId,
      board: {
        orgId,
      },
    },
    include: {
      cards: {
        orderBy: {
          order: 'asc',
        },
      },
    },
    orderBy: {
      order: 'asc',
    }
  });

    return (
    <div className='h-full p-4 overflow-x-auto'>
      <ListContainer 
        boardId={params.boardId}
        data={lists}
      />
    </div>
  )
}
```

- Now in `ListContainer`, we have access to the `data` which consists the `ListOfCards`

`components\list\ListContainer.tsx`
```tsx
interface ListContainerProps {
  boardId: string;
  data: ListWithCards[];
}

export default function ListContainer({
  boardId,
  data,
}: ListContainerProps) {
  const [orderedListData, setOrderedListData] = useState(data);

  return (
    <ol className='flex h-full gap-x-3'>
      {
        orderedListData.map((list, index) => {
          return (
            <ListItem
              key={list.id}
              index={index}
              data={list}
            />
          )
        })
      }
      <ListForm />
      <div className='flex-shrink-0 w-1' />
    </ol>
  )
}
```

- But we pass the `data` prop again to the `ListItem` component

`components\list\ListItem.tsx`
```tsx
"use client";

import React, { ElementRef, useRef, useState } from 'react';

import { ListWithCards } from '@/types/types';
import ListHeader from '@/components/list/ListHeader';
import CardForm from '@/components/card/CardForm';

interface ListItemProps {
  data: ListWithCards;
  index: number;
}

export default function ListItem({
  data,
  index,
}: ListItemProps) {
  const textAreaRef = useRef<ElementRef<"textarea">>(null);
  const [isEditing, setIsEditing] = useState(false);

  function disableEditing() {
    setIsEditing(false);
  }

  function enableEditing() {
    setIsEditing(true);
    setTimeout(() => {
      textAreaRef.current?.focus();
    });
  }

  return (
    <li className='h-full w-72 shrink-0 select-none'>
      <div className='w-full rounded-md bg-[#f1f2f4] shadow-md pb-2'>
        <ListHeader 
          data={data} 
          handleAddCardToList={enableEditing}
        />
        <CardForm
          ref={textAreaRef}
          listId={data.id}
          isEditing={isEditing}
          enableEditing={enableEditing}
          disableEditing={disableEditing}
        />
      </div>
    </li>
  )
}
```

Here we should render a `ol` element above the `CardForm`. Then map out the cards from the `data` prop in a `li` element for now. We want to add conditionally styles to the `ol` if the `data` contains at least 1 card, the conditional styles will add a top margin.

feat(ListItem): Render cards using an ordered list

In the `ListItem` component, we've introduced an ordered list (`ol`) to display the cards from the `data.cards` prop. The list dynamically adjusts its styling based on whether there are any cards present.

```tsx
import { cn } from '@/lib/utils';

export default function ListItem({
  data,
  index,
}: ListItemProps) {

  return (
    <li className='h-full w-72 shrink-0 select-none'>
      <div className='w-full rounded-md bg-[#f1f2f4] shadow-md pb-2'>
        <ListHeader 
          data={data} 
          handleAddCardToList={enableEditing}
        />

        <ol
          className={cn(
            'flex flex-col gap-y-2 mx-1 px-1 py-0.5',
            data.cards.length > 0 ? 'mt-2' : 'mt-0'
          )}
        >
          {data.cards.map((card, index) => (
            <li
              key={card.id} 
            >
              {card.title}
            </li>
          ))}
        </ol>

        <CardForm
          ref={textAreaRef}
          listId={data.id}
          isEditing={isEditing}
          enableEditing={enableEditing}
          disableEditing={disableEditing}
        />
      </div>
    </li>
  )
}
```

### CardItem component

Create a `CardItem.tsx` in `components/cards`.

Then refactor `li` element with `CardItem` within `ListItem`. 

refactor: Optimize ListItem by utilizing CardItem for card rendering

refactor(ListItem): Use CardItem for card rendering

In the `ListItem` component, we've replaced the individual `<li>` elements with the `CardItem` component to improve code organization and readability. This change ensures consistent rendering of cards within the list.

```tsx
import CardItem from '@/components/card/CardItem';

export default function ListItem({
  data,
  index,
}: ListItemProps) {

  return (
    <li className='h-full w-72 shrink-0 select-none'>
      <div className='w-full rounded-md bg-[#f1f2f4] shadow-md pb-2'>
        { /* List Header... */}

        <ol
          className={cn(
            'flex flex-col gap-y-2 mx-1 px-1 py-0.5',
            data.cards.length > 0 ? 'mt-2' : 'mt-0'
          )}
        >
          {data.cards.map((card, index) => (
            <CardItem
              key={card.id}
              data={card}
              index={index}
            />
          ))}
        </ol>
```

Let's develop the client component `CardItem`.

It will have the props `data` and `index`.

feat: Define prop interface for CardItem

```tsx
"use client";

import { Card } from '@prisma/client';
import React from 'react';

interface CardItemProps {
  data: Card,
  index: number;
}

export default function CardItem({
  data,
  index,
}: CardItemProps) {
  return (
    <div>CardItem</div>
  )
}
```

#### CardItem output

Let's create a `div` that represents our cards. We want the styles to match the `ListItem`. Also render the card title within.

feat: Improve visual appearance of CardItem

Improvements:
- Increased font size for better readability
- Added a subtle shadow effect for depth
- Rounded the corners of the container
- Introduced a hover effect that displays a black border

These enhancements ensures a more visually appealing and interactive user experience.

style: Add dynamic styling to CardItem component

Applies the following styles:
- Padding: 2 units on the y-axis and 3 units on the x-axis
- Background color: White
- Font size: Small (text-sm)
- Box shadow: A subtle shadow effect
- Rounded corners: A rounded border
- Border: 2-pixel width (initially transparent, but turns black on hover)

The CardItem component now follows the same styling as the parent component ListItem and displays the card title from the `data` prop within the styled container.

```tsx
export default function CardItem({
  data,
  index,
}: CardItemProps) {
  return (
    <div 
      className='py-2 px-3 bg-white text-sm shadow-sm rounded-md truncate border-2 border-transparent hover:border-black'
    >
      {data.title}
    </div>
  )
}
```

##### CardItem design choice (button vs. div)

---

docs: Discuss the design choice for CardItem

Initiates a discussion regarding whether to use a button or a div for the CardItem component. The decision will impact the component's behavior and styling.

---

The behavior we want is to convert `CardItem` into a clickable and draggable element. We can do this in two ways:

1. Assign the `role` attribute in `div` to a "button"
   
   ```tsx
   export default function CardItem({
     data,
     index,
   }: CardItemProps) {
     return (
       <div 
         role="button"
         className='py-2 px-3 bg-white text-sm shadow-sm rounded-md truncate border-2 border-transparent hover:border-black'
       >
         {data.title}
       </div>
     )
   }
   ```

2. Render an actual button

   ```tsx
   export default function CardItem({
     data,
     index,
   }: CardItemProps) {
     return (
       <button 
         className='py-2 px-3 bg-white text-sm shadow-sm rounded-md truncate border-2 border-transparent hover:border-black'
       >
         {data.title}
       </button>
     )
   }
   ```

###### div that behaves like a button, using role attribute

Let's go into detail what the `role` attribute indicates.

The `role="button"` attribute in the `<div>` element serves a **semantic purpose** rather than directly influencing its style or event handling. Let me explain:

1. **Semantic Purpose**:
   - By adding `role="button"`, you're indicating to **accessibility software** (such as screen readers) that this `<div>` element behaves like a button.
   - It helps assistive technologies understand the purpose of the element, even though it's not a native `<button>` element.
   - Essentially, it conveys that the `<div>` should be treated as a button for users with disabilities.

2. **Styling and Event Handling**:
   - The `role="button"` attribute itself does not directly impact the styling or event handling of the `<div>`.
   - Event handling (such as click events) can still be added using JavaScript or React event listeners, just like any other element.

3. **Alternative Approach**:
   - While using `role="button"` is valid, consider using an actual `<button>` element if your intention is to create a functional button.
   - Native buttons have built-in keyboard accessibility and handle click events by default.
   - If you need custom styling, you can apply CSS classes to the `<button>` element as well.

In summary, `role="button"` enhances accessibility but doesn't directly affect styling or event handling. 

feat: Assign button role to CardItem component

In this commit, the CardItem component is given a semantic role of "button" using the `role="button"` attribute. This enhances accessibility and indicates that the component behaves like a button, even though it's implemented as a `<div>`.

```tsx
export default function CardItem({
  data,
  index,
}: CardItemProps) {
  return (
    <div 
      role="button"
      className='py-2 px-3 bg-white text-sm shadow-sm rounded-md truncate border-2 border-transparent hover:border-black'
    >
      {data.title}
    </div>
  )
}
```

## Drag and Drop functionality

To implement drag and drop functionality, will use the package @hello-pangea/dnd.

- [hello-pangea/dnd | GitHub reference](https://github.com/hello-pangea/dnd)
- [hello-pangea/dnd | npm reference](https://www.npmjs.com/package/@hello-pangea/dnd)

feat: Install @hello-pangea/dnd (v16.6.0)

In this commit, the following package is added to the project's dependencies:
- `@hello-pangea/dnd` (version 16.6.0)

This package provides a beautiful and accessible drag-and-drop experience for lists in React.

```sh
npm i @hello-pangea/dnd
```

### Sample drag-and-drop code

We can see some sample code on howw to incorporate dnd functionality to our lists.

- [dnd examples | Github reference](https://github.com/hello-pangea/dnd/blob/main/docs/about/examples.md)

Let's take a look at an example code 

-[Sample for horizontal list @hell-pangea/dnd](https://codesandbox.io/p/sandbox/mmrp44okvj?file=%2Findex.js)

`index.js`
```js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// fake data generator
const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`,
  }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 ${grid}px 0 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  display: 'flex',
  padding: grid,
  overflow: 'auto',
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: getItems(6),
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items,
    });
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
              {...provided.droppableProps}
            >
              {this.state.items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

// Put the thing into the DOM!
ReactDOM.render(<App />, document.getElementById('root'));
```

### Implement drag-and-drop functionality to ListContainer

To implement Drag-and-drop functionality to `ListContainer`, wrap it with `DragDropContext` followed by `Droppable`.

feat: Integrate drag-and-drop functionality into ListContainer

In this commit, the ListContainer component is wrapped with the DragDropContext and Droppable components from the @hello-pangea/dnd package. This enables beautiful and accessible drag-and-drop interactions for lists within the application.

```tsx
import { DragDropContext, Droppable } from '@hello-pangea/dnd';

export default function ListContainer({
  boardId,
  data,
}: ListContainerProps) {
  const [orderedListData, setOrderedListData] = useState(data);

  return (
    <DragDropContext>
      <Droppable>
      <ol className='flex h-full gap-x-3'>
        {
          orderedListData.map((list, index) => {
            return (
              <ListItem
                key={list.id}
                index={index}
                data={list}
              />
            )
          })
        }
        <ListForm />
        <div className='flex-shrink-0 w-1' />
      </ol>
      </Droppable>
    </DragDropContext>
  )
}
```

Let's pass the necessary props to `DragDropContextt` and `Droppable` components. Also wrap the `ol` by a `Droppable` container with `provided`.

feat: Add DragDropContext and Droppable props to ListContainer

This commit adds the necessary props for using the DragDropContext and Droppable components from the '@hello-pangea/dnd' library. The `onDragEnd` callback is also included.

The `ListContainer` component now accepts the following props:
- `boardId: string`: The ID of the board.
- `data: ListWithCards[]`: An array of list data with associated cards.

Additionally, the component renders a list of ordered data, each wrapped in a `Droppable` container. The `ListItem` component is used to display individual list items, and a `ListForm` component is included for adding new items.

```tsx
export default function ListContainer({
  boardId,
  data,
}: ListContainerProps) {

  return (
    <DragDropContext
      onDragEnd={() => { }}
    >
      <Droppable
        direction='horizontal'
        droppableId='lists'
        type='list'
      >
        {(provided, snapshot) => (
          <ol className='flex h-full gap-x-3'>
            {
              orderedListData.map((list, index) => {
                return (
                  <ListItem
                    key={list.id}
                    index={index}
                    data={list}
                  />
                )
              })
            }
            <ListForm />
            <div className='flex-shrink-0 w-1' />
          </ol>
        )}
      </Droppable>
    </DragDropContext>
  )
}
```

feat: Add props to ol and render provider placeholder

- Pass necessary props to the `<ol>` element within the `<Droppable>` component.
- Render the `<Provider>` placeholder using the `provided.placeholder` prop.

```tsx
export default function ListContainer({
  boardId,
  data,
}: ListContainerProps) {
  const [orderedListData, setOrderedListData] = useState(data);

  return (
    <DragDropContext
      onDragEnd={() => { }}
    >
      <Droppable
        direction='horizontal'
        droppableId='lists'
        type='list'
      >
        {(provided, snapshot) => (
          <ol
            ref={provided.innerRef}
            {...provided.droppableProps}
            className='flex h-full gap-x-3'
          >
            {
              orderedListData.map((list, index) => {
                return (
                  <ListItem
                    key={list.id}
                    index={index}
                    data={list}
                  />
                )
              })
            }
            {provided.placeholder}
            <ListForm />
            <div className='flex-shrink-0 w-1' />
          </ol>
        )}
      </Droppable>
    </DragDropContext>
  )
}
```

### Implement drag-and-drop behavior to ListItem

- import `Draggable` and `Droppable` from `@hello-pangea/dnd`
- Wrap the `ListItem` with `Draggable` component
  - Pass the `draggableId` and `index` props to `Droppable`

feat: Add draggable behavior to ListItem

```tsx
import { Draggable, Droppable } from '@hello-pangea/dnd';

interface ListItemProps {
  data: ListWithCards;
  index: number;
}

export default function ListItem({
  data,
  index,
}: ListItemProps) {
  // ...

  return (
    <Draggable
      draggableId={data.id}
      index={index}
    >
      <li className='h-full w-72 shrink-0 select-none'>
        <div className='w-full rounded-md bg-[#f1f2f4] shadow-md pb-2'>
          <ListHeader
            data={data}
            handleAddCardToList={enableEditing}
          />
          <ol
            className={cn(
              'flex flex-col gap-y-2 mx-1 px-1 py-0.5',
              data.cards.length > 0 ? 'mt-2' : 'mt-0'
            )}
          >
            {data.cards.map((card, index) => (
              <CardItem
                key={card.id}
                data={card}
                index={index}
              />
            ))}
          </ol>
          <CardForm
            ref={textAreaRef}
            listId={data.id}
            isEditing={isEditing}
            enableEditing={enableEditing}
            disableEditing={disableEditing}
          />
        </div>
      </li>
    </Draggable>
  )
}
```

Then to implement draggable behavior, we have to add `provided` and the props to the `li` and `div` element. So now when user grabs on the `div` they will activate the drag-and-drop.

feat: Implement draggable behavior in ListItem

```tsx
  return (
    <Draggable
      draggableId={data.id}
      index={index}
    >
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          className='h-full w-72 shrink-0 select-none'
        >
          <div 
            {...provided.dragHandleProps}
            className='w-full rounded-md bg-[#f1f2f4] shadow-md pb-2'
          >
            <ListHeader
              data={data}
              handleAddCardToList={enableEditing}
            />
            <ol
              className={cn(
                'flex flex-col gap-y-2 mx-1 px-1 py-0.5',
                data.cards.length > 0 ? 'mt-2' : 'mt-0'
              )}
            >
              {data.cards.map((card, index) => (
                <CardItem
                  key={card.id}
                  data={card}
                  index={index}
                />
              ))}
            </ol>
            <CardForm
              ref={textAreaRef}
              listId={data.id}
              isEditing={isEditing}
              enableEditing={enableEditing}
              disableEditing={disableEditing}
            />
          </div>
        </li>
      )}
    </Draggable>
  )
```

Let's take a closer look at the code snippet around `Draggable`

```tsx
return (
  <Draggable
    draggableId={data.id} // Unique ID for the draggable item
    index={index} // Position index of the item in the list
  >
    {(provided) => (
      <li
        ref={provided.innerRef} // Reference to the DOM element for the draggable item
        {...provided.draggableProps} // Props for handling drag behavior
        className='h-full w-72 shrink-0 select-none'
      >
        <div 
          {...provided.dragHandleProps} // Props for the drag handle (e.g., a grabber icon)
          className='w-full rounded-md bg-[#f1f2f4] shadow-md pb-2'
        >
          {/* Your content goes here */}
        </div>
      </li>
    )}
  </Draggable>
);
```

- `Draggable`: Wraps the entire draggable item and provides necessary functionality for dragging.
  - `draggableId`: A unique identifier for the draggable item.
  - `index`: The position of the item in the list.
- `provided.innerRef`: A reference to the DOM element that should be moved when dragging.
- `provided.draggableProps`: Props for handling drag behavior (e.g., setting the position).
- `provided.dragHandleProps`: Props for the drag handle (e.g., a grabber icon) to initiate dragging.
- `className`: Styling classes for the draggable item.
- Inside the `div`, you can add your custom content (e.g., list items, forms, etc.).

#### Droppable component

Next right below `ListHeader`, wrap the `ol` with a `Droppable` component.

```tsx
  return (
    <Draggable
      draggableId={data.id}
      index={index}
    >
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          className='h-full w-72 shrink-0 select-none'
        >
          <div
            {...provided.dragHandleProps}
            className='w-full rounded-md bg-[#f1f2f4] shadow-md pb-2'
          >
            <ListHeader
              data={data}
              handleAddCardToList={enableEditing}
            />
            <Droppable>
              <ol
                className={cn(
                  'flex flex-col gap-y-2 mx-1 px-1 py-0.5',
                  data.cards.length > 0 ? 'mt-2' : 'mt-0'
                )}
              >
                {data.cards.map((card, index) => (
                  <CardItem
                    key={card.id}
                    data={card}
                    index={index}
                  />
                ))}
              </ol>
            </Droppable>
            {/* CardForm */}
          </div>
        </li>
      )}
    </Draggable>
  )
}
```

Now zone in on `Droppable`and wrap `ol` with `provided`.

feat: Wrap ordered list with Droppable component

Added a `Droppable` component around the existing ordered list (ol) in the ListItem component. The provided callback function renders each card item within the list.

Changes:
- Wrapped the `<ol>` element with `<Droppable>` component.
- Used the provided callback function to map over the `data.cards` array and render each `CardItem`.

```tsx
<Droppable
  droppableId={data.id}
  type='card'
>
  {(provided) => (
    <ol
      className={cn(
        'flex flex-col gap-y-2 mx-1 px-1 py-0.5',
        data.cards.length > 0 ? 'mt-2' : 'mt-0'
      )}
    >
      {data.cards.map((card, index) => (
        <CardItem
          key={card.id}
          data={card}
          index={index}
        />
      ))}
    </ol>
  )}
</Droppable>
```

feat: Add droppable functionality to ListItem

Now we can manage the drag-and-drop behavior through the `provided` object. 

Add the following to `ol`:
- `provided.innerRef`
- `provided.droppableProps`

Then also render the `provided.placeholder` right before the end of `ol`
  
```tsx
<Droppable
  droppableId={data.id}
  type='card'
>
  {(provided) => (
    <ol
      ref={provided.innerRef}
      {...provided.droppableProps}
      className={cn(
        'flex flex-col gap-y-2 mx-1 px-1 py-0.5',
        data.cards.length > 0 ? 'mt-2' : 'mt-0'
      )}
    >
      {data.cards.map((card, index) => (
        <CardItem
          key={card.id}
          data={card}
          index={index}
        />
      ))}
      {provided.placeholder}
    </ol>
  )}
</Droppable>
```

docs(ListItem): Add details on droppable behavior

Let's break down the `Droppable` component and the purpose of the `provided` props in the context of the provided code snippet:

1. **`Droppable` Component**:
   - The `<Droppable>` component is part of a drag-and-drop library (such as `@hello-pangea/dnd`).
   - It defines an area where draggable items (in this case, cards) can be dropped.
   - The `droppableId` prop specifies a unique identifier for this droppable area.

2. **`provided` Object**:
   - The `provided` object is automatically passed by the drag-and-drop library to the function provided as a child of `<Droppable>`.
   - It contains various properties and functions that help manage the drag-and-drop behavior.

3. **Properties within `provided`**:
   - `innerRef`: A reference to the DOM element that represents the droppable area. In this case, it refers to the `<ol>` element.
   - `droppableProps`: An object containing additional props that should be spread onto the droppable element (in this case, the `<ol>`).
   - `placeholder`: A placeholder element that appears when a draggable item is being moved within the droppable area. It helps maintain the layout during drag-and-drop operations.

4. **Usage in the Code**:
   - `ref={provided.innerRef}`: This attaches the `innerRef` to the `<ol>` element, allowing the drag-and-drop library to manage its position and interactions.
   - `{...provided.droppableProps}`: This spreads any additional props (such as event listeners) onto the `<ol>` element.
   - `{provided.placeholder}`: This renders the placeholder element within the `<ol>` during drag-and-drop operations.

Overall, the `provided` object ensures smooth integration with the drag-and-drop system, allowing you to customize the behavior of the droppable area. It's a crucial part of creating interactive and responsive UIs for reordering items. 

### Drag-and-drop testing

At this point, the drag and drop functionality of the UI is somewhat working. 

We can:
- Drag a List to a different spot (change its order)

However, due to the absence of an implemented `onDragEnd` function in `ListContainer`, no visual changes occur in the UI after completing the drag operation.

- Another problem is that individual cards cannot be dragged independently; instead, the entire list moves when dragging.

Let's also add a few more tests such as
- Add a new card
- Add a new list
- Do server actions create a resource in the database?
- Does edit mode work in various components?
- Does dragging hinder previous operations?
  
### Draggable cards

To make cards draggable we need to set it up in `CardItem`.

feat: Wrap CardItem with Draggable component

```tsx
"use client";

import React from 'react';
import { Draggable, Droppable } from '@hello-pangea/dnd';

import { Card } from '@prisma/client';

interface CardItemProps {
  data: Card,
  index: number;
}

export default function CardItem({
  data,
  index,
}: CardItemProps) {
  return (
    <Draggable>
      <div
        role="button"
        className='py-2 px-3 bg-white text-sm shadow-sm rounded-md truncate border-2 border-transparent hover:border-black'
      >
        {data.title}
      </div>
    </Draggable>
  )
}
```

feat: Pass draggableId and provided object to CardItem

```tsx
export default function CardItem({
  data,
  index,
}: CardItemProps) {
  return (
    <Draggable
      draggableId={data.id}
      index={index}
    >
      {(provided) => (
        <div
          role="button"
          className='py-2 px-3 bg-white text-sm shadow-sm rounded-md truncate border-2 border-transparent hover:border-black'
        >
          {data.title}
        </div>
      )}
    </Draggable>
  )
}
```

Now add the `provided` properties to the `div` to enable drag functionality.

feat: Enable card dragging within lists

```tsx
export default function CardItem({
  data,
  index,
}: CardItemProps) {
  return (
    <Draggable
      draggableId={data.id}
      index={index}
    >
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          role="button"
          className='py-2 px-3 bg-white text-sm shadow-sm rounded-md truncate border-2 border-transparent hover:border-black'
        >
          {data.title}
        </div>
      )}
    </Draggable>
  )
}
```

Now cards can be draggable vertically within a list.

We can test if this change has affected these behaviors:

- Edit a card
- Add a card
- Submit a card
- Click on ListOptions

## Handle drag completion

To change the actual order of cards and lists we need to implement the `onDragEnd`.

In `ListContainer`, we have the `DragContext`.

```tsx
export default function ListContainer({
  boardId,
  data,
}: ListContainerProps) {
  const [orderedListData, setOrderedListData] = useState(data);

  return (
    <DragDropContext
      onDragEnd={() => { }}
    >
```

Let's define a function that reorders the elements in an array. This function will reorder based on indexes.

feat: Add reorder function for list reordering

This commit adds the `reorder` function to the `ListContainer` component. The function allows elements within an array to be moved from one position to another. It is used for reordering lists of cards on a board.

```tsx
/**
 * Reorders elements in an array by moving an element from one position to another.
 * @param list An array of elements.
 * @param startIndex The index of the element to be moved.
 * @param endIndex The target index where the element should be placed.
 * @returns A new array with the reordered elements.
 */
function reorder<Type>(list: Type[], startIndex: number, endIndex: number): Type[] {
  // Create a shallow copy of the input array
  const result = Array.from(list);

  // Remove the element at startIndex
  const [removed] = result.splice(startIndex, 1);

  // Insert the removed element back into the array at endIndex
  result.splice(endIndex, 0, removed);

  // Return the modified array
  return result;
}
```

Next let's use the `orderedListData` state and call the setter function inside a `useEffect`. We will pass in `data`.

feat: Initialize orderedListData in ListContainer

This commit adds the import statement for `useEffect` and initializes the `orderedListData` state variable in the `ListContainer` component. The `useEffect` hook is used to update `orderedListData` whenever the `data` prop changes.

Details:
- Imported `useEffect` from React.
- Created a state variable `orderedListData` using `useState`.
- The `useEffect` hook updates `orderedListData` with the latest `data` prop value.

```tsx
import React, { useEffect, useState } from 'react';

export default function ListContainer({
  boardId,
  data,
}: ListContainerProps) {
  const [orderedListData, setOrderedListData] = useState(data);

  useEffect(() => {
    setOrderedListData(data);
  }, [data]);
```

Now the `orderedListData` updates on every render.

### Implement onDragEnd

Now to implement the `onDragEnd`, create a function with the same name and assign it to the `DragDropContext`.

```tsx
export default function ListContainer({
  boardId,
  data,
}: ListContainerProps) {
  const [orderedListData, setOrderedListData] = useState(data);

  useEffect(() => {
    setOrderedListData(data);
  }, [data]);

  /**
   * Handle drag completion for lists and cards
   * @param result contains info on destination, source, and type of card or list
   */
  function onDragEnd(result: any) {
    // TODO
  }

  // ...
  return (
    <DragDropContext
      onDragEnd={onDragEnd}
    >
```

### Drag completion logic

Let's analyze the logic by considering different cases. When a user drags a card or list, the behavior depends on the destination, source, and type of data (whether it's a card or a list). Here's a breakdown of the scenarios:

1. **No Destination to Drag To**:
   - If there's no valid destination (e.g., dragging outside the droppable area), we handle this case appropriately.
2. **Dropped into the Same Position**:
   - If the item is dropped back into the same position within the same droppable area, we avoid unnecessary reordering.
3. **User moves a list**

4. **Reordering Within the Same List**:
   - When the drag occurs within the same list, we reorder the list data based on the drag result.

feat: Handle no destination case in onDragEnd

```tsx
/**
 * Handle drag completion for lists and cards
 * @param result contains info on destination, source, and type of card or list
 */
function onDragEnd(result: any) {
  const { destination, source } = result;

  // Case 1: No destination to drag to
  if (!destination) {
    return;
  }

}
```

feat: Handle no change in position during drag-and-drop

```tsx
function onDragEnd(result: any) {
  const { destination, source } = result;

  // Case 2: If dropped into the same position
  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  ) {
    return;
  }
}
```

Next case we want to handle is type specific. Recall that we gave `Droppable` a `type` set to `list` or `card`.

`components\list\ListContainer.tsx`
```tsx
  return (
    <DragDropContext
      onDragEnd={onDragEnd}
    >
      <Droppable
        direction='horizontal'
        droppableId='lists'
        type='list'
      >
```

or in `ListItem`

`components\list\ListItem.tsx`
```tsx
  <Droppable
    droppableId={data.id}
    type='card'
  >
```

Therefore we can destructure `type` from `result`, then use that to determine the functionality.

feat: Implement drag-and-drop for reordering lists

Handle the case when user drags-and-drops a list.

In this case:
- We're specifically dealing with lists (as opposed to individual cards).
- When a list is dragged and dropped, we perform the following steps:
  1. Reorder the list data based on the drag result using the `reorder` function.
  2. Update the `orderedListData` state with the newly reordered list.

feat: Handle list reordering in onDragEnd

```tsx
  function onDragEnd(result: any) {
    const { destination, source, type } = result;

    // Case 3: User drag-and-drops a list
    if (type === 'list') {
      // Reorder the list data based on the drag result
      const items = reorder(
        orderedListData,
        source.index,
        destination.index,
      ).map((item, index) => ({ ...item, order: index }));

      // Update state with newly ordered list
      setOrderedListData(items);

      // TODO: Execute Server Action to update backend
    }
  }
```

We can test this by moving an original list to a different position. The lists will reorder themselves and the state is updated. If we refresh however, the original list position resets because the server action has not been implemented yet.

### Reorder cards

Now consider the next case where user drag-and-drops a card. Let's reorder the data in the case that the card is moving within the same list.

feat: Add edge case checks for onDragEnd

feat: Enhance card dragging logic within onDragEnd

- Check if source and destination lists exists
- Initialize empty card arrays for source and destination lists if needed.

feat: Implement card reordering in onDragEnd

```tsx
  function onDragEnd(result: any) {
    const { destination, source, type } = result;

    // Case 4: User drag-and-drops a card
    if (type === 'card') {
      let newOrderedListData = [...orderedListData];

      const sourceList = newOrderedListData
        .find(list => list.id === source.droppableId);

      const destList = newOrderedListData
        .find(list => list.id === destination.droppableId);

      if (!sourceList || !destList) {
        return;
      }

      if (!sourceList.cards) {
        sourceList.cards = [];
      }

      if(!destList.cards) {
        destList.cards = [];
      }

      // Move card within the same list
      if (source.droppableId === destination.droppableId) {
        const reorderedCards = reorder(
          sourceList.cards,
          source.index,
          destination.index,
        );

        reorderedCards.forEach((card, index) => {
          card.order = index;
        });

        sourceList.cards = reorderedCards;

        setOrderedListData(newOrderedListData);

        // TODO: Execute Server Action
      }
    }
  }
```

#### Manage card movement within and across lists

feat: Manage card movement within and across lists

Next thing we need to do is handle two cases for when we move cards within the same list or across different lists.

- Handle the case for when user moves card within the same list

docs: Comment card movement within the same list

Add comments for handling card movement within the same list.

- Reorder cards based on drag-and-drop.
- Update card order.
- Update state to reflect UI changes.
- TODO: Execute server action.

```tsx
      // Handle the case for when user moves card within the same list
      // Move card in the same list
      if (source.droppableId === destination.droppableId) {
        // Reorder the cards
        const reorderedCards = reorder(
          sourceList.cards,
          source.index,
          destination.index,
        );

        // Change the order of each card
        reorderedCards.forEach((card, index) => {
          card.order = index;
        });

        // Assign newly ordered cards to the sourceList
        sourceList.cards = reorderedCards;

        // Update list data state to optimistically update the UI
        setOrderedListData(newOrderedListData);

        // TODO: Execute Server Action
      }
```

We've successfully enabled local card movement within a list, ensuring that card positions no longer reset. To make this order change permanent and prevent loss upon refresh, we'll need to execute the server action.

- Handle the case for when user moves card to a different list

feat: Add card movement to different list logic

docs: Comment on card movement across lists

Add comments for handling card movement to a different list

- Remove card from the source list.
- Assign the new listId to the moved card.
- Add the card to the destination list.
- Update the order for each card in both lists.
- Update state to optimistically update the UI.
- TODO: Execute server action.

feat: Implement card movement across lists

```tsx
    // Case 4: User drag-and-drops a card
    if (type === 'card') {
      let newOrderedListData = [...orderedListData];

      const sourceList = newOrderedListData
        .find(list => list.id === source.droppableId);

      const destList = newOrderedListData
        .find(list => list.id === destination.droppableId);

      // If either sourceList or destList are not found
      if (!sourceList || !destList) {
        return;
      }

      // If the list is empty, then initialize an empty array of cards
      // Check if cards exist in sourceList
      if (!sourceList.cards) {
        sourceList.cards = [];
      }

      // Check if cards exists in destList
      if(!destList.cards) {
        destList.cards = [];
      }
      
      // Handle the case for when user moves card within the same list
      // ...

      } else {
        // Handle the case for when user moves card to a different list

        // Remove card from the source list
        const [movedCard] = sourceList.cards.splice(source.index, 1);

        // Assign the new listId to the moved card
        movedCard.listId = destination.droppableId;

        // Add card to the destination list
        destList.cards.splice(destination.index, 0, movedCard);

        // Update the order for each card in the source list
        sourceList.cards.forEach((card, index) => {
          card.order = index;
        })

        // Update the order for each card in the destination list
        destList.cards.forEach((card, index) => {
          card.order = index;
        });

        // Update list data state to optimistically update the UI
        setOrderedListData(newOrderedListData);

        // TODO: Execute Server Action
      }
    }
  }
```

## updateListOrder server action

Make `updateListOrder` folder inside `/actions` and add the following files:

1. Schema
2. Types
3. Server Action handler

### updateListOrder schema

Create the `UpdateListOrder` object schema.

1. It has two properties:
   - `boardId`: A **string**.
   - `items`: An **array** of objects, each with the following properties:
     - `id`: A **string**.
     - `title`: A **string**.
     - `order`: A **number**.
     - `createdAt`: A **date**.
     - `updatedAt`: A **date**.

feat: Add UpdateListOrder Zod schema

- Introduce Zod schema validation to ensure data integrity for UpdateListOrder

`actions\updateListOrder\updateListOrderSchema.ts`
```typescript
import { z } from 'zod';

export const UpdateListOrder = z.object({
  boardId: z.string(),
  items: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      order: z.number(),
      createdAt: z.date(),
      updatedAt: z.date(),
    }),
  ),
});
```

### updateListOrder types

feat: Define types for updateListOrder action

`actions\updateListOrder\updateListOrderSchema.ts`
```ts
import { z } from 'zod';

// Import List, the expected output type, from Prisma client
import { List } from '@prisma/client';

// Encapsulate the state of various actions (e.g., fetching data, submitting forms, etc.)
// Provides a structured way to handle errors and manage data flow
import { ActionState } from '@/lib/createServerAction';

// Import the UpdateListOrder schema (validation rules)
import { UpdateListOrder } from './updateListOrderSchema';

// Define the input type based on the schema
export type InputType = z.infer<typeof UpdateListOrder>;

// Define the output data type (ActionState)
export type OutputType = ActionState<InputType, List[]>;
```

### updateListOrder action

Now create an `index.ts` inside `/actions/updateListOrder`. This server action handler updates a list order based on the input data. 

Start with the imports and typed `async` function `performAction`. Then export `updateListOrder` server action after passing it into `createServerAction`.

The `createServerAction` function sets up a validation schema (`UpdateListOrder`) and an action handler (`performAction`) for processing input data.

**Function Definitions**:
 - `performAction`: An asynchronous function that takes an input of type `InputType` and returns a promise of type `OutputType`.
 - `updateListOrder`: A constant exported from this module, which is assigned the result of calling `createServerAction` with the `UpdateListOrder` schema and the `performAction` function.

feat: Add imports & function definitions

`actions\updateListOrder\index.ts`
```ts
"use server";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { createServerAction } from "@/lib/createServerAction";
import { database } from "@/lib/database";

import { UpdateListOrder } from "./updateListOrderSchema";
import { InputType, OutputType } from "./updateListOrderTypes";

async function performAction (data: InputType): Promise<OutputType> {

  // Return the updated list
  return {
    data: list
  };
}

export const updateListOrder = createServerAction(UpdateListOrder, performAction);
```

Next add user authentication to be able to perform the server action.

feat: Add user authentication to updateListOrder

```ts
async function performAction (data: InputType): Promise<OutputType> {
  // Authenticate the user and get their organization ID
  const { userId, orgId } = auth();

  // If authentication fails, return an error
  if (!userId || !orgId) {
    return {
      error: 'Unauthorized',
    };
  }
  
  return {
    // ...
  };
}
```

Next update the list order in the database

feat: Update list order in the database

```ts
async function performAction (data: InputType): Promise<OutputType> {
  // Authenticate the user and get their organization ID
  const { userId, orgId } = auth();

  // If authentication fails, return an error
  if (!userId || !orgId) {
    return {
      error: 'Unauthorized',
    };
  }

  // Destructure the necessary data from the input
  const { 
    boardId,
    items,
  } = data;

  let lists;

  try {
    // Update the list order in the database
    // Execute a series of updates
  } catch (error) {
    return {
      error: 'Failed to update list order.'
    }
  }

  return {
    data: lists
  };
}
```

#### transactions in Prisma Client

In order to update the list we need to learn a bit about transactions in Prisma Client.

-[Transactions overview | Prisma](https://www.prisma.io/docs/orm/prisma-client/queries/transactions#transactions-overview)

**Transactions** in the context of **Prisma** refer to a sequence of read/write operations that are guaranteed to either succeed or fail as a whole. These transactions provide safety guarantees and adhere to the **ACID** properties:

1. **Atomic**: Ensures that either all or none of the operations within the transaction succeed. The transaction is either committed successfully or aborted and rolled back.
2. **Consistent**: Ensures that the states of the database before and after the transaction are valid, maintaining any existing invariants about the data.
3. **Isolated**: Ensures that concurrently running transactions have the same effect as if they were running sequentially.
4. **Durability**: Ensures that after the transaction succeeds, any writes are stored persistently.

Prisma Client provides several ways to handle transactions:

1. **Nested Writes**: Use the Prisma Client API to process multiple operations on related records within the same transaction.
2. **Batch / Bulk Transactions**: Process one or more operations in bulk using `updateMany`, `deleteMany`, and `createMany`.
3. **$transaction API**: Execute a series of Prisma Client queries sequentially inside a transaction using `$transaction<R>(queries: PrismaPromise<R>[]): Promise<R[]>`.
4. **Interactive Transactions**: Execute a function containing Prisma Client queries, non-Prisma code, and other control flow within a transaction using `$transaction<R>(fn: (prisma: PrismaClient) => R, options?: object): R`

#### transactions API in Prisma Client

-[Transactions API | Prisma Client](https://www.prisma.io/docs/orm/prisma-client/queries/transactions#the-transaction-api)

The `$transaction` API can be used in two ways:

- [Sequential operations](https://www.prisma.io/docs/orm/prisma-client/queries/transactions#sequential-prisma-client-operations): Pass an array of Prisma Client queries to be executed sequentially inside of a transaction.

`$transaction<R>(queries: PrismaPromise<R>[]): Promise<R[]>`

- [Interactive transactions](https://www.prisma.io/docs/orm/prisma-client/queries/transactions#interactive-transactions): Pass a function that can contain user code including Prisma Client queries, non-Prisma code and other control flow to be executed in a transaction.

`$transaction<R>(fn: (prisma: PrismaClient) => R): R`

Let's delve into the details of the `$transaction` API in **Prisma Client**.

1. **Overview**:
   - A **database transaction** refers to a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   - Prisma Client provides several ways to handle transactions, ensuring safety and adherence to the **ACID** properties (Atomicity, Consistency, Isolation, Durability).

2. **Available Techniques**:
   - Prisma Client supports six different ways of handling transactions for various scenarios:
     - **Dependent Writes**: Use nested writes to process multiple operations on related records within the same transaction.
     - **Independent Writes**: Execute batch operations (e.g., `updateMany`, `deleteMany`, `createMany`) for multiple records.
     - **Read, Modify, Write**: Perform idempotent operations within a transaction.
     - **Optimistic Concurrency Control**: Handle concurrent updates by checking for changes before committing.
     - **Interactive Transactions**: Execute a function containing Prisma Client queries, non-Prisma code, and other control flow within a transaction.
     - **Sequential Operations**: Use the `$transaction<R>(queries: PrismaPromise<R>[]): Promise<R[]>` API to execute an array of Prisma Client queries sequentially inside a transaction.

3. **$transaction API**:
   - **Sequential Operations**:
     - Pass an array of Prisma Client queries to be executed sequentially inside a transaction.
     - Example:
       ```typescript
       const result = await prisma.$transaction([
         prisma.user.create({ data: { name: 'Luna' } }),
         prisma.post.create({ data: { title: 'Hello, World!' } }),
       ]);
       ```
     - If any query within the array fails, the entire transaction is rolled back.
     - Note that this method is not compatible with setting isolation levels.

   - **Interactive Transactions**:
     - Pass a function that can contain user code, including Prisma Client queries and other control flow, to be executed in a transaction.
     - Example:
       ```typescript
       const result = await prisma.$transaction(async (prisma) => {
         // User-defined code here
         const user = await prisma.user.findUnique({ where: { id: 1 } });
         // More operations...
         return user;
       });
       ```
     - This method allows flexibility and custom logic within the transaction.

4. **Safety and Guarantees**:
   - Transactions provide safety guarantees, such as atomicity (all or none of the operations succeed), consistency (valid states before and after), isolation (concurrent effects as if sequential), and durability (persistent writes).
   - Developers can rely on transactions to handle concurrency issues and certain hardware/software faults.

#### Use transactions to update the list order

Back to our server action `updateListOrder`, inside the handler named `index.ts`. 

Create an array of transactions to reorder each list in the database. To achieve this, we iterate over the items and update the order for each individual list. Once the transaction array is constructed, we execute it.

feat: Update list order using transaction array

In the `performAction` function, a transaction array is constructed to update the list order. If any error occurs during the update, an appropriate error message is returned.

```ts
async function performAction (data: InputType): Promise<OutputType> {
  // Authenticate the user...

  // Destructure the necessary data from the input
  const { 
    boardId,
    items,
  } = data;

  let lists;

  try {

    // Construct a transaction array for updating list order
    const transaction = items.map((list) => database.list.update({
        where: {
          id: list.id,
          board: {
            orgId,
          },
        },
        data: {
          order: list.order,
        },
      })
    );

    // Execute the transaction
    lists = await database.$transaction(transaction);
  } catch (error) {
    return {
      error: 'Failed to update list order.'
    }
  }

  return {
    data: lists
  };
}
```

Finally, revalidate the cache for the path to ensure immediate UI consistency post-update.

feat: Revalidate cache for updated board path

In the `performAction` function, the cache for the updated board path is revalidated using `revalidatePath`. This ensures immediate UI consistency post-update.

```ts
async function performAction (data: InputType): Promise<OutputType> {
  // Authenticate the user...
  // Update the list order in the database...

  // Revalidate the cache for the updated board path 
  // to ensure immediate UI consistency post-update
  revalidatePath(`/board/${boardId}`);

  // Return the updated list data
  return {
    data: lists
  };
}
```

Here is the entire updateListOrder server action handler:

feat: Implement updateListOrder server action

`actions\updateListOrder\index.ts`
```ts
"use server";

import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { createServerAction } from "@/lib/createServerAction";
import { database } from "@/lib/database";

import { UpdateListOrder } from "./updateListOrderSchema";
import { InputType, OutputType } from "./updateListOrderTypes";

async function performAction (data: InputType): Promise<OutputType> {
  // Authenticate the user and get their organization ID
  const { userId, orgId } = auth();

  // If authentication fails, return an error
  if (!userId || !orgId) {
    return {
      error: 'Unauthorized',
    };
  }

  // Destructure the necessary data from the input
  const { 
    boardId,
    items,
  } = data;

  let lists;

  try {

    // Construct a transaction array for updating list order
    const transaction = items.map((list) => database.list.update({
        where: {
          id: list.id,
          board: {
            orgId,
          },
        },
        data: {
          order: list.order,
        },
      })
    );

    // Execute the transaction
    lists = await database.$transaction(transaction);
  } catch (error) {
    return {
      error: 'Failed to update list order.'
    }
  }

  // Revalidate the cache for the updated board path 
  // to ensure immediate UI consistency post-update
  revalidatePath(`/board/${boardId}`);

  // Return the updated list data
  return {
    data: lists
  };
}

export const updateListOrder = createServerAction(UpdateListOrder, performAction);
```

### Use updateListOrder server action

Navigate back to `ListContainer` and setup our server action.

Import:
- `toast` from sonner
- `useServerAction` hook
- `updateListOrder` action

Extract `executeServerAction` and rename to `executeUpdateListOrder` from `useServerAction` hook. Also pass in the success and error callbacks.

feat: Instantiate updateListOrder server action

In the `ListContainer` component, the `updateListOrder` server action is instantiated using `useServerAction`. Success and error handlers are defined to display appropriate toasts.

```tsx
import { useServerAction } from '@/hooks/useServerAction';
import { updateListOrder } from '@/actions/updateListOrder';
import { toast } from 'sonner';

export default function ListContainer({
  boardId,
  data,
}: ListContainerProps) {
  const [orderedListData, setOrderedListData] = useState(data);

  const { executeServerAction: executeUpdateListOrder } = useServerAction(updateListOrder , {
    onSuccess: () => {
      toast.success("List reordered");
    },
    onError: (error) => {
      toast.error(error);
    },
  });
```

Now let's use the newly created server action to implement the update list order functionality.

feat: Invoke executeUpdateListOrder in onDragEnd

In the `ListContainer` component, the `executeUpdateListOrder()` function is called within the `onDragEnd` handler. This ensures that list reordering is reflected in the server action. This will update the list order in the database.

```tsx
export default function ListContainer({
  boardId,
  data,
}: ListContainerProps) {
  const [orderedListData, setOrderedListData] = useState(data);

  const { executeServerAction: executeUpdateListOrder } = useServerAction(updateListOrder , {
    onSuccess: () => {
      toast.success("List reordered");
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  useEffect(() => {
    setOrderedListData(data);
  }, [data]);

  function onDragEnd(result: any) {
    const { destination, source, type } = result;

    // ...

    // Case 3: User drag-and-drops a list
    if (type === 'list') {
      // Reorder the list data based on the drag result
      const items = reorder(
        orderedListData,
        source.index,
        destination.index,
      ).map((item, index) => ({ ...item, order: index }));

      // Update state with newly ordered list
      setOrderedListData(items);

      executeUpdateListOrder({ items, boardId });
    }
```

## updateCardOrder server action

Make `updateCardOrder` folder inside `/actions` and add the following files:

1. Schema
2. Types
3. Server Action handler

### updateCardOrder schema

Create the `UpdateCardOrder` object schema.

feat: Add UpdateCardOrder Zod schema

- Introduce Zod schema validation to ensure data integrity for UpdateCardOrder

`actions\updateCardOrder\updateCardOrderSchema.ts`
```typescript
import { z } from 'zod';

export const UpdateCardOrder = z.object({
  listId: z.string(),
  items: z.array(
    z.object({
      id: z.string(),
      listId: z.string(),
      title: z.string(),
      order: z.number(),
      createdAt: z.date(),
      updatedAt: z.date(),
    }),
  ),
});
```

We also need an extra requirement `boardId` in order to revalidate the path later in the server action index handler.

feat: Add boardId to UpdateCardOrder schema

```ts
import { z } from 'zod';

export const UpdateCardOrder = z.object({
  boardId: z.string(),
  listId: z.string(),
  items: z.array(
    z.object({
      id: z.string(),
      listId: z.string(),
      title: z.string(),
      order: z.number(),
      createdAt: z.date(),
      updatedAt: z.date(),
    }),
  ),
});
```

### updateCardOrder types

feat: Define types for updateCardOrder action

`actions\updateCardOrder\updateCardOrderTypes.ts`
```ts
import { z } from 'zod';

// Import Card, the expected output type, from Prisma client
import { Card } from '@prisma/client';

// Encapsulate the state of various actions (e.g., fetching data, submitting forms, etc.)
// Provides a structured way to handle errors and manage data flow
import { ActionState } from '@/lib/createServerAction';

// Import the UpdateCardOrder schema (validation rules)
import { UpdateCardOrder } from './updateCardOrderSchema';

// Define the input type based on the schema
export type InputType = z.infer<typeof UpdateCardOrder>;

// Define the output data type (ActionState)
export type OutputType = ActionState<InputType, Card[]>;
```

### updateCardOrder action

Now create an `index.ts` inside `/actions/updateCardOrder`. This server action handler updates card order based on the input data. 

Start with the imports and `async` function `performAction`. Then export `updateCardOrder` server action after passing it into `createServerAction`.

The `createServerAction` function sets up a validation schema (`UpdateCardOrder`) and an action handler (`performAction`) for processing input data.

**Function Definitions**:
 - `performAction`: An asynchronous function that takes an input of type `InputType` and returns a promise of type `OutputType`.
 - `updateCardOrder`: A constant exported from this module, which is assigned the result of calling `createServerAction` with the `UpdateCardOrder` schema and the `performAction` function.

feat: Create updateCardOrder index handler

Add imports and function definitions for the updateCardOrder server action.

- Imports necessary modules.
- Defines the `performAction` function.
- Exports the `updateCardOrder` server action.

`actions\updateCardOrder\index.ts`
```ts
"use server";

import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { createServerAction } from "@/lib/createServerAction";
import { database } from "@/lib/database";

import { UpdateCardOrder } from "./updateCardOrderSchema";
import { InputType, OutputType } from "./updateCardOrderTypes";

async function performAction (data: InputType): Promise<OutputType> {
  // ...
}

export const updateCardOrder = createServerAction(UpdateCardOrder, performAction);
```

Next add user authentication to be able to perform the server action.

feat: Add user authentication to updateCardOrder

```ts
async function performAction (data: InputType): Promise<OutputType> {
  // Authenticate the user and get their organization ID
  const { userId, orgId } = auth();

  // If authentication fails, return an error
  if (!userId || !orgId) {
    return {
      error: 'Unauthorized',
    };
  }
  
  return {
    // ...
  };
}
```

Next we can extract the variables we need from the data. We can also invoke `revalidatePath` to revalidate the cache for the updated board path, this ensures UI consistency after the update.


feat: Purge cached data in updateCardOrder

Introduce functionality to clear cached data related to the board path within the updateCardOrder logic. This ensures immediate UI consistency after updates.

feat: Add variable extraction & cache revalidation

```ts
"use server";

import { revalidatePath } from "next/cache";

import { UpdateCardOrder } from "./updateCardOrderSchema";
import { InputType, OutputType } from "./updateCardOrderTypes";

async function performAction (data: InputType): Promise<OutputType> {
  // Authenticate the user...

  // Destructure the necessary data from the input
  const { 
    boardId,
    listId, 
    items, 
  } = data;

  // Revalidate the cache for the updated board path 
  // to ensure immediate UI consistency post-update
  revalidatePath(`/board/${boardId}`);

  return {
    // ...
  };
}
```

Finally, we can open up a `try..catch` block to update the card order in the database using prisma transactions.

feat: Interact with database to update card order

In the `updateCardOrder` server action, a try-catch block has been added to interact with the database for updating the card order. Prisma transactions are used to ensure data consistency during the update process. It also handles potential errors during the execution of database interaction.

feat: Implement updateCardOrder server action

Added functionality for authentication, database transactions, and cache revalidations to update card order data.

```ts
"use server";

import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { createServerAction } from "@/lib/createServerAction";
import { database } from "@/lib/database";

import { UpdateCardOrder } from "./updateCardOrderSchema";
import { InputType, OutputType } from "./updateCardOrderTypes";

async function performAction (data: InputType): Promise<OutputType> {
  // Authenticate the user and get their organization ID
  const { userId, orgId } = auth();

  // If authentication fails, return an error
  if (!userId || !orgId) {
    return {
      error: 'Unauthorized',
    };
  }

  // Destructure the necessary data from the input
  const { 
    boardId,
    listId, 
    items, 
  } = data;

  let cards;

  try {
    // Construct a transaction array for updating card order
    const transaction = items.map((card) => database.card.update({
      where: {
        id: card.id,
        list: {
          board: {
            orgId,
          },
        },
      },
      data: {
        order: card.order,
        listId: card.listId,
      },
    }));

    // Execute the transaction
    cards = await database.$transaction(transaction);

  } catch (error) {
    return {
      error: 'Failed to update card order.'
    }
  }

  // Revalidate the cache for the updated board path 
  // to ensure immediate UI consistency post-update
  revalidatePath(`/board/${boardId}`);

  return {
    data: cards
  };
}

export const updateCardOrder = createServerAction(UpdateCardOrder, performAction);
```

style: Apply consistent code formatting (Prettier)

In the `updateCardOrder` server action, ensure that the code adheres to consistent formatting, indentation, and style guidelines by utilizing Prettier. This enhances code readability and maintainability.

In the database query, we only need to verify whether the `list` belongs to the specified `board`. Additionally, we only use the `orgId`. Therefore, the current `listId` is not in use and can be removed from both the index handler and the schema.

refactor: Remove listId from updateCardOrder input

refactor: Omit listId from updateCardOrder schema

```ts
import { z } from 'zod';

export const UpdateCardOrder = z.object({
  boardId: z.string(),
  items: z.array(
    z.object({
      id: z.string(),
      listId: z.string(),
      title: z.string(),
      order: z.number(),
      createdAt: z.date(),
      updatedAt: z.date(),
    }),
  ),
});
```

### Use updateCardOrder server action

Navigate back to `ListContainer` and setup our server action.

Import:
- `toast` from sonner
- `useServerAction` hook
- `updateCardOrder` action

Extract `executeServerAction` and rename to `executeUpdateCardOrder` from `useServerAction` hook. Also pass in the success and error callbacks.

feat: Instantiate updateCardOrder server action

In the `ListContainer` component, the `updateCardOrder` server action is instantiated using `useServerAction`. Success and error handlers are defined to display appropriate toasts.

`components\list\ListContainer.tsx`
```tsx
import { toast } from 'sonner';
import { useServerAction } from '@/hooks/useServerAction';
import { updateCardOrder } from '@/actions/updateCardOrder';

export default function ListContainer({
  boardId,
  data,
}: ListContainerProps) {
  const [orderedListData, setOrderedListData] = useState(data);

  const { executeServerAction: executeUpdateCardOrder } = useServerAction(updateCardOrder , {
    onSuccess: () => {
      toast.success("Card reordered");
    },
    onError: (error) => {
      toast.error(error);
    },
  });
```

Now let's use the new server action to update the card order in the `onDragEnd` function.

Where we need to update the card order in the database is in the case when the user moves a card within the same list.

feat: Update card order within list on card move

`components\list\ListContainer.tsx`
```tsx
  function onDragEnd(result: any) {
    const { destination, source, type } = result;
    // ...

    // User drag-and-drops a card
    if (type === 'card') {
      let newOrderedListData = [...orderedListData];

      const sourceList = newOrderedListData
        .find(list => list.id === source.droppableId);

      const destList = newOrderedListData
        .find(list => list.id === destination.droppableId);

      // If either sourceList or destList are not found
      if (!sourceList || !destList) {
        return;
      }

      // If the list is empty, then initialize an empty array of cards
      // Check if cards exist in sourceList
      if (!sourceList.cards) {
        sourceList.cards = [];
      }

      // Check if cards exists in destList
      if(!destList.cards) {
        destList.cards = [];
      }
      
      // Case 4: User moves card within the same list
      if (source.droppableId === destination.droppableId) {
        // Reorder the cards
        const reorderedCards = reorder(
          sourceList.cards,
          source.index,
          destination.index,
        );

        // Change the order of each card
        reorderedCards.forEach((card, index) => {
          card.order = index;
        });

        // Assign newly ordered cards to the sourceList
        sourceList.cards = reorderedCards;

        // Update list data state to optimistically update the UI
        setOrderedListData(newOrderedListData);

        // Update card order data in the database
        executeUpdateCardOrder({
          boardId: boardId,
          items: reorderedCards
        });
      } else {
```

Next use the updateCardOrder action when the user drags a card to a different list.

feat: Update card order across lists on card move

```tsx
      } else {
        // Case 5: User moves card to a different list

        // Remove card from the source list
        const [movedCard] = sourceList.cards.splice(source.index, 1);

        // Assign the new listId to the moved card
        movedCard.listId = destination.droppableId;

        // Add card to the destination list
        destList.cards.splice(destination.index, 0, movedCard);

        // Update the order for each card in the source list
        sourceList.cards.forEach((card, index) => {
          card.order = index;
        })

        // Update the order for each card in the destination list
        destList.cards.forEach((card, index) => {
          card.order = index;
        });

        // Update list data state to optimistically update the UI
        setOrderedListData(newOrderedListData);

        // Update card order data in the database
        executeUpdateCardOrder({
          boardId: boardId,
          items: destList.cards,
        });
      }
```

feat: Update card order during card movement

This change ensures that the card order is correctly updated when a user moves cards within the same list or across different lists. The database is now synchronized with the new order, improving overall usability.

## Card Modal

When a user clicks on a card, a modal should open, displaying additional information about the card.

Create `useCardModal.ts` in `/hooks`. We can copy the `useMobileSidebar` code into it and rename it.

feat: Create CardModalStore using Zustand

This commit adds a CardModalStore using Zustand for managing the modal state related to card interactions. The store includes isOpen, onOpen, and onClose functions.

`hooks\useCardModal.ts`
```ts
import { create } from 'zustand';

type CardModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useCardModal = create<CardModalStore>()((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
```

Next we need an optional property `id` which is the ID of the card. We update the `onOpen` with this new field. While we set it to `undefined` initialliy but set the `id` when the `onOpen` function is called.

feat: Add id field to CardModalStore

This commit adds a CardModalStore using Zustand. The store includes an optional 'id' field, isOpen state, and functions for opening and closing the modal. The 'onOpen' function now accepts an 'id' parameter.

`hooks\useCardModal.ts`
```ts
import { create } from 'zustand';

type CardModalStore = {
  id?: string;
  isOpen: boolean;
  onOpen: (id: string) => void;
  onClose: () => void;
};

export const useCardModal = create<CardModalStore>()((set) => ({
  id: undefined,
  isOpen: false,
  onOpen: (id: string) => set({ isOpen: true, id }),
  onClose: () => set({ isOpen: false, id: undefined }),
}));

```

Next install the `Dialog` component from shadcn/ui

```sh
npx shadcn-ui@latest add dialog
```

### Single File component vs Modular structure

Before we create the `CardModal` component, let's discuss some considerations of how to organize the file.

There are two ways we can create the file:

1. `components\modals\CardModal.tsx`
2. `components\modals\CardModal\index.tsx`

The distinction between **`components\modals\CardModal.tsx`** and **`components\modals\CardModal\index.tsx`** lies in their organization and usage within a project. Let's explore the advantages of each:

1. **`components\modals\CardModal.tsx`**:
    - **Single File Component**: This approach encapsulates all the modal-related logic, styles, and JSX markup within a single TypeScript file. It's a straightforward and compact way to define a modal.
    - **Ease of Understanding**: Developers can quickly grasp the modal's behavior by examining a single file. This simplicity aids in debugging and maintenance.
    - **Customization and Reusability**: Since everything is contained in one file, it's easy to customize the modal's appearance, behavior, and content. You can reuse this component across different parts of your application.
    - **Type Safety**: TypeScript provides type checking for the entire component, ensuring that props, state, and function signatures align correctly.
    - **Consolidated Styling**: CSS or styled-components can be directly included within the same file, making it convenient to manage styles.
    - **Example Usage**:
        ```tsx
        // components/modals/CardModal.tsx
        import React from 'react';

        interface CardModalProps {
          title: string;
          content: React.ReactNode;
          onClose: () => void;
        }

        const CardModal: React.FC<CardModalProps> = ({ title, content, onClose }) => {
          // Modal implementation here...
          return (
            <div className="modal">
              <h2>{title}</h2>
              <div className="modal-content">{content}</div>
              <button onClick={onClose}>Close</button>
            </div>
          );
        };

        export default CardModal;
        ```
2. **`components\modals\CardModal\index.tsx`**:
    - **Modular Structure**: This approach separates concerns into multiple files. The `index.tsx` file typically serves as an entry point or an aggregator for the modal component.
    - **Organized Directory Structure**: By placing related files (such as styles, utility functions, or additional components) alongside the main modal component, you achieve better organization.
    - **Scalability**: As your modal grows in complexity (e.g., adding more features, animations, or context providers), the modular structure allows you to manage each aspect separately.
    - **Example Usage**:
        ```tsx
        // components/modals/CardModal/index.tsx
        import CardModal from './CardModal';
        import CardModalStyles from './CardModalStyles'; // Styles
        import CardModalUtils from './CardModalUtils'; // Utility functions

        export { CardModal, CardModalStyles, CardModalUtils };
        ```

In summary, choose the approach that aligns with your project's requirements. If simplicity, reusability, and type safety are crucial, consider the single-file component. If you anticipate future expansion and want a more modular structure, opt for the indexed approach. Remember that both methods can coexist within the same project, depending on the context and specific use cases.

**What is modular structure?**

1. **Modular Structure**:
    - The indexed approach organizes related files into a directory structure. Each file within the directory serves a specific purpose.
    - For instance, in your example, the `components\modals\CardModal\index.tsx` file acts as an entry point or aggregator for the modal component.
    - Other files alongside it (such as styles, utility functions, or additional components) contribute to the overall modularity.

2. **Benefits of Modularity**:
    - **Scalability**: As your project grows, you can add more features, animations, or context providers to individual files without affecting others.
    - **Organization**: Grouping related files together enhances code organization and maintainability.
    - **Reusability**: By exporting components, styles, or utilities from the indexed file, you create reusable building blocks for other parts of your application.

For our case, we are going to go with the indexed approach. 

refactor: CardModal into modular indexed approach

This commit refactors the CardModal component to follow a modular indexed approach, while foregoing the traditional single-file component approach. By organizing related files within a directory structure, we enhance code organization, scalability, and maintainability.

Inside the index we create the `CardModal` client component. We import the `Dialog` components we need, and render `Dialog` & `DialogContent`.

feat: Add Dialog component in CardModal

`components\modals\CardModal\index.tsx`
```tsx
"use client";

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function CardModal() {
  return (
    <Dialog>
      <DialogContent>
        CardModal
      </DialogContent>
    </Dialog>
  )
}
```

Next let's import the `useCardModal` hook to access the state.

feat: Connect CardModal with state slices

This commit adds the useCardModal hook to retrieve the `id`, `isOpen`, and `onClose` state, and assigns them to the corresponding props of the `Dialog` component within the `CardModal`.

```tsx
"use client";

import React from 'react';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';

import { useCardModal } from '@/hooks/useCardModal';

export default function CardModal() {
  const id = useCardModal((state) => state.id);
  const isOpen = useCardModal((state) => state.isOpen);
  const onClose = useCardModal((state) => state.onClose);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}
    >
      <DialogContent>
        CardModal
      </DialogContent>
    </Dialog>
  )
}
```

### Modal Provider

Create file `components\providers\ModalProvider.tsx`. 

- This will be a client component that returns a `CardModal` wrapped in a fragment.
- Protect from hydration errors

feat: Render CardModal within ModalProvider

```tsx
"use client";

import React, { useEffect, useState } from 'react';

import CardModal from '@/components/modals/CardModal';

export default function ModalProvider() {
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

  return (
    <>
      <CardModal />
    </>
  )
}

```

feat: Introduce isMounted state in ModalProvider
feat: Apply mounting technique in ModalProvider

The `isMounted` state variable serves a specific purpose related to component lifecycle management in React. Let's break down its role:

1. **Purpose**:
    - The `isMounted` variable tracks whether the component is currently mounted (i.e., part of the DOM) or unmounted (not rendered).
    - It helps prevent certain actions from being performed on an unmounted component, which can lead to memory leaks or unwanted behavior.

2. **Implementation**:
    - The `useState(false)` initializes the `isMounted` state variable with an initial value of `false`.
    - The `useEffect` hook runs after the initial render (similar to `componentDidMount` in class components).
    - Inside the effect, `setIsMounted(true)` updates the `isMounted` value to `true`, indicating that the component is now mounted.
    - The empty dependency array (`[]`) ensures that the effect runs only once (equivalent to `componentDidMount`).

3. **Use Cases**:
    - **Client-Side Code Delay**: By setting `isMounted` to `true` after the initial render, you delay the execution of client-side-only code (e.g., animations, timers, or subscriptions) until after hydration.
    - **Avoiding Unwanted Actions**: The conditional check `if (!isMounted)` prevents rendering of the component before the effect has run. This protects against hydration errors or unwanted flashes of content.
    - **Preventing State Updates**: If you have asynchronous operations (e.g., fetching data) that might continue after the component unmounts, you can use `isMounted` to avoid state updates on an unmounted component.

4. **Best Practices**:
    - While `isMounted` can be useful, it's essential to consider other patterns:
        - **Functional Updates**: Use functional updates with `setState` to avoid state updates on unmounted components.
        - **Cleanup Functions**: In more complex scenarios, use cleanup functions in `useEffect` to cancel subscriptions or clear resources when the component unmounts.

Remember that the `isMounted` approach is not always necessary, and there are alternative ways to handle component lifecycle and state management.

#### Use ModalProvider to open CardModal

Now render `ModalProvider` in the `AppLayout`.

feat: Add ModalProvider to AppLayout

`app\(app)\layout.tsx`
```tsx
import React from 'react';
import { Toaster } from "sonner";
import { ClerkProvider } from '@clerk/nextjs';

import ModalProvider from '@/components/providers/ModalProvider';

const AppLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <ClerkProvider>
      <Toaster />
      <ModalProvider />
      {children}
    </ClerkProvider>
  )
}

export default AppLayout
```

Now back to `CardItem` component we can call the `useCardModal` hook. Then we add the `onClick` prop to the `div` that consumes the `provided` object.

feat: Add useCardModal hook & onClick to CardItem

`components\card\CardItem.tsx`
```tsx
import { useCardModal } from '@/hooks/useCardModal';

export default function CardItem({
  data,
  index,
}: CardItemProps) {
  const cardModal = useCardModal();
  
  return (
    <Draggable
      draggableId={data.id}
      index={index}
    >
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          role="button"
          onClick={() => cardModal.onOpen(data.id)}
          className='py-2 px-3 bg-white text-sm shadow-sm rounded-md truncate border-2 border-transparent hover:border-black'
        >
          {data.title}
        </div>
      )}
    </Draggable>
  )
}
```

### Customize the modal

We can customize the `CardModal` by adding functionality to extending the `Dialog` component. Navigate to `components\ui\dialog.tsx` and find the `DialogOverlay`.

#### Modify DialogOverlay

Currently, when we open the `CardModal` which opens the `DialogOverlay` it has a white background.

Let's modify the background to be blacker instead, currently it uses `bg-background/80`, we can change that to `bg-black/80`. This will improve the contrast between the modal in the foreground and the background page.


#### Modify DialogContent

Let's expand the width of the `CardModal`. Inside the `Dialog` component, navigate to the `DialogContent` and replace the style `max-w-lg` to `max-w-3xl` to give the `Dialog` more room for us to put more components.

feat: Adjust Dialog component width to max-w-3xl

This commit modifies the `Dialog` component to use a maximum width of `max-w-3xl` instead of `max-w-lg`. The change ensures that the dialog accommodates a wider content area while maintaining a consistent design.

```tsx
const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "... max-w-3xl ...",
        className
      )}
      {...props}
    >
      { /* ... */}
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName
```

## Data Fetching

The next step is to be able to display the contents of the card within the modal. 

We need to fetch data before we can display data. This time we need to fetch data without server actions because of how drag-and-drop works (it requires client components). So we need to call an API route.

TanStack Query v5 will handle data-fetching.

### TanStack Query

-[TanStack Query | Overview](https://tanstack.com/query/latest/docs/framework/react/overview)
-[TanStack Query | Quick start](https://tanstack.com/query/latest/docs/framework/react/quick-start)

feat: Install @tanstack/react-query (v5.32.0)

```sh
npm i @tanstack/react-query
```

#### QueryProvider

Next create `QueryProvider.tsx` under `/providers`.

```tsx
"use client";

import React from 'react'

export default function QueryProvider() {
  return (
    <div>QueryProvider</div>
  )
}
```

feat: Add QueryProvider for managing QueryClient

**QueryProvider** serves as a wrapper component that provides a **QueryClient** instance to its child components. The **QueryClient** is created within the **QueryProvider** and manages data fetching, caching, and state management for queries in your application. By wrapping your components with **QueryProvider**, you ensure that they have access to the shared query client, allowing them to make data requests using **@tanstack/react-query**.

In `QueryProvider`,

- The `QueryProvider` component sets up a `QueryClient` using `useState`.
- It wraps the entire application with a `QueryClientProvider`, making the query client available to all child components.
- The `children` prop represents the child components that will have access to the query client.

feat: Add QueryProvider with @tanstack/react-query

```tsx
"use client";

import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

/**
 * QueryProvider component wraps the entire application with a QueryClientProvider.
 * It initializes a new QueryClient and provides it to all child components.
 *
 * @param children React nodes that represent the child components.
 */
export default function QueryProvider({
  children
}: {
  children: React.ReactNode;
}) {
  // Initialize a new QueryClient using useState.
  const [queryClient] = useState(() => new QueryClient());

  return (
    // Provide the queryClient to all child components.
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
```

With that done we can use it to wrap our `AppLayout`. Wrap everything inside `ClerkProvider` with `QueryProvider`.

feat: Wrap AppLayout with QueryProvider

`app\(app)\layout.tsx`
```tsx
import QueryProvider from '@/components/providers/QueryProvider';

const AppLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <ClerkProvider>
      <QueryProvider>
        <Toaster />
        <ModalProvider />
        {children}
      </QueryProvider>
    </ClerkProvider>
  )
}

export default AppLayout
```

##### Combination of server components and client components?

**Question**: Since `QueryProvider` is a client component, and it nearly wraps the entire application that contains server components, will everything be on the client?

**Answer**: No. 

**Server Components and Client Components Interaction**:
   - Server components are designed to be rendered on the server side during the initial page load (SSR) and then rehydrated on the client side.
   - Client components, on the other hand, are rendered directly on the client side (CSR).
   - To include a server component within a client component, you can use the `{children}` prop. This prop allows you to include arbitrary React components within the client component, including server components.
   - When passing a child component or prop to the client component, the client component has no knowledge of what the child is. It doesn't automatically make all child components behave as client components. Instead, it allows you to nest server components within client components explicitly.

To include a server component within a client component, you can use the `{children}` prop. This prop allows you to include arbitrary React components within the client component, including server components.

When passing a child component or prop to the client component, the client component has no knowledge of what the child is. It doesn’t automatically make all child components behave as client components. Instead, it allows you to nest server components within client components explicitly.

**Example in Code**:
   - In `QueryProvider` component, we're wrapping the entire application with a `QueryClientProvider`. This initializes a new `QueryClient` and provides it to all child components.
   - The `children` prop is used to include any child components within the `QueryClientProvider`. These child components can be either server components or client components.
   - By nesting these providers, we're ensuring that the `QueryClient` is available to all components within the `AppLayout`.

### API routes

Let's create an API `GET` route for fetching card data by ID.

Create the file `app\api\cards\[cardId]\route.ts`, inside create the `GET` function handler.

feat(api): Add GET route for card by ID

`app\api\cards\[cardId]\route.ts`
```ts
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { cardId: string } }
) {
  try {
    
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
```

feat(api): Add authentication to card GET route

```ts
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { cardId: string } }
) {
  try {
    const { userId, orgId } = auth();

    if (!userId || !orgId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
```

Now proceed with fetching the card data from the database.

feat(api): Implement GET functionality for card

```ts
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { database } from "@/lib/database";

export async function GET(
  req: Request,
  { params }: { params: { cardId: string } }
) {
  try {
    // Authenticate the user using Clerk authentication.
    const { userId, orgId } = auth();

    // If the user is not authenticated, return an "Unauthorized" response.
    if (!userId || !orgId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Fetch the card data from the database.
    const card = await database.card.findUnique({
      where: {
        id: params.cardId,
        list: {
          board: {
            orgId,
          },
        },
      },
      include: {
        list: {
          select: {
            title: true,
          },
        },
      },
    });

    // Return the card data as a JSON response.
    return NextResponse.json(card);
  } catch (error) {
    // Handle any internal errors and return a 500 status.
    return new NextResponse("Internal Error", { status: 500 });
  }
}
```

### Fetcher

With the API request ready, we can create a reusable library utility named `fetcher.ts`.

feat(lib): Create reusable data fetching utility

`lib\fetcher.ts`
```ts
/**
 * Fetches data from the specified URL and returns the parsed JSON response.
 *
 * @param {string} url - The URL to fetch data from.
 * @returns {Promise<any>} - A Promise that resolves to the parsed JSON data.
 */
export const fetcher = (url: string) => fetch(url)
  .then((res) => res.json());
```

### Fetch card data with fetch and useQuery

- [Query Basics | TanStack](https://tanstack.com/query/v5/docs/framework/react/guides/queries)
- [useQuery | TanStack Query v5](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery)
- [TypeScript with TanStack](https://tanstack.com/query/v5/docs/framework/react/typescript)
- 
Now back to `Card-Modal`, create the fetch using the `useQuery` hook from **TanStack Query**.

feat: Fetch card data with useQuery hook

`components\modals\CardModal\index.tsx`
```tsx
import { useQuery } from '@tanstack/react-query';

import { fetcher } from '@/lib/fetcher';

import { CardWithList } from '@/types/types';

// Import custom hook for managing card modal state
import { useCardModal } from '@/hooks/useCardModal';

export default function CardModal() {
  // Get the card ID, modal state, and close function from the custom hook
  const id = useCardModal((state) => state.id);
  const isOpen = useCardModal((state) => state.isOpen);
  const onClose = useCardModal((state) => state.onClose);

  // Fetch card data using the useQuery hook
  const {data: cardData } = useQuery<CardWithList>({
    queryKey: ["card", id],
    queryFn: () => fetcher(`/api/cards/${id}`),
  });
```

We finally solved the original problem of fetching the data (through an API), so next we we can display the data. Render the `cardData?.title` inside `DialogContent`.

feat: Display card title in Dialog content

Rendder the card title from `cardData` in the Dialog content. This ensures that the title is visible when the dialog is open.

```tsx
// ...
export default function CardModal() {
  // ...
  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}
    >
      <DialogContent>
        {cardData?.title}
      </DialogContent>
    </Dialog>
  )
}
```

Now we can test the modal by selecting a card within a list. After clicking a card, the modal should open which opens up the `Dialog` displaying the card title.

We can inspect network activity related to a specific card in the F12 Developer Tools (Chrome DevTools).
Check the Network tab, then search for `card`. Once we click on a card and have the modal open, we can see the network request passing in the exact card ID and the data it comes with.

## Card Modal part 2

Let's improve the card modal. 

### Header component for Card

Add a client component `Header.tsx` inside `components\modals\CardModal`.

```tsx
"use client";

import React from 'react';

export default function Header() {
  return (
    <div>Header</div>
  )
}
```

With that we can use and import the `Header` component in `components\modals\CardModal\index.tsx`. Instead of rendering the card title directly as is, we can refactor it to the header component and pass in the `cardData` to the `data` prop.

refactor: Use local Header component in CardModal

In this commit, the CardModal component has been refactored to utilize a local Header component. The `cardData` is now passed as a prop to the Header component, allowing it to display relevant information within the modal.

```tsx
import Header from './Header';

export default function CardModal() {
  // ...
  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}
    >
      <DialogContent>
        <Header data={cardData} />
      </DialogContent>
    </Dialog>
  )
}
```

Now define the prop interface for `Header`.

feat(CardModal): Define prop types for Header

```tsx
"use client";

import { CardWithList } from '@/types/types';
import React from 'react';

interface HeaderProps {
  data: CardWithList;
}

export default function Header({
  data,
}: HeaderProps) {
  return (
    <div>
      Header
    </div>
  )
}
```

Now the `Header` component should be structured in a way that where it should contain the `FormInput` for the card title data. We should also accompany it with an icon, will use `Layout` from lucide-react for now.

feat(Header): Add Layout and FormInput components

```tsx
import { Layout } from 'lucide-react';
import FormInput from '@/components/form/FormInput';

export default function Header({
  data,
}: HeaderProps) {
  return (
    <div>
      <Layout />
      <div>
        <form>
          <FormInput
            id='title'
          />
        </form>
      </div>
    </div>
  )
}
```

Let's also store the `title` data in a state variable.

feat: Add title state for optimistic updates

```tsx
"use client";

import React, { useState } from 'react';

export default function Header({
  data,
}: HeaderProps) {
  const [title, setTitle] = useState(data.title);

  return (
    <div>
      <Layout />
      <div>
        <form>
          <FormInput
            id='title'
            defaultValue={title}
          />
        </form>
      </div>
    </div>
  )
}
```

Enhance the appearance of the `Header` component for the card modal.

style: Add custom styles to Header component

In this commit, custom styles have been applied div container, Layout icon and the FormInput component within the Header. The styles for the FormInput include adjustments to padding, font size, background, and border.

```tsx
// ...
export default function Header({
  data,
}: HeaderProps) {
  // ...
  return (
    <div className='flex items-start gap-x-3 mb-6 w-full' >
      <Layout className='h-5 w-5 mt-1 text-neutral-700' />
      <div className='w-full'>
        <form>
          <FormInput
            id='title'
            defaultValue={title}
            className='relative px-1 -left-1.5 w-[95%] text-xl text-neutral-700 font-semibold bg-transparent border-transparent focus-visible:bg-white focus-visible:border-input mb-0.5 truncate'
          />
        </form>
      </div>
    </div>
  )
}
```

#### Handle undefined cardData in Header component

Create a `Skeleton` for the `Header` component.

feat: Add Skeleton component for Header

This commit adds a `HeaderSkeleton` component that displays a loading skeleton for the Header. The skeleton includes placeholders for various elements, such as icons and text. Also do not use optional chaining `?.` to access the `title` property of the `data` object. Just use `data.title` directly.

```tsx
export default function Header({
  data,
}: HeaderProps) {
  const [title, setTitle] = useState(data.title);
  // ...
}

// ...
Header.Skeleton = function HeaderSkeleton() {
  return (
    <div className='flex items-start gap-x-3 mb-6 w-full' >
      <Skeleton className='h-6 w-6 mt-1 bg-neutral-200' />
      <div>
        <Skeleton className='w-24 h-6  bg-neutral-200' />
        <Skeleton className='w-12 h-4 bg-neutral-200' />
      </div>
    </div>
  )
}
```

Notice in `CardModal` on this line:

```tsx
<Header data={cardData} />
```

We have an error:

```sh
Type 'CardWithList | undefined' is not assignable to type 'CardWithList'.
  Type 'undefined' is not assignable to type 'CardWithList'.
    Type 'undefined' is not assignable to type '{ id: string; title: string; order: number; description: string | null; listId: string; createdAt: Date; updatedAt: Date; }'.ts(2322)
header.tsx(11, 3): The expected type comes from property 'data' which is declared here on type 'IntrinsicAttributes & HeaderProps'
```

Now we can fix the error by conditionally rendering a `Skeleton` if there is no card data and the header if card data exists so:

fix: Handle undefined cardData in CardModal

This commit ensures that the `CardModal` component handles the case when `cardData` is undefined. It avoids type errors related to the expected type of `data`.

feat: Dynamically render skeleton or header

```tsx
export default function CardModal() {
  // ...
  // Fetch card data using the useQuery hook
  const {data: cardData } = useQuery<CardWithList>({
    queryKey: ["card", id],
    queryFn: () => fetcher(`/api/cards/${id}`),
  });

  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}
    >
      <DialogContent>
        {!cardData 
          ? <Header.Skeleton />
          : <Header data={cardData} />
        }
      </DialogContent>
    </Dialog>
  )
}
```

Now we can quickly test by opening up a `Card` and seeing the skeleton render before the `Header` renders with the async `cardData`.

#### Enhance functionality of CardModal header

Continue developing the `Header` component.

feat: Add params, queryClient & inputRef to Header

This commit introduces the following additions to the Header component:
- `params` from `useParams()`
- `queryClient` from `useQueryClient()`
- `inputRef` as a ref for an input element

```tsx
import React, { ElementRef, useRef, useState } from 'react';
import { useParams } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';

export default function Header({
  data,
}: HeaderProps) {
  const params = useParams();
  const queryClient = useQueryClient();
  const inputRef = useRef<ElementRef<"input">>(null);
// ...
}
```

Also add the `onBlur` function, which is used to trigger form submission when the input field loses focus.

feat: Implement onBlur function in card header

```tsx
export default function Header({
  data,
}: HeaderProps) {
  // ...

  function onBlur() {
    inputRef.current?.form?.requestSubmit();
  }
```

feat: Assign ref and onBlur to FormInput in header

```tsx
export default function Header({
  data,
}: HeaderProps) {
  // ...
  return (
    <div className='flex items-start gap-x-3 mb-6 w-full' >
      <Layout className='h-5 w-5 mt-1 text-neutral-700' />
      <div className='w-full'>
        <form>
          <FormInput
            ref={inputRef}
            onBlur={onBlur}
            id='title'
            defaultValue={title}
            className='relative px-1 -left-1.5 w-[95%] text-xl text-neutral-700 font-semibold bg-transparent border-transparent focus-visible:bg-white focus-visible:border-input mb-0.5 truncate'
          />
        </form>
      </div>
    </div>
  )
}
```

Now finally create the `onSubmit` function which just logs the card title from the `formData`. Assign the handler to the `action` prop of the `form`.

feat: Implement onSubmit handler in card header

```tsx
export default function Header({
  data,
}: HeaderProps) {
  // ...

  function onSubmit(formData: FormData) {
    console.log(formData.get("title"));
  }

  return (
    <div className='flex items-start gap-x-3 mb-6 w-full' >
      <Layout className='h-5 w-5 mt-1 text-neutral-700' />
      <div className='w-full'>
        <form action={onSubmit}>
          <FormInput
        // ...
          />
        </form>
      </div>
    </div>
  )
}
```

Let's add one more thing to the output of the header so that the user can determine what list they are in when the card modal is opened.

feat: Show list title in CardModal to improve UX

This commit adds a paragraph below the form input in the Header component. The paragraph displays the list title, allowing users to determine which list they are in when the card modal is opened.

```tsx
export default function Header({
  data,
}: HeaderProps) {
  // ...
  return (
    <div className='flex items-start gap-x-3 mb-6 w-full' >
      <Layout className='h-5 w-5 mt-1 text-neutral-700' />
      <div className='w-full'>
        <form action={onSubmit}>
          <FormInput
        // ...
          />
        </form>
        <p className='text-sm text-muted-foreground'>
          in list <span className='underline'>{data.list.title}</span>
        </p>
      </div>
    </div>
  )
}
```

So what is the bigger picture with these changes? Well let's try out an example, we can click on a card on a list. Open the Chrome DevTools "F12" and inspect the element of the `form`. Now when we try to change the card title, by replacing it with some new text then pressing enter we should be able to see the new title logged into the console.

This allows for the user to edit the card title within the `CardModal` itself. The submit should be sent to the server actions which we have yet to implement.

## updateCard server action

Make `updateCardOrder` folder inside `/actions` and add the following files:

1. Schema
2. Types
3. Server Action handler

### updateCard schema

Create the `UpdateCard` object schema.

feat: Define the UpdateCard Zod schema

- Introduce Zod schema validation to ensure data integrity for UpdateCard

`actions\updateCard\updateCardSchema.ts`
```typescript
import { z } from 'zod';

export const UpdateCard = z.object({
  id: z.string(),
  boardId: z.string(),
  description: z.optional(
    z.string({
      required_error: "Description is required",
      invalid_type_error: "Description is required",
    }).min(3, {
      message: "Description must be 3 or more characters long."
    })
  ),
  title: z.optional(z.string({
    required_error: "Title is required", 
    invalid_type_error: "Title is required", 
  }).min(3, {
    message: "Title must be 3 or more characters long.", 
  })),
});
```

### updateCard types

feat: Define types for updateCard action

```ts
import { z } from 'zod';

import { Card } from '@prisma/client';

import { ActionState } from '@/lib/createServerAction';

import { UpdateCard } from './updateCardSchema';

export type InputType = z.infer<typeof UpdateCard>;

export type OutputType = ActionState<InputType, Card>;
```

### updateCard action

feat: Create updateCard action index handler

This commit adds an `updateCard` server action index handler in the `index.ts` file. The handler performs an action to update a card and returns the updated card data.

```ts
"use server";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { createServerAction } from "@/lib/createServerAction";
import { database } from "@/lib/database";

import { UpdateCard } from "./updateCardSchema";
import { InputType, OutputType } from "./updateCardTypes";

async function performAction (data: InputType): Promise<OutputType> {
  // Return the updated card
  return {
    data: board
  };
}

export const updateCard = createServerAction(UpdateCard, performAction);
```

feat: Add user authentication to updateCard

```ts
import { auth } from "@clerk/nextjs";

async function performAction (data: InputType): Promise<OutputType> {
  // Authenticate the user and get their organization ID
  const { userId, orgId } = auth();

  // If authentication fails, return an error
  if (!userId || !orgId) {
    return {
      error: 'Unauthorized',
    };
  }
  
  return {
    // ...
  };
}
```

Next implement the functionality to update the card in the database.

feat: Update card in database

```tsx
async function performAction(data: InputType): Promise<OutputType> {
// ...

const {
    id,
    boardId,
    ...values
  } = data;

  let card;

  try {
    card = await database.card.update({
      where: {
        id,
        list: {
          board: {
            orgId,
          },
        },
      },
      data: {
        ...values,
      },
    });

  } catch (error) {
    return {
      error: "Failed to update card.",
    };
  }
  
  // Return the updated card
  return {
    data: card,
  };
}
```

Finally, before we return the updated card let's invoke `revalidatePath` on the `boardId` page for cache revalidation.

feat: Add cache revalidation for updateCard

Adds cache revalidation for the updated board path to ensure immediate UI consistency.

```ts
async function performAction(data: InputType): Promise<OutputType> {
// ...

  // Revalidate the cache for the updated board path 
  // to ensure immediate UI consistency post-update
  revalidatePath(`/board/${boardId}`);

    // Return the updated card
  return {
    data: card,
  };
}

export const updateCard = createServerAction(UpdateCard, performAction);
```

### Use updateCard server action

feat: Instantiate updateCard server action

In the `CardModal` component's `Header`, the `updateCard` server action is instantiated using `useServerAction`.

feat: Handle form submission in card modal header

This function processes form data from the input field in the Header component. It extracts the title and board ID, compares the title with the existing data, and executes an update action if the title has changed.

`components\list\ListContainer.tsx`
```tsx
import { useServerAction } from '@/hooks/useServerAction';
import { updateCard } from '@/actions/updateCard';

export default function Header({
  data,
}: HeaderProps) {

  const { executeServerAction: executeUpdateCard } = useServerAction(updateCard);

  /**
   * Handles form submission in the Header component.
   * @param formData - The form data containing input values.
   */
  function onSubmit(formData: FormData): void {
    const title = formData.get("title") as string;
    const boardId = params.boardId as string;

    if (title === data.title) {
      return;
    }

    executeUpdateCard({
      title,
      boardId,
      id: data.id,
    });
  }
  // ...
}
```

#### Invalidate relevant query after card update

Next add the success and error callbacks. For the success we want to mark queries as stale and potentially refetch them. We know that a query's data is out of data because of something that the user has done.

- [Query Invalidation | TanStack Query](https://tanstack.com/query/latest/docs/framework/react/guides/query-invalidation)
  
feat: Add success & error callbacks to updateCard

When executing the updateCard server action, add an `onSuccess` callback that invalidates the relevant query in the query cache, displays a success toast with the new title, and updates the local state. Also add an `onError` callback displays an error toast if the action fails.

```tsx
import { toast } from 'sonner';

export default function Header({
  data,
}: HeaderProps) {

  const { executeServerAction: executeUpdateCard } = useServerAction(updateCard, {
    onSuccess(data) {
      // Invalidate the relevant query in the query cache
      queryClient.invalidateQueries({
        queryKey: ["card", data.id]
      });

      // Display a success toast with the new title
      toast.success(`Renamed to "${data.title}`);
      
      // Update the local state with the new title
      setTitle(data.title);
    },
    onError(error) {
      toast.error(error);
    },
  });
```

## Description component

Create client component `Description` inside the `CardModal`. Give it a prop interface which contains `data` a type of `CardWithList`. Then render the `data.description` in the output.

feat: Define prop types for Description component

`components\modals\CardModal\Description.tsx`
```tsx
"use client";

import React from 'react';

import { CardWithList } from '@/types/types';

interface DescriptionProps {
  data: CardWithList
}

export default function Description({
  data
}: DescriptionProps) {
  return (
    <div>{data.description}</div>
  )
}
```

### Add visual placeholder for card description

feat: Add skeleton component to Description

The `Description` component now includes a skeleton UI for loading state. It displays placeholders for the card description.

```tsx
Description.Skeleton = function DescriptionSkeleton() {
  return (
    <div className='flex items-start gap-x-3 w-full'>
      <Skeleton className='h-6 w-6 bg-neutral-200'/>
      <div className='w-full'>
        <Skeleton className='h-6 w-24 mb-2 bg-neutral-200'/>
        <Skeleton className='h-[78px] w-full mb-2 bg-neutral-200'/>
      </div>
    </div>
  )
}
```

Setup a responsive grid which will contain the description, card actions and more. This will be inside the `CardModal`.

feat: Add responsive grid container in CardModal

In the CardModal component, a grid layout is introduced to accommodate the card description and related actions. The layout adjusts based on screen size.

`components\modals\CardModal\index.tsx`
```tsx
export default function CardModal() { 
  // ...
  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}
    >
      <DialogContent>
        {!cardData 
          ? <Header.Skeleton />
          : <Header data={cardData} />
        }
        {/* Responsive grid for card description and actions */}
        <div className='grid grid-cols-1 md:grid-cols-4 md:gap-4'>
          <div className='col-span-3'>
            <div className='w-full space-y-6'>

            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
```

Now inside the grid container we can conditionally render the card description based on `cardData`.

feat: Conditionally render card description

In the CardModal component, the description skeleton is conditionally rendered based on whether `cardData` is available. If not, the skeleton UI is displayed; otherwise, the actual description content is shown.

```tsx
        {/* Responsive grid for card description and actions */}
        <div className='grid grid-cols-1 md:grid-cols-4 md:gap-4'>
          <div className='col-span-3'>
            <div className='w-full space-y-6'>
              {!cardData
                ? <Description.Skeleton />
                : <Description data={cardData} />
              }
            </div>
          </div>
        </div>
```

### Description output

Now let's add and style the `Description` output to match the skeleton.

feat: Add icon and title to Description component

```tsx
import { AlignLeft } from 'lucide-react';

export default function Description({
  data
}: DescriptionProps) {
  return (
    <div className='flex items-start gap-x-3 w-full'>
      <AlignLeft className='h-5 w-5 mt-0.5 text-neutral-700' />
      <div className='w-full'>
        <p className='mb-2 font-semibold text-neutral-700'>
          Description
        </p>
      </div>
      {data.description}
    </div>
  )
}
```

Next we want to add a conditional element. During edit mode it will be a `textarea`, otherwise just a `div`. Let's start by adding a `div` after the `p`.

feat: Add description input field to Description

This commit adds an input field for users to enter or edit descriptions. The new `<div>` element with `role="button"` serves as the input area.

- Added a description input field
- The input field has a placeholder ("Add a description...") when no description is provided
- The component now allows users to interact with the description input

```tsx
export default function Description({
  data
}: DescriptionProps) {
  return (
    <div className='flex items-start gap-x-3 w-full'>
      <AlignLeft className='h-5 w-5 mt-0.5 text-neutral-700' />
      <div className='w-full'>
        <p className='mb-2 font-semibold text-neutral-700'>
          Description
        </p>
        <div
          role="button"
          className='min-h-[78px] px-3.5 py-3 rounded-md bg-neutral-200 text-sm font-medium'
        >
          {data.description || "Add a description..."}
        </div>
      </div>
      {data.description}
    </div>
  )
}
```

### Editing mode for description

Let's set up the state and refs we need to enable editing mode.

feat: Enable editing mode in Description component

Added state (`isEditing`) and refs (`formRef` and `textAreaRef`) to allow users to edit the card description. 

```tsx
import React, { ElementRef, useRef, useState } from 'react';
// ...
export default function Description({
  data
}: DescriptionProps) {
  const [isEditing, setIsEditing] = useState(false);
  const formRef = useRef<ElementRef<"form">>(null);
  const textAreaRef = useRef<ElementRef<"textarea">>(null);
```

feat: Add queryClient and params to Description

```tsx
import { useParams } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';

export default function Description({
  data
}: DescriptionProps) {
  const params = useParams();
  const queryClient = useQueryClient();
```

feat: Implement edit toggle in Description

```tsx
export default function Description({
  data
}: DescriptionProps) {
  const [isEditing, setIsEditing] = useState(false);
  const textAreaRef = useRef<ElementRef<"textarea">>(null);

  /**
   * Enables editing mode and focus input.
   */
  function enableEditing() {
    setIsEditing(true);
    setTimeout(() => {
      textAreaRef.current?.focus();
    });
  }

  /**
   * Disables editing mode.
   */
  function disableEditing() {
    setIsEditing(false);
  }
```

feat: Allow multiple ways to exit edit mode

This commit improves user experience by providing multiple ways to exit edit mode within the card's `Description` component. Now the user can also use the "Escape" key or click outside the form element to toggle edit mode off. This flexibility ensures a smoother interaction for users who prefer different methods of interaction.

feat: Allow user to disable editing w/ Escape key

```tsx
export default function Description({
  data
}: DescriptionProps) {
  const [isEditing, setIsEditing] = useState(false);

  function disableEditing() {
    setIsEditing(false);
  }

  /**
   * When user clicks "Escape" key, it disables editing mode.
   * @param event the key press event
   */
  function handleEscapeKey(event: KeyboardEvent) {
    if (event.key === "Escape") {
      disableEditing();
    }
  }
```

Now let's implement the functionality for the escape key. Use the `useEventListener` hook to attach an event listener to entire docuemtn and to listen for a specific keyboard event. It takes two arguments the event type `keydown` and a callback function `handleEscapeKey` which will be executed when the specified event occurs. This hook automatically manages the event listener lifecycle (adding and removing).

 - The `handleEscapeKey` function is defined to handle the `keydown` event
 - If the pressed key is the "Escape" key (`event.key === "Escape"`), it calls the `disableEditing()` function
 - The `useEventListener` hook is used to listen for the `keydown` event on the entire document (window level)

feat: Add Esc key event listener for edit disable

```tsx
import { useEventListener } from 'usehooks-ts';

export default function Description({
  data
}: DescriptionProps) {
  function handleEscapeKey(event: KeyboardEvent) {
    if (event.key === "Escape") {
      disableEditing();
    }
  }
  // Custom hook that attaches event listeners to DOM elements, the window, or media query lists.
  // Listen for the 'keydown' event on the entire document (window level)
  useEventListener('keydown', handleEscapeKey);

}
```

Similarly, add the `useOnClickOutside` to disable editing when user clicks outside the form.

feat: Disable editing on outside click

```tsx
import { useEventListener, useOnClickOutside } from 'usehooks-ts';

export default function Description({
  data
}: DescriptionProps) {

  // Custom hook that handles clicks outside a specified element.
  // Disable editing when user clicks outside the form
  useOnClickOutside(formRef, disableEditing);
```

Create the submit handler function without implementing the server action.

feat: Add onSubmit handler to Description

```tsx
  function onSubmit(formData: FormData) {
    const boardId = params.boardId as string;
    const description = formData.get('description') as string;

    console.log(`boardId: ${boardId}`);
    console.log(`description: ${description}`);

    // TODO: execute server action to update
  }
```

### Conditionally render the edit mode input field

feat: Toggle view/edit mode in card description

Now let's conditionally render the `div` when in display mode or `textarea` input when in edit mode.

feat: Conditionally render input or view

```tsx
export default function Description({
  data
}: DescriptionProps) {
  // ...
  return (
    <div className='flex items-start gap-x-3 w-full'>
      <AlignLeft className='h-5 w-5 mt-0.5 text-neutral-700' />
      <div className='w-full'>
        <p className='mb-2 font-semibold text-neutral-700'>
          Description
        </p>
        {isEditing ? (
          <div>Editing Mode</div>
        ) : (
          <div
            onClick={enableEditing}
            role="button"
            className='min-h-[78px] px-3.5 py-3 rounded-md bg-neutral-200 text-sm font-medium'
          >
            {data.description || "Add a description..."}
          </div>
        )}
      </div>
    </div>
  )
}
```

### Edit mode: input field of card description

Now let's refactor the placeholder `div` for the editing mode to a `form` element. The `form` consists of a `FormTextArea`, `FormSubmitButton` and a cancel `Button`.

feat: Develop edit mode of card description

Added a form with FormTextArea, FormSubmitButton, and Button components to enable editing mode for the card description.

refactor: Card description edit mode into a form

```tsx
import { Button } from '@/components/ui/button';
import FormSubmitButton from '@/components/form/FormSubmitButton';
import FormTextArea from '@/components/form/FormTextArea';

export default function Description({
  data
}: DescriptionProps) {
  // ...
    return (
    <div className='flex items-start gap-x-3 w-full'>
      <AlignLeft className='h-5 w-5 mt-0.5 text-neutral-700' />
      <div className='w-full'>
        <p className='mb-2 font-semibold text-neutral-700'>
          Description
        </p>
        {isEditing ? (
          <form
            ref={formRef}
            className='space-y-2'
          >
            <FormTextArea
              id='description'
              placeholder='Add a description...'
              defaultValue={data.description || undefined}
              className='w-full mt-2'
            />
            <div className='flex items-center gap-x-2'>
              <FormSubmitButton>
                Save
              </FormSubmitButton>
              <Button
                type='button'
                onClick={disableEditing}
                size='sm'
                variant='ghost'
              >
                Cancel
              </Button>
            </div>
          </form>
        ) : (
          <div
            onClick={enableEditing}
            role="button"
            className='min-h-[78px] px-3.5 py-3 rounded-md bg-neutral-200 text-sm font-medium'
          >
            {data.description || "Add a description..."}
          </div>
        )}
      </div>
    </div>
  )
}
```

feat: Assign ref to FormTextArea in Description

```tsx
<FormTextArea
  ref={textAreaRef}
  // ...props
/>
```

### Use updateCard server action in Description component

So do we create a server action to update the description? 

No, we can still use the `updateCard` server action because as we can see in the schema, we already have the optional description ready to be validated:

`actions\updateCard\updateCardSchema.ts`
```ts
export const UpdateCard = z.object({
  boardId: z.string(),
  description: z.optional(
    z.string({
      required_error: "Description is required",
      invalid_type_error: "Description is required",
    }).min(3, {
      message: "Description must be 3 or more characters long."
    })
  ),
```

And in the index handler we have `...values` which spreads all the values in the data that the user passes in to the server action. So this means it covers both the card title editing and card description editing.

`actions\updateCard\index.ts`
```ts
async function performAction(data: InputType): Promise<OutputType> {
  // ...
  let card;

  try {
    card = await database.card.update({
      where: {
        id,
        list: {
          board: {
            orgId,
          },
        },
      },
      data: {
        ...values,
      },
    });
```

So let's instantiate the server action with success and error callbacks. For now it should just display toast messages.

feat: Instantiate updateCard server action

```tsx
import { toast } from 'sonner';
import { updateCard } from '@/actions/updateCard';
import { useServerAction } from '@/hooks/useServerAction';

export default function Description({
  data
}: DescriptionProps) {

  const { executeServerAction: executeUpdateCard } = useServerAction(updateCard, {
    onSuccess(data) {
      toast.success(`Card ${ data.title } updated.`);
    },
    onError(error) {
      toast.error(error);
    },
  });
```

Let's also take the `fieldErrors` from `useServerAction` and add it to the `errors` field of the `FormTextArea` so we can present error validation on the input field.

feat: Add error validation to FormTextArea input

```tsx
  const { 
    executeServerAction: executeUpdateCard, 
    fieldErrors 
  } = useServerAction(updateCard, {
    onSuccess(data) {
      toast.success(`Card ${ data.title } updated.`);
    },
    onError(error) {
      toast.error(error);
    },
  });

  return (
    <div className='flex items-start gap-x-3 w-full'>
      <AlignLeft className='h-5 w-5 mt-0.5 text-neutral-700' />
      <div className='w-full'>
        <p className='mb-2 font-semibold text-neutral-700'>
          Description
        </p>
        {isEditing ? (
          <form
            ref={formRef}
            className='space-y-2'
          >
            <FormTextArea
              id='description'
              placeholder='Add a description...'
              defaultValue={data.description || undefined}
              errors={fieldErrors}
              className='w-full mt-2'
            />
```

Next let's implement the submit handler and assign it to the form.

feat: Implement form submission in Description

feat: Assign submit handler to form in edit mode

```tsx

  return (
    <div className='flex items-start gap-x-3 w-full'>
      { /* ... */}
        {isEditing ? (
          <form
            action={onSubmit}
            ref={formRef}
            className='space-y-2'
          >
```

feat: Implement submit handler in card description

```tsx
  /**
   * Handles form submission for updating card information.
   * @param formData The form data containing user input.
   */
  function onSubmit(formData: FormData): void {
    // Extract the boardId from the URL parameters (params)
    const boardId = params.boardId as string;

    // Extract the description from the form data
    const description = formData.get('description') as string;

    executeUpdateCard({
      id: data.id, // The card ID (from 'data' prop)
      boardId,
      description,
    });
  }
```

After some testing we need to update the `onSuccess` callback when the `updateCard` server action is executed.

feat: Enhance success behavior for card updates

- Add `queryClient` and `invalidateQueries`
- Display success message with a toast notification
- Disable the editing after form submission

feat: Invalidate query and update success behavior

- Added `queryClient` and `invalidateQueries` to handle query invalidation
- Displayed a toast notification with a success message when the card is updated
- Disabled editing mode after form submission

```tsx
  const {
    executeServerAction: executeUpdateCard,
    fieldErrors
  } = useServerAction(updateCard, {
    onSuccess(data) {
      // Invalidate the relevant query in the query cache
      queryClient.invalidateQueries({
        queryKey: ["card", data.id]
      });

      toast.success(`Card ${ data.title } updated.`);

      disableEditing();
    },
    onError(error) {
      toast.error(error);
    },
  });
```

## CardModal actions

Create a client component `Actions.tsx` in `/CardModal`.

```tsx
"use client";

import React from 'react';

export default function Actions() {
  return (
    <div>Actions</div>
  )
}
```

feat: Define prop types for card Actions component

```tsx
import { CardWithList } from '@/types/types';

interface ActionsProps {
  data: CardWithList
}

export default function Actions({
  data,
}: ActionsProps) {
  return (
    <div>Actions</div>
  )
}
```

Let's create the skeleton for the card actions.

feat: Create card actions skeleton placeholder

```tsx
import { Skeleton } from '@/components/ui/skeleton';

export default function Actions() {
  return (
    <div>Actions</div>
  )
}

Actions.Skeleton = function ActionsSkeleton() {
  return (
    <div className='mt-2 space-y-2'>
      <Skeleton className='w-20 h-4 bg-neutral-200'/>
      <Skeleton className='w-full h-8 bg-neutral-200'/>
      <Skeleton className='w-full h-8 bg-neutral-200'/>
    </div>
  )
}
```

Now conditionally render the `Actions` when `cardData` is available, otherwise render the skeleton. Also pass in the `cardData` to the `data` prop in `Actions`.

feat: Conditionally render card actions

In the CardModal component, the card actions are conditionally rendered based on whether `cardData` is available. If `cardData` is not present, a skeleton loader is displayed; otherwise, the actual card actions are shown using the `Actions` component.

```tsx
export default function CardModal() {
  // ...

  const {data: cardData } = useQuery<CardWithList>({
    queryKey: ["card", id],
    queryFn: () => fetcher(`/api/cards/${id}`),
  });

  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}
    >
      <DialogContent>
        {!cardData 
          ? <Header.Skeleton />
          : <Header data={cardData} />
        }
        {/* Responsive grid for card description and actions */}
        <div className='grid grid-cols-1 md:grid-cols-4 md:gap-4'>
          {/* Card Description */}
          <div className='col-span-3'>
            <div className='w-full space-y-6'>
              {!cardData
                ? <Description.Skeleton />
                : <Description data={cardData} />
              }
            </div>
          </div>
          {/* Card Actions */}
          {!cardData
            ? <Actions.Skeleton />
            : <Actions data={cardData} />
          }
        </div>
      </DialogContent>
    </Dialog>
  )
}
```

### Actions component output

Now after a lot of setup, lets work on the general structure of the card's `Actions` component. It will contain a title and two buttons. A copy and delete button with their respective icons.

feat: Create output of CardModal Actions component

feat: Add button and icons to CardModal Actions

```tsx
import { Copy, Trash } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface ActionsProps {
  data: CardWithList
}

export default function Actions({
  data,
}: ActionsProps) {
  return (
    <div className='mt-2 space-y-2'>
      <p className='text-xs font-semibold'>
        Actions
      </p>
      {/* Buttons */}
      <Button>
        <Copy className='h-4 w-4 mr-2' />
        Copy
      </Button>
      <Button>
        <Trash className='h-4 w-4 mr-2' />
        Delete
      </Button>
    </div>
  )
}
```

#### Extend the functionality of Button component

feat: Extend Button component with variant & size

Let's extend the functionality of the `Button` component by giving it a new variant that better harmonizes with the `CardModal`.

Call this new variant `"card-action"`. Notice that if we simply put the property name as `card-action`, it will interpret the hypen `(-)` as a subtraction operation. In JS/TS, hypens are not valid characters for variable or property names. So we MUST wrap the variant property name in single or double quotes so it can treated as a single string property.

feat: Add "card-action" variant to Button

In the Button component, a new variant called "card-action" is introduced to harmonize with the overall style of the `CardModal`, providing consistent and visually appealing buttons. The "card-action" variant can be customized further to match specific design requirements.

`components\ui\button.tsx`
```tsx
const buttonVariants = cva(
  // "...",
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
        transparent: "bg-transparent text-white hover:bg-white/20",
        "card-action": "bg-neutral-200 hover:bg-neutral-300 text-secondary-foreground",
      },
```

Let's also add a new size named `inline` that automatically adjusts an element's height based on its content. It also has some padding around and 14px font size (to adjust the icons and text content within).

The term "inline" is commonly used to describe a button size that occupies minimal vertical space and flows seamlessly within a line of text or other elements. It implies that the button doesn't disrupt the layout and remains compact.

feat: Add "inline" size variant to Button

In the Button component, a new size variant called "inline" is introduced to create a compact button size that aligns well within a line of text or other elements. The "inline" variant is designed for scenarios where vertical space is limited.

```tsx
const buttonVariants = cva(
  // "...",
  {
    variants: {
      variant: {
        // ...
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        inline: "h-auto px-2 py-1.5 text-sm",
      },
```

Use the new `card-action` variant and `inline` size within the `Actions` component.

style: Add button variant and size to card actions

```tsx
export default function Actions({
  data,
}: ActionsProps) {
  return (
    <div className='mt-2 space-y-2'>
      <p className='text-xs font-semibold'>
        Actions
      </p>
      {/* Buttons */}
      <Button
        variant='card-action'
        size='inline'
        className='w-full justify-start'
      >
        <Copy className='h-4 w-4 mr-2' />
        Copy
      </Button>
      <Button
        variant='card-action'
        size='inline'
        className='w-full justify-start'
      >
        <Trash className='h-4 w-4 mr-2' />
        Delete
      </Button>
    </div>
  )
}
```

## copyCard server action

Create a directory named `copyCard` inside of `/actions` and create the following files:

Create `copyCard` folder inside `/actions` and add the following files:

1. Schema
2. Types
3. Server Action handler

### copyCard schema

Create the `CopyCard` object schema.

feat: Define the CopyCard Zod schema

`actions\copyCard\copyCardSchema.ts`
```ts
import { z } from 'zod';

/**
 * Define the CopyCard object schema.
 * 
 */
export const CopyCard = z.object({
  id: z.string(),
  boardId: z.string(),
});
```

### copyCard types

feat: Define types for copyCard action

`actions\copyCard\copyCardTypes.ts`
```tsx
import { z } from 'zod';

// Import the expected output type from Prisma client
import { Card } from '@prisma/client';

// Encapsulate the state of various actions (e.g., fetching data, submitting forms, etc.)
// Provides a structured way to handle errors and manage data flow
import { ActionState } from '@/lib/createServerAction';

// Import the schema (validation rules)
import { CopyCard } from './copyCardSchema';

// Define the input type based on the schema
export type InputType = z.infer<typeof CopyCard>;

// Define the output data type (ActionState) with expected output type
export type OutputType = ActionState<InputType, Card>;
```

### copyCard action

docs: Define server action for copying a card

feat: Create copyCard action index handler

This commit defines a server action to copy a card. It imports necessary modules, creates the server action using the provided input validation schema (CopyCard), and specifies the expected input and output types. The performAction function handles the card copying logic.

`actions\copyCard\index.ts`
```tsx
"use server";

import { auth } from "@clerk/nextjs"; // Authentication module
import { revalidatePath } from "next/cache"; // Cache revalidation module

import { createServerAction } from "@/lib/createServerAction"; // Server action creator
import { database } from "@/lib/database"; // Database interface

import { CopyCard } from "./copyCardSchema"; // Input validation schema
import { InputType, OutputType } from "./copyCardTypes"; // Type definitions

/**
 * Defines a server action to copy a card.
 *
 * @param {InputType} data - An object containing the data needed to copy the card.
 * @returns {Promise<OutputType>} - The copied card or an error message.
 */
async function performAction(data: InputType): Promise<OutputType> {
  let card;
  // Return the copied card
  return {
    data: card,
  };
}

// Export the server action for external use
export const copyCard = createServerAction(CopyCard, performAction);
```

feat: Add user authentication to copyCard

```ts
import { auth } from "@clerk/nextjs";

async function performAction (data: InputType): Promise<OutputType> {
  // Authenticate the user and get their organization ID
  const { userId, orgId } = auth();

  // If authentication fails, return an error
  if (!userId || !orgId) {
    return {
      error: 'Unauthorized',
    };
  }
  
  return {
    // ...
  };
}
```

feat: Add cache revalidation for copyCard

Adds cache revalidation for the updated board path to ensure immediate UI consistency.

```ts
async function performAction(data: InputType): Promise<OutputType> {
// ...
  const { id, boardId } = data;

  // Revalidate the cache for the updated board path 
  // to ensure immediate UI consistency post-update
  revalidatePath(`/board/${boardId}`);

    // Return the updated card
  return {
    data: card,
  };
}
```

Finally, we implement the functionality to duplicate the card.

- Open up a `try..catch` block and setup the error handling
- Fetch the original card to duplicate in the database
  - Handle the error when card isn't found
- Calculate the next order based on the most recent card.
- Create the card in the database via **deep copy**

Note: A **deep copy** refers to creating a duplicate or clone of an object or data structure in such a way that all nested elements (including sub-objects, arrays, etc.) are also duplicated. In other words, a deep copy ensures that the copied object is entirely independent of the original, and any modifications made to one do not affect the other.

In programming, deep copying is commonly used when you want to duplicate complex data structures (such as objects, arrays, or trees) without any shared references. It ensures that changes made to the copied structure do not impact the original one.

feat: Implement copyCard server action logic

feat: Execute deep copy logic for card duplication

This commit adds the logic to duplicate a card by deep copying the source card. It retrieves the original card, calculates the next order, and creates a new card with the appropriate title, description, and order.

```tsx
async function performAction(data: InputType): Promise<OutputType> {
  const { id, boardId } = data;

  let card;

    try {
    // Find the original card to duplicate
    const sourceCard = await database.card.findUnique({
      where: {
        id,
        list: {
          board: {
            orgId,
          },
        },
      },
    });

    // Return an error message if the original card is not found
    if (!sourceCard) {
      return { error: "Card not found." };
    }

    // Fetch the most recent card in the list to properly assign the newest order
    const mostRecentCard = await database.card.findFirst({
      where: { listId: sourceCard.listId },
      orderBy: { order: "desc" },
      select: { order: true },
    });

    // Get the next order depending on whether the mostRecentCard is present or not
    const nextOrder = mostRecentCard ? mostRecentCard.order + 1 : 1;

    // Create a new card by deep copying the source card
    card = await database.card.create({
      data: {
        title: `${sourceCard.title} - Copy`,
        description: sourceCard.description,
        order: nextOrder,
        listId: sourceCard.listId,
      },
    });
  } catch (error) {
    return {
      error: "Failed to copy.",
    };
  }
```

### Use copyCard server action

With `useServerAction` hook create the copyCard server action. Also destructure the `isLoading` and rename it to `isLoadingCopy`.

feat: Instantiate copyCard in Actions component

`components\modals\CardModal\Actions.tsx`
```tsx
import { copyCard } from '@/actions/copyCard';
import { useServerAction } from '@/hooks/useServerAction';

export default function Actions({
  data,
}: ActionsProps) {

  const {
    executeServerAction: executeCopyCard,
    isLoading: isLoadingCopy,
  } = useServerAction(copyCard);
```

Next create the `onCopy` function that executes the copyCard server action. We will `useParams` to extract the `boardId` that is needed for the server action.

feat: Implement onCopy function handler

This commit adds an `onCopy` function handler to handle copying behavior. It retrieves the `boardId` from the URL parameters and executes the `copyCard` server action.

```tsx
import { useParams } from 'next/navigation';

import { copyCard } from '@/actions/copyCard';
import { useServerAction } from '@/hooks/useServerAction';

export default function Actions({
  data,
}: ActionsProps) {
  const params = useParams();

  const {executeServerAction: executeCopyCard } = useServerAction(copyCard);

  function onCopy() {
    const boardId = params.boardId as string;
    executeCopyCard({
      id: data.id,
      boardId
    });
  }
```

Finally, assign the respective props to the copy button to give it the copy functionality. Set the `onClick` prop to `onCopy` function, and set the `disabled` prop to `isLoadingCopy`.

feat: Add onClick & disabled props to copy Button

This commit enhances the card's Actions component by adding the onClick handler and disabling the copy Button when the action is in progress.

```tsx
export default function Actions({
  data,
}: ActionsProps) {

  const {
    executeServerAction: executeCopyCard,
    isLoading: isLoadingCopy,
  } = useServerAction(copyCard);

  function onCopy() {
    const boardId = params.boardId as string;
    executeCopyCard({
      id: data.id,
      boardId
    });
  }

  return (
    <div className='mt-2 space-y-2'>
      <p className='text-xs font-semibold'>
        Actions
      </p>
      {/* Buttons */}
      <Button
        onClick={onCopy}
        disabled={isLoadingCopy}
        variant='card-action'
        size='inline'
        className='w-full justify-start'
      >
        <Copy className='h-4 w-4 mr-2' />
        Copy
      </Button>
```

Now add the `onSuccess` and `onError` callbacks to the copyCard server action.

The behavior we want on success is to present a toast success message from sonner. We also want to close the `cardModal` for user convenience, so we need to use the `useCardModal` hook. As for error handling we just display a toast notification.

feat: Add success & error callbacks to copyCard

This commit adds callback functions that are executed in response to specific events, such as successful or failed server action. The `onSuccess` callback displays a success toast with the copied card's title, while the `onError` callback shows an error toast with the specific error message.

```tsx
import { toast } from 'sonner';
import { useCardModal } from '@/hooks/useCardModal';

export default function Actions({
  data,
}: ActionsProps) {
  const cardModal = useCardModal();
  const params = useParams();

  const {
    executeServerAction: executeCopyCard,
    isLoading: isLoadingCopy,
  } = useServerAction(copyCard, {
    onSuccess(data) {
      toast.success(`Card "${data.title} copied.`);
      cardModal.onClose();
    },
    onError(error) {
      toast.error(error);
    },
  });
```

## deleteCard server action

Create a directory named `deleteCard` inside of `/actions` and create the following files:

Create `deleteCard` folder inside `/actions` and add the following files:

1. Schema
2. Types
3. Server Action handler

### deleteCard schema

Create the `deleteCard` object schema.

feat: Define the deleteCard Zod schema

`actions\deleteCard\deleteCardSchema.ts`
```ts
import { z } from 'zod';

export const DeleteCard = z.object({
  id: z.string(),
  boardId: z.string(),
});
```

### deleteCard types

feat: Define types for deleteCard action

`actions\deleteCard\deleteCardTypes.ts`
```javascript
import { z } from 'zod';
import { Card } from '@prisma/client';

import { ActionState } from '@/lib/createServerAction';

import { DeleteCard } from './deleteCardSchema';

export type InputType = z.infer<typeof DeleteCard>;
export type OutputType = ActionState<InputType, Card>;
```

### deleteCard index handler

docs: Define server action for deleting a card

feat: Create deleteCard action index handler

This commit defines a server action to delete a card. It imports necessary modules, creates the server action using the provided input validation schema (DeleteCard), and specifies the expected input and output types. The performAction function handles the card deleting logic.

`actions\deleteCard\index.ts`
```tsx
"use server";

import { auth } from "@clerk/nextjs"; // Authentication module
import { revalidatePath } from "next/cache"; // Cache revalidation module

import { createServerAction } from "@/lib/createServerAction"; // Server action creator
import { database } from "@/lib/database"; // Database interface

import { DeleteCard } from "./deleteCardSchema"; // Input validation schema
import { InputType, OutputType } from "./deleteCardTypes"; // Type definitions

/**
 * Defines a server action to delete a card.
 *
 * @param {InputType} data - An object containing the data needed to delete the card.
 * @returns {Promise<OutputType>} - The deleted card or an error message.
 */
async function performAction(data: InputType): Promise<OutputType> {
  let card;
  
  // Return the deleted card
  return {
    data: card,
  };
}

// Export the server action for external use
export const deleteCard = createServerAction(DeleteCard, performAction);
```

feat: Add user authentication to deleteCard

```ts
import { auth } from "@clerk/nextjs";

async function performAction (data: InputType): Promise<OutputType> {
  // Authenticate the user and get their organization ID
  const { userId, orgId } = auth();

  // If authentication fails, return an error
  if (!userId || !orgId) {
    return {
      error: 'Unauthorized',
    };
  }
  
  return {
    // ...
  };
}
```

feat: Add cache revalidation for deleteCard

Adds cache revalidation for the updated board path to ensure immediate UI consistency.

```ts
async function performAction(data: InputType): Promise<OutputType> {
// ...
  const { id, boardId } = data;

  // Revalidate the cache for the updated board path 
  // to ensure immediate UI consistency post-update
  revalidatePath(`/board/${boardId}`);

  return {
    data: card,
  };
}
```

feat: Implement deleteCard server action logic

feat: Implement card deletion logic

```ts
async function performAction(data: InputType): Promise<OutputType> {
// ...
  const { id, boardId } = data;

  let card;

  try {
    card = await database.card.delete({
      where: {
        id,
        list: {
          board: {
            orgId,
          },
        },
      },
    });
  } catch (error) {
    return {
      error: "Failed to delete card.",
    };
  }

  // Revalidate the cache for the updated board path
  // to ensure immediate UI consistency post-update
  revalidatePath(`/board/${boardId}`);

  // Return the deleted card
  return {
    data: card,
  };
}
```

### Use deleteCard server action

feat: Wire up the delete button in CardModal

With `useServerAction` hook create the deleteCard server action. Also destructure the `isLoading` and rename it to `isLoadingDelete`.

feat: Add deleteCard action in Actions component

`components\modals\CardModal\Actions.tsx`
```tsx
import { deleteCard } from '@/actions/deleteCard';
import { useServerAction } from '@/hooks/useServerAction';

export default function Actions({
  data,
}: ActionsProps) {

  const {
    executeServerAction: executeDeleteCard,
    isLoading: isLoadingDelete,
  } = useServerAction(deleteCard)
```

Next create the `onDelete` function that executes the deleteCard server action. We will `useParams` to extract the `boardId` that is needed for the server action.

feat: Implement onDelete function handler

This commit adds an `onDelete` function handler to handle card deletion. It retrieves the `boardId` from the URL parameters and executes the `deleteCard` server action.

```tsx
   function onDelete() {
     const boardId = params.boardId as string;
     executeDeleteCard({
       id: data.id,
       boardId
     });
   }
```

Finally, assign the respective props to the delete button to give it the delete functionality. Set the `onClick` prop to `onDelete` function, and set the `disabled` prop to `isLoadingCopy`.

feat: Add OnClick & disabled to delete Button

This commit enhances the card's Actions component by adding the onClick handler and disabling the delete Button when the action is in progress.

```tsx
export default function Actions({
  data,
}: ActionsProps) {

  const {
    executeServerAction: executeDeleteCard,
    isLoading: isLoadingDelete,
  } = useServerAction(deleteCard);

  function onDelete() {
    const boardId = params.boardId as string;
    executeDeleteCard({
      id: data.id,
      boardId
    });
  }

  return (
    <div className='mt-2 space-y-2'>
      <p className='text-xs font-semibold'>
        Actions
      </p>
      {/* Buttons */}
      <Button
        onClick={onDelete}
        disabled={isLoadingDelete}
        variant='card-action'
        size='inline'
        className='w-full justify-start'
      >
        <Trash className='h-4 w-4 mr-2' />
        Delete
      </Button>
         </div>
  )
}
```

feat: Add success & error callbacks to deleteCard

This commit adds callback functions that are executed in response to specific events, such as successful or failed server action. The `onSuccess` callback displays a success toast with the deleted card's title, while the `onError` callback shows an error toast with the specific error message.

```tsx
import { toast } from 'sonner';
import { useCardModal } from '@/hooks/useCardModal';

export default function Actions({
  data,
}: ActionsProps) {
  const cardModal = useCardModal();

  const {
    executeServerAction: executeDeleteCard,
    isLoading: isLoadingDelete,
  } = useServerAction(deleteCard, {
    onSuccess(data) {
      toast.success(`Card "${data.title} deleted.`);
      cardModal.onClose();
    },
    onError(error) {
      toast.error(error);
    },
  });
```

## Audit Log

The next step for our application is creating a record of events and changes. This **audit log** will be used for the `Activity` portion of our application.

An **audit log** is the process of documenting activity within the software systems used across an organization. It records events, their timestamps, responsible users or services, and impacted entities. 

Audit logs help track user activity, investigate breaches, and ensure compliance with regulatory requirements. These logs capture information such as event names, descriptions, actors, impacted objects, and source details. 

Unlike regular system logs, which aid in troubleshooting errors, audit logs serve compliance and business policy enforcement purposes. Organizations use them to track administrative actions, data access, user denials, and system-wide changes.

Sources:

- (1) [Audit Logging: What It Is & How It Works | Datadog](https://www.datadoghq.com/knowledge-center/audit-logging/)
- (2) [What Is an Audit Log? - computer.org](https://www.computer.org/publications/tech-news/community-voices/audit-log-for-software-security)
- (3) [Event Log Monitoring and Log Audit Software Basics - Netwrix](https://blog.netwrix.com/2022/12/20/audit-and-event-log-monitoring/)

### What is an Audit Log?

An **audit log**, also called an audit trail, is a record of events and changes. Audit logs record the occurrence of an event, the time at which it occurred, the responsible user or service, and the impacted entity. 

**Audit logging** is the process of documenting activity within the software systems used across your organization.

An **audit trail** is a security-relevant chronological record that provides documentary evidence of the sequence of activities that have affected at any time a specific operation, procedure, event, or device.

When you use a technology service or product, audit logs are generated in response to every user action and response from the technology system. These logs capture information that can be used to...

- Authenticate the user.
- Identify and validate the request.
- Route the request to the right service node.
- Perform relevant technology operations and processing.
  
Though these micro-actions behind audit logs are important in their own ways, the bigger purpose is greater. The idea behind collecting audit logs is two-fold:

1. To identify errors and improve accuracy.
2. To understand the purpose behind an activity, which can be later used for accountability or compliance.

### AuditLog model

Navigate to `prisma\schema.prisma` and create an `AuditLog` model.

```prisma
model AuditLog {

}
```

Then we need to create **enums** to be used for the `AuditLog` model.

#### Defining enums in Prisma Schema

- [Defining enums | Prisma docs](https://www.prisma.io/docs/orm/prisma-schema/data-model/models#defining-enums)

In **Prisma**, an **enum** is a scalar type defined in the schema that represents a set of possible values. 

It's used to model discrete options or categories within your data model. When you define an enum in your Prisma schema, it generates a corresponding TypeScript type that you can use in your application code. 

For example, you can create an enum called `Role` with values like `USER` and `ADMIN` to represent user roles in your application¹. Enums enhance type safety and allow you to express specific options in your data model.

```prisma
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  role  Role    @default(USER)
}

enum Role {
  USER
  ADMIN
}
```

#### Add enums for AuditLog model

Let's add `enum ACTION` that defines three actions (create, update, and delete) that can be used within our Prisma data model.

feat: Add ACTION enum for AuditLog model

```prisma
enum ACTION {
  CREATE
  UPDATE
  DELETE
}
```

In this **Prisma schema**, the code defines an **enum** called `ACTION`.

1. **Enum Name**: `ACTION`
   - This is the name of the enum type.
   - Enums allow you to define a set of possible values that a field can take.

2. **Enum Values**:
   - The enum has three possible values: `CREATE`, `UPDATE`, and `DELETE`.
   - These values represent different actions that can occur in your application.

3. **Generated TypeScript Type**:
   - When you define an enum in Prisma, it generates a corresponding TypeScript type.
   - In your application code, you can use this generated type to ensure type safety when working with these enum values.

The next `enum` will be `ENTITY_TYPE` which are interconnected with each of these actions. It will contain board, list and cards.

feat: Add ENTITY_TYPE enum

```prisma
enum ENTITY_TYPE {
  BOARD
  LIST
  CARD
}
```

#### Define the fields of AuditLog model

- [ Defining fields | Prisma schema](https://www.prisma.io/docs/orm/prisma-schema/data-model/models#defining-fields)
  
Now we can define the fields, or properties of a model, for `AuditLog`.

feat: Define the AuditLog model in prisma schema

```prisma
model AuditLog {
  id         String      @id @default(uuid())
  orgId      String
  action     ACTION
  entityId   String
  entityType ENTITY_TYPE
  userId     String
  userImage  String      @db.Text
  userName   String      @db.Text

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

1. **`id` (String)**:
   - This field represents the unique identifier for each audit log entry.
   - It's annotated with `@id` to indicate that it's the primary key.
   - The `@default(uuid())` specifies that a UUID (Universally Unique Identifier) is generated as the default value for this field.

2. **`orgId` (String)**:
   - Represents the organization ID associated with the audit log entry.
   - It's a string field.

3. **`action` (ACTION)**:
   - An enum field representing the action taken (e.g., create, update, delete).
   - The `ACTION` enum defines the possible values for this field.

4. **`entityId` (String)**:
   - Represents the unique identifier of the affected entity (e.g., board, list, card).
   - It's a string field.

5. **`entityType` (ENTITY_TYPE)**:
   - An enum field representing the type of entity (e.g., board, list, card).
   - The `ENTITY_TYPE` enum defines the possible values for this field.

6. **`userId` (String)**:
   - Represents the user ID associated with the action.
   - It's a string field.

7. **`userImage` (String)**:
   - Stores the user's image (possibly a URL or base64-encoded data).
   - Annotated with `@db.Text` to handle large text data.

8. **`userName` (String)**:
   - Represents the name of the user associated with the action.
   - Annotated with `@db.Text`.

9. **Timestamp Fields**:
   - `createdAt`: Represents the creation timestamp of the audit log entry.
   - `updatedAt`: Represents the last update timestamp (automatically managed by Prisma).

In summary, the `AuditLog` model captures information about actions performed by users within an organization, including details like the action type, affected entity, user ID, and timestamps. 