import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
import styled from "styled-components";

const GridContainer = styled.div`
  display: flex;
  z-index:999;
`

const WaveBackground = () => {
  (async () => {
    await loadStarsPreset(tsParticles); 

    await tsParticles.load("tsparticles", {
      preset: "stars",
    });

})()
    return (
      <GridContainer>
      
      </GridContainer>
    )
  }


export default WaveBackground;


// Different Options
// "color"
// "ball"
// "lines"
// "thick"
// "circle"
// "cobweb"
// "polygon"
// "square"
// "tadpole"
// "fountain"
// "random"
// "custom"