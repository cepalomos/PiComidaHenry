import React from 'react'

export default function Busqueda() {
  return (
    <div>
        <label for='buscar'>Busqueda por nombre</label>
        <input id='buscar' name='buscar' type='text'/>
        <button id='buscarName'>Buscar</button>
    </div>
  )
}
