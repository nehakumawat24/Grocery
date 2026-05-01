import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Fruits from './components/Fruits/Fruits'
import Dairy from './components/Dairy/Dairy'
import Seafood from './components/Seafood/Seafood'
import Allproduct from './components/Allproduct/Allproduct'
import Layout from './components/Layout/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Processpage from './pages/Processpage'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/fruits',
          element: <Fruits />,
        },
        {
          path: '/dairy',
          element: <Dairy />,
        },
        {
          path: '/seafood',
          element: <Seafood />
        },
        {
          path: '/allproduct',
          element: <Allproduct />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/processpage',
          element: <Processpage />

        },
        {
          path: 'contact',
          element: <Contact />
        },
      ]
    },

  ])


  return <RouterProvider router={router} />
}

export default App
