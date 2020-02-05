document.getElementById('inS').onclick = function() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    document.getElementById('result').innerHTML = Math.pow(num1, num2);
};