import React from 'react';
import '../../css/index.css';

class ShowName extends React.Component{

    getName(){
        if (this.props.currentUser) {
            return this.props.currentUser.getUserName();
        }
        return 'everybody'
    }

    render() {
        return (
            <div className="center">
                <h2> hello to {this.getName()}</h2>
            </div>
        );
    }
}

export default ShowName;