import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'

const ContactBar = () => {
  return (
    <>
      <div className="logo-container-contact">
        <a
          style={{marginLeft: 'var(--smallSpacer)'}}
          href="https://www.linkedin.com/in/austin-shih/" 
          target="_blank" 
          rel="noopener noreferrer">
          <AiFillLinkedin></AiFillLinkedin>
        </a>
        <a 
          href="https://www.instagram.com/austin.shihh/" 
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
      </div>
      <style> {`
          .logo-container-contact {
            position: relative;
            display: flex;
            flex-direction: row;
            width: 100%;
            max-width: var(--maxWidth);
            justify-content: center;
            padding-bottom: var(--largeSpacer);
          }
          .logo-container-contact>* {
            font-size: var(--fontIcon); 
            color: var(--textSecondary);
            margin-right: var(--smallSpacer);
          }
      `} </style>
    </>
  )
}

export default ContactBar;