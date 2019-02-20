import { connect } from 'react-redux';

import Inbox from 'components/inbox/Inbox';
import { fetchInboxDetails } from 'actions/inbox';
import { fetchEmails, deleteEmails, readEmails } from 'actions/emails';

const mapStateToProps = ({ inbox: { pageNumber, totalEmails, emailsPerPage, emails } }) => ({
	emails,
	totalEmails,
	pageNumber,
	emailsPerPage
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
	const { fetchEmails, deleteEmails, readEmails } = dispatchProps;
	const { emails, pageNumber, emailsPerPage } = stateProps;
	return {
		...stateProps,
		...dispatchProps,
		...ownProps,
		fetchEmails() {
			fetchEmails('inbox', pageNumber, emailsPerPage);
		},
		deleteEmails(selectedEmails) {
			selectedEmails.length > 0 && deleteEmails('inbox', selectedEmails, pageNumber, emailsPerPage);
		},
		readEmails(selectedEmails) {
			const selectedUnreadEmails = emails.filter(({ id, isRead }) => selectedEmails.includes(id) && !isRead).map(emailDetails => emailDetails.id);
			selectedUnreadEmails.length > 0 && readEmails('inbox', selectedUnreadEmails, pageNumber, emailsPerPage);
		}
	};
};

export default connect(
	mapStateToProps,
	{ fetchInboxDetails, fetchEmails, deleteEmails, readEmails },
	mergeProps
)(Inbox);
