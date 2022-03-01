import React, { useState } from 'react'
import axios from 'axios';
import Plato from './Plato'
import Formulario from './Formulario'
import Menu from './Menu';
import HealtScore from './HealtScore';
import { nanoid } from 'nanoid';

const Home = () => {
    //Hooks
    const [platosEncontrados, setPlatosEncontrados] = useState([]);
    const [menu, setMenu] = useState([]);
    const [modoMenu, setModoMenu] = useState(false);
    const [totalPagar, setTotalPagar] = useState(0)
    const [totalTiempo, setTotalTiempo] = useState(0);
    
    
    //Agregar los platos encontrados al menu
    const agregarMenu = (item) => {
        setMenu([...menu, { id: item.id, title: item.title, summary: item.summary,image: item.image, price: item.price, readyInMinutes: resultado.readyInMinutes }]);
        setModoMenu(true);
        setTotalPagar(totalPagar + item.price);
        setTotalTiempo(totalTiempo + item.readyInMinutes);
    }

    //Eliminar platos, restar los precios y tiempo
    const eliminarPlato = (id) => {
        const nuevoMenu = menu.filter(item => item.id !== id)
        //**Restar precio
        const restaPrecio = nuevoMenu.map((cont) => {
            let contador = 0;
            contador = contador + cont.price
            return contador
        })
        let restaPrecioTotal = 0
        if (restaPrecio == 0) {
            setTotalPagar(0)
            
        }
        else {
            restaPrecioTotal = restaPrecio.reduce((a, b) => a + b)
            setTotalPagar(restaPrecioTotal)
        }

        //**Restar tiempo
        const restaTiempo = nuevoMenu.map((cont) => {
            let contadorTiempo = 0;
            contadorTiempo = contadorTiempo + cont.readyInMinutes
            return contadorTiempo
        })
        let restaTiempoTotal = 0;
        if (restaTiempo == 0) {
            setTotalTiempo(0)
        }
        else {
            restaTiempoTotal = restaTiempo.reduce((a, b) => a + b)
            setTotalTiempo(restaTiempoTotal);
        }

        setMenu(nuevoMenu);

    }
    const queryMenu = async(plato) => {
            try {
                let dataQuery = [];
                axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${plato}&number=2&addRecipeInformation=true&apiKey=b7a0a697c4a04c30a1603566290d5236`)
                    .then((response) => {
                         response.data.results.map((resultado) => {
                             dataQuery.push({
                                 id: nanoid(5),
                                 title: resultado.title,
                                 image: resultado.image,
                                 summary: resultado.summary,
                                 healtscore: resultado.healtscore,
                                 price: resultado.price,
                                 readyInMinutes: resultado.readyInMinutes,
                                 vegan: resultado.vegan
                             })
                             swal({
                                 title: 'Busqueda exitosa',
                                 icon: 'success'
                             })
                         })
                         setPlatosEncontrados(dataQuery);
                    })
            } catch (error) {
                    swal({
                        title: 'No se encontraron resultados',
                        icon: 'error'
                    })
                console.log(error)
            }
    }

  return (
    <div className='min-vh-100 bg-dark-2'>
        <div className="container text-light">
            <h1>Welcome</h1>
            <div className="row mt-4 mb-5">
				<div className="col-12 col-sm-6">
					<h2 className='text-center'>Buscar plato</h2>
                      <Formulario

                          queryMenu={queryMenu}
                      />     
				</div>
                <div className="col-12 col-sm-6">
                      <h2 className='text-center'>Healt Score</h2>
                      <HealtScore totalPagar={totalPagar} totalTiempo={totalTiempo}  />    
				</div>  
            </div>  
              <div className="row pt-5">
                    <div className="col-12 col-sm-6">
                        <h2 className='text-center'>Platos encontrados</h2>
                            {
                                <>
                                    {

                                        platosEncontrados.map((item) => {
                                            return(
                                                <Plato item={item} agregarMenu = {agregarMenu} />
                                            )
                                        }) 
                                    }
                                </>
        
                            }  

                  </div> 
                  <div className="col-12 col-sm-6">
                      <h2 className='text-center'>Menu</h2>
                      {
                          <>
                              {
                                  menu.map((item) => {
                                      return (
                                          <Menu item={item} modoMenu={modoMenu} eliminarPlato={eliminarPlato} />
                                    )
                                  })
                              }
                          </>
                      }
                  </div>
              </div>  
        </div>
    </div>
  )
}

export default Home