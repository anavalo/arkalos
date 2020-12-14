import axios from 'axios'
// const baseUrl = 'http://localhost:3001/matches'
const baseUrl = '/api/companies'

const getAllCompanies =  async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

export default {getAllCompanies}