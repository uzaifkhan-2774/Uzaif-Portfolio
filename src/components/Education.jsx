import { useReveal } from '../hooks/useReveal';

export default function Education() {
  const eyeRef = useReveal();
  const titleRef = useReveal();
  const cardRef = useReveal();

  return (
    <section id="education">
      <div className="wrap">
        <div ref={eyeRef} className="sey r">Academic</div>
        <h2 ref={titleRef} className="st r"><em>Education</em>.</h2>
        <div ref={cardRef} className="edu-card r" style={s.card}>
          <div style={s.topAccent} />
          <div style={s.glow} />
          <div>
            <div style={s.deg}>Bachelor of Computer Applications (BCA)</div>
            <div style={s.uni}>Sant Gadge Baba Amravati University · India</div>
          </div>
          <div style={s.yr}>2019–22</div>
        </div>
      </div>
    </section>
  );
}

const s = {
  card: {
    background: 'var(--card)', border: '1px solid var(--border)',
    borderRadius: 20, padding: '2.5rem',
    display: 'flex', alignItems: 'center',
    justifyContent: 'space-between', gap: '2rem',
    position: 'relative', overflow: 'hidden',
  },
  topAccent: {
    position: 'absolute', top: 0, left: 0, right: 0, height: 2,
    background: 'linear-gradient(90deg,var(--accent2),var(--accent))',
  },
  glow: {
    position: 'absolute', bottom: -100, right: -100,
    width: 250, height: 250,
    background: 'radial-gradient(circle,rgba(139,92,246,.08),transparent)',
    borderRadius: '50%', pointerEvents: 'none',
  },
  deg: {
    fontFamily: 'var(--font-display)', fontSize: '1.4rem',
    fontWeight: 700, color: 'var(--text)', marginBottom: '.4rem',
  },
  uni: { fontSize: 14, color: 'var(--muted2)', fontWeight: 500 },
  yr: {
    fontFamily: 'var(--font-display)', fontSize: '3.5rem', fontWeight: 900,
    color: 'transparent', WebkitTextStroke: '1px rgba(139,92,246,.25)',
    lineHeight: 1, whiteSpace: 'nowrap',
  },
};
