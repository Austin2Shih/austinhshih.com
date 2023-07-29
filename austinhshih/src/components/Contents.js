import React, { useState, useCallback, useEffect } from 'react'
import mediaQueries from '../media-queries';
import { BiMenuAltLeft } from 'react-icons/bi'
import { AiOutlineDownload } from 'react-icons/ai'


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
                  handleScroll(item.ref)
                  setDisplay(false)
                }}>
                <p className={`${(activeTOC === item.name)? 'toc-active' : ''}`}>{item.name}</p>
              </div>        
            )
          })
        }
      </div>
      <a 
        className='resume-button-contents' 
        href={require('../media/experience/Resume - Austin Shih.pdf')}
        target='_blank'
        rel="noopener noreferrer"
      >
        <p>resume</p><AiOutlineDownload></AiOutlineDownload>
      </a>
      <div className='fixed-gradient'/>
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

        .resume-button-contents {
          position: fixed;
          top: var(--spacer);
          right: var(--spacer);
          border-radius: var(--borderRadius);
          border: solid 1px var(--textPrimary);
          background-color: var(--whiteButtonFill);
          color: var(--textPrimary);
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: var(--tiniestSpacer);
          padding: var(--tiniestSpacer) var(--smallSpacer);
          z-index: 1000;
          text-decoration: none;
        }

        .fixed-gradient {
          position: fixed;
          display: none;
          left: 0;
          right: 0;
          top; 0;
          height: 70px;
          background-color: var(--backgroundPrimary);
          opacity: 0.9;
          z-index: 500;
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

          .resume-button-contents {
            top: var(--smallSpacer);
          }

          .fixed-gradient {
            display: block;
          }

        }
      `} </style>
    </>
  )
}

export default Contents;