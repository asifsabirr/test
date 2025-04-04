'use client'
import React, { useEffect, useState } from 'react'

const WeatherComponent = () => {
    const [data, setData] = useState()
    const fetchWeather = async () => {
        const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey='apikey'&q='location'&language=en-us&details=true`
        const data = await fetch(url)
        const result = await data.json()
        setData(result)
    }
    useEffect(() => {
        fetchWeather()
    }, [])

    console.log('data', data)

    return <div className='text-black'>WeatherComponent</div>
}

export default WeatherComponent
