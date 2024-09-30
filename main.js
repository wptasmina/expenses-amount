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
    showHidden("income-error");
    return;
  }
  if (software <= 0 || isNaN(software)) {
    showHidden("software-error");
    return;
  }
  if (courses <= 0 || isNaN(courses)) {
    // document.getElementById("courses-error").classList.remove("hidden");
    // return;
    showHidden("courses-error");
    return;
  }
  if (internet <= 0 || isNaN(internet)) {
    showHidden("internet-error");
    return;
  }

  const addExpenses = software + courses + internet;
  const mainBlance = income - addExpenses;

  if (addExpenses > income) {
    // document.getElementById("logic-error").classList.remove("hidden");
    showHidden("logic-error");
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

});