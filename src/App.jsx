
import Todo from './components/Todo.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './components/Product.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import Navbar from './components/Navbar.jsx';
function App() {
  return (
    <BrowserRouter>
     <Navbar/>    
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/product" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
