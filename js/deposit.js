//
document.getElementById('btn-deposit').addEventListener('click' , function () {
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = depositField.value;
    const depositTotal = document.getElementById('deposit-total');
    const oldDepositAmount = depositTotal.innerText;
    const depositAmount = parseFloat(oldDepositAmount) + parseFloat(newDepositAmount);
    depositTotal.innerText =  depositAmount;
    depositField.value = '';
    const oldBalance = document.getElementById('balance-total');
    const balanceTotal = parseFloat(oldBalance.innerText) + parseFloat(newDepositAmount);
    oldBalance.innerText = balanceTotal;
})

document.getElementById('btn-withdraw').addEventListener('click' , function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmount = withdrawField.value;
    const withdrawTotal = document.getElementById('withdraw-total');
    const oldWithdrawAmount = withdrawTotal.innerText;
    const WithdrawAmount = parseFloat(oldWithdrawAmount) + parseFloat(newWithdrawAmount);
    const oldBalance = document.getElementById('balance-total');
    if(parseFloat(newWithdrawAmount) <= parseFloat(oldBalance.innerText)) {
        withdrawTotal.innerText = WithdrawAmount;
        const balanceTotal = parseFloat(oldBalance.innerText) - parseFloat(newWithdrawAmount);
        oldBalance.innerText = balanceTotal;
    }
    else {
        alert('You can not withdraw more than you have')
    }
    withdrawField.value = '';
})