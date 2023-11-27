import Dashboard from '@/components/home/Dashboard'
import Landing from '@/components/home/Landing'

export default function Home() {
  const user = false;
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
