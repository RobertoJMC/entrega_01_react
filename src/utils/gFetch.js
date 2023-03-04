const productos = [
    {id: '1', categoria: 'Bicicletas', nombre: 'Mountain bike R29', detalle: 'Caracteristicas pendientes por escribir', precio: 150000, imagen: '../../src/assets/bici_1.jpg'},
    {id: '2', categoria: 'Bicicletas', nombre: 'Mountain bike R26', detalle: 'Caracteristicas pendientes por escribir', precio: 130000, imagen: '../../src/assets/bici_2.jpg'},
    {id: '3', categoria: 'Patinetas', nombre: 'Patineta Rosa', detalle: 'Caracteristicas pendientes por escribir', precio: 12000, imagen: '../../src/assets/patineta_1.jpg'},
    {id: '4', categoria: 'Patinetas', nombre: 'Patineta verde', detalle: 'Caracteristicas pendientes por escribir', precio: 12000, imagen: '../../src/assets/patineta_2.jpg'},
    {id: '5', categoria: 'Patines', nombre: 'Patines talla S', detalle: 'Caracteristicas pendientes por escribir', precio: 8500, imagen: '../../src/assets/patines_1.jpg'},
    {id: '6', categoria: 'Patines', nombre: 'Patines talla M', detalle: 'Caracteristicas pendientes por escribir', precio: 9000, imagen: '../../src/assets/patines_2.jpg'},
    {id: '7', categoria: 'Electricos', nombre: 'Monopatin 50km/h', detalle: 'Caracteristicas pendientes por escribir', precio: 450000, imagen: '../../src/assets/electrico_1.jpg'},
    {id: '8', categoria: 'Electricos', nombre: 'Monopatin 30km/h', detalle: 'Caracteristicas pendientes por escribir', precio: 250000, imagen: '../../src/assets/electrico_2.jpg'},
]
 
  export const gFetch = () => {
    return new Promise (( res, rej ) => 
        setTimeout(() =>{ 
          res( productos ) 
        }, 1000)
    )}