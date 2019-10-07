import React, { Component } from 'react';

export default class LoginInput extends Component {

    state = {
        username: '',
        password: ''
    };

    handleOnChange = ({ target }) => {
        let {name, value} = target;
        this.setState({
            [name]: value
        });
    };

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        // reset state after entering 
        this.setState({
            username: '',
            password: ''
        });
    }


    render() {
        return (
            <div>
                Testing from LoginInput!
                <form onSubmit={this.handleOnSubmit}>
                    Username:<input type="text" value={this.state.username} name="username" onChange={this.handleOnChange}/>
                    <br/>
                    Password:<input type="password" value={this.state.password} name="password" onChange={this.handleOnChange}/>
                    <br/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        )
    }
}