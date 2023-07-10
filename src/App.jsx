
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import FormLocation from './components/FormLocation'

function App() {
 
  const [location, setLocation] = useState({})
  const [idFormLocation, setIdFormLocation] = useState(getRandomNumber(126))
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${idFormLocation}`
    setIsLoading(true)
    axios.get(url)
    .then(res => {
      setLocation(res.data)
      setHasError(false)
    })
    .catch(err => {
      console.error(err)
      setHasError(true)
    })
    .finally(() => {
      setIsLoading(false)
    })
  }, [idFormLocation])

  console.log(idFormLocation)

  return (
    <>
      <h1>Rick and Morty</h1>
      <FormLocation 
        setIdFormLocation={setIdFormLocation}
      />
      {
        isLoading
          ?(<h2>Loading...</h2>)
          :hasError 
            ? (<h1>❌ hey!! you must provide an id from 1 to 126 😭 </h1>)
            : (<>
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
              </>)

      }
    </>
  )
}

export default App
