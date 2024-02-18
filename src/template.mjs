// packages/ui-library/src/template.mjs
import { h } from 'snabbdom';

const createTemplate = (state, props) => {
  return h('div', [
    h('h1', `Count: ${state.count}`),
    h('button', { on: { click: props.updateState } }, 'Add'),
  ]);
};

export { createTemplate };
