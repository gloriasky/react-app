import React from 'react';

class History extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const listItems = this.props.history.map((user, index) =>
            <li key={index}>
                {user}
            </li>
        );
        return (
            <div>
                <h2>History of users: </h2>
                <ul>{listItems}</ul>
            </div>
        );
    }
}

export default History;