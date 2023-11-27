import Banner from '@/components/dashboard/Banner'
import HealthTips from '@/components/dashboard/HealthTips'
import Greeting from '@/components/dashboard/Greeting'
import Status from '@/components/dashboard/Status'

interface UserDataProps {
  name: string,
  age: number,
}
export default function Dashboard() {

  const userData: UserDataProps = {
    name: 'Christian',
    age: 25,
  }
  return (
    <main className="bg-white">
      <section className='flex flex-col gap-6 px-5 mx-auto mt-4 lg:flex-row max-w-7xl md:px-10'>
        <Greeting user={userData} />
        <Status />
      </section>
      <Banner />
      <HealthTips />
    </main>
  )
}

