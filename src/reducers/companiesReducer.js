import companiesService from '../services/companies'

const uniqeCompanies = (compArray) => {
    const unique = {};
    for (let i = 0; i < compArray.length; i++) {
        unique[compArray[i].query_name] = 1;
    }
    const uniqueArray = [];
    for (const n in unique) uniqueArray.push(n);
    return uniqueArray
}

export const initCompanies = () =>{
    return async dispatch => {
        const companies = await companiesService.getAllCompanies()
        const initCompanies = uniqeCompanies(companies)
        dispatch({
            type: 'INIT',
            data: initCompanies
        })
    }
}

const reducer = (state = [], action) => {
    switch (action.type) {
        case 'INIT':
            return action.data
        default:
            return state
    }
}

export default reducer