import { useState } from 'react';

export default function FlipCard({ num, badges, title, desc, metrics, links }) {
  const [flipped, setFlipped] = useState(false);
  const [barsAnimated, setBarsAnimated] = useState(false);

  const handleEnter = () => {
    setFlipped(true);
    if (!barsAnimated) {
      setTimeout(() => setBarsAnimated(true), 350);
    }
  };
  const handleLeave = () => setFlipped(false);

  return (
    <div
      className="flip-card"
      style={s.card}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div style={{ ...s.inner, transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
        {/* FRONT */}
        <div style={s.front}>
          <div style={s.topBar} />
          <div style={s.num}>{num}</div>
          <div style={s.badges}>
            {badges.map(b => <span key={b} style={s.badge}>{b}</span>)}
          </div>
          <div style={s.ftitle}>{title}</div>
          <div style={s.fdesc}>{desc}</div>
          <div style={s.hint}>
            <div style={s.hintIcon}>↻</div>
            hover to flip
          </div>
        </div>

        {/* BACK */}
        <div style={s.back}>
          <div style={s.btitle}>Performance Metrics</div>
          <div style={s.bmetrics}>
            {metrics.map((m, i) => (
              <div key={i} style={s.bm}>
                <span style={s.bmLabel}>{m.label}</span>
                <div style={s.bmBarWrap}>
                  <div style={{
                    ...s.bmBar,
                    width: barsAnimated ? m.width : '0%',
                    transition: barsAnimated ? 'width 1s ease' : 'none',
                  }} />
                </div>
                <span style={s.bmVal}>{m.val}</span>
              </div>
            ))}
          </div>
          <div style={s.blinks}>
            {links.map((l, i) => (
              <a key={i} href={l.href} target="_blank" rel="noreferrer"
                style={l.ghost ? s.blGhost : s.bl}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const s = {
  card: { height: 360, perspective: 1200, cursor: 'none' },
  inner: {
    position: 'relative', width: '100%', height: '100%',
    transformStyle: 'preserve-3d',
    transition: 'transform .7s cubic-bezier(.4,0,.2,1)',
  },
  front: {
    position: 'absolute', inset: 0,
    backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
    borderRadius: 20, padding: '2rem',
    border: '1px solid var(--border)',
    background: 'var(--card)',
    display: 'flex', flexDirection: 'column', overflow: 'hidden',
  },
  topBar: {
    position: 'absolute', top: 0, left: 0, right: 0, height: 3,
    background: 'linear-gradient(90deg,var(--accent),var(--accent2))',
    transform: 'scaleX(0)', transition: 'transform .5s',
    transformOrigin: 'left', borderRadius: '20px 20px 0 0',
  },
  back: {
    position: 'absolute', inset: 0,
    backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
    borderRadius: 20, padding: '2rem',
    border: '1px solid rgba(0,255,224,.2)',
    background: 'var(--card2)',
    transform: 'rotateY(180deg)',
    display: 'flex', flexDirection: 'column', overflow: 'hidden',
  },
  num: {
    fontFamily: 'var(--font-display)', fontSize: '4rem', fontWeight: 900,
    color: 'rgba(255,255,255,.04)', lineHeight: 1, marginBottom: '.3rem', userSelect: 'none',
  },
  badges: { display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: '.8rem' },
  badge: {
    fontFamily: 'var(--font-mono)', fontSize: 9, fontWeight: 500,
    letterSpacing: '.1em', textTransform: 'uppercase',
    padding: '3px 9px', borderRadius: 5,
    background: 'rgba(0,255,224,.07)', color: 'var(--accent)',
    border: '1px solid rgba(0,255,224,.18)',
  },
  ftitle: {
    fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700,
    color: 'var(--text)', marginBottom: '.6rem', lineHeight: 1.2,
  },
  fdesc: { fontSize: 12, color: 'var(--muted2)', lineHeight: 1.75, flex: 1 },
  hint: {
    display: 'flex', alignItems: 'center', gap: 6,
    fontFamily: 'var(--font-mono)', fontSize: 10,
    color: 'var(--muted)', marginTop: '1rem', letterSpacing: '.05em',
  },
  hintIcon: {
    width: 20, height: 20, borderRadius: '50%',
    border: '1px solid var(--muted)', display: 'flex',
    alignItems: 'center', justifyContent: 'center',
    fontSize: 9, animation: 'spin 3s linear infinite',
  },
  btitle: {
    fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700,
    color: 'var(--accent)', marginBottom: '1rem',
  },
  bmetrics: { display: 'flex', flexDirection: 'column', gap: 8, marginBottom: '1.5rem', flex: 1 },
  bm: { display: 'flex', alignItems: 'center', gap: 10, fontSize: 12, color: 'var(--muted2)' },
  bmLabel: { minWidth: 130, fontSize: 11 },
  bmBarWrap: { flex: 1, height: 3, background: 'rgba(255,255,255,.06)', borderRadius: 2, overflow: 'hidden' },
  bmBar: {
    height: '100%',
    background: 'linear-gradient(90deg,var(--accent),var(--accent2))',
    borderRadius: 2, width: '0%',
  },
  bmVal: {
    fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)',
    minWidth: 35, textAlign: 'right', fontWeight: 500,
  },
  blinks: { display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 'auto' },
  bl: {
    display: 'inline-flex', alignItems: 'center', gap: 6,
    fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
    color: 'var(--bg)', background: 'var(--accent)',
    padding: '8px 16px', borderRadius: 8, textDecoration: 'none',
    transition: 'all .2s', cursor: 'none',
  },
  blGhost: {
    display: 'inline-flex', alignItems: 'center', gap: 6,
    fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
    color: 'var(--accent2)', background: 'transparent',
    border: '1px solid rgba(139,92,246,.3)',
    padding: '8px 16px', borderRadius: 8, textDecoration: 'none',
    transition: 'all .2s', cursor: 'none',
  },
};
