import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    if (window.matchMedia('(hover: none)').matches) return;

    let mx = 0, my = 0;
    let rx = 0, ry = 0;
    let rafId: number;

    const move = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY

      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`
    }

    const animate = () => {
      rx += (mx - rx) * 0.14
      ry += (my - ry) * 0.14

      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`

      rafId = requestAnimationFrame(animate)
    }

    animate();

    document.addEventListener('mousemove', move)

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener('mousemove', move)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="fixed w-2 h-2 bg-[#4f9cf9] rounded-full pointer-events-none z-999"
        style={{ top: 0, left: 0 }}
      />

      <div
        ref={ringRef}
        className="fixed w-10 h-10 border border-[#4f9cf980] rounded-full pointer-events-none z-999"
        style={{ top: 0, left: 0 }}
      />
    </>
  )
}