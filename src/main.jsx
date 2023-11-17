import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Office from './pages/Office'
import About from './pages/About'
import Contact from './pages/Contact'
import News from './pages/News'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/office",
    element: <Office />,
  },
  {
    path: "/news",
    element: <News />
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
