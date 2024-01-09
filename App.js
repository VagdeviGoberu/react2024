import React, { Component } from 'react';

export default class App extends Component {
    constructor(){
        super()
        this.state = {
            count:0
        }
    }
    increment = () => {
        console.log('increment')
        this.setState({count:this.state.count+1})
    }
    decrement = () => {
        console.log('decrement')
        this.setState({count:this.state.count-1})
    }
    render() {
        return (
            <>
            <h1>count:{this.state.count}</h1>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
            
            </>
        )
    }
} 






