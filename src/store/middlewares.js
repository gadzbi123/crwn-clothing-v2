const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) return;

  console.log("type:", action.type);
  console.log("payload:", action.payload);
  console.log("curr state:", store.getState());

  next(action);
  console.log("next state:", store.getState());
};
