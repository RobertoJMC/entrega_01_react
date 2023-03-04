import React from 'react'
import { Link } from 'react-router-dom'

const InputCount = () => {
  return (
    <div>
        <center className="card mt-5 w-100">
          <div className="card-body">
            <Link to="/cart">
              <button className="btn btn-outline-dark w-50">
                Ir al Carrito
              </button>
            </Link>
            <Link to="/">
              <button className="btn btn-outline-dark w-50">
                Seguir comprando
              </button>
            </Link>
          </div>
        </center>
    </div>
  )
}

export default InputCount