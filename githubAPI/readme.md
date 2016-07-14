# Technologies
* HTML/CSS
* ES6
* Github API
* Webpack
* React.js
* Node, NPM

# Register GITHUB API

Visit https://github.com/settings/applications and create a new application.

In order to work locally, fill the information as followings:
homepage: https://localhost:8080/
auth callback URL: https://localhost:8080/_oauth/github

After that, Github will give you your Client ID and  Client secret.

# Install Dependencies
Step 1.

<i>make sure you have webpack installed globally

``` npm install webpack -g ```  
``` npm install webpack-dev-server -g ```  

If you already have them installed, start from here:

``` npm init ``` and follow the process.

```
Step 2.

```
npm install --save-dev babel-core babel-loader webpack
```

```
npm install --save react react-dom
```

Step 3.
Create webpack.config.js file.
``` touch webpack.config.js ```

Step 4.

Create the basic html and check if webpack is working

``` webpack-dev-server ```
