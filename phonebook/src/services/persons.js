import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'


const getAll = () => {
    return axios.get(baseUrl)
}

const create = nameObj => {
    return axios.post(baseUrl, nameObj)
}

const remove = (id, name) => {
    
    if(window.confirm(`Delete ${name}?`)){
        return axios.delete(`${baseUrl}/${id}`)
    }
    
}

const update = (person , newObject) => {
    if(window.confirm(`${person.name} is already added to the phonebook, replace the old number with the new one?`)){
        return axios.put(`${baseUrl}/${person.id}`, newObject )
    }
}
export default { getAll, create, remove, update}