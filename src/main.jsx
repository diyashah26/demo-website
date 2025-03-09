import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import About from './components/about/About.jsx'
import {createBrowserRouter,createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Home from './components/home/Home.jsx'
import User from './components/User/User.jsx'
import Github, {githubInfoLoader} from './components/Github/Github'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />}/>
      <Route path="user/:userid" element={<User/>}>
      <Route path=":userid" element={<User/>}/>
      </Route>
      <Route
      loader={githubInfoLoader}
       path='github' 
       element={<Github/>} />
      <Route path="*" element={<div>Not Found</div>}/>
      </Route>
      )
  )


createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  <RouterProvider router={router}/>
 </React.StrictMode>,
)
