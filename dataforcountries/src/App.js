import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Details from './Components/details'


const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  

  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => { setCountries(response.data) })
  }


  const filtering = (e) => {

    setFilter(e.target.value)

  }

  const showDetails = () => {
    let country = document.querySelector('#country')
    country = country.innerHTML.replace(/<.*$/, "")
    
    
    setFilter(country)
  }

  useEffect(hook, [])

  const countriesToShow = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))


  return (
    <div>

      <div>
        find countries <input type="text" onKeyUp={filtering} />


        {filter !== '' && countriesToShow.length >= 10
          ? <div>Too many matches. Specify another filter</div> : filter === '' ? <div></div> :
            countriesToShow.length === 1 ? <Details country={countriesToShow[0]} /> :


              countriesToShow.map(country =>
                <div key={country.name}>
                  <div id='country' key={country.name}>{country.name}<button onClick={showDetails}>show</button></div>
                  
                </div>
                
                )

        }


      </div>

    </div>
  )
}



export default App;
