# Mimimal Server Side Rendering Example with JSX

This builds on previous example. The component.js file uses the JSX syntax, we use Babel to convert the code to convert it to ES5 compliant code, which you run directly with node.

Example inspired from https://remarkablemark.medium.com/server-side-rendering-with-react-46715f501651

# Installation
```
yarn
```

# Compile the JSX code to ES5 compliant code
```
npx babel server --out-dir build 
```

# Create the client side javascript bundle
```
npx webpack --mode production
```

# Running the code
```
node build/server.js
```

Open https://localhost:3000/

