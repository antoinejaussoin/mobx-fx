This app is a sandbox for trying Mobx

# The App

In a nutshell, this app does 3 things:
- Loads rates for 3 currencies (using a real (and free) endpoint)
- Allows you to pick 2 currencies and calculates the resulting rate
- Allows you to enter an amount for either of those currency and display the converted amount for the other currency

In terms of "modules", I've separated the "rates" part (the loading of the rates and selection of currencies) from the "converter" part, so I can have two modules trying to "cooperate" and see how that works.

So the "converter" store relies on the "rates" store to work.

# What I'm trying to solve

## Stores

- In a complex app (such as Venn) we have many (many, many) modules and a lot of derived state (the selectors in Redux, @computed in Mobx).
- It stand to reason that the new Venn won't be much simpler and will also require a lot of logic and a lot of state.
- Therefore, we'll need many MobX store if we want to avoid craming everything into a few 10,000-line stores.
- We also want store to be able to access other stores, but we want to avoid coupling.

So I tried a few ways to deal with that and came up with:

- Keep one `store.js` file in every module, a bit like we used to have a `state.js` and `selectors.js`.
- Any dependency (and that could be an api service, or another store) will get injected in the constructor
- For testing, you just import the store **class** like so: `import { UserStore } from './store'`, and pass mocks to its constructor (see tests)
- For the actual app, we import the **instance** of the store like so: `import store from './store'`. This instance is already instanciated with the proper dependencies. It's a form of Dependency Injection but arguably not a very nice one, we need to do better.

Problems:

- When testing a component, we can mock the store at the higher level (the store we directly inject in this component) by giving a mock to the `store` prop (I need to write an example), but if a sub-component (a child component) also injects a store we can't really control that, so not ideal. Idealy, I want to introduce a proper DI library such as (InversifyJS)[http://inversify.io/].

## React-create-app

Another thing I wanted to avoid was to `eject` from the react-create-app. There are a few tools that allows intercepting the config and modify the webpack config on the fly, which should in theory be flexible enough to both keep the react-create-app AND customise it.

That will allow us to update react-create-app as we go along, and hide the complexity behind it: it will continue to "just work" (in theory...).

You can find how it works on `./config-overrides.js` and the files in `./rewire`.

Note that I used postcss and cssnext here for fun, but we can easily use SCSS instead (as we will probably do).

## 