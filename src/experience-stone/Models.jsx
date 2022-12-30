import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
export default function StoneModel() {
  const stone = useLoader(GLTFLoader, "./stone.glb");
  const wappenhalter = useLoader(GLTFLoader, "./wappenhalter.glb");
  const shield = useLoader(GLTFLoader, "./shield.glb");

  return (
    <>
      <primitive object={wappenhalter.scene} position-y={-3} scale={5} />
    </>
  );
}
