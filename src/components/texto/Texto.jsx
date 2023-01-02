import { Html } from "@react-three/drei";
import { Suspense } from "react";
import { Link } from "wouter";

export default function Texto() {
  return (
    <>
      <Suspense fallback={null}>
        <Html>
          <div className="middle">
            <h2>Creative</h2>
            <h1>WEB </h1>
            <h1>DEVELOPER</h1>
          </div>
        </Html>
      </Suspense>
    </>
  );
}
