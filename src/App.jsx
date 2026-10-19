import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  Search, Heart, ShoppingBag, Menu, X, ArrowRight, ChevronRight,
  Play, Star, ShieldCheck, RotateCcw, Truck, Leaf, Plus, Minus,
  Check, Sparkles, Instagram, Facebook, Youtube, UserRound, Mail, Phone, Eye, EyeOff, ArrowLeft
} from 'lucide-react'

const images = {
  hero: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=1800&q=90',
  men: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=900&q=85',
  women: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=85',
  kids: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=85',
  leather: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85',
  artisan: 'https://images.unsplash.com/photo-1455390582262-044cdeel8028?auto=format&fit=crop&w=1400&q=85',
  making: 'https://images.unsplash.com/photo-1455390582262-044cdeel8028?auto=format&fit=crop&w=700&q=80',
  heritage: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=700&q=80',
  artisans: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=80',
  product1: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=700&q=85',
  product2: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=85',
  product3: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85',
  product4: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&w=700&q=85',
  product5: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=85',
  product6: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=700&q=85',
}

const collections = [
  { title: "Men's Collection", subtitle: 'Chappals & shoes', image: images.men, href: '#mens', tag: 'TIMELESS CLASSICS' },
  { title: "Women's Collection", subtitle: 'Grace in every step', image: images.women, href: '#womens', tag: 'MADE TO STAND OUT' },
  { title: "Kids' Collection", subtitle: 'Little steps, big traditions', image: images.kids, href: '#kids', tag: 'LITTLE HERITAGE' },
  { title: 'Leather Goods', subtitle: 'Bags, belts, wallets & more', image: images.leather, href: '#leather', tag: 'CRAFTED TO LAST' },
]

const products = [
  { id: 1, name: 'Classic Kolhapuri Chappal', category: 'Men', price: 1499, oldPrice: 1799, rating: '4.8', reviews: 120, image: images.product1, badge: 'BESTSELLER' },
  { id: 2, name: 'Antique Strap Chappal', category: 'Men', price: 1799, oldPrice: 1999, rating: '4.7', reviews: 98, image: images.product2, badge: 'HANDCRAFTED' },
  { id: 3, name: 'Everyday Leather Sandal', category: 'Women', price: 1299, oldPrice: 1599, rating: '4.8', reviews: 86, image: images.product3, badge: 'NEW' },
  { id: 4, name: 'Heritage Kids Chappal', category: 'Kids', price: 999, oldPrice: 1199, rating: '4.6', reviews: 42, image: images.product4, badge: '' },
  { id: 5, name: 'Artisan Leather Sling Bag', category: 'Leather', price: 2499, oldPrice: 2899, rating: '4.7', reviews: 64, image: images.product5, badge: 'LIMITED' },
  { id: 6, name: 'Classic Leather Wallet', category: 'Leather', price: 899, oldPrice: 1099, rating: '4.5', reviews: 57, image: images.product6, badge: '' },
]

const upcomingItems = [
  { id: 'u1', name: 'Heritage Artisan Chappal', category: 'Footwear', date: 'Coming soon', image: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=800&q=85', note: 'A new take on a classic' },
  { id: 'u2', name: 'Everyday Leather Tote', category: 'Bags', date: 'Coming soon', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=85', note: 'Made for everyday journeys' },
  { id: 'u3', name: 'Classic Fold Wallet', category: 'Wallets', date: 'Coming soon', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=85', note: 'Small detail, lasting quality' },
  { id: 'u4', name: 'Signature Leather Belt', category: 'Belts', date: 'Coming soon', image: 'https://images.unsplash.com/photo-1624222247344-550fb8e7e6a1?auto=format&fit=crop&w=800&q=85', note: 'A timeless finishing touch' },
]

const formatPrice = n => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

function Logo({ light = false }) {
  return <a href="#home" className={`brand ${light ? 'brand-light' : ''}`} aria-label="AthaniQ Kolhapur home">
    <span className="brand-mark">A</span>
    <span className="brand-copy"><strong>ATHANIQ</strong><small>KOLHAPUR</small></span>
  </a>
}

function SectionTitle({ eyebrow, title, description, light = false }) {
  return <div className={`section-title ${light ? 'section-title-light' : ''}`}>
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>
}

function ProductCard({ product, onAdd, isFavorite, onFavorite }) {
  const reduceMotion = useReducedMotion()
  return <motion.article className="product-card" whileHover={reduceMotion ? undefined : { y: -5 }} transition={{ duration: .22 }}>
    <div className="product-image-wrap">
      <a href="#product" className="product-image-link" aria-label={`View ${product.name}`}>
        <img src={product.image} alt={product.name} loading="lazy" />
      </a>
      {product.badge && <span className="product-badge">{product.badge}</span>}
      <button className={`icon-button favorite-button ${isFavorite ? 'is-favorite' : ''}`} onClick={() => onFavorite(product.id)} aria-label={isFavorite ? 'Remove from wishlist' : 'Add to wishlist'}>
        <Heart size={18} fill={isFavorite ? 'currentColor' : 'none'} />
      </button>
      <button className="quick-add" onClick={() => onAdd(product)}>Quick add <Plus size={15} /></button>
    </div>
    <div className="product-info">
      <div className="product-category">{product.category} collection</div>
      <a href="#product" className="product-name">{product.name}</a>
      <div className="product-rating"><Star size={13} fill="currentColor" /> <strong>{product.rating}</strong> <span>({product.reviews})</span></div>
      <div className="product-prices"><strong>{formatPrice(product.price)}</strong><del>{formatPrice(product.oldPrice)}</del></div>
      <button className="button button-dark button-full product-add" onClick={() => onAdd(product)}>Add to bag <ArrowRight size={15} /></button>
    </div>
  </motion.article>
}

function DiscountModal({ onClose }) {
  const [email, setEmail] = useState('')
  const [claimed, setClaimed] = useState(false)
  return <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={e => e.target === e.currentTarget && onClose()}>
    <motion.section className="discount-modal" role="dialog" aria-modal="true" aria-labelledby="discount-title" initial={{ opacity: 0, y: 24, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 18, scale: .98 }} transition={{ duration: .25 }}>
      <button className="modal-close icon-button" onClick={onClose} aria-label="Close discount popup"><X size={20} /></button>
      <div className="modal-decoration"><Sparkles size={22} /></div>
      {!claimed ? <>
        <span className="eyebrow">A little welcome gift</span>
        <h2 id="discount-title">Enjoy <em>10% off</em></h2>
        <p className="modal-subtitle">Your first step into handcrafted heritage.</p>
        <div className="coupon-code"><span>YOUR CODE</span><strong>FIRST10</strong></div>
        <form onSubmit={e => { e.preventDefault(); setClaimed(true) }} className="discount-form">
          <label htmlFor="discount-email">Get the welcome offer by email</label>
          <div className="email-field"><input id="discount-email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email address" required /><button className="button button-dark" type="submit">Claim offer</button></div>
        </form>
        <p className="fine-print">Offer subject to eligibility and terms. One use per eligible customer.</p>
      </> : <div className="claimed-state"><span className="success-icon"><Check size={26}/></span><h2>You're on the list!</h2><p>Use code <strong>FIRST10</strong> at checkout, subject to offer eligibility.</p><button className="button button-dark" onClick={onClose}>Continue shopping</button></div>}
    </motion.section>
  </motion.div>
}


function LoginModal({ onClose, onToast }) {
  const [mode, setMode] = useState('login')
  const [method, setMethod] = useState('email')
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [otpSent, setOtpSent] = useState(false)
  const [otp, setOtp] = useState('')
  const [name, setName] = useState('')
  const submit = e => {
    e.preventDefault()
    if (!otpSent) {
      setOtpSent(true)
      onToast('Demo only: connect your Spring Boot OTP API to send a real code.')
      return
    }
    if (otp.trim().length < 4) { onToast('Enter the verification code to continue.'); return }
    onToast('Login UI demo complete. Connect the backend to authenticate users.')
    onClose()
  }
  return <motion.div className="modal-backdrop login-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={e => e.target === e.currentTarget && onClose()}>
    <motion.section className="login-modal" role="dialog" aria-modal="true" aria-labelledby="login-title" initial={{ opacity: 0, y: 22, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: .98 }} transition={{ duration: .24 }}>
      <button className="modal-close icon-button" onClick={onClose} aria-label="Close login"><X size={20}/></button>
      <div className="login-visual"><div className="login-visual-shade"/><div className="login-visual-copy"><Logo light/><span className="eyebrow">ROOTED IN HERITAGE</span><h2>Tradition in<br/><em>every step.</em></h2><p>Sign in to keep your favourites close and your orders in one place.</p><div className="login-perk"><ShieldCheck size={17}/> Crafted with care, delivered with trust</div></div></div>
      <div className="login-content">
        <span className="eyebrow">WELCOME TO ATHANIQ</span>
        <h2 id="login-title">{otpSent ? 'Verify your account' : mode === 'login' ? 'Welcome back' : 'Create your account'}</h2>
        <p className="login-intro">{otpSent ? `Enter the verification code sent to ${identifier}.` : 'Sign in for a more personal shopping experience.'}</p>
        {!otpSent && <div className="login-tabs"><button className={mode === 'login' ? 'active' : ''} onClick={() => setMode('login')}>Sign in</button><button className={mode === 'signup' ? 'active' : ''} onClick={() => setMode('signup')}>Create account</button></div>}
        <form className="login-form" onSubmit={submit}>
          {!otpSent && mode === 'signup' && <label>Full name<div className="login-input"><UserRound size={17}/><input value={name} onChange={e => setName(e.target.value)} placeholder="Your full name" required autoComplete="name"/></div></label>}
          {!otpSent && <><div className="login-method"><button type="button" className={method === 'email' ? 'active' : ''} onClick={() => { setMethod('email'); setIdentifier('') }}><Mail size={15}/> Email</button><button type="button" className={method === 'phone' ? 'active' : ''} onClick={() => { setMethod('phone'); setIdentifier('') }}><Phone size={15}/> Mobile</button></div>
          <label>{method === 'email' ? 'Email address' : 'Mobile number'}<div className="login-input">{method === 'email' ? <Mail size={17}/> : <Phone size={17}/>}<input type={method === 'email' ? 'email' : 'tel'} value={identifier} onChange={e => setIdentifier(e.target.value)} placeholder={method === 'email' ? 'you@example.com' : '+91 98765 43210'} required autoComplete={method === 'email' ? 'email' : 'tel'} pattern={method === 'phone' ? '[+0-9() -]{8,18}' : undefined}/></div></label>
          {mode === 'login' && <label>Password <div className="login-input"><input type={showPassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter your password" required minLength={8} autoComplete="current-password"/><button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? 'Hide password' : 'Show password'}>{showPassword ? <EyeOff size={17}/> : <Eye size={17}/>}</button></div></label>}
          </>}
          {otpSent && <label>Verification code<div className="login-input"><ShieldCheck size={17}/><input value={otp} onChange={e => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))} inputMode="numeric" autoComplete="one-time-code" placeholder="Enter 4–6 digit code" required minLength={4} maxLength={6}/></div></label>}
          <button className="button button-dark button-full login-submit" type="submit">{otpSent ? 'Verify & continue' : mode === 'signup' ? 'Create account' : 'Sign in'} <ArrowRight size={16}/></button>
        </form>
        {otpSent && <button className="login-back" onClick={() => { setOtpSent(false); setOtp('') }}><ArrowLeft size={14}/> Change email or mobile number</button>}
        {!otpSent && <p className="login-terms">By continuing, you agree to our <a href="#terms" onClick={onClose}>Terms</a> and <a href="#privacy" onClick={onClose}>Privacy Policy</a>.</p>}
        <div className="login-security"><ShieldCheck size={15}/><span>Your details are protected. Secure authentication will be enabled when the backend is connected.</span></div>
      </div>
    </motion.section>
  </motion.div>
}

export default function App() {
  const [cart, setCart] = useState([])
  const [favorites, setFavorites] = useState([])
  const [toast, setToast] = useState('')
  const [showDiscount, setShowDiscount] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('All')
  const [showVideo, setShowVideo] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showIntro, setShowIntro] = useState(() => !sessionStorage.getItem('athaniq-intro-seen'))
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (showIntro) {
      const timer = setTimeout(() => {
        sessionStorage.setItem('athaniq-intro-seen', 'true')
        setShowIntro(false)
      }, 1100)
      return () => clearTimeout(timer)
    }
    if (!sessionStorage.getItem('athaniq-offer-shown') && !sessionStorage.getItem('athaniq-offer-dismissed')) {
      const timer = setTimeout(() => {
        sessionStorage.setItem('athaniq-offer-shown', 'true')
        setShowDiscount(true)
      }, 10000)
      return () => clearTimeout(timer)
    }
  }, [showIntro])

  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(() => setToast(''), 2500)
    return () => clearTimeout(timer)
  }, [toast])

  const addToCart = product => {
    setCart(current => {
      const found = current.find(item => item.id === product.id)
      return found ? current.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { ...product, quantity: 1 }]
    })
    setToast(`${product.name} added to your bag`)
  }

  const toggleFavorite = id => {
    setFavorites(current => current.includes(id) ? current.filter(x => x !== id) : [...current, id])
    setToast(favorites.includes(id) ? 'Removed from wishlist' : 'Saved to wishlist')
  }

  const dismissDiscount = () => {
    sessionStorage.setItem('athaniq-offer-dismissed', 'true')
    setShowDiscount(false)
  }

  const visibleProducts = products.filter(p => (filter === 'All' || p.category === filter) && `${p.name} ${p.category}`.toLowerCase().includes(searchTerm.toLowerCase()))

  return <>
    <AnimatePresence>
      {showIntro && <motion.div className="intro-screen" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .45 }}>
        <motion.div className="intro-content" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }}>
          <div className="intro-mark">A</div><Logo light /><p>Handcrafted leather footwear</p><div className="intro-line"><span /></div>
        </motion.div>
      </motion.div>}
    </AnimatePresence>

    <div className="announcement-bar"><span><Truck size={13}/> Free shipping on orders above ₹999</span><i /> <span><Leaf size={13}/> Handcrafted with heritage</span><div className="announcement-right"><a href="#track">Track order</a><a href="#help">Help</a><a href="#account" onClick={e => { e.preventDefault(); setShowLogin(true) }}>Sign in</a></div></div>
    <header className="site-header">
      <button className="mobile-menu icon-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
      <Logo />
      <nav className={`main-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#mens" onClick={() => setMenuOpen(false)}>Men</a>
        <a href="#womens" onClick={() => setMenuOpen(false)}>Women</a>
        <a href="#kids" onClick={() => setMenuOpen(false)}>Kids</a>
        <a href="#leather" onClick={() => setMenuOpen(false)}>Leather goods</a>
        <a href="#bestsellers" onClick={() => setMenuOpen(false)}>Bestsellers</a>
        <a href="#upcoming" onClick={() => setMenuOpen(false)}>Coming soon</a>
      </nav>
      <div className="header-actions">
        <button className="icon-button" onClick={() => setShowLogin(true)} aria-label="Sign in"><UserRound size={19}/></button>
        <button className="icon-button" onClick={() => setSearchOpen(!searchOpen)} aria-label="Search"><Search size={19}/></button>
        <button className="icon-button desktop-only" onClick={() => setToast(`${favorites.length} items in your wishlist`)} aria-label="Wishlist"><Heart size={19}/><span className="count-badge">{favorites.length}</span></button>
        <button className="icon-button cart-button" onClick={() => setToast(`Your bag has ${cart.reduce((n, item) => n + item.quantity, 0)} item(s)`)} aria-label="Shopping bag"><ShoppingBag size={19}/><span className="count-badge">{cart.reduce((n, item) => n + item.quantity, 0)}</span></button>
      </div>
    </header>

    {searchOpen && <div className="search-panel"><Search size={18}/><input autoFocus value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search chappals, shoes, leather goods..." /><button onClick={() => { setSearchTerm(''); setSearchOpen(false) }} className="icon-button" aria-label="Close search"><X size={18}/></button></div>}

    <main>
      <section className="hero" id="home">
        <div className="hero-image" style={{ backgroundImage: `linear-gradient(90deg, rgba(39,23,14,.90) 0%, rgba(39,23,14,.64) 39%, rgba(39,23,14,.04) 78%), url("${images.hero}")` }} />
        <div className="hero-content">
          <span className="hero-kicker">A legacy shaped by hand</span>
          <h1>Tradition in<br/><em>Every Step.</em></h1>
          <p>Authentic Kolhapuri chappals & leather footwear, crafted to be part of your story.</p>
          <a className="button button-gold" href="#collections">Explore collections <ArrowRight size={16}/></a>
          <div className="hero-points"><span><ShieldCheck/> Genuine craftsmanship</span><span><Leaf/> Artisan made</span><span><RotateCcw/> Easy returns</span></div>
        </div>
        <div className="hero-caption"><span>HERITAGE</span><small>Crafted for today</small></div>
      </section>

      <section className="collections section-pad" id="collections">
        <SectionTitle eyebrow="Find your everyday favourite" title="Explore our collections" description="Handcrafted footwear and leather essentials for the whole family."/>
        <div className="collection-grid">
          {collections.map((item, i) => <motion.a href={item.href} className="collection-card" key={item.title} initial={reduceMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .45, delay: i * .07 }}>
            <div className="collection-photo"><img src={item.image} alt={item.title} loading="lazy"/><span className="collection-tag">{item.tag}</span><span className="collection-arrow"><ArrowRight size={18}/></span></div>
            <div className="collection-card-copy"><h3>{item.title}</h3><p>{item.subtitle}</p><span>Explore collection <ChevronRight size={14}/></span></div>
          </motion.a>)}
        </div>
      </section>

      <section className="story-section" id="story">
        <div className="story-backdrop" style={{ backgroundImage: `linear-gradient(90deg, rgba(35,21,14,.94), rgba(35,21,14,.70)), url("${images.artisan}")` }} />
        <div className="story-copy">
          <span className="eyebrow">Made slowly. Worn proudly.</span>
          <h2>Our story in<br/><em>every stitch.</em></h2>
          <p>Meet the hands behind the craft. Discover the patience, skill and heritage woven into every pair.</p>
          <button className="button button-gold" onClick={() => setShowVideo(true)}><Play size={15} fill="currentColor"/> Watch our story</button>
        </div>
        <div className="video-cards">
          {[{ title: 'The making process', sub: 'From leather to legendary', image: images.making, duration: '02:15' }, { title: 'Our heritage', sub: 'Tradition across generations', image: images.heritage, duration: '01:30' }, { title: 'Meet our artisans', sub: 'Hands that craft history', image: images.artisans, duration: '01:45' }].map((video, i) => <button className="video-card" key={video.title} onClick={() => setShowVideo(true)}>
            <div className="video-thumb"><img src={video.image} alt="" loading="lazy"/><span className="play-circle"><Play size={18} fill="currentColor"/></span><small>{video.duration}</small></div><strong>{video.title}</strong><span>{video.sub}</span>
          </button>)}
        </div>
      </section>

      <section className="benefits-strip">
        <div><span className="benefit-icon"><ShieldCheck/></span><p><strong>Thoughtful quality</strong><small>Made with care</small></p></div>
        <div><span className="benefit-icon"><Leaf/></span><p><strong>Artisan made</strong><small>Crafted by skilled hands</small></p></div>
        <div><span className="benefit-icon"><Sparkles/></span><p><strong>Timeless design</strong><small>Rooted in tradition</small></p></div>
        <div><span className="benefit-icon"><Truck/></span><p><strong>Reliable delivery</strong><small>Across India</small></p></div>
      </section>

      <section className="bestsellers section-pad" id="bestsellers">
        <SectionTitle eyebrow="Made to be worn on repeat" title="Bestselling favourites" description="Customer-loved pieces with a story in every detail."/>
        <div className="product-toolbar">
          <div className="filter-pills">{['All', 'Men', 'Women', 'Kids', 'Leather'].map(item => <button key={item} className={filter === item ? 'filter-pill active' : 'filter-pill'} onClick={() => setFilter(item)}>{item}</button>)}</div>
          <span className="results-count">{visibleProducts.length} pieces</span>
        </div>
        <div className="product-grid">
          {visibleProducts.map(product => <ProductCard key={product.id} product={product} onAdd={addToCart} isFavorite={favorites.includes(product.id)} onFavorite={toggleFavorite}/>)}
        </div>
      </section>

      <section className="upcoming-section section-pad" id="upcoming">
        <SectionTitle eyebrow="From our workshop to your wishlist" title="The next chapter is coming" description="A first look at new handcrafted pieces currently in the works." />
        <div className="upcoming-grid">
          {upcomingItems.map((item, i) => <motion.article className="upcoming-card" key={item.id} initial={reduceMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .18 }} transition={{ duration: .5, delay: i * .08 }}>
            <div className="upcoming-image"><img src={item.image} alt={item.name} loading="lazy"/><span className="coming-badge"><Sparkles size={12}/> Coming soon</span><span className="upcoming-number">0{i + 1}</span></div>
            <div className="upcoming-copy"><span>{item.category}</span><h3>{item.name}</h3><p>{item.note}</p><button onClick={() => setToast(`We’ll share updates about ${item.name} soon.`)}>Notify me <ArrowRight size={14}/></button></div>
          </motion.article>)}
        </div>
        <div className="upcoming-footnote"><span className="pulse-dot"/> New drops are being crafted. Follow our journey for launch updates.</div>
      </section>

      <section className="discount-banner">
        <div><span className="eyebrow">A welcome gift from us</span><h2>Your first order,<br/><em>10% more special.</em></h2><p>Use code <strong>FIRST10</strong> at checkout.</p><button className="button button-gold" onClick={() => setShowDiscount(true)}>Claim your offer <ArrowRight size={16}/></button></div>
        <div className="discount-ornament">10<span>%</span><small>FIRST ORDER</small></div>
      </section>
    </main>

    <footer className="site-footer">
      <div className="footer-main"><div className="footer-brand"><Logo light/><p>Rooted in heritage. Made for every step.</p><div className="social-links"><a href="#instagram" aria-label="Instagram"><Instagram/></a><a href="#facebook" aria-label="Facebook"><Facebook/></a><a href="#youtube" aria-label="YouTube"><Youtube/></a></div></div>
        <div><h4>Shop</h4><a href="#mens">Men</a><a href="#womens">Women</a><a href="#kids">Kids</a><a href="#leather">Leather goods</a></div>
        <div><h4>Customer care</h4><a href="#contact">Contact us</a><a href="#shipping">Shipping & returns</a><a href="#size-guide">Size guide</a><a href="#faq">FAQs</a></div>
        <div className="newsletter"><h4>A note from our workshop</h4><p>New collections, craft stories and thoughtful offers.</p><form onSubmit={e => { e.preventDefault(); setToast('Thank you for subscribing!') }}><input type="email" placeholder="Email address" required aria-label="Email address"/><button aria-label="Subscribe"><ArrowRight size={17}/></button></form></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} AthaniQ Kolhapur. All rights reserved.</span><span>Privacy · Terms · Returns</span></div>
    </footer>

    <AnimatePresence>{showLogin && <LoginModal onClose={() => setShowLogin(false)} onToast={setToast}/>}</AnimatePresence>
    <AnimatePresence>{showDiscount && <DiscountModal onClose={dismissDiscount}/>}</AnimatePresence>
    <AnimatePresence>{showVideo && <motion.div className="modal-backdrop video-modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={e => e.target === e.currentTarget && setShowVideo(false)}><motion.div className="video-modal" initial={{ scale: .97, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: .98, opacity: 0 }}><button className="modal-close icon-button" onClick={() => setShowVideo(false)} aria-label="Close video"><X/></button><div className="video-placeholder" style={{ backgroundImage: `linear-gradient(rgba(30,18,11,.35), rgba(30,18,11,.55)), url("${images.artisan}")` }}><Play size={54} fill="currentColor"/><p>Our craft story</p><small>Connect your brand video URL to enable playback.</small></div></motion.div></motion.div>}</AnimatePresence>
    <AnimatePresence>{toast && <motion.div className="toast-message" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}><Check size={17}/>{toast}</motion.div>}</AnimatePresence>
  </>
}
