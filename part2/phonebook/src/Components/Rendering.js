import React from 'react'
import Person from './Person'

const Render = ({searchTerm,persons})=>{
    
    if(searchTerm.length === 0){
        return persons.map((person)=><Person key={person.name} name={person.name} number={person.number}/>)
    }else{
        let filteredData = persons.filter((person)=>{
            if(person.name.toLowerCase().includes(searchTerm.toLowerCase())){
                return person
            }
            return null
        })
        return filteredData.map((person)=><Person key={person.name} name={person.name} number={person.number}/>)
    }

}

export default Render