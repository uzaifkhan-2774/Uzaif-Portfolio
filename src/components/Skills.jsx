import { useReveal } from '../hooks/useReveal';
import SkillCard from './SkillCard';

const SKILLS = [
  { icon: '⚡', title: 'Languages', tags: ['JavaScript', 'C', 'C++'] },
  { icon: '⚛', title: 'Frontend', tags: ['React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3'] },
  { icon: '🖧', title: 'Backend', tags: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth'] },
  { icon: '🗄', title: 'Databases', tags: ['MongoDB', 'MySQL', 'Mongoose'] },
  { icon: '🛠', title: 'Tools', tags: ['Git', 'GitHub', 'Postman', 'Vercel', 'VS Code'] },
  { icon: '🌐', title: 'Languages Spoken', tags: ['English', 'Hindi', 'Urdu', 'Marathi'] },
];

export default function Skills() {
  const eyeRef = useReveal();
  const titleRef = useReveal();

  return (
    <section id="skills">
      <div className="wrap">
        <div ref={eyeRef} className="sey r">Technical Arsenal</div>
        <h2 ref={titleRef} className="st r">What I <em>build</em> with.</h2>
        <div style={s.grid}>
          {SKILLS.map(sk => <SkillCard key={sk.title} {...sk} />)}
        </div>
      </div>
    </section>
  );
}

const s = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: '1.2rem',
  },
};
