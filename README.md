# @thedrawingroom/eslint-config

[![npm version](https://badge.fury.io/js/%40thedrawingroom%2Feslint-config.svg)](https://badge.fury.io/js/%40thedrawingroom%2Feslint-config)
[![Build Status](https://travis-ci.org/thedrawingroom/eslint-config.svg?branch=master)](https://travis-ci.org/thedrawingroom/eslint-config)

This package extends the [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) ruleset with our own set of JS linting rules. The structure is based on that package and also [@justeat/eslint-config/fozzie](https://github.com/justeat/eslint-config-fozzie).

Many thanks to the work that the Airbnb team have put in on creating their template for extension rules – we have liberally borrowed from their structure and documentation in creating this ruleset.

## Usage

### @thedrawingroom/eslint-config

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint`, `eslint-plugin-import` and `eslint-plugin-vue`.

1. Install the correct versions of each package, which are listed by the command:

```sh
npm info "@thedrawingroom/eslint-config@latest" peerDependencies
```

Linux/OSX users can simply run

```sh
(
  export PKG=@thedrawingroom/eslint-config;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

Which produces and runs a command like:

```sh
  npm install --save-dev @thedrawingroom/eslint-config eslint@^#.#.# eslint-plugin-import@^#.#.#
```

Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

```sh
npm install -g install-peerdeps
install-peerdeps --dev @thedrawingroom/eslint-config
```

The cli will produce and run a command like:

```sh
npm install --save-dev @thedrawingroom/eslint-config eslint@^#.#.# eslint-plugin-import@^#.#.#
```

2. Add `"extends": "@thedrawingroom/eslint-config"` to your .eslintrc

## Testing

You can run tests on this ruleset with `npm test`.

You can make sure this module lints with itself using `npm run lint`.
