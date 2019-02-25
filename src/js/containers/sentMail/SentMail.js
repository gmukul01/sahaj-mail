import { connect } from 'react-redux';

import SentMail from 'components/SentMail/SentMail';
import { fetchEmails } from 'actions/emails';

const mapStateToProps = ({ sent: { emails, pageNumber, emailsPerPage } }) => ({
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
			fetchEmails('sent', pageNumber, emailsPerPage);
		}
	};
};

export default connect(
	mapStateToProps,
	{ fetchEmails },
	mergeProps
)(SentMail);
