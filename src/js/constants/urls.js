export const BASE_URL = API_BASE_URL; // eslint-disable-line no-undef
export const USER_DETAILS = `${BASE_URL}/auth/login`;
export const INBOX_DETAILS = `${BASE_URL}/api/inbox`;
export const EMAILS = {
	INBOX: `${BASE_URL}/api/emails?to=`,
	SENT: `${BASE_URL}/api/emails?from.email=`,
	INBOX_READ: `${BASE_URL}/api/readEmail`
};
export const INBOX_EMAILS = `${BASE_URL}/api/emails`;
