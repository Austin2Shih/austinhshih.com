import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
const Welcome = React.forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} class="background-image">
        <div class="container">
          <h3 class='welcome-text'>WELCOME</h3>
          <h1 class="welcome-name">I'm Austin Shih.</h1>
          <h3 class="welcome-software-stack">Software Engineer | Full Stack</h3>
          <button class="continue-button">
            <BsChevronDown></BsChevronDown>
          </button>
        </div>
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
            justify-content: center;
          }
          .container {
            display: flex;
            text-align: center;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;
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
            font-size: 3.4rem;
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