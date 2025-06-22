import React from 'react'





 const Main = ({fromCurrency, setFromCurrency, toCurrency, setToCurrency, rate,  toFlag,  isDark, currencies, toggleTheme, setAmount,fromFlag, change, handelFrom, handelTo, amount2,amount}) => {
  return (
    <div className="container">
    <div>
      <h1>Currency Converter</h1> 
      <p className="main">
        Check live rates, set rate alerts, receive<br /> notifications and more.
      </p>
      <button className={`btn-dark-mode ${isDark ? "btn-dark-mode--active" : ''}`} onClick={toggleTheme} >
                
                <img src="/img/Sun.svg" alt="" className="btn-dark-mode-img" width="16px" />
                <img src="/img/Moon.svg" alt="" className="btn-dark-mode-img" width="16px"/>
            </button>
      <div className="block">
        <p className="amount">Amount</p>
        <div className="up">
          <img src={fromFlag} alt={`${fromCurrency} flag`} />
          <h2>{fromCurrency}</h2>
          <select value={fromCurrency} onChange={e => setFromCurrency(e.target.value)}>
              {currencies.map(c => (
           <option  key={c.code} value={c.code}>{c.code}</option>
        ))}
       </select>
          <input type="text"    onChange={handelFrom}  value={amount} placeholder='0.00'/>
        </div>
        <hr />
        <img src="/img/free-icon-swap-arrows-18559749.png"c width="44px" height="44px" alt="" className="ell" onClick={change}></img>
        <p className="conver">Converted Amount</p>
        <div className="down">
          <img src={toFlag} alt={`${toCurrency} flag`} />
          <h2>{toCurrency}</h2>
          <select value={toCurrency} onChange={e => setToCurrency(e.target.value)} >
              {currencies.map(c => (
           <option  key={c.code} value={c.code} >{c.code}</option>
        ))}
       </select>
          <input type="text " onChange={handelTo} placeholder='0.00'
          value={amount2} 
    />
        </div>
      </div>

      <p className="down-text">Indicative Exchange Rate</p>
{rate && (
  <h3>1 {fromCurrency} = {rate} {toCurrency}</h3>
)}
    </div>
  </div>

  )
}


export default Main;