import React, {useRef} from 'react'
import Contents from './Contents';
import Welcome from './Welcome';
import About from './About';
import Experience from './Experience';

const Home = () => {
  const welcomeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  return (
    <>
      <div className="toc">      
        <Contents refs={{welcomeRef, aboutRef, experienceRef}}></Contents>
      </div>
      <div className='outer-container'>
        <Welcome aboutRef={aboutRef} ref={welcomeRef}></Welcome>
        <About ref={aboutRef}></About>
        <Experience ref={experienceRef}></Experience>
      </div>
      <style> {`
        .toc {
          position: sticky;
          top: 56px;
          padding-left: 56px;
          z-index: 1000;
          height: 0;
        }
        .outer-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      `} </style>
    </>
  )
}

export default Home;