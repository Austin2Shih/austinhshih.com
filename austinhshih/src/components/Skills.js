import React, {forwardRef} from 'react'
import skillsData from '../data/skills-data';

const SkillList = ({data}) => {
  return (
    <>
    <div className='skills-list-container'>
      {data.map((li, index) => {
        return (
          <div key={index}>
            <p>{li}</p>
            {index !== data.length - 1 &&
              <p style={{margin: '0 var(--tiniestSpacer) 0 var(--tiniestSpacer)'}}>•</p>
            }
          </div>

        )
      })}
    </div>
    <style> {`
    .skills-list-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-self: center;
      max-width: var(--skillsMaxWidth);
      justify-content: center;
      margin-top: var(--tinySpacer);
      margin-bottom: var(--spacer);
    }
    .skills-list-container>div {
      display: flex;
      flex-direction: row;
      padding-bottom: var(--tiniestSpacer);
    }
    `} </style>
  </>
  )
}


const Skills = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className='skills-outer-container'>
        <h3 style={{marginBottom: 'var(--smallSpacer)'}}>SKILLS</h3>
        <h4>{`frameworks & technologies`}</h4>
        <SkillList data={skillsData.frameworks}></SkillList>
        <h4>coding languages</h4>
        <SkillList data={skillsData.codingLanguages}></SkillList>
        <h4>spoken languages</h4>
        <SkillList data={skillsData.languages}></SkillList>
      </div>
      <style> {`
      .skills-outer-container {
        padding-top: var(--largerSpacer);
        padding-bottom: var(--largerSpacer);
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        text-align: center;
        background-color: var(--backgroundSecondary);
      }
      .skills-outer-container>h4 {
        font-weight: 700;
      }
      `} </style>
    </>
  )
})

export default Skills;