import { FETCH_INBOX_DETAILS, FETCH_INBOX_DETAILS_SUCCESS, FETCH_INBOX_EMAILS, FETCH_INBOX_EMAILS_SUCCESS, FETCH_INBOX_DETAILS_ERROR } from 'constants/actionTypes';
import actionCreator from 'actions/helper';

export const fetchInboxDetails = actionCreator(FETCH_INBOX_DETAILS);
export const fetchInboxDetailsSuccess = actionCreator(FETCH_INBOX_DETAILS_SUCCESS, 'inboxDetails');
export const fetchInboxEmails = actionCreator(FETCH_INBOX_EMAILS, 'pageNumber', 'emailsPerPage');
export const fetchInboxEmailsSuccess = actionCreator(FETCH_INBOX_EMAILS_SUCCESS, 'emails');
export const fetchInboxDetailsError = actionCreator(FETCH_INBOX_DETAILS_ERROR, 'emails');
