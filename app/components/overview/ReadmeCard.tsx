import { activityLevels } from "../../data/repos";

export default function ReadmeCard() {
  return (
    <>
      <div className="gh-readme">
        <div className="gh-readme-header">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Z" />
          </svg>
          README.md
        </div>
        <div className="gh-readme-body">
          <h1>
            Hi, I&apos;m Dimas Daffa, a Systems Architect building scalable
            digital infrastructure
          </h1>
          <p>
            I specialize in crafting robust, performant applications with a focus
            on Apple ecosystems and distributed backend services. My work bridges
            the gap between sophisticated UI architecture and low-level system
            optimization.
          </p>

          <div style={{ marginTop: "20px" }}>
            <a href="/docs/DimasDaffaErnanda_CV.pdf" download className="gh-btn-primary" style={{ display: "inline-flex", width: "auto" }}>
              ↓ Download Resume
            </a>
          </div>
        </div>
      </div>

      <div className="gh-bottom-grid">
        <div className="gh-card">
          <h3>
            <span style={{ color: "var(--gh-green)" }}>📊</span> Activity
          </h3>
          <div className="gh-activity-grid">
            {activityLevels.map((level, i) => (
              <div
                key={i}
                className={`gh-activity-cell ${level > 0 ? `l${level}` : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
