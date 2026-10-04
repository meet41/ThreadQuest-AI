# Project Workflow and Architecture Diagrams

This document illustrates the end-to-end architecture for ThreadQuest AI, bridging the **Python Machine Learning & NLP Modeling Pipeline** with the **Full-Stack Web Application** (React, TypeScript, Tailwind CSS, Node/Express, and SQLite).

---

## 👥 Project Team & Mentorship
- **Project Mentor:** Prof. Dr. Mitali Desai
- **Core Team:**
  - Meet Patel (`ET23BIT816`) - Leader (ML Architecture, Hybrid Models & Lead Development)

---

## End-to-End System Architecture

```mermaid
flowchart LR
  subgraph ML [Python ML & NLP Pipeline]
    RAW[(StackExchange Datasets)]
    PREP[10-Stage NLP Cleaning]
    MODELS[Top2Vec & Transformer Ensembles<br/>RoBERTa, DistilBERT, ELECTRA]
    SCORE[Cosine Similarity Scoring Engine]
    RAW --> PREP --> MODELS --> SCORE
  end

  subgraph Data [Dataset Artifacts]
    CSV[(public/data/*.csv)]
  end

  subgraph Client [Browser Client]
    UI[React 18 + TypeScript + Tailwind]
    FUSE[Fuse.js Fuzzy Search Index]
  end

  subgraph DevServer [Vite Dev Server / Static Build]
    VITE["Vite (dev)<br/>Static assets (prod)"]
  end

  subgraph Backend [Node/Express API]
    API[Express @ /api]
    DB(("SQLite DB<br/>server/data/app.db"))
  end

  SCORE --> CSV
  Client <--> VITE
  VITE --> UI
  CSV -- "PapaParse (client)" --> UI
  UI --> FUSE

  UI -- "/api/* (proxy in dev)" --> API
  API --> DB

  classDef group fill:#0b1224,stroke:#3dd1ff,stroke-width:1px,stroke-dasharray: 3 3,color:#c8f1ff;
  class ML,Data,Client,DevServer,Backend group;
```

Notes
- **Python ML Pipeline:** Executes offline or in Colab/GPU environments to train topic clusters, fine-tune transformer models, and compute question-to-answer semantic relevance scores.
- **Web Application:** Consumes the precomputed CSV artifacts for sub-millisecond retrieval without requiring GPU infrastructure at query runtime.
- **Backend API:** Provides secure authentication and user state via Node.js, Express, JWT, and SQLite.

## Authentication flow

```mermaid
sequenceDiagram
  actor U as User
  participant UI as React App (AuthContext)
  participant API as Express API (/api/auth)
  participant DB as SQLite (server/data/app.db)

  U->>UI: Submit credentials (login / signup)
  UI->>API: POST /api/auth/login | /signup
  API->>DB: Verify/insert user (bcrypt)
  DB-->>API: Result
  API-->>UI: 200 { token, user }
  UI->>UI: Store token (AuthContext/localStorage)
  UI-->>U: Navigate to protected routes
  UI->>API: GET /api/auth/me (Bearer token)
  API-->>UI: User profile
```

## Dataset search flow

```mermaid
flowchart TD
  CSV[(CSV in public/data)] --> PARSE["PapaParse loader<br/>(useDataset hook)"]
  PARSE --> INDEX[Fuse.js index]
  INPUT[Search input] --> INDEX
  INDEX --> RESULTS[ResultsList]
  RESULTS --> DETAIL[DetailDrawer (centered modal)]

  classDef node fill:#0b1224,stroke:#8b5cf6,stroke-width:1px,color:#e9d5ff;
  class CSV,PARSE,INDEX,INPUT,RESULTS,DETAIL node;
```

## Theming flow (light/dark)

```mermaid
flowchart LR
  TOGGLE[ThemeToggle (icon)] --> CTX[ThemeContext]
  CTX --> HTML[html.classList: dark]
  HTML --> TAILWIND[Tailwind dark: class mode]
  TAILWIND --> UI[Components (App, Footer, Results, DetailDrawer)]

  classDef node fill:#07151b,stroke:#22d3ee,stroke-width:1px,color:#cffafe;
  class TOGGLE,CTX,HTML,TAILWIND,UI node;
```

---

Want exportable images? See the README section for optional mermaid-cli commands to render SVG/PNG.

## High-level project workflow (vertical)

This is a simple top-down view similar to common “project workflow” visuals.

```mermaid
flowchart TD
  A([Start]) --> B[Open app]
  B --> C[Login / Signup]
  C --> D[Token stored]
  D --> E[Load CSV from public/data]
  E --> F[Build Fuse.js index]
  F --> G[Type query]
  G --> H[Show results list]
  H --> I[Open detail modal]

  classDef step fill:#14532d,stroke:#10b981,stroke-width:1px,color:#ecfdf5;
  class B,C,D,E,F,G,H,I step;
```

