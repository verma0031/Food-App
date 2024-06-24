import {Component } from "react";

class UserClass extends Component{

    constructor(props){
        super(props);

        console.log(this.props);

        console.log("COnstructor called");
    }

    componentDidMount(){
        console.log("component did mount");
    }

    componentDidUpdate(){
        console.log("component did update");
    }


    render(){
        return (
            <div>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

export default UserClass;