import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Modal from 'components/Modal';

describe('Modal Component', () => {
	const onCloseHandler = jest.fn();

	it('should match snapshot when showModal is true', () => {
		const modal = renderer.create(<Modal showModal header="Dummy Header" onCloseModal={onCloseHandler} />).toJSON();
		expect(modal).toMatchSnapshot();
	});

	it('should match snapshot when showModal is false', () => {
		const modal = renderer.create(<Modal showModal={false} header="Dummy Header" onCloseModal={onCloseHandler} />).toJSON();
		expect(modal).toMatchSnapshot();
	});

	it('should call onClick Handler on onClick event', () => {
		const modal = shallow(<Modal id={1} selected onCloseModal={onCloseHandler} />);
		modal.find('button').simulate('click');
		expect(onCloseHandler.mock.calls.length).toBe(1);
	});
});
