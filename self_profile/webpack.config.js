module.exports = {
    entry: './server/index.js', 
    output: {
      path: __dirname + '/dist',
      filename: 'index.js'
    },
    mode: 'development',
    target: 'node',
    module: {
        rules: [
          {
            test: [/\.js[x]?$/,/\.tsx$/],
            exclude: /node_modules/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                      presets: [
                        '@babel/preset-env',
                        '@babel/preset-react' ,
                        "@babel/preset-typescript"
                      ],
                      plugins: ['@babel/plugin-syntax-jsx'] 
                    }
                },
                'ts-loader'
            ]
            
          }
        ]
      },
  };