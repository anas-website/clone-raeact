import React, { Component } from 'react'
import cartIMG from '../images/cart.jpg'; // "../" is on level upper.
import Product from './Product';

export default class Cart extends Component {

    constructor(props) {
        super(props)

    }

    // when Cart component render - calculate total (add or remove product).
    calcTotal = () => {
        let sumPrice = 0;
        this.props.list.forEach((element) => { // run on list and calcuate sum of prices.
           sumPrice += Number(element.price); // casting to number with Number(argument)
        })
        return sumPrice;
    }

    render() {
        return (
            <div>
                <div id='cartContainer'>
                    <h2>Shoping Cart:
                    <img className='navItem' src={cartIMG} id='cartIcon' />
                    </h2>

                    {this.props.list.map((element, i) => {
                        // del={this.props.del} =>
                        // get del prop (sent from App) and send it to Product Component by props
                        return <Product name={element.name} price={element.price} index={i} del={this.props.del} />
                    })}

                    <div class='itemDiv'>
                        <h3 style={{ textAlign: 'center' }}>Total: {this.calcTotal()}</h3>
                    </div>
                    <br />
                    <button onClick={() => { this.props.buyAll()}} id='buyBTN'>Buy Products</button>
                </div>
            </div>
        )
    }
}
