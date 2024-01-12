import { type LoaderFunctionArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { NoteDetails } from '~/components'
import { getStoredNoteById } from '~/lib'

// This is not type safe, but it's fine for this project.

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const noteId = params.noteId
  const note = await getStoredNoteById(noteId)

  return note
}

const NoteDetailsPage = () => {
  const { id, title, content } = useLoaderData<typeof loader>()
  console.log({ title, content })

  return <NoteDetails title={title} content={content} id={id} />
}

export default NoteDetailsPage
