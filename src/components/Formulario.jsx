import React from 'react'
import { Formik } from 'formik'

const Formulario = ({ queryMenu}) => {


  return (
    <>
		<Formik
			initialValues={{
				plato: ''
			  }}
			  //Validacion de la busqueda
			  validate={(valores) => {
				  let error = {};
				  if (valores.plato.length <= 2) {
					error.plato = 'Debe contener mas de dos caracteres'
				}
				  return error;
			}}
			onSubmit={(valores, {resetForm}) => {
				const valoresLower = valores.plato.toLowerCase();
				resetForm();
				queryMenu(valoresLower)
			}}
		  
		  >
			{({values, errors, handleSubmit, handleChange}) => (
				<form className='card bg-dark text-white' onSubmit={handleSubmit}>
					<div className="card-body">
						<div className="mb-3">
							<label className="form-label">Ingrese plato</label>
							<input
								id='plato'
								type="text"
								className="form-control"
								value={values.plato}
								onChange={handleChange}
							  />
							{errors.plato && <div className='text-danger'>{errors.plato}</div>}
						</div>
						<button type="submit" className="btn btn-outline-light ">Buscar</button>
					</div>
				</form>
		)}

      </Formik>
    </>
    
  )
}

export default Formulario