//theme
import "primereact/resources/themes/lara-light-indigo/theme.css"
//core
import "primereact/resources/primereact.min.css"
//icons
import "primeicons/primeicons.css"
import { RouterProvider } from "react-router-dom"
import router from "./Routes/Routes"
import { Toaster } from 'react-hot-toast';
import { CartProvider } from "react-use-cart"

function App() {
  return (
    <div className="">
      <CartProvider>
        <RouterProvider router={router}>
        </RouterProvider>
        <Toaster />
      </CartProvider>
    </div>
  )
}

export default App
