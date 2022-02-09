
function App() {
  

  return (
    <div className="vh-100 gradient-custom">
		<div className="container py-5 h-100">
			<div className="row d-flex justify-content-center align-items-center h-100">
				<div className="col-12 col-md-8 col-lg-6 col-xl-5">
					<div className="card bg-dark text-white">
						<div className="card-body p-5 text-center">
							<div className="mb-md-4 mt-md-4 pb-2">
								<h2 className="fw-bold mb-2 text-uppercase">Login</h2>
								<p className="text-white-50 mb-5">Por favor, ingresa tu correo y contraseña</p>
								<div className="form-outline form-white mb-4">
									<input type="email" className="form-control form-control-lg" />
									<label className="form-label mt-2">Correo</label>
								</div>
								<div className="form-outline form-white mb-4">
									<input type="password" className="form-control form-control-lg" />
									<label className="form-label mt-2" >Contraseña</label>
								</div>
								<button className="btn btn-outline-light btn-lg px-5 mt-3" type="submit">Ingresar</button>
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
