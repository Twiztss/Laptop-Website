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

const router = createBrowserRouter([
  {
    path : "/",
    element : <Root />,
    errorElement : <ErrorPage />
  },
  {
    path : "/features",
    element : <Feature />
  },
  {
    path : "/products",
    element : <Products />
  },
  {
    path : "/how-to-use",
    element : <HowToUse />
  },
  {
    path : "/about-us",
    element : <AboutUs />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
