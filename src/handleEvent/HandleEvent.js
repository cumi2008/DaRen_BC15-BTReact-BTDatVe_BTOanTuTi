import React, { Component } from 'react'

export default class HandleEvent extends Component {
    handleClick = ()=> {
        alert('Hello')
    }
    handleClick1 = (name) =>{
        alert (`Hello! ${name}`)
    }
    showMessage = (mess) => {
        alert (mess)
    }

    render() {
        return (
            <div className="container">
                <div>Handle event</div>
                <button className="btn btn-outline-dark" onClick={this.handleClick}>Click me</button>
                <hr />
                <button className="btn btn-success" onClick={()=>{alert('Xin chào')}}>Show message</button>
                <hr />
                {/* <button className="btn btn-primary" onClick={this.handleClick1.bind(this,'abc')}> Click me</button> */}
                <button className="btn btn-primary" onClick={()=>{this.showMessage('Hello BC15')}}>Show mess</button>
                
            </div>
        )
    }
}
