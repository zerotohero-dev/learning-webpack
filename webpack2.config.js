const {resolve} = require( 'path' );

module.exports = {
    entry: './js/app.js',
    output: {
        filename: 'bundle.js',
        path: resolve( __dirname, 'dist' ),
        pathinfo: false
    },
    context: resolve( __dirname, 'src' ),
    devtool: 'eval',
    module: {
        loades: [
            {test: /\.js/, loader: 'babel', exclude: /node_modules/}
        ]
    }
};
