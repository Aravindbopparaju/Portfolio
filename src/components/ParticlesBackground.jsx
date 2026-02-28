import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  return (
    <Particles
      options={{
        particles: {
          number: { value: 60 },
          size: { value: 3 },
          move: { enable: true, speed: 1 },
          links: { enable: true }
        }
      }}
      className="absolute inset-0 -z-10"
    />
  );
};

export default ParticlesBackground;