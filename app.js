import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

const API_PREFIX = '/api/v1/';

const users = [
	{
		id: 1,
		name: 'John'
	},
	{
		id: 2,
		name: 'Alex'
	}
];

function allowCrossDomain(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, HEAD');
	res.header('Access-Control-Allow-Headers',
				'X-Requested-With, X-HTTP-Method-Override, Accept, Origin, Referer, User-Agent, Content-Type, Authorization');
	if (req.method === 'OPTIONS') {
		res.send(200);
	} else {
		next();
	}
}

app.use(API_PREFIX + '*', allowCrossDomain);

app.get(API_PREFIX + 'users', (req, res)=> {
	res.json(users);
});

export default app;
