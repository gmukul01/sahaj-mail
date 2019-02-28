import { connect } from 'react-redux';

import MailBoxInfo from 'components/mailBoxInfo/MailBoxInfo';
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
		title: 'Inbox',
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
	{ fetchEmails, deleteEmails, readEmails },
	mergeProps
)(MailBoxInfo);
