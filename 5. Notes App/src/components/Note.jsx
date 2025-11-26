import { Trash2, Edit2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Note = ({ note, onDelete, onEdit }) => {
	const { theme } = useTheme();

	// Get the specific class for this note's color from the current theme
	// Fallback to default if color key not found
	const colorKey = note.colorKey || 'default';
	const colorClass = theme.colors[colorKey] || theme.colors.default;

	return (
		<div
			className={`group relative rounded-lg p-4 hover:shadow-md transition-all duration-200 flex flex-col gap-2 ${colorClass} ${theme.cardBase}`}
		>
			{note.title && (
				<h3 className={`font-bold text-lg break-words`}>{note.title}</h3>
			)}
			<p className={`whitespace-pre-wrap break-words text-sm leading-relaxed opacity-90`}>
				{note.content}
			</p>

			<div className={`mt-4 flex items-center justify-between text-xs ${theme.mutedText}`}>
				<span>{note.date}</span>

				<div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
					<button
						onClick={() => onEdit(note)}
						className={`p-2 rounded-full transition-colors ${theme.actionHover} ${theme.textColor}`}
						title="Edit"
					>
						<Edit2 size={16} />
					</button>
					<button
						onClick={() => onDelete(note.id)}
						className={`p-2 rounded-full transition-colors ${theme.actionHover} text-red-500`}
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