function appendNumber(num) {
    document.getElementById('result').value += num;
}

function appendSymbol(symbol) {
    document.getElementById('result').value += symbol;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    var currentResult = document.getElementById('result').value;
    document.getElementById('result').value = currentResult.slice(0, -1);
}

function calculate() {
    var result = eval(document.getElementById('result').value);
    document.getElementById('result').value = result;
}