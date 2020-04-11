const maxMonthlySalary = 2500;

const input = document.getElementById("yearly-salary");

const baseCalculationOutputElement = document.getElementById(
  "calculation-output-before-tax"
);
const baseCalculationDescriptionElement = document.getElementById(
  "calculation-output-before-tax-description"
);
const incomeTaxCalculationOutputElement = document.getElementById(
  "calculation-output-income-tax"
);
const nationalInsuranceCalculationOutputElement = document.getElementById(
  "calculation-output-national-insurance"
);

const netFurloughSalaryOutputElement = document.getElementById(
  "calculation-output-net-furlough-salary"
);
const netFurloughSalaryOutputCurrencyElement = document.getElementById(
  "calculation-output-net-furlough-salary-currency"
);

input.addEventListener("change", updateBeforeTaxValue);
input.addEventListener("blur", updateBeforeTaxValue);

input.addEventListener("change", updateIncomeTaxDeduction);
input.addEventListener("blur", updateIncomeTaxDeduction);

input.addEventListener("change", updateNationalInsuranceDeduction);
input.addEventListener("blur", updateNationalInsuranceDeduction);

input.addEventListener("change", updateNetFurloughSalary);
input.addEventListener("blur", updateNetFurloughSalary);

input.addEventListener("keydown", registerTouched);

function registerTouched() {
  input.classList.add("touched");
}

function updateBeforeTaxValue(e) {
  const calculated = calculateFurloughPay(e.target.value).toFixed();

  let output = calculated;

  // TODO: figure out the css for this
  //
  // Let user know if they've hit the limit
  // let descriptionTextContent = "";
  // if (output >= maxMonthlySalary) {
  //   descriptionTextContent = `${descriptionTextContent} (max amount)`;
  // }
  // baseCalculationDescriptionElement.textContent = descriptionTextContent;

  baseCalculationOutputElement.classList.remove("disclaimer");
  baseCalculationOutputElement.classList.add("bold");
  baseCalculationOutputElement.textContent = output;
}

function updateIncomeTaxDeduction(e) {
  const grossMonthly = calculateFurloughPay(e.target.value);
  const afterTax = caclulateMonthlyTaxDeduction(grossMonthly);

  incomeTaxCalculationOutputElement.classList.remove("disclaimer");
  incomeTaxCalculationOutputElement.classList.add("bold");
  incomeTaxCalculationOutputElement.textContent = afterTax.toFixed();
}

function updateNationalInsuranceDeduction(e) {
  const grossMonthly = calculateFurloughPay(e.target.value);
  const afterNI = caclulateNationalInsuranceDeduction(grossMonthly);
  console.log(afterNI);

  nationalInsuranceCalculationOutputElement.classList.remove("disclaimer");
  nationalInsuranceCalculationOutputElement.classList.add("bold");
  nationalInsuranceCalculationOutputElement.textContent = afterNI.toFixed();
}

function updateNetFurloughSalary(e) {
  const grossMonthly = calculateFurloughPay(e.target.value);
  const afterTax = caclulateMonthlyTaxDeduction(grossMonthly);
  const afterNI = caclulateNationalInsuranceDeduction(grossMonthly);

  const netFurloughSalary = grossMonthly - afterTax - afterNI;

  netFurloughSalaryOutputElement.classList.remove("text-grey");
  netFurloughSalaryOutputCurrencyElement.classList.remove("text-grey");
  netFurloughSalaryOutputElement.textContent = netFurloughSalary.toFixed();
}

function calculateFurloughPay(salary) {
  const monthlySalary = salary / 12;
  const percentageSalary = monthlySalary * 0.8;
  const hasHitMonthlyMax = percentageSalary >= maxMonthlySalary;

  return hasHitMonthlyMax ? maxMonthlySalary : percentageSalary;
}

// Basic rate: £12,501 to £50,000; 20%
//
// We consider everything as the basic rate, as noone will be earning more
// than £2500 per month (~£37500 per year)
const personalTaxAllowance = 12500;
function caclulateMonthlyTaxDeduction(grossMonthly) {
  const monthlyPersonalTaxAllowance = personalTaxAllowance / 12;

  if (grossMonthly <= monthlyPersonalTaxAllowance) {
    return 0;
  }

  const taxable = grossMonthly - monthlyPersonalTaxAllowance;

  const tax = taxable * 0.2;
  return tax;
}

// up to £792 a month: 0%
// £792 to £4167 a month: 12%
//
// (we can ignore the band above £4167, as furlough salaries max at £2500)
//
// if making changes, you can check against this calculator for correctness:
// http://nicecalculator.hmrc.gov.uk/Class1NICs1.aspx
personalNIMonthlyAllowance = 792;
function caclulateNationalInsuranceDeduction(grossMonthly) {
  if (grossMonthly <= personalNIMonthlyAllowance) {
    return 0;
  }

  const deductable = grossMonthly - personalNIMonthlyAllowance;

  const deductions = (deductable / 100) * 12;

  return deductions;
}
