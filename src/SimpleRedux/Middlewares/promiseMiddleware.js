//promise中间件，检测action是否存在payload字段为promise的，并执行promise返回相应的结果

const promiseMiddleware = store => next => action =>{
    //检测action 中payload字段是否为一个promise
    if( action.payload && typeof action.payload.then === "function" ) {
        action.payload.then(  
            res=> action.payload = res,
            err => action.payload = err
        );
    }
    next(action);//将action传给下一个中间件
}
