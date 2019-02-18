import {
	FETCH_EMAILS,
	FETCH_EMAILS_SUCCESS,
	FETCH_EMAILS_ERROR,
	DELETE_EMAILS,
	DELETE_EMAILS_SUCCESS,
	DELETE_EMAILS_ERROR,
	READ_EMAILS,
	READ_EMAILS_SUCCESS,
	READ_EMAILS_ERROR
} from 'constants/actionTypes';
import actionCreator from 'actions/helper';

export const fetchEmails = actionCreator(FETCH_EMAILS, 'folder', 'pageNumber', 'emailsPerPage');
export const fetchEmailsSuccess = actionCreator(FETCH_EMAILS_SUCCESS, 'folder', 'emails');
export const fetchEmailsError = actionCreator(FETCH_EMAILS_ERROR, 'folder', 'errorMessage');

export const deleteEmails = actionCreator(DELETE_EMAILS, 'folder', 'emails', 'pageNumber', 'emailsPerPage');
export const deleteEmailsSuccess = actionCreator(DELETE_EMAILS_SUCCESS, 'folder');
export const deleteEmailsError = actionCreator(DELETE_EMAILS_ERROR, 'folder', 'errorMessage');

export const readEmails = actionCreator(READ_EMAILS, 'folder', 'emails', 'pageNumber', 'emailsPerPage');
export const readEmailsSuccess = actionCreator(READ_EMAILS_SUCCESS, 'folder');
export const readEmailsError = actionCreator(READ_EMAILS_ERROR, 'folder', 'errorMessage');
