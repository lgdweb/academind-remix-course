import { json, type LoaderFunction } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'

import { getStoredNotes } from '~/lib'

const List = ({ children }: { children: React.ReactNode }) => {
  return <ul className='mx-auto my-8 flex max-w-4xl list-none justify-center gap-4'>{children}</ul>
}

const Item = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className='w-1/3 rounded bg-purple-600 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-purple-700'>
      {children}
    </li>
  )
}

const Meta = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className='m-0 mb-2 flex items-center justify-between border-b-2 border-b-purple-300 p-0 pb-2 text-2xl font-bold text-purple-300'>
      {children}
    </h2>
  )
}

const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className='w-full overflow-hidden text-ellipsis whitespace-nowrap text-xl text-violet-100'>
      {children}
    </p>
  )
}

export const loader: LoaderFunction = async () => {
  const notes = await getStoredNotes()

  return json(notes)
}

// This is not type safe, but it's fine for this project.

const NotesPage = () => {
  const notes = useLoaderData<typeof loader>()

  if (!notes.length) {
    return <>No notes yet.</>
  }

  return (
    <List>
      {notes.map(note => (
        <Item key={note.id}>
          <Link to={note.id} aria-label={note.title}>
            <article>
              <Meta>{note.title}</Meta>
              <Content>{note.content}</Content>
            </article>
          </Link>
        </Item>
      ))}
    </List>
  )
}

export default NotesPage
