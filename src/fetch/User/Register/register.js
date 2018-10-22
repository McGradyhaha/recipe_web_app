import {post} from '../post.js'

export function postRegister(list){
    const result = post('/register', list)
    return result
}