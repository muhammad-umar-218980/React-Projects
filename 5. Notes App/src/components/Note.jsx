import { Trash2, Edit2 } from 'lucide-react';

const Note = ({ note, onDelete, onEdit }) => {
	return (
		<div
			className={`group relative rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200 flex flex-col gap-2 ${note.color || 'bg-white'}`}
		>
			{note.title && (
				<h3 className="font-bold text-lg text-gray-900 break-words">{note.title}</h3>
			)}
			<p className="text-gray-700 whitespace-pre-wrap break-words text-sm leading-relaxed">
				{note.content}
			</p>

			<div className="mt-4 flex items-center justify-between text-xs text-gray-400">
				<span>{note.date}</span>

				<div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
					<button
						onClick={() => onEdit(note)}
						className="p-2 hover:bg-black/5 rounded-full text-gray-600 transition-colors"
						title="Edit"
					>
						<Edit2 size={16} />
					</button>
					<button
						onClick={() => onDelete(note.id)}
						className="p-2 hover:bg-black/5 rounded-full text-red-500 transition-colors"
						title="Delete"
					>
						<Trash2 size={16} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Note;