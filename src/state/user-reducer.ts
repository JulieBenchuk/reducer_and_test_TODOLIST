type StateType = {
    age: number
    childrenCount: number
    name: string
}
type ActionType = {
    type: string
    name?: string
}
export const userReducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case "INCREMENT-AGE": {
            return {
                ...state, age: state.age + 1
            }
        }
        case "INCREMENT-CHILDREN": {
            const copyState = {...state}
            copyState.childrenCount = copyState.childrenCount + 1
            return copyState;
        }
        case "CHANGE-NAME": {
            let newName = action.name
            return {
                ...state, name: newName
            }
        }
        default:
            throw new Error("I DON'T KNOW THIS ACTION TYPE :(((( ")
    }
}