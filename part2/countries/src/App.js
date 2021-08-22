import React,{useState,useEffect}from "react";
import axios from 'axios'
import Form from "./Components/inputForm";
import Display from "./Components/Display";


function App() {

  const [newCountry,setNewCountry] = useState('')
  const [allCountries, setallCountries] = useState('')
  
  useEffect(()=>{
    axios.get('http://localhost:3001/countries').then(response =>{
      const countryData = response.data
      setallCountries(countryData)
    })
  },[])

  
  const handleNewCountry =(event)=>{
    setNewCountry(event.target.value)
  }
  
  return (
    <div>
      <div><Form newCountry={newCountry} handleNewCountry={handleNewCountry}/></div>

      <div><Display countryData={allCountries} newCountry={newCountry}/></div>
      
    </div>
  
    
  );
}

export default App;
