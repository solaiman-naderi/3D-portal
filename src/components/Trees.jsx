import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

const Trees = () => {
  const gltf = useGLTF("/models/trees.glb");
  useEffect(() => {
    if (!gltf) return;

    let mesh = gltf.scene.children[0];
    mesh.material.envMapIntensity = 2.5;
  }, [gltf]);
  return (
    <>
      <primitive object={gltf.scene} />
    </>
  );
};
export default Trees;
