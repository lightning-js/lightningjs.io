# First Test

Create a `test` folder at the root of your project and then `App.test.js` file with the following:

```
import App from 'src/'
import settings from '../settings.json'

const app = App(
  {
    stage: {
      ...settings['appSettings'].stage,
      useImageWorker: false,
      debug: false
    },
    debug: false,
  },
  {
    ...settings['platformSettings'],
    log: false,
    fontLoader: jest.fn()
  }
)

describe('App', () => {
  it('should render', () => {
    expect(app).toMatchSnapshot();
  })

  it('should display text', () => {
    const ourApp = app._getFocused();
    let text = ourApp.tag('Text').text.text;
    expect(text).toEqual("Let's start Building!")
  })
})
```

Go ahead and run the test via `npm test` - you should get two passing tests. You can see how to boot up your app and access a component. From here you can create more unit tests as you add functionality to your application. We recommend you check out the [Jest documentation](https://jestjs.io/docs/getting-started) if you need help learning how to test Javascript code.

# Testing Individual Components

The [Lightning-UI-Components](https://github.com/rdkcentral/Lightning-UI-Components) library includes a TestRenderer to ease testing of individual components.

```
import TestRenderer from '@lightningjs/ui-components/test/lightning-test-renderer';
class MyComponent extends lng.Component {}

let testRenderer, myComponent;
beforeEach(() => {
  testRenderer = TestRenderer.create(MyComponent);
  myComponent = testRenderer.getInstance();
});

it('should render', () => {
  let tree = testRenderer.toJSON();
  expect(tree).toMatchSnapshot();
});

it('can handle key presses', () => {
  testRenderer.keyPress('Enter');
  expect(myComponent.somethingChanged).toBe(true);
});
```

# Find out more

If you want to learn more about testing a full app - we've open sourced an example Lightning Application complete with Jest tests. Check out the code here: https://github.com/ComcastSamples/lightning-ui-tmdb
