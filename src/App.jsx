import { useState } from 'react'

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './pages/DrAuthLayOut'
// import Home from './pages/Home'
// import Details from './pages/Details'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// import SignUp from './pages/SignUp'
// import LoginDr from './pages/LoginDr'
// import Wating from './pages/Wating'
import Doctor from './pages/Doctor'

const router = createBrowserRouter([
  {path :'' , element: <Layout/>, children:[
    // {index:true, element:<DrHome />},
// {path:"signup",element:<SignUp/>},
{index:true,element:<Doctor/>},
// {path:"wating",element:<Wating/>},
// {path:"Dr",element:<Doctor/>},
  ]}
])

const queryClient = new QueryClient()


function App() {
  

  return (
    <>


<QueryClientProvider client={queryClient}>
   <RouterProvider router={router}></RouterProvider>
    <ReactQueryDevtools/>
    </QueryClientProvider>



    </>
  )
}

export default App
