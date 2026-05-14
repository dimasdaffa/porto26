"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const categoryTabs = [
  { id: "overview", label: "Overview" },
  { id: "app", label: "App" },
  { id: "web", label: "Web" },
  { id: "product", label: "Product" },
];

interface HeaderProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  showTabs?: boolean;
}

export default function Header({
  activeTab = "overview",
  onTabChange,
  showTabs = true,
}: HeaderProps) {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="gh-header-wrap">
      {/* Row 1: Repo identity + nav links */}
      <div className="gh-header-row1">
        <div className="gh-header-identity">
          <div className="gh-header-repo-avatar">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
            </svg>
          </div>
          <Link href="/" className="gh-header-repo-name">
            <span className="gh-header-owner">dimasdaffa</span>
            <span className="gh-header-separator">/</span>
            <span className="gh-header-repo">portfolio</span>
          </Link>
        </div>

        <nav className="gh-header-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`gh-header-navlink ${pathname === link.href ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Row 2: Branch selector + category tabs */}
      {showTabs && (
        <div className="gh-header-row2">
          <button className="gh-branch-btn">
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.492 2.492 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z" />
            </svg>
            branch: <strong>main</strong>
            <svg
              width="10"
              height="10"
              viewBox="0 0 16 16"
              fill="currentColor"
              style={{ marginLeft: "4px" }}
            >
              <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z" />
            </svg>
          </button>

          <div className="gh-category-tabs">
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                className={`gh-category-tab ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => onTabChange?.(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
