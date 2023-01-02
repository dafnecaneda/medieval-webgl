import { Center, useGLTF} from "@react-three/drei";
export default function StoneModel() {
  const wappenhalter = useGLTF("./wappenhalter-transformed.glb");
  return (
    <>
      <Center>
        <primitive object={wappenhalter.scene} position-y={8} scale={6} />
      </Center>
    </>
  );
}
