import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Note from './Note';
import AddNote from './AddNote';
import EditNoteModal from './EditNoteModal';

const NotesContainer = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      return JSON.parse(savedNotes);
    }
    return [
      {
        id: uuidv4(),
        title: 'Welcome to Notes!',
        content: 'This is a simple notes app. You can add, edit, and delete notes.',
        color: 'bg-yellow-100',
        date: new Date().toLocaleDateString(),
      },
      {
        id: uuidv4(),
        title: 'Try changing colors',
        content: 'Click the palette icon to change the note color.',
        color: 'bg-blue-100',
        date: new Date().toLocaleDateString(),
      }
    ];
  });

  const [editingNote, setEditingNote] = useState(null);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = ({ title, content, color }) => {
    const newNote = {
      id: uuidv4(),
      title,
      content,
      color,
      date: new Date().toLocaleDateString(),
    };
    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const updateNote = (updatedNote) => {
    setNotes(notes.map((note) => (note.id === updatedNote.id ? updatedNote : note)));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <AddNote onAdd={addNote} />

      {notes.length === 0 ? (
        <div className="text-center text-gray-500 mt-20">
          <p className="text-xl">No notes yet</p>
          <p className="text-sm">Add a note to get started</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-start">
          {notes.map((note) => (
            <Note
              key={note.id}
              note={note}
              onDelete={deleteNote}
              onEdit={setEditingNote}
            />
          ))}
        </div>
      )}

      {editingNote && (
        <EditNoteModal
          note={editingNote}
          onClose={() => setEditingNote(null)}
          onUpdate={updateNote}
        />
      )}
    </div>
  );
};

export default NotesContainer;