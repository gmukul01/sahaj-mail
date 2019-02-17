import { FETCH_INBOX_DETAILS_SUCCESS, FETCH_INBOX_EMAILS, FETCH_INBOX_EMAILS_SUCCESS, FETCH_INBOX_DETAILS_ERROR } from 'constants/actionTypes';
import createReducer from 'reducers/helper';

export const initialState = {
	totalEmails: undefined,
	totalUnread: undefined,
	currentPage: 1,
	emailsPerPage: 20,
	isLoading: false,
	emails: []
};
const addInboxDetails = (state, { inboxDetails }) => ({
	...state,
	...inboxDetails
});

const setLoading = state => ({
	...state,
	isLoading: true
});

const addEmails = (state, { emails }) => ({
	...state,
	emails,
	isLoading: false
});

const addErrorMessage = (state, { errorMessage }) => ({
	...state,
	errorMessage,
	isLoading: false
});

const inbox = createReducer(initialState, {
	[FETCH_INBOX_DETAILS_SUCCESS]: addInboxDetails,
	[FETCH_INBOX_DETAILS_ERROR]: addErrorMessage,
	[FETCH_INBOX_EMAILS]: setLoading,
	[FETCH_INBOX_EMAILS_SUCCESS]: addEmails
});

export default inbox;
