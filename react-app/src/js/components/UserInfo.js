import React from 'react';
import GetName from './GetName';
import ShowName from './ShowName';
import History from "./History";
import '../../css/index.css';
import User from "../classes/User";

class UserInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentUser: null,
            history: []
        };
    }
    onSubmit = (name) => {
        let user = new User();
        user.setUserName(name);
        this.setState({
            currentUser: user,
        });
        this.state.history.push(user);
    };
    onDelete = (index) => {
        this.setState({
            history: this.deleteUser(index)
        });
        console.log(index);
        console.log(this.state.history.length);
    };
    deleteUser = (index) => {
        let users = this.state.history;
        users.splice(index, 1);
        return users;
    };
    render() {
        return(
            <div className="center">
                <GetName onSubmit = {this.onSubmit}/>
                <ShowName currentUser={this.state.currentUser}/>
                <History history={this.state.history} onDelete={this.onDelete}/>
            </div>
        );
    }
}

export default UserInfo;