import { Clone, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function RandomStones() {
  //   const stone = useGLTF("./stone.glb");
  const sword = useGLTF("./sword.glb");
  // const shield = useGLTF("./shield.glb");

  //   const stoneRef = useRef([]);
  const swordRef = useRef([]);
  // const shieldRef = useRef([]);

  useFrame((state, delta) => {
    for (const swords of swordRef.current) {
      swords.rotation.z += delta * 0.9;
    }
  });

  return (
    <>
      {/* {[...Array(100)].map((value, index) => (
        <Clone
          object={stone.scene}
          ref={(element) => (stoneRef.current[index] = element)}
          key={index}
          position={[
            (Math.random() - 0.5) * 100,
            (Math.random() - 0.5) * 100,
            (Math.random() - 0.5) * 100,
          ]}
          scale={0.2 + Math.random() * 0.5}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
        />
      ))} */}

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

      {/* {[...Array(50)].map((value, index) => (
        <Clone
          object={shield.scene}
          ref={(element) => (shieldRef.current[index] = element)}
          key={index}
          position={[
            (Math.random() - 0.5) * 100,
            (Math.random() - 0.5) * 100,
            (Math.random() - 0.5) * 100,
          ]}
          scale={2 + Math.random() * 2}
          rotation={[0, 0, Math.random() * 1]}
        />
      ))} */}
    </>
  );
}

// useGLTF.preload("./stone.glb");
useGLTF.preload("./sword.glb");
// useGLTF.preload("./shield.glb");
