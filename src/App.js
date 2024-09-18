import "./App.css";
import { Model } from "./Ball";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        {/* <directionalLight position={[5, 5, 5]} intensity={1} /> */}
        <ambientLight intensity={1} color="lightblue" />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="yellow" />
        <hemisphereLight
          skyColor={"white"}
          groundColor={"brown"}
          intensity={1}
          position={[0, 50, 0]}
        />
        <Model />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
