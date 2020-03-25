import React from 'react';
import './Coin.css'
import { Coinface } from './Coinface';

export class Coin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      div: "coin-inner",
      val: "1d"
    }
  }

  changeVal(val) {
    this.setState({
      val: val
    })
  }

  handleClick() {
    {/* Reset div to trigger animation restart*/}
    if (this.state.div === "coin-inner") {
      this.flipcoin()
    } else {
      this.setState({
        div:"coin-hidden"
      }, () => setTimeout(() => this.flipcoin(),100))
    }
  }

  flipcoin() {
    {/* Generate result and change div in state to match result*/}
    const isHeads = Math.round(Math.random());
    const div = (isHeads) ? "coin-heads":"coin-tails";
    console.log(div)
    this.setState({
      div: div
    });
  }

  render(){
    const coins = ['1d','50c','20c','10c','5c']
    var buttons = coins.map((val) => {
      return(
        <button key={val} onClick={() => {this.changeVal(val)}}>{val}</button>
      )
    })
    return(
      <div className="coin-widget">
        <div className="coin" onClick={() => this.handleClick()}>
          <div className={this.state.div}>
            <Coinface val={this.state.val}/>
          </div>
        </div>
        <div className="buttons">
          <div>
            <button onClick={() => this.handleClick()}>Flip</button>
          </div>
          {buttons}
        </div>
        <p>Coin images taken from&nbsp;
        <a target="_blank" rel="noreferrer noopener" href="https://www.mas.gov.sg/currency/Singapores-Circulation-Currency-Coins">MAS website</a></p>
      </div>
    )
  }
}
