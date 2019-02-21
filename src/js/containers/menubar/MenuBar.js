import { connect } from 'react-redux';

import { sendEmail } from 'actions/emails';
import MenuBar from 'components/menubar/MenuBar';

const mapStateToProps = ({ user: { name, email }, inbox: { pageNumber, emailsPerPage, totalUnread } }) => {
	return {
		name,
		email,
		pageNumber,
		emailsPerPage,
		totalUnread
	};
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
	const { sendEmail } = dispatchProps;
	const { name, email, pageNumber, emailsPerPage } = stateProps;
	return {
		...stateProps,
		...dispatchProps,
		...ownProps,
		sendEmail(emailDetais) {
			const newEmailDetails = {
				...emailDetais,
				from: { name, email },
				isRead: false,
				hasAttachment: false
			};
			sendEmail(newEmailDetails, 'inbox', pageNumber, emailsPerPage);
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
