import fs from 'fs/promises'

export type NotesData = {
  title: string
  content: string
  id: string
}

export const getStoredNotes = async () => {
  const rawFileContent = await fs.readFile('notes.json', { encoding: 'utf-8' })
  const data = JSON.parse(rawFileContent)
  const storedNotes = (data.notes as NotesData[]) ?? []
  console.log({ storedNotes })

  return storedNotes
}

export const getStoredNoteById = async (noteId: string) => {
  const notes = await getStoredNotes()
  const selectedNote = notes.find(note => note.id === noteId)

  return selectedNote as NotesData
}
