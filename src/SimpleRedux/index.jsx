import React, { Component } from 'react';

class SimpleRedux extends Component {
    render() {
        return (
            <div>
                SimpleRedux
                {/* <Child /> */}
            </div>
        );
    }
}

// class Child extends React.Component{

//     render(){
//         console.log( this.context );
//         return (
//             <div>
//                 <Child />
//             </div>
//         )
//     }
// }

export default  (SimpleRedux);