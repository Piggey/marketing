import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Office from './Office'
import About from './About'
import Contact from './Contact'
import News from './News'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
