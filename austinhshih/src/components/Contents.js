import React, { useState } from 'react'
import mediaQueries from '../media-queries';
import { BiMenuAltLeft } from 'react-icons/bi'

const Contents = ({refs, activeTOC}) => {
  const [display, setDisplay] = useState(false);
  const tocItems = [
    {
      name: 'welcome',
      ref: refs.welcomeRef,
    },
    {
      name: 'about',
      ref: refs.aboutRef,
    },
    {
      name: 'experience',
      ref: refs.experienceRef,
    },
    {
      name: 'portfolio',
      ref: refs.portfolioRef,
    },
    {
      name: 'skills',
      ref: refs.skillsRef,
    },
    {
      name: 'contact',
      ref: refs.contactRef,
    },
  ]
  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  };
  return (
    <>
      <div className='toc-container'>
        <div 
          className='menu-button'
          onClick={() => {setDisplay(!display)}}>
            <BiMenuAltLeft></BiMenuAltLeft>
        </div>
        {
          tocItems.map((item, index) => {
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