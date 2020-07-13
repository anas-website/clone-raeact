import React, { Component } from 'react';
import './Style.css';
import Cart from './Components/Cart.js';
import HomePage from './Components/HomePage.js';
import cartIMG from './images/cart.jpg';
import homeIMG from './images/home.jpg';

// SV shop solution.
// used in class components (no Hooks).

// moduls covered: 
// props (include send functions), class component, state, constractor

export default class App extends Component {

  state = {
    flag: false, // if false - Home page appears
    list: []
  }

  isCartShow = () => { // always show
    if (this.state.flag == true) { // if true - show Cart component.
      return (
        <div>
          {/* send variables by props:
          list (from state), del and buyAll (funcs value) by props */}
          <Cart list={this.state.list} del={this.deleteProduct} buyAll={this.buyAllProducts} />
        </div>
      )
    }
    else { // if false - show Hompage component.
      return (
        <div>
          {/* send list (from state) and pData (addProducts func) by props */}
          <HomePage list={this.state.list} pData={this.addProduct} />
        </div>
      )
    }
  }

  // set list with one morw product, this func send to HomePage component.
  addProduct = (n, p) => {
    if (n.length > 0 && (p > 0 && p.length <= 8)) {
      // set products list with one more product.
      this.setState({ list: [...this.state.list, { name: n, price: p }] })
    }
    else alert('name at least one char and price between 1 to 99999999')
  }

  // set list without chosen product, this func sends to Product component.
  deleteProduct = () => {
    let tempList = this.state.list.filter((element, index) => (index != 0))
    this.setState({ list: tempList })
  }

  // set list to empty list, this func sends to Cart component. 
  buyAllProducts = () => {
    if (this.state.list.length == 0)
      alert('No products to purchase');
    else {
      alert('you bought all products !!');
      this.setState({ list: [] }) // update list to empty list.
    }
  }

  render() {
    return (
      <div>
        <br />
        <div id='navBar'>
          <img className='navItem' src={homeIMG} id='homeIMG' onClick={() => { this.setState({ flag: false }) }} />
          <h1 className='navItem'>SV Shopping</h1>
          <img className='navItem' src={cartIMG} id='cartIMG' onClick={() => { this.setState({ flag: true }) }} />
          <p className='navItem' id='productsNum'>{this.state.list.length}</p>
        </div>
        <br /><br />
        {/* always show this funcion (according to the flag) */}
        {this.isCartShow()}
      </div>
    )
  }
}
