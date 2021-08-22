import React from 'react'

const Filter = ({searchTerm,handleSearchChange})=>{

    return (
    <div>
        <p>Filter shown with <input value={searchTerm} onChange={handleSearchChange}></input></p>
    </div>
    )
}

export default Filter