import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'
import { Reveal } from '../Reveal'

const WelcomeContactBar = () => {
  return (
    <>
      <div className="logo-container">
        <Reveal width='fit-content'>
        <a
          className='welcome-icon'
          style={{marginLeft: 'var(--smallSpacer)'}}
          href="https://www.linkedin.com/in/austin-shih/" 
          target="_blank" 
          rel="noopener noreferrer">
          <AiFillLinkedin></AiFillLinkedin>
        </a>
        </Reveal>
        <Reveal width='fit-content'>
        <a 
          className='welcome-icon'
          href="https://www.instagram.com/austin.shihh/" 
          target="_blank" 
          rel="noopener noreferrer">
          <AiOutlineInstagram></AiOutlineInstagram>
        </a>
        </Reveal>
        <Reveal width='fit-content'>
        <a 
          className='welcome-icon'
          href="https://github.com/Austin2Shih" 
          target="_blank" 
          rel="noopener noreferrer">
          <AiFillGithub></AiFillGithub>
        </a>
        </Reveal>
        <Reveal width='fit-content'>
        <a 
          className='welcome-icon'
          href="mailto: austinhshih@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer">
          <AiOutlineMail></AiOutlineMail>
        </a>
        </Reveal>
        
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
          .welcome-icon {
            font-size: var(--fontIcon); 
            color: var(--slightlyTransparentBlue);
            margin-right: var(--smallSpacer);
          }
      `} </style>
    </>
  )
}

export default WelcomeContactBar;