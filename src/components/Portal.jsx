import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { DoubleSide } from "three";

const Portal = () => {
  const model = useGLTF("/models/portal.glb");
  const mask = useGLTF("/models/portal_mask.glb");

  useEffect(() => {
    if (!model) return;
    let mesh = model.scene.children[0];
    mesh.material.envMapIntensity = 3.5;

    let maskMesh = mask.scene.children[0];

    maskMesh.material.side = DoubleSide;
  }, [model, mask]);
  return (
    <>
      <primitive object={model.scene} />
      <primitive object={mask.scene} />
    </>
  );
};
export default Portal;
