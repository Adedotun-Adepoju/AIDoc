"use client"
import Dashboard from '@/components/home/Dashboard'
import Landing from '@/components/home/Landing'
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import { useEffect, useState } from 'react';
import { AiDocLogo } from '@/components/icons';
import Header from '@/components/header';

export const Loading = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
      <AiDocLogo style={{width: '250px'}}/>
    </div>
  )
}
export default function Home() {
  const TOKEN_KEY = 'trial123';
  const [user, setUser] = useState<boolean>()
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    const token = Cookies.get(TOKEN_KEY)
    if(token) {
       setUser(true)
       const data = jwt.verify(token, TOKEN_KEY)
    } else {
      setUser(false)
      setLoading(true)
    }
  }, [])
  return (
    <>
    <Header />
      {
        user ? (
          <Dashboard />
        ) :
         loading ? <Landing /> :
        <Loading />
      }

    </>
  )
}
