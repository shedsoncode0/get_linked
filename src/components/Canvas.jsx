import React from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

const CanvasSpace = () => {
  return (
    <Canvas className="w-[200px]" shadows>
      <color  attach="background" args={["#150E28"]} />
      <Experience />
    </Canvas>
  );
};
// #150E28
export default CanvasSpace;
