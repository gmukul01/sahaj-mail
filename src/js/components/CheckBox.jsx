import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({ id, selected, onChange }) => (
	<>
		<input className="styled-checkbox" value={id} type="checkbox" id={`checkbox-${id}`} defaultChecked={selected} onChange={onChange} />
		<label htmlFor={`checkbox-${id}`} />
	</>
);

CheckBox.propTypes = {
	id: PropTypes.number,
	selected: PropTypes.bool,
	onChange: PropTypes.func
};

export default React.memo(CheckBox);
