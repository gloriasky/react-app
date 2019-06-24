import React from 'react';
import GetName from './GetName';
import ShowName from './ShowName';

class UserInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:""
        };
    }
    onSubmit = (name) => {
        this.setState({
            username: name
        });
    };
    render() {
        return(
            <div className="center">
                <GetName onSubmit = {this.onSubmit}/>
                <ShowName username={this.state.username}/>
            </div>
        );
    }
}

export default UserInfo;