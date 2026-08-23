"use client";

import { useEffect, useState } from "react";
import "./v2.css";

const buildLoop = [
  {
    number: "00",
    name: "Arrival",
    cue: "Enter as a builder",
    child: "Settles at the bench, collects the kit and opens the builder book. The room signals that this is a workshop—and they belong in it.",
    mentor: "Greets each learner, stages the components and sets the bench state. The ritual is short, warm and consistent.",
  },
  {
    number: "01",
    name: "Discover",
    cue: "Meet the problem",
    child: "Encounters a real problem before seeing a solution. Curiosity comes first; components come second.",
    mentor: "Asks rather than announces, connecting the challenge to the science and mathematics the learner is studying.",
  },
  {
    number: "02",
    name: "Design",
    cue: "Think before touching",
    child: "Sketches or reasons through what will sense, decide and act. Intent comes before the first wire or material.",
    mentor: "Protects the pause between the problem and the parts, helping the learner form an approach without taking over.",
  },
  {
    number: "03",
    name: "Develop",
    cue: "Hands on the build",
    child: "Wires, assembles, constructs and, when ready, programmes. Every learner builds; nobody watches from the side.",
    mentor: "Moves from bench to bench, guiding at the elbow instead of teaching from the front of the room.",
  },
  {
    number: "04",
    name: "Debug",
    cue: "Protect the struggle",
    child: "Traces, tests, reasons and fixes. Failure becomes the point at which understanding gets deeper.",
    mentor: "Judges when to prompt and when to wait. The aim is neither rescue nor frustration, but productive struggle.",
  },
  {
    number: "05",
    name: "Demo",
    cue: "Show it working",
    child: "Demonstrates the build and explains what it does, how it works and what changed.",
    mentor: "Runs the proof gate: does it work, and can the learner explain it? Ownership becomes visible.",
  },
  {
    number: "06",
    name: "Document",
    cue: "Build the record",
    child: "Records what was built, what failed and what was learned. Each session adds evidence to a growing builder portfolio.",
    mentor: "Logs the completed build, faults encountered and competencies evidenced, creating a longitudinal record of progress.",
  },
];

const pillars = [
  {
    num: "01",
    theme: "is-accent",
    title: "Build Confidence",
    desc: "Learners tackle open problems, test physical systems, and experience genuine agency over their ideas.",
  },
  {
    num: "02",
    theme: "is-white",
    title: "Build Understanding",
    desc: "Science and mathematics come alive as concrete mechanics, circuits, forces, and structural behaviors.",
  },
  {
    num: "03",
    theme: "is-black",
    title: "Build Capabilities",
    desc: "From basic prototyping to complex systemic design briefs with empirical testing and documentation.",
  },
  {
    num: "04",
    theme: "is-outline",
    title: "Build Builders",
    desc: "Preparing young minds with lifelong builder habits: curiosity, precision, resilience, and articulation.",
  },
];

const values = [
  ["Academic rigor", "Concepts. Clarity. Confidence."],
  ["Learn by making", "Hands-on. Iterative. Experiential."],
  ["Builder mindset", "Curiosity. Problem solving. Resilience."],
  ["Future ready", "Technology. Innovation. Real-world impact."],
  ["Trust & partnership", "Safe spaces. Mentorship. Lifelong values."],
];

const programmes = [
  {
    level: "01",
    name: "Builder Programme",
    range: "Grades 6–9",
    featured: false,
    promise: "Curriculum-connected building challenges that make mathematics and science visible through real-world tasks.",
    learners: "Students who need to move from memorising concepts to using them with confidence.",
    modules: ["Mechanisms and motion", "Structures and loads", "Electricity and control", "Measurement-led improvement"],
  },
  {
    level: "02",
    name: "Applied Engineering Studio",
    range: "Grade 11 only",
    featured: true,
    promise: "An intensive design and systems studio dedicated to Grade 11 learners—free from board year pressures—to practise engineering briefs, prototype cycles, systems thinking and technical documentation.",
    learners: "Grade 11 students preparing for serious academic, technical and engineering pathways before their final board year.",
    modules: ["Advanced design briefs", "Prototype iteration cycles", "Systems and constraints", "Portfolio & technical documentation"],
  },
  {
    level: "03",
    name: "Institution Studio",
    range: "Schools & learning centres",
    featured: false,
    promise: "A structured implementation model for centres that want Makeon as a repeatable learning pathway, not an occasional workshop.",
    learners: "School leaders, centre owners, facilitators and programme coordinators.",
    modules: ["Facilitator orientation", "Programme calendar", "Material planning", "Parent communication"],
  },
];

const publications = [
  {
    code: "DOC-01",
    type: "Position Paper",
    title: "Why Builder Learning, Why Now",
    desc: "The case for helping children move from content familiarity to usable capability.",
  },
  {
    code: "DOC-02",
    type: "Programme Guide",
    title: "The Makeon Builder Pathway",
    desc: "The step-by-step learning architecture behind Makeon sessions and portfolios.",
  },
  {
    code: "DOC-03",
    type: "Institutional Brief",
    title: "Makeon for Schools and Centres",
    desc: "How Makeon can be adopted in schools, learning centres and enrichment contexts.",
  },
  {
    code: "DOC-04",
    type: "Facilitator Note",
    title: "Questions That Build Thinking",
    desc: "How mentors guide learners without turning making into passive instruction.",
  },
  {
    code: "DOC-05",
    type: "Parent Note",
    title: "What Progress Looks Like",
    desc: "A plain-language guide to understanding confidence, evidence and growth.",
  },
  {
    code: "DOC-06",
    type: "Assessment Note",
    title: "Portfolio Evidence in Builder Learning",
    desc: "How learner work can be documented without reducing it to marks alone.",
  },
];

const faqs = [
  ["Is Makeon a robotics class?", "No. Robotics can be one expression of builder learning, but Makeon is broader: structures, mechanisms, materials, measurement, circuits, systems and explanation."],
  ["Does it replace school science or maths?", "No. Makeon strengthens academic learning by giving children concrete experiences that make concepts easier to understand, remember and explain."],
  ["Do learners need prior technical skill?", "No. The pathway is staged. Younger learners begin with observation and simple builds; older learners move toward prototypes, systems and portfolios."],
  ["Can schools adopt it inside the timetable?", "Yes, subject to local planning. Makeon can be shaped as a weekly studio, enrichment block, lab period, club or centre-based programme."],
];

export default function MakeonSwissV2() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeBeat, setActiveBeat] = useState(3);
  const [audience, setAudience] = useState<"institution" | "parent">("institution");
  const [submitted, setSubmitted] = useState(false);
  const [requestedDoc, setRequestedDoc] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    const animatedElements = document.querySelectorAll(".sw-fade-up");
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleDocRequest = (docTitle: string) => {
    setRequestedDoc(docTitle);
    const formSection = document.getElementById("enquire");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="v2-swiss-root">
      {/* Top Metadata Strip (Slide 1 top bar) */}
      <div className="sw-meta-topline">
        <span>@MAKEON // CHENNAI, INDIA</span>
        <span>BUILDER DEVELOPMENT INFRASTRUCTURE</span>
        <span>ACADEMIC YEAR 2026</span>
      </div>

      {/* Main Header */}
      <header className="sw-header">
        <a className="sw-brand-lockup" href="#top" aria-label="Makeon home">
          <div className="sw-brand-icon">M</div>
          <div className="sw-brand-text">
            <strong>MAKEON</strong>
            <small>Builder Development Infrastructure</small>
          </div>
        </a>

        <button
          type="button"
          className="sw-mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "CLOSE [X]" : "MENU [=]"}
        </button>

        <nav className={`sw-nav ${menuOpen ? "open" : ""}`} aria-label="Primary navigation">
          <a className="sw-nav-link" href="#who" onClick={() => setMenuOpen(false)}>Who We Are</a>
          <a className="sw-nav-link" href="#philosophy" onClick={() => setMenuOpen(false)}>Philosophy</a>
          <a className="sw-nav-link" href="#programmes" onClick={() => setMenuOpen(false)}>Programmes</a>
          <a className="sw-nav-link" href="#pathway" onClick={() => setMenuOpen(false)}>The Build Loop</a>
          <a className="sw-nav-link" href="#collaborations" onClick={() => setMenuOpen(false)}>Collaborations</a>
          <a className="sw-nav-link" href="#resources" onClick={() => setMenuOpen(false)}>White Papers</a>
          <a className="sw-btn-nav-action" href="#enquire" onClick={() => setMenuOpen(false)}>
            <span>START ENQUIRY</span>
            <span aria-hidden="true">→</span>
          </a>
        </nav>
      </header>

      {/* SECTION 1: HERO (Slide 1 Style) */}
      <section className="sw-hero-section" id="top">
        <div className="sw-hero-meta-bar sw-fade-up">
          <span>DOC: STRATEGIC OVERVIEW</span>
          <span>LOCATION: TAMIL NADU, INDIA</span>
          <span>EST. 2026</span>
        </div>

        <div className="sw-hero-grid">
          <div className="sw-hero-left sw-fade-up">
            <p className="sw-hero-lead-text">
              Where Ideas, Problem-Solving, and Physical Making Create Usable Capability.
            </p>
            <div className="sw-hero-metrics">
              <div className="sw-hero-metric-item">
                <strong>100%</strong>
                <small>Hands-On Building</small>
              </div>
              <div className="sw-hero-metric-item">
                <strong>0%</strong>
                <small>Passive Memorisation</small>
              </div>
            </div>
          </div>

          <div className="sw-hero-right sw-fade-up sw-d-1">
            <h1 className="sw-hero-headline">
              MAKEON
              <span>— INFRASTRUCTURE</span>
            </h1>
            <p className="sw-hero-description">
              Makeon is India’s builder development infrastructure. We partner with learning centres,
              schools and families to help children understand concepts through hands-on building,
              purposeful projects and future-ready skills.
            </p>
            <div className="sw-hero-cta-group">
              <a className="sw-btn-solid" href="#programmes">
                EXPLORE PROGRAMMES <span>→</span>
              </a>
              <a className="sw-btn-outline" href="#pathway">
                SEE THE METHOD
              </a>
            </div>
          </div>
        </div>

        {/* Slide 1 Bottom Wide Dark Accent Strip */}
        <div className="sw-hero-banner-strip sw-fade-up sw-d-2">
          <div>
            <span className="sw-banner-tag">CORE MANIFESTO // 2026</span>
            <strong style={{ display: "block", fontSize: "16px", marginTop: "4px", color: "#fff" }}>
              Think. Make. Build the future.
            </strong>
          </div>
          <div className="sw-banner-badge" aria-hidden="true">★</div>
          <p className="sw-banner-quote">
            “Technology becomes meaningful when learners use it to think, make, test, improve and explain what they have created.”
          </p>
        </div>
      </section>

      {/* SECTION 2: WHO WE ARE — 4 TALL VERTICAL COLUMNS (Slide 2 Style) */}
      <section className="sw-section" id="who">
        <div className="sw-section-header sw-fade-up">
          <div className="sw-section-meta">02 // CORE OBJECTIVES</div>
          <h2 className="sw-section-title">WHO WE ARE & WHAT WE BUILD</h2>
        </div>

        <div className="sw-four-columns">
          {pillars.map((p, idx) => (
            <article key={p.num} className={`sw-col-card ${p.theme} sw-fade-up sw-d-${idx + 1}`}>
              <div className="sw-col-top">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
              <div className="sw-col-num">{p.num}</div>
            </article>
          ))}
        </div>
      </section>

      {/* ==========================================================================
         SECTION 3: THE BUILD LOOP (REVAMPED INTEGRATED STUDIO BLUEPRINT DASHBOARD)
         ========================================================================== */}
      <section className="sw-section" id="pathway" aria-label="The Makeon Build Loop">
        <div className="sw-section-header sw-fade-up">
          <div className="sw-section-meta">03 // PROPOSED METHODOLOGY & BLUEPRINT</div>
          <h2 className="sw-section-title">THE MAKEON BUILD LOOP</h2>
          <p style={{ color: "var(--sw-text-muted)", fontSize: "16px", maxWidth: "680px", margin: "8px 0 0" }}>
            Seven moves. Every session. Compressing the life of a real engineering project into one repeatable rhythm.
          </p>
        </div>

        <div className="sw-loop-dashboard sw-fade-up">
          {/* Top 7-Stage Horizontal Stepper Ribbon */}
          <div className="sw-loop-ribbon" role="tablist" aria-label="7 stages of Build Loop">
            {buildLoop.map((beat, index) => (
              <button
                key={beat.name}
                type="button"
                role="tab"
                aria-selected={activeBeat === index}
                className={`sw-ribbon-step ${activeBeat === index ? "active" : ""} ${beat.name === "Debug" ? "is-debug-step" : ""}`}
                onClick={() => setActiveBeat(index)}
              >
                <span className="sw-ribbon-num">[{beat.number}]</span>
                <span className="sw-ribbon-title">{beat.name}</span>
                <span className="sw-ribbon-cue">{beat.cue}</span>
              </button>
            ))}
          </div>

          {/* Studio Stage Detail Body */}
          <div className="sw-loop-main-grid">
            <div className="sw-loop-content-col">
              <div>
                <div className="sw-stage-badge-top">
                  <span>STAGE [{buildLoop[activeBeat].number}] SPECIFICATION</span>
                  <span>■ ACTIVE RHYTHM</span>
                </div>
                <h3 className="sw-stage-name-huge">{buildLoop[activeBeat].name}</h3>
                <p className="sw-stage-cue-line">"{buildLoop[activeBeat].cue}"</p>

                <div className="sw-roles-stacked">
                  <div className="sw-role-card-sharp">
                    <span>THE LEARNER OBJECTIVE</span>
                    <p>{buildLoop[activeBeat].child}</p>
                  </div>
                  <div className="sw-role-card-sharp">
                    <span>THE MENTOR PROTOCOL</span>
                    <p>{buildLoop[activeBeat].mentor}</p>
                  </div>
                </div>
              </div>

              <div className="sw-loop-footline">
                <span>NOTHING DEMONSTRATED.</span>
                <strong>EVERYTHING BUILT.</strong>
              </div>
            </div>

            <div className="sw-loop-media-col">
              <div className="sw-loop-media-frame">
                <img
                  src="/makeon-assets/student-studio-wide.png"
                  alt="Students engineering prototypes at Makeon bench"
                />
              </div>
              <div className="sw-evidence-overlay-card">
                <div>
                  <strong>Empirical Proof Gate</strong>
                  <p>Students must demonstrate operation and defend engineering decisions.</p>
                </div>
                <span className="sw-evidence-badge">EVIDENCE LOGGED</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PHILOSOPHY & EDUCATIONAL CASE */}
      <section className="sw-section" id="philosophy">
        <div className="sw-section-header sw-fade-up">
          <div className="sw-section-meta">04 // PHILOSOPHY & RIGOR</div>
          <h2 className="sw-section-title">BUILD WITH AI & EMERGING TECHNOLOGIES</h2>
        </div>

        <div className="sw-philosophy-layout">
          <div className="sw-photo-box-sharp sw-fade-up">
            <img
              src="/makeon-assets/student-bridge-studio.png"
              alt="Bridge prototype testing bench at Makeon"
            />
          </div>

          <div className="sw-philosophy-copy sw-fade-up sw-d-1">
            <h2>CAPABILITY GROWS WHEN KNOWLEDGE IS USED.</h2>
            <p>
              In many classrooms, mathematics and science remain abstract for too long. Students may remember definitions, formulae and diagrams, yet struggle to see how those ideas behave in the physical world. Makeon closes that gap by placing concepts inside purposeful building experiences.
            </p>
            <p>
              The goal is not activity for its own sake. Every Makeon session is designed around a clear concept, a buildable challenge, a visible constraint, a testable outcome and a learner explanation.
            </p>
            <div style={{ display: "flex", gap: "12px", alignItems: "center", borderTop: "1px solid var(--sw-line-dark)", paddingTop: "16px" }}>
              <span style={{ fontSize: "20px", color: "var(--sw-accent-red)", fontWeight: "800" }}>★</span>
              <strong style={{ fontFamily: "var(--sw-font-mono)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Method is not left to chance. Method is what we teach.
              </strong>
            </div>
          </div>
        </div>

        <div className="sw-values-strip-sharp sw-fade-up sw-d-2">
          {values.map((v) => (
            <div key={v[0]} className="sw-value-box-sharp">
              <h4>{v[0]}</h4>
              <p>{v[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: PROGRAMMES */}
      <section className="sw-section" id="programmes">
        <div className="sw-section-header sw-fade-up">
          <div className="sw-section-meta">05 // ACADEMIC PATHWAYS</div>
          <h2 className="sw-section-title">A COHERENT PROGRESSION, NOT KITS</h2>
          <p style={{ color: "var(--sw-text-muted)", fontSize: "16px", maxWidth: "680px", margin: "8px 0 0" }}>
            Makeon is organised as an escalating capability pathway. Each level deepens independent problem-solving and documentation quality.
          </p>
        </div>

        <div className="sw-programmes-grid">
          {programmes.map((prog, idx) => (
            <article
              key={prog.name}
              className={`sw-prog-block ${prog.featured ? "is-featured" : ""} sw-fade-up sw-d-${idx + 1}`}
            >
              <div>
                <div className="sw-prog-badge-num">{prog.level}</div>
                <span className="sw-prog-range-tag">[{prog.range}]</span>
                <h3>{prog.name}</h3>
                <p>{prog.promise}</p>
              </div>

              <div>
                <ul className="sw-prog-modules">
                  {prog.modules.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ==========================================================================
         SECTION 6: STRATEGIC COLLABORATIONS (REVAMPED SHOWCASE)
         ========================================================================== */}
      <section className="sw-section" id="collaborations">
        <div className="sw-section-header sw-fade-up">
          <div className="sw-section-meta">06 // STRATEGIC COLLABORATIONS</div>
          <h2 className="sw-section-title">GLOBAL TECHNICAL ALLIANCE</h2>
        </div>

        <div className="sw-collab-showcase-box sw-fade-up">
          <div>
            <div className="sw-collab-meta-badge">ACTIVE STRATEGIC ALLIANCE // TIER 01</div>
            <h3>INNOINTEL GLOBAL</h3>
            <span style={{ fontFamily: "var(--sw-font-mono)", fontSize: "11px", color: "#888888", textTransform: "uppercase", letterSpacing: "0.12em", display: "block", marginBottom: "8px" }}>
              COLLABORATION CODE: INNO-MAKEON-2026
            </span>
          </div>

          <div>
            <p>
              Technical collaboration in product engineering, industrial design, and Academy course delivery across institutions.
            </p>
            <div className="sw-collab-pill-tags">
              <span className="sw-tag-item">PRODUCT ENGINEERING</span>
              <span className="sw-tag-item">INDUSTRIAL DESIGN</span>
              <span className="sw-tag-item">ACADEMY COURSE DELIVERY</span>
              <span className="sw-tag-item" style={{ borderColor: "var(--sw-accent-volt)", color: "var(--sw-accent-volt)" }}>STATUS: ACTIVE</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         SECTION 7: EXECUTIVE RESEARCH ARCHIVE / WHITE PAPERS (REVAMPED 3-COL)
         ========================================================================== */}
      <section className="sw-section" id="resources">
        <div className="sw-section-header sw-fade-up">
          <div className="sw-section-meta">07 // RESEARCH ARCHIVE & PUBLICATIONS</div>
          <h2 className="sw-section-title">WHITE PAPERS & INSTITUTIONAL BRIEFS</h2>
          <p style={{ color: "var(--sw-text-muted)", fontSize: "16px", maxWidth: "680px", margin: "8px 0 0" }}>
            The theoretical architecture, pedagogical models, and assessment methodologies behind Makeon.
          </p>
        </div>

        <div className="sw-publications-3col">
          {publications.map((doc, idx) => (
            <article key={doc.code} className={`sw-pub-card-sharp sw-fade-up sw-d-${(idx % 3) + 1}`}>
              <div>
                <div className="sw-pub-top-meta">
                  <span className="sw-pub-type">{doc.type}</span>
                  <span className="sw-pub-code">{doc.code}</span>
                </div>
                <h4>{doc.title}</h4>
                <p>{doc.desc}</p>
              </div>
              <button
                type="button"
                className="sw-pub-action-btn"
                onClick={() => handleDocRequest(doc.title)}
              >
                REQUEST DOCUMENT [↗]
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 8: QUESTIONS LEADERS ASK (FAQ) */}
      <section className="sw-section">
        <div className="sw-section-header sw-fade-up">
          <div className="sw-section-meta">08 // FAQ & DUE DILIGENCE</div>
          <h2 className="sw-section-title">QUESTIONS LEADERS ASK</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          {faqs.map((faq, idx) => (
            <div
              key={faq[0]}
              className={`sw-value-box-sharp sw-fade-up sw-d-${(idx % 2) + 1}`}
              style={{ border: "1px solid var(--sw-line-dark)", padding: "28px" }}
            >
              <h4 style={{ fontSize: "16px", marginBottom: "10px" }}>{faq[0]}</h4>
              <p style={{ fontSize: "14.5px", color: "var(--sw-text-muted)", lineHeight: "1.6" }}>{faq[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 9: READINESS ASSESSMENT */}
      <section className="sw-section sw-enquire-section" id="enquire">
        <div className="sw-section-header sw-fade-up">
          <div className="sw-section-meta">09 // READINESS EVALUATION</div>
          <h2 className="sw-section-title">START THE CONVERSATION</h2>
          <p style={{ color: "#aaaaaa", fontSize: "16px", maxWidth: "680px", margin: "8px 0 0" }}>
            Select your profile below to initiate a structured academic evaluation.
          </p>
        </div>

        <div className="sw-form-layout">
          <div className="sw-toggle-buttons sw-fade-up">
            <button
              type="button"
              className={`sw-toggle-btn ${audience === "institution" ? "active" : ""}`}
              onClick={() => setAudience("institution")}
            >
              <strong>I represent a school or centre</strong>
              <small>Explore Makeon as structured builder development infrastructure.</small>
            </button>
            <button
              type="button"
              className={`sw-toggle-btn ${audience === "parent" ? "active" : ""}`}
              onClick={() => setAudience("parent")}
            >
              <strong>I’m a parent</strong>
              <small>Find the right builder development pathway for my child.</small>
            </button>
          </div>

          <div className="sw-form-box-sharp sw-fade-up sw-d-1">
            {submitted ? (
              <div className="sw-success-box">
                <div className="sw-success-badge">★</div>
                <h3 style={{ fontSize: "24px", fontWeight: "800", textTransform: "uppercase", margin: "0 0 12px" }}>
                  ENQUIRY RECEIVED
                </h3>
                <p style={{ color: "var(--sw-text-muted)", fontSize: "15px", lineHeight: "1.6", marginBottom: "24px" }}>
                  Your {audience === "institution" ? "institution inquiry" : "parent inquiry"}{" "}
                  {requestedDoc ? `for "${requestedDoc}"` : ""} has been logged. Our academic team will respond within 24 hours.
                </p>
                <button
                  type="button"
                  className="sw-btn-solid"
                  onClick={() => {
                    setSubmitted(false);
                    setRequestedDoc(null);
                  }}
                >
                  SUBMIT ANOTHER ENQUIRY
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="sw-form-grid">
                  <div className="sw-form-field">
                    <label>Full Name</label>
                    <input required name="name" placeholder="Full name" />
                  </div>

                  {audience === "institution" ? (
                    <div className="sw-form-field">
                      <label>School / Centre Name</label>
                      <input required name="institution" placeholder="Institution name" />
                    </div>
                  ) : (
                    <div className="sw-form-field">
                      <label>Child’s Age / Grade</label>
                      <input required name="child-age" placeholder="e.g. Grade 8" />
                    </div>
                  )}

                  <div className="sw-form-field">
                    <label>Email or Phone</label>
                    <input required name="contact" placeholder="Email address or phone" />
                  </div>

                  <div className="sw-form-field">
                    <label>City</label>
                    <input name="city" placeholder="e.g. Chennai, Bengaluru" />
                  </div>

                  {audience === "institution" ? (
                    <>
                      <div className="sw-form-field">
                        <label>Institution Type</label>
                        <select name="type">
                          <option>School</option>
                          <option>Learning centre</option>
                          <option>Community organisation</option>
                          <option>Partnership</option>
                        </select>
                      </div>

                      <div className="sw-form-field">
                        <label>Primary Learner Group</label>
                        <select name="age">
                          <option>Grades 6–9</option>
                          <option>Grade 11</option>
                          <option>Mixed</option>
                        </select>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="sw-form-field">
                        <label>Current Interest</label>
                        <select name="parent-interest">
                          <option>Math and science confidence</option>
                          <option>Hands-on building</option>
                          <option>Future-ready skills</option>
                          <option>Weekend / after-school programme</option>
                        </select>
                      </div>

                      <div className="sw-form-field">
                        <label>Preferred Contact Mode</label>
                        <select name="parent-contact">
                          <option>Call me</option>
                          <option>Send programme details</option>
                          <option>Invite us to an orientation</option>
                        </select>
                      </div>
                    </>
                  )}

                  <div className="sw-form-field full">
                    <label>
                      {audience === "institution"
                        ? "What should Makeon help your institution build?"
                        : "What would you like Makeon to help your child develop?"}
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      defaultValue={requestedDoc ? `I would like to request the document: ${requestedDoc}` : ""}
                      placeholder="Share your goals or specific requirements..."
                    />
                  </div>

                  <button className="sw-submit-btn-sharp" type="submit">
                    {audience === "institution" ? "SUBMIT INSTITUTION ENQUIRY →" : "SUBMIT PARENT ENQUIRY →"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ==========================================================================
         FOOTER (FULL-WIDTH SEAMLESS DARK CONVERTO STYLE)
         ========================================================================== */}
      <footer className="sw-footer-seamless">
        <div className="sw-footer-inner-container">
          <div className="sw-footer-top-row">
            {/* Brand Col */}
            <div className="sw-footer-left-brand">
              <h2>MAKEON</h2>
              <p>
                Makeon is India’s builder development infrastructure, partnering with schools, learning centres and families to build real capability through hands-on engineering.
              </p>
            </div>

            {/* Quick Link Col */}
            <div className="sw-footer-nav-col">
              <h4>Quick link</h4>
              <nav>
                <a href="#top">Home</a>
                <a href="#who">About us</a>
                <a href="#pathway">Build Loop</a>
                <a href="#enquire">Contact us</a>
              </nav>
            </div>

            {/* Programmes Col */}
            <div className="sw-footer-nav-col">
              <h4>Programmes</h4>
              <nav>
                <a href="#programmes">Grades 6–9</a>
                <a href="#programmes">Grade 11 Studio</a>
                <a href="#programmes">Institutions</a>
                <a href="#resources">Curriculum</a>
              </nav>
            </div>

            {/* Research Col */}
            <div className="sw-footer-nav-col">
              <h4>Research</h4>
              <nav>
                <a href="#resources">White papers</a>
                <a href="#resources">Case studies</a>
                <a href="#collaborations">Partnerships</a>
                <a href="#philosophy">Methodology</a>
              </nav>
            </div>

            {/* Contact Col */}
            <div className="sw-footer-nav-col">
              <h4>Contact</h4>
              <address>
                <span>330 Thambu Chetty St</span>
                <span>Chennai 600001</span>
                <a href="tel:+919840053359">+91 98400 53359</a>
                <a href="mailto:prasanth@makeon.build">prasanth@makeon.build</a>
              </address>
            </div>
          </div>

          {/* Middle Metadata Rule */}
          <div className="sw-footer-meta-bar">
            <span>© 2026 Makeon Technologies Private Limited. All rights reserved.</span>
            <span>Building the next generation of builders.</span>
          </div>

          {/* Giant Submerged SVG Typography (Exact CONVRTO Style) */}
          <div className="sw-footer-giant-box" aria-hidden="true">
            <svg
              viewBox="0 0 1100 190"
              width="100%"
              height="auto"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="convertoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="1" />
                  <stop offset="55%" stopColor="#064e3b" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#064e3b" stopOpacity="0" />
                </linearGradient>
              </defs>
              <text
                x="50%"
                y="155"
                textAnchor="middle"
                fontFamily="'Plus Jakarta Sans', -apple-system, sans-serif"
                fontWeight="900"
                fontSize="185"
                letterSpacing="-4"
                fill="url(#convertoGrad)"
              >
                MAKEON
              </text>
            </svg>
          </div>
        </div>
      </footer>

      {/* Floating Mobile Quick Action Bar */}
      <div className="sw-mobile-bar" aria-label="Mobile quick actions">
        <a className="sw-mob-call" href="tel:+919840053359">
          📞 CALL +91 98400 53359
        </a>
        <a className="sw-mob-enquire" href="#enquire">
          ⚡ START ENQUIRY
        </a>
      </div>
    </div>
  );
}
