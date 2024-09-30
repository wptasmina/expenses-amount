
function totleIncomById(id) {
  return parseFloat(document.getElementById(id).value);
}

// calculate - savings; 
function calculatSavingsById(id) {

return document.getElementById(id);

}

//remove Error hidden
function showHidden(id){
    document.getElementById(id).classList.remove("hidden");
    
}

//toFixed
function formatCurrency(amount){
    return `${amount.toFixed(2)}`
}
// history new div creat
function addToHistory(income,addExpenses,mainBlance){
    const historyItem = document.createElement("div");
    historyItem.className =
      "bg-white p-3 rounded-md border-1-2 border-indigo-500";
    historyItem.innerHTML = `
    <p class= "font-semibold">Serile : ${count}</p>
        <p class= "text-sm text-gray-500">${new Date().toLocaleString()}</p>
        <p class= "text-sm text-gray-500">income : ${formatCurrency(income)}</p>
        <p class= "text-sm text-gray-500">Expenses : ${formatCurrency(
          addExpenses
        )}</p>
        <p class= "text-sm text-gray-500">Blance : ${formatCurrency(
          mainBlance
        )}</p>
    `
    const historyContainer = document.getElementById("history-list");
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
}