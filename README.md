# DIgital photoBook

## Description

A digital photo gallery created by the nerds of 2023 KNUST Computer Engineering year group. 
It consist of three applications.

1. A photo gallery site
2. Admin apnel.
3. A server application.

## Technical Details

### Technologies used:

1. [Vite React](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)
2. [Nodej Express framework](https://nodejs.org) for running a server.
3. [Storybook ](https://storybook.js.org/) for component development
4. [Mongodb](https://mongodb.com/) for  database storage 
5. [Vercel](https://vercel.com/) and [render](https://render.com/)  for hosting
6. [Yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) for monorepo management

### Folder Structure (Monorepo)

1. `apps` contains the frontends
2. `packages` contains the shared components , utils and storybook preview
3. `apps/server` contains the server and database
4. `apps/admin` contains admin panel
5. `apps/client` contains the gallery
6. `packages/uicore` contains the shared components
7. `packages/ui` storybook preview for the shared components

### How to run the project

1. Clone the repo
2. Run `yarn install` to install all dependencies
3. Create mongodb project and add the mongodb to the `.env` file

#### Note
Don't add new packages in the root of the monorepo.

### Hosting on vercel

1. Create a vercel account
2. Create a project and link it to the github repo
3. Add .env to the vercel project environment variables

#### The command to build the project on vercel

1. specify the client directory in the repo 
2. specify the admin directory in the repo  
3. specify the ui directory in the repo  


