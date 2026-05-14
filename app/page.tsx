"use client";

import { useState } from "react";
import Header from "./components/Header";
import Terminal from "./components/Terminal";
import Footer from "./components/Footer";
import OverviewContent from "./components/overview/OverviewContent";
import CategoryContent from "./components/sections/CategoryContent";

/* ── Main Page ── */
export default function Home() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <>
      <Header activeTab={activeTab} onTabChange={setActiveTab} showTabs />
      <div className="gh-shell">
        <main className="gh-main">
          {activeTab === "overview" ? (
            <OverviewContent />
          ) : (
            <CategoryContent category={activeTab} />
          )}
        </main>
      </div>
      <Terminal />
      <Footer />
    </>
  );
}
