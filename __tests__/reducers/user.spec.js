import reducer, { initialState } from 'reducers/user';
import { fetchUserDetails, fetchUserDetailsSuccess } from 'actions/user';

describe('User reducer', () => {
	it('should give initial state', () => {
		expect(reducer(undefined, {})).toEqual(initialState);
	});

	it('should handle FETCH_USER_DETAILS action', () => {
		expect(reducer(initialState, fetchUserDetails())).toEqual({ ...initialState, isLoading: true });
	});

	it('should handle FETCH_USER_DETAILS_SUCCESS action', () => {
		const dummyUserDetails = {
			id: 'dummyId',
			name: 'dummyName'
		};
		const action = fetchUserDetailsSuccess(dummyUserDetails);
		expect(reducer(initialState, action)).toEqual({ ...initialState, ...dummyUserDetails, isLoading: false });
	});
});
