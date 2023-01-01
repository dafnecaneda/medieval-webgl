// import Texto3D from "./Texto3D";
import {
  FirstPersonControls,
  OrbitControls,
  PresentationControls,
} from "@react-three/drei";

import StoneModel from "./Models";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";
import RandomSwords from "./RandomSwords";
import Sky from "./Sky";

export default function ExperienceStone() {
  return (
    <>
      {/* <OrbitControls makeDefault autoRotate /> */}
      {/* <OrbitControls
        makeDefault
        // enableZoom={false}
      /> */}
      {/* <FirstPersonControls
        makeDefault
        movementSpeed={0.001}
        lookSpeed={0.005}
        lookVertical={false}
      /> */}
      <PresentationControls
        global
        zoom={0.8}
        rotation={[0, 0, 0]}
        polar={[-Math.PI / 6, 0]}
        azimuth={[-Math.PI / 6, 0]}
      >
        <directionalLight castShadow position={[2, -1, 3]} intensity={0.5} />
        <directionalLight castShadow position={[-1, 1, 3]} intensity={2.5} />
        <ambientLight intensity={0.5} />

        <EffectComposer>
          <DepthOfField target={[0, 0, 0]} focusRange={0.15} bokehScale={8} />
        </EffectComposer>
        <Sky />

        <RandomSwords />
        <StoneModel />
      </PresentationControls>
    </>
  );
}
