import Image from 'next/image'
import blob from '../../components/img/blob.png'

export default function Intro () {
  return (
    <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8'>
      <section className='text-base font-sans font-medium'>
        <h1 className='text-6xl text-semibold'>
          Hi, I'm <span className='text-6xl text-light-purple'>Gaston</span>
        </h1>
        <h2 className='text-xl text-medium'>Full Stack Developer</h2>
        <p>
          Experienced MERN developer with a strong back-end focus.<br />
          Committed to quality, efficiency and collaborative success in achieving project objectives. <br />
          Agile enthusiast (SCRUM) and leader in diverse projects.
        </p>
      </section>
      <section>
        <Image
          className='home__blob-img'
          src={blob}
          alt='Gaston Valles blob'
        />
      </section>
    </div>
  )
}
