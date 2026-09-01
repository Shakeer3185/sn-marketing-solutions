import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Facebook,
  Instagram,
  Mail,
  Megaphone,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Phone,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X,
} from 'lucide-react'
import { useState } from 'react'
import './styles.css'

const CONTACT = {
  phone: '+91 00000 00000',
  whatsapp: 'https://wa.me/910000000000',
  email: 'snmarketingsolutions@gmail.com',
  instagram: 'https://instagram.com/',
  facebook: 'https://facebook.com/',
}

const services = [
  { icon: Target, title: 'Marketing', text: 'Reach the right audience with focused offline and online marketing strategies.' },
  { icon: Sparkles, title: 'Branding', text: 'Build a memorable identity with creative brand communication and visual direction.' },
  { icon: Megaphone, title: 'Advertising', text: 'Turn attention into opportunity with impactful advertising campaigns.' },
  { icon: TrendingUp, title: 'Promotion', text: 'Create visibility and momentum for products, services, offers and events.' },
]

const digitalServices = ['Social Media Marketing', 'Instagram & Facebook Promotion', 'Digital Advertising', 'Creative Content & Designs', 'Business Promotion', 'Online Brand Visibility']

function App() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <div className="site-shell">
      <header className="navbar">
        <div className="nav-inner">
          <button className="brand" onClick={() => scrollTo('home')} aria-label="SN Marketing Solutions home">
            <span className="brand-mark">SN</span>
            <span><strong>SN</strong> Marketing Solutions</span>
          </button>
          <nav className={open ? 'nav-links mobile-open' : 'nav-links'}>
            {['home', 'services', 'digital', 'about', 'contact'].map((id) => (
              <button key={id} onClick={() => scrollTo(id)}>{id === 'digital' ? 'Digital' : id.charAt(0).toUpperCase() + id.slice(1)}</button>
            ))}
          </nav>
          <a className="nav-cta" href={CONTACT.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp</a>
          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-bg" />
          <div className="container hero-grid">
            <motion.div className="hero-copy" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
              <div className="eyebrow"><span /> MARKETING • BRANDING • ADVERTISING • PROMOTION</div>
              <h1>Make your brand <em>impossible to ignore.</em></h1>
              <p className="hero-text">We help businesses build visibility, connect with customers and grow through smart marketing — offline, online and digital.</p>
              <div className="hero-actions">
                <button className="primary-btn" onClick={() => scrollTo('services')}>Explore Services <ArrowRight size={18} /></button>
                <a className="ghost-btn" href={CONTACT.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Talk on WhatsApp</a>
              </div>
              <div className="trust-row"><div><strong>01</strong><span>Strategy-led</span></div><div><strong>02</strong><span>Creative-first</span></div><div><strong>03</strong><span>Growth-focused</span></div></div>
            </motion.div>
            <motion.div className="hero-visual" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }}>
              <div className="visual-card main-card">
                <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85" alt="Marketing team collaborating" />
                <div className="visual-overlay"><span>Campaign Growth</span><strong>Build. Reach. Grow.</strong></div>
              </div>
              <div className="floating-card"><BarChart3 size={20}/><div><small>Business visibility</small><strong>+ More Reach</strong></div></div>
              <div className="dot-grid" />
            </motion.div>
          </div>
        </section>

        <section className="intro-strip"><div className="container strip-grid"><div><span className="mini-label">WHAT WE DO</span><h2>Ideas that move businesses forward.</h2></div><p>From local visibility to digital reach, SN Marketing Solutions brings marketing, branding, advertising and promotion together under one roof.</p></div></section>

        <section id="services" className="section services-section"><div className="container"><div className="section-heading"><div><span className="mini-label">OUR SERVICES</span><h2>Everything your brand needs to <em>get noticed.</em></h2></div><p>Practical marketing solutions designed around your business, audience and goals.</p></div><div className="service-grid">{services.map(({ icon: Icon, title, text }, i) => <motion.article className="service-card" key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}><div className="icon-box"><Icon size={23}/></div><span className="card-number">0{i + 1}</span><h3>{title}</h3><p>{text}</p><button onClick={() => scrollTo('contact')}>Enquire now <ChevronRight size={16}/></button></motion.article>)}</div></div></section>

        <section className="marketing-types section"><div className="container two-col"><div className="dark-panel"><span className="mini-label light">MARKETING TYPES</span><h2>Offline when it matters. <em>Online when it scales.</em></h2><p>Combine real-world presence with digital reach to create a stronger customer journey.</p><div className="type-list"><div><BriefcaseBusiness/><span><strong>Offline Marketing</strong><small>Local campaigns, business promotion, print and on-ground visibility.</small></span></div><div><MonitorSmartphone/><span><strong>Online Marketing</strong><small>Social media, digital campaigns and online brand promotion.</small></span></div></div></div><div className="type-image"><img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1100&q=85" alt="Business strategy meeting" /><div className="image-caption"><span>ONE PARTNER</span><strong>For your complete marketing journey.</strong></div></div></div></section>

        <section id="digital" className="section digital-section"><div className="container digital-grid"><div><span className="mini-label">DIGITAL SERVICES</span><h2>Put your business where <em>people are looking.</em></h2><p>Build a consistent digital presence that attracts attention, builds trust and keeps your brand top of mind.</p><a className="text-link" href={CONTACT.whatsapp} target="_blank" rel="noreferrer">Start a conversation <ArrowRight size={17}/></a></div><div className="check-grid">{digitalServices.map((item) => <div key={item}><span><Check size={15}/></span>{item}</div>)}</div></div></section>

        <section id="about" className="section about-section"><div className="container about-grid"><div className="about-image"><img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=85" alt="Creative team working together" /><div className="about-badge"><Users size={18}/><strong>Built around your goals</strong></div></div><div><span className="mini-label">WHY SN MARKETING SOLUTIONS</span><h2>Not just promotion. <em>Real brand momentum.</em></h2><p>We believe effective marketing starts with understanding the business. Our approach blends creative communication with practical promotion so your brand can reach more people and stay memorable.</p><div className="about-points"><div><strong>01</strong><span><b>Clear communication</b> — make your offer easy to understand.</span></div><div><strong>02</strong><span><b>Consistent branding</b> — create a recognizable business identity.</span></div><div><strong>03</strong><span><b>Better reach</b> — connect with customers across offline and online channels.</span></div></div></div></div></section>

        <section id="contact" className="contact-section"><div className="container contact-inner"><div><span className="mini-label light">LET'S WORK TOGETHER</span><h2>Ready to give your business <em>more visibility?</em></h2><p>Tell us what you want to market, promote or build. Let's start the conversation.</p></div><div className="contact-actions"><a href={CONTACT.whatsapp} target="_blank" rel="noreferrer"><MessageCircle/> WhatsApp Us</a><a href={`mailto:${CONTACT.email}`}><Mail/> Email Us</a><a href={`tel:${CONTACT.phone.replaceAll(' ', '')}`}><Phone/> Call Us</a></div></div></section>
      </main>

      <footer className="footer"><div className="container footer-inner"><div className="brand footer-brand"><span className="brand-mark">SN</span><span><strong>SN</strong> Marketing Solutions</span></div><p>Marketing • Branding • Advertising • Promotion</p><div className="socials"><a href={CONTACT.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram/></a><a href={CONTACT.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook/></a><a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle/></a></div></div><div className="container copyright">© {new Date().getFullYear()} SN Marketing Solutions. All rights reserved.</div></footer>
      <a className="floating-whatsapp" href={CONTACT.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle/></a>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)
