export const BASE_URL = API_BASE_URL; // eslint-disable-line no-undef
export const USER_DETAILS = `${BASE_URL}/auth/login`;
export const INBOX_DETAILS = `${BASE_URL}/api/inbox`;
export const INBOX = {
	EMAILS: `${BASE_URL}/api/emails?to=`,
	DELETE: `${BASE_URL}/api/emails`,
	READ: `${BASE_URL}/api/readEmail`,
	SEND: `${BASE_URL}/api/emails`
};
export const SENT = {
	EMAILS: `${BASE_URL}/api/emails?from.email=`
};
export const INBOX_EMAILS = `${BASE_URL}/api/emails`;
