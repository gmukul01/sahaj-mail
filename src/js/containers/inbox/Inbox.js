import { connect } from 'react-redux';

import Inbox from 'components/inbox/Inbox';
import { fetchInboxDetails } from 'actions/inbox';
import { fetchEmails } from 'actions/emails';

const mapStateToProps = ({ inbox: { pageNumber, emailsPerPage, emails } }) => ({
	emails,
	pageNumber,
	emailsPerPage
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
	const { fetchEmails } = dispatchProps;
	const { pageNumber, emailsPerPage } = stateProps;
	return {
		...stateProps,
		...dispatchProps,
		...ownProps,
		fetchEmails() {
			fetchEmails('inbox', pageNumber, emailsPerPage);
		}
	};
};

export default connect(
	mapStateToProps,
	{ fetchInboxDetails, fetchEmails },
	mergeProps
)(Inbox);
