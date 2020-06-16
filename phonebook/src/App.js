import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'
import Error from './components/Error'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [filter, setFilter] = useState('')
  const [success, setSuccessMessage] = useState(null)
  const [error, setErrorMessage] = useState(null)

  const hook = () => {
    personService.getAll()
      .then(response => { setPersons(response.data) })
  }



  useEffect(hook, [])

  

  const addInfo = (e) => {
    e.preventDefault()

    let nameObj = {
      name: newName,
      number: newNumber

    }




    for (let i = 0; i < (persons.length - 1); i++) {
      if (persons[i].name === nameObj.name && persons[i].number !== nameObj.number) {
        personService.update(persons[i], nameObj).then(response => {
          setPersons(persons.map(person => person.id !== persons[i].id ? person : response.data))
          setNewName('')
          setNewNumber('')
        }).then(() =>{
          setSuccessMessage(`${persons[i].name} was updated!`)
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
        }).catch(() => {
          setErrorMessage(`Information of ${persons[i].name} has already been removed from server`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)

        })
        break;

      } else if (persons[i].name === nameObj.name && persons[i].number === nameObj.number) {
        window.alert(`${newName} is already added to phonebook`)
        setNewName('')
        setNewNumber('')
        break;
      } else {
        personService.create(nameObj)
          .then(response => {
            
            setPersons(persons.concat(response.data))
            setNewName('')
            setNewNumber('')
            setSuccessMessage(`${response.data.name} was created!`)
            setTimeout(() => {
              setSuccessMessage(null)
            }, 5000)
          })
        break;
      }
    }






  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const filtering = (e) => {
    setShowAll(false)
    setFilter(e.target.value)
  }

  
  const personsToShow = showAll ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={success} />
      <Error message={error} />
      <Filter filter={filtering} />
      <PersonForm addInfo={addInfo} valueNumber={newNumber} valueName={newName} nameChange={handleNameChange}
        numberChange={handleNumberChange} />
      <h2>Numbers</h2>
      {personsToShow.map(person =>
        <Persons key={person.name} name={person.name} number={person.number} click={() => {
          personService.remove(person.id, person.name)
            .then(setPersons(persons.filter(p => p.id !== person.id)))
        }} />)}
    </div>
  )
}

export default App