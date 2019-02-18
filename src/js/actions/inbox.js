import { FETCH_INBOX_DETAILS, FETCH_INBOX_DETAILS_SUCCESS } from 'constants/actionTypes';
import actionCreator from 'actions/helper';

export const fetchInboxDetails = actionCreator(FETCH_INBOX_DETAILS);
export const fetchInboxDetailsSuccess = actionCreator(FETCH_INBOX_DETAILS_SUCCESS, 'inboxDetails');
