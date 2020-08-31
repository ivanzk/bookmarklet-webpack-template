# Bookmarklet Webpack Template

Create bookmarklets using Webpack.

## Usage

### Installation

1. Clone the repo
2. Install dependencies: `npm install`

### Development (with dev-server)

`npm start`

Make a new bookmark in your browser and paste the code below into the "URL" field

```js
javascript: (function () {
  const script = document.createElement('script');
  script.src = 'http://127.0.0.1:3010/bookmarklet.js';
  document.body.appendChild(script);
})();
```

If you get the error "Refused to load the script '127.0.0.1:3010/bookmarklet.js' because it violates the following Content Security Policy directive..." you can use extension [Disable Content-Security-Policy](https://chrome.google.com/webstore/detail/disable-content-security/ieelmcmcagommplceebfedjlakkhpden) to temporarily disable Content-Security-Policy during development.

### Development (without dev-server)

`npm run dev`

Use the code from './build/bookmarklet.js'

### Production

`npm run build`

Use the code from './dist/my-bookmarklet-name.js'
