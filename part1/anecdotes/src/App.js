import React, { useState } from 'react'


const Display=(props)=> <h1>{props.text}</h1>


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points,updatePoints]=useState(new Array(anecdotes.length).fill(0))


  const setToSelect=()=>{
    const y = Math.floor(Math.random() * 6)
    setSelected(y)
  }

  const pointChange = ()=>{
    const copy = [...points]
    copy[selected]+=1
    updatePoints(copy)
  }

  let i = Math.max(...points)
  let j = points.indexOf(i)

  return (
    <div>
      <Display text={"Anecdote of the day"}/>
      <p>{anecdotes[selected]}</p>
      <div>has {points[selected]} votes</div>
      <button onClick={pointChange}>Vote</button>
      <button onClick={setToSelect}>Next Anecdote</button>
      <Display text={"Anecdote with the most votes"}/>
      <p>{anecdotes[j]}</p>
      <p>has {i} votes</p>
    </div>
  )
}

export default App