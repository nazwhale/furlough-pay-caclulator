const maxMonthlySalary = 2500;

const input = document.getElementById("yearly-salary");
const calculationOutputElement = document.getElementById("cacluation-output");

input.addEventListener("change", updateValue);

function updateValue(e) {
  const calculated = calculateFurloughPay(e.target.value).toFixed();

  let output = `£${calculated} per month`

  // If we've hit £2500 give the user confirmation
  if (calculated === maxMonthlySalary.toFixed()) {
    output = `${output} (max monthly amount)`
  }
  
  calculationOutputElement.textContent = output;
}

function calculateFurloughPay(salary) {
  const monthlySalary = salary / 12;

  if (monthlySalary >= maxMonthlySalary) {
    return maxMonthlySalary;
  }

  return monthlySalary * 0.8;
}
