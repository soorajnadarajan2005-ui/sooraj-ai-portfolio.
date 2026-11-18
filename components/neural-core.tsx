"use client";

import { motion } from "motion/react";

export function NeuralCore() {
  return (
    <motion.div
      className="neural-core"
      aria-label="Animated neural network visualization"
      role="img"
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      onPointerMove={(event) => {
        if (event.pointerType === "touch") return;
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        event.currentTarget.style.setProperty("--core-x", `${x * 8}deg`);
        event.currentTarget.style.setProperty("--core-y", `${y * -8}deg`);
      }}
      onPointerLeave={(event) => {
        event.currentTarget.style.setProperty("--core-x", "0deg");
        event.currentTarget.style.setProperty("--core-y", "0deg");
      }}
    >
      <div className="neural-core-glow" />
      <div className="neural-sphere">
        {Array.from({ length: 18 }).map((_, index) => (
          <span
            key={index}
            className="neural-node"
            style={{
              "--node-x": `${18 + ((index * 29) % 64)}%`,
              "--node-y": `${14 + ((index * 37) % 72)}%`,
              "--node-delay": `${(index % 7) * -0.45}s`,
            } as React.CSSProperties}
          />
        ))}
        {Array.from({ length: 12 }).map((_, index) => (
          <span
            key={`orbit-${index}`}
            className={`neural-orbit neural-orbit-${(index % 3) + 1}`}
            style={{ "--orbit-delay": `${index * -0.8}s` } as React.CSSProperties}
          />
        ))}
      </div>
      <div className="neural-caption">
        <span>NEURAL CORE</span>
        <strong>ACTIVE</strong>
      </div>
    </motion.div>
  );
}
