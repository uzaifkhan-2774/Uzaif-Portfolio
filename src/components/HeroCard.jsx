import { useEffect, useRef, useState, forwardRef } from 'react';

const stats = [
  { end: 15,   suffix: '+', label: 'Projects'    },
  { end: 40,   suffix: '%', label: 'Faster Load'  },
  { end: 99.8, suffix: '%', label: 'API Uptime'   },
  { end: 50,   suffix: '%', label: 'DB Boost'     },
];

function StatItem({ end, suffix, label }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  const isFloat = String(end).includes('.');

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const step = end / (1400 / 16);
        let cur = 0;
        const t = setInterval(() => {
          cur = Math.min(cur + step, end);
          setVal(isFloat ? parseFloat(cur.toFixed(1)) : Math.floor(cur));
          if (cur >= end) clearInterval(t);
        }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="si">
      <div className="sn">{val}<span className="su">{suffix}</span></div>
      <div className="sl">{label}</div>
    </div>
  );
}

const HeroCard = forwardRef(function HeroCard(props, ref) {
  return (
    <div className="hcard" ref={ref}>
      <div className="hc-lbl">// at a glance</div>
      <div className="sg">
        {stats.map(s => <StatItem key={s.label} {...s} />)}
      </div>
      <div className="clist">
        <div className="crow">
          <div className="ci">✉</div>
          <a href="mailto:uzaifkhan248@gmail.com">uzaifkhan248@gmail.com</a>
        </div>
        <div className="crow">
          <div className="ci">☏</div>
          <span>+91 9307480905</span>
        </div>
        <div className="crow">
          <div className="ci">⌥</div>
          <a href="https://github.com/uzaifkhan-2774" target="_blank" rel="noreferrer">
            github.com/uzaifkhan-2774
          </a>
        </div>
      </div>
    </div>
  );
});

export default HeroCard;
