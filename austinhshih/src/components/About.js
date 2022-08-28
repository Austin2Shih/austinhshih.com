import React, {forwardRef} from 'react'
import aboutText from '../data/about-text'

const About = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className='about-container'>
        <h3>ABOUT</h3>
        <h4 className="intro-title">a quick introduction</h4>
        <div className="offset-container">
          <div className="image-of-me"></div>
          <div>
            <p>{aboutText.introText}</p>
            <h4 className='current-focusses'>current focusses</h4>
            <p>{aboutText.currentFocussees}</p>
          </div>
        </div>
      </div>
      <style> {`
      .about-container {
        margin-top: var(--hugeSpacer);
        margin-bottom: var(--hugeSpacer);
        position: relative;
        display: flex;
        flex-direction: column;
        max-width: var(--maxWidth);
        align-self: center;
      }
      .intro-title {
        text-align: center;
      }
      .offset-container {
        margin-top: var(--smallSpacer);
        margin-left: var(--largeSpacer);
        margin-right: var(--largeSpacer);
        display: flex;
        flex-direction: row;
        padding-left: var(--largeSpacer);
        padding-right: var(--largeSpacer);
        justify-content: center;
      }
      .image-of-me {
        min-width: 128px;
        width: 128px;
        height: 128px;
        border-radius: 64px;
        background-image: url(${require('../media/about/hawaii-pic.jpg')});
        background-size: 164%;
        background-position: 52% 8%;
        margin-right: var(--spacer);
      }
      .offset-container>div {
        max-width: 324px;
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