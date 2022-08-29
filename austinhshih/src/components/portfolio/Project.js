import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'

const Project = ({data}) => {
  return (
    <>
      <div className='project-container'>
        <h4 style={{color: 'var(--textPrimary)', fontSize: 'var(--fontMedium)'}}>{data.title}</h4>
        <div className='inner-container'>
          <div classname='project-text-container'>
            <h3 style={{textTransform: 'uppercase', textAlign: 'left'}}>{data.shortDesc}</h3>
            <ul style={{listStylePosition: 'outside', paddingInlineStart: '1rem', margin: 0}}>
            {
                data.points.map((point, index) => {
                    return (<li key={index} className='project-point-item'>{point}</li>)
                })
            }
            </ul>
          </div>
          <img src={require(`../../media/portfolio/${data.imageFileName}`)}></img>
        </div>
      </div>
      <style> {`
        .project-container {
          display: flex;
          flex-direction: column;
          text-align: left;
          justify-content: flex-start;
          width: var(--maxWidth);
        }
        .inner-container {
          display: flex;
          flex-direction: row;
          width: 100%;
          gap: var(--tinySpacer);
          border: solid 2px var(--textSecondary);
          border-radius: var(--borderRadius);
          padding: var(--tinySpacer) var(--tinySpacer) var(--tinySpacer) var(--tinySpacer);
        }
        .project-text-container {
          position: relative;
          display: flex;
          flex-direction: column;
          width: 32%;
        }
        .project-point-item {
          padding-left: 0;
          font-size: var(--fontSmall);
          font-weight: 300;
          margin-bottom: 4px;
        }
        .inner-container>img {
          border-radius: var(--borderRadius);
          width: 68%;
          object-fit: cover;
        }
        .inner-container>img:hover {
          opacity: 0.1;
        }
      `} </style>
    </>
  )
}

export default Project