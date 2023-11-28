"use client"
import Dashboard from '@/components/home/Dashboard'
import Landing from '@/components/home/Landing'
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import { useEffect, useState } from 'react';
import { Loading } from '@/components/shared/loading';
import { TOKEN_KEY } from '@/utils';


export default function Home() {
  const [user, setUser] = useState<boolean>()
  const [loading, setLoading] = useState<boolean>(false)
  const [user_data, setUser_data] = useState<any>()
  useEffect(() => {
    const token = Cookies.get(TOKEN_KEY)
    if(token) {
       setUser(true)
       const data = jwt.verify(token, TOKEN_KEY)
       setUser_data(data)
    } else {
      setUser(false)
      setLoading(true)
    }
  }, [])
  return (
    <>
      {
        user ? (
          <Dashboard  user_data={user_data}/>
        ) :
         loading ? <Landing /> :
        <Loading />
      }

    </>
  )
}
