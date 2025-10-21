const Note = ({task , Details}) => {
	return (
		<>
			<section>
				<h2 className = 'bg-gray-600 text-white text-2xl'>{task}</h2>
				<p>{Details}</p>
			</section>
		</>
	)
}

export default Note