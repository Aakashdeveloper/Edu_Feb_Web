var url = "https://api.exchangeratesapi.io/latest?base="

//es5

/*function convert(){
    var base = document.getElementById('base').value;
    var out = document.getElementById('out').value;
    var amount = document.getElementById('amount').value;
    fetch(`${url}${base}`)
    .then((res) => res.json())
    .then((data) => {
        var final = data.rates[out];
        final = final*amount;
        var result =`Converted value of ${amount}${base} is ${final}${out}`;
        document.getElementById('output').innerText=result
    })
}*/

//es6
async function convert(){
    var base = document.getElementById('base').value;
    var out = document.getElementById('out').value;
    var amount = document.getElementById('amount').value;
    let response = await fetch(`${url}${base}`)
    var data = await response.json();
    var final = data.rates[out];
    final = final*amount;
    var result =`Converted value of ${amount}${base} is ${final}${out}`;
    document.getElementById('output').innerText=result
}