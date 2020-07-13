import React, { Component } from 'react'

export default class HomePage extends Component {

    constructor(props) { // with constractor rcc can get props
        super(props)

        this.state = {
            p1Name: '',
            p1Price: '',
            p2Name: '',
            p2Price: '',
            p3Name: '',
            p3Price: ''
        }
    }

    // set state variables from chosen inputs (on change).
    // e.target.id  =>  get the id of input element.  
    setDataFromInputs = (e) => {
        if (e.target.id == 'P1Name') this.setState({ p1Name: e.target.value })
        else if (e.target.id == 'P1Price') this.setState({ p1Price: e.target.value })
        else if (e.target.id == 'P2Name') this.setState({ p2Name: e.target.value })
        else if (e.target.id == 'P2Price') this.setState({ p2Price: e.target.value })
        else if (e.target.id == 'P3Name') this.setState({ p3Name: e.target.value })
        else this.setState({ p3Price: e.target.value })
    }

    render() {
        return (
            <div id='container'>
                <h2>List of products:</h2>
                <div class='itemDiv'>
                    <h3 id='h3'>Product 1:
                        <input id='P1Name' onChange={this.setDataFromInputs} maxLength='8' type='text' placeholder='Name' />
                        <input id='P1Price' onChange={this.setDataFromInputs} type='number' placeholder='Price' />
                        {/* when click on "+" get function from props and send it product1 data */}
                        <button onClick={() => this.props.pData(this.state.p1Name, this.state.p1Price)} className='add'>+</button>
                    </h3>
                </div>
                <div class='itemDiv'>
                    <h3 id='h3'>Product 2:
                        <input id='P2Name' onChange={this.setDataFromInputs} maxLength='8' type='text' placeholder='Name' />
                        <input id='P2Price' onChange={this.setDataFromInputs} type='number' placeholder='Price' />
                        {/* when click on "+" get function from props and send it product2 data */}
                        <button onClick={() => this.props.pData(this.state.p2Name, this.state.p2Price)} className='add'>+</button>
                    </h3>
                </div>
                <div class='itemDiv'>
                    <h3 id='h3'>Product 3:
                        <input id='P3Name' onChange={this.setDataFromInputs} maxLength='8' type='text' placeholder='Name' />
                        <input id='P3Price' onChange={this.setDataFromInputs} type='number' placeholder='Price' />
                        {/* when click on "+" get function from props and send it product3 data */}
                        <button onClick={() => this.props.pData(this.state.p3Name, this.state.p3Price)} className='add'>+</button>
                    </h3>
                </div>
            </div>
        )
    }
}
