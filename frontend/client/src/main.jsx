import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import AdminPage from './pages/AdminPage.jsx'
import Layout from './components/Layout.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout><App/></Layout>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/admin' element={<Layout><AdminPage/></Layout>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
