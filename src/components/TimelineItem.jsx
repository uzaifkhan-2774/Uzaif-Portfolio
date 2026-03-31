import { useReveal } from '../hooks/useReveal';

export default function TimelineItem({ company, role, badge, bullets, dotColor, dotShadow }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="tli r" style={s.item}>
      <div style={{ ...s.dot, background: dotColor, boxShadow: dotShadow }} />
      <div className="tlcard" style={s.card}>
        <div style={s.top}>
          <div>
            <div style={s.co}>{company}</div>
            <div style={s.ro}>// {role}</div>
          </div>
          <div style={s.badge}>{badge}</div>
        </div>
        <ul style={s.buls}>
          {bullets.map((b, i) => (
            <li key={i} style={s.li}>
              <span style={s.arrow}>▹</span>
              <span style={{ fontSize: 13, color: 'var(--muted2)', lineHeight: 1.65 }}>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const s = {
  item: { position: 'relative', marginBottom: '3rem' },
  dot: {
    position: 'absolute', left: '-2.45rem', top: 8,
    width: 13, height: 13, borderRadius: '50%',
    border: '2px solid var(--bg)',
  },
  card: {
    background: 'var(--card)', border: '1px solid var(--border)',
    borderRadius: 18, padding: '1.8rem',
    transition: 'border-color .3s, transform .3s',
  },
  top: {
    display: 'flex', justifyContent: 'space-between',
    alignItems: 'flex-start', marginBottom: '.5rem',
    gap: '1rem', flexWrap: 'wrap',
  },
  co: { fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)' },
  ro: { fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)', marginTop: 3 },
  badge: {
    fontFamily: 'var(--font-mono)', fontSize: 10, padding: '5px 13px',
    background: 'rgba(139,92,246,.1)', color: 'var(--accent2)',
    border: '1px solid rgba(139,92,246,.2)', borderRadius: 100,
    whiteSpace: 'nowrap', fontWeight: 500,
  },
  buls: { listStyle: 'none', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: 6 },
  li: { display: 'flex', gap: 10, alignItems: 'flex-start' },
  arrow: { color: 'var(--accent)', flexShrink: 0, fontSize: 14, marginTop: 1 },
};
