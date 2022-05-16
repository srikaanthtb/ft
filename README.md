# requestMultipleUrls FT Tech test

A package that takes a list of URLs and returns their contents in a promise

# How to use

To use, call `requestMultipleURLs(arr)` , where arr is an array or URLs.

### Example usage

```
const requestMultipleUrls = require('requestMultipleUrls');
const urls = [
'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
];
requestMultipleUrls(urls).then(urlContent => {
...
});
```

It will return:

-An array of JSON objects of content returned from the URLs

-If any URL is invalid, it will return `One or more URLs failed to load with the following <error code and descrption>`.

-It will return and log `Please enter URLs in an array` if a valid array is not passed.

# Installation

To run use: `npm install` to install dependencies. Dependencies are node-fetch, and Jest for testing.

# Tests

Tests are run using Jest, run: `npm test`. Tests also show test coverage

# Dependencies

Only one, Node fetch. This package is used to fetch the HTTP/S URL's and then parse them into JSON.