import { useEffect, useRef } from 'react';
import HeroCard from './HeroCard';

export default function Hero() {
  const etRef = useRef(null);
  const hnRef = useRef(null);
  const hsRef = useRef(null);
  const hpRef = useRef(null);
  const hcRef = useRef(null);
  const hcardRef = useRef(null);

  useEffect(() => {
    // [ref, delay in ms]
    const items = [
      [etRef,   300],
      [hnRef,   400],
      [hsRef,   550],
      [hpRef,   700],
      [hcRef,   850],
      [hcardRef, 450],   // card appears slightly after name
    ];
    items.forEach(([ref, delay]) => {
      if (!ref.current) return;
      setTimeout(() => {
        ref.current.style.opacity = '1';
        ref.current.style.transform = 'translateY(0)';
      }, delay);
    });

    // Magnetic buttons
    document.querySelectorAll('.btn-g, .btn-o').forEach(b => {
      b.addEventListener('mousemove', e => {
        const rc = b.getBoundingClientRect();
        b.style.transform = `translate(${(e.clientX - rc.left - rc.width / 2) * 0.28}px, ${(e.clientY - rc.top - rc.height / 2) * 0.28}px)`;
      });
      b.addEventListener('mouseleave', () => {
        b.style.transition = 'transform .5s cubic-bezier(.23,1,.32,1), box-shadow .3s';
        b.style.transform = 'translate(0,0)';
      });
    });
  }, []);

  return (
    <section className="hero" id="hero" style={s.hero}>
      <div style={s.bgWord}>MERN</div>
      <div style={s.content} className="hero-content">
        <div>
          <div ref={etRef} style={s.tag}>
            <div style={s.tagLine} />
            Full Stack Developer · India
          </div>
          <h1 ref={hnRef} className="hn" style={s.h1}>
            <span style={{ display: 'block' }}>Uzaif</span>
            <span style={{ ...s.l2, display: 'block' }}>Khan</span>
          </h1>
          <p ref={hsRef} style={s.sub}>
            // <span style={{ color: 'var(--accent2)', fontWeight: 500 }}>React · Node.js · Express · MongoDB</span>
          </p>
          <p ref={hpRef} style={s.p}>
            MERN Stack Developer with a passion for building scalable, performant web applications. 15+ projects shipped with measurable results — 40% faster loads, 99.8% API uptime.
          </p>
          <div ref={hcRef} style={s.cta}>
            <a href="mailto:uzaifkhan248@gmail.com" className="btn-g" style={s.btnG}>
              <BtnShine />✉ Hire Me
            </a>
            <a href="https://github.com/uzaifkhan-2774" target="_blank" rel="noreferrer" className="btn-o" style={s.btnO}>
              ⌥ GitHub ↗
            </a>
          </div>
        </div>
        <HeroCard ref={hcardRef} />
      </div>
      <div className="scroll-hint">
        <div className="sh-line" />
        scroll
      </div>
    </section>
  );
}

function BtnShine() {
  return <span style={{
    position: 'absolute', inset: 0,
    background: 'linear-gradient(45deg,transparent,rgba(255,255,255,.25),transparent)',
    transform: 'translateX(-100%)', transition: 'transform .5s',
    pointerEvents: 'none',
  }} className="btn-shine" />;
}

const s = {
  hero: {
    position: 'relative', minHeight: '100vh',
    display: 'flex', alignItems: 'center',
    padding: '0 5vw', paddingTop: 80, zIndex: 2, overflow: 'hidden',
  },
  bgWord: {
    position: 'absolute', top: '50%', left: '50%',
    transform: 'translate(-50%,-50%)',
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(80px,17vw,200px)', fontWeight: 900,
    color: 'rgba(255,255,255,.012)', whiteSpace: 'nowrap',
    letterSpacing: '-.05em', userSelect: 'none', pointerEvents: 'none',
  },
  content: {
    display: 'grid', gridTemplateColumns: '1fr 400px',
    gap: '5rem', alignItems: 'center',
    width: '100%', maxWidth: 1200, margin: '0 auto',
  },
  tag: {
    display: 'inline-flex', alignItems: 'center', gap: 10,
    fontFamily: 'var(--font-mono)', fontSize: 11,
    color: 'var(--accent)', background: 'rgba(0,255,224,.06)',
    border: '1px solid rgba(0,255,224,.2)', borderRadius: 100,
    padding: '6px 16px', marginBottom: '1.5rem',
    opacity: 0, transform: 'translateY(20px)',
    transition: 'opacity .7s ease, transform .7s ease',
  },
  tagLine: { width: 30, height: 1, background: 'var(--accent)' },
  h1: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(3.5rem,7vw,6rem)', fontWeight: 900,
    lineHeight: .95, letterSpacing: '-.03em', marginBottom: '1.2rem',
    opacity: 0, transform: 'translateY(20px)',
    transition: 'opacity .9s ease, transform .9s ease',
  },
  l2: {
    WebkitTextStroke: '1.5px rgba(0,255,224,.4)', color: 'transparent',
  },
  sub: {
    fontFamily: 'var(--font-mono)', fontSize: 13,
    color: 'var(--muted2)', marginBottom: '1.5rem',
    opacity: 0, transform: 'translateY(20px)',
    transition: 'opacity .6s ease, transform .6s ease',
  },
  p: {
    fontSize: 15, color: 'var(--muted2)', lineHeight: 1.85,
    maxWidth: 500, marginBottom: '2.5rem',
    opacity: 0, transform: 'translateY(20px)',
    transition: 'opacity .7s ease, transform .7s ease',
  },
  cta: {
    display: 'flex', gap: '1rem', flexWrap: 'wrap',
    opacity: 0, transform: 'translateY(20px)',
    transition: 'opacity .7s ease, transform .7s ease',
  },
  btnG: {
    position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 8,
    background: 'var(--accent)', color: '#000',
    fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: 13,
    letterSpacing: '.04em', padding: '13px 28px', borderRadius: 50,
    textDecoration: 'none', border: 'none', cursor: 'none', overflow: 'hidden',
    boxShadow: '0 0 30px rgba(0,255,224,.25)',
    transition: 'transform .2s, box-shadow .3s',
  },
  btnO: {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    background: 'transparent', color: 'var(--text)',
    fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13,
    padding: '13px 28px', borderRadius: 50, textDecoration: 'none',
    border: '1px solid var(--border)', cursor: 'none',
    transition: 'all .3s',
  },
};
