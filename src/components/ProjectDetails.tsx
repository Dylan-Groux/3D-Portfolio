import { motion } from 'motion/react';
import { ProjectDetailsProps } from './_type';

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}: ProjectDetailsProps) => {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div
        className="relative max-w-2xl border shadow-sm rounded-2xl bg-linear-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
        >
          <img src="assets/close.svg" alt="close" className="w-6 h-6" />
        </button>
        <img src={image} alt={title} className="w-full rounded-t-2xl aspect-video" />
        <div className="p-4">
          <h5 className="mb-2 text-2-xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription.map((line, index) => (
            <p key={index} className="mb-3 font-normal text-neutral-400">
              {line}
            </p>
          ))}
          <div className="flex items-center justify-between mt-4">
            <div>
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.logo}
                  alt={tag.name}
                  className="w-5 h-5 mb-1 ml-3 inline-block hover-animation"
                />
              ))}
            </div>
            <a
              href={href}
              className="inline-flex items-center gap-1 mr-2 font-medium hover-animation cursor-pointer"
            >
              Voir le projet
              <img src="assets/arrow-up.svg" alt="arrow-up" className="size-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
