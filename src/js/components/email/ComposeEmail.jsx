import React from 'react';

const ComposeEmail = ({ to, cc, subject, body }) => {
	return (
		<div className="compose-email">
			<div className="email-field">
				<label>To</label>
				<input type="text" {...to} />
			</div>

			<div className="email-field">
				<label>CC</label>
				<input type="text" {...cc} />
			</div>

			<div className="email-field">
				<label>Subject</label>
				<input type="text" {...subject} />
			</div>

			<div className="email-field">
				<label>Body</label>
				<input type="text" {...body} />
			</div>
		</div>
	);
};

export default ComposeEmail;
