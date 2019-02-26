import { connect } from 'react-redux';

import MailBoxInfo from 'components/mailBoxInfo/MailBoxInfo';
import { fetchEmails } from 'actions/emails';

const mapStateToProps = ({ sent: { emails, pageNumber, emailsPerPage } }) => ({
	emails,
	pageNumber,
	emailsPerPage
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
	const { fetchEmails } = dispatchProps;
	const { emails, pageNumber, emailsPerPage } = stateProps;
	return {
		...stateProps,
		...dispatchProps,
		...ownProps,
		totalEmails: emails.length,
		title: 'Sent',
		isSentMail: true,
		fetchEmails() {
			fetchEmails('sent', pageNumber, emailsPerPage);
		},
		deleteEmails(selectedEmails) {},
		readEmails(selectedEmails) {}
	};
};

export default connect(
	mapStateToProps,
	{ fetchEmails },
	mergeProps
)(MailBoxInfo);
