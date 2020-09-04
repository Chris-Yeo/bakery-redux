import React from 'react';
import { connect } from 'react-redux'

import { buyCroissant} from './actions/buyCroissantAction'
import { buyFruitTart } from './actions/buyFruitTartAction'
import { buyMuffin } from './actions/buyMuffinAction'
import { buyPie } from './actions/buyPieAction'
import { buyMacaroon } from './actions/buyMacaroonAction'
import { buyRainbow } from './actions/buyRainbowAction'
import { buyShortcake } from './actions/buyShortcakeAction'
import { buyFruitcake } from './actions/BuyFruitcakeAction'

import './App.css';
import croissantImg from './images/croissant.jpg'
import tartImg from './images/tart.jpg'
import pieImg from './images/pie.jpg'
import muffinImg from './images/muffin.jpg'
import fruitcakeImg from './images/fruitcake.jpg'
import macaroonImg from './images/macaroon.jpg'
import rainbowImg from './images/rainbow.jpg'
import shortcakeImg from './images/shortcake.jpg'
import logo from './images/logo.png'

const App = props => {
  console.log(props);
  return(
    <div className="App">
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="balance">
            <div>Balance: Rp. {(props.data.balance.balance).toLocaleString()}</div>
        </div>
    </div>
      <div className ="products">
        <div className="croissant" onClick={props.buyCroissant}>
          <img src={croissantImg} alt="croissant" className="foodImg"></img>
          <h3>Chocolate Croissant</h3>
          <p>Rp. 28.000</p>
          <p>Stock: {props.data.products.croissant.stock}</p>
        </div>
        <div className="muffin" onClick={props.buyMuffin}>
          <img src={muffinImg} alt="muffin" className="foodImg"></img>
          <h3>Blueberry Muffin</h3>
          <p>Rp. 25.000</p>
          <p>Stock: {props.data.products.muffin.stock}</p>
        </div>
        <div className="tart" onClick={props.buyFruitTart}>
          <img src={tartImg} className="foodImg" alt="tart"></img>
          <h3>Fruit Tart</h3>
          <p>Rp. 48.000</p>
          <p>Stock: {props.data.products.fruit_tart.stock}</p>
        </div>
        <div className="pie" onClick={props.buyPie}>
          <img src={pieImg} className="foodImg" alt="pie"></img>
          <h3>Apple Pie</h3>
          <p>Rp. 35.000</p>
          <p>Stock: {props.data.products.pie.stock}</p>
        </div>
        <div className="shortcake" onClick={props.buyShortcake}>
          <img src={shortcakeImg} className="foodImg" alt="shortcake"></img>
          <h3>Strawberry Shortcake</h3>
          <p>Rp. 50.000</p>
          <p>Stock: {props.data.products.shortcake.stock}</p>
        </div>
        <div className="macaroon" onClick={props.buyMacaroon}>
          <img src={macaroonImg} className="foodImg" alt="macaroon"></img>
          <h3>Macaroons</h3>
          <p>Rp. 20.000</p>
          <p>Stock: {props.data.products.macaroon.stock}</p>
        </div>
        <div className="fruitcake" onClick={props.buyFruitcake}>
          <img src={fruitcakeImg} className="foodImg" alt="fruitcake"></img>
          <h3>Fruitcake</h3>
          <p>Rp. 27.000</p>
          <p>Stock: {props.data.products.fruitcake.stock}</p>
        </div>
        <div className="rainbow" onClick={props.buyRainbow}>
          <img src={rainbowImg} className="foodImg" alt="rainbow"></img>
          <h3>Rainbow Cake</h3>
          <p>Rp. 36.000</p>
          <p>Stock: {props.data.products.rainbow.stock}</p>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state);
  return {
    data: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyCroissant: () => dispatch(buyCroissant),
    buyFruitTart: () => dispatch(buyFruitTart),
    buyShortcake: () => dispatch(buyShortcake),
    buyPie: () => dispatch(buyPie),
    buyMuffin: () => dispatch(buyMuffin),
    buyRainbow: () => dispatch(buyRainbow),
    buyFruitcake: () => dispatch(buyFruitcake),
    buyMacaroon: () => dispatch(buyMacaroon)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
