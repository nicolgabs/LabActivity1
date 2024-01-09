import React from "react";
import ChildComponent from './ChildComponent'
class ParentComponent extends React.Component{
    render(){
    const passMessage = "Hello Parent ";
    return(
        <ChildComponent  message={passMessage}/>
    
    )
    }
}
export default ParentComponent