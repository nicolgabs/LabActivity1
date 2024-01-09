import React from "react";
// function ChildComponent(props){
//     return(
//         <div>
//             <p>{props.message}</p>
//         </div>
//     )

// }
// export default ChildComponent

class ChildComponent extends React.Component {
    render() {
      return <h1> {this.props.message} </h1>;
    }
  }
  
export default ChildComponent