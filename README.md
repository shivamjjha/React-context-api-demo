# Context API React Demo

A simple responsive Sign In Page with Navbar.

Context provides a way to pass data through the component tree *without having to pass props down manually at every level*.

In a typical React application, data is passed top-down (parent to child) via props, but this can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components *without having to explicitly pass a prop through every level of the tree*.

For More, read this very good [React-Context Documentation](https://reactjs.org/docs/context.html)

Also, there is much of a debate lately in React community [when you should use context vs Redux](https://stackoverflow.com/questions/49568073/react-context-vs-react-redux-when-should-i-use-each-one). Well, with the coming of Hooks, it's been [easier than ever](https://reactjs.org/docs/hooks-reference.html#usecontext) to use Contexts inside your React App.

In this App, you can see the use of  Context API, for a cleaner and less pain-some  code, rather than manually passing props at each level.

Also, in this very App, you can see the difference between using the API by [using Class Components for Context API](https://github.com/shivamjjha/React-context-api-demo/tree/d3ff2c6a6c07a4294c11009f857ec184045e2664) vs [using Hooks for Context API]() and will appreciate how easy it is to use Hooks for this feature, as well as [for variety of other use cases too](https://reactjs.org/docs/hooks-intro.html#motivation)

## Libraries Used:
1. [@material-ui/core](https://www.npmjs.com/package/@material-ui/core): library containing the core Components for [Material UI](https://material-ui.com/)
2. [@material-ui/icons](https://www.npmjs.com/package/@material-ui/icons): This package provides the Google  [Material icons](https://material.io/tools/icons/)  packaged as a set of  [React](https://facebook.github.io/react/)  components.

## Starting the app
1. Open terminal, `cd` to your fav *Projects* folder and type: ```git clone https://github.com/shivamjjha/React-context-api-demo```

2. Switch to the Project's directory: ```cd React-context-api-demo```
3. Install Dependencies: ```npm i```
4. Start the hot-reloading server: ```npm start```
5. This will serve this project at [http://localhost:3000/](http://localhost:3000/) (by default).
6. To reflect changes in the project, edit the required files and save.

## Side notes

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

1. `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

2. `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

3.  `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
