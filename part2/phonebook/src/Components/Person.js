import React from 'react'

const Person=({name,number})=>(<li key={name}>{name} {number}</li>)

export default Person;