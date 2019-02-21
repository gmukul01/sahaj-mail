import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import CheckBox from 'components/CheckBox';

describe('CheckBox Component', () => {
	const onChangeHandler = jest.fn(),
		initialProps = {
			id: 1,
			selected: true,
			onChange: onChangeHandler
		};
	it('should match snapshot', () => {
		const checkBox = renderer.create(<CheckBox {...initialProps} />).toJSON();
		expect(checkBox).toMatchSnapshot();
	});

	it('should call onChange Handler on onChange event', () => {
		const checkBox = shallow(<CheckBox {...initialProps} />);
		checkBox.find('input').simulate('change', 'Dummy');
		expect(onChangeHandler.mock.calls[0][0]).toBe('Dummy');
	});
});
