import './App.css'
import NavBar from './components/BarraNavegacion/NavBar'
import ItemListContainer from './components/ListadoItems/ItemListContainer'


function App() {


  return (
      <div>
        <NavBar/>
        <ItemListContainer texto = "Este es mi lista de items enviada desde app.jsx" />
      </div>
  )
}

export default App
