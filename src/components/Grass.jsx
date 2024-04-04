import { Text3D, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { Color, DoubleSide } from "three";

const Grass = () => {
  const gltf = useGLTF("/models/grass.glb");

  useEffect(() => {
    if (!gltf) return;

    gltf.scene.children[0].material.alphaToCoverage = true;
    gltf.scene.children[0].material.transparent = true;
    gltf.scene.children[0].material.side = DoubleSide;
    gltf.scene.children[0].material.map =
      gltf.scene.children[0].material.emissiveMap;

    gltf.scene.children[0].material.emissive = new Color(0.5, 0.5, 0.5);
  }, [gltf]);
  return (
    <>
      <primitive object={gltf.scene} />
    </>
  );
};
export default Grass;
