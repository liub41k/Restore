import React from 'react';

const ErrorIndicator = () => {
	return (
		<div className="inner centered">
			<div className="error">
				<span className="boom">BOOM!</span>
				<span>
					something has gone terribly wrong
				</span>
				<span>
					(but we already sent droids to fix it)
				</span>
			</div>
		</div>
	);
};

export default ErrorIndicator;