import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CartContainer from './componentes/CartContainer/CartContainer';
import { ItemCount } from './componentes/ItemCount/ItemCount';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import NavBar from './componentes/Navbar/NavBar';

function App(){

  const greeting="Bienvenidos a Todo Sobre Ruedas";

    return(
      <>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={greeting} />}/>
            <Route path='/categoria/:idCategoria' element={<ItemListContainer />}/>
            <Route path='/detalle/:idProducto' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<CartContainer />}/>
            <Route  path='#' element={<Navigate to='/' />}/>
          </Routes>
          {/* <ItemCount /> */}
        </BrowserRouter>
      </>
    )
}

export default App
