import React from 'react'

const HealtScore = ({totalPagar, totalTiempo}) => {
  return (
    <div className='bg-dark h-100 py-5 px-5'>
      <p>Total a pagar: ${totalPagar} </p>
      <p>Total tiempo de preparacion: { totalTiempo} min</p>
    </div>
  )
}

export default HealtScore