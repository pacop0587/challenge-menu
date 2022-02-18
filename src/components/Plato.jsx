import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const Plato = () => {
	//Hooks
	const [platos, setPlatos] = useState([])

    const foodApi = () => {
      axios.get('https://api.spoonacular.com/recipes/complexSearch?query=pasta&addRecipeInformation=true&number=1&apiKey=6dff7ae5fb494b77a7ce743e57fbc5df')
		  .then((response) => {
			console.log(response.data)
			// const title = response.data.menuItems[0].title
			// const image = response.data.menuItems[0].image

			// setPlatos(...platos, { title, image });

			
        })

        .catch((error) => {
          console.log(error)

        })

    }
    //foodApi();


    

  return (
	  <div className=''>
		<h2 className='text-center'>Menu</h2>
		<div className="card">
			<div className="card-header">
				Plato
			</div>
			<div className="card-body">
				  <div className="row">
					  <div className="col-8">
						  <h5 className="card-title">{platos.title }</h5>
						<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
						<a href="#" className="btn btn-primary">Go somewhere</a>
					  </div>
					  <div className="col-4">
						<img src={platos.image} className='img-fluid' />
					  </div>
				  </div>	  

			</div>
		</div>
    </div>
  )
}

export default Plato