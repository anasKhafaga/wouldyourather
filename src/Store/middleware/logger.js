export default store => next => action => {
  console.group(action.type);
  console.log(action)
  const returnedValue = next(action);
  console.log(store.getState());
  console.groupEnd();
  return returnedValue;
};