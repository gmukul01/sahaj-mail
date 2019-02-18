import { connect } from 'react-redux';

import Inbox from 'components/inbox/Inbox';
import { fetchInboxDetails } from 'actions/inbox';
import { fetchEmails, deleteEmails } from 'actions/emails';

const mapStateToProps = ({ inbox: { pageNumber, emailsPerPage, emails } }) => ({
	emails,
	pageNumber,
	emailsPerPage
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
	const { fetchEmails, deleteEmails } = dispatchProps;
	const { pageNumber, emailsPerPage } = stateProps;
	return {
		...stateProps,
		...dispatchProps,
		...ownProps,
		fetchEmails() {
			fetchEmails('inbox', pageNumber, emailsPerPage);
		},
		deleteEmails(emails) {
			deleteEmails('inbox', emails, pageNumber, emailsPerPage);
		}
	};
};

export default connect(
	mapStateToProps,
	{ fetchInboxDetails, fetchEmails, deleteEmails },
	mergeProps
)(Inbox);
