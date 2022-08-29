import React from 'react'

const Education = ({data}) => {
  return (
    <>
      <div className='education-container'>
        <h4 className='education-header'>{`${data.school} `}<span style={{color: 'var(--textPrimary)'}}>{data.major}</span></h4>
          <h4 style={{fontSize: 'var(--fontSmallHeader)', margin: '4px 0px 4px 0px'}}>{data.timeFrame}</h4>
      </div>
      <style> {`
        .education-container {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          max-width: var(--experienceMaxWidth);
        }
        .education-header {
            color: var(--textTertiary);
            font-size: var(--fontMedium);
        }

      `} </style>
    </>
  )
}

export default Education