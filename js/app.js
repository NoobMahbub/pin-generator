function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        console.log('got 3 digit and calling again', pin);
        return getPin();
    }
}


function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}
document.getElementById('key-pad').addEventListener('click',
    function (event) {
        const number = event.target.innerText;
        const calcInput = document.getElementById('typed-numbers');
        if (isNaN(number)) {
            if (number == 'C') {
                calcInput.value = '';
            }
        }
        else {
            calcInput.value += number;
        }

    });
    function verifyPin() {
        const pin = document.getElementById('display-pin').value;
        const typedNumbers = document.getElementById('typed-numbers').value;

        const notifyFail = document.getElementById('notify-fail');
        const notifySuccess = document.getElementById('notify-success');
        if(pin == typedNumbers){
       
            notifySuccess.style.display = 'block';
           
            notifyFail.style.display = 'none';
        }
        else{
           
            notifyFail.style.display = 'block'; 
           
            notifySuccess.style.display = 'none';
        }
    }