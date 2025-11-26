import Navbar from './components/Navbar/Navbar.jsx'
import NotesContainer from './components/NotesContainer.jsx'
import './App.css'


let App = function () {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      <NotesContainer />
    </div>
  )
}

export default App;