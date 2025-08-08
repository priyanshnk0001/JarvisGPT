import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Password from './components/password.jsx'
import Otp from './components/otp.jsx'
import SwipeableTemporaryDrawer from './components/home.jsx'
import SignUp from './components/signUp.jsx'
import { createBrowserRouter, Routes } from "react-router"
import { RouterProvider } from 'react-router'
import Home from './components/home.jsx'



// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* <App  /> */}
//      {/* <Otp  /> */}
//      <SwipeableTemporaryDrawer />
//   </StrictMode>,
// )


const Root = createRoot(document.getElementById('root'));

let allRouts = createBrowserRouter(
  [
    {
      path: '/',
      element: <App  />
    },
  
    {
      path: 'SignUp',
      element: <SignUp  />
    },
    {
      path: 'password',
      element: <Password  />
    },
  
   
    {
      path: 'otp',
      element: <Otp  />
    },
   
    {
      path: 'home',
      element: <Home  />
    }
   
  ]
)

Root.render(
  <StrictMode>
    <RouterProvider router={allRouts} />
   </StrictMode>,
)
