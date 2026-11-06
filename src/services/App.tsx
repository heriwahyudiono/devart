import { FormEvent, useState } from "react";

const assets = "/assets";

const services = [
  {
    id: "website",
    title: "Website Development",
    tagline: "Your Business Deserves a Better Website.",
    description:
      "We create modern, responsive, and functional websites tailored to your business needs. From company profiles to custom web applications, we help bring your ideas online and turn visitors into potential customers.",
    button: "Order Website",
    image: `${assets}/80d36.png`,
    icon: `${assets}/17925.svg`,
    cardDescription: "Building responsive and high-performing websites.",
    imageClass: "service-image website-image",
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    tagline: "Great Design Starts with Great Experiences.",
    description:
      "We design intuitive and visually engaging interfaces that put users first. From wireframes to interactive prototypes, we transform your ideas into seamless digital experiences that look great and feel even better.",
    button: "Order UI/UX",
    image: `${assets}/7fcd5.png`,
    icon: `${assets}/e7b85.svg`,
    cardDescription: "Crafting intuitive and user-friendly digital experiences.",
    imageClass: "service-image ui-image",
  },
  {
    id: "mobile",
    title: "Mobile Development",
    tagline: "Turn Your Ideas into Apps People Love.",
    description:
      "We build user-friendly mobile applications designed to make everyday tasks easier and connect your business with more people. Let's turn your app idea into a digital experience your users will love.",
    button: "Order Mobile App",
    image: `${assets}/07955.png`,
    icon: `${assets}/b73e3.svg`,
    cardDescription: "Turning ideas into seamless mobile applications.",
    imageClass: "service-image mobile-image",
  },
  {
    id: "graphic",
    title: "Graphic Design",
    tagline: "Make Your Brand Impossible to Ignore.",
    description:
      "We create eye-catching visuals that communicate your brand's personality and message. From social media content to marketing materials, we help your business stand out with creative and consistent designs.",
    button: "Order Graphic Design",
    image: `${assets}/d9518.png`,
    icon: `${assets}/20709.svg`,
    cardDescription: "Creating eye-catching visuals that bring your brand to life.",
    imageClass: "service-image graphic-image",
  },
];

const projects = [
  {
    title: "E-commerce Website",
    description: "Responsive storefront with checkout flow and product catalog.",
    image: `${assets}/80d36.png`,
    className: "project-web",
  },
  {
    title: "SaaS Dashboard",
    description: "Clean UI/UX for analytics, settings, and user onboarding.",
    image: `${assets}/7fcd5.png`,
    className: "",
  },
  {
    title: "Mobile App",
    description: "Native app design for daily habits and community features.",
    image: `${assets}/07955.png`,
    className: "project-mobile",
  },
  {
    title: "Brand Identity",
    description: "Logo, social assets, and visual guidelines for a new launch.",
    image: `${assets}/d9518.png`,
    className: "project-brand",
  },
  {
    title: "Landing Page",
    description: "Conversion-focused layout for product announcements.",
    image: `${assets}/80d36.png`,
    className: "project-web",
  },
  {
    title: "Admin Panel",
    description: "Internal tools with tables, charts, and permission management.",
    image: `${assets}/7fcd5.png`,
    className: "",
  },
];

function ActionButton({
  children,
  onClick,
  type = "button",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  return (
    <button className="action-button" type={type} onClick={onClick}>
      <img src={`${assets}/210e5.svg`} alt="" />
      <span>{children}</span>
    </button>
  );
}

export default function App() {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [language, setLanguage] = useState("Select Language");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const goHome = () => {
    window.location.href = "/";
  };

  const orderService = (title: string) => {
    setSelectedService(title);
    setSubmitted(false);
    scrollTo("contact");
  };

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <section className="hero" id="home">
        <header className="site-header">
          <button className="logo-button" onClick={goHome} aria-label="Go to home">
            <img src={`${assets}/870e1.png`} alt="DevArt" />
          </button>

          <nav
            className={menuOpen ? "main-nav nav-open" : "main-nav"}
            aria-label="Primary navigation"
          >
            <button onClick={goHome}>Home</button>
            <button onClick={() => scrollTo("services")}>Services</button>
            <button onClick={() => scrollTo("about")}>About</button>
            <button onClick={() => scrollTo("portfolio")}>Portfolio</button>
            <button onClick={() => scrollTo("contact")}>Contact Us</button>
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
                src={`${assets}/74397.svg`}
                alt=""
              />
            </button>
            {languageOpen && (
              <div className="language-menu">
                {["English", "Bahasa Indonesia"].map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setLanguage(option);
                      setLanguageOpen(false);
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

        <div className="hero-heading">
          <h1>Our Services</h1>
          <p>We Provide Perfect IT Solutions for Your Business</p>
        </div>

        <div className="service-marquee" aria-label="Our service categories">
          <div className="service-track">
            {[...services, ...services].map((service, index) => (
              <button
                key={`${service.id}-${index}`}
                className="service-card"
                onClick={() => scrollTo(service.id)}
              >
                <img src={service.icon} alt="" />
                <strong>{service.title}</strong>
                <span>{service.cardDescription}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="services" id="services">
        {services.map((service, index) => (
          <article
            className={`service-row ${index % 2 ? "reverse" : ""}`}
            id={service.id}
            key={service.id}
          >
            <div className="service-copy">
              <div>
                <h2>{service.title}</h2>
                <h3>{service.tagline}</h3>
              </div>
              <p>{service.description}</p>
              <ActionButton onClick={() => orderService(service.title)}>
                {service.button}
              </ActionButton>
            </div>
            <div className="service-art">
              <img className={service.imageClass} src={service.image} alt="" />
            </div>
          </article>
        ))}
      </section>

      <section className="section-shell portfolio" id="portfolio">
        <div className="section-heading">
          <span>Portfolio</span>
          <h2>Our Recent Works</h2>
          <p>
            A selection of projects that showcase our approach to website development, UI/UX, mobile
            apps, and graphic design.
          </p>
        </div>
        <div className="portfolio-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-image">
                <img className={project.className} src={project.image} alt="" />
              </div>
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell contact" id="contact">
        <div className="contact-info" id="about">
          <div className="contact-heading">
            <span>Contact</span>
            <h2>Let’s Talk</h2>
            <p>
              Ready to bring your next project to life? Reach out and we’ll help you choose the
              right service.
            </p>
          </div>
          <address>
            <a href="mailto:hello@devart.com">
              <img src={`${assets}/f4ad8.svg`} alt="" /> hello@devart.com
            </a>
            <a href="tel:+6281234567890">
              <img src={`${assets}/14651.svg`} alt="" /> +62 812 3456 7890
            </a>
            <p>
              <img src={`${assets}/b9e0a.svg`} alt="" /> Jakarta, Indonesia
            </p>
          </address>
          <div className="socials">
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <img src={`${assets}/1d9d0.svg`} alt="" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <img src={`${assets}/1c7e8.svg`} alt="" />
            </a>
            <a href="https://github.com" aria-label="GitHub">
              <img src={`${assets}/e0a5d.svg`} alt="" />
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
              <input name="email" type="email" placeholder="you@example.com" required />
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
              {services.map((service) => (
                <option key={service.id}>{service.title}</option>
              ))}
            </select>
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" placeholder="Tell us about your project..." required />
          </label>
          <div className="form-actions">
            <p className={submitted ? "success-message" : ""}>
              {submitted
                ? "Thanks! Your message is ready for our team."
                : "We’ll get back to you within 1–2 business days."}
            </p>
            <ActionButton type="submit">Send Message</ActionButton>
          </div>
        </form>
      </section>

      <footer className="section-shell footer">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={`${assets}/870e1.png`} alt="DevArt" />
            <p>
              DevArt helps businesses build websites, apps, and digital experiences that convert.
            </p>
          </div>
          <div className="footer-links">
            <div>
              <strong>Services</strong>
              {services.map((service) => (
                <button key={service.id} onClick={() => scrollTo(service.id)}>
                  {service.title}
                </button>
              ))}
            </div>
            <div>
              <strong>Company</strong>
              <button onClick={() => scrollTo("about")}>About</button>
              <button onClick={() => scrollTo("portfolio")}>Portfolio</button>
              <button onClick={() => scrollTo("contact")}>Contact Us</button>
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
    </main>
  );
}
