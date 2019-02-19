import { connect } from 'react-redux';

import { sendEmail } from 'actions/emails';
import MenuBar from 'components/menubar/MenuBar';

const mapStateToProps = ({ user: { name, email }, inbox: { pageNumber, emailsPerPage, totalEmails, totalUnread } }) => {
	return {
		name,
		email,
		pageNumber,
		emailsPerPage,
		totalEmails,
		totalUnread
	};
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
	const { sendEmail } = dispatchProps;
	const { name, email, pageNumber, emailsPerPage, totalEmails, totalUnread } = stateProps;
	return {
		...stateProps,
		...dispatchProps,
		...ownProps,
		sendEmail(emailDetais) {
			const newemailDetails = {
				...emailDetais,
				id: Date.now(),
				from: { name, email },
				isRead: false,
				timestamp: Date.now(),
				hasAttachment: false
			};
			sendEmail(newemailDetails, 'inbox', pageNumber, emailsPerPage, totalEmails, totalUnread);
		}
	};
};

export default connect(
	mapStateToProps,
	{
		sendEmail
	},
	mergeProps
)(MenuBar);
