
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import FormLocation from './components/FormLocation'
import Loader from './components/Loader'

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
      <div className='banner'>
        <img className='img__banner' src="/banner.jpg" alt="" />
      </div>
      
      <FormLocation 
        setIdFormLocation={setIdFormLocation}
      />
      {
        isLoading
          ?(<Loader></Loader>)
          :hasError 
            ? (<h1>❌ hey!! you must provide an id from 1 to 126 😭 </h1>)
            : (<>
                <div className='location__container'>
                  <LocationInfo 
                    location={location}
                  />
                </div>
                
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
