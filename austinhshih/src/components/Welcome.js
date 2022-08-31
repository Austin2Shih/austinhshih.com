import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import WelcomeContainerBar from './welcome/WelcomeContactBar'
const Welcome = React.forwardRef((props, ref) => {
  const scrollDown = () => {
    window.scrollTo({
      top: props.aboutRef.current.offsetTop,
      behavior: 'smooth'
    });
  };
  return (
    <>
      <div ref={ref} className="background-image">
        <div className="container">
          <h3 className='welcome-text'>WELCOME</h3>
          <h1 className="welcome-name">I’m Austin Shih.</h1>
          <h3 className="welcome-software-stack">Software Engineer | Full Stack</h3>
          <button onClick={scrollDown} className="continue-button">
            <BsChevronDown></BsChevronDown>
          </button>
        </div>
        <WelcomeContainerBar></WelcomeContainerBar>
      </div>
      <style> {`
          .background-image {
            position: relative;
            height: 100vh;
            width: 100vw;
            overflow: hidden;
            background-image: url(${require("../media/welcome/city-photo.jpg")});
            background-size: cover;
            background-position: bottom;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
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
          }
          .welcome-text {
            color: var(--textTertiary);
            font-family: 'Poppins';
            font-weight: 700;
            font-size: 1.2rem;
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
            font-size: 1.3rem;
            margin-top: 8px;
          }
          .continue-button {
            position: relative;
            margin-top: 28px;
            width: 56px;
            height: 56px;
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