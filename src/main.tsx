import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root'
import ErrorPage from './error-page'
import Feature from './routes/feature'
import './main.css'
import HowToUse from './routes/how-to-use'
import Products from './routes/products'
import AboutUs from './routes/about-us'
import ProductDetail from './routes/product-detail'
import Cart from './routes/cart'
import Favorite from './routes/favorite'
import User from './routes/profile/user'
import Subscription from './routes/subscription'
import OrderDetail from './routes/order-detail'
import Checkout from './routes/checkout'
import SignIn from './routes/auth/sign-in'
import SignUp from './routes/auth/sign-up'
import ForgotPassword from './routes/auth/forgot-password'
import { HelmetProvider } from 'react-helmet-async'

const router = createBrowserRouter([
  {
    path : "/",
    element : <Root />,
    errorElement : <ErrorPage />
  },
  {
    path : "features",
    element : <Feature />
  },
  {
    path : "products",
    element : <Products />,
  },
  {
    path : "how-to-use",
    element : <HowToUse />
  },
  {
    path : "about-us",
    element : <AboutUs />
  },
  {
    path : "product/:productId",
    element : <ProductDetail />
  },
  {
    path : "cart",
    element : <Cart />
  },
  {
    path : "favorite",
    element : <Favorite />
  },
  {
    path : "profile",
    element : <User />
  },
  {
    path : "subscription",
    element : <Subscription />
  },
  {
    path : "order/:orderId",
    element : <OrderDetail />
  },
  {
    path : "checkout",
    element : <Checkout />
  },
  {
    path : "sign-in",
    element : <SignIn />
  },
  {
    path : "sign-up",
    element : <SignUp />
  },
  {
    path : "forgot-password",
    element : <ForgotPassword />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router = {router} />
    </HelmetProvider>
  </React.StrictMode>,
)
