const maxMonthlySalary = 2500;

const input = document.getElementById("yearly-salary");
const beforeTaxCalculationOutputElement = document.getElementById(
  "calculation-output-before-tax"
);
const beforeTaxCalculationDescriptionElement = document.getElementById(
  "calculation-output-before-tax-description"
);
const afterTaxCalculationOutputElement = document.getElementById(
  "calculation-output-after-tax"
);

input.addEventListener("change", updateBeforeTaxValue);
input.addEventListener("blur", updateBeforeTaxValue);

input.addEventListener("change", updateAfterTaxValue);
input.addEventListener("blur", updateAfterTaxValue);

input.addEventListener("keydown", registerTouched);

function registerTouched() {
  input.classList.add("touched");
}

function updateBeforeTaxValue(e) {
  const calculated = calculateFurloughPay(e.target.value).toFixed();

  let output = calculated;

  // Let user know if they've hit the limit
  let descriptionTextContent = "per month";
  if (output >= maxMonthlySalary) {
    descriptionTextContent = `${descriptionTextContent} (max amount)`;
  }
  beforeTaxCalculationDescriptionElement.textContent = descriptionTextContent;

  beforeTaxCalculationOutputElement.classList.remove("disclaimer");
  beforeTaxCalculationOutputElement.classList.add("bold");
  beforeTaxCalculationOutputElement.textContent = output;
}

function updateAfterTaxValue(e) {
  const grossMonthly = calculateFurloughPay(e.target.value);
  const afterTax = subtractTax(grossMonthly);

  afterTaxCalculationOutputElement.classList.remove("disclaimer");
  afterTaxCalculationOutputElement.classList.add("bold");
  afterTaxCalculationOutputElement.textContent = afterTax.toFixed();
}

function calculateFurloughPay(salary) {
  const monthlySalary = salary / 12;
  const percentageSalary = monthlySalary * 0.8;
  const hasHitMonthlyMax = percentageSalary >= maxMonthlySalary;

  return hasHitMonthlyMax ? maxMonthlySalary : percentageSalary;
}

const personalTaxAllowance = 12500;
function subtractTax(grossMonthly) {
  const monthlyPersonalTaxAllowance = personalTaxAllowance / 12;

  if (grossMonthly <= monthlyPersonalTaxAllowance) {
    return grossMonthly;
  }

  const taxable = grossMonthly - monthlyPersonalTaxAllowance;

  // Basic rate: £12,501 to £50,000; 20%
  //
  // We consider everything as the basic rate, as noone will be earning more
  // than £2500 per month (~£37500 per year)
  const tax = taxable * 0.2;

  const taxSubtracted = grossMonthly - tax;
  return taxSubtracted;
}
