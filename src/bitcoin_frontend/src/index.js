// Import the bitcoin_backend module from the declarations folder
import { bitcoin_backend } from "../../declarations/bitcoin_backend";

// Execute this code when the window finishes loading
window.addEventListener("load", async function () {
  // Retrieve the current balance from the bitcoin backend
  const currentAmount = await bitcoin_backend.checkBalance();

  // Update the value displayed on the webpage with the current balance
  document.getElementById("value").innerText =
    Math.round(currentAmount * 100) / 100;
});

// Add an event listener to the form for when it's submitted
document.querySelector("form").addEventListener("submit", async (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Disable the submit button to prevent multiple submissions
  const button = event.target.querySelector("#submit-btn");
  button.setAttribute("disabled", true);

  // Get the input amount and output amount entered by the user
  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const outputAmount = parseFloat(
    document.getElementById("widthdrawal-amount").value
  );

  // If the input amount is not empty, call the topUp function from the bitcoin backend
  if (document.getElementById("input-amount").value.length != 0) {
    await bitcoin_backend.topUp(inputAmount);
  }

  // If the withdrawal amount is not empty, call the withdraw function from the bitcoin backend
  if (document.getElementById("widthdrawal-amount").value.length != 0) {
    await bitcoin_backend.withDraw(outputAmount);
  }

  // Calculate compound interest for the user's account
  await bitcoin_backend.compoundInterest();

  // Retrieve the updated current balance from the bitcoin backend
  const currentAmount = await bitcoin_backend.checkBalance();

  // Update the value displayed on the webpage with the updated balance
  document.getElementById("value").innerText =
    Math.round(currentAmount * 100) / 100;

  // Reset the input fields and enable the submit button
  document.getElementById("input-amount").value = "";
  document.getElementById("widthdrawal-amount").value = "";
  button.removeAttribute("disabled");
});
