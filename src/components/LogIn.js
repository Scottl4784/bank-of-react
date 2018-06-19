import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class LogIn extends Component {
    state = {
        user: {
            userName: '',
        },
    }

    handleChange = (event) => {
        const user = {...this.state.user}
        const name = event.target.name
        const value = event.target.value
        
        user[name] = value

        this.setState({user})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('inside redirect')
        this.props.updateUserInformation(this.state.user)
        this.props.history.push('/')
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="userName">User Name</label>
                        <input type="text" name="userName" onChange={this.handleChange} value={this.state.user.userName} />
                    </div>
                    <button>Log In</button>
                </form>
            </div>
        );
    }
}

export default LogIn;