const fetch = require('node-fetch');

//Check returned promise is ok, otherwise throw error with status
function checkStatus(res) {
    if (res.ok) {
        return res;
    } else {
        throw new Error(`${res.status} ${res.statusText}`);
    };
};

async function requestMultipleUrls(arr) { 
    //accept only arrays by checking if type array or array exists
    if (typeof arr !== Array && !arr) {
        console.log(`Please enter URLs in an array`)
        return 
    } 

    //fetch each item in array and put into JSON
    const promises = arr.map(urlItem => 
        fetch(urlItem)
        .then(checkStatus)
        .then(response => response.json())
    );

    //return fetched content as a promise or return error if invalid URL
    try {
        return await Promise.all(promises);
    } catch (error) {
        return `One or more URLs failed to load with the following ${error}`;
    }
};
// exporting out as CommonJS instead of ES module because node-fetch3 has issues with ES modules
module.exports = requestMultipleUrls
