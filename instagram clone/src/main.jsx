import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Storyview from './Storyview.jsx'
import Profile from './Profile.jsx'
import Profileandnav from './Profileandnav.jsx'
const router = createBrowserRouter(
 [
  {
    path:'/',
    element:<App/>},
    {
  path:'/story/:id/:tot',
  element:<Storyview/>
    
  },
  {
    path:'/profile/:username',
    element:<Profile/>
  },
  {
    path:'/profileandnav/:username',
    element:<Profileandnav/>
  }
  
  

 ] 
)
createRoot(document.getElementById('root')).render(
 
   <RouterProvider router={router} />
)

