import { createStore, applyMiddleware, compose } from "redux";
import RootReducers from "../Reducer/RootReducer";
import thunk from "redux-thunk";

const middleware = compose(
    applyMiddleware(thunk)
  );
  
const storeRedux = createStore(RootReducers, middleware);

export default storeRedux;
