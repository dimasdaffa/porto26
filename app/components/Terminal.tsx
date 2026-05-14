"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Terminal() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/contact");
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        handleNavigate();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      className="gh-terminal"
      onClick={handleNavigate}
      style={{ cursor: "pointer" }}
      role="button"
      tabIndex={0}
    >
      <span className="gh-terminal-prompt">$</span>
      <span style={{ color: "var(--gh-text)", fontSize: "13px" }}>
        git checkout contact
      </span>
      <span className="gh-terminal-cursor" />
      <span className="gh-terminal-hint">Press Enter to run</span>
    </div>
  );
}
