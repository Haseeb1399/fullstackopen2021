import React from 'react'

const PersonForm = ({addPerson,newName,newNumb,handleNameChange,handleNumbChange})=>{

    return(
    <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>

        <div>number: <input value={newNumb} onChange={handleNumbChange}></input></div>

        <div>
          <button type="submit">add</button>
        </div>
    </form>
    )
}

export default PersonForm