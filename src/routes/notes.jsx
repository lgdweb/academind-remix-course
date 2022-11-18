import { json } from '@remix-run/node'

import { NoteList } from '~/components'
import { getStoredNotes } from '~/lib'

export const loader = async () => {
  const notes = await getStoredNotes()

  return json(notes)
}

const NotesPage = () => <NoteList />

export default NotesPage
