import './App.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AxiosRequest from './utils/AxiosRequest'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    AxiosRequest.get('api/profile/', {
      withCredentials: true
    })
      .then(res => setUser(res.data.data))
      .catch(() => setUser(null))
  })

  async function logout() {
    try {
      const response = await AxiosRequest.post('api/logout/')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <p>Привет {user?.username}</p>
      <Link to='/login'>Войти</Link>
      <Link to='/register'>Зарегистрироваться</Link>
      <button onClick={logout}>Выйти</button>
    </>
  )
}

export default App
