# App Hosting

## Create React App
    $ npx create-react-app app-hosting
## Create New Repository
    crate new repository from github 
                &
        copy the url address
## Add home page in package.json 
```javascript
"homepage": "https://md-abdullah-fardus.github.io/app-hosting"
```
## Install gh-pages
```javascript
$ npm install --save gh-pages
```
## Add Scripts in package.json
```javascript
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
```
## Run Deploy
    $ npm run deploy