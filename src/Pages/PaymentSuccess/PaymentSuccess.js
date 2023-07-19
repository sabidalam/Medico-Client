import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton"
import img from "../../assets/success.png"

const PaymentSuccess = () => {
  const { tranId } = useParams()
  console.log("transactionId", tranId)
  const navigate = useNavigate()

  const handleContinueShopping = () => {
    navigate("/")
  }

  return (
    <div className="max-w-screen-lg mx-auto my-7 bg-gray-100">
      <div className="bg-white p-8 rounded shadow text-center">
        <h2 className="text-4xl font-bold mb-4 text-green-700">Payment Successful!</h2>
        <div className="flex justify-center items-center">
          <img src={img} alt="" className="h-56" />
        </div>
        <p className="text-gray-700 text-2xl">
          Thank you for your payment. Your transaction was successful.
        </p>
        <p className="text-gray-700">Your transaction ID is: {tranId}</p>
        <div className="mt-6 text-center">
          <PrimaryButton
            classes={`h-12 btn-sm normal-case hover:scale-105 duration-500`}
            onClick={handleContinueShopping}
          >
            Continue Shopping
          </PrimaryButton>
        </div>
      </div>
    </div>
  )
}

export default PaymentSuccess
