import { Text3D, useMatcapTexture } from "@react-three/drei";
import { InstancedRigidBodies, Physics, RigidBody } from "@react-three/rapier";
import { useMemo } from "react";
import { useRef } from "react";

export default function PhysicsWorld() {
  const [matcapTexture] = useMatcapTexture("7B5254_E9DCC7_B19986_C8AC91", 256);

  const cubesCount = 50;
  const cubes = useRef();
  const cubeTransforms = useMemo(() => {
    const positions = [];
    const rotations = [];
    const scales = [];

    for (let i = 0; i < cubesCount; i++) {
      positions.push([
        (Math.random() - 0.5) * 8,
        6 + i * 0.2,
        (Math.random() - 0.5) * 8,
      ]);
      rotations.push([Math.random(), Math.random(), Math.random()]);

      const scale = 0.2 + Math.random() * 0.8;
      scales.push([scale, scale, scale]);
    }

    return { positions, rotations, scales };
  }, []);

  return (
    <>
      <Physics gravity={[0, -9.81, 0]}>
        <InstancedRigidBodies
          positions={cubeTransforms.positions}
          rotations={cubeTransforms.rotations}
          scales={cubeTransforms.scales}
        >
          <instancedMesh
            ref={cubes}
            castShadow
            receiveShadow
            args={[null, null, cubesCount]}
          >
            <boxGeometry />
            <meshStandardMaterial wireframe color="red" />
          </instancedMesh>
        </InstancedRigidBodies>

        <RigidBody>
          <Text3D
            font="./fonts/Syne_Regular.json"
            size={0.75}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
            position-y={20}
            position-x={-4}
            position-z={-5}
          >
            Three.js
            <meshMatcapMaterial matcap={matcapTexture} />
          </Text3D>
        </RigidBody>

        <RigidBody>
          <Text3D
            font="./fonts/Syne_Regular.json"
            size={0.75}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
            position-y={20}
            position-x={-3}
            position-z={-4}
          >
            TypeScript
            <meshMatcapMaterial matcap={matcapTexture} />
          </Text3D>
        </RigidBody>

        <RigidBody>
          <Text3D
            font="./fonts/Syne_Regular.json"
            size={0.75}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
            position-y={20}
            position-x={-4}
            position-z={2}
          >
            React.js
            <meshMatcapMaterial matcap={matcapTexture} />
          </Text3D>
        </RigidBody>

        <RigidBody>
          <Text3D
            font="./fonts/Syne_Regular.json"
            size={0.75}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
            position-y={25}
            position-x={-3}
            position-z={2}
          >
            MySQL
            <meshMatcapMaterial matcap={matcapTexture} />
          </Text3D>
        </RigidBody>

        <RigidBody>
          <Text3D
            font="./fonts/Syne_Regular.json"
            size={0.75}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
            position-y={25}
            position-x={4}
            position-z={-5}
          >
            WebGL
            <meshMatcapMaterial matcap={matcapTexture} />
          </Text3D>
        </RigidBody>

        <RigidBody>
          <Text3D
            font="./fonts/Syne_Regular.json"
            size={0.75}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
            position-y={20}
            position-x={-3}
            position-z={-1}
          >
            Node.js
            <meshMatcapMaterial matcap={matcapTexture} />
          </Text3D>
        </RigidBody>

        <RigidBody>
          <Text3D
            font="./fonts/Syne_Regular.json"
            size={0.75}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
            position-y={20}
            position-x={-1}
            position-z={3}
          >
            MongoDB
            <meshMatcapMaterial matcap={matcapTexture} />
          </Text3D>
        </RigidBody>

        <RigidBody>
          <Text3D
            font="./fonts/Syne_Regular.json"
            size={0.75}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
            position-y={11}
            position-x={4}
            position-z={-4}
          >
            Next.js
            <meshMatcapMaterial matcap={matcapTexture} />
          </Text3D>
        </RigidBody>

        <RigidBody type="fixed">
          <mesh position-y={-4}>
            <boxGeometry args={[50, 0.5, 50]} />
            <meshBasicMaterial color="black" />
          </mesh>
        </RigidBody>
      </Physics>
    </>
  );
}
