function inputFlied(inputId) {
  const input = document.getElementById(inputId);
  const saveMoneyAmount = Number(input.value);
  if (saveMoneyAmount) {
    input.value = "";
    return saveMoneyAmount;
  }else{
    
    alert("Plase provide money ")
    return;
  }
}
function displayOutText(text) {
  const outputText = document.getElementById(text);
  const displayMoney = Number(outputText.innerText);
  return displayMoney;
}

function innerTextChange(elementId, search) {
  const elementText = document.getElementById(elementId);
  elementText.innerText = search;
}
