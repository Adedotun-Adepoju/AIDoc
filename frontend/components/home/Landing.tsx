import Header from '@/components/header'
import SubHeader from '@/components/SubHeader'
import How from '@/components/How'
import Features from '@/components/features'
import Why from '@/components/Why'
import GettingStarted from '@/components/Getting-started'
import Footer from '@/components/footer'

export default function Landing() {
  return (
    <main className="bg-white">
      <Header />
      <SubHeader />
      <How />
       <Features />
      <Why />
      <GettingStarted />
     <Footer />
    </main>
  )
}
