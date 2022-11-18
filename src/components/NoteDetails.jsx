import { Link, useLoaderData } from '@remix-run/react'
import tw from 'tailwind-styled-components'

const Details = tw.main`max-w-2xl my-10 mx-auto p-6 text-center rounded-3xl bg-purple-600/75 text-purple-200 text-xl`
const Meta = tw.h1`font-bold text-3xl py-6 my-2 text-purple-200 border-t-2 border-t-purple-400`
const Content = tw.p`text-purple-100 text-xl whitespace-nowrap overflow-hidden text-ellipsis w-full`

const NoteDetails = () => {
  const note = useLoaderData()

  return (
    <Details>
      <header>
        <nav>
          <Link to='/notes' className='font-bold text-purple-300'>
            Back to all notes
          </Link>
        </nav>
        <Meta>{note.title}</Meta>
      </header>
      <Content>{note.content}</Content>
    </Details>
  )
}

export default NoteDetails
