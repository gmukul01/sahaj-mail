import { FETCH_INBOX_DETAILS_SUCCESS, FETCH_EMAILS_SUCCESS, FETCH_EMAILS, DELETE_EMAILS } from 'constants/actionTypes';
import createReducer from 'reducers/helper';

export const initialState = {
	totalEmails: undefined,
	totalUnread: undefined,
	pageNumber: 1,
	emailsPerPage: 20,
	isLoading: false,
	emails: []
};
const addInboxDetails = (state, { inboxDetails }) => ({
	...state,
	...inboxDetails
});

const addEmails = (state, { folder, emails }) => {
	return folder === 'inbox'
		? {
				...state,
				emails,
				isLoading: false
		  }
		: state;
};

const setLoading = (state, { folder }) => {
	return folder === 'inbox'
		? {
				...state,
				isLoading: true
		  }
		: state;
};

const inbox = createReducer(initialState, {
	[FETCH_EMAILS]: setLoading,
	[DELETE_EMAILS]: setLoading,
	[FETCH_EMAILS_SUCCESS]: addEmails,
	[FETCH_INBOX_DETAILS_SUCCESS]: addInboxDetails
});

export default inbox;
