import axios from "axios"
import { useFormik } from "formik"
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { CommonButton } from "../../Components/Button/Button"

const AddMedicine = () => {
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState(null)
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      productName: "",
      price: "",
      category: "",
      file: null,
      companName: "",
      productType: "",
      weight: "",
      isPrescribed: false,
    },
    // validationSchema: signUpSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values)
      handleSubmit(values)
    },
    enableReinitialize: true,
    validateOnChange: false,
  })
  const apiKey = "f633b9b2b900fa4ce91d346d6b992734"
  const handleSubmit = async (values) => {
    setLoading(true)
    const url = "https://api.imgbb.com/1/upload"
    const formData = new FormData()

    formData.append("image", image)
    formData.append("key", apiKey)
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    }

    try {
      const imgbbResponse = await axios.post(url, formData, config)
      const imageUrl = imgbbResponse.data.data.url
      const allData = {
        ...values,
        image: imageUrl,
      }
      const anotherApiResponse = await axios.post(
        "http://localhost:5000/medisin",
        // "https://prime-automation-server-production.up.railway.app/product",
        allData
      )
      console.log(anotherApiResponse)
      toast.success("Medicine Added successfully")
      navigate("/")
    } catch (error) {
      setLoading(false)
    }
  }
  const handleImage = (e) => {
    setImage(e.target.files[0])
  }
  return (
    <div className="my-10">
      <div>
        <div className="flex w-full mt-2 max-w-sm mx-auto overflow-hidden bg-primary shadow-xl lg:max-w-3xl m-3 rounded">
          <div className="w-full px-6 py-8 md:px-8">
            <div className="font-bold text-2xl underline text-black text-center justify-center">
              Add Medicine
            </div>

            <form
              className="w-4/6 ml-auto mr-auto"
              onSubmit={formik.handleSubmit}
            >
              <div className="mt-4 text-left">
                <label
                  className="block mb-2 text-sm font-medium text-black"
                  htmlFor="productName"
                >
                  Product Name
                </label>
                <input
                  id="productName"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  name="productName"
                  onChange={formik.handleChange}
                  value={formik.values.productName}
                  required
                  placeholder="Enter Product Name"
                />
                {formik.touched.productName && formik.errors.productName && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.productName}
                  </div>
                )}
              </div>

              <div className="mt-4 text-left">
                <label
                  className="block mb-2 text-sm font-medium text-black"
                  htmlFor="category"
                >
                  Medicine Category
                </label>
                <select
                  id="category"
                  name="category"
                  autoComplete="category"
                  onChange={formik.handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  value={formik.values.category}
                >
                  <option value="">Select Category</option>
                  <option value="Diabetic Care">Diabetic Care</option>
                  <option value="Supplies & Equipment">
                    Supplies & Equipment
                  </option>
                  <option value="Vitamins and Supplements">
                    Vitamins and Supplements
                  </option>
                  <option value="Personal Care">Personal Care</option>
                  <option value="Women Care">Women Care</option>
                  <option value="Herbal Product">Herbal Product</option>
                  <option value="Sexual Wellbeing">Sexual Wellbeing</option>
                  <option value="Baby & Mom Care">Baby & Mom Care</option>
                  <option value="Surgical Products">Surgical Products</option>
                  <option value="Dental & Oral Care">Dental & Oral Care</option>
                  <option value="Medical Supplies and Equipment">
                    Medical Supplies & Equipment
                  </option>
                </select>
                {formik.touched.category && formik.errors.category && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.category}
                  </div>
                )}
              </div>

              <div className="mt-4 text-left">
                <label
                  className="block mb-2 text-sm font-medium text-black"
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  id="price"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  name="price"
                  onChange={formik.handleChange}
                  value={formik.values.price}
                  required
                  placeholder="Enter Price"
                />
                {formik.touched.price && formik.errors.price && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.price}
                  </div>
                )}
              </div>

              <div className="mt-4 text-left">
                <label
                  className="block mb-2 text-sm font-medium text-black"
                  htmlFor="companName"
                >
                  Company Name
                </label>
                <input
                  id="companName"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  name="companName"
                  onChange={formik.handleChange}
                  value={formik.values.companName}
                  required
                  placeholder="Enter Company Name"
                />
                {formik.touched.companName && formik.errors.companName && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.companName}
                  </div>
                )}
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <label
                    className="block mb-2 text-sm font-medium text-black dark:text-black"
                    for="file"
                  >
                    Select Image
                  </label>
                </div>

                <input
                  id="file"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="file"
                  name="file"
                  onChange={handleImage}
                  // value={data.password}
                  placeholder="file"
                />
              </div>
              <div className="mt-4 text-left">
                <label
                  className="block mb-2 text-sm font-medium text-black"
                  htmlFor="productType"
                >
                  Medicine Type
                </label>
                <input
                  id="productType"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  name="productType"
                  onChange={formik.handleChange}
                  value={formik.values.productType}
                  required
                  placeholder="Enter Medicine Type"
                />
                {formik.touched.productType && formik.errors.productType && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.productType}
                  </div>
                )}
              </div>

              <div className="mt-4 text-left">
                <label
                  className="block mb-2 text-sm font-medium text-black"
                  htmlFor="weight"
                >
                  Weight
                </label>
                <input
                  id="weight"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  name="weight"
                  onChange={formik.handleChange}
                  value={formik.values.weight}
                  required
                  placeholder="Enter Weight"
                />
                {formik.touched.weight && formik.errors.weight && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.weight}
                  </div>
                )}
              </div>

              <div className="mt-4 text-left">
                <label
                  className="block mb-2 text-sm font-medium text-black"
                  htmlFor="isPrescribed"
                >
                  Is Prescribed
                </label>
                <div className="flex items-center">
                  <input
                    id="isPrescribed"
                    name="isPrescribed"
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.isPrescribed}
                  />
                  <label
                    className="ml-2 text-sm text-black"
                    htmlFor="isPrescribed"
                  >
                    {formik.values.isPrescribed ? "Yes" : "No"}
                  </label>
                </div>
              </div>

              <div className="mt-2">
                <CommonButton
                  className="mr-2 bg-green-500 hover:bg-green-600 text-black py-2 px-4 rounded"
                  title="Save"
                  disabled={false}
                  label="Save"
                  type="submit"
                  icon="pi pi-save"
                  loading={loading}
                />
              </div>
            </form>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

              <Link
                to="/login"
                className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
              >
                Back to Login
              </Link>

              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddMedicine
