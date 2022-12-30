// import Texto3D from "./Texto3D";
import { OrbitControls } from "@react-three/drei";
// import PhysicsWorld from "../experience-stone/PhysicsWorld";
import SkyBox from "./Sky";
import StoneModel from "./Models";

import RandomStones from "./RandomStones";

export default function ExperienceStone() {
  return (
    <>
      <OrbitControls makeDefault autoRotate />
      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      {/* 
      <PhysicsWorld /> */}
      <SkyBox />

      <RandomStones />
      <StoneModel />
    </>
  );
}
