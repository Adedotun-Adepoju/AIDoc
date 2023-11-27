import Dashboard from '@/components/home/Dashboard'
import Landing from '@/components/home/Landing'

export default function Home() {
  const user = true
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
