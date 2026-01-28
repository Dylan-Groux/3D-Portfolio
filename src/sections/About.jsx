const About = () => {
  return (
    <section className="c-space section-spacing" href="#about">
      <h2 className="text-heading">About Section</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1 relative overflow-hidden group">
            <img 
                src="assets/grid-5-meanddragon.png" 
                alt="" 
                className="absolute scale-[1.25] -bottom-5 -right-4 md:scale-[1.8] md:bottom-30 xl:scale-[1.25] xl:-bottom-5 transition-transform duration-500"
            />
            <div className="z-10 md:hover:bg-black/70 md:transition-colors md:duration-500 md:p-4 md:rounded-md">
                <h3 className="headtext">Dylan — Développeur Full-Stack</h3>
                <p className="subtext1">
                    Symfony • React • API REST
                </p>
                <p className="subtext2">
                    10+ projets personnels
                </p>
            </div>
        </div>
        {/* Grid 2 - Stack Technique */}
        <div className="grid-default-color grid-2 relative overflow-hidden group">
            <img src="assets/grid-2-languagedragon.png" alt="" className="absolute scale-[1.95] -left-1 md:scale-[1.85] md:bottom-5 md:left-3">
            </img>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/80 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-center z-10 p-6">
                    <h3 className="headtext mb-3">Stack Principale</h3>
                    <p className="subtext1 text-lg">
                        PHP • Symfony • React
                    </p>
                </div>
            </div>
        </div>
        {/* Grid 3 */}
        <div className="flex items-end grid-black-color grid-3 group cursor-pointer perspective:1000px">
            <div className="relative w-full h-full transition-transform duration-1200 transform-3d group-hover:[transform:rotateY(180deg)]">
                {/* Face avant (image) */}
                <div className="absolute inset-0 flex items-end [backface-visibility:hidden]">
                    <img 
                        src="assets/grid-3-ctadragon.png" 
                        alt="" 
                        className="absolute scale-[1.75] -bottom-10 left-9.5 md:scale-[1.75] md:-bottom-2 xl:scale-[1.25] xl:-bottom-25"
                    />
                </div>
                
                {/* Face arrière (texte) */}
                <div className="absolute inset-0 flex items-center justify-center p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <div className="text-center z-10">
                        <h3 className="headtext mb-4">Contactez-moi</h3>
                        <p className="subtext2 mb-6">
                            Discutons de votre prochain projet
                        </p>
                        <a href="#contact" className="btn">Contactez-moi</a>
                    </div>
                </div>
            </div>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4 relative overflow-hidden group">
            <img src="assets/grid-4-architectedragon.png" 
            alt="" 
            className="absolute scale-[1.75] -bottom-25 md:scale-[2.25] md:-bottom-15 xl:scale-[2.0] xl:-bottom-25">
            </img>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/80 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-center z-10 p-6">
                    <h3 className="headtext mb-3">Focus Back-End</h3>
                    <p className="subtext1 mb-2">
                        Symfony • API REST • Clean Code
                    </p>
                    <p className="subtext2">
                        Appétence pour l'architecture et la testabilité
                    </p>
                </div>
            </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5 relative overflow-hidden !p-0">
            <div className="flex flex-col md:flex-row h-full">
                {/* Partie Image */}
                <div className="hidden w-full h-48 md:block md:w-1/2 md:h-full relative overflow-hidden">
                    <img src="assets/grid-1-codingdragonn.png" 
                    alt="" 
                    className="absolute scale-[1.5] -bottom-10 left-1/2 -translate-x-1/2 md:scale-[2.0] md:-bottom-5 md:left-0 md:translate-x-0 xl:scale-[1.5] xl:-bottom-15">
                    </img>
                </div>
                {/* Partie Texte */}
                <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-8 xl:p-10 z-10">
                    <div>
                        <h3 className="headtext mb-3">Réalisations</h3>
                        <p className="subtext1 text-base md:text-base mb-3 md:mb-4">
                            Projets full-stack & polyvalents
                        </p>
                        <ul className="subtext2 text-xs md:text-sm space-y-1.5 md:space-y-2">
                            <li>• Plateforme de mise en relation (Symfony)</li>
                            <li>• API REST personnalisée (TypeScript)</li>
                            <li>• Médiathèque • Bots Python • Générateurs</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
