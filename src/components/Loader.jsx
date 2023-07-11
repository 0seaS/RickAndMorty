import './styles/Loader.css'

const Loader = () => {
  return (
    <>
    <div className='loader__container'>
        <div>CARGANDO...</div>
        <div className="loader"> 
            
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    </div>

    </>

  )
}

export default Loader
