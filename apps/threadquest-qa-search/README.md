# ThreadQuest AI — Q&A Search & Topic Discovery Platform

[![Python](https://img.shields.io/badge/Python-3.10%2B-blue.svg?logo=python&logoColor=white)](https://python.org)
[![PyTorch](https://img.shields.io/badge/PyTorch-2.0%2B-EE4C2C.svg?logo=pytorch&logoColor=white)](https://pytorch.org)
[![HuggingFace](https://img.shields.io/badge/Hugging%20Face-Transformers-FFD21E.svg?logo=huggingface&logoColor=black)](https://huggingface.co)
[![React](https://img.shields.io/badge/React-18-61DAFB.svg?logo=react&logoColor=black)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0%2B-3178C6.svg?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF.svg?logo=vite&logoColor=white)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933.svg?logo=node.js&logoColor=white)](https://nodejs.org)
[![SQLite](https://img.shields.io/badge/SQLite-3-003B57.svg?logo=sqlite&logoColor=white)](https://sqlite.org)

An intelligent Question-Answering and Topic Discovery platform designed to extract, cluster, score, and retrieve domain-specific insights from rich communication threads (Stack Exchange, Stack Overflow, forums, and developer discussions).

ThreadQuest AI bridges **advanced Python Deep Learning & NLP transformer architectures** with a **responsive, modern React + Node.js web application** for instant fuzzy search and ranked multi-answer exploration.

---

## 👥 Project Team & Mentorship

### Project Mentor
- **Prof. Dr. Mitali Desai** — *Project Mentor & Research Guide*

### Core Development Team
| Name | Roll / Student ID | Role | Key Contributions |
| :--- | :--- | :--- | :--- |
| **Meet Patel** | `ET23BIT816` | **Project Leader** | ML Architecture, Hybrid Transformer Modeling, Lead Development |

---

## 🛠️ Complete Technology Stack

ThreadQuest AI incorporates an end-to-end multi-disciplinary technology stack:

### 1. Python Machine Learning, NLP & Data Science
- **Deep Learning Frameworks:** `PyTorch`, `Hugging Face Transformers`, `Sentence-Transformers`
- **Topic Modeling Frameworks:**
  - `Top2Vec` (Doc2Vec + UMAP dimensionality reduction + HDBSCAN clustering)
  - `BERTopic` (Contextual embeddings + clustering + dynamic topic reduction)
  - `Latent Dirichlet Allocation (LDA)` & `Non-negative Matrix Factorization (NMF)`
  - `Biterm Topic Model (BTM)` & `TF-IDF + K-Means / Hierarchical Clustering`
- **Transformer Model Backbones Evaluated:**
  - `RoBERTa` (`roberta-base`)
  - `DistilBERT` (`distilbert-base-uncased`)
  - `Classical BERT` (`bert-base-uncased`)
  - `ALBERT` (`albert-base-v2`)
  - `MobileBERT` (`google/mobilebert-uncased`)
  - `ELECTRA` (`google/electra-base-discriminator`)
- **High-Performance Hybrid Ensembles:**
  - `Distil + RoBERTa` (Achieved **99.0%** Accuracy & F1-score)
  - `RoBERTa + ELECTRA` (Achieved **99.0%** Accuracy & F1-score)
  - `RoBERTa + MobileBERT` (Achieved **99.0%** Accuracy & **99.7%** Recall)
  - `Top2Vec + RoBERTa` & `Top2Vec + DistilBERT`
- **Data Engineering & Scientific Computing:**
  - `pandas`, `numpy`, `scipy`
  - `scikit-learn`, `imbalanced-learn` (SMOTE / Class rebalancing)
  - `nltk`, `spacy`, `re` (Text tokenization, lemmatization, regex cleaning)
  - `matplotlib`, `seaborn` (Metric visualization & loss curves)

### 2. Frontend Web Application
- **Framework & Runtime:** React 18, TypeScript, Vite
- **Styling & UI:** Vanilla Tailwind CSS with custom cyberpunk dark/light themes, glassmorphism, micro-interactions, responsive drawer modals
- **Client-Side Search:** `Fuse.js` (Zero-latency client-side fuzzy search across questions and discovered topics)
- **Data Streaming:** `PapaParse` (High-performance in-browser CSV parsing and indexing)
- **Routing:** `react-router-dom` v6 with protected routes and auth state management

### 3. Backend API & Authentication
- **Server:** Node.js & Express RESTful API
- **Database:** SQLite with `better-sqlite3` (`server/data/app.db`)
- **Security:** JSON Web Tokens (`jsonwebtoken`) & `bcryptjs` password hashing
- **Development Proxy:** Vite reverse proxy forwarding `/api/*` requests to the Express server

---

## 📊 Machine Learning Model Benchmarks

Benchmark evaluation recorded on Stack Exchange Q&A datasets across training iterations:

### Hybrid Models Performance (1,510 Records)
| Model Architecture | Accuracy | F1-Score | Precision | Recall |
| :--- | :---: | :---: | :---: | :---: |
| **Distil + RoBERTa** | **0.990** | **0.990** | **0.990** | **0.990** |
| **RoBERTa + ELECTRA** | **0.990** | **0.990** | **0.990** | **0.990** |
| **RoBERTa + MobileBERT** | **0.990** | **0.990** | **0.990** | **0.997** |
| **Top2Vec Model** | **0.980** | **0.980** | **0.980** | **0.980** |

### Individual Transformer Baseline Comparisons
| Model | Accuracy | F1-Score | Precision | Recall |
| :--- | :---: | :---: | :---: | :---: |
| RoBERTa Base | 0.482 | 0.421 | 0.423 | 0.482 |
| DistilBERT Base | 0.480 | 0.478 | 0.573 | 0.480 |
| ALBERT Base v2 | 0.462 | 0.458 | 0.532 | 0.464 |
| ELECTRA Base | 0.285 | 0.123 | 0.261 | 0.105 |
| MobileBERT | 0.067 | 0.068 | 0.082 | 0.067 |
| Classical BERT | 0.050 | 0.040 | 0.035 | 0.050 |

*Ensembling complementary architectures (e.g. DistilBERT and RoBERTa) produced dramatic gains in semantic generalization and class boundary separation.*

---

## 🔄 End-to-End Pipeline & Architecture

```
[StackExchange / StackOverflow Data]
                │
                ▼
   10-Stage NLP Preprocessing Pipeline
   (Lowercasing, Stop-words, Lemmatization,
    Slang normalization, Regex cleansing)
                │
                ▼
   Python ML Topic Modeling & Embedding
   (Top2Vec + RoBERTa / DistilBERT / ELECTRA)
                │
                ▼
   Multi-Answer Cosine Relevance Scoring
   (Calculating answer_item_1_score to answer_item_9_score)
                │
                ▼
   Generated Scored Dataset (CSV)
   [Complete_QueryResults_with_scores.csv]
                │
                ▼
   Full-Stack Web Interface
   ├── Node.js / Express API (JWT Auth + SQLite)
   └── React + Vite + Tailwind UI (Fuse.js Fuzzy Search)
```

1. **Text Preprocessing:** Cleans and normalizes noisy communication thread inputs using regex, lemmatization, and stop-word elimination.
2. **Topic Discovery:** Generates continuous semantic topic spaces with Top2Vec and transformer embeddings.
3. **Relevance Scoring:** Computes high-dimensional cosine similarity scores ranking multiple answer candidates per thread.
4. **Interactive Retrieval:** Serves precomputed scores and topics in a responsive web app with zero-latency fuzzy search, detail drawer, and authentication.

---

## 🚀 Running the Web Application

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Step 1: Install Dependencies
```powershell
# From the apps/threadquest-qa-search directory:
npm install

# Install backend dependencies:
cd server
npm install
cd ..
```

### Step 2: Start Backend API (Port 3001)
In a dedicated terminal tab:
```powershell
cd server
npm run dev
```
- API will start at: `http://localhost:3001`
- SQLite database initializes automatically at `server/data/app.db`.

### Step 3: Start Frontend Dev Server
In another terminal:
```powershell
npm run dev
```
- Open `http://localhost:5173` in your browser.
- Navigate to `/intro` for project introduction, tech stack details, and team credits.
- Sign up at `/signup` or sign in at `/login` to access the full search interface.

### Step 4: Dataset Configuration
The search engine automatically reads from:
- `public/data/Complete_QueryResults_with_scores.csv`
- (Falls back to `public/data/sample.csv` if the full dataset is not present).

---

## 🧠 Running Python ML Models & Scoring

To inspect or rerun the Python topic modeling and scoring pipeline:

1. **Notebook Location:** `Top2Vec_Ans_Score.ipynb` (in this folder) and `../../Modelling/*.ipynb`.
2. **Key Requirements:**
   ```bash
   pip install torch transformers top2vec scikit-learn pandas numpy imbalanced-learn matplotlib seaborn
   ```
3. **Execution:**
   - Run `Top2Vec_Ans_Score.ipynb` to recompute answer relevance scores and output `Complete_QueryResults_with_scores.csv`.

---

## 🏛️ Architecture Documentation

For detailed Mermaid diagrams illustrating the full system architecture, auth sequences, search pipeline, and theming flow, see:
- [`docs/architecture.md`](file:///D:/Updated%20Threadquest/ThreadQuest-AI/apps/threadquest-qa-search/docs/architecture.md)
- [`docs/mermaid/`](file:///D:/Updated%20Threadquest/ThreadQuest-AI/apps/threadquest-qa-search/docs/mermaid/)

