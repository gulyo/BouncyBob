# Bouncy Bob
## Web technology based animation spike

This project has two main purposes:
1. To create a modern web-development environment with minimal
run-time dependencies
2. To find balance between abstraction level and coding speed

### Functionality

After selecting the desired World implementation, every mouse click will
create a new Item (ball) with random velocity. The balls will collide
with the walls of the World.

## Running the app

### Requirements
- node.js
- npm

### Install
Clone the repository, then run `npm install`

### DevServer
Run `npm run prod:start`, the app will be served at
[localhost:4500](http://localhost:4500)

### Serve a build
Run `npm run prod:build && npm run serveBuild`, the app will be
served at [localhost:8080](http://localhost:8080)

## Documentation & Comments

I use *.md* files to make the "mechanics" understandable. By default I name
them *README.md* and put them to the folder they cover - similarly to
the *index.ts* concept.

On the question of inline documentation / comments, I think there is a
risk in them becoming outdated and so, deceptive. So I try to keep
those on minimum, and only use them when a solution requires
reasoning, or would be hard to understand it simply by reading the code.
Also - though sometimes I find *Clean Code* rules too dogmatic - I
use short functions with few arguments, and human readable naming
conventions.

## Environment
### Transpiled / compiled code + coding style
- Typescript + tslint
- Sass + css-modules + stylelint
### Formatting
- Prettier
### Build tool
- WebPack
### Testing
- Jest
- TODO: CI, E2E testing

## Project structure:
### Continuum:
- [continuum](/src/continuum/README.md)
- [Space](/src/continuum/space/README.md)
- [Item](/src/continuum/item/README.md)
- [Dimension](/src/continuum/dimension/README.md)
- [Creator](/src/continuum/creator/README.md)
- [Absorption](/src/continuum/absorption/README.md)

### Visualization
- [visualization](/src/visualization/README.md)
- **World**: Renders a **Space**
- **Shape**: Renders an **Item**

### Configuration
Most of the classes are configurable, to make the application extendable
more easily.

## Galactus
**[Galactus](/src/galactus/README.md)**, the eater of **Worlds** is a wrapper that will
initialize the selected **World**
