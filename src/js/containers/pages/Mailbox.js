import { connect } from 'react-redux';

import Mailbox from 'components/pages/MailBox';
import { fetchInboxDetails, fetchInboxEmails } from 'actions/inbox';

const mapStateToProps = ({ user: { name }, inbox: { pageNumber, emailsPerPage } }) => ({
	pageNumber,
	emailsPerPage,
	userName: name
});

export default connect(
	mapStateToProps,
	{ fetchInboxDetails, fetchInboxEmails }
)(Mailbox);
