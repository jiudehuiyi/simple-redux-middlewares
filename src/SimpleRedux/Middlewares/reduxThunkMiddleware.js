//redux-thunk中间件的实现,
//redux-thunk可以将redux同步数据流转变为异步数据流，因为当它遇到action是一个函数的时候就会执行action，传递一个原始的dispatch，开启一个新链，重新再次走过所有的中间件
//

const thunk = ({ getState,dispatch }) => next => action =>{

    if( typeof action === "function" ) {
        return action( dispatch,getState );//注意这里是开启一条新链(开启一个新的action，重新dispatch一个action，触发再一次所有的中间件，从而实现了异步数据流)，而不是将action传给下一个中间件
    }
    return next(action);
}
