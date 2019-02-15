import { FETCH_USER_DETAILS, FETCH_USER_DETAILS_SUCCESS, FETCH_USER_DETAILS_FAILURE } from 'constants/actionTypes';
import actionCreator from 'actions/helper';

export const fetchUserDetails = actionCreator(FETCH_USER_DETAILS, 'email', 'password');
export const fetchUserDetailsSuccess = actionCreator(FETCH_USER_DETAILS_SUCCESS, 'user');
export const fetchUserDetailsFailure = actionCreator(FETCH_USER_DETAILS_FAILURE, 'errorMessage');
