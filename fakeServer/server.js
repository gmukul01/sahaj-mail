const fs = require('fs'),
	bodyParser = require('body-parser'),
	jsonServer = require('json-server'),
	jwt = require('jsonwebtoken');

const server = jsonServer.create(),
	router = jsonServer.router('./fakeServer/db.json'),
	userdb = JSON.parse(fs.readFileSync('./fakeServer/users.json', 'UTF-8')),
	SECRET_KEY = '123456789',
	expiresIn = '1h';

const createToken = payload => jwt.sign(payload, SECRET_KEY, { expiresIn }),
	verifyToken = token => jwt.verify(token, SECRET_KEY, (err, decode) => (decode !== undefined ? decode : err)),
	getUser = ({ email, password }) => userdb.users.find(user => user.email === email && user.password === password);

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

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
		verifyToken(req.headers.authorization.split(' ')[1]);
		next();
	} catch (err) {
		const status = 401,
			message = 'Error access token is revoked';
		res.status(status).json({ status, message });
	}
});

server.use(router);

server.listen(4000, () => {
	console.log('Run Auth API Server');
});
