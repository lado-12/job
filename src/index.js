// packages/web-app/src/index.js
const initApp = async () => {
    const { createTemplate } = await import('./template.mjs');
    const { updateState } = await import('./reactivity.js');
    const { mountComponent, updateComponent } = await import('./lifecycle.js');
    const{ snabbdom}  = require('snabbdom');
    const attributes = require('snabbdom/modules/attributes');
    const eventlisteners = require('snabbdom/modules/eventlisteners');
  
    const patch = snabbdom.init([attributes, eventlisteners]);
  
    const container = document.getElementById('app');
  
    const state = { count: 0 };
  
    const render = () => {
      const vnode = createTemplate(state, {
        updateState: (newState) => {
          updateState(state.count, (value) => (state.count = value), {
            onStateChange: (newState) => {
              console.log('State changed:', newState);
              updateComponent(() => console.log('Component updated'));
            },
          });
        },
      });
      patch(container, vnode);
    };
  
    mountComponent(() => console.log('Component mounted'));
  
    render();
  };
  
  initApp();
  