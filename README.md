# Microfrontends w/ Webpack's Code Splitting, React, and TypeScript

The project consists of the `microfrontend` and the `shell` folder. These folders can theoretically be located in different repositories or in a monorepository. The only important thing is that the artifacts of the monorepository are made available to the shell. For simplicity, yarn workspaces are used for this purpose in this example.

## Get Started

To get started, run `yarn install` and subsequently `yarn start`. This will start Webpack's dev server for the shell and transpile the microfrontend in watch mode.

## Standalone Microfrontend

If you don't want to open the microfrontend via the shell (might be beneficial for developing the microfrontend), you can also run it standalone. Just run `yarn start:standalone` in the `microfrontends` folder. This will start a Webpack dev server for the microfrontend.
