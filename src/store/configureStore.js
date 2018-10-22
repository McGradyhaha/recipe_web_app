import {createStore} from 'redux'
import rootReducer from '../reducers/combine'

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState)
    return store
}