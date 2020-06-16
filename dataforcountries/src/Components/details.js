import React, { useState, useEffect } from 'react';
import axios from 'axios'
const api_key = process.env.REACT_APP_API_KEY



const Details = (props) => {
    const [weather, setWeather] = useState([])

    
    useEffect(() => {
        async function fetchData() {
            await axios
                .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${props.country.capital}`)
                .then(response => {
                    setWeather(response.data)
                })
        }
        fetchData()

    }, [props.country.capital])


    
    return (
        <div>
            <h1>{props.country.name}</h1>
            <div key={props.country.capital}>capital {props.country.capital}</div>
            <div key={props.country.population}>population {props.country.population}</div>
            <h2>languages</h2>
            <ul>
                {props.country.languages.map(language =>
                    <li key={language.name}>{language.name}</li>)}
            </ul>
            <img src={props.country.flag} alt="" />

            {weather.length !== 0?
            <div>
                <h3>Weather in {props.country.capital}</h3>
                <div>temperature: {weather.current.temperature} celcius </div>
                <img src={weather.current.weather_icons[0]} alt='a dark cloud' />
                <div>wind: {weather.current.wind_speed} mph direction {weather.current.wind_dir} </div>
            </div>
            : <div></div>
            }
        </div>
    )
}

export default Details