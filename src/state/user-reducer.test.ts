import {userReducer} from "./user-reducer";
test.skip("reducer should increment only age", ()=> {
    const startState = { age: 33, childrenCount: 0, name: "Kate"}
    const endState = userReducer (startState, {type: "INCREMENT-AGE"})

    expect(endState).toEqual({ age: 34, childrenCount: 0, name: "Kate"})
    expect(endState.age).toBe(34)
    expect(endState.childrenCount).toBe(0)
});

test ("name should be changed", ()=> {
    const startState = { age: 33, childrenCount: 0, name: "Kate"}
    const endState = userReducer (startState, {type: "CHANGE-NAME", name: "Jul"})

    expect(endState.name).toBe("Jul")
})




