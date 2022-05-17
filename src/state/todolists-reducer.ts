import {userReducer} from "./user-reducer";
import {FilterValuesType, TodolistType} from "../App";
import {colors} from "@material-ui/core";


type allACTypes = removeTodolistACType | addTodolistACType | changeTodolistTitleACType | changeFilterACType
export const todolistsReducer = (state: Array<TodolistType>, action: allACTypes) => {
    switch (action.type) {
        case "REMOVE-TODOLIST":
            return state.filter(t => t.id !== action.payload.id);
        case "ADD-TODOLIST":
            let newTodolist = {id: action.payload.id, title: action.payload.title, filter: "all"}
            return [...state, newTodolist];
        case "CHANGE-TODOLIST-TITLE":
            return state.map(t=>t.id===action.payload.id ? {...t, title: action.payload.title} : t);
        case "CHANGE-TODOLIST-FILTER":
            return state.map(t=>t.id===action.payload.id ? {...t, filter: action.payload.filter} : t)
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

type changeFilterACType = ReturnType<typeof changeFilterAC>
export const changeFilterAC = (id: string, filter: FilterValuesType) => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        payload: {id, filter}
    } as const
}


