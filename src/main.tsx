import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import IndivisualSection from './components/IndivisualSection.tsx'


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:'indipage/:name',
    element:<IndivisualSection/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
