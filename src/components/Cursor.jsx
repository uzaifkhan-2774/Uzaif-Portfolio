import { useEffect, useRef } from 'react';

export default function Cursor() {
  const curRef = useRef(null);
  const curRRef = useRef(null);
  const mx = useRef(0), my = useRef(0);
  const cx = useRef(0), cy = useRef(0);

  useEffect(() => {
    const onMove = (e) => { mx.current = e.clientX; my.current = e.clientY; };
    document.addEventListener('mousemove', onMove);

    let rafId;
    const loop = () => {
      cx.current += (mx.current - cx.current) * 0.1;
      cy.current += (my.current - cy.current) * 0.1;
      if (curRef.current) {
        curRef.current.style.left = mx.current + 'px';
        curRef.current.style.top = my.current + 'px';
      }
      if (curRRef.current) {
        curRRef.current.style.left = cx.current + 'px';
        curRRef.current.style.top = cy.current + 'px';
      }
      rafId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div id="cur" ref={curRef} />
      <div id="cur-r" ref={curRRef} />
    </>
  );
}
