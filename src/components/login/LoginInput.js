import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

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
                // console.log("This should show after loginUser")
                // this.props.logIn();
                // this.setState({
                //     loggedIn: true
                // });
                break;
            case 'Create':
                this.props.createUser(user);
                // this.props.logIn();
                // this.setState({
                //     loggedIn: true
                // });
                break;
        };
    };

    

    render() {
        // {this.renderRedirect()}
        switch (this.state.form) {
            case 'LOGIN':
                return (
                    <div>
                        {/* {this.renderRedirect()} */}
                        <form onSubmit={this.handleOnSubmit} name="Login">
                        Username:<input type="text" value={this.state.username} name="username" onChange={this.handleOnChange}/>
                        <br/>
                        Password:<input type="password" value={this.state.password} name="password" onChange={this.handleOnChange}/>
                        <br/>
                        <input type="submit" value="Login" /></form>
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
                        <input type="submit" value="Create Account" /></form>
                    </div>
                );
            default: 
                return (
                    <div>
                        <button onClick={() => {this.setState({form: 'LOGIN'})}}>Login</button>
                        <button onClick={() => {this.setState({form: 'CREATE'})}}>Create New Account</button>
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