//打印日志中间件
const loggerMiddleware = store => next => action =>{
    console.log( store )
    console.log( "before",store.getState() )
    let result = next(action);
    console.log( "after",store.getState() );
    return result;
}
export default loggerMiddleware;