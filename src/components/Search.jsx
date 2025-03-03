import React from 'react'

const Search = ({userInput, setUserInput, setCity}) => {
  return (
    <>
      <h1>Weather</h1>
      <label htmlFor='city-name'>
          <input 
            id='city-name'
            name='cityName'
            placeholder='New York'
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
        />
      </label>
      <button onClick={() => {setCity(userInput)}}>Submit</button>
    </>
  )
}

export default Search