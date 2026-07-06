import { useEffect, useState } from 'react';

const LayoutWyvvern = () => {
  const [isZoomNormal, setIsZoomNormal] = useState(true);

  useEffect(() => {
    const checkZoom = () => {
      // Détecte si le zoom est différent de 100% (avec une tolérance de 1%)
      const zoom = window.devicePixelRatio || 1;
      const isNormal = Math.abs(zoom - 1) < 0.01;
      setIsZoomNormal(isNormal);
    };

    // Vérifie au montage
    checkZoom();

    // Vérifie lors du resize (zoom inclus)
    window.addEventListener('resize', checkZoom);

    return () => window.removeEventListener('resize', checkZoom);
  }, []);

  // Classes communes de positionnement pour toutes les images - RELATIVE pour suivre le flow
  const positionClasses =
    'hidden rotate-200 w-2/3 ml-auto pointer-events-none absolute xl:block xl:right-170 xl:-bottom-61';

  // Si le zoom n'est pas normal, on ne rend rien
  if (!isZoomNormal) return null;

  return (
    <>
      {/* Corps du dragon - z-0 (derrière les cartes) */}
      <img src="assets/borderdragon.webp" className={`${positionClasses} z-0`} alt="" />

      {/* Griffe droite - z-40 (devant les cartes) */}
      <img
        src="assets/borderdragonrighthandgriffe.webp"
        className={`${positionClasses} z-40`}
        alt=""
      />

      {/* Griffe gauche - z-40 (devant les cartes) */}
      <img
        src="assets/borderdragonlefthandgriffe.webp"
        className={`${positionClasses} z-40`}
        alt=""
      />
    </>
  );
};

export default LayoutWyvvern;
