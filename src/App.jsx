import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

// Icons
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5 0-1.4-.5-2.5-1.5-3.4.1-.3.5-1.7-.1-3.3 0 0-1.2-.4-3.9 1.4a12.3 12.3 0 0 0-7 0C6.1 1.2 4.9 1.6 4.9 1.6c-.6 1.6-.2 3 .1 3.3-.1.9-.5 2-1.5 3.4 0 5 3 6.2 6 6.5-.2.2-.4.6-.5 1.2-.1.5-.1 1.4-.1 2.8 0 .4 0 .7.1.9"/></svg>
);
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
);
const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
);

const TIMELINE = [
  {
    id: 1,
    year: '2024 - 2028',
    role: 'B.Tech in Computer Science',
    company: 'Woxsen University',
    desc: 'Focusing on core computer science fundamentals, artificial intelligence, and software engineering. Engaging in practical project-based learning.',
    type: 'education',
    icon: '🎓'
  },
  {
    id: 2,
    year: '2026',
    role: 'Frontend Developer Intern',
    company: 'Tech Innovators',
    desc: 'Developed responsive web applications using React and Tailwind CSS. Improved page load speeds by 20% through code splitting.',
    type: 'experience',
    icon: '💼'
  },
  {
    id: 3,
    year: '2023 - 2024',
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    desc: 'Designed and built custom portfolios and landing pages for local businesses using HTML, CSS, and modern JavaScript.',
    type: 'experience',
    icon: '🚀'
  }
];

const PROJECTS = [
  {
    id: 1,
    title: 'Digital Asset Protection',
    category: 'Full Stack',
    desc: 'AI-powered forensic tool to detect copyright violations for sports media — with DMCA takedown generation and Gemini AI integration.',
    image: '/projects/project1.png',
    tech: ['React', 'FastAPI', 'Supabase', 'Python'],
    github: 'https://github.com/Sunhith9/Digital-Asset-Protection',
    demo: '#'
  },
  {
    id: 2,
    title: 'Woxsen Grievance System',
    category: 'Full Stack',
    desc: 'Student grievance submission & tracking platform for Woxsen University — complaint management, admin dashboard, and status monitoring.',
    image: '/projects/project2.png',
    tech: ['HTML/CSS', 'JavaScript', 'Python'],
    github: 'https://github.com/Sunhith9/Woxsen-Grievance-System',
    demo: '#'
  },
  {
    id: 3,
    title: 'PBL Portal',
    category: 'Full Stack',
    desc: 'Portal to manage project-based learning activities, resources, and academic workflows. Focused on user navigation and information accessibility.',
    image: '/projects/project3.png',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Sunhith9/PBL-Portal',
    demo: '#'
  },
  {
    id: 4,
    title: 'Task Expense Tracker',
    category: 'Frontend',
    desc: 'App to manage tasks and track expenses with structured records — improved day-to-day productivity and data monitoring workflows.',
    image: '/projects/project4.png',
    tech: ['JavaScript', 'CSS', 'HTML'],
    github: 'https://github.com/Sunhith9/task-expense-tracker',
    demo: '#'
  },
  {
    id: 5,
    title: 'AI-Powered Tools Website',
    category: 'Full Stack',
    desc: 'Built using OpenAI GPT API for content rewriting and assistance. Dynamic tool interface with real-time AI-generated output.',
    image: '/projects/project5.png',
    tech: ['JavaScript', 'OpenAI API', 'CSS'],
    github: 'https://github.com/Sunhith9/AI-Powered-Tools',
    demo: '#'
  },
  {
    id: 6,
    title: 'Haunted Mansion Escape Game',
    category: 'Frontend',
    desc: 'Route Planning System using pathfinding logic — interactive UI with dynamic room navigation and escape puzzles.',
    image: '/projects/project6.png',
    tech: ['JavaScript', 'CSS', 'Algorithms'],
    github: 'https://github.com/Sunhith9/Haunted-Mansion-Escape',
    demo: '#'
  },
  {
    id: 7,
    title: 'Racing Replay System',
    category: 'Frontend',
    desc: 'Real-time race event tracking with playback controls — data visualization for race replays with smooth UI.',
    image: '/projects/project7.png',
    tech: ['JavaScript', 'CSS', 'HTML'],
    github: 'https://github.com/Sunhith9/f1-race-replay',
    demo: '#'
  },
  {
    id: 8,
    title: 'Arduino Remote Car',
    category: 'UI',
    desc: 'Remote-controlled car using Arduino Uno — motor interfacing, control logic, and hardware-software integration.',
    image: '/projects/project8.png',
    tech: ['Arduino', 'C', 'Hardware'],
    github: 'https://github.com/Sunhith9/Arduino-Remote-Car',
    demo: '#'
  }
];

const CERTIFICATIONS = [
  {
    title: 'Java Programming: Solving Problems with Software',
    issuer: 'Duke University',
    icon: '☕',
    tag: 'Programming',
    pdf: '/certificates/Coursera JQE8PAK8252G.pdf',
    url: 'https://coursera.org/share/9fe3ba1ab65efd9628b65edde2d67a3f'
  },
  {
    title: 'Object-Oriented Design',
    issuer: 'University of Alberta',
    icon: '🧱',
    tag: 'Programming',
    pdf: '/certificates/Coursera ERJIWZ22TZFN.pdf',
    url: 'https://coursera.org/share/104c402681ac663124c1537647fee53f'
  },
  {
    title: 'Programming for Everybody (Getting Started with Python)',
    issuer: 'University of Michigan',
    icon: '🐍',
    tag: 'Programming',
    pdf: '/certificates/Coursera FHDY97BA230T.pdf',
    url: 'https://coursera.org/share/a061ebbfb835b8c8f34940219385da0f'
  },
  {
    title: 'Data Structures Using Python - An Introduction',
    issuer: 'Packt',
    icon: '📐',
    tag: 'DSA',
    pdf: '/certificates/Coursera CED7Q7G79H0Q.pdf',
    url: 'https://coursera.org/share/7eb02651b2fe63e737a7ff04ddab27fb'
  },
  {
    title: 'The Arduino Platform and C Programming',
    issuer: 'UC Irvine',
    icon: '🔌',
    tag: 'Hardware',
    pdf: '/certificates/Coursera S1OF0VUHKGDI.pdf',
    url: 'https://coursera.org/share/3ce0b5ab47958d160652dbd5e3cde995'
  },
  {
    title: 'Interfacing with the Arduino',
    issuer: 'UC Irvine',
    icon: '⚙️',
    tag: 'Hardware',
    pdf: '/certificates/Coursera 8I5XBD1UZZKK.pdf',
    url: 'https://coursera.org/share/97343b407a289280b7a92a107df40aca'
  },
  {
    title: 'Mathematical Foundations and Quantum Mechanics Essentials',
    issuer: 'Packt',
    icon: '🔬',
    tag: 'Science',
    pdf: '/certificates/Coursera 6ZC4HV5IJ446.pdf',
    url: 'https://coursera.org/share/62c8a983732db8bc7c15cd6ee2f5e282'
  },
  {
    title: 'Advanced Functional Ceramics',
    issuer: 'Yonsei University',
    icon: '🏛️',
    tag: 'Engineering',
    pdf: '/certificates/Coursera 4255Q4C8WWSR.pdf',
    url: 'https://coursera.org/share/4eb3057b7e130c88f2933ca376310769'
  },
  {
    title: 'Write Professional Emails in English',
    issuer: 'Georgia Institute of Technology',
    icon: '✉️',
    tag: 'Communication',
    pdf: '/certificates/Coursera FJR92O8Q68U0.pdf',
    url: 'https://coursera.org/share/c2c3aacb7d99cce31117a480ff5648b3'
  },
];

const SKILLS = [
  { icon: '⚛️', name: 'React & Next.js', desc: 'Scalable SPAs and SSR apps with hooks, context, and the React ecosystem.', pct: 92, tags: 'React · Next.js · Vite' },
  { icon: '🎨', name: 'CSS & UI Design', desc: 'Advanced CSS, Glassmorphism, and responsive layouts with high-end aesthetics.', pct: 88, tags: 'CSS · Framer · SVG' },
  { icon: '📦', name: 'JavaScript & TS', desc: 'Modern ES6+, functional programming, and type-safe development.', pct: 85, tags: 'JS · TS · NPM' },
  { icon: '🐍', name: 'Python & AI', desc: 'Backend development with FastAPI/Flask and AI integration with Gemini.', pct: 80, tags: 'Python · FastAPI · LLMs' },
  { icon: '🔌', name: 'Hardware & IoT', desc: 'Arduino platform, C programming, and hardware-software integration.', pct: 75, tags: 'Arduino · C · IoT' },
  { icon: '🚀', name: 'Performance & Dev', desc: 'Optimizing for Core Web Vitals, SEO, and developer experience.', pct: 85, tags: 'Vite · SEO · Git' },
];

const SERVICES = [
  {
    icon: '💻',
    title: 'Frontend Development',
    desc: 'Crafting pixel-perfect, responsive, and accessible user interfaces using React, Next.js, and modern CSS frameworks.'
  },
  {
    icon: '⚙️',
    title: 'Full Stack Solutions',
    desc: 'Building end-to-end applications with robust Node.js/Python backends, RESTful APIs, and secure database architectures.'
  },
  {
    icon: '✨',
    title: 'UI/UX Design',
    desc: 'Designing intuitive user experiences and premium aesthetics with a focus on modern trends like glassmorphism and micro-animations.'
  }
];

const FAQS = [
  {
    q: 'What technologies do you specialize in?',
    a: 'My core stack includes React, Next.js, TypeScript, and Tailwind CSS on the frontend. For backends, I frequently use Node.js, Express, and Python (FastAPI).'
  },
  {
    q: 'Are you available for freelance work?',
    a: 'Yes, I am currently open to taking on new freelance projects and contract roles. Feel free to reach out via the contact form below.'
  },
  {
    q: 'How do you ensure code quality?',
    a: 'I strictly follow clean code principles, implement thorough testing, and use tools like ESLint and Prettier. I also prioritize Web Vitals and accessibility.'
  },
  {
    q: 'Can you work with hardware or IoT?',
    a: 'Absolutely! I have experience with Arduino and C programming, allowing me to bridge the gap between software interfaces and physical hardware.'
  }
];

const App = () => {
  const [activeCert, setActiveCert] = useState(null);
  const [formStatus, setFormStatus] = useState('idle');
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showFloating, setShowFloating] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [openFaq, setOpenFaq] = useState(null);

  // Loading Animation
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 15) + 5;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => setIsLoading(false), 400); // Small pause at 100%
      }
      setLoadingProgress(current);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Apply Theme
  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-theme' : '';
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Magnetic Buttons
  useEffect(() => {
    const magnetics = document.querySelectorAll('.magnetic');
    const mouseMoves = [];
    const mouseLeaves = [];

    magnetics.forEach((btn, i) => {
      mouseMoves[i] = (e) => {
        const position = btn.getBoundingClientRect();
        const x = e.clientX - position.left - position.width / 2;
        const y = e.clientY - position.top - position.height / 2;
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.5}px)`;
      };
      mouseLeaves[i] = () => {
        btn.style.transform = 'translate(0px, 0px)';
      };

      btn.addEventListener('mousemove', mouseMoves[i]);
      btn.addEventListener('mouseleave', mouseLeaves[i]);
    });

    return () => {
      magnetics.forEach((btn, i) => {
        btn.removeEventListener('mousemove', mouseMoves[i]);
        btn.removeEventListener('mouseleave', mouseLeaves[i]);
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloating(window.scrollY > 400);

      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'certifications', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    const form = e.target;
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/sunhithk9768@gmail.com', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus('idle'), 4000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 4000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 4000);
    }
  };
  const avatarCardRef = useRef(null);
  const avatarWrapRef = useRef(null);

  // ── Three.js Background ──
  useEffect(() => {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    const count = 1800;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 120;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 60;
      if (Math.random() < 0.5) {
        col[i * 3] = 0.42; col[i * 3 + 1] = 0.39; col[i * 3 + 2] = 1;
      } else {
        col[i * 3] = 0; col[i * 3 + 1] = 0.96; col[i * 3 + 2] = 0.77;
      }
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));

    const pts = new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.12, vertexColors: true, transparent: true, opacity: 0.6 }));
    scene.add(pts);

    const mkT = (r, tube, color, x, y, z, op) => {
      const m = new THREE.Mesh(new THREE.TorusGeometry(r, tube, 8, 100), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: op }));
      m.position.set(x, y, z);
      scene.add(m);
      return m;
    };

    const t1 = mkT(8, 0.04, 0x6c63ff, 14, -5, -10, 0.12);
    const t2 = mkT(5, 0.03, 0x00f5c4, -12, 6, -8, 0.1);
    const ico = new THREE.Mesh(new THREE.IcosahedronGeometry(4, 1), new THREE.MeshBasicMaterial({ color: 0x6c63ff, wireframe: true, transparent: true, opacity: 0.06 }));
    ico.position.set(-18, 8, -15);
    scene.add(ico);

    let mx = 0, my = 0;
    const onMouseMove = (e) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    let t = 0;
    let req;
    const loop = () => {
      req = requestAnimationFrame(loop);
      t += 0.005;
      pts.rotation.y += 0.0008;
      pts.rotation.x += 0.0003;
      t1.rotation.x = t * 0.4; t1.rotation.y = t * 0.25;
      t2.rotation.x = -t * 0.3; t2.rotation.z = t * 0.2;
      ico.rotation.y = t * 0.18; ico.rotation.x = t * 0.12;
      camera.position.x += (mx * 2 - camera.position.x) * 0.03;
      camera.position.y += (-my * 1.5 - camera.position.y) * 0.03;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };
    loop();

    setTimeout(() => setIsLoading(false), 1500);

    return () => {
      cancelAnimationFrame(req);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // ── Scroll-driven Animations (Intersection Observer) ──
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          e.target.querySelectorAll('.skill-bar').forEach(b => {
            b.style.width = b.dataset.w + '%';
          });
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.s-up, .s-left, .s-right, .s-zoom, .s-flip').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // ── Avatar 3D Tilt ──
  useEffect(() => {
    const av = avatarCardRef.current;
    const aw = avatarWrapRef.current;
    if (!av || !aw) return;

    const onMove = (e) => {
      const r = av.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      av.style.transform = `perspective(700px) rotateY(${x * 20}deg) rotateX(${-y * 15}deg)`;
    };
    const onLeave = () => { av.style.transform = ''; };

    aw.addEventListener('mousemove', onMove);
    aw.addEventListener('mouseleave', onLeave);
    return () => {
      aw.removeEventListener('mousemove', onMove);
      aw.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  // ── Hero Parallax ──
  useEffect(() => {
    const onScroll = () => {
      const p = Math.min(window.scrollY / window.innerHeight, 1);
      const ht = document.querySelector('.hero-title');
      const hb = document.querySelector('.hero-badge');
      const hs = document.querySelector('.hero-sub');
      if (ht) ht.style.transform = `perspective(600px) translateZ(${p * 90}px) translateY(${-p * 70}px)`;
      if (hb) hb.style.transform = `translateY(${-p * 45}px)`;
      if (hs) hs.style.transform = `translateY(${-p * 30}px)`;

      const nav = document.querySelector('nav');
      if (nav) nav.style.padding = window.scrollY > 50 ? '0.75rem 4rem' : '1.25rem 4rem';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className={`splash-loader ${isLoading ? '' : 'hidden'}`}>
        <div className="loader-logo">SK</div>
        <div className="loader-progress">{loadingProgress}%</div>
      </div>

      <nav>
        <a href="#" className="nav-logo">SK</a>
        <button className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span></span><span></span><span></span>
        </button>
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
          <li><a href="#services" className={activeSection === 'services' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Services</a></li>
          <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Skills</a></li>
          <li><a href="#experience" className={activeSection === 'experience' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Experience</a></li>
          <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Work</a></li>
          <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
          <li>
            <button className="theme-toggle magnetic" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>
      </nav>

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-badge">Available for opportunities</div>
          <h1 className="hero-title">
            <span className="line1">Sunhith</span>
            <span className="line2">Kande</span>
          </h1>
          <p className="hero-sub">Frontend developer crafting immersive, high-performance web experiences that live at the intersection of design and engineering.</p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary magnetic">View Work →</a>
            <a href="#contact" className="btn btn-outline magnetic">Get in Touch</a>
          </div>
          <div className="scroll-hint"><span>Scroll</span><div className="scroll-line"></div></div>
        </section>

        {/* ABOUT */}
        <section id="about">
          <div className="container">
            <div className="about-grid">
              <div className="about-text s-left d0">
                <div className="section-label">About me</div>
                <h2 className="section-title">Builder of fast,<br />beautiful interfaces</h2>
                <p>I'm Kande Sunhith, an AI/ML enthusiast and web developer based in Hyderabad. I specialize in building fast, minimal, and highly interactive applications.</p>
                <p>Currently studying Computer Science at Woxsen University (B.Tech, 2028), my goal is to blend clean code with intuitive design to solve real-world problems.</p>
                <div className="about-stats">
                  <div className="stat s-flip d1"><div className="stat-num">3+</div><div className="stat-label">Years Exp.</div></div>
                  <div className="stat s-flip d2"><div className="stat-num">20+</div><div className="stat-label">Projects</div></div>
                  <div className="stat s-flip d3"><div className="stat-num">10+</div><div className="stat-label">Certs</div></div>
                </div>
                <div className="github-chart-container s-up d4">
                  <div className="github-chart-title">GitHub Contributions</div>
                  <img src="https://ghchart.rshah.org/6c63ff/Sunhith9" alt="Sunhith's GitHub chart" />
                </div>
              </div>
              <div className="avatar-wrap s-right d1" ref={avatarWrapRef}>
                <div className="avatar-card" ref={avatarCardRef}>
                  <div className="initials">SK</div>
                </div>
                <div className="avatar-floating-tag">⚡ Open to work</div>
              </div>
            </div>
          </div>
        </section>



        {/* SERVICES */}
        <section id="services">
          <div className="container">
            <div className="section-label s-up d0">What I do</div>
            <h2 className="section-title s-up d1">My Services</h2>
            <div className="services-grid s-up d2">
              {SERVICES.map((srv, i) => (
                <div key={i} className="service-card">
                  <div className="service-icon">{srv.icon}</div>
                  <h3 className="service-title">{srv.title}</h3>
                  <p className="service-desc">{srv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <div className="container">
            <div className="section-label s-up d0">Expertise</div>
            <h2 className="section-title s-up d1">My tech stack</h2>
            <div className="skills-grid">
              {SKILLS.map((skill, i) => (
                <div key={i} className={`skill-flip s-zoom d${i + 1}`}>
                  <div className="skill-flip-inner">
                    <div className="skill-face">
                      <div>
                        <div className="skill-icon">{skill.icon}</div>
                        <div className="skill-name">{skill.name}</div>
                        <div className="skill-desc">{skill.desc}</div>
                      </div>
                      <div className="skill-bar-wrap">
                        <div className="skill-bar" data-w={skill.pct}></div>
                      </div>
                    </div>
                    <div className="skill-face skill-face-back">
                      <div className="skill-back-pct">{skill.pct}%</div>
                      <div className="skill-back-label">Proficiency</div>
                      <div className="skill-back-tag">{skill.tags}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION */}
        <section id="experience">
          <div className="container">
            <div className="section-label s-up d0">Journey</div>
            <h2 className="section-title s-up d1">Experience & Education</h2>
            
            <div className="timeline">
              <div className="timeline-line"></div>
              {TIMELINE.map((item, i) => (
                <div key={item.id} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'} s-up d${i + 1}`}>
                  <div className="timeline-node">{item.icon}</div>
                  <div className="timeline-content">
                    <div className="timeline-year">{item.year}</div>
                    <div className="timeline-role">{item.role}</div>
                    <div className="timeline-company">{item.company}</div>
                    <div className="timeline-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <div className="container">
            <div className="section-label s-up d0">Work</div>
            <h2 className="section-title s-up d1">Selected projects</h2>
            <div className="project-search-wrap s-up d1">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input 
                type="text" 
                placeholder="Search projects by name or tech..." 
                className="project-search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="project-filter-row s-up d1">
              {['All', 'Full Stack', 'Frontend', 'UI', 'Hardware'].map(cat => (
                <button 
                  key={cat} 
                  className={`filter-btn magnetic ${activeFilter === cat ? 'active' : ''}`}
                  onClick={() => setActiveFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="projects-grid">
              {PROJECTS.filter(p => {
                const matchesFilter = activeFilter === 'All' || p.category === activeFilter;
                const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                      p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                      p.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
                return matchesFilter && matchesSearch;
              }).map((project, i) => (
                <div key={project.id} className={`project-card ${i === 0 ? 's-up' : (i % 2 === 0 ? 's-right' : 's-left')} d${i + 2}`}>
                  <div className="project-image-wrap">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="project-number">0{i + 1} {i === 0 ? '— Featured' : ''}</div>
                  </div>
                  <div className="project-content">
                    <div className="project-title">{project.title}</div>
                  <div className="project-desc">{project.desc}</div>
                  <div className="project-tags">
                    {project.tech.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                  <div className="project-links">
                    <a href={project.demo} className={`project-link ${project.demo === '#' ? 'muted' : ''}`}>Live Demo →</a>
                    <a href={project.github} target="_blank" rel="noreferrer" className="project-link muted">GitHub ↗</a>
                  </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications">
          <div className="container">
            <div className="section-label s-up d0">Recognition</div>
            <h2 className="section-title s-up d1">Coursera Certifications</h2>
            <div className="certs-grid">
              {CERTIFICATIONS.map((cert, i) => (
                <div key={i} className="cert-card s-zoom d2" onClick={() => setActiveCert(cert)}>
                  <div className="cert-card-top">
                    <span className="cert-icon">{cert.icon}</span>
                    <span className="cert-tag">{cert.tag}</span>
                  </div>
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">
                    <span className="coursera-badge">Coursera</span> · {cert.issuer}
                  </p>
                  <div className="cert-link-hint">View PDF ↗</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQS */}
        <section id="faq">
          <div className="container">
            <div className="section-label s-up d0">FAQ</div>
            <h2 className="section-title s-up d1">Common Questions</h2>
            <div className="faq-list s-up d2">
              {FAQS.map((faq, i) => (
                <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                  <button className="faq-question magnetic" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    {faq.q}
                    <span className="faq-icon">{openFaq === i ? '−' : '+'}</span>
                  </button>
                  <div className="faq-answer-wrapper">
                    <div className="faq-answer">{faq.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <div className="container">
            <div className="section-label">Let's connect</div>
            <h2 className="section-title s-up d0">Got a project in mind?</h2>
            <p className="contact-subtitle s-up d1">I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!</p>
            <div className="contact-card s-zoom d2">
              <a href="mailto:sunhithk9768@gmail.com" className="contact-email">sunhithk9768@gmail.com</a>
              
              <form onSubmit={handleFormSubmit} className="contact-form">
                <input type="hidden" name="_subject" value="New Portfolio Contact!" />
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" className="form-control" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" className="form-control" placeholder="john@example.com" required />
                </div>
                <div className="form-group full">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" className="form-control" placeholder="Tell me about your project..." required></textarea>
                </div>
                <div className="form-group full">
                  <button type="submit" className="btn btn-primary magnetic" style={{ width: '100%', justifyContent: 'center' }} disabled={formStatus === 'submitting' || formStatus === 'success'}>
                    {formStatus === 'submitting' ? 'Sending...' : formStatus === 'success' ? 'Message Sent! ✅' : formStatus === 'error' ? 'Failed! Try Again ❌' : 'Send Message 🚀'}
                  </button>
                </div>
              </form>

              <div className="social-links">
                <a href="https://github.com/Sunhith9" target="_blank" rel="noreferrer" className="social-link magnetic">GitHub</a>
                <a href="https://www.linkedin.com/in/kande-sunhith-10aa1b326" target="_blank" rel="noreferrer" className="social-link magnetic">LinkedIn</a>
                <a href="/resume/resume.pdf" download className="social-link magnetic">Resume ↓</a>
              </div>

              <div className="contact-map-wrapper">
                <iframe 
                  title="Hyderabad Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.326266299863!2d78.4744!3d17.3850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* MODAL */}
      {activeCert && (
        <div className="cert-modal-overlay" onClick={() => setActiveCert(null)}>
          <div className="cert-modal" onClick={e => e.stopPropagation()}>
            <div className="cert-modal-header">
              <div className="cert-modal-meta">
                <span className="cert-icon" style={{ fontSize: '1.4rem' }}>{activeCert.icon}</span>
                <div>
                  <div className="cert-modal-title">{activeCert.title}</div>
                  <div className="cert-modal-issuer">
                    <span className="coursera-badge">Coursera</span> · {activeCert.issuer}
                  </div>
                </div>
              </div>
              <div className="cert-modal-actions">
                <a href={activeCert.pdf} download className="btn btn-outline btn-sm">⬇ Download</a>
                <a href={activeCert.url} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">↗ View Source</a>
                <button className="cert-modal-close" onClick={() => setActiveCert(null)}>✕</button>
              </div>
            </div>
            <div className="cert-modal-body">
              <iframe
                src={activeCert.pdf}
                title={activeCert.title}
                className="cert-pdf-viewer"
              />
            </div>
          </div>
        </div>
      )}

      {/* FLOATING ACTIONS */}
      <div className={`floating-actions ${showFloating ? 'visible' : ''}`}>
        <a href="https://wa.me/910000000000" target="_blank" rel="noreferrer" className="float-btn float-wa magnetic" aria-label="WhatsApp">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        </a>
        <button className="float-btn float-top magnetic" onClick={() => window.scrollTo({top:0, behavior:'smooth'})} aria-label="Back to Top">
          ↑
        </button>
      </div>

      <footer><p>© {new Date().getFullYear()} <span>Sunhith Kande</span> · Designed & built with precision</p></footer>
    </>
  );
};

export default App;
