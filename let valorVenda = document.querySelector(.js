let valorVenda = document.querySelector("#content > div.row > div:nth-child(1) > div > div > span.important-text > span").textContent.slice(1)
let maiorProposta = document.querySelector("#content > div:nth-child(4) > div > div > div.col-xl-8.col-lg-5.mt-md-3 > table > tbody > tr:nth-child(2) > td:nth-child(1)").textContent.slice(1)
let Caixa = document.querySelector("#content > div:nth-child(4) > div > div > div.col-xl-4.col-lg-7")
let RemoveButton = document.querySelector("#content > div:nth-child(4) > div > div > div.col-xl-4.col-lg-7 > form > button")
// var Quantidade = ''

if (valorVenda === 0.01) { 
    Quantidade = 15
} else if (valorVenda <= 0.03 ) {
    Quantidade = 10
} else if (valorVenda <= 0.05 ) {
    Quantidade = 5
} else if (valorVenda <= 0.25) {
    Quantidade = 3
} else {
    Quantidade = 1 
}

function umCentOrder () {
    document.querySelector("#content > div:nth-child(4) > div > div > div.col-xl-4.col-lg-7 > div.form-group > input").value = 15
    document.querySelector("#content > div:nth-child(4) > div > div > div.col-xl-4.col-lg-7 > div.input-group.mb-3 > input").value = 0.01
}

function plusOneCent () {

    document.querySelector("#content > div:nth-child(4) > div > div > div.col-xl-4.col-lg-7 > div.form-group > input").value = Quantidade
    document.querySelector("#content > div:nth-child(4) > div > div > div.col-xl-4.col-lg-7 > div.input-group.mb-3 > input").value = (parseFloat(maiorProposta) + parseFloat(0.01)) 
}

var AutoOrder = document.createElement('button');
    AutoOrder.id = "AutoOrder";
    AutoOrder.innerHTML = "Auto Order"
    AutoOrder.className = "btn btn-primary AutoOrder";
    AutoOrder.setAttribute("style", "margin-top: 15px;")
        Caixa.appendChild(AutoOrder);

        AutoOrder.addEventListener("click", umCentOrder);

var centOrder = document.createElement('button');
    centOrder.id = "1centOrder";
    centOrder.className = "btn btn-primary 1centOrder";
    centOrder.innerHTML = "1 cent order"
    centOrder.setAttribute("style", "margin-top: 15px;")
        Caixa.appendChild(centOrder); 

        centOrder.addEventListener("click", plusOneCent);