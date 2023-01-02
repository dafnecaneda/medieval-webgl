import { OrbitControls } from "@react-three/drei";
import StoneModel from "./Models";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";
import RandomSwords from "./RandomSwords";
import Sky from "./Sky";

export default function Experience() {
  return (
    <>
      <OrbitControls makeDefault enableZoom={false} />

      <directionalLight position={[2, -1, 3]} intensity={0.5} />
      <directionalLight position={[-2, 1, 3]} intensity={2.5} />
      <ambientLight intensity={0.5} />

      <EffectComposer>
        <DepthOfField target={[0, 0, 0]} focusRange={0.15} bokehScale={8} />
      </EffectComposer>
      <Sky />

      <RandomSwords />
      <StoneModel />
    </>
  );
}
