import React from 'react'
import { RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import "./styles/output.css"
import './styles/destyle.css'
import { router } from './routes'
// import { TopPage } from '../src/components/pages/TopPage'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
