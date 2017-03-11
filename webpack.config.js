function buildConfig(env){
	switch (env) {
		case 'dev':
			return require('./config/webpack.dev.js');
		case 'prod':
		default: 
			return require('./config/webpack.prod.js');
	} 
}

module.exports = buildConfig;