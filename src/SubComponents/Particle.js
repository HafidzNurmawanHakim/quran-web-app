import React from "react";
import config from "../config/particlesjs-config.json";
import Particles from "react-tsparticles";

const Particle = () => {
  return (
    <div>
      <Particles style={{ position: "absolute", width: "100%", height: "100%", top: 0, zIndex: "-1" }} params={config} />
    </div>
  );
};

export default Particle;
