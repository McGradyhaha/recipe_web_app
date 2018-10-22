import {post} from '../../post.js'

export function postLogin(list){
    const result = post('/login', list)
    return result
}