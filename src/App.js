import { Suspense } from "react";
import ThreeScene from "./components/ThreeScene";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <Suspense>
      <Canvas>
        <ThreeScene />
      </Canvas>
    </Suspense>
  );
}

export default App;
