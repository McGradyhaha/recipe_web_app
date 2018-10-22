import {post} from '../../post.js'

export function postRegister(list){
    const result = post('/users', list)
    return result
}

