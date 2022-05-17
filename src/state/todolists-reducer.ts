import {userReducer} from "./user-reducer";
import {TodolistType} from "../App";
import {colors} from "@material-ui/core";


type allACTypes = removeTodolistACType | addTodolistACType | changeTodolistTitleACType
export const todolistsReducer = (state: Array<TodolistType>, action: allACTypes) => {
    switch (action.type) {
        case "REMOVE-TODOLIST":
            return state.filter(t => t.id !== action.payload.id);
        case "ADD-TODOLIST":
            let newTodolist = {id: action.payload.id, title: action.payload.title, filter: "all"}
            return [...state, newTodolist];
        case "CHANGE-TODOLIST-TITLE":
            return state.map(t=>t.id===action.payload.id ? {...t, title: action.payload.title} : t)
        default:
            return state;
    }
}

type removeTodolistACType = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC = (id: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {id}
    } as const
}

type addTodolistACType = ReturnType<typeof addTodolistAC>
export const addTodolistAC = (id: string, title: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {id, title}
    } as const
}

type changeTodolistTitleACType = ReturnType<typeof changeTodolistTitleAC>
export const changeTodolistTitleAC = (id: string, title: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        payload: {id, title}
    } as const
}


