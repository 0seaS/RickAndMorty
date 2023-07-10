
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'

function App() {
 
  const [location, setLocation] = useState({})

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${getRandomNumber(126)}`
    axios.get(url)
    .then(res => setLocation(res.data))
    .catch(err => console.error(err))
  }, [])

  return (
    <>
      <h1>Rick and Morty</h1>
      <LocationInfo 
        location={location}
      />
      <div className='resident__container'>
      {
        location.residents?.map(url => (
          <ResidentCard 
          key={url}
          url={url}/>
        ))
      }
      </div>
      
    </>
  )
}

export default App
