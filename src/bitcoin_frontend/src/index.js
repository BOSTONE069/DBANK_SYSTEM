import { bitcoin_backend } from '../../declarations/bitcoin_backend';

window.addEventListener("load", async function(){
  //console.log("Finished loading");

  const currentAmount = await bitcoin_backend.checkBalance();
  
  document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;
});

