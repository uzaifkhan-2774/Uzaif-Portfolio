import { useReveal } from '../hooks/useReveal';

export default function SkillCard({ icon, title, tags }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="skcard r" style={s.card}>
      <div style={s.bottom} />
      <div style={s.head}>
        <div style={s.icon}>{icon}</div>
        <div style={s.title}>{title}</div>
      </div>
      <div style={s.tags}>
        {tags.map(t => (
          <span key={t} className="sktag" style={s.tag}>{t}</span>
        ))}
      </div>
    </div>
  );
}

const s = {
  card: {
    background: 'var(--card)', border: '1px solid var(--border)',
    borderRadius: 18, padding: '1.5rem',
    transition: 'transform .3s, border-color .3s',
    position: 'relative', overflow: 'hidden',
  },
  bottom: {
    position: 'absolute', bottom: -50, right: -50,
    width: 100, height: 100, borderRadius: '50%',
    background: 'radial-gradient(circle,rgba(0,255,224,.07),transparent)',
    transition: 'transform .5s', pointerEvents: 'none',
  },
  head: { display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1rem' },
  icon: {
    width: 34, height: 34, borderRadius: 9,
    background: 'rgba(0,255,224,.08)', display: 'flex',
    alignItems: 'center', justifyContent: 'center', fontSize: 16,
  },
  title: {
    fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500,
    letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)',
  },
  tags: { display: 'flex', flexWrap: 'wrap', gap: 6 },
  tag: {
    fontSize: 12, fontWeight: 600, padding: '4px 11px',
    background: 'rgba(255,255,255,.04)', border: '1px solid var(--border)',
    borderRadius: 7, color: 'var(--text)', transition: 'all .2s', cursor: 'default',
  },
};
