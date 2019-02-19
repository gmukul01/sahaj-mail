import React from 'react';

const Labels = () => {
	const data = ['Film', 'Photography', 'Music', 'Holidays', 'Children', 'Home', 'Work', 'Family'];
	return (
		<div className={'menubar-labels'}>
			<h5>LABELS</h5>
			<div>
				{data.map(name => (
					<button className="button-outlined" key={name}>
						<i className="fas fa-tag" />
						{name}
					</button>
				))}
			</div>
		</div>
	);
};

export default Labels;
