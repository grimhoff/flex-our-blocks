function removeBox(id) {
    var element = document.querySelector(id);
    element.remove();
}

function convert(element) {
    console.log(element.value)
    for(var i=0; i<8; i++) {
        var temp = document.querySelector("#temp" + i);
        var tempVal = parseInt(temp.innerText);
        if(element.value == "°F") {
            temp.innerText = c2f(tempVal);
        } else {
            temp.innerText = f2c(tempVal);
        }
    }
}

function c2f(temp) {
    return Math.round(1.8 * temp + 32);
}

function f2c(temp){
    return Math.round((temp - 32) / 1.8);
}