import React from 'react';
import '../../css/index.css';

class History extends React.Component {

    render() {
        const listItems = this.props.history.map((user, index) =>
            <div key={index}>
                <div className={user.getColor()}/>
                {user.getUserName()}
                <div className='delete' onClick={this.props.onDelete.bind(this, index)}/>
            </div>
        );
        return (
            <div>
                <h2>History of users: </h2>
                <ul className='history'>{listItems}</ul>
            </div>
        );
    }
}

export default History;