/* document.getElementById("deposit_button").addEventListener("click", () => {
  const inputFiled = document.getElementById("deposit_input");
  const inputValue = parseFloat(inputFiled.value);

  const displayText = document.getElementById("deposit_output");
  const displayValue = parseFloat(displayText.innerText);

  displayText.innerText = inputValue + displayValue;

  const balanceTotalText = document.getElementById("balance_Total");
  const balanceTotalMoney = parseFloat(balanceTotalText.innerText);

  balanceTotalText.innerText = balanceTotalMoney + inputValue;
  inputFiled.value = "";
}); */

// withdraw
/* 
document.getElementById("withdraw_button").addEventListener("click", () => {
  const inputFiled = document.getElementById("withdraw_Input");
  const inputValue = parseFloat(inputFiled.value);

  const displayText = document.getElementById("withdraw_text");
  const displayValue = parseFloat(displayText.innerText);

  displayText.innerText = inputValue + displayValue;

  const balanceTotalText = document.getElementById("balance_Total");
  const balanceTotalMoney = parseFloat(balanceTotalText.innerText);

  balanceTotalText.innerText = balanceTotalMoney - inputValue;
  inputFiled.value = "";
});
 */
// Simple Common function use
// ==============================

function bankingSystem(input, output, balance, positive) {
  console.log(input, output, balance, positive);
  //    input
  const inputFiled = document.getElementById(input);
  const inputValue = parseFloat(inputFiled.value);

  //   error

  //    output
  const displayText = document.getElementById(output);
  const displayValue = parseFloat(displayText.innerText);

  // update set output
  displayText.innerText = inputValue + displayValue;
  inputFiled.value = "";

  if (inputValue < 0 || !inputValue) {
    alert("negative number Not valid");
    return;
  } else {
    // update set output
    displayText.innerText = inputValue + displayValue;
    inputFiled.value = "";
  }

  const balanceTotalText = document.getElementById(balance);
  const balanceTotalMoney = parseFloat(balanceTotalText.innerText);

  //   err2
  if (balanceTotalMoney < inputValue) {
    alert("Baper kace akon Ato Taka nai");
    return;
  }

  //   balance output
  if (positive === true) {
    balanceTotalText.innerText = balanceTotalMoney + inputValue;
  } else {
    balanceTotalText.innerText = balanceTotalMoney - inputValue;
  }
}
