React-demo is a bunch of demo.
It allows you to test some cool stuff :

* webpack
* hot-reload
* redux

# Step by step

## webpack
Overview and documentation of a webpackconfig is availiable here :
https://github.com/ekino/webpack-cheatsheet/tree/front

## hot-loader
run

`npm start hot-loader`

Browser will launch at : http://localhost:8080/webpack-dev-server/

## redux
Start by updating submodule :

`git@github.com:pebie/redux-demo-server.git`

run

`npm start redux`

**Note**:

Nothing is ready to production but you can add `release`tag after command to build in a client folder (wip).


**Note**:
* Since React 0.14 some node modules such as react-* are no longer ready to be complient with react 0.14.
Don't use it or install it manually.

* Don't forget to install react-dom since 0.14 split it from react.

* Package redux and react-redux are different but you need both.

* Until next release this warning will appear. This is due to new react 0.14.

```javascript

 Warning: React.findDOMNode is deprecated. Please use ReactDOM.findDOMNode from require('react-dom') instead.

```
