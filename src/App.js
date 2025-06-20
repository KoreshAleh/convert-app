
import './App.css';
import React, {useEffect, useState} from 'react';


function App() {
  const currencies = [
    { code: "USD", name: "US Dollar", country: "US" },
    { code: "EUR", name: "Euro", country: "EU" },
    { code: "GBP", name: "British Pound", country: "GB" },
    { code: "JPY", name: "Japanese Yen", country: "JP" },
    { code: "AUD", name: "Australian Dollar", country: "AU" },
    { code: "CAD", name: "Canadian Dollar", country: "CA" },
    { code: "CHF", name: "Swiss Franc", country: "CH" },
    { code: "CNY", name: "Chinese Yuan", country: "CN" },
    { code: "HKD", name: "Hong Kong Dollar", country: "HK" },
    { code: "SGD", name: "Singapore Dollar", country: "SG" },
    { code: "SEK", name: "Swedish Krona", country: "SE" },
    { code: "NZD", name: "New Zealand Dollar", country: "NZ" },
    { code: "NOK", name: "Norwegian Krone", country: "NO" },
    { code: "DKK", name: "Danish Krone", country: "DK" },
    { code: "INR", name: "Indian Rupee", country: "IN" },
    { code: "RUB", name: "Russian Ruble", country: "RU" },
    { code: "BYN", name: "Belarusian Ruble", country: "BY" },
    { code: "BRL", name: "Brazilian Real", country: "BR" },
    { code: "ZAR", name: "South African Rand", country: "ZA" },
    { code: "MXN", name: "Mexican Peso", country: "MX" },
    { code: "PLN", name: "Polish Zloty", country: "PL" },
    { code: "TRY", name: "Turkish Lira", country: "TR" },
    { code: "CZK", name: "Czech Koruna", country: "CZ" },
    { code: "HUF", name: "Hungarian Forint", country: "HU" },
    { code: "ILS", name: "Israeli New Shekel", country: "IL" },
    { code: "KRW", name: "South Korean Won", country: "KR" },
    { code: "MYR", name: "Malaysian Ringgit", country: "MY" },
    { code: "THB", name: "Thai Baht", country: "TH" },
    { code: "PHP", name: "Philippine Peso", country: "PH" },
    { code: "IDR", name: "Indonesian Rupiah", country: "ID" },
    { code: "AED", name: "UAE Dirham", country: "AE" },
    { code: "SAR", name: "Saudi Riyal", country: "SA" },
    { code: "EGP", name: "Egyptian Pound", country: "EG" },
    { code: "NGN", name: "Nigerian Naira", country: "NG" },
    { code: "PKR", name: "Pakistani Rupee", country: "PK" },
    { code: "BDT", name: "Bangladeshi Taka", country: "BD" },
    { code: "ARS", name: "Argentine Peso", country: "AR" },
    { code: "CLP", name: "Chilean Peso", country: "CL" },
    { code: "COP", name: "Colombian Peso", country: "CO" },
    { code: "PEN", name: "Peruvian Sol", country: "PE" },
    { code: "UAH", name: "Ukrainian Hryvnia", country: "UA" },
    { code: "KZT", name: "Kazakhstani Tenge", country: "KZ" },
    { code: "VND", name: "Vietnamese Dong", country: "VN" },
    { code: "TWD", name: "New Taiwan Dollar", country: "TW" },
    { code: "MAD", name: "Moroccan Dirham", country: "MA" },
    { code: "DZD", name: "Algerian Dinar", country: "DZ" },
    { code: "QAR", name: "Qatari Riyal", country: "QA" },
    { code: "OMR", name: "Omani Rial", country: "OM" },
    { code: "JOD", name: "Jordanian Dinar", country: "JO" },
    { code: "KWD", name: "Kuwaiti Dinar", country: "KW" },
    { code: "LKR", name: "Sri Lankan Rupee", country: "LK" },
    { code: "BHD", name: "Bahraini Dinar", country: "BH" },
    { code: "IRR", name: "Iranian Rial", country: "IR" },
    { code: "IQD", name: "Iraqi Dinar", country: "IQ" }
  ].map(c => ({
    ...c,
    flag: `https://flagcdn.com/32x24/${c.country.toLowerCase()}.png`
  }));
  
  

  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('EUR')
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [rate, setRate] = useState(null);
  const [isDark, setDark] = useState(false);


 const change = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setRate(null)

 }

const toggleTheme = () => {
  setDark((prev) => {
    const newTheme = !prev;
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    
    document.body.classList.toggle('dark', newTheme);

    return newTheme;
  });
};


  const fromFlag = currencies.find(c => c.code === fromCurrency)?.flag;
  const toFlag = currencies.find(c => c.code === toCurrency)?.flag;
  

  useEffect(() => {
   
    fetch(`https://v6.exchangerate-api.com/v6/ad7dc6cde6cf56400ef82f47/latest/${fromCurrency}`)
      .then(res => res.json())
      .then(data => {
        const rate = data.conversion_rates[toCurrency];
        setRate(rate);
setConvertedAmount((amount * rate).toFixed(2));
      });

    const savedTheme = localStorage.getItem('theme');
  const isDarkMode = savedTheme === 'dark';
  setDark(isDarkMode);


  document.body.classList.toggle('dark', isDarkMode);
  
  }, [fromCurrency, toCurrency, amount]);




  return (
   
   <> 
   
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
          <input type="text"    onChange={e => setAmount(e.target.value)}  placeholder='0.00'/>
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
          <input type="text "    value={convertedAmount || ''} 
  readOnly  />
        </div>
      </div>

      <p className="down-text">Indicative Exchange Rate</p>
{rate && (
  <h3>1 {fromCurrency} = {rate} {toCurrency}</h3>
)}
    </div>
  </div>

   </>
  );
}

export default App;
