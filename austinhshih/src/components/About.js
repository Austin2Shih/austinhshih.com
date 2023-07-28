import React, {forwardRef} from 'react'
import aboutText from '../data/about-text'
import mediaQueries from '../media-queries'
import { Reveal } from './Reveal'
const About = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className='about-container'>
        <h3>ABOUT</h3>
        <Reveal><div className='intro-title-div'><h4 className="intro-title">a quick introduction</h4></div></Reveal>
        <div className="offset-container">
          <div className="image-of-me"></div>
          <div>
            <Reveal><p>{aboutText.introText}</p></Reveal>
            <Reveal><h4 className='current-focusses'>current focuses</h4></Reveal>
            <Reveal><p>{aboutText.currentFocussees}</p></Reveal>
          </div>
        </div>
      </div>
      <style> {`
      .about-container {
        padding-top: var(--hugeSpacer);
        padding-bottom: var(--hugeSpacer);
        position: relative;
        display: flex;
        flex-direction: column;
        max-width: var(--maxWidth);
        align-self: center;
        align-items: center;
      }

      .intro-title-div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
      }

      .offset-container {
        margin-top: var(--smallSpacer);
        display: flex;
        flex-direction: row;
        padding-left: var(--largeSpacer);
        padding-right: var(--largeSpacer);
        justify-content: center;
        gap: var(--spacer);

      }
      ${mediaQueries.phoneSize} {
        .offset-container {
          flex-direction: column;
          text-align: left;
          justify-content: center;
          align-items: center;
          padding: var(--smallSpacer);
        }

        .image-of-me {
          display: none;
        }

        .offset-container {
          margin-top: 0;
        }

        .intro-title-div {
          justify-content: flex-start;
          padding-left: var(--smallSpacer);
        }
      }
      .image-of-me {
        min-width: 128px;
        width: 128px;
        height: 128px;
        border-radius: 64px;
        background-image: url(${require('../media/about/hawaii-pic.jpg')});
        background-size: 164%;
        background-position: 52% 8%;
      }
      .offset-container>div {
        max-width: var(--aboutOffsetMaxWidth);
      }
      .current-focusses {
        margin-top: var(--tinySpacer);
        margin-bottom: var(--tinySpacer);
      }
      `} </style>
    </>
  )
})

export default About;