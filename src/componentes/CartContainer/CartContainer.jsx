import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import "./CartContainer.css";
import trash from "../../assets/red-trash.png";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";

const CartContainer = () => {
  const [id, setId] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    repetirEmail: "",
  });

  const { cartList, vaciarCarrito, precioTotal, eliminarProducto } =
    useCartContext();

  const [errors, setErrors] = useState({});

  const insertarOrder = (evt) => {
    evt.preventDefault();
    const order = {};
    order.buyer = formData;

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "El nombre es requerido";
    }
    if (!formData.phone) {
      newErrors.phone = "El numero telefonico es requerido";
    }
    if (!formData.email) {
      newErrors.email = "El correo electronico es requerido";
    }
    if (!formData.repetirEmail) {
      newErrors.repetirEmail = "El correo electronico es requerido";
    }
    setErrors(newErrors);

    if (formData.email !== formData.repetirEmail) {
      alert("Correo electronico no coincide, escribalo nuevamente");
    } else {
      if (Object.keys(newErrors).length === 0) {
        addDoc(ordersCollection, order)
          .then((resp) => setId(resp.id))
          .catch((err) => console.log(err))
          .finally(() => {
            vaciarCarrito();
            setFormData({
              name: "",
              phone: "",
              email: "",
              repetirEmail: "",
            });
          });
      }
    }
  };

  const handleOnChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  };

  return (
    <>
      <div className="inicio">
        {cartList.length === 0 ? (
          <>
            {id === "" ? (
              <p className="borde malo">El carrito esta vacio</p>
            ) : (
              <h1>El id de tu compra es: {id}</h1>
            )}
            <Link to="/">
              <button className="btn btn-outline-dark">Volver</button>
            </Link>
          </>
        ) : (
          <p className="borde">
            {precioTotal() !== 0 && `Total de la compra: ${precioTotal()}`}
          </p>
        )}
      </div>

      <div className="carrito">
        {cartList.map((producto) => (
          <div key={producto.id}>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="card h-100 w-100 col">
                <div className="w-100 card h-100">
                  <img
                    src={producto.imagen}
                    className="w-15 h-25 card-img-top"
                    alt="imagen"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text"> Precio: {producto.precio}</p>
                    <p className="card-text"> Cantidad: {producto.cantidad}</p>
                    <p className="card-text">
                      {" "}
                      Total: {producto.cantidad * producto.precio}
                    </p>
                  </div>
                  <div className="card-footer">
                    <button
                      className="btn btn-outline-dark"
                      onClick={() => eliminarProducto(producto.id)}
                    >
                      <img src={trash} alt="eliminar" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        {cartList.length !== 0 ? (
          <div className="cabeceraCarrito borde">
            <div>
              <form onSubmit={insertarOrder}>
                <label htmlFor="name">Nombre: </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Ingrese el nombre"
                  onChange={handleOnChange}
                  value={formData.name}
                />
                <p>{errors.name}</p>
                <br />
                <label htmlFor="phone">Telefono: </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Ingrese el teléfono"
                  onChange={handleOnChange}
                  value={formData.phone}
                />
                <p>{errors.phone}</p>
                <br />
                <label htmlFor="email">Correo: </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Ingrese el email"
                  onChange={handleOnChange}
                  value={formData.email}
                />
                <p>{errors.email}</p>
                <br />
                <label htmlFor="repetirEmail">Repetir correo: </label>
                <input
                  type="text"
                  name="repetirEmail"
                  placeholder="Repetir el email"
                  onChange={handleOnChange}
                  value={formData.repetirEmail}
                />
                <p>{errors.repetirEmail}</p>
                <br />
                <button className="btn btn-outline-success" type="submit">
                  Generar orden
                </button>
                <button
                  className="btn btn-outline-warning"
                  onClick={vaciarCarrito}
                >
                  Vaciar Carrito
                </button>
              </form>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default CartContainer;
