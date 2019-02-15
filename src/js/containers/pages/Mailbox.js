import { connect } from 'react-redux';

import Mailbox from 'components/pages/Mailbox';

const mapStateToProps = ({ user: { name } }) => ({
	userName: name
});

export default connect(
	mapStateToProps,
	null
)(Mailbox);
