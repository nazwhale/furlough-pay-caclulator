const maxMonthlySalary = 2500;

const input = document.getElementById("yearly-salary");
const calculationOutputElement = document.getElementById("calculation-output");

input.addEventListener("change", updateValue);
input.addEventListener("blur", updateValue);
input.addEventListener("keydown", registerTouched);

function registerTouched() {
  input.classList.add("touched");
}

function updateValue(e) {
  const calculated = calculateFurloughPay(e.target.value).toFixed();

  let output = `${calculated} per month`;

  // If we've hit £2500 give the user confirmation
  if (calculated === maxMonthlySalary.toFixed()) {
    output = `${output} (max monthly amount)`;
  }

  calculationOutputElement.classList.remove("disclaimer");
  calculationOutputElement.classList.add("bold");
  calculationOutputElement.textContent = output;
}

function calculateFurloughPay(salary) {
  const monthlySalary = salary / 12;
  const percentageSalary = monthlySalary * 0.8;
  const hasHitMonthlyMax = percentageSalary >= maxMonthlySalary;

  return hasHitMonthlyMax ? maxMonthlySalary : percentageSalary;
}
