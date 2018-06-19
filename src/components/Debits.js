import React, { Component } from 'react';
class Debits extends Component {
    render() {
        const debits = this.props.debitsState
        console.log(debits);
        return (
            <div>
                <h1>Balance: {this.props.balance}</h1>
                {debits.map((item, i) => {
                    return (
                        <div>
                            <p>description: {item.description}</p>
                            <p>amount: {item.amount}</p>
                            <p>date: {item.date}</p>
                            <br />
                        </div>
                    )
                })}
            </div>
        );
    }
}
export default Debits;