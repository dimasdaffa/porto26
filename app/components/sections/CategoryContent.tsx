import { repos, categoryTitles, activityLevels } from "../../data/repos";

interface CategoryContentProps {
  category: string;
}

export default function CategoryContent({ category }: CategoryContentProps) {
  const items = repos[category] || [];
  const title = categoryTitles[category] || category;

  return (
    <div className="animate-in">
      <div className="gh-breadcrumb">
        📁 <span>root</span> / <span>categories</span> / {category}
      </div>
      <h1
        style={{
          fontSize: "28px",
          fontWeight: 700,
          color: "var(--gh-text-heading)",
          margin: "0 0 4px",
        }}
      >
        {title}
      </h1>
      <div
        style={{
          height: "3px",
          width: "120px",
          background: "var(--gh-blue)",
          borderRadius: "2px",
          marginBottom: "24px",
        }}
      />

      <div className="gh-content-with-panel">
        <div>
          <div className="gh-repo-grid">
            {items.map((repo) => (
              <div key={repo.name} className="gh-repo-card">
                <div className="gh-repo-card-header">
                  <span className="gh-repo-name">📦 {repo.name}</span>
                  <span className="gh-repo-visibility">Public</span>
                </div>
                <div className="gh-repo-desc">{repo.desc}</div>
                <div className="gh-repo-meta">
                  <span className="gh-repo-lang">
                    <span
                      className="gh-lang-dot"
                      style={{ background: repo.langColor }}
                    />
                    {repo.lang}
                  </span>
                  <span>⭐ {repo.stars}</span>
                  <span>⑂ {repo.forks}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="gh-right-panel">
          <div className="gh-panel-card">
            <h3>📈 Commit Activity</h3>
            <div className="gh-activity-grid">
              {activityLevels.slice(0, 28).map((level, i) => (
                <div
                  key={i}
                  className={`gh-activity-cell ${level > 0 ? `l${level}` : ""}`}
                />
              ))}
            </div>
          </div>
          <div className="gh-panel-card">
            <h3>Top Language</h3>
            <div className="gh-lang-bar">
              <div
                className="gh-lang-bar-segment"
                style={{ flex: 42, background: "#F05138" }}
              />
              <div
                className="gh-lang-bar-segment"
                style={{ flex: 28, background: "#3178C6" }}
              />
              <div
                className="gh-lang-bar-segment"
                style={{ flex: 18, background: "#DEA584" }}
              />
              <div
                className="gh-lang-bar-segment"
                style={{ flex: 12, background: "#A97BFF" }}
              />
            </div>
            <div className="gh-lang-bar-label">
              <span>Swift (42%)</span>
            </div>
          </div>
          <div className="gh-panel-card">
            <h3>Architectural Principles:</h3>
            <ul
              style={{
                margin: 0,
                padding: "0 0 0 16px",
                fontSize: "12px",
                color: "var(--gh-text)",
                lineHeight: "1.8",
              }}
            >
              <li>Unidirectional Data Flow</li>
              <li>Dependency Inversion</li>
              <li>Modular Interface Design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
