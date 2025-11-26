import { useState, useRef, useEffect } from 'react';
import { Plus, Palette } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const colorOptions = [
  { name: 'Default', key: 'default' },
  { name: 'Red', key: 'red' },
  { name: 'Orange', key: 'orange' },
  { name: 'Yellow', key: 'yellow' },
  { name: 'Green', key: 'green' },
  { name: 'Teal', key: 'teal' },
  { name: 'Blue', key: 'blue' },
  { name: 'Indigo', key: 'indigo' },
  { name: 'Purple', key: 'purple' },
  { name: 'Pink', key: 'pink' },
];

const AddNote = ({ onAdd }) => {
  const { theme } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedColorKey, setSelectedColorKey] = useState('default');
  const [showColorPicker, setShowColorPicker] = useState(false);
  const containerRef = useRef(null);

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleCollapse = () => {
    setIsExpanded(false);
    setShowColorPicker(false);
  };

  const handleAdd = () => {
    if (title.trim() || content.trim()) {
      onAdd({ title, content, colorKey: selectedColorKey });
      setTitle('');
      setContent('');
      setSelectedColorKey('default');
      handleCollapse();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        handleCollapse();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Get current theme's class for the selected color
  const activeColorClass = theme.colors[selectedColorKey];

  return (
    <div className="w-full max-w-2xl mx-auto mb-8 relative z-10" ref={containerRef}>
      <div
        className={`rounded-lg transition-all duration-300 ${activeColorClass} ${theme.cardBase} ${isExpanded ? 'p-4 shadow-lg' : 'p-3 flex items-center shadow-md'}`}
      >
        {!isExpanded ? (
          <div
            className={`w-full font-medium cursor-text flex items-center justify-between ${theme.mutedText}`}
            onClick={handleExpand}
          >
            <span>Take a note...</span>
            <div className="flex gap-2">
              <div className={`p-2 rounded-full transition-colors ${theme.actionHover}`}>
                <Plus size={20} />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Title"
              className={`w-full text-lg font-bold bg-transparent outline-none placeholder-gray-500/50`}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Take a note..."
              className={`w-full resize-none bg-transparent outline-none placeholder-gray-500/50 min-h-[100px]`}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              autoFocus
            />

            <div className="flex items-center justify-between mt-2">
              <div className="relative">
                <button
                  className={`p-2 rounded-full transition-colors ${theme.actionHover} ${theme.mutedText}`}
                  onClick={() => setShowColorPicker(!showColorPicker)}
                  title="Change color"
                >
                  <Palette size={18} />
                </button>

                {showColorPicker && (
                  <div className={`absolute top-full left-0 mt-2 p-2 shadow-xl rounded-lg border flex gap-1 z-20 w-max overflow-x-auto max-w-[80vw] sm:max-w-none ${theme.navbarBg} ${theme.cardBase}`}>
                    {colorOptions.map((c) => (
                      <button
                        key={c.key}
                        className={`w-6 h-6 rounded-full transition-transform hover:scale-110 ${theme.colors[c.key]} ${selectedColorKey === c.key ? 'ring-2 ring-offset-1 ring-gray-400' : ''}`}
                        onClick={() => {
                          setSelectedColorKey(c.key);
                          setShowColorPicker(false);
                        }}
                        title={c.name}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handleCollapse}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${theme.actionHover} ${theme.textColor}`}
                >
                  Close
                </button>
                <button
                  onClick={handleAdd}
                  className={`px-6 py-2 text-sm font-medium rounded-md transition-colors shadow-sm ${theme.textColor === 'text-white' ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddNote;
