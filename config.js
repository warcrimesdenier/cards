module.exports = {
	DEBUG: false,
	REDIS_PORT: 'redis://:p93caa2d35d8d227f541368bbc2f2346168024e35982499e4300f1767c6582289@ec2-54-209-29-252.compute-1.amazonaws.com:12659',
	LISTEN_PORT: 8080,
	TRUST_X_FORWARDED_FOR: false,
	SOCKJS_PREFIX: '/sockjs',
	SOCKJS_URL: 'http://localhost:8000/sockjs',
	SOCKJS_SCRIPT_URL: 'http://localhost:8000/sockjs-1.1.1.min.js',
	GAME_ID: 1,
	NAME_EXPIRY: 60 * 60 * 24 * 14,
};
