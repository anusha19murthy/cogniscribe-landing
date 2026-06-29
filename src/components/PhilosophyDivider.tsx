import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function PhilosophyDivider() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 600);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return (
    <section style={{
      width: '100%',
      background: '#ffffff',
      padding: isMobile ? '40px 5%' : '60px 5%',
      fontFamily: "'Montserrat', sans-serif",
      boxSizing: 'border-box',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7 }}
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          gap: isMobile ? 16 : 32,
          maxWidth: 1000,
          margin: '0 auto',
        }}
      >
        {!isMobile && (
          <div style={{
            flex: 1,
            height: 1,
            background: 'linear-gradient(to right, transparent, rgba(65,105,225,0.2))',
          }} />
        )}

        <p style={{
          fontSize: isMobile ? '1.25rem' : 'clamp(1.4rem, 2.5vw, 2rem)',
          fontWeight: 700,
          fontStyle: 'italic',
          color: '#2D3748',
          textAlign: 'center',
          margin: 0,
          flexShrink: 1,
          maxWidth: isMobile ? '100%' : 600,
          lineHeight: 1.4,
          wordWrap: 'break-word',
        }}>
          Where clinical thinking meets structured execution.
        </p>

        {!isMobile && (
          <div style={{
            flex: 1,
            height: 1,
            background: 'linear-gradient(to left, transparent, rgba(65,105,225,0.2))',
          }} />
        )}
      </motion.div>
    </section>
  );
}