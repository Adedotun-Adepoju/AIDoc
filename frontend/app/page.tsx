"use client"
import Dashboard from '@/components/home/Dashboard'
import Landing from '@/components/home/Landing'
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import { useEffect, useState } from 'react';

export default function Home() {
  const TOKEN_KEY = 'trial123'
  const [user, setUser] = useState<boolean>()
  useEffect(() => {
    const token = Cookies.get(TOKEN_KEY)
    if(token) {
       setUser(true)
       const data = jwt.verify(token, TOKEN_KEY)
    } else {
      setUser(false)
    }
  }, [])
  return (
    <>
      {
        user ? (
          <Dashboard />
        ) :
        <Landing />
      }
    </>
  )
}
