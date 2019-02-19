import { connect } from 'react-redux';

import MenuBar from 'components/menubar/MenuBar';

const mapStateToProps = ({ inbox: { totalUnread } }) => {
	return {
		totalUnread
	};
};

export default connect(
	mapStateToProps,
	null
)(MenuBar);
