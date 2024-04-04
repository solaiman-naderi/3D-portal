import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import FloatingIsland from "./FloatingIsland";
import Portal from "./Portal";
import Rocks from "./Rocks";
import Trees from "./Trees";
import Words from "./Words";

const ThreeScene = () => {
  return (
    <>
      <Environment background="only" files={["/textures/bg.hdr"]} />
      <Environment background={false} files={["/textures/envmap.hdr"]} />

      <PerspectiveCamera
        makeDefault
        fov={50}
        position={[-1.75, 10.85, 20.35]}
      />

      <Portal />
      <FloatingIsland />
      <Rocks />
      <Trees />
      <Words />

      <OrbitControls target={[1, 5, 0]} maxPolarAngle={Math.PI * 0.5} />
    </>
  );
};

export default ThreeScene;
