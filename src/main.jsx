import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPAge from './Components/Home/Mainpage.jsx';
import DashBord from './Components/Home/DashBord.jsx';
import Coffees from './Components/Home/Coffees.jsx';
import Footer from './Components/Home/Footer.jsx';
import Homepage from './Components/Home/Homepage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPAge></MainPAge>,
    children:[{
      path: "/",
      element:<Homepage></Homepage>
    },
   {
      path: "/Coffees",
      element:<Coffees></Coffees>
    },
    {
      path: "/dashbord",
      element: <DashBord></DashBord>
    },
]
  },
  
  
  {
    path: "/",
    element: <Footer> </Footer>
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
