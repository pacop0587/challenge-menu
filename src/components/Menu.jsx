import React from 'react'
import Plato from './Plato'

const Menu = ({item, modoMenu, eliminarPlato}) => {
  return (
    <Plato item={item} modoMenu={modoMenu} eliminarPlato={eliminarPlato} />
  )
}

export default Menu