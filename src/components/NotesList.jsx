import { Link, useLoaderData } from '@remix-run/react'
import tw from 'tailwind-styled-components'

const List = tw.ul`max-w-4xl flex justify-center gap-4 list-none my-8 mx-auto`
const Item = tw.li`w-1/3 bg-purple-600 p-6 rounded shadow-md transition-all duration-1000 hover:bg-purple-700 hover:-translate-y-1`
const Meta = tw.h2`m-0 p-0 flex justify-between items-center pb-2 mb-2 border-b-2 border-b-purple-300 font-bold text-2xl text-purple-300`
const Content = tw.p`text-violet-100 text-xl whitespace-nowrap overflow-hidden text-ellipsis w-full`

const NotesList = () => {
  const notes = useLoaderData()

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

export default NotesList
