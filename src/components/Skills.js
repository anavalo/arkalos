import React from 'react'

const Skills = ({ match }) => {

    return (
        <>
            {match.skills_common.map(skill=><ul key={match.skills_common.indexOf(skill)}>{skill}</ul>)}
      </>
    )
}

export default Skills