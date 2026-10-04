import React from 'react'
import { Link } from 'react-router-dom'

const Section: React.FC<{ title: string; subtitle?: string; children: React.ReactNode }> = ({
  title,
  subtitle,
  children,
}) => (
  <section className="mb-12">
    <div className="mb-4">
      <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-300 via-sky-200 to-purple-300 bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && <p className="text-xs md:text-sm text-cyan-300/60 mt-1">{subtitle}</p>}
    </div>
    <div className="text-cyan-100/80 leading-relaxed text-sm md:text-base space-y-4">
      {children}
    </div>
  </section>
)

const Bullet: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex gap-2.5 items-start">
    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 shrink-0"></span>
    <span>{children}</span>
  </li>
)

interface TechCardProps {
  category: string
  items: { name: string; desc: string; tag?: string }[]
  colorScheme?: 'cyan' | 'purple' | 'amber' | 'emerald'
}

const TechCard: React.FC<TechCardProps> = ({ category, items, colorScheme = 'cyan' }) => {
  const borderClass =
    colorScheme === 'purple'
      ? 'border-purple-500/30 group-hover:border-purple-400/50'
      : colorScheme === 'amber'
      ? 'border-amber-500/30 group-hover:border-amber-400/50'
      : colorScheme === 'emerald'
      ? 'border-emerald-500/30 group-hover:border-emerald-400/50'
      : 'border-cyan-500/30 group-hover:border-cyan-400/50'

  const titleClass =
    colorScheme === 'purple'
      ? 'from-purple-300 to-pink-300'
      : colorScheme === 'amber'
      ? 'from-amber-300 to-orange-300'
      : colorScheme === 'emerald'
      ? 'from-emerald-300 to-teal-300'
      : 'from-cyan-300 to-blue-300'

  return (
    <div className="relative group rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 p-5 hover:border-cyan-400/40 transition-all duration-300">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
      <div className="relative">
        <h3 className={`text-base font-bold bg-gradient-to-r ${titleClass} bg-clip-text text-transparent mb-3 uppercase tracking-wider text-xs md:text-sm`}>
          {category}
        </h3>
        <div className="space-y-3">
          {items.map((it, idx) => (
            <div key={idx} className="border-b border-white/5 pb-2.5 last:border-none last:pb-0">
              <div className="flex items-center justify-between gap-2">
                <span className="font-semibold text-cyan-200 text-sm">{it.name}</span>
                {it.tag && (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {it.tag}
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-300/80 mt-0.5 leading-snug">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const Introduction: React.FC = () => {
  const teamMembers = [
    { name: 'Meet Patel', id: 'ET23BIT816', role: 'Leader', focus: 'ML Architecture, Hybrid Models & Lead Development' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-[#070b14] text-slate-100 py-12 px-4">
      <div className="mx-auto max-w-5xl">
        {/* Navigation Bar */}
        <div className="flex justify-between items-center mb-8 border-b border-cyan-500/20 pb-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-cyan-300 hover:text-cyan-100 transition text-sm font-semibold"
          >
            <span className="text-lg">←</span> Back to Search App
          </Link>
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="px-4 py-1.5 rounded-xl border border-cyan-500/30 text-cyan-200 hover:bg-slate-800/80 text-sm transition"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium hover:opacity-90 transition shadow-md shadow-cyan-500/20"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <div className="mb-14 text-center">
          <div className="inline-block relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-cyan-500/30 via-indigo-500/20 to-purple-500/30 blur-3xl rounded-full"></div>
            <div className="relative">
              <span className="inline-block uppercase tracking-widest text-[11px] font-bold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 mb-4">
                Natural Language Processing & Machine Learning Platform
              </span>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-cyan-300 via-sky-100 to-purple-300 bg-clip-text text-transparent">
                ThreadQuest AI
              </h1>
            </div>
          </div>
          <p className="mt-4 text-base md:text-lg text-cyan-200/80 max-w-2xl mx-auto font-normal">
            Intelligent Topic Discovery & Q&A Retrieval from Communication Threads — powered by state-of-the-art Python ML models, transformer hybrid ensembles, and an instant fuzzy search client.
          </p>
        </div>

        {/* What is this? */}
        <Section title="What is ThreadQuest AI?" subtitle="Overview and Motivation">
          <p>
            <strong>ThreadQuest AI</strong> is a dual-tier intelligent search and discovery system built to unlock knowledge hidden inside developer discussions, forum threads, and technical Q&A repositories (e.g., Stack Exchange, Stack Overflow).
          </p>
          <p>
            Unlike traditional keyword lookups, ThreadQuest leverages <strong>Python-based Deep Learning and Topic Modeling architectures</strong> (Top2Vec, RoBERTa, DistilBERT, ALBERT, MobileBERT, ELECTRA, and custom hybrid ensembles) to semantically organize conversations and score candidate answers. The precomputed high-dimensional embeddings and relevance scores feed into a responsive, cyberpunk-inspired web application for instant sub-millisecond retrieval.
          </p>
        </Section>

        {/* Complete Tech Stack Breakdown */}
        <Section title="Comprehensive Technology Stack" subtitle="End-to-end technologies utilized across the entire project">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
            {/* Python ML & Deep Learning */}
            <TechCard
              category="Python ML & Deep Learning"
              colorScheme="cyan"
              items={[
                { name: 'PyTorch & Transformers', desc: 'Core deep learning engine for fine-tuning transformer backbones via Hugging Face.', tag: 'Core ML' },
                { name: 'Top2Vec Model', desc: 'Joint document & word embedding vector space with Doc2Vec, UMAP, and HDBSCAN topic discovery.', tag: 'NLP' },
                { name: 'Transformer Models', desc: 'RoBERTa, DistilBERT, Classical BERT, ALBERT, MobileBERT, and ELECTRA for contextual representations.', tag: 'Models' },
                { name: 'Hybrid Ensembles', desc: 'Distil + RoBERTa, RoBERTa + ELECTRA, and RoBERTa + MobileBERT achieving up to 99% accuracy & F1.', tag: '99% Acc' },
              ]}
            />

            {/* NLP Preprocessing & Data Science */}
            <TechCard
              category="NLP Preprocessing & Data Science"
              colorScheme="purple"
              items={[
                { name: 'Text Preprocessing Pipeline', desc: '10-stage cleaning: tokenization, lemmatization, stop-word removal, regex stripping, and slang normalization.', tag: 'Pipeline' },
                { name: 'Cosine Relevance Scoring', desc: 'Vector cosine similarity metrics scoring multi-answer candidates against thread questions.', tag: 'Scoring' },
                { name: 'Scikit-Learn & Imbalanced-Learn', desc: 'Feature extraction, dimensionality reduction, train-test splitting, and class balancing.', tag: 'Data' },
                { name: 'Pandas & NumPy', desc: 'High-volume dataset wrangling across millions of Stack Exchange thread records.', tag: 'Analysis' },
              ]}
            />

            {/* Frontend Client */}
            <TechCard
              category="Frontend Web Application"
              colorScheme="emerald"
              items={[
                { name: 'React 18 & TypeScript', desc: 'Type-safe component-driven UI with reactive state management and interactive drawer.', tag: 'Frontend' },
                { name: 'Tailwind CSS', desc: 'Tailored dark/light mode styling, glassmorphism, responsive grids, and micro-animations.', tag: 'Styling' },
                { name: 'Fuse.js', desc: 'Sub-millisecond fuzzy search algorithm executing directly in-browser on client data.', tag: 'Search' },
                { name: 'PapaParse & Vite', desc: 'Streaming in-browser CSV parsing engine powered by a lightning-fast Vite build system.', tag: 'Tooling' },
              ]}
            />

            {/* Backend & Authentication */}
            <TechCard
              category="Backend API & Security"
              colorScheme="amber"
              items={[
                { name: 'Node.js & Express API', desc: 'Lightweight RESTful API server handling authentication, user sessions, and proxying.', tag: 'Server' },
                { name: 'SQLite DB (better-sqlite3)', desc: 'Embedded, high-speed relational database storage for user accounts and credentials.', tag: 'Database' },
                { name: 'JWT & Bcrypt.js', desc: 'Cryptographic password hashing (salt rounds) with JSON Web Token session authorization.', tag: 'Security' },
                { name: 'Vite API Reverse Proxy', desc: 'Seamless API forwarding during development from client port to backend API port.', tag: 'Network' },
              ]}
            />
          </div>
        </Section>

        {/* Machine Learning Models & Benchmarks */}
        <Section title="Machine Learning Models & Evaluation" subtitle="Evaluated models, topic modeling algorithms, and benchmark performance">
          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-900/40 p-1">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="border-b border-cyan-500/20 bg-cyan-950/30 text-cyan-300">
                  <th className="p-3 font-semibold">Model Architecture</th>
                  <th className="p-3 font-semibold">Paradigm / Family</th>
                  <th className="p-3 font-semibold">Accuracy</th>
                  <th className="p-3 font-semibold">F1-Score</th>
                  <th className="p-3 font-semibold">Precision</th>
                  <th className="p-3 font-semibold">Recall</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                <tr className="hover:bg-cyan-500/5 transition">
                  <td className="p-3 font-semibold text-cyan-200">Distil + RoBERTa (Hybrid)</td>
                  <td className="p-3 text-cyan-300/80">Transformer Ensemble</td>
                  <td className="p-3 text-emerald-400 font-bold">0.990 (99%)</td>
                  <td className="p-3 text-emerald-400 font-bold">0.990</td>
                  <td className="p-3 text-emerald-400">0.990</td>
                  <td className="p-3 text-emerald-400">0.990</td>
                </tr>
                <tr className="hover:bg-cyan-500/5 transition">
                  <td className="p-3 font-semibold text-cyan-200">RoBERTa + ELECTRA (Hybrid)</td>
                  <td className="p-3 text-cyan-300/80">Transformer Ensemble</td>
                  <td className="p-3 text-emerald-400 font-bold">0.990 (99%)</td>
                  <td className="p-3 text-emerald-400 font-bold">0.990</td>
                  <td className="p-3 text-emerald-400">0.990</td>
                  <td className="p-3 text-emerald-400">0.990</td>
                </tr>
                <tr className="hover:bg-cyan-500/5 transition">
                  <td className="p-3 font-semibold text-cyan-200">RoBERTa + MobileBERT (Hybrid)</td>
                  <td className="p-3 text-cyan-300/80">Transformer Ensemble</td>
                  <td className="p-3 text-emerald-400 font-bold">0.990 (99%)</td>
                  <td className="p-3 text-emerald-400 font-bold">0.990</td>
                  <td className="p-3 text-emerald-400">0.990</td>
                  <td className="p-3 text-emerald-400 font-bold">0.997</td>
                </tr>
                <tr className="hover:bg-cyan-500/5 transition">
                  <td className="p-3 font-semibold text-cyan-200">Top2Vec Semantic Model</td>
                  <td className="p-3 text-cyan-300/80">Doc2Vec + HDBSCAN</td>
                  <td className="p-3 text-emerald-400 font-bold">0.980 (98%)</td>
                  <td className="p-3 text-emerald-400 font-bold">0.980</td>
                  <td className="p-3 text-emerald-400">0.980</td>
                  <td className="p-3 text-emerald-400">0.980</td>
                </tr>
                <tr className="hover:bg-cyan-500/5 transition">
                  <td className="p-3 font-medium text-slate-300">RoBERTa Base</td>
                  <td className="p-3 text-slate-400">Transformer Single</td>
                  <td className="p-3">0.482</td>
                  <td className="p-3">0.421</td>
                  <td className="p-3">0.423</td>
                  <td className="p-3">0.482</td>
                </tr>
                <tr className="hover:bg-cyan-500/5 transition">
                  <td className="p-3 font-medium text-slate-300">DistilBERT Base</td>
                  <td className="p-3 text-slate-400">Transformer Single</td>
                  <td className="p-3">0.480</td>
                  <td className="p-3">0.478</td>
                  <td className="p-3">0.573</td>
                  <td className="p-3">0.480</td>
                </tr>
                <tr className="hover:bg-cyan-500/5 transition">
                  <td className="p-3 font-medium text-slate-300">ALBERT Base v2</td>
                  <td className="p-3 text-slate-400">Transformer Single</td>
                  <td className="p-3">0.462</td>
                  <td className="p-3">0.458</td>
                  <td className="p-3">0.532</td>
                  <td className="p-3">0.464</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-cyan-300/60 mt-3">
            * Benchmark scores recorded across training iterations on Stack Exchange Q&amp;A corpus. Hybrid ensembles combine complementary latent representations to achieve superior generalizability.
          </p>
        </Section>

        {/* How It Works */}
        <Section title="End-to-End Workflow" subtitle="From raw communication threads to ranked Q&A exploration">
          <ul className="space-y-3">
            <Bullet>
              <strong className="text-cyan-200">1. Data Ingestion & Preprocessing:</strong> Raw discussion threads from Stack Overflow &amp; Stack Exchange are processed through 10 text hygiene steps (tokenization, stop-word elimination, lemmatization, contraction normalization, and emoji/URL stripping).
            </Bullet>
            <Bullet>
              <strong className="text-cyan-200">2. Topic Modeling & Semantic Vectorization:</strong> Top2Vec generates dense document vectors and discovers clusters automatically without arbitrary topic counts. Transformer backbones extract contextual question embeddings.
            </Bullet>
            <Bullet>
              <strong className="text-cyan-200">3. Multi-Answer Relevance Scoring:</strong> For each question, candidate replies are evaluated via vector cosine similarity scores (1 to 9 scale) to determine answer quality and contextual alignment.
            </Bullet>
            <Bullet>
              <strong className="text-cyan-200">4. Interactive Client-Side Querying:</strong> Pre-calculated datasets are delivered to the React application, indexed dynamically via Fuse.js, and searched in sub-milliseconds without heavy server compute overhead.
            </Bullet>
          </ul>
        </Section>

        {/* Project Team & Mentorship */}
        <Section title="Project Team & Mentorship" subtitle="Meet the individuals behind ThreadQuest AI">
          {/* Mentor Card */}
          <div className="relative group mb-6">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/30 via-pink-500/20 to-purple-500/30 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl p-5 border border-amber-500/30">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-white">Prof. Dr. Mitali Desai</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-200 border border-amber-300/40">
                      Project Mentor
                    </span>
                  </div>
                  <p className="text-xs text-amber-200/70 mt-1">
                    Faculty Guidance, NLP Research Direction &amp; Academic Supervision
                  </p>
                </div>
                <div className="text-xs text-cyan-300/80 font-mono bg-slate-950/60 px-3 py-1.5 rounded-lg border border-white/5">
                  Academic Mentor
                </div>
              </div>
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-slate-900/70 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:border-cyan-400/40 transition">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-white text-base">{member.name}</span>
                    <span
                      className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full border ${
                        member.role === 'Leader'
                          ? 'bg-amber-500/20 text-amber-300 border-amber-400/40'
                          : 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40'
                      }`}
                    >
                      {member.role}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-cyan-300/90 mt-1">{member.id}</div>
                  <p className="text-xs text-slate-300/80 mt-2 leading-relaxed border-t border-white/5 pt-2">
                    {member.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Action Buttons */}
        <div className="mt-12 text-center border-t border-cyan-500/20 pt-8">
          <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent mb-4">
            Ready to explore ThreadQuest?
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 hover:scale-[1.02] active:scale-[0.98] transition border border-cyan-400/30"
            >
              Launch Search Interface
            </Link>
            <Link
              to="/signup"
              className="px-6 py-3 rounded-2xl bg-slate-900 border border-cyan-500/30 text-cyan-200 font-semibold hover:bg-slate-800 transition"
            >
              Create New Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction

