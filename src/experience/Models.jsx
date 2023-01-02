import { Center } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
export default function StoneModel() {
  const wappenhalter = useLoader(GLTFLoader, "./wappenhalter.glb");
  return (
    <>
      <Center>
        <primitive object={wappenhalter.scene} position-y={8} scale={6} />
      </Center>
    </>
  );
}
