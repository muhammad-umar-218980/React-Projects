import { useState, useEffect } from 'react';
import { X, Palette } from 'lucide-react';

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

const EditNoteModal = ({ note, onClose, onUpdate }) => {
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);
    const [selectedColor, setSelectedColor] = useState(note.color || 'bg-white');
    const [showColorPicker, setShowColorPicker] = useState(false);

    useEffect(() => {
        setTitle(note.title);
        setContent(note.content);
        setSelectedColor(note.color || 'bg-white');
    }, [note]);

    const handleSave = () => {
        onUpdate({ ...note, title, content, color: selectedColor });
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
            <div className={`w-full max-w-2xl rounded-lg shadow-2xl ${selectedColor} relative flex flex-col max-h-[90vh]`}>

                {/* Header */}
                <div className="flex justify-end p-2">
                    <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full transition-colors text-gray-600">
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="px-6 pb-2 overflow-y-auto">
                    <input
                        type="text"
                        placeholder="Title"
                        className="w-full text-xl font-bold bg-transparent outline-none placeholder-gray-500 mb-4"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Note"
                        className="w-full resize-none bg-transparent outline-none placeholder-gray-500 min-h-[200px] text-base"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>

                {/* Footer */}
                <div className="p-4 flex items-center justify-between mt-auto border-t border-black/5">
                    <div className="relative">
                        <button
                            className="p-2 hover:bg-black/5 rounded-full transition-colors text-gray-600"
                            onClick={() => setShowColorPicker(!showColorPicker)}
                            title="Change color"
                        >
                            <Palette size={18} />
                        </button>

                        {showColorPicker && (
                            <div className="absolute bottom-full left-0 mb-2 p-2 bg-white shadow-xl rounded-lg border border-gray-200 flex gap-1 z-20 w-max">
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

                    <button
                        onClick={handleSave}
                        className="px-6 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800 transition-colors shadow-sm"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditNoteModal;
