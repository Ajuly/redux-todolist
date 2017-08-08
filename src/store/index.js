import { createStore,combineReducers } from 'redux'
import { todos,filter } from './reducers'

// 把两个reducer合并成同一个reducer 
let reducer = combineReducers({
    todos,
    filter
})
// 相当于
// {
//     todos:[{id:1,title:"内容"}],
//     filter:'all'
// }
let store = createStore(reducer);


export default store;