const {resolve} = require( 'path' );

const env = {
    prod: true
};

module.exports = {
    entry: './js/app.js',
    output: {
        filename: 'bundle.js',
        path: resolve( __dirname, 'dist' ),
        pathinfo: !env.prod
    },
    context: resolve( __dirname, 'src' ),
    devtool: env.prod? 'source-map' : 'eval',
    bail: env.prod,
    module: {
        loades: [
            {test: /\.js/, loader: 'babel!eslint', exclude: /node_modules/},
            {test: /\.css/, loader: 'style!css!less '}
        ]
    }
} );
