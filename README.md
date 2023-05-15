# Box RDV

## Demo
https://oksanapopovichenko.github.io/Box-RDV/

## Getting started

Start the application
```
npm install
npm run start
```

## Tools

- [React](https://reactjs.org) - a JavaScript library for building user interfaces
- [Typescript](https://www.typescriptlang.org) - JavaScript with types
- [Tailwind](https://tailwindcss.com/) - a CSS framework
- [Jotai](https://jotai.org) - a global states management
- [Jest](https://jestjs.io) - Javascript Tests Framework
- [Font Awesome](https://fontawesome.com) - for icons
- [React Router](https://reactrouter.com) - for routing between pages
- [Eslint](https://eslint.org) - to find and fix problems in the prroject
- [Eslint Airbnb Javascript Style Guide](https://github.com/airbnb/javascript) - a set of rules and guidelines
- [Gitmoji](https://gitmoji.dev/) - a great look at commits

## Design System

I used the Atomic Design Methodology to create the components for the design system.
https://atomicdesign.bradfrost.com/chapter-2/

Therefore, the components are divided into:
1. atoms (Button, Checkbox, Input, Switch, Tab)
2. molecules (ButtonGroup, Card) 
3. organisms (Client, Date, Service, Tabbar)

## State management

I used Jotai (similar to Redux), a lightweight and flexible state management library, as it is easier to manipulate data.

As an example, I created a global state for the client and showed how to update it.

## Recommendation for your DS
In your design system Input has so many possible states and this makes the code in the Input file more complex. 
For example, I would create separate components for Phone Input and Input with button, as these are already components that consist of 2-3 separate components.

## Notes

1. How the state of the Tabbar changes was not clear in Figma, so I implemented different options, but I always display only one by default.

2. I didn't have time to implement Dropdown and Phone Input components.