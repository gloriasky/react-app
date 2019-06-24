import React from 'react';
import ReactDOM from 'react-dom';
import UserInfo from './js/components/UserInfo';

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