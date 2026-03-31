import { useReveal } from '../hooks/useReveal';
import TimelineItem from './TimelineItem';

const EXPERIENCES = [
  {
    company: 'App Deviser',
    role: 'MERN Stack Developer · India',
    badge: 'Mar 2025 – Present',
    dotColor: 'var(--accent)',
    dotShadow: '0 0 18px rgba(0,255,224,.5)',
    bullets: [
      'Working as a MERN Stack Developer building scalable web applications',
      'Developing and maintaining full-stack apps using React.js, Node.js, Express.js, and MongoDB',
      'Designing REST APIs and improving application performance and responsiveness',
    ],
  },
  {
    company: 'Manisha Systems',
    role: 'MERN Stack Developer Intern · India',
    badge: 'Jul 2024 – Jan 2025',
    dotColor: 'var(--accent2)',
    dotShadow: '0 0 18px rgba(139,92,246,.5)',
    bullets: [
      'Developed 5+ full-stack applications, improving system performance by 35%',
      'Built secure RESTful APIs with JWT auth — 1000+ daily requests, 99.8% uptime',
      'Created responsive UI with Tailwind CSS & Bootstrap, reducing CSS codebase by 40%',
      'Implemented DB optimization strategies, improving query performance by 50%',
    ],
  },
  {
    company: 'CodeLinear',
    role: 'Frontend Developer Intern · Remote',
    badge: 'Nov 2024 – Mar 2025',
    dotColor: 'var(--accent3)',
    dotShadow: '0 0 18px rgba(244,63,94,.5)',
    bullets: [
      'Developed 3 responsive web apps serving 10,000+ monthly users',
      'Built reusable component library (25+ components), boosting dev efficiency by 30%',
      'Reduced unnecessary re-renders by 45% with optimized React Hooks',
      'Achieved 95+ Lighthouse scores, reduced load time by 40%',
    ],
  },
];

export default function Experience() {
  const eyeRef = useReveal();
  const titleRef = useReveal();

  return (
    <section id="experience">
      <div className="wrap">
        <div ref={eyeRef} className="sey r">Work History</div>
        <h2 ref={titleRef} className="st r">My <em>Experience</em>.</h2>
        <div style={s.tl}>
          {EXPERIENCES.map(exp => <TimelineItem key={exp.company} {...exp} />)}
        </div>
      </div>
    </section>
  );
}

const s = {
  tl: {
    position: 'relative', paddingLeft: '2rem',
    borderLeft: '1px solid transparent',
    backgroundImage: 'none',
  },
};
