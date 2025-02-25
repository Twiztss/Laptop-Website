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
import Auth from './routes/auth'
import Profile from './routes/Profile/profile'
import Subscription from './routes/subscription'
import OrderDetail from './routes/order-detail'
import Checkout from './routes/checkout'

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
    path : "auth",
    element : <Auth />
  },
  {
    path : "profile",
    element : <Profile />
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
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
