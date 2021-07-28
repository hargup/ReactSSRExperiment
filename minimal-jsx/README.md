# Mimimal Server Side Rendering Example with JSX

This builds on previous example. The component.js file uses the JSX syntax, we use [Babel](https://babeljs.io/docs/en/learn) to convert the code to convert it to ES5 compliant code, which you can run directly with node.

Example inspired from https://remarkablemark.medium.com/server-side-rendering-with-react-46715f501651

Things to notice:
- We run babel before running the server.
- We running server from `build/` directory instead of `server` directory.

# Installation
```
yarn
```

# Compile the JSX code to ES5 compliant code
```
npx babel server --out-dir build 
```

# Running the code
```
node build/server.js
```

Open https://localhost:3000/

