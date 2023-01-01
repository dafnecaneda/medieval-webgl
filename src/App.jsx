import { Canvas } from "@react-three/fiber";
import ExperienceStone from "./experience-stone/ExperienceStone";
import { Suspense } from "react";
import { Html } from "@react-three/drei";

export default function App() {
  return (
    <>
      <Canvas
        shadows
        camera={{
          fov: 90,

          position: [-3, 3, 6],
        }}
      >
        <Suspense
          fallback={
            <Html center className="loader">
              LOADING
            </Html>
          }
        >
          <ExperienceStone />
        </Suspense>
      </Canvas>
    </>
  );
}
