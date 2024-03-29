import React, { useEffect } from 'react';
import 'particles.js';

const ParticlesComponent = () => {
  useEffect(() => {
    window.particlesJS('particles-js', {
      particles: {
        number: { value: 300, density: { enable: true, value_area: 800 } },
        color: { value: '#ffffff' }, // Set the color to white
        shape: { type: 'circle' },
        opacity: { value: 0.7, random: true, anim: { enable: true, speed: 1, opacity_min: 0 } },
        size: { value: 3, random: true, anim: { enable: false, speed: 4, size_min: 0.3 } },
        line_linked: { enable: false },
        move: { enable: true, speed: 1, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
      },
      interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
        modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
      },
      retina_detect: true
    });
  }, []);

  return (
    <div id="particles-js" className="particles-container"></div>
  );
};

export default ParticlesComponent;
