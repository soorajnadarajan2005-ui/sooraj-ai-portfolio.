type CodePilotVisualProps = {
  variant?: "card" | "detail";
};

export function CodePilotVisual({ variant = "card" }: CodePilotVisualProps) {
  return (
    <div
      className={`codepilot-visual codepilot-visual-${variant}`}
      role="img"
      aria-label="Illustrative CodePilot workspace showing a repository tree, source code, semantic retrieval, local assistant, and approval-reviewed code diff"
    >
      <div className="codepilot-topbar">
        <span className="codepilot-window-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="codepilot-topbar-title">CODEPILOT / REPOSITORY WORKSPACE</span>
        <span className="codepilot-local-status">
          <i /> LOCAL
        </span>
      </div>

      <div className="codepilot-workspace">
        <section className="codepilot-pane codepilot-repository">
          <h3>REPOSITORY</h3>
          <p className="codepilot-tree-row codepilot-tree-root">⌄ codebase</p>
          <p className="codepilot-tree-row codepilot-tree-item">⌄ app</p>
          <p className="codepilot-tree-row codepilot-tree-item">ƒ routes.py</p>
          <p className="codepilot-tree-row codepilot-tree-item">⌄ services</p>
          <p className="codepilot-tree-row codepilot-tree-item">ƒ retrieval.ts</p>
          <p className="codepilot-tree-row codepilot-tree-item">ƒ indexer.py</p>
        </section>

        <section className="codepilot-pane codepilot-editor">
          <div className="codepilot-file-tab">
            <span>retrieval.ts</span>
            <span>TypeScript</span>
          </div>
          <div className="codepilot-code">
            <p><span>12</span><code><b>export async function</b> search(query) {"{"}</code></p>
            <p><span>13</span><code>  <em>const</em> context = <strong>await</strong> retrieve(query);</code></p>
            <p className="codepilot-symbol"><span>14</span><code>  <b>return</b> assembleContext(context);</code></p>
            <p><span>15</span><code>{"}"}</code></p>
            <p className="codepilot-code-gap">···</p>
            <p className="codepilot-symbol"><span>28</span><code><em>class</em> <strong>RepositoryIndex</strong> {"{"}</code></p>
          </div>
          <span className="codepilot-source-marker">source · 12–15</span>
        </section>

        <div className="codepilot-sidepanels">
          <section className="codepilot-pane codepilot-semantic">
            <div className="codepilot-pane-heading">
              <h3>SEMANTIC INDEX</h3>
              <span>QDRANT</span>
            </div>
            <div className="codepilot-vector-map" aria-hidden="true">
              <i className="codepilot-vector-line line-one" />
              <i className="codepilot-vector-line line-two" />
              <i className="codepilot-vector-line line-three" />
              <i className="codepilot-vector-node node-one" />
              <i className="codepilot-vector-node node-two" />
              <i className="codepilot-vector-node node-three" />
              <i className="codepilot-vector-node node-four" />
              <i className="codepilot-vector-query" />
            </div>
            <span className="codepilot-query-label">query → relevant chunks</span>
          </section>
          <section className="codepilot-pane codepilot-ai-panel">
            <div className="codepilot-pane-heading">
              <h3>LOCAL ASSISTANT</h3>
              <span>OLLAMA</span>
            </div>
            <p className="codepilot-prompt">Where is retrieval context assembled?</p>
            <p className="codepilot-answer">
              In <b>retrieval.ts</b>, before the model call.
            </p>
          </section>
          <section className="codepilot-pane codepilot-diff">
            <div className="codepilot-pane-heading">
              <h3>DIFF REVIEW</h3>
              <span>PROPOSED</span>
            </div>
            <p><i>−</i> return assembleContext(items);</p>
            <p><b>+</b> return assembleContext(context);</p>
            <span className="codepilot-approval"><i /> APPROVAL REQUIRED</span>
          </section>
        </div>
      </div>

      <div className="codepilot-footnote">
        ILLUSTRATIVE WORKSPACE <span>·</span> NO AUTOMATIC REPOSITORY EXECUTION
      </div>
    </div>
  );
}
