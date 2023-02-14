function getPin(){
    const pin = generatePin();
    const pinString = pin+ '';
    if (pinString.length === 4) {
        return pin;
    }
    else{
       
        return getPin();
    }
}
function generatePin() {
    const random = Math.round(Math.random()*10000);
    return random
}
document.getElementById('generate-pin').addEventListener('click', function(){
    const generatePin = getPin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value =  generatePin;
});
document.getElementById('calculator').addEventListener('click', function(event){
    const numbers = event.target.innerText
    if (isNaN(numbers)) {
        if (numbers == 'C') {
            document.getElementById('calculator-field').value = '';
        }
        else if (numbers === '<') {
                const displayPin = document.getElementById('calculator-field').value;
                const desit = displayPin.split('')
                desit.pop();
                const mainValue = desit.join('');
                document.getElementById('calculator-field').value = mainValue;



        }           
    }
    else{
        const typeNumberField = document.getElementById('calculator-field')
        typeNumberField.value += numbers;
    }
});

document.getElementById('varify-pin').addEventListener('click', function(){
    const currentPin = document.getElementById('display-pin');
    const currentPinValue = currentPin.value;

    const displayPin = document.getElementById('calculator-field');
    const displayPinValue = displayPin.value;
    const pinSuccess = document.getElementById('pin-success');
    const pinFailure = document.getElementById('pin-failure');
    if (displayPinValue == currentPinValue) {
        
        const pinSuccessMassege = pinSuccess.style.display = 'block';
        const pinFailureMassege = pinFailure.style.display = 'none';
    }
    else{
        
        const pinFailureMassege = pinFailure.style.display = 'block';
        const pinSuccessMassege = pinSuccess.style.display = 'none';
    }

    currentPin.value = '';
    displayPin.value = '';    
})