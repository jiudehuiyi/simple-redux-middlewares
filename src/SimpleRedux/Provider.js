import React, { Component } from 'react';
import Context from "./Context";
class Provider extends Component {
    render() {
        const { store } = this.props;
        return (
            <div>
                <Context.Provider value={ store }>
                    {
                        this.props.children
                    }
                </Context.Provider>
            </div>
        );
    }
}

export default Provider;


