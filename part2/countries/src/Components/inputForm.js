import React from 'react'

const Form=({newCountry,handleNewCountry})=>{

    return(
        <div>
            <form>
                <div>find countries <input value={newCountry} onChange={handleNewCountry}></input></div>
            </form>
        </div>
    )
}

export default Form