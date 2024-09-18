import React from "react";
import { useGLTF, OrthographicCamera } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export function Model(props) {
  const { nodes, materials } = useGLTF("/ball.glb");
  const { camera } = useThree();

  const handleClick = (event, name) => {
    event.stopPropagation();
    console.log(`Clicked on ${name}`);
  };

  return (
    <group {...props} dispose={null}>
      <group scale={0.05}>
        <OrthographicCamera
          makeDefault={false}
          far={100000}
          near={0}
          position={[-135.088, -223.122, 935.26]}
          rotation={[0.247, -0.145, 0.036]}
        />
        <mesh
          geometry={nodes.Sphere.geometry}
          material={nodes.Sphere.material}
          position={[7.529, 17.767, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={3.33}
          onClick={(event) => handleClick(event, "Sphere")}
        />
        <mesh
          geometry={nodes.mesh_1.geometry}
          material={nodes.mesh_1.material}
          position={[7, 15, -10]}
          rotation={[0, -0.122, 0]}
          scale={50}
          onClick={(event) => handleClick(event, "Mesh 1")}
        >
          <meshStandardMaterial color="lightblue" />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/ball.glb");
