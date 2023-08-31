import axios from "axios"
import React, { useEffect, useState } from "react"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import Loader from "../../Components/Loader/Loader"

const AllMedicine = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])

  const ProductData = async () => {
    try {
      setLoading(true)
      const response = await axios.get("http://localhost:5000/medisin")
      setLoading(false)
      setProducts(response?.data)
    } catch (error) {
      setLoading(false)
    }
  }

  useEffect(() => {
    ProductData()
  }, [])

  const handleEdit = (productId) => {
    navigate(`/edit-medicine/${productId}`)
  }
  const handleDelete = async (productId) => {
    const proceed = window.confirm('Are you sure you want to delete this product?');
    if (proceed) {
      try {
        const response = await axios.delete(
          `http://localhost:5000/medisin/${productId}`
        )
        console.log(response.data) // Print the response data if desired
        // navigate("/all-medicine");
        toast.success('Product Deleted Successfully');
        ProductData()
      } catch (error) {
        console.error("Error deleting medisin:", error)
      }
    }
  }
  const getRandomColor = () => {
    const colors = [
      "bg-blue-100",
      "bg-purple-100",
      "bg-red-100",
      "bg-emerald-100",
    ]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  return (
    <div className='max-w-6xl mx-auto my-7'>
      <h3 className='text-4xl font-bold mb-3 text-center'>All Medicine</h3>

      <div className="container mx-auto mt-8">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 py-8 px-12 sm:px-0 cursor-pointer mx-auto">
          {
            loading ?
              <Loader>
              </Loader>
              :
              products.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white rounded shadow-lg p-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 ${getRandomColor()}`}
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.productName}
                      className="w-full h-40 object-cover mb-4 rounded-lg transition duration-300 ease-in-out transform"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0">
                      <img
                        src={product.image}
                        alt={product.productName}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                  <h2 className="text-lg font-bold">{product.productName}</h2>
                  <p className="text-gray-500 mb-2">{product.category}</p>
                  <div className="flex justify-end">
                    <button
                      className="mr-2 bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded"
                      onClick={() => handleEdit(product._id)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  )
}

export default AllMedicine
