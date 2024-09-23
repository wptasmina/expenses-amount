let count = 1;

document.getElementById("calculate").addEventListener('click', function(){

    const income = parseFloat(document.getElementById("income").value);
    const software = parseFloat(document.getElementById("software").value);
    const courses = parseFloat(document.getElementById("courses").value);
    const internet = parseFloat(document.getElementById("internet").value);

    const addExpenses = software + courses + internet;
    const mainBlance = income - addExpenses
    
    const totalExpenses = document.getElementById("total-expenses");
    totalExpenses.innerText = addExpenses.toFixed(2);
    const totalBlance = document.getElementById("balance");
    totalBlance.innerText = mainBlance.toFixed(2);

    const result = document.getElementById("results")
    result.classList.remove('hidden');

    //new Div Create 
    const historyItem = document.createElement("div");
    historyItem.className =
      "bg-white p-3 rounded-md border-1-2 border-indigo-500";

    historyItem.innerHTML = `
    <p>Serile : ${count++}</p>
        <p class= "text-sm text-gray-500">${new Date().toLocaleString()}</p>
        <p class= "text-sm text-gray-500">income : ${income.toFixed(2)}</p>
        <p class= "text-sm text-gray-500">Expenses : ${addExpenses.toFixed(
        )}</p>
        <p class= "text-sm text-gray-500">Blance : ${mainBlance.toFixed(2)}</p>

    `;
    const historyContainer = document.getElementById("history-list");
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
});

// calculate - savings; 
document.getElementById("calculate-savings").addEventListener('click', function(){
    
    const income = parseFloat(document.getElementById("income").value);
    const software = parseFloat(document.getElementById("software").value);
    const courses = parseFloat(document.getElementById("courses").value);
    const internet = parseFloat(document.getElementById("internet").value);


    const addExpenses = software + courses + internet;
    const mainBlance = income - addExpenses;

   const savings = parseFloat(document.getElementById("savings").value);
    totlesavings = (savings * mainBlance) / 100;
    
    const savingsAmount = document.getElementById("savings-amount");
    savingsAmount.innerText = totlesavings.toFixed(2);
    const totleRemaining = mainBlance - totlesavings;

    const remainingBalance = document.getElementById("remaining-balance");
    remainingBalance.innerText = totleRemaining.toFixed(2);
    
});

//  Assistant and History Button ( History Button )
const historyTab = document.getElementById("history-tab");
const assistantTab = document.getElementById("assistant-tab");
const historySec = document.getElementById("history-section");
const expenseForm = document.getElementById("expense-form");

historyTab.addEventListener("click", function () {
  historyTab.classList.add(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "via-purple-600",
    "to-orange-400"
  );
  historyTab.classList.remove("text-gray-600");
  assistantTab.classList.remove(
  "text-white",
  "bg-gradient-to-r",
  "from-blue-500",
  "via-purple-600",
  "to-orange-400"
  );

  historySec.classList.remove("hidden");
  expenseForm.classList.add("hidden");

});

// Assistant button
assistantTab.addEventListener("click", function () {
  assistantTab.classList.add(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "via-purple-600",
    "to-orange-400"
  );
  assistantTab.classList.remove("text-gray-600");
  historyTab.classList.remove(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "via-purple-600",
    "to-orange-400"
  );
expenseForm.classList.remove("hidden");
historySec.classList.add("hidden");
//   console.log(historyTab);
});