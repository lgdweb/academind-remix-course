import fs from 'fs/promises'

export const getStoredNotes = async () => {
  const rawFileContent = await fs.readFile('notes.json', { encoding: 'utf-8' })
  const data = JSON.parse(rawFileContent)
  const storedNotes = data.notes ?? []

  return storedNotes
}

export const getStoredNoteById = async noteId => {
  const notes = await getStoredNotes()
  const selectedNote = notes.find(note => note.id === noteId)

  return selectedNote
}
