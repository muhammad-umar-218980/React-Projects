import { useState } from 'react'
import './Counter.css'

const Counter = () => {
	const [count, setCount] = useState(0)

	const increment = () => setCount(count + 1)
	const decrement = () => setCount(count - 1)
	const reset = () => setCount(0)

	const getCounterColor = () => {
		if (count > 0) return '#4ecdc4'
		if (count < 0) return '#ff6b6b'
		return '#667eea'
	}

	return (
		<div className="counter-container">
			<div className="counter-card">
				<h1 className="counter-title">Simple Counter</h1>

				<div
					className="counter-display"
					style={{ background: getCounterColor() }}
				>
					<span className="counter-value">{count}</span>
				</div>

				<div className="counter-buttons">
					<button
						className="btn btn-decrement"
						onClick={decrement}
					>
						-
					</button>

					<button className="btn btn-reset" onClick={reset}>
						Reset
					</button>

					<button className="btn btn-increment" onClick={increment}>
						+
					</button>
				</div>

				<div className="counter-stats">
					<p>Counter is:
						<span className="stat-value">
							{count === 0 ? ' Zero' : count > 0 ? ' Positive' : ' Negative'}
						</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Counter