
function updateProductNum(product,price,isIncreasing){
    const productInput = document.getElementById(product + '_num'); //input field id
    let productNum = productInput.value;
    if(isIncreasing){
        productNum = parseInt(productNum) + 1;
    }
    else if(productNum > 0){
        productNum = parseInt(productNum) - 1;
    }
    productInput.value = productNum;
    //update balance
    const productTotal = document.getElementById(product + '_total'); //balance id
    productTotal.innerText = productNum * price;

    //calculate total
    calculateTotal();
}

function getInputValue(product){
    const productInput = document.getElementById(product + '_num');
    const productNum = parseInt(productInput.value);
    return productNum;
}
function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalAmount = subTotal + tax;
    
    //update on the html
    document.getElementById('sub_total').innerText = subTotal;
    document.getElementById('tex_amount').innerText = tax; 
    document.getElementById('total_price').innerText = totalAmount; 
}

// handle of phone increase and decrease
document.getElementById('phone_plus').addEventListener('click',function(){ //phone button id
    updateProductNum('phone',1219,true);
})
document.getElementById('phone_minus').addEventListener('click',function(){ //phone button id
    updateProductNum('phone',1219,false);
})

//handle of case increase and decrease
document.getElementById('case_plus').addEventListener('click',function(){ //case button id
    updateProductNum('case', 59,true);
})
document.getElementById('case_minus').addEventListener('click',function(){ //case button id
    updateProductNum('case',59,false)
    
})