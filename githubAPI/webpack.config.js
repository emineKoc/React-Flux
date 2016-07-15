module.exports = {
  entry:[
    './src/index.js'
  ],
  output: {
    path: __dirname,
    filename: 'app/js/main.js'
  },
  resolve: {
  extensions: ['', '.js', '.jsx']
  },
  module:{
    loaders:[
      {
        test: /.js$/,
        loader: 'babel',
        include: __dirname + "/src",
        exclude: /node_modules/
      }
    ]
  }
}
