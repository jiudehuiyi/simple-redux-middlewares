
//延迟action中间件
/**
 *
 *
 * @param {*} store
 */
const delayMiddleware = store => next => action => {
    setTimeout( ()=>{
      let result = next(action);
      console.log( result )
    } ,2000);
  }

  export default delayMiddleware;