import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import LoginPage from 'components/pages/LoginPage';

describe('LoginPage Component', () => {
	const mockFetchUserDetails = jest.fn();
	const initialProps = {
		isLoading: false,
		fetchUserDetails: mockFetchUserDetails,
		location: {
			from: '/'
		}
	};

	it('should match snapshot', () => {
		const { container } = render(<LoginPage {...initialProps} />);
		expect(container).toMatchSnapshot();
	});

	it('should show error when all the fields are empty', () => {
		const { container, getByText } = render(<LoginPage {...initialProps} />);
		fireEvent.click(getByText('Login'));
		expect(container.querySelector('.error').textContent).toBe('Please enter Email & Password');
	});

	it('should show error when Password fields is empty', () => {
		const { container, getByPlaceholderText, getByText } = render(<LoginPage {...initialProps} />);
		fireEvent.change(getByPlaceholderText('Username'), { target: { value: 'DummyUserName' } });
		fireEvent.click(getByText('Login'));
		expect(container.querySelector('.error').textContent).toBe('Please enter Password');
	});

	it('should show error when Email fields is empty', () => {
		const { container, getByPlaceholderText, getByText } = render(<LoginPage {...initialProps} />);
		fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'DummyPassword' } });
		fireEvent.click(getByText('Login'));
		expect(container.querySelector('.error').textContent).toBe('Please enter Email');
	});

	it('should call fetch Username use details if email and password is provided ', () => {
		const { getByPlaceholderText, getByText } = render(<LoginPage {...initialProps} />);
		fireEvent.change(getByPlaceholderText('Username'), { target: { value: 'DummyUserName' } });
		fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'DummyPassword' } });
		fireEvent.click(getByText('Login'));
		expect(mockFetchUserDetails.mock.calls[0][0]).toBe('DummyUserName');
		expect(mockFetchUserDetails.mock.calls[0][1]).toBe('DummyPassword');
	});
});
