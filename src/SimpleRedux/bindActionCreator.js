
//bindActionCreator实现
//使用 bindActionCreator({func1,func},dispatch);
const bindActionCreator = (actionCreator,dispatch)=>{
    let funcCollections = Object.keys( actionCreator );
    //必须把每个actionCreator都执行一次
    return function(){
        let result = [];
        for( let [key,action] of funcCollections ) {
            result.push( action.apply(this,arguments) );
        }
        return result;
    }
}