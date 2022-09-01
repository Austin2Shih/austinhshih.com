import React, {forwardRef} from 'react'
import contactData from '../data/contact-data'
import { GoLocation } from 'react-icons/go'
import { AiOutlineMail } from 'react-icons/ai'
import { GiSmartphone } from 'react-icons/gi'
import ContactBar from './contact/ContactBar'
import mediaQueries from '../media-queries'

const Contact = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className='contact-container'>
        <h3>CONTACT</h3>
        <div className='contact-large-icons'>
          <div>
            <p className='contact-large-icon'><GoLocation></GoLocation></p>
            <h3>WHERE TO FIND ME</h3>
            <p>{contactData.location}</p>
          </div>
          <div>
            <p className='contact-large-icon'><AiOutlineMail></AiOutlineMail></p>
            <h3>EMAIL ME AT</h3>
            <p>{contactData.email}</p>
          </div>
          <div>
            <p className='contact-large-icon'><GiSmartphone></GiSmartphone></p>
            <h3>CALL ME AT</h3>
            <p>{contactData.phone}</p>
          </div>
        </div>
        <ContactBar></ContactBar>
      </div>
      <style> {`
      .contact-container {
        padding-top: var(--largerSpacer);
        padding-bottom: var(--hugeSpacer);
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: var(--maxWidth);
        align-self: center;
        align-items: center;
        gap: var(--tinySpacer);
      }
      .contact-large-icons {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-evenly;
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
        width: 200px;
      }
      .contact-large-icon {
        font-size: var(--fontHuge);
        color: var(--textSecondary);
      }
      `} </style>
    </>
  )
})

export default Contact;