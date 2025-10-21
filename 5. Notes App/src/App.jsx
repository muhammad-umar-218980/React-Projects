import Navbar from './components/Navbar/Navbar.jsx'
import SampleNotes from './Sample Notes/SampleNotes.js'
import Note from './components/Note.jsx'
import './App.css'


let App = function () {

  

  return (<>
    <Navbar />
    <div className="mt-29">
      {SampleNotes.map((note) => (
        <Note task={note.task} Details={note.Details} />
      ))}
    </div>
  </>)
}



export default App;