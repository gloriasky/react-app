import React from 'react';
import '../css/index.css';

class History extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const listItems = this.props.history.map((user, index) =>
            <div key={index}>
                <div/>
                {user}
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