const formatTime = timestamp => {
	const emailTime = new Date(timestamp),
		currentTime = new Date(),
		months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

	return currentTime.getDate() - emailTime.getDate() > 0
		? `${months[emailTime.getMonth()]} ${emailTime.getDate()}`
		: emailTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
};

export default formatTime;
