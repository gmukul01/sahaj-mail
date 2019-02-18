import { connect } from 'react-redux';

import Inbox from 'components/inbox/Inbox';

const mapStateToProps = ({ inbox: { totalEmails, emails } }) => ({
	totalEmails,
	emails
});

export default connect(
	mapStateToProps,
	null
)(Inbox);
