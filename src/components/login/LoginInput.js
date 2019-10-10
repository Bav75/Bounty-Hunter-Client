import React, { Component } from 'react';

export default class LoginInput extends Component {

    state = {
        username: '',
        password: '',
        form: ''
    };

    handleOnChange = ({ target }) => {
        let {name, value} = target;
        this.setState({
            [name]: value
        });
    };

    handleOnSubmit = (event) => {
        event.preventDefault();
        const user = {username:this.state.username, password:this.state.password};
        const sessionLogin = this.props.sessionLogin;
        switch (event.target.name) {
            case 'Login':
                this.props.loginUser(user, sessionLogin)
                break;
            case 'Create':
                this.props.createUser(user, sessionLogin);
                break;
        };
    };

    render() {
        switch (this.state.form) {
            case 'LOGIN':
                return (
                    <div>
                        <form onSubmit={this.handleOnSubmit} name="Login">
                        Username:<input type="text" value={this.state.username} name="username" onChange={this.handleOnChange}/>
                        <br/>
                        Password:<input type="password" value={this.state.password} name="password" onChange={this.handleOnChange}/>
                        <br/>
                        <input type="submit" value="Login" className="button-styling"/></form>
                    </div>
                );
            case 'CREATE':
                return (
                    <div>
                        <form onSubmit={this.handleOnSubmit} name="Create">
                        Username:<input type="text" value={this.state.username} name="username" onChange={this.handleOnChange}/>
                        <br/>
                        Password:<input type="password" value={this.state.password} name="password" onChange={this.handleOnChange}/>
                        <br/>
                        <input type="submit" value="Create Account" className="button-styling"/></form>
                    </div>
                );
            default: 
                return (
                    <div>
                        <button onClick={() => {this.setState({form: 'LOGIN'})}} className="button-styling">Login</button>
                        <button onClick={() => {this.setState({form: 'CREATE'})}} className="button-styling">Create New Account</button>
                    </div>
                );
        };
    };
};

        // return (
        //     <div>
        //         {/* Testing from LoginInput!
        //         <form onSubmit={this.handleOnSubmit}>
        //             Username:<input type="text" value={this.state.username} name="username" onChange={this.handleOnChange}/>
        //             <br/>
        //             Password:<input type="password" value={this.state.password} name="password" onChange={this.handleOnChange}/>
        //             <br/>
        //             <input type="submit" value="Login" name="Login"/>
        //             <input type="submit" value="Create New Account" name="Create"/>
        //         </form> */}
        //         <button onClick={}>Login</button>
        //         <button>Create New Account</button>
        //     </div>
        // )