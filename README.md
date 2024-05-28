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

# Work-in-Progress

TODO:
- [x] Boards
- [x] Lists
- [x] Cards
- [x] Audit Log
- [ ] Settings
- [ ] Integrate Freemium Model (just for practice)

# Technologies:

- Next.JS 14 
- TypeScript
- React
- TailwindCSS
- PostgreSQL and Prisma ORM for database
- Clerk for authentication
- Stripe API for payment handling
- zustand for state management
- shadcn/ui for component collection

# Specifications

- User can **create**, **read**, **update** and **delete** boards
- User can **create**, **read**, **update** and **delete** lists
- User can **create**, **read**, **update** and **delete** cards
- Users can view activity history with *audit logs*

# Prerequisites

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

TODO: Add additional steps to run locally

---

# TODO: Mockup, examples & screenshots
# TODO: Configuration options

# Kanban

[Kanban](https://en.wikipedia.org/wiki/Kanban_(development)), (看板, meaning signboard or billboard in Japanese), a lean method to manage and improve work across human systems.

Benefits to use:

- Traceability
- Collaboration
- Accessibility

This approach aims to manage work by balancing demands with available capacity, and by improving the handling of system-level bottlenecks.

Work items are visualized to give participants a view of progress and process, from start to finish—usually via a kanban board. Work is pulled as capacity permits, rather than work being pushed into the process when requested.

In knowledge work and in software development, the aim is to provide a visual process management system which aids decision-making about what, when, and how much to produce. The underlying kanban method originated in lean manufacturing, which was inspired by the Toyota Production System.

## Kanban guide

## Audit logging and Kanban

According to the [The Kaban Guide (2020)(by John Colemane and Daniel Vacanti)](https://kanbanguides.org/english/), the Kanban strategy optimizes the flow of value through a process that uses a visual, pull-based system.

"Kanban comprises the following three practices working in tandem:

1. Defining and visualizing a workflow
2. Actively managing items in a workflow
3. Improving a workflow

In their implementation, these Kanban practices are collectively called a Kanban system. Those who participate in the value delivery of a Kanban system are called Kanban system members."
