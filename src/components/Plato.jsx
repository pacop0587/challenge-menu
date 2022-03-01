import React from 'react';
import { useState } from 'react';

const Plato = ({item, agregarMenu, modoMenu, eliminarPlato}) => {
	//Hooks
	const [detalles, setDetalles] = useState(false);

	//Mostrar y ocultar los detalles del plato
	const mostrarDetalles = () => {
		setDetalles(true);
	}
	const ocultarDetalles = () => {
		setDetalles(false);
	}
    

  return (
	  <div className='mt-2 mb-2 mx-3' key={item.id}>
		<div className="card bg-dark text-light">
			<div className="card-header" value={item.id}>
				Plato {item.id}
			</div>
			<div className="card-body bg-dark">
				  <div className="row">
					  <div className="col-8">
						  <h5 className="card-title" value={item.title}>{ item.title }</h5>
						  <p className="card-text">{item.summary}</p>
						  <p className='card-text'>Precio: ${item.price}</p>
						  <p className='card-text'>Tiempo de preparacion: { item.readyInMinutes} min.</p>
						  {
							detalles &&  (<p>Mostrando detalles</p>)
						  }
						  {
							  modoMenu
								  ? <div className=''>
									  {
										  detalles ? (
											  		<button
										  			className="btn btn-light bg-light bg-gradient mx-2"
										  			onClick={() => ocultarDetalles()}>
										  			Ocultar
											  		</button>)
													: (
														<button
														className="btn btn-light bg-grey mx-2"
														onClick={() => mostrarDetalles()}>
														Ver detalles
														</button>)
									  }
									  	<button
										  className='btn btn-danger mx-2'
									  	  onClick={() => eliminarPlato(item.id)}>
										  Eliminar
									  	</button>

								  	</div>
								  : <button
									  className="btn btn-light bg-light bg-gradient"
									  onClick={() => agregarMenu(item)}>
									  Agregar
								  	</button>
						  }
					  </div>
					  <div className="col-4">
						<img  className='img-fluid' src={item.image} width = '150px' />
					  </div>
				  </div>	  
			</div>
		</div>
    </div>
  )
}

export default Plato