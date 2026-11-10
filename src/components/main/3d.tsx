import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Circle, useProgress } from "@react-three/drei";
import { GLTFLoader, OrbitControls } from "three/examples/jsm/Addons.js";
import Stats from "three/examples/jsm/libs/stats.module.js";
import Scene from "../components/Scene";

const ThreeD = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Scene />
    </div>
  );
};

export default ThreeD;
