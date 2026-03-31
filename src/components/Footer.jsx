import { useReveal } from '../hooks/useReveal';

export default function Footer() {
  const nameRef = useReveal();
  const tagRef = useReveal();
  const linksRef = useReveal();

  return (
    <footer id="contact" style={s.footer}>
      <div style={s.inner}>
        <div ref={nameRef} className="r" style={s.name}>Uzaif Khan</div>
        <div ref={tagRef} className="r" style={s.tag}>MERN Stack Developer · Available for exciting opportunities</div>
        <div ref={linksRef} className="r" style={s.links}>
          <a href="mailto:uzaifkhan248@gmail.com" style={s.link}>✉ uzaifkhan248@gmail.com</a>
          <a href="tel:+919307480905" style={s.link}>☏ +91 9307480905</a>
          <a href="https://github.com/uzaifkhan-2774" target="_blank" rel="noreferrer" style={s.link}>⌥ github.com/uzaifkhan-2774</a>
        </div>
        <div style={s.copy}>© 2025 Uzaif Khan — Crafted with passion &amp; precision.</div>
      </div>
    </footer>
  );
}

const s = {
  footer: {
    padding: '5rem 5vw 3rem',
    borderTop: '1px solid var(--border)',
    position: 'relative', zIndex: 2,
  },
  inner: { maxWidth: 1200, margin: '0 auto', textAlign: 'center' },
  name: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(3rem,7vw,5.5rem)',
    fontWeight: 900, letterSpacing: '-.04em', lineHeight: 1, marginBottom: '1rem',
    background: 'linear-gradient(135deg,var(--text) 40%,var(--muted2))',
    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
  },
  tag: {
    fontSize: 14, color: 'var(--muted2)',
    marginBottom: '2rem', fontWeight: 500,
  },
  links: {
    display: 'flex', justifyContent: 'center',
    gap: '2rem', flexWrap: 'wrap', marginBottom: '3rem',
  },
  link: {
    display: 'flex', alignItems: 'center', gap: 8,
    fontSize: 13, fontWeight: 600, color: 'var(--muted2)',
    textDecoration: 'none', transition: 'color .2s',
  },
  copy: {
    fontFamily: 'var(--font-mono)', fontSize: 11,
    color: 'var(--muted)', opacity: .5,
  },
};
