module.exports = {
    entry: './server/index.js', 
    /*output: {
      path: __dirname + '/dist',
      filename: 'main.js'
    },*/
    mode: 'development',
    resolve: { 
        fallback: { 
            "http": require.resolve("stream-http"),
            "buffer": false,
            "url": false,
        }
    },
    module: {
        rules: [
          {
            test: /\.js[x]?$/,  // .jsxも対象に含む
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env',
                  '@babel/preset-react' ,
                  "@babel/preset-typescript"
                ],
                plugins: ['@babel/plugin-syntax-jsx'] 
              }
            }
          }
        ]
      },
  };