import { useState } from "react" 
import { FadeLoader } from "react-spinners"
import "./useLoading.css"

const useLoading = () => {
const [isLoading, setIsLoading] = useState(false)

//mostrar loading
const showLoading = () => {
setIsLoading(true)
}

//ocultar loading
const hideLoading = () => {
setIsLoading(false)
}

//pantalla de carga
const loadingScreen = <div className="loading"> <FadeLoader color="#157efb" />  </div>

return { isLoading, showLoading, hideLoading, loadingScreen }
}
export default useLoading