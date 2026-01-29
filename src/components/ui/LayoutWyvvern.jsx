const LayoutWyvvern = () => {
  // Classes communes de positionnement pour toutes les images - RELATIVE pour suivre le flow
  const positionClasses = "hidden rotate-200 w-2/3 ml-auto pointer-events-none absolute xl:block xl:right-170 xl:-bottom-61";
  
  return (
    <>
      {/* Corps du dragon - z-0 (derrière les cartes) */}
      <img 
        src="assets/borderdragon.png" 
        className={`${positionClasses} z-0`}
        alt="" 
      />
      
      {/* Griffe droite - z-40 (devant les cartes) */}
      <img 
        src="assets/borderdragonrighthandgriffe.png" 
        className={`${positionClasses} z-40`}
        alt="" 
      />
      
      {/* Griffe gauche - z-40 (devant les cartes) */}
      <img 
        src="assets/borderdragonlefthandgriffe.png" 
        className={`${positionClasses} z-40`}
        alt="" 
      />
    </>
  )
}

export default LayoutWyvvern
