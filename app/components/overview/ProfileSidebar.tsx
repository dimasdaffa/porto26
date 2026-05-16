import { techStack } from "../../data/repos";

export default function ProfileSidebar() {
  return (
    <aside className="gh-profile-sidebar">
      {/* Profile Photo — replace /profile.jpg with your own photo */}
      <div className="gh-profile-photo-wrap">
        <img
          src="/images/profile.jpg"
          alt="Profile photo"
          className="gh-profile-photo"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
            target.parentElement!.classList.add("gh-profile-photo-fallback");
          }}
        />
      </div>

      <h2 className="gh-profile-name">Dimas Daffa</h2>
      <p className="gh-profile-username">dimasdaffa</p>

      <p className="gh-profile-bio">
        Systems Architect building scalable digital infrastructure.
        Focused on Apple ecosystems &amp; distributed backend services.
      </p>

      <a href="/contact" className="gh-profile-edit-btn">
        ✉ Contact Me
      </a>

      <div className="gh-profile-meta">
        <div className="gh-profile-meta-item">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
            <path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192 0ZM8 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
          </svg>
          Jakarta, ID
        </div>
      </div>

      <div className="gh-social-row" style={{ marginTop: "16px" }}>
        <a
          href="https://github.com/dimasdaffa"
          target="_blank"
          rel="noopener noreferrer"
          className="gh-social-btn"
          aria-label="GitHub"
        >
          <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
          </svg>
        </a>
        <a
          href="https://linkedin.com/in/dimas-daffa-ernanda-a6069830a/"
          target="_blank"
          rel="noopener noreferrer"
          className="gh-social-btn"
          aria-label="LinkedIn"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>

      <div className="gh-profile-section-divider" />
      <h4 className="gh-profile-section-title">Tech Stack</h4>
      <div className="gh-badges" style={{ marginTop: "4px" }}>
        {techStack.map((tech) => (
          <span key={tech} className="gh-badge">
            {tech}
          </span>
        ))}
      </div>
    </aside>
  );
}
