import Banner from '@/components/dashboard/Banner'
import HealthTips from '@/components/dashboard/HealthTips'
import Greeting from '@/components/dashboard/Greeting'
import Status from '@/components/dashboard/Status'
import Header from '../header'

interface UserDataProps {
  name: string,
  age: number,
}
export default function Dashboard({
  user_data
}: {
  user_data: any
}) {

  const userData: UserDataProps = {
    name: 'Christian',
    age: 25,
  }
  return (
    <>
    <Header />
    <main className="bg-white">
      <section className='flex flex-col gap-6 px-5 mx-auto mt-4 lg:flex-row max-w-7xl md:px-10'>
        <Greeting user={user_data} />
        <Status userData={user_data}/>
      </section>
      <Banner />
      <HealthTips />
    </main>
    </>
  )
}

