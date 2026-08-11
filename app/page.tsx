"use client";

import { useState } from "react";

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
    name: "Foundation Studio",
    range: "Ages 5–7",
    promise: "A playful but disciplined introduction to patterns, structures, balance, measurement, materials and cause-and-effect thinking.",
    learners: "Children who are beginning to notice how the physical world works.",
    modules: ["Build-and-name vocabulary", "Shape, balance and measurement", "Observation journals", "Explain-back circles"],
    evidence: "Learners create simple models and explain what changed when they adjusted material, shape, size or force.",
  },
  {
    level: "02",
    name: "Builder Programme",
    range: "Grades 6–8",
    promise: "Curriculum-connected building challenges that make mathematics and science visible through real-world tasks.",
    learners: "Students who need to move from memorising concepts to using them with confidence.",
    modules: ["Mechanisms and motion", "Structures and loads", "Electricity and control", "Measurement-led improvement"],
    evidence: "Learners submit a build record showing concept, design choice, test result, failure point and improvement.",
  },
  {
    level: "03",
    name: "Applied Engineering Studio",
    range: "Grades 9–12",
    promise: "Longer design briefs where students practise systems thinking, documentation, iteration and technical communication.",
    learners: "Older learners preparing for serious academic, technical and entrepreneurial pathways.",
    modules: ["Design briefs", "Prototype cycles", "Systems and constraints", "Portfolio presentation"],
    evidence: "Learners present a documented prototype and defend the decisions behind it using evidence.",
  },
  {
    level: "04",
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

const partners = ["innointel", "Maker Nest"];

function LogoMark() {
  return (
    <span className="logo-mark" aria-hidden="true">
      <svg viewBox="0 0 120 120" focusable="false">
        <path
          className="mark-primary"
          d="M12 14h27l21 23 21-23h27v92H84V50L60 74 36 50v56H12V14Z"
        />
        <path className="mark-cut" d="M39 14h42L60 37 39 14Z" />
        <rect className="mark-accent" x="48" y="80" width="24" height="24" />
      </svg>
    </span>
  );
}

function PortfolioVisual() {
  return (
    <div className="portfolio-visual" aria-label="Learner portfolio and certificate mockups">
      <div className="notebook">
        <LogoMark />
        <strong>MAKEON</strong>
        <span>Builder Portfolio</span>
      </div>
      <div className="certificate">
        <LogoMark />
        <p>Certificate of Completion</p>
        <strong>Makeon Builder Programme</strong>
        <span>Concept · Build · Explain</span>
      </div>
      <div className="evidence-note">
        <span>Test 02</span>
        <strong>Bridge load improved by 38%</strong>
        <p>Changed truss angle, reduced flex, documented failure point.</p>
      </div>
    </div>
  );
}

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [audience, setAudience] = useState<"parent" | "institution">("institution");
  const [activeBeat, setActiveBeat] = useState(1);

  return (
    <main id="top">
      <div className="topline">
        <span>MAKEON</span>
        <span>BUILDER-LEARNING ECOSYSTEM</span>
        <span>THINK. MAKE. BUILD THE FUTURE.</span>
      </div>

      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="Makeon home">
          <LogoMark />
          <span>
            <strong>MAKEON</strong>
            <small>BUILDER-LEARNING ECOSYSTEM</small>
          </span>
        </a>
        <button className="menu-button" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-controls="site-nav">
          {menu ? "Close" : "Menu"}
        </button>
        <nav id="site-nav" className={menu ? "open" : ""} aria-label="Primary navigation">
          <a href="#who">Who we are</a>
          <a href="#philosophy">Philosophy</a>
          <a href="#programmes">Programmes</a>
          <a href="#pathway">Method</a>
          <a href="#institutions">Institutions</a>
          <a href="#resources">Resources</a>
          <a className="nav-action" href="#enquire">Start</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-symbol">
          <LogoMark />
        </div>
        <div className="hero-main">
          <p className="overline">Builder-learning ecosystem</p>
          <h1>MAKEON</h1>
          <p className="hero-subtitle">Think. Make. Build the future.</p>
          <div className="red-rule" />
          <p className="hero-copy">
            Makeon helps children understand math and science through hands-on building,
            real-world projects and a structured pathway from curiosity to demonstrated capability.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#programmes">Explore programmes</a>
            <a className="button secondary" href="#pathway">See the method</a>
          </div>
        </div>
        <aside className="who-card" id="who">
          <p className="section-label">Who we are</p>
          <p>
            Makeon is India’s builder-learning ecosystem. We partner with learning centres,
            schools and families to help children understand concepts through hands-on building,
            purposeful projects and future-ready skills.
          </p>
          <ul>
            <li>We build confidence.</li>
            <li>We build understanding.</li>
            <li>We build builders.</li>
          </ul>
        </aside>
      </section>

      <section className="build-loop" id="pathway" aria-label="The Makeon Build Loop">
        <div className="loop-heading">
          <div>
            <p className="section-label light">The Makeon Build Loop</p>
            <h2>Seven moves.<br />Every session.<br /><em>A builder for life.</em></h2>
          </div>
          <div className="loop-intro">
            <p>
              Every Makeon session compresses the life of a real engineering project into one repeatable rhythm: enter, find the problem, plan it, build it, fix it, show it and record it.
            </p>
            <strong>Method is not left to chance. Method is what we teach.</strong>
          </div>
        </div>

        <div className="loop-stage" aria-label="Seven stages of the Makeon Build Loop">
          {buildLoop.map((beat, index) => (
            <button
              type="button"
              key={beat.name}
              className={`${activeBeat === index ? "active" : ""} ${beat.name === "Debug" ? "debug" : ""}`}
              onClick={() => setActiveBeat(index)}
              aria-pressed={activeBeat === index}
            >
              <span>{beat.number}</span>
              <strong>{beat.name}</strong>
              <small>{beat.cue}</small>
            </button>
          ))}
        </div>

        <div className="loop-detail">
          <figure>
            <img src="/makeon-assets/student-studio-wide.png" alt="Students working together at a Makeon studio bench" />
            <figcaption>There is no front of the room. The mentor holds the rhythm; the learner does the engineering.</figcaption>
          </figure>
          <article className={buildLoop[activeBeat].name === "Debug" ? "is-debug" : ""}>
            <div className="beat-index">{buildLoop[activeBeat].number}</div>
            <p className="beat-cue">{buildLoop[activeBeat].cue}</p>
            <h3>{buildLoop[activeBeat].name}</h3>
            <div className="role-copy">
              <div>
                <span>The learner</span>
                <p>{buildLoop[activeBeat].child}</p>
              </div>
              <div>
                <span>The mentor</span>
                <p>{buildLoop[activeBeat].mentor}</p>
              </div>
            </div>
          </article>
        </div>

        <div className="loop-signature">
          <span>Nothing demonstrated.</span>
          <strong>Everything built.</strong>
        </div>
      </section>

      <section className="editorial" id="why">
        <p className="section-label">The educational case</p>
        <h2>Capability grows when knowledge is used.</h2>
        <div className="editorial-columns">
          <p>
            In many classrooms, mathematics and science remain abstract for too long. Students may remember definitions, formulae and diagrams, yet struggle to see how those ideas behave in the physical world. Makeon closes that gap by placing concepts inside purposeful building experiences.
          </p>
          <p>
            The goal is not activity for its own sake. Every Makeon session is designed around a clear concept, a buildable challenge, a visible constraint, a testable outcome and a learner explanation. The hands work, but the thinking is always the centre.
          </p>
          <p>
            This is why the Makeon experience feels different from a hobby class. It is structured, cumulative and evidence-led. Learners do not simply complete a project; they learn to notice, plan, test, improve and explain.
          </p>
        </div>
      </section>

      <section className="philosophy-panel" id="philosophy">
        <div className="philosophy-word">Build</div>
        <div>
          <p className="section-label">Makeon philosophy</p>
          <h2>Build with AI and emerging technologies.</h2>
          <p>
            The philosophy of Makeon is “Build” with AI and emerging technologies.
            Technology in STEM becomes meaningful when learners use it to think,
            make, test, improve and explain what they have created.
          </p>
        </div>
      </section>

      <section className="values-strip" aria-label="Makeon values">
        <p className="section-label light">Our values</p>
        <div className="values-grid">
          {values.map((value) => (
            <article key={value[0]}>
              <h3>{value[0]}</h3>
              <p>{value[1]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="programmes" id="programmes">
        <div className="section-title wide">
          <p className="section-label">Programmes</p>
          <h2>A coherent progression, not a collection of kits.</h2>
          <p>
            Makeon is organised as a learning pathway. Each stage increases conceptual depth,
            independence, documentation quality and the learner’s ability to explain what they built.
          </p>
        </div>
        <div className="programme-stack">
          {programmes.map((programme) => (
            <article key={programme.name} className="programme-card">
              <div className="programme-number">{programme.level}</div>
              <div>
                <p className="programme-range">{programme.range}</p>
                <h3>{programme.name}</h3>
                <p className="programme-promise">{programme.promise}</p>
              </div>
              <div className="programme-detail">
                <h4>Best for</h4>
                <p>{programme.learners}</p>
              </div>
              <div className="programme-detail">
                <h4>Core modules</h4>
                <ul>
                  {programme.modules.map((module) => <li key={module}>{module}</li>)}
                </ul>
              </div>
              <div className="programme-evidence">
                <h4>Evidence of learning</h4>
                <p>{programme.evidence}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="learning-space">
        <figure className="student-photo-panel">
          <img src="/makeon-assets/student-bridge-studio.png" alt="Students and a facilitator testing a handmade bridge prototype in a Makeon-style studio" />
          <figcaption>A focused build table: learners test, measure, document and improve a real prototype.</figcaption>
        </figure>
        <div className="space-copy">
          <p className="section-label">The learning space</p>
          <h2>A serious place for children to become capable.</h2>
          <p>
            The Makeon environment should feel calm, focused and aspirational. It is not a noisy toy room or a decorative STEM corner. It is a studio where learners handle materials, ask precise questions and take pride in making something work.
          </p>
          <ul>
            <li>Project tables for collaborative building</li>
            <li>Material and tool zones organised by module</li>
            <li>Display surfaces for sketches, vocabulary and evidence</li>
            <li>Portfolio rituals that make progress visible to learners and parents</li>
          </ul>
        </div>
      </section>

      <section className="institutions" id="institutions">
        <div className="section-title">
          <p className="section-label">For institutions</p>
          <h2>Adopt a learning system, not a one-day activity.</h2>
        </div>
        <div className="institution-grid">
          <article>
            <h3>For schools</h3>
            <p>Makeon can support science, mathematics and innovation goals through structured studio sessions, club formats, portfolio projects or enrichment blocks.</p>
          </article>
          <article>
            <h3>For learning centres</h3>
            <p>Makeon gives centres a premium academic programme with repeatable modules, clear parent communication and visible learner outcomes.</p>
          </article>
          <article>
            <h3>For families</h3>
            <p>Makeon gives children a meaningful alternative to passive screen time by helping them build, test, explain and grow confidence.</p>
          </article>
        </div>
        <div className="adoption-table" aria-label="Adoption journey">
          {adoption.map((step, index) => (
            <div key={step[0]}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step[0]}</h3>
              <p>{step[1]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="evidence">
        <div className="evidence-copy">
          <p className="section-label">Evidence & assessment</p>
          <h2>Progress should be visible without reducing learning to marks alone.</h2>
          <p>
            Makeon treats every build as a record of thinking. Learners document choices, tests and improvements so parents and institutions can see confidence becoming capability.
          </p>
        </div>
        <div className="evidence-layout">
          <div className="evidence-visual-stack">
            <figure className="mentor-photo-card">
              <img src="/makeon-assets/student-mentor-evidence.png" alt="Students and a mentor reviewing sketches, measurements and prototype evidence" />
              <figcaption>Documentation turns a build into evidence of understanding.</figcaption>
            </figure>
            <PortfolioVisual />
          </div>
          <div className="evidence-panel">
            <span>How evidence is built</span>
            <div className="evidence-grid">
              <article>
                <h3>Build records</h3>
                <p>Learners record what they attempted, what they changed and what they discovered.</p>
              </article>
              <article>
                <h3>Concept maps</h3>
                <p>Key mathematics and science ideas are named and connected to the project.</p>
              </article>
              <article>
                <h3>Prototype evidence</h3>
                <p>Models, measurements, photos and test notes show whether the idea worked.</p>
              </article>
              <article>
                <h3>Explanation</h3>
                <p>Learners practise speaking and writing about decisions, constraints and next steps.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="partners" id="partners">
        <p>Powered by our <strong>ecosystem partners</strong></p>
        <div>
          {partners.map((partner) => <span key={partner}>{partner}</span>)}
        </div>
      </section>

      <section className="resources" id="resources">
        <div className="section-title wide">
          <p className="section-label">Publications & resources</p>
          <h2>The thinking behind the practice.</h2>
          <p>
            The library below is structured as a serious institutional resource centre. Final PDFs can be attached when the documents are approved.
          </p>
        </div>
        <div className="resource-grid">
          {publications.map((resource) => (
            <article key={resource[1]}>
              <span>{resource[0]}</span>
              <h3>{resource[1]}</h3>
              <p>{resource[2]}</p>
              <a href="#enquire">Request document</a>
            </article>
          ))}
        </div>
      </section>

      <section className="faq">
        <div>
          <p className="section-label">Questions leaders ask</p>
          <h2>Clear answers before adoption.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <article key={faq[0]}>
              <h3>{faq[0]}</h3>
              <p>{faq[1]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="enquire" id="enquire">
        <div>
          <p className="section-label light">Readiness assessment</p>
          <h2>Choose the right conversation.</h2>
          <p>
            Makeon now separates parent enquiries from school and centre conversations, so each visitor sees a more relevant next step.
          </p>
          <div className="conversion-cards" role="tablist" aria-label="Choose enquiry type">
            <button
              type="button"
              className={audience === "parent" ? "active" : ""}
              onClick={() => setAudience("parent")}
              aria-pressed={audience === "parent"}
            >
              <span>I’m a parent</span>
              <small>Find the right builder pathway for my child.</small>
            </button>
            <button
              type="button"
              className={audience === "institution" ? "active" : ""}
              onClick={() => setAudience("institution")}
              aria-pressed={audience === "institution"}
            >
              <span>I represent a school or centre</span>
              <small>Explore Makeon as a structured programme.</small>
            </button>
          </div>
        </div>
        {submitted ? (
          <div className="thanks" role="status">
            <span>✓</span>
            <h3>Thank you.</h3>
            <p>{audience === "parent" ? "Your parent enquiry has been recorded for this demonstration." : "Your institution enquiry has been recorded for this demonstration."} A live form destination can be connected before public launch.</p>
          </div>
        ) : (
          <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
            <label>Name<input required name="name" /></label>
            {audience === "institution" ? (
              <label>School / centre name<input required name="institution" /></label>
            ) : (
              <label>Child’s age / grade<input required name="child-age" /></label>
            )}
            <label>Email or phone<input required name="contact" /></label>
            <label>City<input name="city" /></label>
            {audience === "institution" ? (
              <>
                <label>Institution type
                  <select name="type">
                    <option>School</option>
                    <option>Learning centre</option>
                    <option>Community organisation</option>
                    <option>Partnership</option>
                  </select>
                </label>
                <label>Primary learner group
                  <select name="age">
                    <option>Ages 5–7</option>
                    <option>Grades 6–8</option>
                    <option>Grades 9–12</option>
                    <option>Mixed age groups</option>
                  </select>
                </label>
              </>
            ) : (
              <>
                <label>Current interest
                  <select name="parent-interest">
                    <option>Math and science confidence</option>
                    <option>Hands-on building</option>
                    <option>Future-ready skills</option>
                    <option>Weekend / after-school programme</option>
                  </select>
                </label>
                <label>Preferred conversation
                  <select name="parent-contact">
                    <option>Call me</option>
                    <option>Send programme details</option>
                    <option>Invite us to an orientation</option>
                  </select>
                </label>
              </>
            )}
            <label className="full">{audience === "institution" ? "What should Makeon help your institution build?" : "What would you like Makeon to help your child develop?"}
              <textarea name="message" rows={4} />
            </label>
            <button className="button inverse" type="submit">{audience === "institution" ? "Submit institution enquiry" : "Submit parent enquiry"}</button>
          </form>
        )}
      </section>

      <footer>
        <div>
          <a className="brand-lockup footer-brand" href="#top" aria-label="Makeon home">
            <LogoMark />
            <span>
              <strong>MAKEON</strong>
              <small>BUILDER-LEARNING ECOSYSTEM</small>
            </span>
          </a>
          <p>We build Builder Ecosystems that empower learners, strengthen institutions and transform communities.</p>
          <strong className="footer-line">Building the next generation of builders.</strong>
        </div>
        <nav aria-label="Footer navigation">
          <h3>Quick links</h3>
          <a href="#who">The Ecosystem</a>
          <a href="#philosophy">Philosophy</a>
          <a href="#pathway">Build Loop</a>
          <a href="#institutions">For Institutions</a>
          <a href="#partners">Ecosystem Partners</a>
          <a href="#programmes">Programmes</a>
        </nav>
        <address>
          <h3>Contact</h3>
          <p>
            Rtn Prasanth Deenadayal<br />
            330 Thambu Chetty Street,<br />
            Pandu Kita Plaza, 2nd Floor,<br />
            Chennai, Tamil Nadu 600001
          </p>
          <a href="tel:+91984005339">+91 98400 5339</a>
          <a href="mailto:prasanth@makeon.build">prasanth@makeon.build</a>
        </address>
        <small>
          © 2026 Makeon Learning Ecosystem. Programme documents, formal outcomes and leadership details can be expanded as Makeon confirms them.
        </small>
      </footer>
    </main>
  );
}
