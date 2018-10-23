import {get} from "../get.js";
import {post} from '../post.js'

export function getFavourite(){
    const result = get('/favourites')
    return result
}

export function postFavourite(list){
    const result = post('/favourites', list)
    return result
}