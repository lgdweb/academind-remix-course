import fs from 'fs/promises'

export const getStoredNotes = async () => {
  const rawFileContent = await fs.readFile('notes.json', { encoding: 'utf-8' })
  const data = JSON.parse(rawFileContent)
  const storedNotes = data.notes ?? []

  return storedNotes
}
