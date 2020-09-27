
/**
 *
 *
 * @param { Array } middlewares
 */
const applyMiddleware = (...middlewares)=>(store)=>{
    if( middlewares.length === 0 ) {
        return dispatch => dispatch;
    }
    if( middlewares.length === 1 ) {
        return middlewares[0](store);//这里只需执行一个中间件就可以了，不用将action向下传递
    }
    //为每个middleware添加store
    const boundMiddlewares = middlewares.map( (middleware)=>{
        return middleware(store);
    } );
    //为每个action添加next参数,并向下执行传递action
    boundMiddlewares.reduce( (a,b)=>{
        return next => a(b(next));
    } );

}