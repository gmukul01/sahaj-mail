import { connect } from 'react-redux';

import { fetchInboxDetails } from 'actions/inbox';
import MailBox from 'components/pages/MailBox';

export default connect(
	null,
	{
		fetchInboxDetails
	}
)(MailBox);
