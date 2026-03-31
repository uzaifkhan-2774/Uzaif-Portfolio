const ITEMS = [
  'React.js','Node.js','MongoDB','Express.js','Tailwind CSS',
  'Next.js','JWT Auth','REST APIs','Firebase','Vercel','Git & GitHub',
  'React.js','Node.js','MongoDB','Express.js','Tailwind CSS',
  'Next.js','JWT Auth','REST APIs','Firebase','Vercel','Git & GitHub',
];

export default function Marquee() {
  return (
    <div style={s.wrap}>
      <div style={s.track}>
        {ITEMS.map((item, i) => (
          <div key={i} style={s.item}>
            {item} <span style={s.star}>✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const s = {
  wrap: {
    overflow: 'hidden',
    borderTop: '1px solid var(--border)',
    borderBottom: '1px solid var(--border)',
    padding: '.8rem 0',
    background: 'rgba(0,255,224,.02)',
    position: 'relative', zIndex: 2,
  },
  track: {
    display: 'flex', gap: '3rem',
    width: 'max-content',
    animation: 'mar 20s linear infinite',
  },
  item: {
    fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
    letterSpacing: '.15em', textTransform: 'uppercase',
    color: 'var(--muted)', display: 'flex', alignItems: 'center',
    gap: '1rem', whiteSpace: 'nowrap',
  },
  star: { color: 'var(--accent)', fontSize: 8 },
};
