import React, { Component } from 'react';
class Credits extends Component {
    render() {
        const credits = this.props.creditsState
        return (
            <div>
                                <h1>Balance: {this.props.balance}</h1>
                {credits.map((item, i) => {
                    return (
                        <div>
                                <p>description: {item.description}</p>
                                <p>amount: {item.amount}</p>
                                <p>date: {item.date}</p>
                                <br/>
                        </div>
                    )
                })}
            </div>
        );
    }
}
export default Credits;
