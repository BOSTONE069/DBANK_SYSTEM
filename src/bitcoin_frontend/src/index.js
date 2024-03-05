import { bitcoin_backend } from '../../declarations/bitcoin_backend';

window.addEventListener("load", async function(){
  //console.log("Finished loading");

  const currentAmount = await bitcoin_backend.checkBalance();
  
  document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;
});

document.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const button = event.target.querySelector("#submit-btn");

  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const outputAmount = parseFloat(document.getElementById("widthdrawal-amount").value);

  button.setAttribute("disabled", true);

  if (document.getElementById("input-amount").value.length != 0) {
    await bitcoin_backend.topUp(inputAmount);
  }

  if (document.getElementById("widthdrawal-amount").value.length != 0) {
    await bitcoin_backend.withDraw(outputAmount);
  }

  await bitcoin_backend.compoundInterest();

  const currentAmount = await bitcoin_backend.checkBalance();
  
  document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;

  document.getElementById("input-amount").value = "";
  document.getElementById("widthdrawal-amount").value = "";

  button.removeAttribute("disabled");
});

