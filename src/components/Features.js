import React from 'react'

const Features = ({ match }) => {

    return (
        <>
            {match.important_features_tfidf? 
            match.important_features_tfidf.map(m => <p>{m.map(l=> <ul>{l}</ul>)}</p>) : "Not available"}
        </>
    )
}

export default Features