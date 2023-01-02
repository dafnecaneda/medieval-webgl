import { useThree } from "@react-three/fiber";
import { CubeTextureLoader } from "three";

export default function Sky() {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
  const texture = loader.load([
    "./sky/xpos.png",
    "./sky/xneg.png",
    "./sky/ypos.png",
    "./sky/yneg.png",
    "./sky/zpos.png",
    "./sky/zneg.png",
  ]);

  // Set the scene background property to the resulting texture.
  scene.background = texture;
  return null;
}
