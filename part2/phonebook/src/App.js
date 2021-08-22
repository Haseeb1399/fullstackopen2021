import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Render from './Components/Rendering'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumb, setNewNumb ] = useState('')
  const [ searchTerm, setSearchTerm ] = useState('')

  useEffect(()=>{
    axios.get('http://localhost:3001/persons').then((response)=>{
      setPersons(response.data)
    })  
    
  },[])

  const addPerson = (event)=>{
    event.preventDefault()

    console.log(persons.includes(newName))

    let x = persons.map(person=>person.name)

    if(x.includes(newName)){

      window.alert(newName + " is already added to phonebook")
      
    }else{
      const personObject = {
        name:newName,
        number:newNumb
      }
      setPersons(persons.concat(personObject))
    }
    setNewName('')
    setNewNumb('')
  }

  const handleNameChange = (event)=>{
    setNewName(event.target.value)
  }

  const handleNumbChange = (event)=>{
    setNewNumb(event.target.value)
  }

  const handleSearchChange = (event)=>{
    setSearchTerm(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
       <Filter searchTerm={searchTerm} handleSearchChange={handleSearchChange}/>

      <h3>Add a new number</h3>

      <PersonForm addPerson={addPerson} newName={newName} newNumb={newNumb} handleNameChange={handleNameChange} handleNumbChange={handleNumbChange}/>

      <h2>Numbers</h2>
      <div>

       <Render searchTerm={searchTerm} persons={persons}/>

      </div>
      
    </div>
  )
}

export default App;