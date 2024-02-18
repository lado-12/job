// packages/ui-library/src/reactivity.js
export const updateState = (currentState, setState, props) => {
    const newState = currentState + 1;
    setState(newState);
    props.onStateChange(newState);
  };
  