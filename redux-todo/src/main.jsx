import React from 'react'
import ReactDOM from 'react-dom/client'
import ThemeApp from './ThemeApp'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Contact from './Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ThemeApp />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about', 
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
