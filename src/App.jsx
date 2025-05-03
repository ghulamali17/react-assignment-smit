import { Link } from 'react-router-dom';
import Todo from './components/Todo.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './components/Product.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import { useTheme } from './ThemeContext.jsx';

function App() {
  const { toggleTheme } = useTheme();

  return (
    <BrowserRouter>
      <nav className="p-4 bg-inherit text-inherit flex items-center justify-between">
        <div>
          <Link to="/product" className="mr-4 hover:underline">Product</Link>
          <Link to="/" className="mr-4 hover:underline">Home</Link>
        </div>
        <button 
          onClick={toggleTheme}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
        >
          Change Theme
        </button>
      </nav>
      
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/product" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
