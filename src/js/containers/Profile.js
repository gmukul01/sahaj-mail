import { connect } from 'react-redux';

import Profile from 'components/Profile';

const mapStateToProps = ({ user: { name } }) => ({
	userName: name
});

export default connect(
	mapStateToProps,
	null
)(Profile);
