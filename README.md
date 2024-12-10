# TypeScript Type Mismatch Error

This repository demonstrates a common TypeScript error: a type mismatch in function arguments.

The `bug.ts` file contains code that attempts to pass an array of strings to a function that expects a single string. This results in a runtime error or incorrect output. The `bugSolution.ts` file provides a corrected version, addressing the type mismatch.

## Running the code:

1. Clone the repository.
2. Navigate to the repository's directory in your terminal.
3. Compile and run the code using the TypeScript compiler: `tsc bug.ts && node bug.js` and `tsc bugSolution.ts && node bugSolution.js`

## Learning points:

- Pay close attention to function argument types in TypeScript to avoid runtime errors.
- Understand type checking and how it helps prevent common programming mistakes.