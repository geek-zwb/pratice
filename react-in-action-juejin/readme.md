## startkit
1. [Set up React, webpack, and Babel form scratch](https://www.valentinog.com/blog/react-webpack-babel/);
```
# 1. set up webpack
npm i --save-dev webpack webpack-cli

# 2. set up babel
## babel-preset-env compile ES6 code down to ES5 (babel-preset-ees2015 is now deprecated)
## babel-preset-react compile JSX and other stuff down to JavaScript
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev

set webpack options
rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },

# 3. html-webpack-plugin
npm i --save-dev html-webpack-plugin

# 4. webpack dev server
 npm i webpack-dev-server --save-dev
 "scripts": {
   "start": "webpack-dev-server --open --mode development",
 }
 
# 5. other loaders like style-loader、file-loader

#
npm start
```