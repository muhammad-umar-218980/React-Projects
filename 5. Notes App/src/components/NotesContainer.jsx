import Note from './Note.jsx'
import SampleNotes from '../Sample Notes/SampleNotes.js'

const NotesContainer = () => {
  return (
    <div className = 'mt-29'>
      {SampleNotes.map((note) => (
        <Note key={note.key} task={note.task} Details={note.Details} />
      ))}
    </div>
  )
}

export default NotesContainer