var botao = document.querySelectorAll('.btn-primary')[15];
var botao2 = document.querySelectorAll('.btn-primary')[14];
var botao3 = document.querySelectorAll('.btn-primary')[13];

//customize
body = document.querySelector('body');
    body.style.backgroundImage = 'url(https://backpack.tf/images/bricks_440.jpg)';
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "2400px";
    body.style.backgroundAttachment = "fixed";
price = document.getElementsByClassName('current-bid-amount');
    price[0].style.fontSize = "60x";
    price[0].style.fontFamily = "Arial";
    price[0].style.fontWeight = "700";
avaible = document.getElementsByClassName('current-bids');
    avaible[0].style.fontSize = "60px";
    avaible[0].style.fontFamily = "Arial";
    avaible[0].style.fontWeight = "600";

//botão
if (botao.getAttribute('onclick') === "MPTF.BuyOrder.CreateModal.Show()") {
    botao.onclick = preto
  } else if (botao2.getAttribute('onclick') === "MPTF.BuyOrder.CreateModal.Show()") {
    botao2.onclick = preto
  } else if (botao3.getAttribute('onclick') === "MPTF.BuyOrder.CreateModal.Show()") {
    botao3.onclick = preto
  } else if (botao.hasAttribute('id') && botao2.hasAttribute('id') && botao3.hasAttribute('id')){
    alert("Guess what?")
  }

//atualiza o valor minimo
function preto () {
    var highValueUltraPlus

if (document.getElementsByTagName('td')[0].textContent.substr(1) === "uality")
  {
        highValue = document.getElementsByTagName('td')[10].textContent.substr(1)
    		highValueUltraPlus = parseFloat(highValue +++ 0.01).toFixed(2)
  }
else if (document.querySelectorAll('.text-center')[1].textContent.split(' ')[2] === "currently")
	{
 		highValueUltraPlus = '0.01'        
	}
else 
{
  highValueUltraPlus = '0.01'
  alert('ocorreu merda here we go again')
}
    document.getElementById('buyorder-option-CREDIT').click();
        document.getElementById('buyOrderPrice').value = highValueUltraPlus;
        document.getElementById('buyOrderAmount').value = '1';
            document.getElementById('create-buy-order').click();

  }