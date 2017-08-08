// todo的reducer 
import * as Types from '../action-types';
let list = localStorage.getItem('todos')?JSON.parse(localStorage.getItem('todos')):[];
let initState = {editing: '', list}

// 增加 删除 切换完成状态
export default function (state = initState, action) {
    switch (action.type) {
        case Types.ADD_TODO:
            let list = [...state.list, {id: Date.now(), title: action.title, completed: false}];
            localStorage.setItem('todos',JSON.stringify(list));
            return {
                ...state,
                list
            };
        case Types.DEL_TODO:
            list = state.list.filter(item => item.id !== action.id)
            localStorage.setItem('todos',JSON.stringify(list));
            return {
                ...state,
                list
            };
        case Types.TOGGLE_TODO:
            list = state.list.map(item =>{
                        if(item.id === action.id){
                            item.completed = !item.completed;
                        }
                        return item;
                    })
            localStorage.setItem('todos',JSON.stringify(list));
            return {
                    ...state,
                    list
                };
        case Types.DELETE_ALL_COMPLETED:
            list = state.list.filter(item => !item.completed);
            localStorage.setItem('todos',JSON.stringify(list));
            return {
                ...state,
                list
            };
        case Types.TOGGLE_All:
            list = state.list.map(item =>{
                    item.completed = action.checked;
                    return item;
                })
            localStorage.setItem('todos',JSON.stringify(list));
            return {
                ...state,
                list
            };
        case Types.CHANGE_EDITING:
            return {
                ...state,
                editing:action.id
            };
        case Types.UPDATE_TODO:
            list = state.list.map(item =>{
                    if(item.id === action.id){
                        item.title = action.title;
                    }
                    return item;
                })
            localStorage.setItem('todos',JSON.stringify(list));
            return {
                ...state,
                list
            };
        default:
            return state;
    }

}