import { Clone, useGLTF } from "@react-three/drei";
import { useRef } from "react";

export default function RandomStones() {
  const stone = useGLTF("./stone.glb");
  const stone2 = useGLTF("./stone2.glb");
  const shield = useGLTF("./shield.glb");

  const stoneRef = useRef([]);
  const stone2Ref = useRef([]);
  const shieldRef = useRef([]);

  return (
    <>
      {[...Array(100)].map((value, index) => (
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
      ))}

      {[...Array(100)].map((value, index) => (
        <Clone
          object={stone2.scene}
          ref={(element) => (stone2Ref.current[index] = element)}
          key={index}
          position={[
            (Math.random() - 0.5) * 100,
            (Math.random() - 0.5) * 100,
            (Math.random() - 0.5) * 100,
          ]}
          scale={5 + Math.random() * 2}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
        />
      ))}

      {[...Array(100)].map((value, index) => (
        <Clone
          object={shield.scene}
          ref={(element) => (shieldRef.current[index] = element)}
          key={index}
          position={[
            (Math.random() - 0.5) * 100,
            (Math.random() - 0.5) * 100,
            (Math.random() - 0.5) * 100,
          ]}
          scale={5 + Math.random() * 2}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
        />
      ))}
    </>
  );
}

useGLTF.preload("./stone.glb");
useGLTF.preload("./stone2.glb");
useGLTF.preload("./shield.glb");
