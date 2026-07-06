import { myProjects } from '../constants';
import Project from '../components/Project';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const Projects = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    if (!isDesktop) {
      return;
    }

    x.set(event.clientX + 20);
    y.set(event.clientY + 20);
  };
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!isDesktop) {
      setPreview(null);
    }
  }, [isDesktop]);

  return (
    <section onMouseMove={handleMouseMove} className="relative c-space mt-50" id="work">
      <h2 className="text-heading"> Projects </h2>
      <div className="bg-linear-to-r from-transparent via-neutral-700 to-transparent mt-12 h-px w-full" />
      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}
      {isDesktop && preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          style={{ x: springX, y: springY }}
          src={preview}
        />
      )}
    </section>
  );
};

export default Projects;
