import { Float, useGLTF } from "@react-three/drei";

const Rocks = () => {
  const rock1 = useGLTF("/models/floating_rock_1.glb");
  const rock2 = useGLTF("/models/floating_rock_2.glb");
  const rock3 = useGLTF("/models/floating_rock_3.glb");

  return (
    <>
      <Float
        speed={3}
        rotationIntensity={1.6}
        floatIntensity={0.6}
        position={[-20.5, -7, -19]}
      >
        <primitive object={rock1.scene} />
      </Float>
      <Float
        speed={1}
        rotationIntensity={1.6}
        floatIntensity={0.6}
        position={[-5, 10, -33]}
      >
        <primitive object={rock2.scene} />
      </Float>

      <Float
        speed={2}
        rotationIntensity={1.6}
        floatIntensity={0.6}
        position={[15, 3.5, -9]}
      >
        <primitive object={rock3.scene} />
      </Float>
    </>
  );
};
export default Rocks;
