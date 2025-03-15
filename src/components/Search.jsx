import React from 'react'
import '../App.css'

const Search = ({userInput, setUserInput, setCity}) => {
  return (
    <>
    <div className="App-header">
      <h3>Weather</h3>
      <label htmlFor='city-name'>
          <input  
            id='city-name'
            name='cityName'
            placeholder='New York'
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
        />
      </label>
      <button id="submitbtn" onClick={() => {setCity(userInput)}}>Submit</button>
    </div>
    </>
  )
}

export default Search