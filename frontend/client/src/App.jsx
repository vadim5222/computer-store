import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Main from './pages/Main'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import AdminPage from './pages/AdminPage'
import Catalog from './pages/Catalog'
import Profile from './pages/Profile'
import MainTab from './tabs/MainTab'
import OrdersTab from './tabs/OrdersTab'
import EditTab from './tabs/EditTab'
import ReviewTab from './tabs/ReviewTab'
import FavoriteTab from './tabs/FavoriteTab'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout><Main /></Layout>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/admin-page' element={<Layout><AdminPage /></Layout>} />
          <Route path='/catalog' element={<Layout><Catalog /></Layout>} />
          <Route path='/profile/' element={<Layout><Profile /></Layout>}>
            <Route index element={<MainTab />} />
            <Route path='main/edit' element={<EditTab />} />
            <Route path='orders' element={<OrdersTab />} />
            <Route path='reviews' element={<ReviewTab/>} />
            <Route path='favorites' element={<FavoriteTab/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
