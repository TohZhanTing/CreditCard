import React, { useEffect, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "./styles.scss";

const CreditCard = () => {
  const [model, setModel] = useState();
  // This Model was made by azzamah, and found at https://sketchfab.com/3d-models/card-130ec74a08b2445c91aae106d738d01e
  useEffect(() => {
    new GLTFLoader().load("./Card/scene.gltf", setModel);
  }, []);

  // models returns if loaded
  return model ? (
    <primitive object={model.scene} position={[0, -10, 0]} />
  ) : null;
};

export default CreditCard;
