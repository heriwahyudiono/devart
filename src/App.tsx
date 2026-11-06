import { useState } from "react"

const A = "/assets"

const services = [
  {
    icon: "dd15e.svg",
    title: "Mobile Developer",
    copy: "We develop mobile apps that are intuitive, responsive, and designed to provide an optimal user experience across a variety of needs.",
  },
  {
    icon: "dab73.svg",
    title: "UI/UX Design",
    copy: "We design user interfaces and user experiences through a structured process, from research and wireframing to prototypes ready to be developed into digital products.",
  },
  {
    icon: "313b6.svg",
    title: "Website Developer",
    copy: "We build responsive, fast, secure websites tailored to your business needs, ranging from company profile websites to complex web applications.",
  },
]

const process = [
  ["61979.svg", "Analyze", "Needs analysis and problem identification."],
  [
    "2f439.svg",
    "Engineer",
    "Designing architecture and building technology solutions.",
  ],
  ["e98fa.svg", "Optimize", "Testing, evaluating, and optimizing results."],
]

const projects = [
  {
    number: "01",
    title: "WEBSITE DEVELOPMENT",
    image: "daac7.png",
    copy: "We build modern and functional websites tailored to your business goals, helping you establish a strong digital presence and connect with your audience.",
  },
  {
    number: "02",
    title: "MOBILE DEVELOPMENT",
    image: "e30b4.png",
    copy: "We create user-friendly mobile applications that simplify everyday tasks and deliver seamless digital experiences across mobile devices.",
  },
  {
    number: "03",
    title: "UI-UX DESIGN",
    image: "eae02.png",
    copy: "We design intuitive and visually engaging digital interfaces that balance aesthetics with usability, creating meaningful experiences for every user.",
  },
  {
    number: "04",
    title: "GRAPHIC DESIGN",
    image: "7872e.png",
    copy: "We create compelling visuals that communicate your brand identity, capture attention, and maintain a consistent look across different platforms.",
  },
]

const markers = [
  ["52%", "27%"],
  ["62%", "48%"],
  ["68%", "43%"],
  ["75%", "31%"],
  ["54%", "78%"],
  ["18%", "27%"],
  ["31%", "71%"],
  ["88%", "88%"],
]

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

function ActionButton({
  children,
  variant = "outline",
  onClick,
}: {
  children: React.ReactNode
  variant?: "outline" | "white" | "light"
  onClick: () => void
}) {
  return (
    <button className={`action-button ${variant}`} onClick={onClick}>
      <span>{children}</span>
      <img
        src={`${A}/${
          variant === "light"
            ? "f9628.svg"
            : variant === "white"
              ? "68f0c.svg"
              : "69efd.svg"
        }`}
        alt=""
      />
    </button>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [language, setLanguage] = useState("Select Language")

  const go = (id: string) => {
    setMenuOpen(false)
    scrollToSection(id)
  }

  return (
    <main>
      <section className="hero" id="home">
        <header className="nav-shell">
          <button
            className="logo-button"
            onClick={() => go("home")}
            aria-label="Go to home"
          >
            <img src={`${A}/870e1.png`} alt="DevArt" />
          </button>
          <nav
            className={menuOpen ? "nav-links open" : "nav-links"}
            aria-label="Main navigation"
          >
            <button onClick={() => go("home")}>Home</button>
            <button onClick={() => go("services")} className="service-link">
              Services <img src={`${A}/43822.svg`} alt="" />
            </button>
            <button onClick={() => go("about")}>About</button>
            <button onClick={() => go("portfolio")}>Portfolio</button>
            <button onClick={() => go("contact")}>Contact Us</button>
          </nav>
          <label className="language">
            <span className="sr-only">Language</span>
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
            >
              <option>Select Language</option>
              <option>English</option>
              <option>Bahasa Indonesia</option>
            </select>
            <img src={`${A}/74397.svg`} alt="" />
          </label>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
          </button>
        </header>

        <div className="hero-art hero-art-left">
          <img src={`${A}/8eb78.png`} alt="" />
        </div>
        <div className="hero-art hero-art-right">
          <img src={`${A}/8eb78.png`} alt="" />
        </div>
        <div className="hero-content">
          <div className="studio-pill">
            <img src={`${A}/e6237.svg`} alt="" />
            DIGITAL CREATIVE STUDIO
          </div>
          <h1>Turning Ideas Into Digital Experiences.</h1>
          <h2>With the Best Creative Partners</h2>
          <p>
            We design intuitive experiences and build reliable digital solutions
            that help your business move forward.
          </p>
          <div className="hero-actions">
            <ActionButton onClick={() => go("contact")}>
              Let’s Connect
            </ActionButton>
            <ActionButton variant="white" onClick={() => go("portfolio")}>
              Portfolio
            </ActionButton>
          </div>
        </div>
      </section>

      <section className="about section-wrap" id="about">
        <div className="about-collage">
          <img
            className="about-photo one"
            src={`${A}/1327a.png`}
            alt="Creative team collaborating at a table"
          />
          <img
            className="about-photo two"
            src={`${A}/bada2.png`}
            alt="Team members joining hands"
          />
          <div className="commitment-card">
            <div className="commitment-top">
              <strong>100%</strong>
              <img src={`${A}/b6315.svg`} alt="" />
            </div>
            <p>
              We are committed to delivering digital solutions with a focus on
              user needs, design quality, and functionality
            </p>
            <span />
          </div>
        </div>
        <div className="about-copy">
          <p className="eyebrow">A BIT</p>
          <h2>ABOUT US</h2>
          <p>
            DevArt Creative Studio is a digital partner specializing in website
            development, mobile app development, and UI/UX design. We combine
            creativity, technology, and an understanding of user needs to create
            digital solutions that are functional, intuitive, and relevant.
          </p>
          <p>
            We believe that every idea has the potential to grow into something
            impactful. Through a collaborative process and a client-centric
            approach, we help turn ideas into digital products that deliver real
            value.
          </p>
          <button className="explore-button" onClick={() => go("services")}>
            <img src={`${A}/f44f7.svg`} alt="" />
            <span>Explore More</span>
          </button>
        </div>
      </section>

      <section className="services section-wrap" id="services">
        <h2 className="section-title">Our Services</h2>
        <div className="service-grid">
          {services.map((service) => (
            <article key={service.title}>
              <img src={`${A}/${service.icon}`} alt="" />
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section section-wrap">
        <div className="process-tiles" aria-label="Our four step process">
          {[
            ["Discovery", "01"],
            ["Planning", "02"],
            ["Development", "03"],
            ["Launching", "04"],
          ].map(([label, number], index) => (
            <div
              className={index === 1 || index === 2 ? "pink" : ""}
              key={label}
            >
              <span>{label}</span>
              <strong>{number}</strong>
            </div>
          ))}
        </div>
        <div className="process-copy">
          <h2>
            How
            <br />
            We Work?
          </h2>
          <p className="process-kicker">OUR PROCESS, YOUR PROGRESS</p>
          <div className="process-list">
            {process.map(([icon, title, copy]) => (
              <div className="process-item" key={title}>
                <img src={`${A}/${icon}`} alt="" />
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <div className="section-wrap">
          <div className="portfolio-heading">
            <p>Featured Work</p>
            <h2>A Closer Look at What We Create</h2>
            <span>
              Explore our creative approach to building digital products and
              experiences.
            </span>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-copy">
                  <h3>
                    {project.number}/{project.title}
                  </h3>
                  <p>{project.copy}</p>
                  <h4>What’s included?</h4>
                  <ul>
                    {[
                      "Domain Included",
                      "UI/UX Design",
                      "Up to 3 revisions",
                      "1-Year Website Maintenance",
                    ].map((item) => (
                      <li key={item}>
                        <img src={`${A}/00a6a.svg`} alt="" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <img
                  className="project-image"
                  src={`${A}/${project.image}`}
                  alt={`${project.title.toLowerCase()} project`}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="global section-wrap">
        <div className="global-heading">
          <h2>We’re here for you</h2>
          <h3>no matter where you are</h3>
        </div>
        <div className="map-wrap">
          <img src={`${A}/dd81b.svg`} alt="World map" />
          {markers.map(([left, top], index) => (
            <span className="map-marker" style={{ left, top }} key={index}>
              <i />
            </span>
          ))}
        </div>
        <div className="contact-methods">
          <article>
            <div>
              <img src={`${A}/f92c6.svg`} alt="" />
              <h3>Online discussion</h3>
            </div>
            <p>Project Coordination and Consultation Virtually.</p>
          </article>
          <article>
            <div>
              <img src={`${A}/01641.svg`} alt="" />
              <h3>Targeted communication</h3>
            </div>
            <p>Exchange of information and feedback throughout the project.</p>
          </article>
        </div>
      </section>

      <section className="cta" id="contact">
        <div className="cta-copy">
          <div className="studio-pill">
            <img src={`${A}/e6237.svg`} alt="" />
            DIGITAL CREATIVE STUDIO
          </div>
          <h2>Let’s Turn Your Vision Into Reality.</h2>
          <p>
            From creative design to powerful development, we’re here to bring
            your next big idea to life.
          </p>
          <ActionButton
            variant="light"
            onClick={() =>
              (window.location.href = "mailto:devartcreativestudio@gmail.com")
            }
          >
            Let’s Connect
          </ActionButton>
        </div>
        <div className="cta-art">
          <img src={`${A}/8eb78.png`} alt="" />
        </div>
      </section>

      <footer>
        <div className="footer-content section-wrap">
          <div className="footer-brand">
            <img className="footer-logo" src={`${A}/870e1.png`} alt="DevArt" />
            <div>
              {["5ab9f.svg", "8a747.svg", "30e15.svg", "26e86.svg"].map(
                (icon) => (
                  <a href="#contact" key={icon} aria-label="Social link">
                    <img src={`${A}/${icon}`} alt="" />
                  </a>
                ),
              )}
            </div>
          </div>
          <div className="footer-links">
            <div>
              <h3>Services</h3>
              <a href="#services">Mobile Developer</a>
              <a href="#services">Website Developer</a>
              <a href="#services">UI/UX Design</a>
              <a href="#services">Graphic Design</a>
            </div>
            <div>
              <h3>Resources</h3>
              <a href="#home">Academy</a>
              <a href="#home">Blog</a>
              <a href="#home">Themes</a>
              <a href="#home">Hosting</a>
              <a href="#contact">Support</a>
            </div>
            <div>
              <h3>Navigation</h3>
              <a href="#about">About Us</a>
              <a href="#services">Services</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#contact">Contact Us</a>
            </div>
          </div>
          <a className="email-box" href="mailto:devartcreativestudio@gmail.com">
            <strong>Hubungi Kami</strong>
            <span>devartcreativestudio@gmail.com</span>
          </a>
        </div>
        <div className="footer-waves" aria-hidden="true">
          <img src={`${A}/e42c7.svg`} alt="" />
          <img src={`${A}/0c2b5.svg`} alt="" />
          <img src={`${A}/a8b95.svg`} alt="" />
        </div>
        <p className="copyright">© 2026 DEVART. All rights reserved.</p>
      </footer>
    </main>
  )
}
