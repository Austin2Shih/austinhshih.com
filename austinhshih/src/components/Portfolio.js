import React, {forwardRef} from 'react'
import portfolioData from '../data/portfolio-data'
import Project from './portfolio/Project'

const Portfolio = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className='portfolio-container'>
        <h3>PORTFOLIO</h3>
        <h4 style={{marginBottom: 'var(--spacer)'}}>some of my projects</h4>
        <div className='projects-container'>
          {
            portfolioData.map((project, index) => {
              return (<Project key={index} data={project}></Project>)
            })
          }
        </div>
      </div>
      <style> {`
      .portfolio-container {
        padding-top: var(--largerSpacer);
        padding-bottom: var(--largerSpacer);
        position: relative;
        display: flex;
        flex-direction: column;
        max-width: var(--maxWidth);
        align-self: center;
        text-align: center;
        padding-left: var(--outerPadding);
        padding-right: var(--outerPadding);
      }
      .projects-container {
        display: flex;
        flex-direction: column;
        gap: var(--spacer);
      }
      `} </style>
    </>
  )
})

export default Portfolio;