
import React, {useState, useEffect} from 'react'
import matchesService from '../services/matches'
import MatchData from './MatchData'
import Checkbox from './Checkbox'

const Matches = ({ queryName }) =>{

    const [matches, setMatches] = useState([])
    const [render, setRender] = useState(false)
    const [showNames, setShowNames] = useState(false)
    const [checked, setChecked] = useState(false)

    async function fetchData (){
        if (!(render)) return;
        const matches = await matchesService.getMatches(queryName)
        setMatches(matches)
    }

    const handleCheck = (id) => {
        const match = matches.find(n => n.id === id)
        const newVisited = match.visited? match.visited = !match.visited : true
        const unpackVisited = {visited: newVisited}
        const matchObject = {...match, ...unpackVisited}

        matchesService
        .updateMatch(id, matchObject)
        .then(returnedMatch =>setMatches(matches.map(match => match.id !== id? match : returnedMatch)))
        setChecked(!checked)
    }

    useEffect(() => {
        fetchData()
    }, [render])

    const showButtonHandler = () => {
        setRender(true)
        setShowNames(!showNames)
    }

    return(
        <div>
            <button onClick={() => showButtonHandler()}>toggle</button>
            <div>
            {showNames && matches.map(m => <li key={m._id}><MatchData match={m}/>
            <Checkbox checked={checked} handleCheck={handleCheck(m.id)}/>
            </li>)}  
            </div>
        </div>
    )
}

export default Matches