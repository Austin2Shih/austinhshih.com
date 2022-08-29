import React, {useCallback, useRef, useState} from 'react'
import Contents from './Contents';
import Welcome from './Welcome';
import About from './About';
import Experience from './Experience';
import Portfolio from './Portfolio';

const Home = () => {
  const [activeTOC, setActiveTOC] = useState('welcome');

  const welcomeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const portfolioRef = useRef(null);

  const refs = [
    {
      ref: welcomeRef, 
      name: 'welcome'
    }, 
    {
      ref: aboutRef, 
      name: 'about'
    }, 
    {
      ref: experienceRef, 
      name: 'experience'
    }, 
    {
      ref: portfolioRef, 
      name: 'portfolio'
    }
  ]

  const handleScroll = useCallback(() => {
    for (let i = refs.length - 1; i >= 0; i--) {
      if (refs[i].ref.current) {
        if (window.pageYOffset + window.innerHeight * 0.3 >= refs[i].ref.current.offsetTop) {
          setActiveTOC(refs[i].name);
          break
        }
      }
    }
  }, [window, refs])

  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleScroll)

  return (
    <>
      <div className="toc">      
        <Contents activeTOC={activeTOC} refs={{welcomeRef, aboutRef, experienceRef, portfolioRef}}></Contents>
      </div>
      <div className='outer-container'>
        <Welcome aboutRef={aboutRef} ref={welcomeRef}></Welcome>
        <About ref={aboutRef}></About>
        <Experience ref={experienceRef}></Experience>
        <Portfolio ref={portfolioRef}></Portfolio>
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