import React, { Component } from 'react';
import store from '../app/store';
import Context from "./context";

//第一种实现，在组件内已经向mapState|DispatchToProps函数中进行注入state，dispatch，ownProps
const connect = (
    mapStateToProps =()=>({}||function(){}),
    mapDispatchToProps = ()=>({})
)=> Component =>{
    class Connected extends React.Component{

        onStoreOrPropsChange=(props)=>{
            const { store } = this.props;
            const state = store.getState();
            const dispatch = store.dispatch;
            const stateProps = mapStateToProps(state,props);
            const dispatchProps = mapDispatchToProps(state,dispatch);
            this.setState({
                ...stateProps,
                ...dispatchProps
            })
        }


        static contextType = Context;

        componentDidMount(){
            const { store } = this.context;
            this.onStoreOrPropsChange(this.props);
            this.unsubscribe = store.subscribe( ()=>onStoreOrPropsChange(ths.props) );
        }

        componentWillUnmount(){
            this.unsubscribe();
        }

        render(){
            <Component  { ...this.props } { ...this.state } />
        }
    }

    return Connected;
}
export default connect;



//第二种实现,这种看起来更简单,但是组件中的store并没有注入，需要通过React提供的Provider来进行获取
const connect = (mapStateToProps,mapDispatchToProps)=>WrapperComponent => {
    return class extends React.Component{


        componentDidMount(){
            //监听store变化，执行的函数
            this.unsubscribe = store.subscribe( ()=>this.onStoreChange() );
        }
        onStoreChange=()=>{
            // 当store变化的时候，执行重新渲染
            this.forceUpdate();
        }

        render(){
            return <WrapperComponent 
                    {...this.props}
                    {...mapStateToProps(store.getState(),this.props)}
                    {...mapDispatchToProps(store.dispatch,this.props)}
            />
        }

    }
}


