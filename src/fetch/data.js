import { get } from './get.js'
import { post } from './post.js'

export function getData(url) {

    // '/api/2' 获取json
    var result1 = get(url)

    result1.then(res => {
        return res.json()
    }).then(json => {
        console.log(json)
    })
}

export function postData(url, json) {

    var result = post(url, {
        a: 100,
        b: 200
    })

    result.then(res => {
        return res.json()
    }).then(json => {
        console.log(json)
    })
}