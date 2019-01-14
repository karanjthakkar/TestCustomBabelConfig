# Setup 

`npm i`

# Passing test

`npm run pass`

# Failing test repro

`npm run fail`

Only difference between the two is `jest.resetModules` being called in `beforeEach()` [here](https://github.com/karanjthakkar/TestCustomBabelConfig/blob/46af41a97e058c1032ed17fda7f944ca8c2f8484/AppFail.test.js#L5)

Commit with all the changes: [get jest and enzyme to work. add failing repro](https://github.com/karanjthakkar/TestCustomBabelConfig/commit/46af41a97e058c1032ed17fda7f944ca8c2f8484)
