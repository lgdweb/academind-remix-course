import { Link } from '@remix-run/react'

import { type NotesData } from '~/lib'

const NoteDetails = ({ id, title, content }: NotesData) => {
  return (
    <main className='mx-auto my-10 max-w-2xl rounded-3xl bg-purple-600/75 p-6 text-center text-xl text-purple-200'>
      <header>
        <nav>
          <Link to='/notes' className='font-bold text-purple-300'>
            Back to all notes
          </Link>
        </nav>
        <h1 className='my-2 border-t-2 border-t-purple-400 py-6 text-3xl font-bold text-purple-200'>
          {title}
        </h1>
      </header>
      <p className='w-full overflow-hidden text-ellipsis whitespace-nowrap text-xl text-purple-100'>
        {content}
      </p>
    </main>
  )
}

export default NoteDetails
