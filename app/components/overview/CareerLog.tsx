import { experiences } from "../../data/experiences";

export default function CareerLog() {
  return (
    <div style={{ marginTop: "40px" }}>
      <h2
        style={{
          fontSize: "28px",
          fontWeight: 700,
          color: "var(--gh-text-heading)",
          margin: "0 0 8px",
        }}
      >
        Career Log
      </h2>
      <p
        style={{
          fontSize: "13px",
          color: "var(--gh-text-muted)",
          margin: "0 0 24px",
          lineHeight: 1.6,
        }}
      >
        A chronological history of my professional architectural commits.
        Tracking the evolution of skills and systemic improvements across
        multiple organizations.
      </p>

      {/* Stats Bar */}
      <div className="gh-stats">
        <div className="gh-stat">
          <div className="gh-stat-label">⏱ Total Experience</div>
          <div className="gh-stat-value">3.5 Years</div>
        </div>
        <div className="gh-stat">
          <div className="gh-stat-label">⑂ Roles Merged</div>
          <div className="gh-stat-value">5 Positions</div>
        </div>
        <div className="gh-stat">
          <div className="gh-stat-label">&lt;&gt; Core Languages</div>
          <div className="gh-stat-value" style={{ fontSize: "16px" }}>
            Swift, PHP
          </div>
        </div>
        <div className="gh-stat">
          <div className="gh-stat-label">🏷 Latest Version</div>
          <div className="gh-stat-value">v2026.5.15</div>
        </div>
      </div>

      {/* Timeline */}
      <div className="gh-timeline">
        {experiences.map((exp, i) => (
          <div key={i} className="gh-timeline-node">
            <div
              className={`gh-timeline-dot ${exp.isCurrent ? "active" : ""}`}
            />
            <div className="gh-timeline-content">
              <div className="gh-timeline-head">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <span className="gh-timeline-role">{exp.role}</span>
                  {exp.isCurrent && (
                    <span className="gh-timeline-badge">CURRENT</span>
                  )}
                </div>
                <span className="gh-timeline-hash">commit {exp.hash}</span>
              </div>
              <div className="gh-timeline-body">
                <div className="gh-timeline-company">
                  <div className="gh-timeline-company-icon">🏢</div>
                  <div>
                    <h4
                      style={{
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "var(--gh-text-heading)",
                        margin: 0,
                      }}
                    >
                      {exp.company}
                    </h4>
                    <p className="gh-timeline-company-meta">{exp.period}</p>
                  </div>
                </div>
                {exp.description && (
                  <p className="gh-timeline-desc">{exp.description}</p>
                )}
                <div className="gh-diff">
                  <div className="gh-diff-header">{exp.diffHeader}</div>
                  {exp.additions.map((line, j) => (
                    <div key={`a${j}`} className="gh-diff-line add">
                      + {line}
                    </div>
                  ))}
                  {exp.removals.map((line, j) => (
                    <div key={`r${j}`} className="gh-diff-line remove">
                      - {line}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* Initial commit */}
        <div className="gh-timeline-node">
          <div className="gh-timeline-dot" />
          <p
            style={{
              fontSize: "13px",
              color: "var(--gh-text-muted)",
              fontStyle: "italic",
              margin: 0,
            }}
          >
            Initial commit: Education &amp; Internships
          </p>
        </div>
      </div>
    </div>
  );
}
