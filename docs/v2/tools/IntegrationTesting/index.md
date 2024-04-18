# Integration Testing

Lightning is a Canvas based renderer, however, the lightning inspector creates an HTML reprentation of the canvas allowing you to write integration tests using tools like [Cypress](https://www.cypress.io/).

# Getting Started

After creating a Lightning Application using the [SDK](lightning-cli-reference/Commands/create) install [Cypress](https://www.cypress.io/):

```
npm i cypress -D
```

And add a shortcut to run cypress in package.json

```
  "scripts": {
    "cypress": "cypress open",
  }
```

Now you can run Cypress via `npm run cypress` on the command line. It will launch the Cypress Test Runner and look for tests in `/cypress`. To learn more about Cypress check out their [getting started](https://docs.cypress.io/guides/getting-started/writing-your-first-test#What-you-ll-learn)

In order to test a Lightning app, we need to load the application with the inspector on by changing settings.json,

```
  "platformSettings": {
    "inspector": true
  }
```

## Creating different builds

The inspector true flag will load lightning-inspect.js to create HTML markup representing each of your Lightning components, allowing us to write integration tests for DOM. However, we DON'T want this on in production. We recommend either creating two builds using [environment variables](/lightning-cli-reference/EnvironmentVariables?id=lng_settings_env) or creating two index files with different scripts loaded.


# Writing a test

```
describe('Lightning TMDB app', () => {
  describe('Browse', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8080/')
      cy.get('#BrowsePage [type="Row"]').should('have.length', 5)
    })

    it('displays a page with rows', () => {
      cy.get('#BrowsePage [type="Row"]').first().find('[type="Tile"]').should('have.length', 7)
    })

    it('loads additional rows', () => {
      cy.get('body').type('{downArrow}');
      cy.get('#BrowsePage [type="Row"]').should('have.length', 8)
    })
  })
})
```

## Pro tips
Make sure the page is fully rendered before interacting by querying for an element.

In your components you can add an id which will become the id on the HTML element.

```
get id() {
  return 'BrowsePage'
}
```

Remember that Lightning is a canvas tag and will handle focus internally. We recommend you use typing keys to navigate around the screen.
```
cy.get('body').type('{downArrow}');
cy.get('body').type('{rightArrow}');
cy.get('body').type('{enter}');
```

However you can also interact with DOM elements and access the underlying Lightning Component
```
cy.get('#BrowsePage').then(browsePage => {
  console.log(browsePage.element) // Is the Lightning Instance
  browsePage.element.reset();
  return browsePage;
})
```
You could also create custom Cypress commands to "Enter" on an element by calling its `_handleEnter`.


# Visual Regression Testing

If you're interested in VRT, check out [VRT with Cypress](https://github.com/Visual-Regression-Tracker/Visual-Regression-Tracker/wiki/Getting-started-with-Cypress)

# Find out more

If you want to learn more about testing a full app - we've open sourced an example Lightning Application complete with Cypress tests. Check out the code here: https://github.com/ComcastSamples/lightning-ui-tmdb
