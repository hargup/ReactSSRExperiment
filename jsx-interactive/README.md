# Interactive Server Side Rendered App with JSX


Example inspired from https://remarkablemark.medium.com/server-side-rendering-with-react-46715f501651

Things to notice:
- We have three files here `server.js`, `Component.js` and `client.js`. `client.js` is bundled into `bundle.js` and served to the frontend. 
`Component.js` has the main react component which is shared between both frontend and backend.
- We use webpack to create `public/bundle.js`, do read [`webpack.config.js`](./webpack.config.js). Webpack takes the our client side code + all its dependencies (i.e., React in our case)
and packages it into a single js file which we can serve to the frontend.
- `bundle.js` exists in `public` directory.
- `Component.js` has the generates the full html document, which the server pushes as it is.
- The browser knows it needs to load `bundle.js` because we have specified that it in the `<script>` tag in `Component.js` 

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

