import './styles/FormLocation.css'
import getRandomNumber from "../utils/getRandomNumber"


const FormLocation = ({setIdFormLocation}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const inputValue = e.target.inputId.value.trim()
        if (inputValue === '' || inputValue === '0') {
            setIdFormLocation(getRandomNumber(126))           
        } else {
            setIdFormLocation(e.target.inputId.value.trim())
        }
        e.target.inputId.value = ''
    }

  return (
    <form className="location__form" onSubmit={handleSubmit}>
        <input className='location__input' id='inputId' type="text" />
        <button className='location__button'>Search</button>
    </form>
  )
}

export default FormLocation