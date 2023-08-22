import Navbar from './components/navbar/page'
import Intro from './sections/intro/page'

export default function Home () {
  return (
    <main className='w-full flex flex-col flex-grow justify-center items-center gap-20 mb-10'>
      <Navbar />
      <Intro />
    </main>
  )
}
