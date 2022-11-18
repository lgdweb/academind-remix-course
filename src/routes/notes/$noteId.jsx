import { NoteDetails } from '~/components'
import { getStoredNoteById } from '~/lib'

export const loader = async ({ params }) => {
  const noteId = params.noteId
  const note = await getStoredNoteById(noteId)

  return note
}

const NoteDetailsPage = () => <NoteDetails />

export default NoteDetailsPage
