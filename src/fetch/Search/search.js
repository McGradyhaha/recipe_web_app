import {get} from '../get.js'

export function getSearchResult(ingredient){
    const result = get('/recipes?ingredients='+ ingredient)
    return result
}

export function getDetails(recipe_id){
    const result = get('/recipes/'+ recipe_id)
    return result
}


export function getCategory(category){
    const result = get('/categories?category='+ category +'&page_size=80&page_number=1')
    return result
}