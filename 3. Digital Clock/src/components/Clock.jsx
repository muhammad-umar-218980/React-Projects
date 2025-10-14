import { useState, useEffect } from 'react'
import styles from './Clock.module.css'

const Clock = () => {
	let currentTime = new Date()
	const [time, setTime] = useState(currentTime)

	useEffect(() => {
		const timerID = setInterval(() => {
			setTime(new Date())
		}, 1000)

		return () => {
			clearInterval(timerID)
		}
	}, [])

	const formatTime = () => {
		return time.toLocaleTimeString('en-US', {
			hour12: true,
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit'
		})
	}

	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>🕒 Digital Clock</h1>
			<div className={styles.time}>{formatTime()}</div>
		</div>
	)
}

export default Clock