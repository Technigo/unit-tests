# Unit Tests Challenge

This repository contains a bunch of unfinished or buggy functions in the src folder. Your task is to run the tests, find the bugs or finish unfinished functionality. See how far you can get. You don't have to finish them all, but give it a try!

## How to run the tests

1. First, fork this repository, then clone it to your computer. You'll need to install a couple of things before you can start running and fixing the tests.
2. Before you can run the tests, you need to have Node and NPM installed. If you already have them installed, you can skip this step. You can install node using the installer from [nodejs.org](https://nodejs.org/en/), or (*mac only*) by first installing [homebrew](https://brew.sh) and running `brew install node`.
3. Now you have node, you can install the dependencies this project needs to run. Make sure you have `cd`'d into this project, and then run `npm install` to install all dependencies listed in package.json.
4. Finally, you're ready to run the tests! Run `npm run test` to run the full test suite.

## Finding and fixing a test

Let's fix the first test together.

The first thing you'll notice when running the entire suite is that you get a lot of output in your terminal. This can be a little overwhelming, so we can make it a little easier on ourselves and run our tests one-at-a-time until we have them all fixed.

So, let's take the first test, which is for this file; src/1-multiplication.js. The tests are defined in src/1-multiplication.spec.js.

We can run this test individually with the following command:

```
npm run test -- -t 1-multiplication
```

This matches tests based on the string in the `description()` function from their test. The output should look something like this:

```
 FAIL  src/1-multiplication.spec.js
  ● 1-multiplication › should return the value from multiplying two numbers

    expect(received).toEqual(expected) // deep equality

    Expected: 4
    Received: undefined

      3 | describe('1-multiplication', () => {
      4 |   it('should return the value from multiplying two numbers', () => {
    > 5 |     expect(multiply(2, 2)).toEqual(4)
        |                            ^
      6 |   })
      7 | })
      8 |

      at Object.toEqual (src/1-multiplication.spec.js:5:28)


Test Suites: 1 failed, 1 skipped, 1 of 2 total
Tests:       1 failed, 1 skipped, 2 total
Snapshots:   0 total
Time:        1.374s
```

So, we have 1 failing assertion. If you look at the expected and recieved values, it seems that our `multiply()` function (from src/1-multiplication.js) is returning `undefined` instead of a number:

```
    Expected: 4
    Received: undefined
```

So let's look at the function and see why that is. The function looks like this:

```
export const multiply = (a, b) => {
  a * b
}
```

See what's missing? It's missing the `return` keyword! Update the function to include `return`:

```
export const multiply = (a, b) => {
  return a * b
}
```

Now, try running the test again (`npm run test -- -t 1-multiplication`). Our test should now be fixed! The output should now look like this:

```
 PASS  src/1-multiplication.spec.js

Test Suites: 1 skipped, 1 passed, 1 of 2 total
Tests:       1 skipped, 1 passed, 2 total
Snapshots:   0 total
Time:        1.277s
```

:clap:

## Next step

Now you know how to fix a test, try going through the failing tests one-by-one and finding a solution which satisfies all the assertions. Some tests have multiple assertions which you'll need to satisfy, and they get tricker the further you go.

## Stretch goals

All tests passing? Awesome! Try to write some new functions and write tests for them! [Here's a great place](https://edabit.com/challenges) to find some tough challenges!

