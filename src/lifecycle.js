// packages/ui-library/src/lifecycle.js
export const mountComponent = (mountCallback) => {
    // Execute the mountCallback when component is mounted
    mountCallback();
  };
  
  export const updateComponent = (updateCallback) => {
    // Execute the updateCallback when component is updated
    updateCallback();
  };
  