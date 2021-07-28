# Server Side Rendering Example with props

Builds on [JSX interactive](../jsx-interactive) example and introduces props.

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

