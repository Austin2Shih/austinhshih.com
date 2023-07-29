import React, {forwardRef} from 'react'
import contactData from '../data/contact-data'
import { GoLocation } from 'react-icons/go'
import { AiOutlineMail } from 'react-icons/ai'
import { GiSmartphone } from 'react-icons/gi'
import ContactBar from './contact/ContactBar'
import mediaQueries from '../media-queries'

import { Reveal } from './Reveal'

const Contact = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className='contact-container'>
        <h3>CONTACT</h3>
        <div className='contact-aligner'>
          <div className='contact-large-icons'>
            <div>
              <Reveal><p className='contact-large-icon'><GoLocation></GoLocation></p></Reveal>
              <Reveal><h3>WHERE TO FIND ME</h3></Reveal>
              <Reveal><p>{contactData.location}</p></Reveal>
            </div>
            <div>
              <Reveal><p className='contact-large-icon'><AiOutlineMail></AiOutlineMail></p></Reveal>
              <Reveal><h3>EMAIL ME AT</h3></Reveal>
              <Reveal><a className='contact-link' href='mailto: austinhshih@gmail.com'><p>{contactData.email}</p></a></Reveal>
            </div>
            <div>
              <Reveal><p className='contact-large-icon'><GiSmartphone></GiSmartphone></p></Reveal>
              <Reveal><h3>CALL ME AT</h3></Reveal>
              <Reveal><a className='contact-link' href='tel:+15107373634'><p>{contactData.phone}</p></a></Reveal>
            </div>
          </div>
        </div>
        <ContactBar></ContactBar>
      </div>
      <style> {`
      .contact-container {
        padding-top: var(--largerSpacer);
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: var(--maxWidth);
        align-self: center;
        align-items: center;
        justify-content: space-between;
        gap: var(--tinySpacer);
        min-height: 70vh;
      }
      .contact-large-icons {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-evenly;
        gap: var(--largeSpacer);
      }
      ${mediaQueries.phoneSize} {
        .contact-large-icons {
          align-items: center;
          flex-direction: column;
          gap: var(--spacer);
        }
      }
      .contact-large-icons>div {
        display: flex;
        flex-direction: column;
        text-align: center;
        width: 210px;
      }
      .contact-large-icon {
        font-size: var(--fontHuge);
        color: var(--textSecondary);
      }
      .contact-link {
        color: var(--textPrimary);
      }
      .contact-aligner {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: var(--largeSpacer);
      }
      `} </style>
    </>
  )
})

export default Contact;