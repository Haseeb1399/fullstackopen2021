import React, { useState } from 'react'

const Display = props =><div><h1>{props.value}</h1></div>

const List = (props)=>(
  <div>
    {props.text} {props.value} {props.sign}
  </div>
)

const Button = (props)=>(
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)


const Stats = ({good,bad,neutral})=>{
  let totalSum = good+bad+neutral

  if(good===0 && bad ===0 && neutral===0){
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  }else{
    return(
      <div>
        <table>
          <tbody>
          <tr>
            <td><List text="Good" value={good}/></td>
            </tr>
            <tr>
            <td> <List text="Bad" value={bad}/></td>
            </tr>
            <tr>
            <td> <List text="Neutral" value={neutral}/></td>
            </tr>
            <tr>
            <td> <List text="All" value={totalSum}/></td>
            </tr>
            <tr>
            <td> <List text="Average" value={(good-bad)/totalSum}/></td>
            </tr>
            <tr>
            <td> <List text="Positive" value={(good/totalSum)*100} sign={"%"}/></td>
            </tr>
          </tbody>
        </table>
      
      
      </div>
    )
  }
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const setToGood = newVal =>{
    setGood(newVal)
  }
  const setToNeutral = newVal =>{
    setNeutral(newVal)
  }
  const setToBad = newVal =>{
    setBad(newVal)
  }

  return (
    <div>
      <Display value={"Give Feedback"}/>
      <Button handleClick={()=>setToGood(good+1)} text="Good"/>
      <Button handleClick={()=>setToNeutral(neutral+1)} text="Neutral"/>
      <Button handleClick={()=>setToBad(bad+1)} text="Bad"/>
      <Display value={"Statistics"}/>
      <Stats good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App