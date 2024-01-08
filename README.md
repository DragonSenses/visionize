# Visionize

Visualize and realize your vision with **Visionize**, a productivity application that allows you to organize your tasks and projects using boards, lists and cards.

Whether you are using individually or collaborating with a team, you can use this app to set goals, track progress and manage deadlines.

Inspired by [Kanban](https://en.wikipedia.org/wiki/Kanban_(development)), (看板, meaning signboard or billboard in Japanese), a tool used to both visualize and optimize the flow of work. See [kanban section](#kanban) to learn more.

# Description

Based on the kanban method, this app is a tool to visualize workflow in three steps:

1. To Do
2. In Progress
3. Done

While using only three components:

1. **Boards**, where tasks are organized
2. **Lists**, displays the different stages of a task (To Do, In Progress, Done)
3. **Cards**, which represent tasks, ideas and information

Uses **Next.js 14**, with features such as [Server Actions](https://nextjs.org/blog/next-14#server-actions-stable).

## Live Link - WIP

# Technologies:

- Next.JS 14 
- TypeScript
- React
- TailwindCSS
- MySQL, Prisma and PlanetScale for database
- Clerk for authentication
- Stripe API
- zustand for state management

# Specifications

- User can **create**, **read**, **update** and **delete** 


## Prerequisites

- [Node](https://nodejs.org/en/download) version 14 or higher

# Instructions to run locally

**1. Clone this repo (or download zip on GitHub)**

**2. Go to the directory the files are located**

    In the terminal:

    ```powershell
    cd /visionize
    ```

**3. Install dependencies**

  In the terminal:

    ```powershell
    npm run install-dependencies
    ```

**4. Create an `.env` file**

---

# Kanban

[Kanban](https://en.wikipedia.org/wiki/Kanban_(development)), (看板, meaning signboard or billboard in Japanese), a lean method to manage and improve work across human systems.

Benefits to use:

- Traceability
- Collaboration
- Accessibility

This approach aims to manage work by balancing demands with available capacity, and by improving the handling of system-level bottlenecks.

Work items are visualized to give participants a view of progress and process, from start to finish—usually via a kanban board. Work is pulled as capacity permits, rather than work being pushed into the process when requested.

In knowledge work and in software development, the aim is to provide a visual process management system which aids decision-making about what, when, and how much to produce. The underlying kanban method originated in lean manufacturing, which was inspired by the Toyota Production System.