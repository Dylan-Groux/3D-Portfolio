const About = () => {
  return (
    <section className="c-space section-spacing" href="#about">
      <h2 className="text-heading">About Section</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1 relative overflow-hidden group">
            <img 
                src="assets/grid-1-codingdragonn.png" 
                alt="" 
                className="absolute scale-[1.75] -bottom-25 -right-4 md:scale-[2.5] md:bottom-5 transition-transform duration-500 group-hover:scale-[1.85] md:group-hover:scale-[2.6]"
            />
            <div className="z-10">
                <h3 className="headtext">Dylan — Développeur Full-Stack</h3>
                <p className="subtext1">
                    3 ans d'expertise en développement
                </p>
                <p className="subtext2">
                    Passionné par le code depuis toujours, je crée des expériences web immersives
                </p>
            </div>
        </div>
        {/* Grid 2 */}
        <div className="flex items-end grid-default-color grid-2">
            <img src="assets/grid-3-ctadragon.png" 
            alt="" 
            className="absolute scale-[1.75] -bottom-10 md:scale-[1.75] md:-bottom-2 xl:scale-[1.25] xl:-bottom-25">
            </img>
        </div>
        {/* Grid 3 */}
        <div className="flex items-end grid-black-color grid-3">
            <img src="assets/grid-2-languagedragon.png" alt="" className="absolute scale-[1.95] -left-1 md:scale-[1.80] md:bottom-5 md:left-3">
            </img>
        </div>
        {/* Grid 4 */}
        <div className="flex items-end grid-special-color grid-4">
            <img src="assets/grid-4-architectedragon.png" 
            alt="" 
            className="absolute scale-[1.75] -bottom-25 md:scale-[2.25] md:-bottom-5">
            </img>
        </div>
        {/* Grid 5 */}
        <div className="flex items-end grid-default-color grid-5">
            
        </div>
      </div>
    </section>
  )
}

export default About
