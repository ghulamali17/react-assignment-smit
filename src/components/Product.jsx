import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useNavigate, Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";
function Product() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      alert("Something went wrong! Please check your Internet connection.");
      console.error("Error fetching products:", error);
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={`${isDark ? "bg-gray-900 text-white" : "bg-white text-black"} font-poppins`}>
          {/* Title */}
          <div className="text-center mb-4">
            <h1 className="font-bold text-4xl pt-5">SHOP NOW</h1>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1170px] mx-auto gap-4 p-4">
            {data.map((item) => (
              <div
                className={`border rounded-lg p-4 shadow-md ${isDark ? "bg-gray-800 text-white" : "bg-white text-black"}`}
                key={item.id}
              >
                <div className="relative h-60 flex items-center justify-center">
                  <img
                    className="h-full object-contain"
                    src={item.image}
                    alt={item.title}
                  />
                  <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 rounded">
                    39% OFF
                  </span>
                </div>

                <h5 className="text-lg font-semibold mt-2">
                  {item.title.substring(0, 20)}...
                </h5>

                <div className="flex justify-between items-center mt-2">
                  <p className="text-xl font-bold">${item.price}</p>
                  <p className="text-sm line-through text-gray-500">$999</p>
                </div>

                {/* <button
                  onClick={() => addToCartHandler(item)}
                  className={`mt-3 w-full py-2 rounded ${
                    isDark ? "bg-gray-700 hover:bg-gray-600" : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  Add to Cart
                </button> */}

                <Link
                  to={`/products/${item.id}`}
                  className="block mt-2 text-center text-blue-500 hover:underline"
                >
                  See More
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
