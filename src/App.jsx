import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Home from "./components/Home"

function App() {
	//Variable que verifica si existe un token guardado en localstorage
	//let sesionIniciada = localStorage.getItem('tokenUser');


  return (
    <div>
		<BrowserRouter >
			  <Routes>
				  <Route path='/' element={<Login />} />
				  <Route path="/home" element = { <Home /> } />
			  </Routes>	  
      	</BrowserRouter>
    </div>
  )
}

export default App
