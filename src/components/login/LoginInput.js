import React, { Component } from 'react';

export default class LoginInput extends Component {

    state = {
        username: '',
        password: ''
    };


    render() {
        return (
            <div>
                Testing from LoginInput!
                <form>
                    Username:<input type="text" value={this.state.username}/>
                    <br/>
                    <br/>
                    Password:<input type="text" value={this.state.password}/>
                </form>
            </div>
        )
    }
}