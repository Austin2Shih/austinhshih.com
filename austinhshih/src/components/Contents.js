import React from 'react'

const Contents = ({refs, activeTOC}) => {
  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  };
  return (
    <>
      <div className='toc-container'>
        <p 
          className={`${(activeTOC === 'welcome')? 'toc-active' : ''}`} 
          onClick={() => handleScroll(refs.welcomeRef)}>
            welcome
        </p>
        <p 
          className={`${(activeTOC === 'about')? 'toc-active' : ''}`} 
          onClick={() => handleScroll(refs.aboutRef)}>
            about
        </p>
        <p 
          className={`${(activeTOC === 'experience')? 'toc-active' : ''}`} 
          onClick={() => handleScroll(refs.experienceRef)}>
            experience
        </p>
        <p 
          className={`${(activeTOC === 'portfolio')? 'toc-active' : ''}`} 
          onClick={() => handleScroll(refs.portfolioRef)}>
            portfolio
        </p>
        <p 
          className={`${(activeTOC === 'skills')? 'toc-active' : ''}`} 
          onClick={() => handleScroll(refs.skillsRef)}>
            skills
        </p>
      </div>
      <style> {`
        .toc-container {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        .toc-container>p {
          position: relative;
          padding-top: var(--tinySpacer);
          padding-bottom: var(--tinySpacer);
          cursor: pointer;
          opacity: 0.3;
        }
        .toc-container>p:hover {
          opacity: 1.0;
        }
        .toc-container>p.toc-active {
          opacity: 1.0;
        }
      `} </style>
    </>
  )
}

export default Contents;