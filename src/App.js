
import './App.css';
import React, {useEffect, useState} from 'react';
import Main from './compponents/Main';


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
    flag: `https://flagcdn.com/32x24/${c.country.toLowerCase()}.png`  // массив валют + добавленре картинок
  }));

  const [fromCurrency, setFromCurrency] = useState('USD') // хронит и меняет значения названия валюты при этом  от этого завсит какой будет флаг
  const [toCurrency, setToCurrency] = useState('EUR') // тоже самое только для другой валюты
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState(null);
  const [isDark, setDark] = useState(false);
  const [amount2, setAmount2] = useState('');
  const [isFlag, setIsFlag] = useState(false)


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
  

   const handelFrom = (e) => {
  const value = e.target.value
  setAmount(value)

  setIsFlag(true)
  

 }

 const handelTo = (e) => {
    const value  = e.target.value
    setAmount2(value)
    setIsFlag(false)
 }

  useEffect(() => {

    fetch(`https://v6.exchangerate-api.com/v6/13fce4155c3b509ca5d42a7e/latest/${fromCurrency}`)
      .then(res => res.json())
      .then(data => {
        const rate = data.conversion_rates[toCurrency];
        setRate(rate);


        if(isFlag){
          const a = parseFloat((amount * rate).toFixed(2))
           setAmount2(a)
        }else{
          const b = parseFloat((amount2 / rate).toFixed(2))
           setAmount(b)
        }

      });

    const savedTheme = localStorage.getItem('theme');
  const isDarkMode = savedTheme === 'dark';
  setDark(isDarkMode);
 


  document.body.classList.toggle('dark', isDarkMode);
  
  }, [fromCurrency, toCurrency, amount, amount2, isFlag]);





  return (
   
   <> 
   
    <Main
      fromCurrency={fromCurrency}
      setFromCurrency={setFromCurrency}
      toCurrency={toCurrency}
      setToCurrency={setToCurrency}
      rate={rate}
      toFlag={toFlag}
      isDark={isDark}
      currencies={currencies}
      toggleTheme={toggleTheme}
      setAmount={setAmount}
      fromFlag={fromFlag}
      change={change}
      handelFrom={handelFrom}
      handelTo={handelTo}
      amount={amount}
      amount2={amount2}
    />

   </>
  );
}

export default App;
