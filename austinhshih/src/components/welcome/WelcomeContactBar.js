import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'

const WelcomeContactBar = () => {
  return (
    <>
      <div className="logo-container">
        <a
          style={{marginLeft: 'var(--smallSpacer)'}}
          href="https://www.linkedin.com/in/austin-shih/" 
          target="_blank" 
          rel="noopener noreferrer">
          <AiFillLinkedin></AiFillLinkedin>
        </a>
        <a 
          href="https://www.linkedin.com/in/austin-shih/" 
          target="_blank" 
          rel="noopener noreferrer">
          <AiOutlineInstagram></AiOutlineInstagram>
        </a>
        <a 
          href="https://github.com/Austin2Shih" 
          target="_blank" 
          rel="noopener noreferrer">
          <AiFillGithub></AiFillGithub>
        </a>
        <a 
          href="https://www.linkedin.com/in/austin-shih/" 
          target="_blank" 
          rel="noopener noreferrer">
          <AiOutlineMail></AiOutlineMail>
        </a>
        
      </div>
      <style> {`
          .logo-container {
            position: absolute;
            display: flex;
            flex-direction: row;
            width: 100%;
            max-width: var(--maxWidth);
            bottom: 48px;
            justify-content: center;
          }
          .logo-container>* {
            font-size: 36px; 
            color: var(--slightlyTransparentBlue);
            margin-right: var(--smallSpacer);
          }
      `} </style>
    </>
  )
}

export default WelcomeContactBar;