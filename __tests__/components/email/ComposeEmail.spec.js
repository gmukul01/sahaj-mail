import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import ComposeEmail from 'components/email/ComposeEmail';

describe('ComposeEmail Component', () => {
	const mockOnCloseModal = jest.fn();
	const mockSendEmail = jest.fn();
	const initialProps = {
		showModal: false,
		onCloseModal: mockOnCloseModal,
		sendEmail: mockSendEmail
	};

	it('should match snapshot', () => {
		const { container } = render(<ComposeEmail {...initialProps} />);
		expect(container).toMatchSnapshot();
	});

	it('should show error when all the fields are empty', () => {
		const { container, getByText } = render(<ComposeEmail {...initialProps} />);
		fireEvent.click(getByText('Send'));
		expect(container.querySelector('.error').textContent).toBe('Please enter details');
	});

	it('should show error when body field is empty', () => {
		const { container, getByPlaceholderText, getByText } = render(<ComposeEmail {...initialProps} />);
		fireEvent.change(getByPlaceholderText('Enter recipient email id'), { target: { value: 'Dummyemail' } });
		fireEvent.click(getByText('Send'));
		expect(container.querySelector('.error').textContent).toBe('Please enter message');
	});

	it('should show error when email field is empty', () => {
		const { container, getByPlaceholderText, getByText } = render(<ComposeEmail {...initialProps} />);
		fireEvent.change(getByPlaceholderText('Enter message'), { target: { value: 'Dummy message' } });
		fireEvent.click(getByText('Send'));
		expect(container.querySelector('.error').textContent).toBe('Please enter recipient email id');
	});

	it('should call fetch Username use details if email and password is provided ', () => {
		const { getByPlaceholderText, getByText } = render(<ComposeEmail {...initialProps} />);
		fireEvent.change(getByPlaceholderText('Enter recipient email id'), { target: { value: 'Dummy Email' } });
		fireEvent.change(getByPlaceholderText('Enter subject'), { target: { value: 'Dummy Subject' } });
		fireEvent.change(getByPlaceholderText('Enter message'), { target: { value: 'Dummy message' } });
		fireEvent.click(getByText('Send'));
		expect(mockSendEmail.mock.calls[0][0]).toEqual({ to: 'Dummy Email', subject: 'Dummy Subject', body: 'Dummy message' });
	});
});
