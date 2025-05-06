import { useTheme } from "../ThemeContext";
import { Link } from 'react-router-dom';
function Navbar() {
    const { toggleTheme } = useTheme();
  return (
    <>
        <nav className="p-4 bg-inherit text-inherit flex items-center justify-between">
        <div>
        <Link to="/" className="mr-4 hover:underline">Home</Link>
          <Link to="/product" className="mr-4 hover:underline">Product</Link> 
        </div>
        <button 
          onClick={toggleTheme}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
        >
          Change Theme
        </button>
      </nav>
    </>
  );
}

export default Navbar;
