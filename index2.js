

// You are given an array representing a series of financial records for a freelance worker.
// Each record is an array containing the record type ("income", "expense", "investment", or "refund") and the amount.
const financialRecords = [
    ["income", 1800],
    ["expense", 500],
    ["investment", 1000],
    ["income", 2400],
    ["refund", 200],
    ["expense", 800],
    ["income", 1500],
];

/*****************************************************************
Part 1: Record Categorization

Task 1) Create a new array containing only "income" and "refund" records.
       Output 1) [["income", 1800], ["income", 2400], ["refund", 200], ["income", 1500]]

Task 2) Create a new array containing only "expense" and "investment" records.
       Output 2) [["expense", 500], ["investment", 1000], ["expense", 800]]

******************************************************************/

const recordIncome = financialRecords.filter ((record) => {
       console.log (record)
       return record [0]=== "income" || record[0] === "refund" })
console.log (recordIncome);

const recordExpense = financialRecords.filter ((record) => {
       console.log (record)
       return record [0]=== "investment" || record[0] === "expense" })

console.log (recordExpense);


// const recordRefund = financialRecords.filter ((records2) => records2[0] === "refund");
// console.log (recordRefund);

// const recordInvestment = financialRecords.filter ((records3) => records3[0] === "investment");
// console.log (recordInvestment);

// const recordExpense = financialRecords.filter ((records4) => records4[0] === "expense" );
// console.log (recordExpense);

/*****************************************************************
Part 2: Financial Calculations

Task 3) Calculate the total for "income" and "refund" records combined.
       Output 3) 5900

Task 4) Calculate the total for "expense" and "investment" records combined.
       Output 4) 2300

******************************************************************/
const totalincome  = recordIncome.reduce ((sum,record)=> sum + record [1],0)
console.log (totalincome)

const totalExpense  = recordExpense.reduce ((sum,record)=> sum + record [1],0)
console.log (totalExpense)
/*****************************************************************
Part 3: Detailed Analysis

Task 5) Determine the net financial impact (total for "income" and "refund" - total for "expense" and "investment").
       Output 5) 3600

Task 6) Identify and create a new array with records where the amount is greater than $800.
       Output 6) [["income", 1800], ["investment", 1000], ["income", 2400], ["income", 1500]]

******************************************************************/

// Use JavaScript array methods like filter and reduce to achieve the desired outputs for each task.

const netImpact = totalincome - totalExpense;
console.log (netImpact)

const greater = financialRecords.filter ((great) => {
       if (great [1] > 800 ) {
              console.log (great);
}
})