import { FETCH_EMAILS_SUCCESS, FETCH_EMAILS } from 'constants/actionTypes';
import createReducer from 'reducers/helper';

export const initialState = {
	pageNumber: 1,
	emailsPerPage: 20,
	isLoading: false,
	emails: []
};
const addEmails = (state, { folder, emails }) => {
	return folder === 'sent'
		? {
				...state,
				emails,
				isLoading: false
		  }
		: state;
};

const setLoading = (state, { folder }) => {
	return folder === 'sent'
		? {
				...state,
				isLoading: true
		  }
		: state;
};

const inbox = createReducer(initialState, {
	[FETCH_EMAILS]: setLoading,
	[FETCH_EMAILS_SUCCESS]: addEmails
});

export default inbox;
