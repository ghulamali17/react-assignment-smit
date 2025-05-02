import { Link } from 'react-router-dom';
import Todo from './components/Todo.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './components/Product.jsx';
import ProductDetails from './components/ProductDetails.jsx';

function App() {
  return (
    <BrowserRouter>
      <nav className="p-4 bg-white text-black flex  items-center">
        <div>
          <Link to="/product" className="mr-4 hover:text-gray-400">Product</Link>
        </div>
        <Link to="/">
          <button 
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
          >
            Home
          </button>
        </Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/product" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
