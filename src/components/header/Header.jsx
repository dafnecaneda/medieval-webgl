import { Html } from "@react-three/drei";
import { Suspense } from "react";
import { Link } from "wouter";

export default function Header() {
  return (
    <>
      <Suspense fallback={null}>
        <div class="header">
          <Link className="active" to="/">
            HOME
          </Link>
          {/* <span class="space active">ABOUT</span> */}
          <Link to="/aboutme">ABOUT</Link>
          {/* <span>PROJECTS</span> */}
          <Link to="/">CONTACT</Link>
          {/* <span>CONTACT</span> */}
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
