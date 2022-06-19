module.exports = {
	DEBUG: true,
	REDIS_PORT: 'redis://:p93caa2d35d8d227f541368bbc2f2346168024e35982499e4300f1767c6582289@ec2-54-209-29-252.compute-1.amazonaws.com:12659',
	LISTEN_PORT: process.env.PORT,
	TRUST_X_FORWARDED_FOR: true,
	SOCKJS_PREFIX: '/sockjs',
	SOCKJS_URL: 'http://localhost:' + process.env.PORT + '/sockjs',
	SOCKJS_SCRIPT_URL: 'https://cdn.jsdelivr.net/npm/sockjs-client@1/dist/sockjs.min.js', //'http://localhost:8000/sockjs-1.1.1.min.js',
	GAME_ID: 1,
	NAME_EXPIRY: 60 * 60 * 24 * 14,
};
