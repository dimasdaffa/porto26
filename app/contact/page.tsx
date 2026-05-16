"use client";

import { useState } from "react";
import Header from "../components/Header";
import Terminal from "../components/Terminal";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [priority, setPriority] = useState("low");
  const [formTab, setFormTab] = useState("write");

  return (
    <>
      <Header showTabs={false} />
      <div className="gh-shell">
        <main className="gh-main">
          <div className="animate-in">
            <div className="gh-breadcrumb">
              📄 <span>dimasdaffa</span> / <strong style={{ color: "var(--gh-text-heading)" }}>CONTACT.md</strong>
            </div>

            <h1
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "var(--gh-text-heading)",
                margin: "8px 0 8px",
              }}
            >
              Open a new collaboration request
            </h1>
            <p
              style={{
                fontSize: "13px",
                color: "var(--gh-text)",
                margin: "0 0 24px",
                lineHeight: 1.6,
              }}
            >
              Fill out the template below to initiate a contact request. This
              follows the standard Pull Request workflow for professional
              inquiries.
            </p>

            <div className="gh-form-card">
              {/* Write / Preview tabs */}
              <div className="gh-form-tabs">
                <button
                  className={`gh-form-tab ${formTab === "write" ? "active" : ""}`}
                  onClick={() => setFormTab("write")}
                >
                  ✏️ Write
                </button>
                <button
                  className={`gh-form-tab ${formTab === "preview" ? "active" : ""}`}
                  onClick={() => setFormTab("preview")}
                >
                  👁 Preview
                </button>
              </div>

              <div className="gh-form-body">
                {/* Title */}
                <div className="gh-form-group">
                  <label className="gh-form-label">Title</label>
                  <input
                    type="text"
                    className="gh-form-input"
                    placeholder="Contact: Brief subject of your inquiry"
                  />
                </div>

                {/* Type & Priority */}
                <div className="gh-form-row">
                  <div className="gh-form-group">
                    <label className="gh-form-label">Type</label>
                    <input
                      type="text"
                      className="gh-form-input"
                      defaultValue="feature_collaboration"
                      readOnly
                      style={{ opacity: 0.7 }}
                    />
                  </div>
                  <div className="gh-form-group">
                    <label className="gh-form-label">Priority</label>
                    <div className="gh-priority-badges">
                      {(["low", "medium", "urgent"] as const).map((p) => (
                        <span
                          key={p}
                          className={`gh-priority-badge ${p}`}
                          onClick={() => setPriority(p)}
                          style={{
                            opacity: priority === p ? 1 : 0.5,
                            border:
                              priority === p
                                ? "1px solid currentColor"
                                : "1px solid transparent",
                            cursor: "pointer",
                          }}
                        >
                          {p.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="gh-form-group">
                  <label className="gh-form-label">Description</label>
                  <textarea
                    className="gh-form-textarea"
                    defaultValue={`### Summary\nDescribe your project or inquiry...\n\n### Scope\n- Timeline\n- Tech stack\n- Expectations`}
                  />
                </div>

                <p
                  style={{
                    fontSize: "12px",
                    color: "var(--gh-text-muted)",
                    margin: "0 0 0",
                  }}
                >
                  📝 Markdown supported. Images can be pasted or dropped.
                </p>

                {/* Actions */}
                <div className="gh-form-actions">
                  <div className="gh-form-security">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M8.533.133a1.75 1.75 0 0 0-1.066 0l-5.25 1.68A1.75 1.75 0 0 0 1 3.48V7c0 1.566.32 3.182 1.303 4.682.983 1.498 2.585 2.813 5.032 3.855a1.7 1.7 0 0 0 1.33 0c2.447-1.042 4.049-2.357 5.032-3.855C14.68 10.182 15 8.566 15 7V3.48a1.75 1.75 0 0 0-1.217-1.667Z" />
                    </svg>
                    Secured via SHA-256
                  </div>
                  <button className="gh-btn-secondary">Cancel</button>
                  <button className="gh-btn-primary">
                    Submit Pull Request
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="gh-contact-cards">
              <div className="gh-contact-card">
                <div className="gh-contact-card-icon">💬</div>
                <h4>Response Time</h4>
                <p>
                  Usually within 24-48 hours via system email.
                </p>
              </div>
              <div className="gh-contact-card">
                <div className="gh-contact-card-icon">@</div>
                <h4>Direct Contact</h4>
                <p>dimas.de2004@gmail.com for urgent escalations.</p>
              </div>
              <div className="gh-contact-card">
                <div className="gh-contact-card-icon">🤝</div>
                <h4>Partnerships</h4>
                <p>
                  Looking for open-source and enterprise projects.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Terminal />
      <Footer />
    </>
  );
}
