const fs = require('fs'),
	bodyParser = require('body-parser'),
	jsonServer = require('json-server'),
	jwt = require('jsonwebtoken'),
	cors = require('cors');

const server = jsonServer.create(),
	router = jsonServer.router('./fakeServer/database/emails.json'),
	userdb = JSON.parse(fs.readFileSync('./fakeServer/database/users.json', 'UTF-8')),
	SECRET_KEY = '123456789',
	expiresIn = '1h';

const createToken = payload => jwt.sign(payload, SECRET_KEY, { expiresIn }),
	verifyToken = token => jwt.verify(token, SECRET_KEY, (err, decode) => (decode !== undefined ? decode : err)),
	getUser = ({ email, password }) => userdb.users.find(user => user.email === email && user.password === password);

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors());

server.post('/auth/login', (req, res) => {
	const { email, password } = req.body,
		user = getUser({ email, password });
	if (!user) {
		const status = 401,
			message = 'Incorrect email or password';
		res.status(status).json({ status, message });
		return;
	}
	const accessToken = createToken({ email, password });
	res.status(200).json({ ...user, accessToken });
});

server.use(/^(?!\/auth).*$/, (req, res, next) => {
	if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
		const status = 401,
			message = 'Error in authorization format';
		res.status(status).json({ status, message });
		return;
	}
	try {
		const decode = verifyToken(req.headers.authorization.split(' ')[1]);
		if (decode.name === 'TokenExpiredError') {
			res.status(401).json(decode);
		}
		req.headers['email'] = decode.email;
		next();
	} catch (err) {
		const status = 401,
			message = 'Error access token is revoked';
		res.status(status).json({ status, message });
	}
});

server.get('/api/inbox', async (req, res, next) => {
	const db = require('./database/inbox.json');
	res.status(200).jsonp(db.filter(({ email }) => email === req.headers.email));
});

server.post('/api/emails', async (req, res, next) => {
	const db = require('./database/inbox.json');
	const { to } = req.body;
	const inbox = db.find(({ email }) => email === to);

	++inbox.totalEmails;
	++inbox.totalUnread;
	await fs.writeFile('./fakeServer/database/inbox.json', JSON.stringify(db));
	next();
});

server.put('/api/readEmail/:id', async (req, res, next) => {
	const emails = require('./database/emails.json').emails;
	const db = require('./database/inbox.json');
	const email = emails.find(({ id }) => id === Number(req.params.id));

	if (!email.isRead) {
		const inbox = db.find(({ email }) => email === req.headers.email);
		--inbox.totalUnread;
		await fs.writeFile('./fakeServer/database/inbox.json', JSON.stringify(db));
	}

	req.body = { ...email, isRead: true };

	next();
});

server.delete('/api/emails/:id', async (req, res, next) => {
	const emails = require('./database/emails.json').emails;
	const db = require('./database/inbox.json');
	const inbox = db.find(({ email }) => email === req.headers.email);

	--inbox.totalEmails;
	if (!emails.find(({ id }) => id === Number(req.params.id)).isRead) --inbox.totalUnread;
	await fs.writeFile('./fakeServer/database/inbox.json', JSON.stringify(db));
	next();
});

server.use(
	jsonServer.rewriter({
		'/api/readEmail/:id': '/api/emails/:id'
	})
);

server.use('/api', router);

server.listen(4000, () => {
	console.log('Json server is running on 4000 port');
});
