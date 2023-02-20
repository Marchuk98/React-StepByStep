import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test("reduce should be true", () => {
    //data
    const state: StateType = {
        collapsed: false
    }

    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expection
    expect(newState.collapsed).toBe(true);
})


test("reduce should be false", () => {
    //data
    const state: StateType = {
        collapsed: true
    }

    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expection
    expect(newState.collapsed).toBe(false);
})

test("reduce should throw error because action type is incorrect", () => {
    //data
    const state: StateType = {
        collapsed: true
    }

    //action
    expect( ()=> {
        reducer(state, {type: "FAKE"})
    }).toThrowError();

})