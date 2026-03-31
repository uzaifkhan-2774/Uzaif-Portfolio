import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useReveal } from '../hooks/useReveal';
import FlipCard from './FlipCard';

const GH = 'https://github.com/uzaifkhan-2774';

const PROJECTS = [
  {
    num: '01', badges: ['MERN', 'Full Stack', 'E-Commerce'],
    title: 'E-Commerce Web Application',
    desc: 'Full-featured platform with admin & user interfaces. 500+ products, CRUD operations, optimized search with 200ms response time.',
    metrics: [
      { label: 'User Engagement', width: '40%', val: '+40%' },
      { label: 'Data Consistency', width: '95%', val: '95%' },
      { label: 'Search Speed', width: '80%', val: '200ms' },
    ],
    links: [{ href: GH, label: '↗ Live Demo', ghost: false }, { href: GH, label: '⌥ Code', ghost: true }],
  },
  {
    num: '02', badges: ['React', 'Dashboard', 'Admin'],
    title: 'Admin Panel — E-Commerce',
    desc: 'Product management for 1000+ SKUs with real-time inventory, optimized API calls, and responsive dashboard reducing load from 3.2s to 1.8s.',
    metrics: [
      { label: 'API Calls Reduced', width: '60%', val: '-60%' },
      { label: 'Admin Efficiency', width: '45%', val: '+45%' },
      { label: 'Load Time', width: '75%', val: '1.8s' },
    ],
    links: [{ href: GH, label: '↗ Live Demo', ghost: false }, { href: GH, label: '⌥ Code', ghost: true }],
  },
  {
    num: '03', badges: ['React', 'REST API', 'Real-time'],
    title: 'Global News Web App',
    desc: 'Real-time news platform covering 10+ categories, 2-second refresh, 1000+ concurrent users with 80% latency reduction.',
    metrics: [
      { label: 'Latency Reduced', width: '80%', val: '-80%' },
      { label: 'Discoverability', width: '60%', val: '+60%' },
      { label: 'Concurrent Users', width: '85%', val: '1000+' },
    ],
    links: [{ href: GH, label: '⌥ Repository', ghost: true }],
  },
  {
    num: '04', badges: ['React', 'API', 'UI/UX'],
    title: 'Weather Application',
    desc: 'Real-time weather for 200,000+ locations worldwide. Auto-complete search, theme customization, 85% reduction in failed API calls.',
    metrics: [
      { label: 'User Retention', width: '35%', val: '+35%' },
      { label: 'Search Time', width: '70%', val: '-70%' },
      { label: 'API Errors', width: '85%', val: '-85%' },
    ],
    links: [{ href: GH, label: '↗ Live Demo', ghost: false }, { href: GH, label: '⌥ Code', ghost: true }],
  },
  {
    num: '05', badges: ['React', 'Healthcare', 'Booking'],
    title: 'BPL Medical Website',
    desc: 'Healthcare platform with appointment booking — 200+ daily bookings, 99% mobile compatibility across 15+ devices, 25% higher conversion.',
    metrics: [
      { label: 'Conversion Rate', width: '25%', val: '+25%' },
      { label: 'Mobile Compat.', width: '99%', val: '99%' },
      { label: 'Daily Bookings', width: '70%', val: '200+' },
    ],
    links: [{ href: GH, label: '↗ Live Demo', ghost: false }, { href: GH, label: '⌥ Code', ghost: true }],
  },
  {
    num: '06', badges: ['React', 'Firebase', 'Real-time'],
    title: 'Mail Application',
    desc: 'Real-time email client — 5000+ active users, Firebase auth, rich text editor, dark/light mode, 50% faster email composition.',
    metrics: [
      { label: 'Active Users', width: '90%', val: '5000+' },
      { label: 'Compose Time', width: '50%', val: '-50%' },
      { label: 'Satisfaction', width: '35%', val: '+35%' },
    ],
    links: [{ href: GH, label: '↗ Live Demo', ghost: false }, { href: GH, label: '⌥ Code', ghost: true }],
  },
];

export default function Projects() {
  const eyeRef = useReveal();
  const titleRef = useReveal();
  const hintRef = useReveal();
  const swRef = useRef(null);

  return (
    <section id="projects">
      <div className="wrap">
        <div className="proj-section-top">
          <div>
            <div ref={eyeRef} className="sey r">Portfolio</div>
            <h2 ref={titleRef} className="st r" style={{ marginBottom: 0 }}>
              Featured <em>Projects</em>.
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button className="snbtn" onClick={() => swRef.current?.slidePrev()}>←</button>
            <button className="snbtn" onClick={() => swRef.current?.slideNext()}>→</button>
          </div>
        </div>

        <p ref={hintRef} className="r" style={{
          fontFamily: 'var(--font-mono)', fontSize: 11,
          color: 'var(--muted)', marginBottom: '2rem', letterSpacing: '.05em'
        }}>
          // hover over a card to flip &amp; see project details + links
        </p>

        <Swiper
          className="r"
          modules={[Pagination]}
          slidesPerView={1.1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          breakpoints={{
            600: { slidesPerView: 1.5 },
            900: { slidesPerView: 2.2 },
            1200: { slidesPerView: 3.1 },
          }}
          onSwiper={(sw) => (swRef.current = sw)}
        >
          {PROJECTS.map(p => (
            <SwiperSlide key={p.num}>
              <FlipCard {...p} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
