
# REPOpilot

It's a web app built with Next.js and React. 
It ingests repositories, maps dependencies, and visualizes the development flow to highlight integration gaps and develop an action plan.

<br>![Thumbnail](https://github.com/user-attachments/assets/e50aa530-2758-4983-bddb-9901d30566d3)

<video src='https://github.com/user-attachments/assets/46a9c589-bf2b-4f32-8ef3-13046b2ede34'></video>
<br>

<!--![Thumbnail](https://github.com/user-attachments/assets/faaf13e7-c221-4249-83a2-d0936fd49e40)-->
REPOment is a tool that helps you manage, navigate, and automate repositories effectively.. 

<!--
├── .env
├── .gitignore
├── README.md
├── app
    ├── 3d-map
    │   └── page.tsx
    ├── api
    │   ├── code
    │   │   └── [...name]
    │   │   │   └── route.ts
    │   ├── components
    │   │   └── route.ts
    │   ├── github
    │   │   ├── auth
    │   │   │   └── route.ts
    │   │   ├── branches
    │   │   │   └── route.ts
    │   │   ├── callback
    │   │   │   └── route.ts
    │   │   ├── commit
    │   │   │   └── route.ts
    │   │   ├── commits
    │   │   │   └── route.ts
    │   │   ├── contents
    │   │   │   └── route.ts
    │   │   ├── logout
    │   │   │   └── route.ts
    │   │   ├── repos
    │   │   │   └── route.ts
    │   │   └── webhook
    │   │   │   └── route.ts
    │   ├── ingest
    │   │   └── route.ts
    │   ├── oint
    │   │   ├── apply
    │   │   │   └── route.ts
    │   │   ├── create
    │   │   │   └── route.ts
    │   │   ├── state.ts
    │   │   └── summary
    │   │   │   └── route.ts
    │   ├── roaster
    │   │   ├── fix
    │   │   │   └── route.ts
    │   │   └── route.ts
    │   └── vibe-killer
    │   │   └── route.ts
    ├── globals.css
    ├── ingest
    │   └── page.tsx
    ├── layout.tsx
    ├── matrix
    │   └── page.tsx
    ├── page.tsx
    ├── roaster
    │   └── page.tsx
    ├── toolset
    │   └── page.tsx
    └── vibe-killer
    │   └── page.tsx
├── components
    ├── AnimatedLogo.tsx
    ├── AuthControls.tsx
    ├── DocsUploader.tsx
    ├── EvilEyes.tsx
    ├── HexBackground.tsx
    ├── OintCreationFlow.tsx
    └── TopNav.tsx
├── docs
    ├── ARCHITECTURE.md
    └── LICENSE.md
├── lib
    ├── docsState.ts
    ├── github.ts
    ├── openai.ts
    ├── roasterState.ts
    ├── toolsetState.ts
    ├── types.oint.ts
    └── ui.tsx
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
    ├── OINTment_logo_vert.svg
    ├── aimlapi.svg
    ├── favicon.svg
    ├── gpt5-face.svg
    └── logos
    │   ├── aimlapi.svg
    │   ├── github.svg
    │   ├── nextjs.svg
    │   ├── openai.svg
    │   ├── redis.svg
    │   ├── sentry.svg
    │   ├── supabase.svg
    │   └── vercel.svg
├── tailwind.config.js
└── tsconfig.json

-->


## Features

- **Manual Ingest** &mdash; Upload a ZIP archive or specify a GitHub repository to run local analysis at `/ingest`.
- **Integration Matrix** &mdash; Inspect package dependencies and readiness at `/matrix`.
- **3D Commit Map** &mdash; Explore commit relationships in an interactive three.js scene at `/3d-map`.
- **GitHub App Integration** &mdash; Authorize a GitHub App to analyze private repositories.
- **AI‑Powered Analysis** &mdash; Summaries, roast comments, and AI artifact detection using `AIML_API_KEY` or `OPENAI_API_KEY`.

## Tech Stack

- [Next.js 14](https://nextjs.org) with React 18 and TypeScript
- Tailwind CSS for styling
- Chart.js and `react-chartjs-2` for data visualizations
- Three.js with `@react-three/fiber` for 3D views

## Getting Started

bash
npm install
npm run dev


Visit `http://localhost:3000` to access the interfaces.

### Environment Variables

Create a `.env.local` file with:

bash
GITHUB_CLIENT_ID=your_client_id
GITHUB_CLIENT_SECRET=your_client_secret
GITHUB_WEBHOOK_SECRET=your_webhook_secret
GITHUB_TOKEN=your_personal_access_token # optional
AIML_API_KEY=your_aiml_api_key          # or OPENAI_API_KEY
AIML_API_BASE_URL=https://api.aimlapi.com/v1 # optional
OPENAI_API_KEY=your_openai_key          # optional
OPENAI_BASE_URL=https://api.openai.com/v1 # optional
LLM_MODEL=gpt-5-chat                    # optional model override


### Scripts

- `npm run dev` &ndash; start the Next.js development server
- `npm run build` &ndash; create a production build
- `npm start` &ndash; run the production build
- `npm test` &ndash; type-check the project

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for design details.



