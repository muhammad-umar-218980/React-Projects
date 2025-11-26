import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Note from './Note';
import AddNote from './AddNote';
import EditNoteModal from './EditNoteModal';
import { useTheme } from '../context/ThemeContext';

const NotesContainer = () => {
  const { theme } = useTheme();
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      const parsed = JSON.parse(savedNotes);
      // Migration: If notes have 'color' (old class) but not 'colorKey', map them
      return parsed.map(n => {
        if (n.colorKey) return n;

        // Simple mapping from old classes to new keys
        let key = 'default';
        if (n.color && n.color.includes('red')) key = 'red';
        else if (n.color && n.color.includes('orange')) key = 'orange';
        else if (n.color && n.color.includes('yellow')) key = 'yellow';
        else if (n.color && n.color.includes('green')) key = 'green';
        else if (n.color && n.color.includes('teal')) key = 'teal';
        else if (n.color && n.color.includes('blue')) key = 'blue';
        else if (n.color && n.color.includes('indigo')) key = 'indigo';
        else if (n.color && n.color.includes('purple')) key = 'purple';
        else if (n.color && n.color.includes('pink')) key = 'pink';

        return { ...n, colorKey: key };
      });
    }
    return [
      {
        id: uuidv4(),
        title: 'Welcome to Notes!',
        content: 'This is a simple notes app. You can add, edit, and delete notes.',
        colorKey: 'yellow',
        date: new Date().toLocaleDateString(),
      },
      {
        id: uuidv4(),
        title: 'Try changing colors',
        content: 'Click the palette icon to change the note color.',
        colorKey: 'blue',
        date: new Date().toLocaleDateString(),
      }
    ];
  });

  const [editingNote, setEditingNote] = useState(null);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = ({ title, content, colorKey }) => {
    const newNote = {
      id: uuidv4(),
      title,
      content,
      colorKey,
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
        <div className={`text-center mt-20 ${theme.mutedText}`}>
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