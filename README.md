# Hops&Barley App
It’s an app that helps users find breweries based on their search input, check some additional info for each individual brewery, see its location on map (optional) and add the desired breweries to favorites.

## Repository

Clone the public repository from here:

```
https://github.com/dannyd2222/hops-and-barley.git
```

## What's included

The cloned project will look like this:

```
hops-and-barley
├── index.css
├── index.html
├── mocks
│   └── fileMock.js
├── package.json
├── package-lock.json
├── public
│   └── images
│       ├── brewery_placeholder.png
│       ├── hb_brand.png
│       └── hb_logo.png
├── README.md
├── setupJest.js
├── src
│   ├── App.js
│   ├── BodyComponent
│   │   ├── Breweries.js
│   │   ├── Brewery.js
│   │   ├── Showbrewery.js
│   │   └── __tests__
│   │       └── Breweries.test.js
│   ├── Error.js
│   ├── HeaderComponent
│   │   └── Header.js
│   ├── Hooks
│   │   ├── useFilterBreweries.js
│   │   ├── useFilterCity.js
│   │   ├── useShowAllBreweries.js
│   │   └── useShowBrewery.js
│   └── Utils
│       ├── Config.js
│       ├── modeSetters.js
│       ├── Shimmer.css
│       └── Shimmer.js
└── tailwind.config.js
```

## Getting Started

### Prerequisites

* [NodeJS v.18.x.x](https://nodejs.org/download/) or higher
* *NPM v.9.4.2* or higher (it comes along with NodeJS)

## Development

This project has been developed with the [React.js](https://reactjs.org/) framework

### Running the tests
In order to run test developed via Jest type the following commands:

```
$ cd path/to/project/
$ npm test
```

### Running Dev Server:
In order to start the development server run the following commands:

```
$ cd path/to/project/
$ npm start
```

If the process exits with no errors, you should be able to access the dashboar at: https://localhost:1234/

## Author

* **Daniele Dalle Nogare** - *Full Stack Developer* - [Linkedin page](https://www.linkedin.com/in/daniele-dalle-nogare-0a193338)
