import React from 'react'


export const Papito = ({nombre, imagen, descripcion}) => {
  return (
    <div className="bgimg-2">
        <div className="caption">
          <div class="cardBox">
            <div class="card">
              <h2>{nombre}</h2>

              <div class="contenido">
                <h3>{nombre}</h3>
                <p>{descripcion}</p>
              </div>
            </div>
          </div>
          <span className="border">Sapere Aude</span>
        </div>
      </div>
  )
}
