import React from 'react';

class ShowName extends React.Component{

    getName(){
        if(this.props.username){
            return this.props.username;
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