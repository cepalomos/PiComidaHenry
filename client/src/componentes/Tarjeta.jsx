import React from 'react'

export default function Tarjeta(props) {
  return (
    <div>
        <div className='contenedor-imagen'>
            <img src={props.imagen} alt={`Imagen de ${props.name}`}/>
        </div>
        <div>
            <h4>{props.name}</h4>
            <p>{props.dietas.join(", ")}</p>
        </div>
    </div>
  )
}
