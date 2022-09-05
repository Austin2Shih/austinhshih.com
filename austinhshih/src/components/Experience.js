import React, {forwardRef} from 'react'
import experienceData from '../data/work-experience-data';
import educationData from '../data/education-data';

import WorkExperience from './experience/WorkExperience';
import Education from './experience/Education';

import { AiOutlineDownload } from 'react-icons/ai'

import mediaQueries from '../media-queries';

const Experience = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className='experience-outer-container'>
        <h3 style={{marginBottom: 'var(--smallSpacer)'}}>EXPERIENCE</h3>
        <div className='experience-container'>
          <h4 style={{fontWeight: 700}}>work experience</h4>
          { 
            experienceData.map((experience, index) => (
              <div key={index}>
                <WorkExperience data={experience}></WorkExperience>
                {(index !== experienceData.length - 1) &&
                  <div className="divider"></div>
                }
              </div>
            ))
          }
          <h4 style={{fontWeight: 700, marginTop: 'var(--largeSpacer)', marginBottom: 'var(--tinySpacer)'}}>education</h4>
          { 
            educationData.map((education, index) => (
              <div key={index}>
                <Education data={education}></Education>
                {(index !== educationData.length - 1) &&
                  <div className="divider">hello</div>
                }
              </div>
            ))
          }
          <a 
            className='resume-button' 
            href={require('../media/experience/Resume - Austin Shih.pdf')}
            target='_blank'
            rel="noopener noreferrer"
          >
            <p>resume</p><AiOutlineDownload></AiOutlineDownload>
          </a>
        </div>
      </div>
      <style> {`
      .experience-outer-container {
        padding-top: var(--largerSpacer);
        padding-bottom: var(--largerSpacer);
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        background-color: var(--backgroundSecondary);
      }
      .experience-container {
        position: relative;
        display: flex;
        flex-direction: column;
        max-width: calc(var(--maxWidth) - var(--experienceLeftShift));
        padding-left: var(--experienceLeftShift);
        align-self: center;
      }
      ${mediaQueries.phoneSize} {
        .experience-container {
          padding-left: 0px;
        }
      }
      .divider {
        height: 0px
        width: 100%;
        border-bottom: solid 1px var(--textSecondary);
        margin: var(--smallSpacer) 0 var(--smallSpacer) 0;
      }
      .resume-button {
        height: 40px;
        border-radius: var(--borderRadius);
        border: solid 2px var(--backgroundPrimary);
        background-color: var(--blurpleButtonFill);
        margin-top: var(--largerSpacer);
        margin-bottom: var(--largeSpacer);
        color: var(--textSecondary);
        font-size: var(--fontButton);
        display: flex;
        flex-direction: row;
        justify-content: center;
        text-align: center;
        align-items: center;
        text-decoration: none;
      }
      .resume-button>p {
        color: var(--textSecondary);
        font-size: var(--fontHeader);
        margin-right: var(--tinierSpacer);
      }
      `} </style>
    </>
  )
})

export default Experience;