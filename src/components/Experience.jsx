import {
  Center,
  Float,
  OrbitControls,
  PresentationControls,
  Text3D,
} from "@react-three/drei";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import * as THREE from "three"; // Import Three.js

const Experience = () => {
  const targetDate = new Date("2023-11-18T00:00:00").getTime();
  const [timeRemaining, setTimeRemaining] = useState(
    targetDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date().getTime();
      const remaining = targetDate - currentDate;

      if (remaining <= 0) {
        clearInterval(interval);
        setTimeRemaining(0);
      } else {
        setTimeRemaining(remaining);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const hours = String(
    Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  const minutes = String(
    Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const seconds = String(
    Math.floor((timeRemaining % (1000 * 60)) / 1000)
  ).padStart(2, "0");

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={10} />
      {/* <PresentationControls> */}
      {/* <Float> */}
      <Center>
        <group>
          <group position={[-6.7, 0.6, 0]}>
            <Text3D
              curveSegments={32}
              bevelEnabled
              bevelSize={0.008}
              bevelThickness={0.06}
              lineHeight={0.5}
              letterSpacing={0.01}
              size={2}
              height={0.05}
              font="/Unica One_Regular.json"
            >
              {hours}
              <meshStandardMaterial color="white" />
            </Text3D>
            <Text3D
              position={[3.1, 0, 0]}
              curveSegments={32}
              bevelEnabled
              bevelSize={0.008}
              bevelThickness={0.06}
              lineHeight={0.5}
              letterSpacing={0.01}
              size={1}
              height={0.05}
              font={"/Unica One_Regular.json"}
            >
              h
              <meshStandardMaterial color="white" />
            </Text3D>
          </group>
          {/*  */}
          {/*  */}
          <group position={[-1.7, 0.6, 0]}>
            <Text3D
              curveSegments={32}
              bevelEnabled
              bevelSize={0.008}
              bevelThickness={0.06}
              lineHeight={0.5}
              letterSpacing={0.01}
              size={2}
              height={0.05}
              font="/Unica One_Regular.json"
            >
              {minutes}
              <meshStandardMaterial color="white" />
            </Text3D>
            <Text3D
              position={[3.7, 0, 0]}
              curveSegments={32}
              bevelEnabled
              bevelSize={0.008}
              bevelThickness={0.06}
              lineHeight={0.5}
              letterSpacing={0.01}
              size={1}
              height={0.05}
              font="/Unica One_Regular.json"
            >
              m
              <meshStandardMaterial color="white" />
            </Text3D>
          </group>
          {/*  */}
          {/*  */}
          <group position={[4, 0.6, 0]}>
            <Text3D
              curveSegments={32}
              bevelEnabled
              bevelSize={0.008}
              bevelThickness={0.06}
              lineHeight={0.5}
              letterSpacing={0.01}
              size={2}
              height={0.05}
              font="/Unica One_Regular.json"
            >
              {seconds}
              <meshStandardMaterial color="white" />
            </Text3D>
            <Text3D
              position={[3.7, 0, 0]}
              curveSegments={32}
              bevelEnabled
              bevelSize={0.008}
              bevelThickness={0.06}
              lineHeight={0.5}
              letterSpacing={0.01}
              size={1}
              height={0.05}
              font="/Unica One_Regular.json"
            >
              s
              <meshStandardMaterial color="white" />
            </Text3D>
          </group>
        </group>
      </Center>
      {/* </Float> */}
      {/* </PresentationControls> */}
    </>
  );
};

export default Experience;

/* <div className="flex items-baseline">
        <h1>{hours}</h1>
        <span className="text-sm">h</span>
      </div>
      <div className="flex items-baseline">
        <h1>{minutes}</h1>
        <span className="text-sm">m</span>
      </div>
      <div className="flex items-baseline">
        <h1>{seconds}</h1>
        <span className="text-sm">s</span>
      </div> */
