import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import WelcomeContainerBar from './welcome/WelcomeContactBar'
import { Reveal } from './Reveal'

const Welcome = React.forwardRef((props, ref) => {
  const scrollDown = () => {
    window.scrollTo({
      top: props.aboutRef.current.offsetTop,
      behavior: 'smooth'
    });
  };
  return (
    <>
      <div ref={ref} className='hero-container'>
        <div className="background-image"></div>
        <div className="container">
            <h3 className='welcome-text'>WELCOME</h3>
            <Reveal>
            <h1 className="welcome-name">I’m Austin Shih.</h1>
            </Reveal>
            <Reveal>
            <h3 className="welcome-software-stack">Software Engineer | Full Stack</h3>
            </Reveal>
            <Reveal width='fit-content'>
              <button onClick={scrollDown} className="continue-button">
                <BsChevronDown></BsChevronDown>
              </button>
            </Reveal>
        </div>
        <WelcomeContainerBar></WelcomeContainerBar>
      </div>
      <style> {`
          .hero-container {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            width: 100%;
          }

          .background-image {
            position: absolute;
            height: 100%;
            width: 100%;
            overflow: hidden;
            background-image: url(${require("../media/welcome/city-photo.jpg")});
            background-size: cover;
            background-position: bottom;
            opacity: 0.6;
          }
          .container {
            display: flex;
            text-align: center;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            max-width: var(--maxWidth);
            margin-left: 24px;
            margin-right: 24px;
            z-index: 100;
          }
          .welcome-text {
            color: var(--textTertiary);
            font-family: 'Poppins';
            font-weight: 700;
            font-size: var(--fontHeader);
            letter-spacing: 0.06em;
          }
          .welcome-name {
            color: var(--textSecondary);
            font-family: 'Poppins';
            font-weight: 500;
            font-size: var(--fontHuge);
          }
          .welcome-software-stack {
            color: var(--textPrimary);
            font-family: 'Poppins';
            font-weight: 400;
            font-size: var(--fontHeader);
            margin-top: 8px;
          }
          .continue-button {
            position: relative;
            margin-top: 28px;
            width: var(--continueButtonWidth);
            height: var(--continueButtonWidth);
            border-radius: var(--borderRadius);
            border: solid 2px var(--textPrimary);
            background-color: var(--whiteButtonFill);
            color: var(--textPrimary);
            font-size: 32px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }
          .continue-button svg {
            stroke-width: 0.4;
            animation: MoveUpDown 1.3s linear infinite;
            position: absolute;
            bottom 6px;
          }
          @keyframes MoveUpDown {
            0%, 100% {
              bottom: 6px;
            }
            50% {
              bottom: 14px;
            }
          }
      `} </style>
    </>
  )
})

export default Welcome;