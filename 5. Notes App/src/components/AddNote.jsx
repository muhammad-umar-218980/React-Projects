import { useState, useRef, useEffect } from 'react';
import { Plus, Palette, X } from 'lucide-react';

const colors = [
  { name: 'Default', value: 'bg-white' },
  { name: 'Red', value: 'bg-red-100' },
  { name: 'Orange', value: 'bg-orange-100' },
  { name: 'Yellow', value: 'bg-yellow-100' },
  { name: 'Green', value: 'bg-green-100' },
  { name: 'Teal', value: 'bg-teal-100' },
  { name: 'Blue', value: 'bg-blue-100' },
  { name: 'Indigo', value: 'bg-indigo-100' },
  { name: 'Purple', value: 'bg-purple-100' },
  { name: 'Pink', value: 'bg-pink-100' },
];

const AddNote = ({ onAdd }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedColor, setSelectedColor] = useState('bg-white');
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
      onAdd({ title, content, color: selectedColor });
      setTitle('');
      setContent('');
      setSelectedColor('bg-white');
      handleCollapse();
    }
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        handleCollapse();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto mb-8 relative z-10" ref={containerRef}>
      <div 
        className={`shadow-lg rounded-lg border border-gray-200 transition-all duration-300 ${selectedColor} ${isExpanded ? 'p-4' : 'p-3 flex items-center'}`}
      >
        {!isExpanded ? (
          <div 
            className="w-full text-gray-500 font-medium cursor-text flex items-center justify-between"
            onClick={handleExpand}
          >
            <span>Take a note...</span>
            <div className="flex gap-2">
                <div className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <Plus size={20} />
                </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Title"
              className={`w-full text-lg font-bold bg-transparent outline-none placeholder-gray-500`}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Take a note..."
              className={`w-full resize-none bg-transparent outline-none placeholder-gray-500 min-h-[100px]`}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              autoFocus
            />
            
            <div className="flex items-center justify-between mt-2">
              <div className="relative">
                <button 
                  className="p-2 hover:bg-black/5 rounded-full transition-colors text-gray-600"
                  onClick={() => setShowColorPicker(!showColorPicker)}
                  title="Change color"
                >
                  <Palette size={18} />
                </button>
                
                {showColorPicker && (
                  <div className="absolute top-full left-0 mt-2 p-2 bg-white shadow-xl rounded-lg border border-gray-200 flex gap-1 z-20 w-max">
                    {colors.map((c) => (
                      <button
                        key={c.name}
                        className={`w-6 h-6 rounded-full border border-gray-300 ${c.value} hover:scale-110 transition-transform`}
                        onClick={() => {
                          setSelectedColor(c.value);
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
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-black/5 rounded-md transition-colors"
                >
                  Close
                </button>
                <button 
                  onClick={handleAdd}
                  className="px-6 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800 transition-colors shadow-sm"
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
