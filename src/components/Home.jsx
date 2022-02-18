import React from 'react'
import Plato from './Plato'
import Formulario from './Formulario'

const Home = () => {
  return (
    <div className='vh-100 gradient-custom'>
        <div className="container-fluid">
            <h1>Welcome to Home</h1>
            <div className="row">
				<div className="col-4">
					<h2 className='text-center'>Formulario</h2>
          			<Formulario />     
				</div>
				<div className="col-3">
					<h2 className='text-center'>Healhscore</h2>	  
				</div>  
                    <div className="col-5">
                	<Plato />
                </div>      
            </div>      
        </div>
    </div>
  )
}

export default Home