const maxMonthlySalary = 2500

function handleSubmit(salary) {
    const value = calculateFurloughPay(salary)
    alert(value)
    return false
}

function calculateFurloughPay(salary) {
    const monthlySalary = salary / 12

    if (monthlySalary >= maxMonthlySalary) {
        return maxMonthlySalary
    }

    // calculate 80% of salary
    return salary * 0.8
}