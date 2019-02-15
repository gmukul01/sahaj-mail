import { FETCH_USER_DETAILS_SUCCESS, FETCH_USER_DETAILS, FETCH_USER_DETAILS_FAILURE } from 'constants/actionTypes';
import createReducer from 'reducers/helper';

export const initialState = {
	name: undefined,
	email: undefined,
	password: undefined,
	isLoading: false,
	errorMessage: undefined
};
const addUserDetails = (state, { user }) => ({
	...state,
	...user,
	isLoading: false
});

const setLoading = state => ({
	...state,
	isLoading: true
});

const addErrorMessage = (state, { errorMessage }) => ({
	...state,
	errorMessage,
	isLoading: false
});

const user = createReducer(initialState, {
	[FETCH_USER_DETAILS]: setLoading,
	[FETCH_USER_DETAILS_SUCCESS]: addUserDetails,
	[FETCH_USER_DETAILS_FAILURE]: addErrorMessage
});

export default user;
