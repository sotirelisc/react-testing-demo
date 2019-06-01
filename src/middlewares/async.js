// Standard middleware boilerplate convention by Redux
export default ({ dispatch }) => next => action => {
  // Check to see if the action
  // has a Promise on its 'payload' property
  // If it does, then wait for it to resolve
  // If it doesn't, then send the action on to the
  // next middleware

  // action.payload.then checks for then function in Promise
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  // We want to wait for the Promise to resolve (get data)
  // Then create & dispatch a new action with it
  action.payload.then(response => {
    const newAction = {
      ...action,
      payload: response
    };

    dispatch(newAction);
  });
};

// Above function signature is the same as:

// export default ({ dispatch }) => {
//   return next => {
//     return action => {
      
//     };
//   };
// };