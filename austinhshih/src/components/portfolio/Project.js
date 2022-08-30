import React, {useState} from 'react'
import { AiOutlineGithub } from 'react-icons/ai'

const Project = ({data}) => {
  const [imageHovered, setImageHovered] = useState(false);

  return (
    <>
      <div className='project-container'>
        <h4 style={{color: 'var(--textPrimary)', fontSize: 'var(--fontMedium)'}}>{data.title}</h4>
        <div className='inner-container'>
          <div className='project-text-container' style={{width: 'calc(100% - var(--projectImagePercentage))'}}>
            <h3 style={{textTransform: 'uppercase', textAlign: 'left'}}>{data.shortDesc}</h3>
            <ul style={{listStylePosition: 'outside', paddingInlineStart: '1rem', margin: 0}}>
            {
                data.points.map((point, index) => {
                    return (<li key={index} className='project-point-item'>{point}</li>)
                })
            }
            </ul>
          </div>
          <a
            href={data.projectLink}
            target="_blank" 
            rel="noopener noreferrer"
            className='project-image-container' 
            style={{width: 'var(--projectImagePercentage)'}}
            onMouseEnter={() => {setImageHovered(true)}}
            onMouseLeave={() => {setImageHovered(false)}}
            >
            <img className={(imageHovered)? 'hovered' : ''} src={require(`../../media/portfolio/${data.imageFileName}`)}></img>
            <div className={`learn-more-button ${(imageHovered)? 'hovered' : ''}`}><p>learn more</p><AiOutlineGithub></AiOutlineGithub></div>
          </a>
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
          position: relative;
          display: flex;
          flex-direction: row;
          width: calc(100% - 2 * var(--tinySpacer));
          gap: var(--tinySpacer);
          border: solid 2px var(--textSecondary);
          border-radius: var(--borderRadius);
          padding: var(--tinySpacer);
        }
        .project-text-container {
          display: flex;
          flex-direction: column;
        }
        .project-point-item {
          padding-left: 0;
          font-size: var(--fontSmall);
          font-weight: 300;
          margin-bottom: 4px;
        }
        .project-image-container {
          position: relative;
          cursor: pointer;

        }
        .project-image-container>img {
          border-radius: var(--borderRadius);
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
        .project-image-container>img.hovered {
          opacity: 0.1;
        }
        .learn-more-button, learn-more-button:hover, learn-more-button:focus, learn-more-button:active {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);

          display: none;
          flex-direction: row;
          justify-content: center;
          text-align: center;
          align-items: center;

          font-size: var(--fontHeader);
          text-decoration: none;
          color: var(--textPrimary);
        }
        .learn-more-button.hovered {
          display: flex;
        }
        .learn-more-button>p {
          color: var(--textSecondary);
          font-size: var(--fontHeader);
          margin-right: var(--tinierSpacer);
        }

      `} </style>
    </>
  )
}

export default Project