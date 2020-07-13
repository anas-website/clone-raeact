import React, { Component } from 'react'

export default class Product extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class='itemDiv'>
                <div class='Columns'><h3 >Name: {this.props.name}</h3></div>
                <div class='Columns'><h3 >Price: {this.props.price}</h3></div>
                {/* call function with "del" prop and send it index from props to deletion */}
                <button onClick={() => { this.props.del(this.props.index) }} id='deletBTN'>X</button>
            </div>
        )
    }
}





