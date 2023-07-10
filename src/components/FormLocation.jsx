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
    <form onSubmit={handleSubmit}>
        <input id='inputId' style={{boxShadow: '1px 1px 10px'}} type="text" />
        <button style={{backgroundColor: 'green', color: 'white'}}>Search</button>
    </form>
  )
}

export default FormLocation