import { createBrowserRouter } from "react-router-dom"
import AddToCard from "../Components/Card/AddToCard"
import Main from "../Layout/Main"
import AboutUs from "../Pages/AboutUs/AboutUs"
import ContactUs from "../Pages/ContactUs/ContactUs"
import Home from "../Pages/Home/Home"
import AddMedicine from "../Pages/Medicine/AddMedicine"
import OtcDrugs from "../Pages/OtcDrugs/OtcDrugs"
import ProductDetails from "../Pages/ProductDetails/ProductDetails"
import ViewAddToCartProduct from "../Pages/ProductDetails/ViewAddToCartProduct"
import Login from "../Pages/Authentication/Login"
import Registration from "../Pages/Authentication/Registration"
import PlaceOrder from "../Pages/Order/PlaceOrder"
import OrderDashboard from "../Pages/Order/OrderDashboard"
import AssignRole from "../Pages/RoleAssign/AssignRole"
import AllMedicine from "../Pages/Medicine/AllMedicine"
import EditMedicine from "../Pages/Medicine/EditMedicine"
import PaymentSuccess from "../Pages/PaymentSuccess/PaymentSuccess"
import img from "../assets/404error.jpg"
import DiabeticCare from "../Pages/AllCategoryProducts/DiabeticCare/DiabeticCare"
import BabyCare from "../Pages/AllCategoryProducts/BabyCare/BabyCare"
import Supplies from "../Pages/AllCategoryProducts/Supplies/Supplies"
import Surgical from "../Pages/AllCategoryProducts/Surgical/Surgical"
import Vitamins from "../Pages/AllCategoryProducts/Vitamins/Vitamins"
import WomenCare from "../Pages/AllCategoryProducts/WomenCare/WomenCare"
import PersonalCare from "../Pages/AllCategoryProducts/PersonalCare/PersonalCare"
import DentalCare from "../Pages/AllCategoryProducts/DentalCare/DentalCare"

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Registration></Registration>,
  },
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/assign-role",
        element: <AssignRole></AssignRole>,
      },
      {
        path: "/place-order",
        element: <PlaceOrder></PlaceOrder>,
      },
      {
        path: "/order-dashboard",
        element: <OrderDashboard></OrderDashboard>,
      },
      {
        path: "/payment/sucess/:tranId",
        element: <PaymentSuccess></PaymentSuccess>,
      },
      {
        path: "/all-medicine",
        element: <AllMedicine></AllMedicine>,
      },

      {
        path: "/otc-drugs",
        element: <OtcDrugs></OtcDrugs>,
      },
      {
        path: "/diabetic-care",
        element: <DiabeticCare></DiabeticCare>,
      },
      {
        path: "/baby-care",
        element: <BabyCare></BabyCare>,
      },
      {
        path: "/supplies",
        element: <Supplies></Supplies>,
      },
      {
        path: "/surgical",
        element: <Surgical></Surgical>,
      },
      {
        path: "/vitamins",
        element: <Vitamins></Vitamins>,
      },
      {
        path: "/women-care",
        element: <WomenCare></WomenCare>,
      },
      {
        path: "/personal-care",
        element: <PersonalCare></PersonalCare>,
      },
      {
        path: "/dental-care",
        element: <DentalCare></DentalCare>,
      },
      {
        path: "/add-medicine",
        element: <AddMedicine></AddMedicine>,
      },
      {
        path: "/edit-medicine/:id",
        element: <EditMedicine></EditMedicine>,
      },
      {
        path: "/order",
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/prescription-medicines",
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/view-product/:id",
        element: <ViewAddToCartProduct></ViewAddToCartProduct>,
      },
      {
        path: "/card",
        element: <AddToCard></AddToCard>,
      },
    ],
  },
  {
    path: '*',
    element:
      <div className="text-center">
        <img src={img} alt="" className="w-1/2 mx-auto" />
        <h3 className='text-3xl'>The route you are searching is not available!!!</h3>
        <h3 className='text-3xl'>Please try for a valid route!!!</h3>
      </div>
  }
])

export default router
