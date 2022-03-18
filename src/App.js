import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Contact } from "./components/Contact";
import { Us } from "./components/Us";
import { CartProvider } from "./context/CartContext";
import { Cart } from "./components/Cart/Cart";
import { Checkout } from "./components/Checkout/Checkout";
import "./styles/styles.scss";


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={ <ItemListContainer /> } />
          <Route path='/languages/:catId' element={ <ItemListContainer/> }/>
          <Route path='/detail/:itemId' element={ <ItemDetailContainer/> }/>
          <Route path='/us' element={ <Us /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/cart' element={ <Cart /> } />
          <Route path='/checkout' element={ <Checkout />} />
          <Route path='*' element={ <Navigate to='/'/> }/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
