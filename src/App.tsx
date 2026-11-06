import { FormEvent, useState } from "react"

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

const footerServices = [
  "Website Development",
  "UI/UX Design",
  "Mobile Development",
  "Graphic Design",
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
  const [languageOpen, setLanguageOpen] = useState(false)
  const [language, setLanguage] = useState("Select Language")
  const [selectedService, setSelectedService] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const go = (id: string) => {
    setMenuOpen(false)
    scrollToSection(id)
  }

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      <section className="hero" id="home">
        <header className="site-header">
          <button
            className="logo-button"
            onClick={() => go("home")}
            aria-label="Go to home"
          >
            <img src={`${A}/870e1.png`} alt="DevArt" />
          </button>

          <nav
            className={menuOpen ? "main-nav nav-open" : "main-nav"}
            aria-label="Primary navigation"
          >
            <button onClick={() => go("home")}>Home</button>
            <button
              onClick={() => {
                setMenuOpen(false)
                window.location.href = "/services"
              }}
            >
              Services
            </button>
            <button onClick={() => go("about")}>About</button>
            <button onClick={() => go("portfolio")}>Portfolio</button>
            <button onClick={() => go("contact")}>Contact Us</button>
          </nav>

          <div className="language-wrap">
            <button
              className="language-button"
              onClick={() => setLanguageOpen((open) => !open)}
              aria-expanded={languageOpen}
            >
              <span>{language}</span>
              <img
                className={languageOpen ? "language-arrow open" : "language-arrow"}
                src={`${A}/74397.svg`}
                alt=""
              />
            </button>
            {languageOpen && (
              <div className="language-menu">
                {["English", "Bahasa Indonesia"].map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setLanguage(option)
                      setLanguageOpen(false)
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            className="menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            <span />
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

      <div className="services-footer">
        <section className="section-shell contact" id="contact">
          <div className="contact-info">
            <div className="contact-heading">
              <span>Contact</span>
              <h2>Let’s Talk</h2>
              <p>
                Ready to bring your next project to life? Reach out and we’ll
                help you choose the right service.
              </p>
            </div>
            <address>
              <a href="mailto:hello@devart.com">
                <img src={`${A}/f4ad8.svg`} alt="" /> hello@devart.com
              </a>
              <a href="tel:+6281234567890">
                <img src={`${A}/14651.svg`} alt="" /> +62 812 3456 7890
              </a>
              <p>
                <img src={`${A}/b9e0a.svg`} alt="" /> Jakarta, Indonesia
              </p>
            </address>
            <div className="socials">
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <img src={`${A}/1d9d0.svg`} alt="" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <img src={`${A}/1c7e8.svg`} alt="" />
              </a>
              <a href="https://github.com" aria-label="GitHub">
                <img src={`${A}/e0a5d.svg`} alt="" />
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={submitForm}>
            <div className="form-row">
              <label>
                <span>Name</span>
                <input name="name" placeholder="Your name" required />
              </label>
              <label>
                <span>Email</span>
                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </label>
            </div>
            <label>
              <span>Service</span>
              <select
                name="service"
                value={selectedService}
                onChange={(event) => setSelectedService(event.target.value)}
                required
              >
                <option value="" disabled>
                  Select service
                </option>
                {footerServices.map((title) => (
                  <option key={title}>{title}</option>
                ))}
              </select>
            </label>
            <label>
              <span>Message</span>
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                required
              />
            </label>
            <div className="form-actions">
              <p className={submitted ? "success-message" : ""}>
                {submitted
                  ? "Thanks! Your message is ready for our team."
                  : "We’ll get back to you within 1–2 business days."}
              </p>
              <button className="action-button" type="submit">
                <img src={`${A}/210e5.svg`} alt="" />
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </section>

        <footer className="section-shell footer">
          <div className="footer-top">
            <div className="footer-brand">
              <img src={`${A}/870e1.png`} alt="DevArt" />
              <p>
                DevArt helps businesses build websites, apps, and digital
                experiences that convert.
              </p>
            </div>
            <div className="footer-links">
              <div>
                <strong>Services</strong>
                {footerServices.map((title) => (
                  <button key={title} onClick={() => scrollToSection("services")}>
                    {title}
                  </button>
                ))}
              </div>
              <div>
                <strong>Company</strong>
                <button onClick={() => scrollToSection("about")}>About</button>
                <button onClick={() => scrollToSection("portfolio")}>
                  Portfolio
                </button>
                <button onClick={() => scrollToSection("contact")}>
                  Contact Us
                </button>
              </div>
              <div>
                <strong>Follow</strong>
                <a href="https://linkedin.com">LinkedIn</a>
                <a href="https://instagram.com">Instagram</a>
                <a href="https://github.com">GitHub</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 DevArt. All rights reserved.</p>
            <div>
              <button>Privacy Policy</button>
              <button>Terms of Service</button>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
