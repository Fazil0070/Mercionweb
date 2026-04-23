import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  
  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    
    let mx = 0, my = 0, rx = 0, ry = 0;
    
    const onMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };
    
    document.addEventListener('mousemove', onMouseMove);
    
    let animationFrameId;
    
    const render = () => {
      if (cursor && ring) {
        cursor.style.left = `${mx}px`;
        cursor.style.top = `${my}px`;
        
        // Smooth easing for the ring
        rx += (mx - rx) * 0.15;
        ry += (my - ry) * 0.15;
        
        ring.style.left = `${rx}px`;
        ring.style.top = `${ry}px`;
      }
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>
    </>
  );
}
