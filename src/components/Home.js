import React, { Component } from 'react'
import AccountBalance from './AccountBalance'
import { Link } from 'react-router-dom'
class Home extends Component {
    render() {
        return (
            <div>
                <img width="200" src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank" />
                <h1>Bank of React</h1>
                <AccountBalance
                    balance={this.props.balance} />
                <Link to='/userProfile'>User Profile</Link>
                <br />
                <Link to='/debits'>Debits</Link>
                <br />
                <Link to='/credits'>Credits</Link>
                
            </div>
        )
    }
}
export default Home;