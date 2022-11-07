 const url = "https://api.exchangerate.host/latest";

const tryBtn = document.querySelector(".try");
const dolarBtn = document.querySelector(".dolar");

const fetchData = async (url) => {
  let response = await fetch(url);
  let res = await response.json();
  console.log(res.rates);

  const TRY = res.rates.TRY;
  const USD = res.rates.USD;
  const EUR = res.rates.EUR;
  const GBP = res.rates.GBP;
  const CHF = res.rates.CHF;

  showData(TRY, USD, EUR, GBP, CHF);
//   showDolarData (TRY, USD, EUR, GBP, CHF)
};

const showData = (TRY, USD, EUR, GBP, CHF) => {
  const dolar = document.querySelector("#dollar");
  const euro = document.querySelector("#euro");
  const sterlin = document.querySelector("#sterlin");
  const frank = document.querySelector("#frank");

  dolar.innerText = (TRY / USD).toFixed(2);
  euro.innerText = (TRY / EUR).toFixed(2);
  sterlin.innerText = (TRY / GBP).toFixed(2);
  frank.innerText = (TRY / CHF).toFixed(2);
};

const showDolarData = (TRY, USD, EUR, GBP, CHF) => {
  const tr = document.querySelector("#dollar");
  const euro = document.querySelector("#euro");
  const sterlin = document.querySelector("#sterlin");
  const frank = document.querySelector("#frank");
  const span = document.querySelector(".span1");
  
  
  tr.innerText = (USD / TRY).toFixed(2);
  euro.innerText = (USD / EUR).toFixed(2);
  sterlin.innerText = (USD / GBP).toFixed(2);
  frank.innerText = (USD / CHF).toFixed(2);
};

fetchData(url);

setInterval(() => {
  fetchData(url);
}, 30000);

tryBtn.onclick = () => {
  location.reload();
};

dolarBtn.onclick = (res) => {
    showDolarData(res);
};
