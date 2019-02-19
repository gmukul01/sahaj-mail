import { connect } from 'react-redux';

import Inbox from 'components/inbox/Inbox';
import { fetchInboxDetails } from 'actions/inbox';
import { fetchEmails, deleteEmails, readEmails } from 'actions/emails';

const mapStateToProps = ({ inbox: { pageNumber, totalEmails, totalUnread, emailsPerPage, emails } }) => ({
	emails,
	totalEmails,
	totalUnread,
	pageNumber,
	emailsPerPage
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
	const { fetchEmails, deleteEmails, readEmails } = dispatchProps;
	const { emails, pageNumber, emailsPerPage, totalEmails, totalUnread } = stateProps;
	return {
		...stateProps,
		...dispatchProps,
		...ownProps,
		fetchEmails() {
			fetchEmails('inbox', pageNumber, emailsPerPage);
		},
		deleteEmails(selectedEmails) {
			const readEmails = emails.filter(({ id, isRead }) => selectedEmails.includes(id + '') && !isRead);
			deleteEmails('inbox', selectedEmails, pageNumber, emailsPerPage, totalEmails - selectedEmails.length, totalUnread - readEmails.length);
		},
		readEmails(selectedEmails) {
			const newEmails = emails.filter(({ id }) => selectedEmails.includes(id + '')).map(emailDetails => ({ ...emailDetails, isRead: true }));
			readEmails('inbox', newEmails, pageNumber, emailsPerPage, totalEmails, totalUnread - newEmails.length);
		}
	};
};

export default connect(
	mapStateToProps,
	{ fetchInboxDetails, fetchEmails, deleteEmails, readEmails },
	mergeProps
)(Inbox);
