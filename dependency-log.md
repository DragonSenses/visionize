* Jump to [Dependency log](#dependency-log)

# Maintenance: dependency/package management

**Package management**, also known as **dependency management**, involves updating packages and dependencies within a project. Tools like `npm` (Node Package Manager) facilitate updating packages to their latest versions.

Useful commands:

- [npm outdated](https://docs.npmjs.com/cli/v10/commands/npm-outdated)
- [npm update](https://docs.npmjs.com/cli/v10/commands/npm-update)

We can run the following command to check for outdated packages in our project:

```sh
npm outdated
```

#### **Wanted version** of a package

The `wanted` column in the `npm outdated` command refers to the **maximum version** of a package that satisfies the semver range specified in your `package.json`. Here's what it means:

- If a semver range is defined in your `package.json`, the `wanted` version represents the latest version within that range.
- If there's no semver range (e.g., when running `npm outdated --global` or if the package isn't included in `package.json`), the `wanted` version shows the currently-installed version.

In summary, `wanted` indicates the version you should update to based on your package constraints. If you prefer the latest version, consider updating to the one shown in the `latest` column. 

#### What's **semver**?

**Semver** (short for **Semantic Versioning**) is a versioning system used in the Node.js ecosystem, particularly by npm (Node Package Manager). It provides a consistent way to manage package dependencies. Here are the key points about semver:

1. **Version Format:**
   - Semver follows the format `MAJOR.MINOR.PATCH`.
   - **MAJOR**: Indicates breaking changes.
   - **MINOR**: Introduces new features without breaking existing functionality.
   - **PATCH**: Fixes issues or provides backward-compatible updates.

2. **Usage in npm:**
   - All packages published to npm are assumed to follow semver semantics.
   - Package authors use semver to define dependency versions bundled with their packages.

3. **Example:**
   - Suppose a package has version `1.2.3`.
     - Incrementing the **MAJOR** version (e.g., `2.0.0`) implies breaking changes.
     - Incrementing the **MINOR** version (e.g., `1.3.0`) adds features without breaking compatibility.
     - Incrementing the **PATCH** version (e.g., `1.2.4`) includes backward-compatible fixes.

semver helps maintain compatibility and ensures smooth package updates.

#### Install the latest minor version of npm package

To install only the **wanted** versions of each npm package run the following command:

chore: Update dependencies to latest semver range

```sh
npm update --save
```

Or we can run `npm install` with specific requirements. 

To install the latest minor version:

```sh
npm install package-name@"^2.x.x"
```

To install a package right before the latest major update run the following command:

```sh
npm install package-name@"<next-major.0.0"
```

For example:

```sh
npm install package-name@"<3.0.0" 
```

Would install the latest right before 3.0.0 (e.g. 2.11.1)

## npm-check-updates

[npm-check-updates package](https://www.npmjs.com/package/npm-check-updates)

**npm-check-updates upgrades your package.json dependencies to the latest versions, ignoring specified versions.**

Install globally:np

```sh
npm install -g npm-check-updates
```

Usage:

- `ncu` command in the terminal

Check the latest versions of all project dependencies:

```sh
$ ncu
Checking package.json
[====================] 5/5 100%

 eslint             7.32.0  →    8.0.0
 prettier           ^2.7.1  →   ^3.0.0
 svelte            ^3.48.0  →  ^3.51.0
 typescript         >3.0.0  →   >4.0.0
 untildify          <4.0.0  →   ^4.0.0
 webpack               4.x  →      5.x

Run ncu -u to upgrade package.json
```

Update a projects package file:

**Make sure your package file is in version control and all changes have been committed. This *will* overwrite your package file.**

```sh
$ ncu -u
Upgrading package.json
[====================] 1/1 100%

 express           4.12.x  →   4.13.x

Run npm install to install new versions.

$ npm install      # update installed packages and package-lock.json
```

Check global packages:

```sh
ncu -g
```

# Dependency log

## 2024/07/21

```sh
npm outdated
Package                    Current    Wanted    Latest  Location                                Depended by
@clerk/nextjs                5.1.5     5.2.4     5.2.4  node_modules/@clerk/nextjs              visionize
@prisma/client              5.15.0    5.17.0    5.17.0  node_modules/@prisma/client             visionize
@radix-ui/react-accordion    1.1.2     1.2.0     1.2.0  node_modules/@radix-ui/react-accordion  visionize
@radix-ui/react-avatar       1.0.4     1.1.0     1.1.0  node_modules/@radix-ui/react-avatar     visionize
@radix-ui/react-dialog       1.0.5     1.1.1     1.1.1  node_modules/@radix-ui/react-dialog     visionize
@radix-ui/react-label        2.0.2     2.1.0     2.1.0  node_modules/@radix-ui/react-label      visionize
@radix-ui/react-popover      1.0.7     1.1.1     1.1.1  node_modules/@radix-ui/react-popover    visionize
@radix-ui/react-separator    1.0.3     1.1.0     1.1.0  node_modules/@radix-ui/react-separator  visionize
@radix-ui/react-slot         1.0.2     1.1.0     1.1.0  node_modules/@radix-ui/react-slot       visionize
@radix-ui/react-tooltip      1.0.7     1.1.2     1.1.2  node_modules/@radix-ui/react-tooltip    visionize
@tanstack/react-query       5.45.0   5.51.11   5.51.11  node_modules/@tanstack/react-query      visionize
@types/node                20.14.2  20.14.11  20.14.11  node_modules/@types/node                visionize
eslint                      8.57.0    8.57.0     9.7.0  node_modules/eslint                     visionize
eslint-config-next          14.2.4    14.2.5    14.2.5  node_modules/eslint-config-next         visionize
lucide-react               0.395.0   0.395.0   0.412.0  node_modules/lucide-react               visionize
next                        14.2.4    14.2.5    14.2.5  node_modules/next                       visionize
postcss                     8.4.38    8.4.39    8.4.39  node_modules/postcss                    visionize
prisma                      5.15.0    5.17.0    5.17.0  node_modules/prisma                     visionize
stripe                     15.12.0   15.12.0    16.2.0  node_modules/stripe                     visionize
tailwind-merge               2.3.0     2.4.0     2.4.0  node_modules/tailwind-merge             visionize
tailwindcss                  3.4.4     3.4.6     3.4.6  node_modules/tailwindcss                visionize
typescript                   5.4.5     5.5.3     5.5.3  node_modules/typescript                 visionize
zustand                      4.5.2     4.5.4     4.5.4  node_modules/zustand                    visionize
```

chore: Update Next.js to v14.2.5

```sh
npm i next@latest
```

chore: Update @clerk/nextjs to v5.2.4

```sh
npm i @clerk/nextjs@latest
```

chore: Update prisma & @prisma/client to (v5.17.0)

```sh
npm i prisma@latest @prisma/client@latest
```

chore: Update dependencies to latest semver range

```sh
npm update --save
npm outdated

Package       Current   Wanted   Latest  Location                   Depended by
eslint         8.57.0   8.57.0    9.7.0  node_modules/eslint        visionize
lucide-react  0.395.0  0.395.0  0.414.0  node_modules/lucide-react  visionize
stripe        15.12.0  15.12.0   16.2.0  node_modules/stripe        visionize
```

## 2024/06/15

```sh
npm outdated                                                                                            
Package                Current   Wanted   Latest  Location                            Depended by
@clerk/nextjs            5.1.4    5.1.5    5.1.5  node_modules/@clerk/nextjs          visionize
@tanstack/react-query   5.44.0   5.45.0   5.45.0  node_modules/@tanstack/react-query  visionize
eslint                  8.57.0   8.57.0    9.5.0  node_modules/eslint                 visionize
eslint-config-next      14.2.3   14.2.4   14.2.4  node_modules/eslint-config-next     visionize
lucide-react           0.394.0  0.394.0  0.395.0  node_modules/lucide-react           visionize
```

chore: Update @clerk/nextjs to v5.1.5

```sh
npm i @clerk/nextjs@latest
```

chore: Update dependencies to latest semver range

```sh
npm update --save
```

## 2024/06/11

```sh
npm outdated                                                                                        
Package                Current   Wanted   Latest  Location                            Depended by
@tanstack/react-query   5.40.1   5.44.0   5.44.0  node_modules/@tanstack/react-query  visionize
eslint                  8.57.0   8.57.0    9.4.0  node_modules/eslint                 visionize
eslint-config-next      14.2.3   14.2.4   14.2.4  node_modules/eslint-config-next     visionize
lucide-react           0.390.0  0.390.0  0.394.0  node_modules/lucide-react           visionize
next                    14.2.3   14.2.4   14.2.4  node_modules/next                   visionize
```

chore: Update Next.js to v14.2.4

```sh
npm i next@latest
```

chore: Update @tanstack/react-query to v5.44.0

```sh
npm i @tanstack/react-query@latest
```

chore: Update lucide-react to v0.394.0

```sh
npm i lucide-react@latest
```

## 2024/06/08

```sh
npm outdated                                                                                            
Package                 Current   Wanted   Latest  Location                            Depended by
@clerk/nextjs            4.31.0   4.31.3    5.1.4  node_modules/@clerk/nextjs          visionize
@tanstack/react-query    5.39.0   5.40.1   5.40.1  node_modules/@tanstack/react-query  visionize
@types/node            20.12.12  20.14.2  20.14.2  node_modules/@types/node            visionize
eslint                   8.57.0   8.57.0    9.4.0  node_modules/eslint                 visionize
eslint-config-next       14.0.4   14.0.4   14.2.3  node_modules/eslint-config-next     visionize
sonner                   1.4.41    1.5.0    1.5.0  node_modules/sonner                 visionize
```

chore: Update sonner to v1.5.0

```sh
npm i sonner@latest
```

chore: Update @tanstack/react-query & @types/node

```sh
npm i @tanstack/react-query@latest @types/node@latest
```

chore: Update @clerk/nextjs to v5.1.4

```sh
npm i @clerk/nextjs@latest
```

chore: Update eslint dev dependencies

```sh
Package  Current  Wanted  Latest  Location             Depended by
eslint    8.57.0  8.57.0   9.4.0  node_modules/eslint  visionize
```

## 2024/06/07

```sh
npm outdated
Package                 Current   Wanted   Latest  Location                            Depended by
@clerk/nextjs            4.31.0   4.31.3    5.1.4  node_modules/@clerk/nextjs          visionize
@tanstack/react-query    5.39.0   5.40.1   5.40.1  node_modules/@tanstack/react-query  visionize
@types/node            20.12.12  20.14.2  20.14.2  node_modules/@types/node            visionize
eslint                   8.57.0   8.57.0    9.4.0  node_modules/eslint                 visionize
eslint-config-next       14.0.4   14.0.4   14.2.3  node_modules/eslint-config-next     visionize
lucide-react            0.307.0  0.307.0  0.390.0  node_modules/lucide-react           visionize
next                     14.0.4   14.0.4   14.2.3  node_modules/next                   visionize
tailwindcss               3.4.3    3.4.4    3.4.4  node_modules/tailwindcss            visionize
usehooks-ts              2.16.0   2.16.0    3.1.0  node_modules/usehooks-ts            visionize
```

chore: Update Next.js to v14.2.3

```sh
npm i next@latest
```

chore: Update dev dependencies to latest versions

Updates the following packages:
- lucide-react (v0.390.0)
- tailwindcss (v3.4.4)
- usehooks-ts (v3.1.0)

TailwindCSS helps with styling, lucide-react provides icons, and use-hooks offers reusable hooks for React development.

```sh
npm i tailwindcss@latest lucide-react@latest usehooks-ts@latest
```

Log after updates:

```sh
Package                 Current   Wanted   Latest  Location                            Depended by
@clerk/nextjs            4.31.0   4.31.3    5.1.4  node_modules/@clerk/nextjs          visionize
@tanstack/react-query    5.39.0   5.40.1   5.40.1  node_modules/@tanstack/react-query  visionize
@types/node            20.12.12  20.14.2  20.14.2  node_modules/@types/node            visionize
eslint                   8.57.0   8.57.0    9.4.0  node_modules/eslint                 visionize
eslint-config-next       14.0.4   14.0.4   14.2.3  node_modules/eslint-config-next     visionize
```

## 2024/05/25

(May 25, 2024)
```sh
npm outdated                                                                                                    

Package                Current   Wanted   Latest  Location                            Depended by
@clerk/nextjs           4.31.0   4.31.0    5.1.2  node_modules/@clerk/nextjs          visionize
@tanstack/react-query   5.37.1   5.39.0   5.39.0  node_modules/@tanstack/react-query  visionize
@types/react            18.3.2   18.3.3   18.3.3  node_modules/@types/react           visionize
eslint                  8.57.0   8.57.0    9.3.0  node_modules/eslint                 visionize
eslint-config-next      14.0.4   14.0.4   14.2.3  node_modules/eslint-config-next     visionize
lucide-react           0.307.0  0.307.0  0.379.0  node_modules/lucide-react           visionize
next                    14.0.4   14.0.4   14.2.3  node_modules/next                   visionize
usehooks-ts             2.16.0   2.16.0    3.1.0  node_modules/usehooks-ts            visionize
```

chore: Update @tanstack/react-query & @types/react

```sh
npm update --save

Package             Current   Wanted   Latest  Location                         Depended by
@clerk/nextjs        4.31.0   4.31.0    5.1.2  node_modules/@clerk/nextjs       visionize
eslint               8.57.0   8.57.0    9.3.0  node_modules/eslint              visionize
eslint-config-next   14.0.4   14.0.4   14.2.3  node_modules/eslint-config-next  visionize
lucide-react        0.307.0  0.307.0  0.379.0  node_modules/lucide-react        visionize
next                 14.0.4   14.0.4   14.2.3  node_modules/next                visionize
usehooks-ts          2.16.0   2.16.0    3.1.0  node_modules/usehooks-ts         visionize
```

## 2024/05/20

(May 20, 2024)
```sh
npm outdated

Package                Current    Wanted    Latest  Location                            Depended by
@clerk/nextjs           4.29.3    4.31.0     5.1.0  node_modules/@clerk/nextjs          visionize
@tanstack/react-query   5.32.0    5.37.1    5.37.1  node_modules/@tanstack/react-query  visionize
@types/node            20.10.7  20.12.12  20.12.12  node_modules/@types/node            visionize
@types/react           18.2.47    18.3.2    18.3.2  node_modules/@types/react           visionize
@types/react-dom       18.2.18    18.3.0    18.3.0  node_modules/@types/react-dom       visionize
autoprefixer           10.4.16   10.4.19   10.4.19  node_modules/autoprefixer           visionize
clsx                     2.1.0     2.1.1     2.1.1  node_modules/clsx                   visionize
eslint                  8.56.0    8.57.0     9.3.0  node_modules/eslint                 visionize
eslint-config-next      14.0.4    14.0.4    14.2.3  node_modules/eslint-config-next     visionize
lucide-react           0.307.0   0.307.0   0.379.0  node_modules/lucide-react           visionize
next                    14.0.4    14.0.4    14.2.3  node_modules/next                   visionize
postcss                 8.4.33    8.4.38    8.4.38  node_modules/postcss                visionize
react                   18.2.0    18.3.1    18.3.1  node_modules/react                  visionize
react-dom               18.2.0    18.3.1    18.3.1  node_modules/react-dom              visionize
sonner                   1.4.0    1.4.41    1.4.41  node_modules/sonner                 visionize
tailwind-merge           2.2.0     2.3.0     2.3.0  node_modules/tailwind-merge         visionize
tailwindcss              3.4.1     3.4.3     3.4.3  node_modules/tailwindcss            visionize
typescript               5.3.3     5.4.5     5.4.5  node_modules/typescript             visionize
usehooks-ts              2.9.5    2.16.0     3.1.0  node_modules/usehooks-ts            visionize
zod                     3.22.4    3.23.8    3.23.8  node_modules/zod                    visionize
zustand                  4.5.0     4.5.2     4.5.2  node_modules/zustand                visionize
```

chore: Update dependencies to latest semver range

```sh
npm update --save
npm outdated

Package             Current   Wanted   Latest  Location                         Depended by
@clerk/nextjs        4.31.0   4.31.0    5.1.0  node_modules/@clerk/nextjs       visionize
eslint               8.57.0   8.57.0    9.3.0  node_modules/eslint              visionize
eslint-config-next   14.0.4   14.0.4   14.2.3  node_modules/eslint-config-next  visionize
lucide-react        0.307.0  0.307.0  0.379.0  node_modules/lucide-react        visionize
next                 14.0.4   14.0.4   14.2.3  node_modules/next                visionize
usehooks-ts          2.16.0   2.16.0    3.1.0  node_modules/usehooks-ts         visionize
```
