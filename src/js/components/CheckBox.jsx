import React from 'react';

const CheckBox = ({ id, selected, onChange }) => (
	<>
		<input className="styled-checkbox" value={id} type="checkbox" id={`checkbox-${id}`} defaultChecked={selected} onChange={onChange} />
		<label htmlFor={`checkbox-${id}`} />
	</>
);

export default CheckBox;
