import matchesService from '../services/matches'

export const initMatches = (companyName) =>{
    return async dispatch => {
        const matches = await matchesService.getMatches(companyName)
        dispatch({
            type: 'INIT',
            data: matches
        })
    }
}


const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'INIT':
            return action.data
        default:
            return state
    }
}


export default reducer