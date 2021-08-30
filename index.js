const  initialPrice = document.querySelector('#initial-price');

const  stockQuantity = document.querySelector('#stock-quantity');

const  currentPrice = document.querySelector('#current-price');

const  submitBtn = document.querySelector('#submit-btn');

const  outputDiv = document.querySelector('#output-div');

submitBtn.addEventListener('click',submitHandler)

function submitHandler(){
     var ip = Number(initialPrice.value);
     var qty = Number(stockQuantity.value);
     var cp = Number(currentPrice.value);

     calculateProfitAndLoss(ip,qty,cp)
}


function calculateProfitAndLoss( initial,quantity, current){
    
                     if(initial > current){
        //loss logic
        var loss = (initial-current) * quantity;
        var lossPercentage = (loss/initial)*100;

        showOutput(`Hey the loss is ${loss} and the percent is ${lossPercentage}%` );
        
    }
    else if (current > initial){
        var profit = (current-initial)* quantity ;
        var profitPercentage = (profit / initial)*100;

        showOutput(`Hey the profit is ${profit} and the percent is ${profitPercentage}%`);

    }
    else{
        showOutput(`no pain no gain, and no gain no pain`);
    }

}

function showOutput(message){

    outputDiv.innerHTML = message;

}
