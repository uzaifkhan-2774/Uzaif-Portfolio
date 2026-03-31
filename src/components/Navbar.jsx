import { useEffect, useState } from 'react';

const links = ['skills', 'experience', 'projects', 'education', 'contact'];

export default function Navbar() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const secs = document.querySelectorAll('section[id]');
    const onScroll = () => {
      let cur = '';
      secs.forEach(s => { if (window.scrollY >= s.offsetTop - 150) cur = s.id; });
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>UK<em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>.</em></div>
      <div className="nav-links" style={styles.links}>
        {links.map(l => (
          <a key={l} href={`#${l}`} style={{
            ...styles.link,
            color: active === l ? 'var(--accent)' : 'var(--muted2)',
          }}>
            {l}
            <span style={{ ...styles.linkLine, width: active === l ? '100%' : '0' }} />
          </a>
        ))}
      </div>
      <div style={styles.pill}>
        <div style={styles.pdot} />
        Open to Work
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '1.2rem 5vw',
    background: 'rgba(3,3,8,.85)', backdropFilter: 'blur(24px)',
    borderBottom: '1px solid var(--border)',
  },
  logo: {
    fontFamily: 'var(--font-display)', fontSize: '1.35rem',
    fontWeight: 900, letterSpacing: '-.02em',
  },
  links: {
    display: 'flex', gap: '2.5rem',
  },
  link: {
    fontSize: 12, fontWeight: 600, textDecoration: 'none',
    letterSpacing: '.08em', textTransform: 'uppercase',
    transition: 'color .2s', position: 'relative',
  },
  linkLine: {
    position: 'absolute', bottom: -4, left: 0,
    height: 1, background: 'var(--accent)', transition: 'width .3s', display: 'block',
  },
  pill: {
    display: 'flex', alignItems: 'center', gap: 8,
    fontSize: 11, fontWeight: 700, letterSpacing: '.08em',
    color: 'var(--accent)', background: 'rgba(0,255,224,.07)',
    border: '1px solid rgba(0,255,224,.2)', borderRadius: 100,
    padding: '6px 16px', fontFamily: 'var(--font-mono)',
  },
  pdot: {
    width: 7, height: 7, background: 'var(--accent)', borderRadius: '50%',
    animation: 'pls 2s infinite',
  },
};
