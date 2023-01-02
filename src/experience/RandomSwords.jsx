import { Clone, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function RandomSwords() {
  const sword = useGLTF("./sword.glb");
  const swordRef = useRef([]);

  useFrame((state, delta) => {
    for (const swords of swordRef.current) {
      swords.rotation.z += delta * 0.9;
    }
  });

  return (
    <>
      {[...Array(100)].map((value, index) => (
        <Clone
          object={sword.scene}
          ref={(element) => (swordRef.current[index] = element)}
          key={index}
          position={[
            (Math.random() - 0.5) * 100,
            (Math.random() - 0.5) * 100,
            (Math.random() - 0.5) * 100,
          ]}
          scale={7 + Math.random() * 0.2}
          rotation={[-2, 0, 0]}
        />
      ))}
    </>
  );
}

useGLTF.preload("./sword.glb");
