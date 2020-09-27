import React, { Component } from 'react';
import { connect } from "react-redux";

class ReduxSagaTest extends Component {

    componentDidMount(){
        this.props.dispatch({
            type: 'LOGIN'
        })
    }
    onHandleClick=()=>{
        
        this.props.dispatch({
            type: 'LOGOUT'
        })

        this.props.dispatch({
            type:"takeEvery"
        })
       
    }

    render() {
        return (
            <div>
                <button onClick={ ()=>this.onHandleClick() }>发送一个action</button>
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return state;
}
export default connect(mapStateToProps)(ReduxSagaTest);