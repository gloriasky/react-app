import React from 'react';
import ReactDOM from 'react-dom';
import UserInfo from './js/UserInfo';

class App extends React.Component{
    render() {
        return (
            <div>
                <UserInfo />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);