import React from 'react'
import '../App.css'

const Search = ({ userInput, setUserInput, setCity }) => {
  return (
    <>
     
      <div className="Search">
      <h1 id='title'>What's the Weather</h1>
      <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2FuYmp6cHNkNncyankzaGVsdms5M3BiMGQ3OHVjY2ZjN25odGlkaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4FGkdtLGfpUiBdFC/giphy.gif" alt="weather" />        <h3>Find The Weather</h3>
        <label htmlFor='city-name'>
          <input
            id='city-name'
            name='cityName'
            className='pretty-input'
            placeholder='Search for a city..'
            value={ userInput }
            onChange={ (e) => setUserInput(e.target.value) }
          />
        </label>
        <button id="submitbtn" onClick={ () => { setCity(userInput) } }>
          <i className="fas fa-search"></i>
        </button>
      </div>
      {/* <div className='weather-gif'>
        <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2FuYmp6cHNkNncyankzaGVsdms5M3BiMGQ3OHVjY2ZjN25odGlkaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4FGkdtLGfpUiBdFC/giphy.gif" alt="weather" />
      </div> */}
    </>
  )
}

export default Search