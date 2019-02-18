import { connect } from 'react-redux';

import Inbox from 'components/inbox/Inbox';
import { fetchInboxDetails } from 'actions/inbox';
import { fetchEmails, deleteEmails, readEmails } from 'actions/emails';

const mapStateToProps = ({ inbox: { pageNumber, emailsPerPage, emails } }) => ({
	emails,
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
		deleteEmails(emails) {
			deleteEmails('inbox', emails, pageNumber, emailsPerPage);
		},
		readEmails(selectedEmails) {
			const newEmails = emails.filter(({ id }) => selectedEmails.includes(id + '')).map(emailDetails => ({ ...emailDetails, isRead: true }));
			readEmails('inbox', newEmails, pageNumber, emailsPerPage);
		}
	};
};

export default connect(
	mapStateToProps,
	{ fetchInboxDetails, fetchEmails, deleteEmails, readEmails },
	mergeProps
)(Inbox);
