import ProjectDetails from './ProjectDetails';
import { useState } from 'react';
import { ProjectProps } from './_type';
import { useMediaQuery } from 'react-responsive';

const Project = ({
  title,
  description,
  subDescription,
  tags,
  image,
  href,
  setPreview,
}: ProjectProps) => {
  const [isHidden, setIsHidden] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const handleMouseEnter = () => {
    if (isDesktop) {
      setPreview(image);
    }
  };

  const handleMouseLeave = () => {
    if (isDesktop) {
      setPreview(null);
    }
  };

  return (
    <>
      <div
        className="flex-wrap items-center py-10 justify-between space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {tags?.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className={`flex items-center gap-1 cursor-pointer ${isDesktop ? 'hover-animation' : ''}`}
        >
          Voir le projet
          <img src="assets/arrow-right.webp" alt="arrow-right" className="w-5" />
        </button>
      </div>
      <div className="bg-linear-to-r from-transparent via-neutral-700 to-transparent h-px w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
