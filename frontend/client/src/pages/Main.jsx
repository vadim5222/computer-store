import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AxiosRequest from '../utils/AxiosRequest'

const Main = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    AxiosRequest.get('api/profile/', {
      withCredentials: true
    })
      .then(res => setUser(res.data.data))
      .catch(() => setUser(null))
  }, [])

  async function logout() {
    try {
      const response = await AxiosRequest.post('api/logout/')
      setUser(null)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <>

    </>
  )
}

export default Main