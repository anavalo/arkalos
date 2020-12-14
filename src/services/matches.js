import axios from 'axios'
// const baseUrl = 'http://localhost:3001/matches'
const baseUrl = '/api/matches'

const getMatches = async (queryName) => {
    const response = await axios.get(baseUrl,
        {params: {companyToQuery: queryName}}
    )
    return response.data
}

const updateMatch = async (_id, newObject) => {
//   const config = {
//     headers: { Authorization: token }
//   }

  const response = await axios.put(`${baseUrl}/${_id}`, newObject)
  return response.data

}

const deleteObject = _id => {
    const request = axios.delete(`${baseUrl}/${_id}`)
    return request.then(response=>response.data)
}
export default {getMatches, deleteObject, updateMatch}