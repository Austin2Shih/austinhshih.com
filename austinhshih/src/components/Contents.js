import React, { useState, useCallback, useEffect } from 'react'
import mediaQueries from '../media-queries';
import { BiMenuAltLeft } from 'react-icons/bi'

const Contents = ({refs}) => {
  const [display, setDisplay] = useState(false);
  const [activeTOC, setActiveTOC] = useState('welcome');
  // const [defaultTOC, setDefaultTOC] = useState('contact');
  const handleScroll = useCallback((ref) => {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth'
      })
    }, [])

  const handleScreenChange = useCallback(() => {
    // if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
    //   setActiveTOC(defaultTOC);
    //   setDefaultTOC(activeTOC)
    // } else {
      for (let i = refs.length - 1; i >= 0; i--) {
        if (refs[i].ref.current) {
          if (window.pageYOffset + window.innerHeight * 0.3 >= refs[i].ref.current.offsetTop) {
            setActiveTOC(refs[i].name);
            break
          }
        }
      }
    // }

  }, [refs])

  useEffect(() => {
    window.addEventListener('scroll', handleScreenChange)
    window.addEventListener('resize', handleScreenChange)
    return () => {
      window.removeEventListener('scroll', handleScreenChange)
      window.removeEventListener('resize', handleScreenChange)
    }
  }, [])

  return (
    <>
      <div className='toc-container'>
        <div 
          className='menu-button'
          onClick={() => {setDisplay(!display)}}>
            <BiMenuAltLeft></BiMenuAltLeft>
        </div>
        {
          refs.map((item, index) => {
            return (
              <div
                key={index}
                className='menu-item'
                onClick={() => {
                  // if (item.name === 'skills') {
                  //   setDefaultTOC('skills')
                  //   setActiveTOC('skills')
                  // } else if (item.name === 'contact') {
                  //   setDefaultTOC('contact')
                  //   setActiveTOC('contact')
                  // } else {
                  //   setDefaultTOC('contact')
                  // }
                  handleScroll(item.ref)
                  setDisplay(false)
                }}>
                <p className={`${(activeTOC === item.name)? 'toc-active' : ''}`}>{item.name}</p>
              </div>        
            )
          })
        }
      </div>
      <style> {`
        .toc-container {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          position: fixed;
          z-index: 1000;
          top: var(--tocOffsetTop);
          left: var(--tocOffsetLeft);
          transition: all 0.5s ease;
        }
        .toc-container>div.menu-item {
          display: flex;
          position: relative;
          cursor: pointer;
          align-items: center;
        }
        .toc-container>div.menu-item>p {
          position: relative;
          padding-top: var(--tinySpacer);
          padding-bottom: var(--tinySpacer);
          color: var(--whiteButtonFill);

        }
        .toc-container>div.menu-item>p:hover, .toc-container>div>p.toc-active {
          color: var(--textPrimary);
        }
        .menu-button {
          display: none;
          position: fixed;
          top: var(--tocButtonTop);
          left: var(--tocButtonLeft);
          font-size: var(--fontButton);
        }
        .menu-button:hover {
          transform: scale(1.1);
        }
        ${mediaQueries.tabletSize} {
          .menu-button {
            display: flex;
          }
          .toc-container {
            top: 0;
            left: ${display ? '0' : '-100%'};

            height: 100vh;
            padding-top: var(--tocOffsetTop);
            padding-left: var(--tocOffsetLeft);
            padding-bottom: var(--tocOffsetTop);
            padding-right: var(--tocOffsetLeft);
            background-color: var(--tocBackground);
          }
        }
      `} </style>
    </>
  )
}

export default Contents;