import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();


  // Fetch product
  const getProd = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      alert("Something went wrong while fetching the product.");
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProd();
  }, [id]);


  if (loading || !product) return <Loading />;

  return (
    <div className="py-8 mt-[100px] font-poppins bg-white text-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          {/* Left Side */}
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-200 mb-4">
              <img
                className="w-full h-full object-contain"
                src={product.image}
                alt={product.title}
              />
            </div>

            
          </div>

          {/* Right Side */}
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
            <p className="text-sm mb-4 text-gray-700">{product.description}</p>

            <div className="mb-4">
              <p className="font-bold">Price: <span className="ml-2 text-xl">${product.price}</span></p>
              <p className="font-bold mt-2">Category: <span className="ml-2">{product.category}</span></p>
             
            </div>

            <button
              className="flex items-center justify-center bg-black text-white px-5 py-2.5 rounded hover:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
