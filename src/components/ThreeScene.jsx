import {
  Environment,
  Float,
  OrbitControls,
  PerspectiveCamera,
  Sparkles,
} from "@react-three/drei";
import FloatingIsland from "./FloatingIsland";
import Portal from "./Portal";
import Rocks from "./Rocks";
import Trees from "./Trees";
import Words from "./Words";
import Grass from "./Grass";
import {
  BrightnessContrast,
  ChromaticAberration,
  DepthOfField,
  EffectComposer,
  HueSaturation,
} from "@react-three/postprocessing";

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
      <Float speed={0.8} rotationIntensity={0.6} floatIntensity={0.6}>
        <Portal />
        <FloatingIsland />
        <Rocks />
        <Trees />
        <Words />
        <Grass />
      </Float>

      <EffectComposer stencilBuffer={true}>
        <DepthOfField
          focusDistance={0.012}
          focalLength={0.015}
          bokehScale={7}
        />
        <HueSaturation hue={0} saturation={-0.15} />
        <BrightnessContrast brightness={0.0} contrast={0.035} />
      </EffectComposer>
      <Sparkles
        count={60}
        color={"#ffaacc"}
        scale={[4, 4, 4]}
        size={4}
        noise={0.2}
        position={[1, 8, -4]}
      />

      <Sparkles
        count={60}
        color={"#ffe6a8"}
        scale={[8, 8, 4]}
        size={5}
        noise={0.2}
        position={[1, 8, -2]}
      />
      <OrbitControls target={[1, 5, 0]} maxPolarAngle={Math.PI * 0.5} />
    </>
  );
};

export default ThreeScene;
