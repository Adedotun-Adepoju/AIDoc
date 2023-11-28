"use client"

import Dashboard from '@/components/home/Dashboard'
import Landing from '@/components/home/Landing'
import { useEffect, useState } from 'react';
import { Loading } from '@/components/shared/loading';
import { checkLoggedIn } from '@/utils';


export default function Home() {
  const [user, setUser] = useState<boolean>()
  const [loading, setLoading] = useState<boolean>(false)
  const [user_data, setUser_data] = useState<any>()

  useEffect(() => {
    const { isLoggedIn, user_data } = checkLoggedIn();

    if (isLoggedIn) {
      setUser(true)
      setUser_data(user_data);
    } else {
      // User is not logged in, you can redirect to the login page
      setUser(false)
      setLoading(true)
    }
  }, []);

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
