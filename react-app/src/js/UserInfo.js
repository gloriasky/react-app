import React from 'react';
import GetName from './GetName';
import ShowName from './ShowName';
import History from "./History";
import '../css/index.css';

class UserInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            history: []
        };
    }
    onSubmit = (name) => {
        this.setState({
            username: name,
        });
        this.state.history.push(name);
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
                <ShowName username={this.state.username}/>
                <History history={this.state.history} onDelete={this.onDelete}/>
            </div>
        );
    }
}

export default UserInfo;