import React from 'react'

 const Main = () => {
  return (
    <div className="container">
    {/* <div className="wrapper"> */}
      <h1>Currency Converter</h1>
      <p className="main">
        Check live rates, set rate alerts, receive<br /> notifications and more.
      </p>
      <div className="block">
        <p className="amount">Amount</p>
        <div className="up">
          <img src="/img/SGD 1.png" alt="SGD" />
          <h2>SGD</h2>
          <select name="" id=""></select>
          <input type="text" />
        </div>
        <hr />
        <p className="conver">Converted Amount</p>
        <div className="down">
          <img src="/img/usa.png" alt="USD" />
          <h2>USD</h2>
         <select name="" id=""></select>
          <input type="text" />
        </div>
      </div>

      <p className="down-text">Indicative Exchange Rate</p>
      <h3>1 SGD = 0.7367 USD</h3>
    {/* </div> */}
  </div>
  )
}


export default Main;