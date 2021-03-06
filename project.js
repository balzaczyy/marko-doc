const isProduction = process.env.NODE_ENV === 'production';

module.exports = require('marko-starter').projectConfig({
    routePathPrefix: '/',
    lassoConfig: {
        bundlingEnabled: isProduction,
        fingerprintsEnabled: isProduction,
        require: {
        },
        minifyJS: true,
        plugins: [
            'lasso-marko'
        ]
    }
});
