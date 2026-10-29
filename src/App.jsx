import { useState } from "react";
import "./App.css";

const translations = {
  en: {
    tagline: "REAL ESTATE • PROPERTY • INVESTMENT",
    nav: ["Home", "Properties", "Our Services", "About Us", "Contact"],
    language: "ລາວ",
    eyebrow: "A BETTER PERSPECTIVE ON PROPERTY",
    heroTitle: "Find a place to",
    heroAccent: "belong.",
    heroText:
      "Thoughtfully considered property opportunities for living, working and investing across Laos.",
    explore: "Explore properties",
    contact: "Speak to our team",
    searchTitle: "Find your next property",
    searchText: "Refine your search to match your requirements.",
    purpose: "I'm looking to",
    buy: "Buy",
    rent: "Rent",
    propertyType: "Property type",
    allTypes: "All property types",
    residential: "Residential",
    commercial: "Commercial",
    land: "Land",
    location: "Location",
    allLocations: "All Laos",
    search: "Search properties",
    searchNotice:
      "Your search preferences have been selected. Contact our team for current property availability.",
    introLabel: "THE NILAXAI APPROACH",
    introTitle: "Property decisions deserve a considered approach.",
    introText:
      "From residential opportunities to commercial spaces, we aim to make property enquiries clearer, more informed and more personal.",
    learnMore: "Discover our approach",
    portfolioLabel: "EXPLORE PROPERTY",
    portfolioTitle: "Opportunities worth exploring.",
    portfolioText:
      "Discover the property categories relevant to your next move. Specific listings will be published as company details are confirmed.",
    homes: "Residential property",
    homesText: "Homes and living spaces for different stages of life.",
    business: "Commercial property",
    businessText: "Spaces for businesses, enterprises and professional use.",
    landTitle: "Land opportunities",
    landText:
      "Explore land enquiries for potential development and acquisition.",
    enquire: "Make an enquiry",
    servicesLabel: "HOW WE CAN HELP",
    servicesTitle: "Property expertise, centred on your goals.",
    service1: "Property sales & acquisition",
    service1Text:
      "Guidance for buyers and those exploring property opportunities.",
    service2: "Leasing & rentals",
    service2Text: "Support with residential and commercial leasing enquiries.",
    service3: "Property management",
    service3Text:
      "Discuss property oversight and ongoing management requirements.",
    service4: "Investment consultancy",
    service4Text:
      "Explore property opportunities with your objectives in mind.",
    service5: "Development & land",
    service5Text:
      "Enquiries relating to development, land and project opportunities.",
    service6: "Commercial real estate",
    service6Text: "Property enquiries for businesses and commercial occupiers.",
    aboutLabel: "ABOUT NILAXAI",
    aboutTitle: "Rooted in Laos. Focused on property opportunities.",
    aboutText:
      "Nilaxai Group welcomes enquiries from property buyers, business owners and investors seeking to understand opportunities in Laos. Our priority is to provide a clear starting point for every conversation.",
    aboutButton: "Get in touch",
    ctaTitle: "Have a property requirement in mind?",
    ctaText:
      "Tell us what you are looking for. Our team welcomes enquiries about residential and commercial property across Laos.",
    ctaButton: "Contact Nilaxai",
    contactLabel: "LET'S START A CONVERSATION",
    contactTitle: "Your next property enquiry starts here.",
    phone: "Call our team",
    email: "Email our team",
    locationLabel: "Our location",
    country: "Vientiane, Laos",
    footerText: "Property enquiries. Clear conversations. Thoughtful service.",
    quickLinks: "Explore",
    servicesFooter: "Services",
    contactFooter: "Contact",
    rights: "All rights reserved.",
    illustrative: "Illustrative architectural photography",
    selectLocation: "Select a location",
    vientiane: "Vientiane",
    nationwide: "Other locations across Laos",
    searchResult: "Search preferences",
    groupOfCompanies: "GROUP OF COMPANIES",
  },
  lo: {
    tagline: "អចលនទ្រព្យ • អចលនវត្ថុ • ការវិនិយោគ",
    nav: ["ទំព័រដើម", "អចលនទ្រព្យ", "សេវាកម្ម", "អំពីយើង", "ទំនាក់ទំនង"],
    language: "English",
    eyebrow: "ទស្សនៈថ្មីអំពីអចលនទ្រព្យ",
    heroTitle: "ស្វែងរកកន្លែងដែល",
    heroAccent: "ស័ក្តិសមនឹងអ្នក។",
    heroText:
      "ស្វែងយល់ពីឱកាសអចលនទ្រព្យសម្រាប់ការរស់នៅ ការប្រកបអាជីវកម្ម និងការវិនិយោគនៅទូទាំងប្រទេសឡាវ។",
    explore: "ស្វែងរកអចលនទ្រព្យ",
    contact: "ទាក់ទងក្រុមការងារ",
    searchTitle: "ស្វែងរកអចលនទ្រព្យ",
    searchText: "ជ្រើសរើសលក្ខខណ្ឌដែលសមស្របនឹងតម្រូវការរបស់អ្នក។",
    purpose: "ខ្ញុំចង់",
    buy: "ទិញ",
    rent: "ជួល",
    propertyType: "ប្រភេទអចលនទ្រព្យ",
    allTypes: "គ្រប់ប្រភេទ",
    residential: "លំនៅឋាន",
    commercial: "ពាណិជ្ជកម្ម",
    land: "ដី",
    location: "ទីតាំង",
    allLocations: "ទូទាំងប្រទេសឡាវ",
    search: "ស្វែងរកអចលនទ្រព្យ",
    searchNotice:
      "លក្ខខណ្ឌស្វែងរករបស់អ្នកត្រូវបានជ្រើសរើសហើយ។ សូមទាក់ទងក្រុមការងារដើម្បីសាកសួរអំពីអចលនទ្រព្យដែលមាននៅពេលបច្ចុប្បន្ន។",
    introLabel: "ទស្សនៈរបស់ NILAXAI",
    introTitle: "ការសម្រេចចិត្តលើអចលនទ្រព្យគួរត្រូវបានពិចារណាយ៉ាងម៉ត់ចត់។",
    introText:
      "ចាប់ពីលំនៅឋានរហូតដល់ទីតាំងពាណិជ្ជកម្ម យើងផ្តោតលើការធ្វើឱ្យការសាកសួរអំពីអចលនទ្រព្យកាន់តែច្បាស់លាស់ និងសមស្របតាមតម្រូវការរបស់អ្នក។",
    learnMore: "ស្វែងយល់ពីយើង",
    portfolioLabel: "ស្វែងយល់ពីអចលនទ្រព្យ",
    portfolioTitle: "ឱកាសដែលគួរឱ្យស្វែងយល់។",
    portfolioText:
      "ស្វែងយល់ពីប្រភេទអចលនទ្រព្យដែលសមស្របនឹងតម្រូវការរបស់អ្នក។ ព័ត៌មានអចលនទ្រព្យជាក់លាក់នឹងត្រូវបង្ហាញនៅពេលទិន្នន័យរបស់ក្រុមហ៊ុនត្រូវបានបញ្ជាក់។",
    homes: "អចលនទ្រព្យលំនៅឋាន",
    homesText: "ផ្ទះ និងទីកន្លែងរស់នៅសម្រាប់តម្រូវការផ្សេងៗ។",
    business: "អចលនទ្រព្យពាណិជ្ជកម្ម",
    businessText: "ទីតាំងសម្រាប់អាជីវកម្ម និងសកម្មភាពវិជ្ជាជីវៈ។",
    landTitle: "ឱកាសទាក់ទងនឹងដី",
    landText: "សាកសួរអំពីដីសម្រាប់ការអភិវឌ្ឍ និងការទិញយក។",
    enquire: "សាកសួរព័ត៌មាន",
    servicesLabel: "របៀបដែលយើងអាចជួយបាន",
    servicesTitle: "ជំនាញអចលនទ្រព្យដែលផ្តោតលើគោលដៅរបស់អ្នក។",
    service1: "ការលក់ និងការទិញអចលនទ្រព្យ",
    service1Text:
      "ការណែនាំសម្រាប់អ្នកទិញ និងអ្នកដែលកំពុងស្វែងរកឱកាសអចលនទ្រព្យ។",
    service2: "ការជួលអចលនទ្រព្យ",
    service2Text:
      "ការគាំទ្រសម្រាប់ការសាកសួរអំពីការជួលលំនៅឋាន និងទីតាំងពាណិជ្ជកម្ម។",
    service3: "ការគ្រប់គ្រងអចលនទ្រព្យ",
    service3Text:
      "ពិភាក្សាអំពីការត្រួតពិនិត្យ និងការគ្រប់គ្រងអចលនទ្រព្យជាបន្ត។",
    service4: "ប្រឹក្សាយោបល់អំពីការវិនិយោគ",
    service4Text: "ស្វែងយល់ពីឱកាសអចលនទ្រព្យដោយគិតគូរពីគោលដៅរបស់អ្នក។",
    service5: "ការអភិវឌ្ឍ និងដី",
    service5Text: "ការសាកសួរអំពីការអភិវឌ្ឍ ដី និងគម្រោងនានា។",
    service6: "អចលនទ្រព្យពាណិជ្ជកម្ម",
    service6Text:
      "ការសាកសួរអំពីអចលនទ្រព្យសម្រាប់អាជីវកម្ម និងអ្នកប្រើប្រាស់ទីតាំងពាណិជ្ជកម្ម។",
    aboutLabel: "អំពី NILAXAI",
    aboutTitle: "មានមូលដ្ឋាននៅប្រទេសឡាវ និងផ្តោតលើឱកាសអចលនទ្រព្យ។",
    aboutText:
      "Nilaxai Group ស្វាគមន៍ការសាកសួរពីអ្នកទិញអចលនទ្រព្យ ម្ចាស់អាជីវកម្ម និងអ្នកវិនិយោគដែលចង់ស្វែងយល់ពីឱកាសនៅប្រទេសឡាវ។ យើងផ្តោតលើការផ្តល់ព័ត៌មានច្បាស់លាស់ជាចំណុចចាប់ផ្តើមសម្រាប់ការពិភាក្សា។",
    aboutButton: "ទាក់ទងមកយើង",
    ctaTitle: "តើអ្នកមានតម្រូវការអចលនទ្រព្យមែនទេ?",
    ctaText:
      "ប្រាប់យើងអំពីអ្វីដែលអ្នកកំពុងស្វែងរក។ យើងស្វាគមន៍ការសាកសួរអំពីលំនៅឋាន និងអចលនទ្រព្យពាណិជ្ជកម្មទូទាំងប្រទេសឡាវ។",
    ctaButton: "ទាក់ទង Nilaxai",
    contactLabel: "ចាប់ផ្តើមការសន្ទនា",
    contactTitle: "ការសាកសួរអចលនទ្រព្យរបស់អ្នកចាប់ផ្តើមនៅទីនេះ។",
    phone: "ទូរស័ព្ទមកក្រុមការងារ",
    email: "ផ្ញើអ៊ីមែលមកយើង",
    locationLabel: "ទីតាំង",
    country: "វៀងចន្ទន៍ ប្រទេសឡាវ",
    footerText:
      "ការសាកសួរអចលនទ្រព្យ ការទំនាក់ទំនងច្បាស់លាស់ និងសេវាកម្មយកចិត្តទុកដាក់។",
    quickLinks: "រុករក",
    servicesFooter: "សេវាកម្ម",
    contactFooter: "ទំនាក់ទំនង",
    rights: "រក្សាសិទ្ធិគ្រប់យ៉ាង។",
    illustrative: "រូបថតស្ថាបត្យកម្មសម្រាប់ជាឧទាហរណ៍",
    selectLocation: "ជ្រើសរើសទីតាំង",
    vientiane: "វៀងចន្ទន៍",
    nationwide: "ទីតាំងផ្សេងៗទូទាំងប្រទេសឡាវ",
    searchResult: "លក្ខខណ្ឌស្វែងរក",
    groupOfCompanies: "ກຸ່ມບໍລິສັດ",
  },
};

const categories = [
  {
    key: "homes",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=85",
    number: "01",
  },
  {
    key: "business",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85",
    number: "02",
  },
  {
    key: "landTitle",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85",
    number: "03",
  },
];

const serviceKeys = [
  ["service1", "service1Text", "↗"],
  ["service2", "service2Text", "⌂"],
  ["service3", "service3Text", "▦"],
  ["service4", "service4Text", "◇"],
  ["service5", "service5Text", "⌖"],
  ["service6", "service6Text", "▤"],
];

function App() {
  const [language, setLanguage] = useState("en");
  const [purpose, setPurpose] = useState("buy");
  const [propertyType, setPropertyType] = useState("all");
  const [location, setLocation] = useState("all");
  const [notice, setNotice] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const t = translations[language];

  const switchLanguage = () => {
    setLanguage((current) => (current === "en" ? "lo" : "en"));
    document.documentElement.lang = language === "en" ? "lo" : "en";
    document.documentElement.classList.toggle(
      "lao-language",
      language === "en",
    );
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setNotice(t.searchNotice);
  };

  const navIds = ["home", "properties", "services", "about", "contact"];

  return (
    <div className={`site-shell ${language === "lo" ? "site-lao" : ""}`}>
      <div className="top-strip">
        <div className="container top-strip-inner">
          <span>{t.tagline}</span>
          <a href="mailto:james8@nilaxai.com">james8@nilaxai.com</a>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-inner">
          <a className="brand" href="#home" aria-label="Nilaxai Group home">
            <img
              className="brand-logo"
              src="/nilaxai-logo.jpg"
              alt="Nilaxai Group of Companies"
            />

            <span className="brand-copy">
              <strong>NILAXAI</strong>
              <small>{t.groupOfCompanies}</small>
            </span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <nav className={`main-nav ${menuOpen ? "nav-open" : ""}`}>
            {t.nav.map((label, index) => (
              <a
                key={navIds[index]}
                href={`#${navIds[index]}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <button
              className="language-switch"
              onClick={switchLanguage}
              type="button"
            >
              <span className="language-icon">文</span>
              {t.language}
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-image" />
          <div className="hero-overlay" />
          <div className="container hero-content">
            <div className="hero-copy">
              <div className="eyebrow light-eyebrow">
                <span />
                {t.eyebrow}
              </div>
              <h1>
                {t.heroTitle}
                <br />
                <em>{t.heroAccent}</em>
              </h1>
              <p>{t.heroText}</p>
              <div className="hero-actions">
                <a className="button button-gold" href="#properties">
                  {t.explore} <span>↗</span>
                </a>
                <a className="button button-outline" href="#contact">
                  {t.contact}
                </a>
              </div>
              <div className="hero-footnote">
                <span className="footnote-line" />
                <span>{t.country}</span>
              </div>
            </div>
            <div className="hero-side-note">
              <span>LAOS</span>
              <span className="vertical-line" />
              <span>PROPERTY &amp; INVESTMENT</span>
            </div>
          </div>
          <div className="hero-index">
            <span>01</span>
            <span />
            <span>03</span>
          </div>
        </section>

        <section className="search-section" aria-label={t.searchTitle}>
          <div className="container">
            <form className="property-search" onSubmit={handleSearch}>
              <div className="search-heading">
                <span className="section-kicker">01 / PROPERTY SEARCH</span>
                <h2>{t.searchTitle}</h2>
                <p>{t.searchText}</p>
              </div>

              <div className="search-controls">
                <div className="purpose-control">
                  <span className="field-label">{t.purpose}</span>
                  <div className="segmented-control">
                    <button
                      type="button"
                      className={purpose === "buy" ? "selected" : ""}
                      onClick={() => setPurpose("buy")}
                    >
                      {t.buy}
                    </button>
                    <button
                      type="button"
                      className={purpose === "rent" ? "selected" : ""}
                      onClick={() => setPurpose("rent")}
                    >
                      {t.rent}
                    </button>
                  </div>
                </div>

                <label className="search-field">
                  <span>{t.propertyType}</span>
                  <select
                    value={propertyType}
                    onChange={(event) => setPropertyType(event.target.value)}
                  >
                    <option value="all">{t.allTypes}</option>
                    <option value="residential">{t.residential}</option>
                    <option value="commercial">{t.commercial}</option>
                    <option value="land">{t.land}</option>
                  </select>
                </label>

                <label className="search-field">
                  <span>{t.location}</span>
                  <select
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                  >
                    <option value="all">{t.allLocations}</option>
                    <option value="vientiane">{t.vientiane}</option>
                    <option value="nationwide">{t.nationwide}</option>
                  </select>
                </label>

                <button
                  className="button button-primary search-button"
                  type="submit"
                >
                  <span className="search-symbol">⌕</span>
                  {t.search}
                </button>
              </div>
              {notice && (
                <p className="search-notice" role="status">
                  {notice}
                </p>
              )}
            </form>
          </div>
        </section>

        <section className="intro-section section-space">
          <div className="container intro-grid">
            <div className="intro-visual">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
                alt="Contemporary architectural interior"
                loading="lazy"
              />
              <div className="visual-caption">
                <span className="caption-mark">N.</span>
                <span>{t.illustrative}</span>
              </div>
              <div className="visual-number">NILAXAI / 01</div>
            </div>
            <div className="intro-copy">
              <div className="eyebrow">
                <span />
                {t.introLabel}
              </div>
              <h2>{t.introTitle}</h2>
              <p>{t.introText}</p>
              <a className="text-link" href="#about">
                {t.learnMore} <span>↗</span>
              </a>
              <div className="intro-rule" />
              <div className="intro-signature">
                <strong>NILAXAI GROUP</strong>
                <span>VIENTIANE · LAOS</span>
              </div>
            </div>
          </div>
        </section>

        <section className="portfolio-section section-space" id="properties">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow">
                  <span />
                  {t.portfolioLabel}
                </div>
                <h2>{t.portfolioTitle}</h2>
              </div>
              <p>{t.portfolioText}</p>
            </div>

            <div className="category-grid">
              {categories.map((category) => (
                <article className="category-card" key={category.key}>
                  <div className="category-image">
                    <img src={category.image} alt="" loading="lazy" />
                    <span className="category-number">{category.number}</span>
                    <span className="image-arrow">↗</span>
                  </div>
                  <div className="category-copy">
                    <h3>{t[category.key]}</h3>
                    <p>{t[`${category.key}Text`]}</p>
                    <a href="#contact" className="text-link">
                      {t.enquire} <span>↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <p className="illustrative-note">{t.illustrative}</p>
          </div>
        </section>

        <section className="services-section section-space" id="services">
          <div className="container">
            <div className="services-heading">
              <div className="eyebrow light-eyebrow">
                <span />
                {t.servicesLabel}
              </div>
              <h2>{t.servicesTitle}</h2>
            </div>
            <div className="services-grid">
              {serviceKeys.map(([title, description, icon], index) => (
                <article className="service-card" key={title}>
                  <div className="service-card-top">
                    <span className="service-icon">{icon}</span>
                    <span className="service-number">0{index + 1}</span>
                  </div>
                  <h3>{t[title]}</h3>
                  <p>{t[description]}</p>
                  <a href="#contact" aria-label={`${t[title]} — ${t.enquire}`}>
                    ↗
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section section-space" id="about">
          <div className="container about-grid">
            <div className="about-heading">
              <div className="eyebrow">
                <span />
                {t.aboutLabel}
              </div>
              <h2>{t.aboutTitle}</h2>
            </div>
            <div className="about-copy">
              <p>{t.aboutText}</p>
              <a href="#contact" className="button button-primary">
                {t.aboutButton} <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container cta-inner">
            <div>
              <div className="eyebrow light-eyebrow">
                <span />
                NILAXAI GROUP
              </div>
              <h2>{t.ctaTitle}</h2>
              <p>{t.ctaText}</p>
            </div>
            <a className="button button-gold" href="#contact">
              {t.ctaButton} <span>↗</span>
            </a>
          </div>
        </section>

        <section className="contact-section section-space" id="contact">
          <div className="container">
            <div className="eyebrow">
              <span />
              {t.contactLabel}
            </div>
            <h2>{t.contactTitle}</h2>
            <div className="contact-grid">
              <a className="contact-card" href="tel:+8562058881126">
                <span className="contact-icon">↗</span>
                <span className="contact-card-label">{t.phone}</span>
                <strong>+856 20 5888 1126</strong>
                <span className="contact-card-bottom">{t.contact} ↗</span>
              </a>
              <a className="contact-card" href="mailto:james8@nilaxai.com">
                <span className="contact-icon">@</span>
                <span className="contact-card-label">{t.email}</span>
                <strong>james8@nilaxai.com</strong>
                <span className="contact-card-bottom">{t.contact} ↗</span>
              </a>
              <div className="contact-card">
                <span className="contact-icon">⌖</span>
                <span className="contact-card-label">{t.locationLabel}</span>
                <strong>{t.country}</strong>
                <span className="contact-card-bottom">LAO PDR</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <a className="brand footer-brand" href="#home">
            <img
              className="brand-logo"
              src="/nilaxai-logo.jpg"
              alt="Nilaxai Group of Companies"
            />
            <span className="brand-copy">
              <strong>NILAXAI</strong>
              <small>{t.groupOfCompanies}</small>
            </span>
          </a>
          <p>{t.footerText}</p>
          <a className="footer-top" href="#home">
            ↑ <span>TOP</span>
          </a>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} Nilaxai Group. {t.rights}
          </span>
          <span>VIENTIANE, LAOS</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
