# Dynamic Import example -- No dependency

## Problem Statement
<img width="223" alt="Screenshot 2021-08-03 at 9 44 58 PM" src="https://user-images.githubusercontent.com/2477788/128050123-b7105230-377b-4be2-8b0e-38ad622f91dd.png">
- Load only the necessary Javascript files, conditional on the user input. As in, load `apple.js` only when the user clicks on "apple".

## How to run the example?
- `npx serve -s ./src -p 3000` to server the code

## How it works?
- `import()` statements in Javascript can have dynamic values in it. Depending on the input webpack loads the right js chunk.
