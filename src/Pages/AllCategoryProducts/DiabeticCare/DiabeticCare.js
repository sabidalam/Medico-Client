import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton"
import ProductCard from "../../../Components/PoductCard/ProductCard"
import axios from "axios"
import Loader from "../../../Components/Loader/Loader"


const DiabeticCare = () => {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])

    const ProductData = async (value) => {
        try {
            setLoading(true)
            await axios
                .get(`http://localhost:5000/medisin`)
                .then(function (res) {
                    setProducts(res?.data)
                    setLoading(false)

                    console.log(res?.data)
                })
                .catch(function (error) {
                    setLoading(false)
                })
        } catch (err) {
            setLoading(false)
        }
    }
    useEffect(() => {
        ProductData()
    }, [])
    function filterByCategory(array, category) {
        return array.filter(function (item) {
            return item.category === category
        })
    }
    var filteredItems = filterByCategory(products, "Diabetic Care")
    console.log("Diabetic Care", products)

    if (loading) {
        return <Loader></Loader>
    }
    return (
        <div className="max-w-6xl mx-auto my-5 relative">
            <h3 className='text-4xl font-bold mb-3 text-center'>Diabetic Care</h3>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 py-8 px-12 sm:px-0 cursor-pointer mx-auto">
                {
                    filteredItems.map((product) => (
                        <ProductCard key={product.id} product={product}></ProductCard>
                    ))

                }
            </div>
        </div>
    );
};

export default DiabeticCare;