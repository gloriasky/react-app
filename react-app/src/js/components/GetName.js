import React from 'react';
import '../../css/index.css';

class GetName extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: "",
        };

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    render() {
        return (
            <div className="center">
                <label>
                    Имя:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Отправить" onClick={this.props.onSubmit.bind(this, this.state.value)}/>
            </div>
        );
    }
}

export default GetName;