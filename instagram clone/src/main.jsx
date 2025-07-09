import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Storyview from './Storyview.jsx'
import Profile from './Profile.jsx'
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
    path:'/profile',
    element:<Profile/>
  }

 ] 
)
createRoot(document.getElementById('root')).render(
 
   <RouterProvider router={router} />
)

