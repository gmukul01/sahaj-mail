import reducer, { initialState } from 'reducers/inbox';
import { fetchEmails, deleteEmails, fetchEmailsSuccess } from 'actions/emails';
import { fetchInboxDetailsSuccess } from 'actions/inbox';

describe('Inbox reducer', () => {
	it('should give initial state', () => {
		expect(reducer(undefined, {})).toEqual(initialState);
	});

	it('should handle FETCH_EMAILS action', () => {
		expect(reducer(initialState, fetchEmails('inbox'))).toEqual({ ...initialState, isLoading: true });
	});

	it('should handle DELETE_EMAILS action', () => {
		expect(reducer(initialState, deleteEmails('inbox'))).toEqual({ ...initialState, isLoading: true });
	});

	it('should handle FETCH_EMAILS_SUCCESS action', () => {
		expect(reducer(initialState, fetchEmailsSuccess('inbox', [{ subject: 'dumy' }]))).toEqual({
			...initialState,
			emails: [{ subject: 'dumy' }],
			isLoading: false
		});
	});

	it('should handle FETCH_INBOX_DETAILS_SUCCESS action', () => {
		expect(reducer(initialState, fetchInboxDetailsSuccess({ totalEmails: 1 }))).toEqual({
			...initialState,
			totalEmails: 1
		});
	});
});
