
/**
 *
 *
 * @param { object || function } action
 */
const validateAction=(action)=>{
    if( !action ) {
        throw new Error("action is required");
    }
    if( typeof action.type === "undefined" ) {
        throw new Error("action must have a type!");
    }
    if( typeof action !== "object" || Array.isArray(action) ) {
        throw new Error("action must be an object or function!");
    }
}


//创建createStore(简易第一版)
/**
 * @param {  objects  } reducers
 * @return { object } store
 */
const createStore = (reducers)=>{
    let state = undefined;
    return {
        getState:()=> state,
        dispatch:(action)=>{
            validateAction(action)
            state = reducers(state,action)
        }
    } 
}
//创建createStore(简易第二版)
/**
 *
 *
 * @param { objects } reducers
 * @return {  store }  store
 */
const createStore = (reducers)=>{
    let state = undefined;//全局状态
    let subscribers = [];//订阅列表

    const store = {
        getState:()=>state,
        dispatch:(action)=>{
            validateAction(action);
            state =  reducers(state,action);
        },
        //订阅监听的事件
        subscribe:(handler)=>{
            subscribers.push( handler );
            //返回一个注销订阅
            return ()=>{
                const index = subscribers.indexOf( handler );
                if( index > 0 ) {
                    subscribers.splice( index,1 );
                }
            }
        }
    };
    store.dispatch( { type:"@@redux/INIT" } );//redux action携带的一个状态
    return store;
}

//简易createStore第三版(有中间件参数)
const createStore = (reducer, middleware) => {
    let state;
    const subscribers = [];
    const coreDispatch = action => {
      validateAction(action);
      state = reducer(state, action);
      subscribers.forEach(handler => handler());
    };
    const getState = () => state;
    const store = {
      dispatch: coreDispatch,
      getState,
      subscribe: handler => {
        subscribers.push(handler);
        return () => {
          const index = subscribers.indexOf(handler)
          if (index > 0) {
            subscribers.splice(index, 1);
          }
        };
      }
    };
    if (middleware) {
      const dispatch = action => store.dispatch(action);
      store.dispatch = middleware({
        dispatch,
        getState
      })(coreDispatch);
    }
    coreDispatch({type: '@@redux/INIT'});
    return store;
  }