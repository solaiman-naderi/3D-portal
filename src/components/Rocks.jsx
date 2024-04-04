import { useGLTF } from "@react-three/drei";

const Rocks = () => {
  const rock1 = useGLTF("/models/floating_rock_1.glb");
  const rock2 = useGLTF("/models/floating_rock_2.glb");
  const rock3 = useGLTF("/models/floating_rock_3.glb");

  return (
    <>
      <primitive object={rock1.scene} position={[-20.5, -7, -19]} />
      <primitive object={rock2.scene} position={[-5, 10, -33]} />
      <primitive object={rock3.scene} position={[20, 3.5, -9]} />
    </>
  );
};
export default Rocks;
