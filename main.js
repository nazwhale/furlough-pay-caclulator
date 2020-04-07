const maxMonthlySalary = 2500;

const input = document.getElementById("yearly-salary");
const calculationOutputElement = document.getElementById("cacluation-output");

input.addEventListener("change", updateValue);

function updateValue(e) {
  const calculated = calculateFurloughPay(e.target.value).toFixed();
  calculationOutputElement.textContent = `£${calculated} per month`;
}

function calculateFurloughPay(salary) {
  const monthlySalary = salary / 12;

  if (monthlySalary >= maxMonthlySalary) {
    return maxMonthlySalary;
  }

  return monthlySalary * 0.8;
}
