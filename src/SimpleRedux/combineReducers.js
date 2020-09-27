//combineReducers的简单实现(主要逻辑，省略了一些判断，错误等相关逻辑)

//combineReducers({...reducers})reducers传入的是一个对象,
const combineReducers = (reducers)=>{
    const reducerKeys = Object.keys( reducers );//获取reducers的key值
    return function(state={},action){
        let newState;
        for( let i=0;i<reducerKeys.length;i++ ) {
           let nextState = reducers[reducerKeys[i]]( state[reducerKeys[i]],action );
           nextState[reducerKeys[i]] = newState;
        }
        return newState;
    }
}

