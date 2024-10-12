import { notes } from "./notes"
export interface Note{
    id?: string
    title: string
    description: string
}
function generateId(): string {
    return `${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  }
  

function createNote({title, description}: Note) {
    const newNote = {
        id: generateId(),
        title,
        description
    }
    const newNotes = [...notes, newNote]
    
    return newNotes
}
function updateNote({id, description, title} : Note){
    const noteToUpdate = notes.findIndex(note => note.id === id)
    const newNote = {
        id,
        description,
        title
    }
    return 
    
}
function deleteNote(){}
