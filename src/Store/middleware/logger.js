export default store => next => action => {
  console.group(action.type);
  console.log(`the action is: ${action}`)
  const returnedValue = next(action);
  console.log(`new state is: ${store.getState}`);
  console.groupEnd();
  return returnedValue;
};