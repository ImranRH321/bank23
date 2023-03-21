document
  .getElementById("deposit_button")
  .addEventListener("click", function () {
    const inputMoney = inputFlied("deposit_input");
    const displayMoney = displayOutText("deposit_output");
    const totalBalances = displayOutText("balance_Total");

    const totalAddedMoney = inputMoney + displayMoney;

    innerTextChange("deposit_output", totalAddedMoney);

    const depositAddTotal = totalBalances + inputMoney;
    innerTextChange("balance_Total", depositAddTotal);
  });
// ===========Widthraw  ============= 

document
  .getElementById("withdraw_button")
  .addEventListener("click", function () {
    const inputMoney = inputFlied("withdraw_Input");
    const displayMoney = displayOutText("withdraw_output");
    const totalBalances = displayOutText("balance_Total");

    const totalAddedMoney = inputMoney + displayMoney;

    innerTextChange("withdraw_output", totalAddedMoney);

    const withdrawTotal = totalBalances - inputMoney;
    innerTextChange("balance_Total", withdrawTotal);
  });