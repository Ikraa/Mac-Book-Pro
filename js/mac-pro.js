const bestPrice=document.getElementById('best-price');
const memory8Gb=document.getElementById('btn-memory-8gb');
const memory16Gb=document.getElementById('btn-memory-16gb');
const memoryCost=document.getElementById('memory-cost');
const storage256Gb=document.getElementById('ssd-256gb');
const storage512Gb=document.getElementById('ssd-512gb');
const storage1Tb= document.getElementById('ssd-1Tb');
const storageCost=document.getElementById('storage-cost');
const freeDelivery=document.getElementById('free')
const deliveryCharge=document.getElementById('delivery-charge')
const deliverySubTotal=document.getElementById('delivery-total')
const totalPrice=document.getElementById('total-price');
const buttonApply=document.getElementById('btn-apply');
const promoCodeField= document.getElementById('promo-code-input');
const grandTotal=document.getElementById('grand-total');

// handle function of Total Price:(sub-total)
function updateSubTotal()
{   const bestPriceText=bestPrice.innerText;
    const bestPriceProduct=parseFloat(bestPriceText);
    const memoryCostText=memoryCost.innerText;
    const memoryCostAll=parseFloat(memoryCostText);
    const storageCostText=storageCost.innerText;
    const storageCostAll=parseFloat(storageCostText);
    const deliverySubText=deliverySubTotal.innerText;
    const deliveryTotal=parseFloat(deliverySubText);
    const subTotal=memoryCostAll+storageCostAll+deliveryTotal+bestPriceProduct;
    totalPrice.innerText=subTotal;
    const grandTotalText=grandTotal.innerText;
    const finalTotal=parseFloat(grandTotalText);
};

handle function of Grand total price:(Total)
 function calculateTotal(){
    const promoCodeInput=promoCodeField.value;
    promoCodeField.value='';
    if(promoCodeInput==stevekaku){
        const discount= subTotal/20;
        promoCodeField.value=discount;
    }
    return discount;
};
  
  
// handle event of Memory 8GB & 16GB :
memory8Gb.addEventListener('click', function(){
memoryCost.innerText='0';
updateSubTotal()
});
memory16Gb.addEventListener('click', function(){
    memoryCost.innerText="180";
    updateSubTotal()
});

// handle event of Storage 256GB:
storage256Gb.addEventListener('click', function(){
    storageCost.innerText='0';
    updateSubTotal()
});
// handle event of Storage 512GB:
storage512Gb.addEventListener('click', function(){
    storageCost.innerText='100';
    updateSubTotal()
});
// handle event of Storage 512GB:
storage1Tb.addEventListener('click', function(){
    storageCost.innerText='180';
    updateSubTotal()
});
// handle event of delivery charge free & paid:
freeDelivery.addEventListener('click', function(){
    deliverySubTotal.innerText='0';
    updateSubTotal()
})
deliveryCharge.addEventListener('click', function(){
    deliverySubTotal.innerText='20';
    updateSubTotal()
});
// handle event of promo code apply:
 
buttonApply.addEventListener('click', function(){
    calculateTotal();
});