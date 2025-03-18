import React from 'react'
import '../App.css'

const Search = ({ userInput, setUserInput, setCity }) => {
  return (
    <>
      <div className="Search">
        <h3>Weather</h3>
        <label htmlFor='city-name'>
          <input
            id='city-name'
            name='cityName'
            className='pretty-input'
            placeholder='New York'
            value={ userInput }
            onChange={ (e) => setUserInput(e.target.value) }
          />
        </label>
        <button id="submitbtn" onClick={ () => { setCity(userInput) } }>
  <i className="fas fa-search"></i>
</button>
      </div>
    </>
  )
}

export default Search