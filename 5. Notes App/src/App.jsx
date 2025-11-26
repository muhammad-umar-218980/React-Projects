import Navbar from './components/Navbar/Navbar.jsx'
import NotesContainer from './components/NotesContainer.jsx'
import './App.css'
import { useTheme } from './context/ThemeContext.jsx'

let App = function () {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${theme.appBg}`}>
      <Navbar />
      <NotesContainer />
    </div>
  )
}

export default App;