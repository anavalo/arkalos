import React from 'react'
import { useSelector } from 'react-redux'
import Matches from './Matches'

const Companies = (props) =>{
    const companies = useSelector(state => state)


    return(
        <div>{companies.map(company => 
        <ul key={companies.indexOf(company)}>
            <h4>{company}</h4>            
          <Matches queryName={company} />
        </ul>)}
        </div>
    )
}

export default Companies