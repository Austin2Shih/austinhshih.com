import React from 'react'

const WorkExperience = ({data}) => {
  return (
    <>
      <div className='work-container'>
        <h4 className='work-header'>{`${data.company} `}<span style={{color: 'var(--textPrimary)'}}>{data.position}</span></h4>
        <div classname='work-right-shift' style={{marginLeft: 'var(--largeSpacer)'}}>
            <h4 style={{fontSize: 'var(--fontSmallHeader)', margin: '4px 0px 4px 0px'}}>{data.timeFrame}</h4>
            <ul style={{listStylePosition: 'outside', paddingInlineStart: '1rem', margin: 0}}>
            {
                data.description.map((desc, index) => {
                    return (<li className='work-desc-item'>{desc}</li>)
                })
            }
            </ul>
        </div>
      </div>
      <style> {`
        .work-container {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          max-width: var(--experienceMaxWidth);
        }
        .work-header {
            color: var(--textTertiary);
            font-size: var(--fontMedium);
        }
        .work-desc-item {
            padding-left: 0;
            font-size: var(--fontSmall);
            font-weight: 300;
            margin-bottom: 4px;
        }
      `} </style>
    </>
  )
}

export default WorkExperience;