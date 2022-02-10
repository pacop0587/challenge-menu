import { useState } from "react"
import validator from "validator";
import Error from "./components/Error";

function App() {
	//Hooks 
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);
	const [errorEmail, setErrorEmail] = useState(false)
  
	//Validacion de Login
	const validarLogin = (e) => {
		e.preventDefault();

		if ([email, password].includes('')) {
			setError(true)
			return
		}
		if (!validator.isEmail(email)) {
			setError(false)
			setErrorEmail(true)
			return
		}

		console.log('Campos completados!!!!');
		setError(false);
		setErrorEmail(false);
	}


  return (
    <div className="vh-100 gradient-custom">
		<div className="container py-5 h-100">
			<div className="row d-flex justify-content-center align-items-center h-100">
				<div className="col-12 col-md-8 col-lg-6 col-xl-5">
					<div className="card bg-dark text-white">
						<div className="card-body p-5 text-center">
							<div className="mb-md-4 mt-md-4 pb-2">
								{
									error && <Error mensaje='Debes completar los campos' />  
								}	  
								{
									errorEmail && <Error mensaje='El email no tiene el formato correcto' />
								}
								<h2 className="fw-bold mb-2 text-uppercase">Login</h2>
								<p className="text-white-50 mb-5">Por favor, ingresa tu correo y contraseña</p>
								<div className="form-outline form-white mb-4">
									<input
										type="email"
										className="form-control form-control-lg"
										onChange={(e) => setEmail(e.target.value)}
									  />
									<label className="form-label mt-2">Correo</label>
								</div>
								<div className="form-outline form-white mb-4">
									<input
										type="password"
										className="form-control form-control-lg"
										onChange={(e) => setPassword(e.target.value)}  
									  />
									<label className="form-label mt-2" >Contraseña</label>
								</div>
								<button
									className="btn btn-outline-light btn-lg px-5 mt-3"
									type="submit"
									onClick={validarLogin}
								>
									Enviar
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
  )
}

export default App
