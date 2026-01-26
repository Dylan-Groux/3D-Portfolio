import HeroText from "../components/HeroText"
import ParallaxBackground from "../components/ParallaxBackground"
import { Canvas, useFrame } from "@react-three/fiber"
import { useMediaQuery } from "react-responsive"
import { Wyvern } from "../components/Wyvern"
import { easing } from "maath"
import { Float } from "@react-three/drei"

const Hero = () => {
    const isMobile =useMediaQuery({ maxWidth: 853 });
  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen 
    overflow-hidden c-space">
        <HeroText />
        <ParallaxBackground />
        <figure className="absolute inset-0" 
        style={{width: "100%", height: "100%"}}>
            <Canvas camera={{ position: [3, -5, 10], fov: 35 }}>
              <Float>
                <ambientLight intensity={10} />
                <directionalLight position={[1, 1, 0]} intensity={2} color={"purple"} />
                <Wyvern  scale={[ isMobile ? 5 : 5, 5, 5]} position={[ isMobile ? 2.5 : 3, -6.5, 0]} />
                <Rig />
              </Float>
            </Canvas>
        </figure>
    </section>
  )
}

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [5 + state.pointer.x * 2, -5 + state.pointer.y * 2, 10],
      0.5,
      delta
    )
  })
}

export default Hero
