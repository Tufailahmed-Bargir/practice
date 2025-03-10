import { BackgroundLinesDemo } from "@/components/AnimatedHero";
import { WorldMapDemo } from "@/components/map";
import { MacbookScrollDemo } from "@/components/Parallax";
import { HeroParallaxDemo } from "@/components/ScrollHero";
import { BackgroundBeamsWithCollisionDemo } from "@/components/spotlight";
 
 
export default function App(){
  return <div>
    
     
     {/* <BackgroundBeamsWithCollisionDemo /> */}
     <MacbookScrollDemo />
     {/* <BackgroundLinesDemo /> */}
     <HeroParallaxDemo />
     
   
    <WorldMapDemo />
  </div>
}