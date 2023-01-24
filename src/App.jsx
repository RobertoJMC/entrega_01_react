import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import NavBar from './componentes/Navbar/NavBar';

function App(){

  const greeting="Bienvenidos a Todo Sobre Ruedas";

    return(
      <>
          <NavBar />
          <ItemListContainer greeting={greeting} />
      </>
    )
}

export default App
