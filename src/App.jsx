import { Canvas } from "@react-three/fiber";
import ExperienceStone from "./experience-stone/ExperienceStone";
import { Suspense } from "react";
import { Html, Scroll, ScrollControls } from "@react-three/drei";
import { Switch } from "wouter";
import { Route } from "wouter";
import AboutMe from "./components/sections/AboutMe";

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
              LOADING ...
            </Html>
          }
        >
          <ScrollControls pages={4}>
            <Scroll>
              <Switch>
                <Route path="/" />
                <Route path="/aboutme">
                  <AboutMe />
                </Route>
              </Switch>
              <ExperienceStone />
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </>
  );
}
