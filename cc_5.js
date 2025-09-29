//coding challenge 05
//Vincent Crooks

const employees = [
  { name: "Chloe Davis", hourlyRate: 22.5, hoursWorked: 38 },
  { name: "Vinny Crooks", hourlyRate: 19.0, hoursWorked: 42 },
  { name: "Anthony Martinez", hourlyRate: 27.75, hoursWorked: 50 },
  { name: "Mike Thomas", hourlyRate: 16.5, hoursWorked: 40 },
];

//employee objects

function roundToCents(amount) {
  return Math.round((amount + Number.EPSILON) * 100) / 100
};

//rounds to 2 decimal places

function calculateBasePay(rate, hours) {
  const baseHours = Math.min(hours, 40)
  return roundToCents(baseHours * rate)
};

//pay for 40 hours

function calculateOvertimePay(rate, hours) {
  const overtimeHours = Math.max(hours - 40, 0);
  return roundToCents(overtimeHours * rate * 1.5);
};

//overtime calculation

function calculateTaxes(grossPay) {
  const TAX_RATE = 0.15;
  return roundToCents(grossPay * TAX_RATE);
}

//deducts 15% tax

