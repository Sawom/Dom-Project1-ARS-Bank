// deposit calculation
document.getElementById('dipoButton').addEventListener('click',function(){
    // deposit input
    const newDipoInput = document.getElementById('dinput');
    const newDipoInputText = newDipoInput.value;
    const newDipoInputAmount = parseFloat(newDipoInputText);
    // deposit display
    const oldDipoDisplay = document.getElementById('ddisplay');
    const oldDipoDisplayText = oldDipoDisplay.innerText;
    const oldDipoDisplayAmount = parseFloat(oldDipoDisplayText);
    // condition for avoid negative input 
    if(newDipoInputAmount > 0){
        // update deposit
        const updateDeposit = newDipoInputAmount + oldDipoDisplayAmount;
        oldDipoDisplay.innerText = updateDeposit;
        // total balance update
        const totalBalance = document.getElementById('tbalance');
        const totalBalanceText = totalBalance.innerText;
        const totalBalanceAmount = parseFloat(totalBalanceText);
    
        const updateTotalBalance = totalBalanceAmount + newDipoInputAmount;
        totalBalance.innerText = updateTotalBalance;
    }
    // clear
    newDipoInput.value = '';
})
// withdraw calculation
document.getElementById('withButton').addEventListener('click',function(){
    // withdraw input
    const newWithInput = document.getElementById('winInput');
    const newWithInputText = newWithInput.value;
    const newWithInputAmount = parseFloat(newWithInputText);
    // withdraw display
    const oldWithDisplay = document.getElementById('wDisplay');
    const oldWithDisplayText = oldWithDisplay.innerText;
    const oldWithDisplayAmount = parseFloat(oldWithDisplayText);
    if(newWithInputAmount > 0 ){
        // update withdraw changed
        // const updateWithdraw = newWithInputAmount + oldWithDisplayAmount;
        // oldWithDisplay.innerText = updateWithdraw;

        // total balance update 1
        const afterWithdrawBalance = document.getElementById('tbalance');
        const afterWithdrawBalanceText = afterWithdrawBalance.innerText;
        const afterWithdrawBalanceAmount = parseFloat(afterWithdrawBalanceText);
        // condition avoid negative total balance and withdraw
        if(afterWithdrawBalanceAmount > newWithInputAmount && oldWithDisplayAmount < afterWithdrawBalanceAmount ){
            // update withdraw
            const updateWithdraw = newWithInputAmount + oldWithDisplayAmount;
            oldWithDisplay.innerText = updateWithdraw;
            // total balance update 2
            const afterWithdrawBalanceTotal = afterWithdrawBalanceAmount - newWithInputAmount;
            afterWithdrawBalance.innerText = afterWithdrawBalanceTotal ;
        }
    }
    // clear
    newWithInput.value = '';
})