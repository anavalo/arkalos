import React from 'react'

const Checkbox = ({ checked, handleCheck }) =>(
    <div>
        visited: <input type='checkbox' checked = {checked} onChange={handleCheck}/>
    </div>
)

export default Checkbox