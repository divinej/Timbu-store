import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './App.css';
import Store from './pages/store';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import Success from './pages/Success';
import ProductDetailPage from './pages/ProductDetailPage';


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Store />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/checkout" element={<CheckoutPage />}></Route>
        <Route path="/product" element={<ProductDetailPage />}></Route>
        <Route path="/success" element={<Success />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
