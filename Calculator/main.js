var values = {
    num1: [],
    num2: [],
    numInt1: '',
    numInt2: '',
    operator: null,
    result: null,
    history: null
}
var showRes = false;

var wait = (ms) => {
    const start = Date.now();
    let now = start;
    while (now - start < ms) {
      now = Date.now();
    }
}

function fullClear(){
    // CLEARS ALL REGISTRY
    values.num1 = [];
    values.num2 = [];
    values.numInt1 = '';
    values.numInt2 = '';
    values.operator = null;
    values.result = null;
    showRes = false;
}

function softClear(){
    values.num2 = [];
    values.numInt2 = '';
    values.result = null;
    values.operator = null;
    showRes = false;
}

function calculate(){
    values.numInt1 = Number(values.numInt1);
    values.numInt2 = Number(values.numInt2);
    if(values.operator == "+"){
        values.result = values.numInt1 + values.numInt2;
        values.history = `${values.numInt1} + ${values.numInt2}`;
    } else if(values.operator == "-"){
        values.result = values.numInt1 - values.numInt2;
        values.history = `${values.numInt1} - ${values.numInt2}`;
    } else if(values.operator == "*"){
        values.result = values.numInt1 * values.numInt2;
        values.history = `${values.numInt1} * ${values.numInt2}`;
    } else if(values.operator == "/"){
        values.result = values.numInt1 / values.numInt2;
        values.history = `${values.numInt1} / ${values.numInt2}`;
    }
    if(showRes == true){document.getElementById('result').innerHTML = values.result;}
}

addEventListener('click', function(onClick){
        if(values.num1[0] == null){
            inputItem = onClick.target.innerHTML;
            if(inputItem <= 9){
                values.num1[0] = inputItem;
            };
        } else {
            inputItem = onClick.target.innerHTML;
            if(inputItem <= 9){
                // make number switch when operator is present
                if(values.operator == null){
                    values.num1.push(Number(inputItem));
                }                
                if(values.operator != null){
                    values.num2.push(Number(inputItem));
                }
            };
            if(inputItem == "+" || inputItem == "-" || inputItem == "/" || inputItem == "*"){
                values.operator = inputItem;
            }
            if(inputItem == "CE"){
                fullClear()
            }
            if(inputItem == "="){
                // r/theyDidTheMath
                showRes = true;
                calculate();
            }
    }
});

addEventListener('click', function(e){
    // Write out number 1
    if(values.num1 != null && values.operator == null){
        values.numInt1 = '';
        for(var i = 0; i < values.num1.length; i++){
            values.numInt1 = values.numInt1 + values.num1[i]
        }
        document.getElementById('result').innerHTML = values.numInt1;
    } 
    // Write out number 2 
    else if(values.operator != null && showRes == false) {
        values.numInt2 = '';
        for(var i = 0; i < values.num2.length; i++){
            values.numInt2 = values.numInt2 + values.num2[i]
        }
        document.getElementById('result').innerHTML = values.numInt1 + values.operator + values.numInt2;  
    } 
    // Write out of result exists
    else if(values.result != null && values.operator != null) {
        values.numInt1 = Number(values.result);
        softClear();
    }
    document.getElementById('history').innerHTML = values.history;
    console.log(values)
    console.log(showRes)
});