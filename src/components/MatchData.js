import React, {useState} from 'react'
import Skills from './Skills' 
import Features from './Features'

const MatchData = ({ match }) => {

    const [showData, setShowData] = useState(false)
    const [toggleSkills, setToggleSkills] = useState(false)
    const [toggleFeatures, setToggleFeatures] = useState(false)

    const nameClickHandler = (e) => {
        e.preventDefault()
        setShowData(!showData)
    }

    const matchesData = () => {
        return(
            <>
            <p>Job title: {match.item_title}</p>
            <p>Query Name: {match.query_name}</p>
            <p>Query Link: <a href={match.query_id} target="_blank" rel="noopener noreferrer">Go to Job Ad</a></p>
            <p>Item Link: {match.item_id.map(link => <a href={link} target="_blank" rel="noopener noreferrer">Go to Candidate</a>)}</p>
            <p>Distance: {match.location_distance}</p>
            <p>Item Place: {match.item_place}</p>
            <p>Query Place: {match.query_place}</p>
            <p>Query Title: {match.query_title}</p>
            <p>Titles score: {match.titles_score}</p>
            <p>Tfidf Score: {match.tfidf_score? match.tfidf_score : " Not available"}</p>
            <p>Lda Score: {match.lda_score? match.lda_score : " Not available"}</p>
            <p>Doc-2-Vec Score: {match.doc2vec_score? match.doc2vec_score : " Not available"}</p>
            <p>Common Skills <button onClick ={()=>setToggleSkills(!toggleSkills)}>skills</button></p>
            <p>{toggleSkills && <Skills match={match}/>}</p>
            <p>Important features <button onClick ={()=>setToggleFeatures(!toggleFeatures)}>features</button></p>
            <p>{toggleFeatures && <Features match={match}/>}</p>
            </>
    )}

    return (
        <>
            <div key={match._id}><a href='#' onClick = {nameClickHandler}>{match.item_name}</a>
            {showData && matchesData()}</div>
        </>
    )
}

export default MatchData