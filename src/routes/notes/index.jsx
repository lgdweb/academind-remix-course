import { json } from '@remix-run/node'

import { NotesList } from '~/components'
import { getStoredNotes } from '~/lib'

export const loader = async () => {
  const notes = await getStoredNotes()

  return json(notes)
}

const NotesPage = () => <NotesList />

export default NotesPage
