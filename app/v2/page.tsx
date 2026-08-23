"use client";

import { useEffect, useState, useRef } from "react";
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
    promise: "Curriculum-connected building challenges that make mathematics and science visible through real-world tasks.",
    learners: "Students who need to move from memorising concepts to using them with confidence.",
    modules: ["Mechanisms and motion", "Structures and loads", "Electricity and control", "Measurement-led improvement"],
    evidence: "Learners submit a build record showing concept, design choice, test result, failure point and improvement.",
  },
  {
    level: "02",
    name: "Applied Engineering Studio",
    range: "Grade 11 only",
    promise: "An intensive design and systems studio dedicated to Grade 11 learners—free from board year pressures—to practise engineering briefs, prototype cycles, systems thinking and technical documentation.",
    learners: "Grade 11 students preparing for serious academic, technical and engineering pathways before their final board year.",
    modules: ["Advanced design briefs", "Prototype iteration cycles", "Systems and constraints", "Portfolio & technical documentation"],
    evidence: "Learners present a documented prototype and defend engineering decisions using evidence.",
  },
  {
    level: "03",
    name: "Institution Studio",
    range: "Schools & learning centres",
    promise: "A structured implementation model for centres that want Makeon as a repeatable learning pathway, not an occasional workshop.",
    learners: "School leaders, centre owners, facilitators and programme coordinators.",
    modules: ["Facilitator orientation", "Programme calendar", "Material planning", "Parent communication"],
    evidence: "Institutions receive a clear adoption roadmap and learner-evidence structure before launch.",
  },
];

const adoption = [
  ["Readiness conversation", "We understand the age group, weekly schedule, space, facilitator capacity and institutional goals."],
  ["Programme fit", "We recommend the starting level, module sequence and minimum material setup."],
  ["Facilitator preparation", "Facilitators receive the session structure, questioning model and evidence expectations."],
  ["Learner launch", "The first cohort begins with a clear pathway, parent-facing language and visible progress records."],
  ["Review and deepen", "The institution reviews learner evidence, facilitator feedback and next-stage readiness."],
];

const publications = [
  ["Position paper", "Why Builder Learning, Why Now", "The case for helping children move from content familiarity to usable capability."],
  ["Programme guide", "The Makeon Builder Pathway", "The step-by-step learning architecture behind Makeon sessions and portfolios."],
  ["Institutional brief", "Makeon for Schools and Centres", "How Makeon can be adopted in schools, learning centres and enrichment contexts."],
  ["Facilitator note", "Questions That Build Thinking", "How mentors guide learners without turning making into passive instruction."],
  ["Parent note", "What Progress Looks Like", "A plain-language guide to understanding confidence, evidence and growth."],
  ["Assessment note", "Portfolio Evidence in Builder Learning", "How learner work can be documented without reducing it to marks alone."],
];

const faqs = [
  ["Is Makeon a robotics class?", "No. Robotics can be one expression of builder learning, but Makeon is broader: structures, mechanisms, materials, measurement, circuits, systems and explanation."],
  ["Does it replace school science or maths?", "No. Makeon strengthens academic learning by giving children concrete experiences that make concepts easier to understand, remember and explain."],
  ["Do learners need prior technical skill?", "No. The pathway is staged. Younger learners begin with observation and simple builds; older learners move toward prototypes, systems and portfolios."],
  ["Can schools adopt it inside the timetable?", "Yes, subject to local planning. Makeon can be shaped as a weekly studio, enrichment block, lab period, club or centre-based programme."],
];

const collaborations = [
  {
    name: "Innointel Global",
    tag: "Product & Engineering",
    description: "Technical collaboration in product engineering, design and Academy course delivery.",
    published: true,
  },
  {
    name: "Rotary [Rotary Club Annanagar Aaditya]",
    tag: "School Outreach",
    description: "Delivery collaboration bringing the makeon Builder Development curriculum into government schools and Rotary Interact schools.",
    published: false,
  },
  {
    name: "IIT Madras",
    tag: "Pedagogy & Impact",
    description: "Research collaboration conducting an independent impact study to assess and recommend pedagogy for hands-on building education in schools.",
    published: false,
  },
];

function LogoMark() {
  return (
    <span className="v2-logo" aria-hidden="true">
      <svg viewBox="0 0 120 120" focusable="false">
        <path
          fill="var(--v2-navy)"
          d="M12 14h27l21 23 21-23h27v92H84V50L60 74 36 50v56H12V14Z"
        />
        <path fill="var(--v2-bg)" d="M39 14h42L60 37 39 14Z" />
        <rect fill="var(--v2-red)" x="48" y="80" width="24" height="24" rx="2" />
      </svg>
    </span>
  );
}

export default function MakeonV2Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeBeat, setActiveBeat] = useState(1);
  const [audience, setAudience] = useState<"parent" | "institution">("institution");
  const [submitted, setSubmitted] = useState(false);
  const [requestedDoc, setRequestedDoc] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth Scroll Reveal Effect
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    });

    const elements = document.querySelectorAll(".v2-reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleDocRequest = (docTitle: string) => {
    setRequestedDoc(docTitle);
    const enquireSection = document.getElementById("enquire");
    if (enquireSection) {
      enquireSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="v2-wrapper" ref={containerRef}>
      {/* Top Banner */}
      <div className="v2-topline">
        <span>MAKEON</span>
        <span>BUILDER DEVELOPMENT INFRASTRUCTURE</span>
        <span>THINK. MAKE. BUILD THE FUTURE.</span>
      </div>

      {/* Header */}
      <header className="v2-header">
        <a className="v2-brand" href="#top" aria-label="Makeon home">
          <LogoMark />
          <div className="v2-brand-text">
            <strong>MAKEON</strong>
            <small>Builder Development Infrastructure</small>
          </div>
        </a>

        <button
          type="button"
          className="v2-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "Close ✕" : "Menu ☰"}
        </button>

        <nav className={`v2-nav ${menuOpen ? "open" : ""}`} aria-label="Primary navigation">
          <a className="v2-nav-link" href="#who" onClick={() => setMenuOpen(false)}>Who we are</a>
          <a className="v2-nav-link" href="#philosophy" onClick={() => setMenuOpen(false)}>Philosophy</a>
          <a className="v2-nav-link" href="#programmes" onClick={() => setMenuOpen(false)}>Programmes</a>
          <a className="v2-nav-link" href="#pathway" onClick={() => setMenuOpen(false)}>Method</a>
          <a className="v2-nav-link" href="#institutions" onClick={() => setMenuOpen(false)}>Institutions</a>
          <a className="v2-nav-link" href="#resources" onClick={() => setMenuOpen(false)}>Resources</a>
          <a className="v2-btn-start" href="#enquire" onClick={() => setMenuOpen(false)}>
            <span>Start</span>
            <span aria-hidden="true">→</span>
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="v2-hero" id="top">
        <div className="v2-hero-main v2-reveal">
          <div className="v2-badge-pill">Builder Development Infrastructure</div>
          <h1>MAKEON</h1>
          <p className="v2-hero-subtitle">Think. Make. Build the future.</p>
          <div className="v2-accent-bar" />
          <p className="v2-hero-copy">
            Makeon helps children understand math and science through hands-on building,
            real-world projects and a structured pathway from curiosity to demonstrated capability.
          </p>
          <div className="v2-hero-actions">
            <a className="v2-btn-primary" href="#programmes">
              Explore programmes <span aria-hidden="true">→</span>
            </a>
            <a className="v2-btn-secondary" href="#pathway">
              See the method
            </a>
          </div>
        </div>

        <aside className="v2-who-card v2-reveal v2-delay-1" id="who">
          <div>
            <div className="v2-card-tag">Who we are</div>
            <p>
              Makeon is India’s builder development infrastructure. We partner with learning centres,
              schools and families to help children understand concepts through hands-on building,
              purposeful projects and future-ready skills.
            </p>
          </div>
          <ul>
            <li>We build confidence.</li>
            <li>We build understanding.</li>
            <li>We build builders.</li>
          </ul>
        </aside>
      </section>

      {/* The Makeon Build Loop */}
      <section className="v2-section v2-loop-section" id="pathway" aria-label="The Makeon Build Loop">
        <div className="v2-section-header v2-reveal">
          <span className="v2-section-tag">The Makeon Build Loop</span>
          <h2 className="v2-section-title">
            Seven moves. Every session.<br />
            <em>A builder for life.</em>
          </h2>
          <p className="v2-section-desc">
            Every Makeon session compresses the life of a real engineering project into one repeatable rhythm: enter, find the problem, plan it, build it, fix it, show it and record it.
          </p>
        </div>

        <div className="v2-loop-grid-nav v2-reveal v2-delay-1" role="tablist" aria-label="Build loop steps">
          {buildLoop.map((beat, index) => (
            <button
              key={beat.name}
              type="button"
              role="tab"
              aria-selected={activeBeat === index}
              className={`v2-loop-tab ${activeBeat === index ? "active" : ""} ${beat.name === "Debug" ? "is-debug-tab" : ""}`}
              onClick={() => setActiveBeat(index)}
            >
              <span className="v2-loop-tab-num">{beat.number}</span>
              <strong className="v2-loop-tab-title">{beat.name}</strong>
              <small className="v2-loop-tab-cue">{beat.cue}</small>
            </button>
          ))}
        </div>

        <div className="v2-loop-display v2-reveal v2-delay-2">
          <div className="v2-loop-photo-box">
            <figure>
              <img
                src="/makeon-assets/student-studio-wide.png"
                alt="Students working together at a Makeon studio bench"
              />
              <figcaption>
                There is no front of the room. The mentor holds the rhythm; the learner does the engineering.
              </figcaption>
            </figure>
          </div>

          <div className="v2-loop-card">
            <div className="v2-loop-card-header">
              <span className="v2-loop-badge">Stage {buildLoop[activeBeat].number}</span>
              <h3 className="v2-loop-card-title">{buildLoop[activeBeat].name}</h3>
              <p className="v2-loop-card-cue">"{buildLoop[activeBeat].cue}"</p>
            </div>

            <div className="v2-roles-grid">
              <div className="v2-role-box">
                <span>The Learner</span>
                <p>{buildLoop[activeBeat].child}</p>
              </div>
              <div className="v2-role-box">
                <span>The Mentor</span>
                <p>{buildLoop[activeBeat].mentor}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="v2-loop-signature v2-reveal">
          <span>Nothing demonstrated.</span>
          <strong>Everything built.</strong>
        </div>
      </section>

      {/* Educational Case Section */}
      <section className="v2-section" id="why">
        <div className="v2-section-header v2-reveal">
          <span className="v2-section-tag">The Educational Case</span>
          <h2 className="v2-section-title">Capability grows when knowledge is used.</h2>
        </div>
        <div className="v2-editorial-grid">
          <article className="v2-editorial-col v2-reveal">
            <p>
              In many classrooms, mathematics and science remain abstract for too long. Students may remember definitions, formulae and diagrams, yet struggle to see how those ideas behave in the physical world. Makeon closes that gap by placing concepts inside purposeful building experiences.
            </p>
          </article>
          <article className="v2-editorial-col v2-reveal v2-delay-1">
            <p>
              The goal is not activity for its own sake. Every Makeon session is designed around a clear concept, a buildable challenge, a visible constraint, a testable outcome and a learner explanation. The hands work, but the thinking is always the centre.
            </p>
          </article>
          <article className="v2-editorial-col v2-reveal v2-delay-2">
            <p>
              This is why the Makeon experience feels different from a hobby class. It is structured, cumulative and evidence-led. Learners do not simply complete a project; they learn to notice, plan, test, improve and explain.
            </p>
          </article>
        </div>
      </section>

      {/* Philosophy Banner */}
      <section className="v2-section" id="philosophy">
        <div className="v2-philosophy-banner v2-reveal">
          <div className="v2-philosophy-badge">Build</div>
          <div className="v2-philosophy-content">
            <span className="v2-section-tag">Makeon Philosophy</span>
            <h2>Build with AI and emerging technologies.</h2>
            <p>
              The philosophy of Makeon is “Build” with AI and emerging technologies.
              Technology becomes truly meaningful when learners use it to think,
              make, test, improve and explain what they have created.
            </p>
          </div>
        </div>

        <div className="v2-values-grid">
          {values.map((value, idx) => (
            <article key={value[0]} className={`v2-value-card v2-reveal v2-delay-${(idx % 4) + 1}`}>
              <h3>{value[0]}</h3>
              <p>{value[1]}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Programmes Section */}
      <section className="v2-section" id="programmes">
        <div className="v2-section-header v2-reveal">
          <span className="v2-section-tag">Programmes</span>
          <h2 className="v2-section-title">A coherent progression, not a collection of kits.</h2>
          <p className="v2-section-desc">
            Makeon is organised as a learning pathway. Each stage increases conceptual depth,
            independence, documentation quality and the learner’s ability to explain what they built.
          </p>
        </div>

        <div className="v2-programmes-stack">
          {programmes.map((prog, idx) => (
            <article key={prog.name} className={`v2-prog-card v2-reveal v2-delay-${idx + 1}`}>
              <div className="v2-prog-num">{prog.level}</div>
              <div className="v2-prog-main">
                <span className="v2-prog-range">{prog.range}</span>
                <h3 className="v2-prog-title">{prog.name}</h3>
                <p className="v2-prog-promise">{prog.promise}</p>
              </div>
              <div className="v2-prog-col">
                <h4>Best for</h4>
                <p>{prog.learners}</p>
              </div>
              <div className="v2-prog-col">
                <h4>Core modules</h4>
                <ul>
                  {prog.modules.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Learning Space Section */}
      <section className="v2-section">
        <div className="v2-space-grid">
          <div className="v2-space-photo v2-reveal">
            <figure>
              <img
                src="/makeon-assets/student-bridge-studio.png"
                alt="Students and a facilitator testing a handmade bridge prototype in a Makeon studio"
              />
              <figcaption>A focused build table: learners test, measure, document and improve a real prototype.</figcaption>
            </figure>
          </div>
          <div className="v2-space-copy v2-reveal v2-delay-1">
            <span className="v2-section-tag">The Learning Space</span>
            <h2 className="v2-section-title">A serious place for children to become capable.</h2>
            <p>
              The Makeon environment should feel calm, focused and aspirational. It is not a noisy toy room or a decorative display corner. It is a studio where learners handle materials, ask precise questions and take pride in making something work.
            </p>
            <ul>
              <li>Project tables for collaborative building</li>
              <li>Material and tool zones organised by module</li>
              <li>Display surfaces for sketches, vocabulary and evidence</li>
              <li>Portfolio rituals that make progress visible to learners and parents</li>
            </ul>
          </div>
        </div>
      </section>

      {/* For Institutions Section */}
      <section className="v2-section" id="institutions">
        <div className="v2-section-header v2-reveal">
          <span className="v2-section-tag">For Institutions</span>
          <h2 className="v2-section-title">Adopt a learning system, not a one-day activity.</h2>
        </div>

        <div className="v2-inst-grid">
          <article className="v2-inst-card v2-reveal">
            <h3>For schools</h3>
            <p>Makeon can support science, mathematics and innovation goals through structured studio sessions, club formats, portfolio projects or enrichment blocks.</p>
          </article>
          <article className="v2-inst-card v2-reveal v2-delay-1">
            <h3>For learning centres</h3>
            <p>Makeon gives centres a premium academic programme with repeatable modules, clear parent communication and visible learner outcomes.</p>
          </article>
          <article className="v2-inst-card v2-reveal v2-delay-2">
            <h3>For families</h3>
            <p>Makeon gives children a meaningful alternative to passive screen time by helping them build, test, explain and grow confidence.</p>
          </article>
        </div>

        <div className="v2-adoption-flow">
          {adoption.map((step, idx) => (
            <div key={step[0]} className={`v2-adoption-step v2-reveal v2-delay-${idx + 1}`}>
              <span className="v2-step-num">{String(idx + 1).padStart(2, "0")}</span>
              <h3>{step[0]}</h3>
              <p>{step[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Evidence Section */}
      <section className="v2-section">
        <div className="v2-section-header v2-reveal">
          <span className="v2-section-tag">Evidence & Assessment</span>
          <h2 className="v2-section-title">Progress should be visible without reducing learning to marks alone.</h2>
          <p className="v2-section-desc">
            Makeon treats every build as a record of thinking. Learners document choices, tests and improvements so parents and institutions can see confidence becoming capability.
          </p>
        </div>

        <div className="v2-evidence-grid">
          <div className="v2-evidence-visuals v2-reveal">
            <figure>
              <img
                src="/makeon-assets/student-mentor-evidence.png"
                alt="Students and mentor reviewing sketches, measurements and prototype evidence"
              />
            </figure>
          </div>
          <div className="v2-evidence-items">
            <article className="v2-evidence-card v2-reveal">
              <h3>Build records</h3>
              <p>Learners record what they attempted, what they changed and what they discovered.</p>
            </article>
            <article className="v2-evidence-card v2-reveal v2-delay-1">
              <h3>Concept maps</h3>
              <p>Key mathematics and science ideas are named and connected to the project.</p>
            </article>
            <article className="v2-evidence-card v2-reveal v2-delay-2">
              <h3>Prototype evidence</h3>
              <p>Models, measurements, photos and test notes show whether the idea worked.</p>
            </article>
            <article className="v2-evidence-card v2-reveal v2-delay-3">
              <h3>Explanation</h3>
              <p>Learners practise speaking and writing about decisions, constraints and next steps.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Strategic Collaborations */}
      <section className="v2-collab-section" id="partners">
        <div className="v2-collab-box v2-reveal">
          <div className="v2-collab-title">
            <span className="v2-section-tag">Collaborations</span>
            <h2>Strategic <span>collaborations</span></h2>
          </div>
          <div>
            {collaborations
              .filter((c) => c.published)
              .map((collab) => (
                <div key={collab.name} className="v2-collab-card">
                  <span className="v2-collab-tag">{collab.tag}</span>
                  <h3>{collab.name}</h3>
                  <p>{collab.description}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Publications & Resources */}
      <section className="v2-section" id="resources">
        <div className="v2-section-header v2-reveal">
          <span className="v2-section-tag">Publications & Resources</span>
          <h2 className="v2-section-title">The thinking behind the practice.</h2>
          <p className="v2-section-desc">
            The library below is structured as a serious institutional resource centre. Final PDFs can be attached when the documents are approved.
          </p>
        </div>

        <div className="v2-resources-grid">
          {publications.map((resource, idx) => (
            <article key={resource[1]} className={`v2-resource-card v2-reveal v2-delay-${(idx % 3) + 1}`}>
              <div>
                <span className="v2-resource-badge">{resource[0]}</span>
                <h3>{resource[1]}</h3>
                <p>{resource[2]}</p>
              </div>
              <button
                type="button"
                className="v2-resource-action"
                onClick={() => handleDocRequest(resource[1])}
              >
                Request document ↗
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="v2-section">
        <div className="v2-section-header v2-reveal">
          <span className="v2-section-tag">Questions Leaders Ask</span>
          <h2 className="v2-section-title">Clear answers before adoption.</h2>
        </div>
        <div className="v2-faq-grid">
          {faqs.map((faq, idx) => (
            <article key={faq[0]} className={`v2-faq-card v2-reveal v2-delay-${idx + 1}`}>
              <h3>{faq[0]}</h3>
              <p>{faq[1]}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Interactive Enquiry Form Section */}
      <section className="v2-enquire-section" id="enquire">
        <div className="v2-section-header v2-reveal">
          <span className="v2-section-tag">Readiness Assessment</span>
          <h2 className="v2-section-title">Choose the right conversation.</h2>
          <p className="v2-section-desc">
            Makeon separates parent enquiries from school and centre conversations, so each visitor sees a more relevant next step.
          </p>
        </div>

        <div className="v2-form-container">
          <div className="v2-audience-toggle v2-reveal">
            <button
              type="button"
              className={`v2-audience-btn ${audience === "institution" ? "active" : ""}`}
              onClick={() => setAudience("institution")}
            >
              <strong>I represent a school or centre</strong>
              <small>Explore Makeon as a structured builder infrastructure programme.</small>
            </button>
            <button
              type="button"
              className={`v2-audience-btn ${audience === "parent" ? "active" : ""}`}
              onClick={() => setAudience("parent")}
            >
              <strong>I’m a parent</strong>
              <small>Find the right builder development pathway for my child.</small>
            </button>
          </div>

          <div className="v2-form-card v2-reveal v2-delay-1">
            {submitted ? (
              <div className="v2-success-card">
                <div className="v2-success-icon">✓</div>
                <h3>Thank you for reaching out.</h3>
                <p>
                  Your {audience === "institution" ? "institution inquiry" : "parent inquiry"}{" "}
                  {requestedDoc ? `regarding "${requestedDoc}"` : ""} has been received. A member of our academic team will connect with you shortly.
                </p>
                <button
                  type="button"
                  className="v2-btn-primary"
                  onClick={() => {
                    setSubmitted(false);
                    setRequestedDoc(null);
                  }}
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="v2-form-grid">
                  <div className="v2-form-group">
                    <label>Name</label>
                    <input required name="name" placeholder="Your full name" />
                  </div>

                  {audience === "institution" ? (
                    <div className="v2-form-group">
                      <label>School / Centre Name</label>
                      <input required name="institution" placeholder="Institution name" />
                    </div>
                  ) : (
                    <div className="v2-form-group">
                      <label>Child’s Age / Grade</label>
                      <input required name="child-age" placeholder="e.g. Grade 7" />
                    </div>
                  )}

                  <div className="v2-form-group">
                    <label>Email or Phone</label>
                    <input required name="contact" placeholder="Email address or mobile number" />
                  </div>

                  <div className="v2-form-group">
                    <label>City</label>
                    <input name="city" placeholder="e.g. Chennai, Bengaluru" />
                  </div>

                  {audience === "institution" ? (
                    <>
                      <div className="v2-form-group">
                        <label>Institution Type</label>
                        <select name="type">
                          <option>School</option>
                          <option>Learning centre</option>
                          <option>Community organisation</option>
                          <option>Partnership</option>
                        </select>
                      </div>

                      <div className="v2-form-group">
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
                      <div className="v2-form-group">
                        <label>Current Interest</label>
                        <select name="parent-interest">
                          <option>Math and science confidence</option>
                          <option>Hands-on building</option>
                          <option>Future-ready skills</option>
                          <option>Weekend / after-school programme</option>
                        </select>
                      </div>

                      <div className="v2-form-group">
                        <label>Preferred Conversation</label>
                        <select name="parent-contact">
                          <option>Call me</option>
                          <option>Send programme details</option>
                          <option>Invite us to an orientation</option>
                        </select>
                      </div>
                    </>
                  )}

                  <div className="v2-form-group full">
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

                  <button className="v2-form-submit" type="submit">
                    {audience === "institution" ? "Submit institution enquiry" : "Submit parent enquiry"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="v2-footer">
        <div className="v2-footer-grid">
          <div className="v2-footer-brand">
            <a className="v2-brand" href="#top" aria-label="Makeon home">
              <LogoMark />
              <div className="v2-brand-text" style={{ color: "#fff" }}>
                <strong>MAKEON</strong>
                <small style={{ color: "#94a3b8" }}>Builder Development Infrastructure</small>
              </div>
            </a>
            <p>
              We build builder development infrastructure that empowers learners, strengthens institutions and transforms communities.
            </p>
            <span className="v2-footer-tagline">Building the next generation of builders.</span>
          </div>

          <div className="v2-footer-links">
            <h3>Quick Links</h3>
            <nav>
              <a href="#who">Who we are</a>
              <a href="#philosophy">Philosophy</a>
              <a href="#pathway">Build Loop</a>
              <a href="#institutions">For Institutions</a>
              <a href="#partners">Strategic Collaborations</a>
              <a href="#programmes">Programmes</a>
            </nav>
          </div>

          <div className="v2-footer-contact">
            <h3>Contact</h3>
            <address>
              <span>Rtn Prasanth Deenadayal</span>
              <span>330 Thambu Chetty Street,</span>
              <span>Pandu Kita Plaza, 2nd Floor,</span>
              <span>Chennai, Tamil Nadu 600001</span>
              <a href="tel:+919840053359">+91 98400 53359</a>
              <a href="mailto:prasanth@makeon.build">prasanth@makeon.build</a>
            </address>
          </div>
        </div>

        <div className="v2-footer-bottom">
          <small>
            © 2026 Makeon Technologies Private Limited. Programme documents, formal outcomes and leadership details can be expanded as Makeon confirms them.
          </small>
        </div>
      </footer>

      {/* Mobile Sticky Quick Action Bar */}
      <div className="v2-mobile-bar" aria-label="Mobile quick actions">
        <a className="v2-mobile-call" href="tel:+919840053359">
          📞 Call +91 98400 53359
        </a>
        <a className="v2-mobile-enquire" href="#enquire">
          ⚡ Enquire Now
        </a>
      </div>
    </div>
  );
}
