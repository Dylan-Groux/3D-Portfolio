import HeroText from "../components/HeroText"
import ParallaxBackground from "../components/ParallaxBackground"
import { Canvas, useFrame } from "@react-three/fiber"
import { useMediaQuery } from "react-responsive"
import { Wyvern } from "../components/Wyvern"
import { easing } from "maath"
import { Float } from "@react-three/drei"

function Rig({ isMobile }) {
  return useFrame((state, delta) => {
    if (isMobile) {
      // Sur mobile : caméra centrée avec moins de mouvement
      easing.damp3(
        state.camera.position,
        [state.pointer.x, -5 + state.pointer.y, 12],
        0.5,
        delta
      )
    } else {
      // Sur desktop : comportement original
      easing.damp3(
        state.camera.position,
        [5 + state.pointer.x * 2, -5 + state.pointer.y * 2, 10],
        0.5,
        delta
      )
    }
  })
}

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  
  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen 
    overflow-hidden c-space" href="#home">
        <HeroText />
        <ParallaxBackground />
        <figure className="absolute inset-0" 
        style={{width: "100%", height: "100%"}}>
            <Canvas camera={{ 
              position: isMobile ? [0, -5, 12] : [3, -5, 10], 
              fov: isMobile ? 50 : 35 
            }}>
              <Float>
                <ambientLight intensity={10} />
                <directionalLight position={[1, 1, 0]} intensity={2} color={"purple"} />
                <Wyvern  
                  scale={isMobile ? [4, 4, 4] : [5, 5, 5]} 
                  position={isMobile ? [0, -6.5, 0] : [3, -6.5, 0]} 
                />
              </Float>
              <Rig isMobile={isMobile} />
            </Canvas>
        </figure>
    </section>
  )
}

export default Hero
