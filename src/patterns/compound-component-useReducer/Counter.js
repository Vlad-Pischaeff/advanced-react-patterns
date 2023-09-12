import React, { useEffect, useReducer } from "react";
import styled from "styled-components";
import { CounterProvider } from "./useCounterContext";
import { Count, Label, Decrement, Increment } from "./components";

function countReducer(state, action) {
    switch (action.type) {
        case 'increment': {
            return {count: state.count + 1}
        }
        case 'decrement': {
            return {count: state.count - 1}
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

function Counter({ children, onChange, initialValue = 0 }) {
    const [ state, dispatch ] = useReducer(countReducer, {count: initialValue})

    useEffect(() => {
        onChange && onChange(state.count);
    }, [ state.count, onChange ]);

    return (
        <CounterProvider value={{ count: state.count }} action={ dispatch }>
            <StyledCounter>{children}</StyledCounter>
        </CounterProvider>
    );
}

const StyledCounter = styled.div`
    display: inline-flex;
    border: 1px solid #ccc;
    padding: 4px;
    line-height: 2;
    border-radius: 0.25rem;
    overflow: hidden;
`;

Counter.Count = Count;
Counter.Label = Label;
Counter.Increment = Increment;
Counter.Decrement = Decrement;

export { Counter };
