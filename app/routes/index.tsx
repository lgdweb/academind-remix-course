import { Link } from '@remix-run/react'

const IndexPage = () => (
  <main className='text-center text-zinc-100/80'>
    <h1 className='p-4 text-5xl font-bold'>A better way of keeping track of your notes!</h1>
    <p className='m-2 text-xl'>Try our early beta and never loose track of your notes again!</p>
    <p className='mt-8'>
      <Link
        className='rounded bg-orange-300 px-8 py-2 text-3xl text-purple-800 no-underline'
        to='/notes'
      >
        Try Now!
      </Link>
    </p>
  </main>
)

export default IndexPage
