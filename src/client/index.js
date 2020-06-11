import { handleSubmit } from './js/formHandler'
import { validateURL } from './js/checkUrl'
import './styles/base.scss'

console.log("CHANGE!!");

// Add event listener to generate button
document.getElementById("submit").addEventListener('click', handleSubmit);

export {
    handleSubmit,
    validateURL
}

