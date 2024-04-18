# Unit Testing

You can test Lightning Components similar to testing other Javascript Code. We recommend using [Jest](https://jestjs.io/) to test your Lightning Application.

# Getting Started

After creating a Lightning Application using the [SDK](lightning-cli-reference/Commands/create) install [Jest](https://jestjs.io/) and [Canvas Mock](https://github.com/adamfsk/jest-webgl-canvas-mock):

```
npm i jest jest-webgl-canvas-mock @babel/plugin-transform-modules-commonjs -D
```

Since Lightning is a canvas renderer, we need to use jest-webgl-canvas-mock to mock it in JSDOM environment. Enable it in your jest config or add the following to your package.json

```
  "jest": {
    "testEnvironment": "jsdom",
    "testEnvironmentOptions": { "resources": "usable" },
    "setupFiles": [
      "jest-webgl-canvas-mock"
    ],
    "moduleNameMapper": {
      "^src(.*)": "<rootDir>/src$1",
      "^test(.*)": "<rootDir>/test$1",
    },
    "transform": {
      "^.+\\.[m|t]?js$": "babel-jest"
    },
    "transformIgnorePatterns": []
  },
```

And create a babel.config.js with below to allow usage of import syntax

```
module.exports = {
  env: {
    test: {
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
      ]
    }
  }
};
```

Lastly, update your package.json and add a script to run Jest.

```
  "scripts": {
    "test": "jest"
  }
```

Now you can run Jest via `npm test` on the command line. It will look for any test files you create ending in `*.test.js`. If you do it now, it should run and say no tests found.

Let's create our [first test](FirstTest.md)

# ESlint Support

Add eslint support for jest

```
npm i eslint-plugin-jest -D
```

Edit .eslintrc

```
{
  "plugins": ["jest"]
}
```
