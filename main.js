let count = 0;
// Calculate Button 
document.getElementById("calculate").addEventListener('click', function(){
  count += 1;
  // const income = parseFloat(document.getElementById("income").value);

  const income = totleIncomById("income");
  const software = totleIncomById("software");
  const courses = totleIncomById("courses");
  const internet = totleIncomById("internet");

  if (income <= 0 || isNaN(income)) {
    showHidde("income-error");
    return;
  } else {
  }
  if (software <= 0 || isNaN(software)) {
    showHidde("software-error");
    return;
  }
  if (courses <= 0 || isNaN(courses)) {
    // document.getElementById("courses-error").classList.remove("hidden");
    showHidde("courses-error");
    return;
  }
  if (internet <= 0 || isNaN(internet)) {
    showHidde("internet-error");
    return;
  }

  const addExpenses = software + courses + internet;
  const mainBlance = income - addExpenses;

  if (addExpenses > income) {
    showHidde("logic-error");
    return;
  }
  const totalExpenses = document.getElementById("total-expenses");
  totalExpenses.innerText = addExpenses.toFixed(2);
  
  const totalBlance = document.getElementById("balance");
  totalBlance.innerText = mainBlance.toFixed(2);

  //result section 
  // document.getElementById("results").classList.remove("hidden");
  showHidden("results");

  //new Div Create history Item
  addToHistory(income, addExpenses, mainBlance);
});

// calculate - savings; 
document.getElementById("calculate-savings").addEventListener('click', function(){
    
    const income = totleIncomById("income");
    const software = totleIncomById("software");
    const courses = totleIncomById("courses");
    const internet = totleIncomById("internet");


    const addExpenses = software + courses + internet;
    const mainBlance = income - addExpenses;

   const savings = totleIncomById("savings");
    totlesavings = (savings * mainBlance) / 100;
    
    const savingsAmount = calculatSavingsById("savings-amount");
    savingsAmount.innerText = totlesavings.toFixed(2);
    const totleRemaining = mainBlance - totlesavings;

    const remainingBalance = calculatSavingsById("remaining-balance");
    remainingBalance.innerText = totleRemaining.toFixed(2);
    
});

//  Assistant and History Button ( History Button )
const historyTab = calculatSavingsById("history-tab");
const assistantTab = calculatSavingsById("assistant-tab");
const historySec = calculatSavingsById("history-section");
const expenseForm = calculatSavingsById("expense-form");

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