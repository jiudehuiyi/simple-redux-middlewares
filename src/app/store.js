import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import delayMiddleware from "../SimpleRedux/Middlewares/delayMiddleware";
import loggerMiddleware from "../SimpleRedux/Middlewares/loggerMiddleware";

import createSagaMiddleware from "redux-saga";
import rootSaga  from "./sagas";

const sagaMiddleware = createSagaMiddleware();



export default configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware:[ ...getDefaultMiddleware(),sagaMiddleware ]
});
sagaMiddleware.run(rootSaga );



// const thunk = store=>next=>action=>{

//   typeof action === "function"?
//   action(store.dispatch,store.getState())
//   :next(action)
// }




