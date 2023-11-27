"use client"
import Dashboard from '@/components/home/Dashboard'
import Landing from '@/components/home/Landing'
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import { useEffect, useState } from 'react';
import { AiDocLogo } from '@/components/icons';

export const Loading = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
      <AiDocLogo style={{width: '250px'}}/>
    </div>
  )
}
export default function Home() {
  const TOKEN_KEY = 'trial123'
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
