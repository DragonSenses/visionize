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

Next we want to use `zustand`, a state management solution.

- [zustand | Reference](https://docs.pmnd.rs/zustand/getting-started/introduction), a state management package

```sh
npm install zustand
```

#### zustand state management

First let's walktrhough the [introduction of the zustand docs](https://docs.pmnd.rs/zustand/getting-started/introduction).

1. Installation, we've already installed zustand with npm

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

#### Use zustand to handle the state for our mobile sidebar

Now we can create a hook to help manage our state for the mobile sidebar.

Create a `hooks` folder at the base of the project, with a file named `useMobileSidebar.ts`.

- `import { create } from 'zustand'`
- Create type `MobileSidebar` which has the following properties: `{ isOpen, onOpen, onClose }`
- Use the `create` function to create the 

`hooks\useMobileSidebar.ts`
