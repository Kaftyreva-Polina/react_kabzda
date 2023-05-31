import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test("collapsed should be true", ()=> {
    //data
    const startState: StateType = {
        collapsed: false
    }
    //action
    const endState = reducer(startState, {type: TOGGLE_COLLAPSED})
    //expectation
    expect(endState.collapsed).toBe(true);
    expect(startState).not.toBe(endState);
})

test("collapsed should be false", () => {
    const startState: StateType = {
        collapsed: true
    }

    const endState = reducer(startState, {type: TOGGLE_COLLAPSED})

    expect(endState.collapsed).toBe(false)
})

test("reducer should throw error because action type is incorrect", () => {
    const startState: StateType = {
        collapsed: true
    }

    expect(() => {reducer(startState, {type: "FAKETYPE"})}).toThrowError();
})