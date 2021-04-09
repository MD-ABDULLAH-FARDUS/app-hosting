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

## Bootstrap Install
    $ npm i bootstrap@next --save

## React Router Install
    $ npm install react-router-dom

## Basic Routing
```javascript
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

<Router>
    <div>
        <nav> 
            <ul>
                <li><Link to="/"> Home </li>
                <li><Link to="/about"> About </li>
                <li><Link to="/contact"> Contact </li>
            </ul>
            <Route path="/" exactly component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </nav>
    </div>
</Router>
```