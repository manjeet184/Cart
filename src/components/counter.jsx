import React, { Component } from 'react'

class Counter extends Component {

    render() {
        return (
            <div>
                <h6>Counter No {this.props.counter.id}</h6>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary  btn-sm">Increment</button>
                <button onClick={() => this.props.onDecerement(this.props.counter)} className="btn btn-primary  btn-sm m-2">decerement</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm m-2'>Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 my-3 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;