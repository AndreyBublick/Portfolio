import {  useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";

// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

export const Particle = () => {
    const [ init, setInit ] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

   

    return (
         <Particles
            id="tsparticles"
            /* @ts-ignore */
            options={{
              background: {
                  color: {
                      value: "transparent",
                  },
              },
              fpsLimit: 120,
              interactivity: {
                  events: {
                      /* onClick: {
                          enable: true,
                          mode: "push",
                      }, */
                      onHover: {
                          enable: true,
                          mode: "repulse",
                      },
                      /* @ts-ignore */
                      resize: true,
                  },
                  modes: {
                      push: {
                          quantity: 4,
                      },
                      repulse: {
                          distance: 200,
                          duration: 0.4,
                      },
                  },
              },
              particles: {
                  color: {
                      value: "#ee82ee",
                  },
                  links: {
                      color: "#0e00ee",
                      distance: 150,
                      enable: true,
                      opacity: 0.5,
                      width: 1,
                  },
                  move: {
                      direction: "none",
                      enable: true,
                      outModes: {
                          default: "bounce",
                      },
                      random: false,
                      speed: 2,
                      straight: false,
                  },
                  number: {
                      density: {
                          enable: true,
                      /* @ts-ignore */

                          area: 1000,
                      },
                      value: 50,
                  },
                  opacity: {
                      value: 0.5,
                  },
                  shape: {
                      type: "circle",
                  },
                  size: {
                      value: { min: 0.5, max: 1 },
                  },
              },
              detectRetina: true,
          }}
        />);
};