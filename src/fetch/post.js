import 'whatwg-fetch'
import 'es6-promise'



// send post request
export function post(url, list) {
    var result = fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-ww  w-form-urlencoded'
        },
        body: JSON.stringify(list)
    });

    return result;
}