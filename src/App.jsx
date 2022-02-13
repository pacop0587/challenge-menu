import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Home from "./components/Home"

function App() {
	//Variable que verifica si existe un token guardado en localstorage
	const sesionIniciada = localStorage.getItem('tokenUser');

  return (
    <>
		<BrowserRouter >
			  <Routes>
				  <Route path='/' element={<Login />} />
				  <Route path="/home" element = {sesionIniciada ? <Home /> : <Login />} />
			  </Routes>	  
      	</BrowserRouter>
    </>
  )
}

export default App
