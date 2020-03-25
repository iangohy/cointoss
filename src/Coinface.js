import React from 'react';

export function Coinface(props) {
  return(
    <>
      <div className="front">
        <img alt="coin front" src={require(`./img/TS${props.val}.png`)} width="75px" height="75px"/>
      </div>
      <div className="back">
        <img alt="coin back" src={require(`./img/TS${props.val}b.png`)} width="75px" height= "75px" />
      </div>
    </>
  )
}
