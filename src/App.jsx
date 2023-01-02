import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, Scroll, ScrollControls } from "@react-three/drei";
import { Switch, Route } from "wouter";
import Experience from "./experience/Experience";
import Texto from "./components/texto/Texto";
import AboutMe from "./components/about-me/AboutMe";

export default function App() {
  return (
    <>
      <Canvas
        shadows
        camera={{
          fov: 45,

          position: [-3, 4, 6],
        }}
      >
        <Suspense
          fallback={
            <Html center className="loader">
              LOADING ...
            </Html>
          }
        >
          {/* <ScrollControls pages={4}>
            <Scroll> */}
          <Switch>
            <Route path="/" />
            <Route path="/aboutme">
              <AboutMe />
            </Route>
          </Switch>
          <Experience />
          <Texto />
          {/* </Scroll>
          </ScrollControls> */}
        </Suspense>
      </Canvas>
    </>
  );
}
