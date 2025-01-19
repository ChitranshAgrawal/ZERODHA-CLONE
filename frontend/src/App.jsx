// import './App.css'
import HomePage from './landing_page/home/HomePage'
import Signup from './landing_page/signup/Signup';
import AboutPage from './landing_page/about/AboutPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import ProductsPage from './landing_page/products/ProductsPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
import Login from './landing_page/signup/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <> <Navbar /> <HomePage /> <Footer /> </>
    }, 
    {
      path:"/signup",
      element: <> <Navbar /> <Signup/> <Footer /> </>
    },
    {
      path:"/signin",
      element:<> <Navbar /> <Login /> <Footer /> </>
    },
    {
      path:"/about",
      element:<> <Navbar /> <AboutPage/> <Footer /> </>
    },
    {
      path:"/product",
      element:<> <Navbar /> <ProductsPage /> <Footer /> </>
    },
    {
      path:"/pricing",
      element:<> <Navbar /> <PricingPage /> <Footer /> </>
    },
    {
      path:"/support",
      element:<> <Navbar /> <SupportPage /> <Footer /> </>
    },
    {
      path:"*",
      element:<> <Navbar /> <NotFound /> <Footer /> </>
    }
  ]) 


  return (
    <>
      <RouterProvider router={router}/>
    </>
  )

}

export default App



