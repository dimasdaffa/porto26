"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import type { Repo } from "../../data/repos";

interface RepoDetailProps {
  repo: Repo;
  onClose: () => void;
}

export default function RepoDetail({ repo, onClose }: RepoDetailProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  /* Parse simple markdown headings and bullets */
  const renderReadme = (md: string) => {
    return md.split("\n").map((line, i) => {
      if (line.startsWith("### ")) {
        return (
          <h3 key={i} className="gh-detail-readme-h3">
            {line.replace("### ", "")}
          </h3>
        );
      }
      if (line.startsWith("- ")) {
        return (
          <div key={i} className="gh-detail-readme-li">
            <span style={{ color: "var(--gh-text-muted)", marginRight: "8px" }}>•</span>
            {line.replace("- ", "")}
          </div>
        );
      }
      if (line.trim() === "") return <div key={i} style={{ height: "8px" }} />;
      return (
        <p key={i} className="gh-detail-readme-p">
          {line}
        </p>
      );
    });
  };

  return createPortal(
    <div
      className="gh-detail-overlay"
      ref={overlayRef}
      onClick={handleOverlayClick}
    >
      <div className="gh-detail-modal">
        {/* Header */}
        <div className="gh-detail-header">
          <div className="gh-detail-title-row">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style={{ color: "var(--gh-text-muted)", flexShrink: 0 }}>
              <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
            </svg>
            <span className="gh-detail-repo-name">{repo.name}</span>
            <span className="gh-repo-visibility">Public</span>
          </div>
          <button className="gh-detail-close" onClick={onClose} aria-label="Close">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z" />
            </svg>
          </button>
        </div>

        {/* Repo Meta Bar */}
        <div className="gh-detail-meta-bar">
          <span className="gh-repo-lang">
            <span className="gh-lang-dot" style={{ background: repo.langColor }} />
            {repo.lang}
          </span>
          <span>⭐ {repo.stars}</span>
          <span>⑂ {repo.forks}</span>
          {repo.topics && repo.topics.length > 0 && (
            <div className="gh-detail-topics">
              {repo.topics.map((topic) => (
                <span key={topic} className="gh-detail-topic">{topic}</span>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="gh-detail-actions">
          {repo.repoUrl && (
            <a
              href={repo.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gh-btn-secondary"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
              </svg>
              View Repository
            </a>
          )}
          {repo.liveUrl && (
            <a
              href={repo.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gh-btn-primary"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                <path d="M4.75 7.25a.75.75 0 0 0 0 1.5h3.44l-4.47 4.47a.75.75 0 1 0 1.06 1.06l4.47-4.47v3.44a.75.75 0 0 0 1.5 0v-5.25a.75.75 0 0 0-.75-.75Z" />
                <path d="M10 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V2h-3a1 1 0 0 1-1-1Z" />
              </svg>
              Live Demo
            </a>
          )}
        </div>

        {/* Project Image */}
        <div className="gh-detail-image-wrap">
          <img
            src={repo.image || ""}
            alt={`${repo.name} preview`}
            className="gh-detail-image"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              target.parentElement!.classList.add("gh-detail-image-fallback");
            }}
          />
        </div>

        {/* About Section */}
        <div className="gh-detail-about">
          <div className="gh-detail-about-header">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Z" />
            </svg>
            README.md
          </div>
          <div className="gh-detail-about-body">
            <h2 className="gh-detail-about-title">{repo.name}</h2>
            <p className="gh-detail-about-desc">{repo.desc}</p>
            {repo.readme && (
              <div className="gh-detail-readme">
                {renderReadme(repo.readme)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
