"use client";

import { motion, useReducedMotion } from "motion/react";

const stages = [
  { x: 32, title: "Markdown files", detail: "one dated entry / file", accent: "#60a5fa" },
  { x: 222, title: "Extract & chunk", detail: "dates · text · passages", accent: "#818cf8" },
  { x: 412, title: "Local embeddings", detail: "Sentence Transformers", accent: "#a78bfa" },
  { x: 602, title: "SQLite index", detail: "entries + vectors", accent: "#818cf8" },
  { x: 792, title: "Semantic search", detail: "retrieve relevant chunks", accent: "#60a5fa" },
];

const answerStages = [
  { x: 32, title: "CLI question", detail: "natural-language query", accent: "#60a5fa" },
  { x: 222, title: "Relevant context", detail: "matched dated passages", accent: "#818cf8" },
  { x: 412, title: "Claude API", detail: "question + excerpts", accent: "#a78bfa" },
  { x: 602, title: "Grounded answer", detail: "context-led response", accent: "#818cf8" },
  { x: 792, title: "Source citations", detail: "dates · entry references", accent: "#60a5fa" },
];

function PipelineRow({
  items,
  reducedMotion,
  row,
}: {
  items: typeof stages;
  reducedMotion: boolean;
  row: number;
}) {
  const y = row === 0 ? 138 : 338;

  return (
    <>
      {items.slice(0, -1).map((item, index) => (
        <path
          key={`connector-${row}-${item.title}`}
          d={`M ${item.x + 150} ${y} H ${items[index + 1].x}`}
          className="journal-pipeline-connector"
        />
      ))}
      {items.map((item, index) => (
        <motion.g
          key={item.title}
          initial={false}
          animate={
            reducedMotion
              ? { opacity: 1 }
              : { opacity: [0.72, 1, 0.72], y: [0, -2, 0] }
          }
          transition={{
            duration: 1.8,
            delay: reducedMotion ? 0 : row * 0.9 + index * 0.34,
            repeat: reducedMotion ? 0 : Infinity,
            repeatDelay: 3.2,
            ease: "easeInOut",
          }}
        >
          <rect
            x={item.x}
            y={y - 39}
            width="150"
            height="78"
            rx="12"
            className="journal-pipeline-node"
          />
          <circle cx={item.x + 17} cy={y - 19} r="3.5" fill={item.accent} />
          <text x={item.x + 29} y={y - 15} className="journal-pipeline-title">
            {item.title}
          </text>
          <text x={item.x + 14} y={y + 13} className="journal-pipeline-detail">
            {item.detail}
          </text>
        </motion.g>
      ))}
      {!reducedMotion && (
        <motion.circle
          cx="182"
          cy={y}
          r="4"
          fill="#a5f3fc"
          filter="url(#journal-glow)"
          animate={{ cx: [182, 372, 562, 752, 182], cy: y }}
          transition={{
            duration: 5.2,
            delay: row * 1.4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}
    </>
  );
}

export function JournalRagVisual() {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <svg
      className="journal-rag-visual"
      viewBox="0 0 1000 500"
      role="img"
      aria-labelledby="journal-visual-title journal-visual-description"
      preserveAspectRatio="xMidYMid meet"
    >
      <title id="journal-visual-title">Personal Journal Analyzer RAG pipeline</title>
      <desc id="journal-visual-description">
        An animated illustration of dated Markdown entries moving through local
        embeddings and SQLite retrieval, then a CLI question and relevant
        excerpts going to Claude for an answer with source citations.
      </desc>
      <defs>
        <linearGradient id="journal-panel" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#111b35" />
          <stop offset="1" stopColor="#090d1c" />
        </linearGradient>
        <filter id="journal-glow" x="-150%" y="-150%" width="400%" height="400%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect x="1" y="1" width="998" height="498" rx="22" fill="url(#journal-panel)" />
      <path d="M24 64H976" stroke="#94a3b8" strokeOpacity=".13" />
      <text x="34" y="42" className="journal-visual-heading">
        PERSONAL JOURNAL ANALYZER
      </text>
      <text x="35" y="88" className="journal-visual-label">
        01 / INGESTION &amp; LOCAL INDEX
      </text>
      <text x="35" y="238" className="journal-visual-label">
        02 / QUESTION &amp; GROUNDED RESPONSE
      </text>
      <PipelineRow items={stages} reducedMotion={reducedMotion} row={0} />
      <PipelineRow items={answerStages} reducedMotion={reducedMotion} row={1} />
      <rect x="35" y="427" width="930" height="42" rx="10" fill="#0b1326" stroke="#334155" strokeOpacity=".7" />
      <circle cx="54" cy="448" r="4" fill="#818cf8" />
      <text x="68" y="452" className="journal-visual-footer">
        CLI workflow · only retrieved excerpts are sent for Claude-powered answers
      </text>
    </svg>
  );
}
