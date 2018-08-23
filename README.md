# Parks in Warsaw

Parks in Warsaw is a React app that allows to browse best parks in the city. Uses Google Maps and Foursquare.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. All commands should be executed in the project root directory.

### Prerequisites

Make sure you have latest versions of Node and npm installed

```
npm -v
node -v
```

### Installing

Cd into the project root directory.

Install dependencies

```
npm install
```

Install a simple http server

```
npm install -g serve
```

### Running the app locally

Follow these steps to deploy and serve the app locally

Execute build scripts

```
npm run build
```

Serve the app

```
serve -s build
```

On success you should see the URL to navigate to.

### Running the development server

To start a local development server with live update, run

```
npm start
```

On success you should see the URL to navigate to.

Note that the service worker is disabled in development mode.

## Built With

* [React](https://reactjs.org/) - The JS framework used
* This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
* [npm](https://www.npmjs.com/) - Node.js Dependency Management
* [react-google-maps](https://github.com/tomchentw/react-google-maps) - React.js Google Maps integration component library
* [react-responsive](https://github.com/contra/react-responsive) - Media queries in react for responsive design
* [recompose](https://github.com/acdlite/recompose) - Used for ease HOC handling

## Authors

* **Klemens Starybrat** - *Initial work*

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [SVG navicon](https://simplesvg.com/icon-sets/fa/navicon.html) by Dave Gandy
* [SVG close icon](https://simplesvg.com/icon-sets/ion/md-close.html) by Ben Sperry, Copyright (c) 2015-present Ionic (http://ionic.io/)
* Ajax loader icon from [loading.io](https://loading.io/)
