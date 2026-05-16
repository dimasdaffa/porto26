"use client";

import { useState } from "react";
import { repos, categoryTitles, type Repo } from "../../data/repos";
import RepoDetail from "./RepoDetail";

interface CategoryContentProps {
  category: string;
}

export default function CategoryContent({ category }: CategoryContentProps) {
  const items = repos[category] || [];
  const title = categoryTitles[category] || category;
  const [selectedRepo, setSelectedRepo] = useState<Repo | null>(null);

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

      <div className="gh-repo-grid">
        {items.map((repo) => (
          <div
            key={repo.name}
            className="gh-repo-card gh-repo-card-clickable"
            onClick={() => setSelectedRepo(repo)}
          >
            {/* Project Image */}
            <div className="gh-repo-card-image">
              <img
                src={repo.image || ""}
                alt={`${repo.name} preview`}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  target.parentElement!.classList.add("gh-repo-card-image-fallback");
                }}
              />
            </div>
            <div className="gh-repo-card-body">
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
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedRepo && (
        <RepoDetail
          repo={selectedRepo}
          onClose={() => setSelectedRepo(null)}
        />
      )}
    </div>
  );
}
