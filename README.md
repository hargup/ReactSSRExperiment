# ReactSSRExperiment

Experiments with Server Side Rendering in React.

Try the examples in following order:

- [Minimal Example](./minimal): Learn that it is possible to run react on the server. The node js code converts a minimal react class into HTML and serves it. Only dependencies are `express`, `react`, `react-dom`, [`create-react-class`](https://reactjs.org/docs/react-without-es6.html). Works with old browsers, doesn't need any transpilers or bundlers.
- [Minimal JSX](./minimal-jsx): Builds on previous example and introduces JSX, requires babel to convert JSX to ES5. The server still serves plain HTML, there is no interactivity.
- [JSX interactive](./jsx-interactive): Introduces interactivity. Here server serves both HTML + JS, the page is rendered on the server, but you are able to interact with it.
