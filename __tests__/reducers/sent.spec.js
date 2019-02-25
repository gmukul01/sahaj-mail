import reducer, { initialState } from 'reducers/sent';
import { fetchEmails, fetchEmailsSuccess } from 'actions/emails';

describe('Sent reducer', () => {
	it('should give initial state', () => {
		expect(reducer(undefined, {})).toEqual(initialState);
	});

	it('should handle FETCH_EMAILS action', () => {
		expect(reducer(initialState, fetchEmails('sent'))).toEqual({ ...initialState, isLoading: true });
	});

	it('should handle FETCH_EMAILS_SUCCESS action', () => {
		expect(reducer(initialState, fetchEmailsSuccess('sent', [{ subject: 'dumy' }]))).toEqual({
			...initialState,
			emails: [{ subject: 'dumy' }],
			isLoading: false
		});
	});
});
