import { Html } from "@react-three/drei";
import { Suspense } from "react";

export default function Header() {
  return (
    <>
      <Suspense fallback={null}>
        <div class="header">
          <span class="space active">ABOUT</span>
          <span>PROJECTS</span>
          <span>CONTACT</span>
        </div>
        <div class="middle">
          <h2>Creative</h2>
          <h1>WEB </h1>
          <h1>DEVELOPER</h1>
        </div>
      </Suspense>
    </>
  );
}
