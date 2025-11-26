import { useState, useEffect } from 'react';
import { X, Palette } from 'lucide-react';
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

const EditNoteModal = ({ note, onClose, onUpdate }) => {
    const { theme } = useTheme();
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);
    const [selectedColorKey, setSelectedColorKey] = useState(note.colorKey || 'default');
    const [showColorPicker, setShowColorPicker] = useState(false);

    useEffect(() => {
        setTitle(note.title);
        setContent(note.content);
        setSelectedColorKey(note.colorKey || 'default');
    }, [note]);

    const handleSave = () => {
        onUpdate({ ...note, title, content, colorKey: selectedColorKey });
        onClose();
    };

    const activeColorClass = theme.colors[selectedColorKey];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className={`w-full max-w-2xl rounded-lg shadow-2xl relative flex flex-col max-h-[90vh] ${activeColorClass} ${theme.cardBase}`}>

                {/* Header */}
                <div className="flex justify-end p-2">
                    <button onClick={onClose} className={`p-2 rounded-full transition-colors ${theme.actionHover} ${theme.mutedText}`}>
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="px-6 pb-2 overflow-y-auto">
                    <input
                        type="text"
                        placeholder="Title"
                        className={`w-full text-xl font-bold bg-transparent outline-none placeholder-gray-500/50 mb-4`}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Note"
                        className={`w-full resize-none bg-transparent outline-none placeholder-gray-500/50 min-h-[200px] text-base`}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>

                {/* Footer */}
                <div className={`p-4 flex items-center justify-between mt-auto border-t ${theme.navbarBg.includes('border') ? 'border-transparent' : 'border-black/5'}`}>
                    <div className="relative">
                        <button
                            className={`p-2 rounded-full transition-colors ${theme.actionHover} ${theme.mutedText}`}
                            onClick={() => setShowColorPicker(!showColorPicker)}
                            title="Change color"
                        >
                            <Palette size={18} />
                        </button>

                        {showColorPicker && (
                            <div className={`absolute bottom-full left-0 mb-2 p-2 shadow-xl rounded-lg border flex gap-1 z-20 w-max overflow-x-auto max-w-[80vw] ${theme.navbarBg} ${theme.cardBase}`}>
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

                    <button
                        onClick={handleSave}
                        className={`px-6 py-2 text-sm font-medium rounded-md transition-colors shadow-sm ${theme.textColor === 'text-white' ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditNoteModal;
