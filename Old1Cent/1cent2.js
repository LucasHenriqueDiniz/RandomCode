var botao = document.querySelectorAll('.btn-primary')[15];
var botao2 = document.querySelectorAll('.btn-primary')[14];
var botao3 = document.querySelectorAll('.btn-primary')[13];
//var setPrice = document.querySelectorAll('.setPriceBtn');

body = document.querySelector('body');
    body.style.backgroundImage = 'url(https://backpack.tf/images/bricks_440.jpg)';
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "2400px";
    body.style.backgroundAttachment = "fixed";
//    body.style.color = 'white';
price = document.getElementsByClassName('current-bid-amount');
    price[0].style.fontSize = "60x";
    price[0].style.fontFamily = "Arial";
    price[0].style.fontWeight = "700";
avaible = document.getElementsByClassName('current-bids');
    avaible[0].style.fontSize = "60px";
    avaible[0].style.fontFamily = "Arial";
    avaible[0].style.fontWeight = "600";

/*
switch(botao.getAttribute('onclick')) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}*/

    if (botao.getAttribute('onclick') === "MPTF.BuyOrder.CreateModal.Show()") {
      botao.onclick = preto
    } else if (botao2.getAttribute('onclick') === "MPTF.BuyOrder.CreateModal.Show()") {
      botao2.onclick = preto
    } else if (botao3.getAttribute('onclick') === "MPTF.BuyOrder.CreateModal.Show()") {
      botao3.onclick = preto
    } else if (botao.hasAttribute('id') && botao2.hasAttribute('id') && botao3.hasAttribute('id')){
      alert("Guess what?")
    }

function preto () {
  var highValueUltraPlus
//price
if (document.getElementsByTagName('td')[0].textContent.substr(1) === "uality")
{
      highValue = document.getElementsByTagName('td')[10].textContent.substr(1)
        highValueUltraPlus = parseFloat(highValue +++ 0.01).toFixed(2)
}
else if (document.getElementsByTagName('td')[0].textContent.substr(1) !== "uality")
{
      highValue = document.getElementsByTagName('td')[0].textContent.substr(1)
        highValueUltraPlus = parseFloat(highValue +++ 0.01).toFixed(2)

        if (highValueUltraPlus === 'NaN')
        { 
          highValueUltraPlus = '0.01'
        }
}

  document.getElementById('buyorder-option-CREDIT').click();
      document.getElementById('buyOrderPrice').value = highValueUltraPlus;
//value
 if (highValueUltraPlus === '0.01') {
      document.getElementById('buyOrderAmount').value = '55';
 } else if (highValueUltraPlus < '0.11') {
  document.getElementById('buyOrderAmount').value = '10';
 } else if (highValueUltraPlus < '0.51') {
  document.getElementById('buyOrderAmount').value = '5';
 } else {
  document.getElementById('buyOrderAmount').value = '1';
 }
      document.getElementById('create-buy-order').click();
}


//    backpack.tf
/*
bumplist = document.getElementsByClassName('btn btn-xs btn-bottom btn-default listing-relist');
placeListing = document.getElementsByClassName('btn btn-primary btn-lg place-listing');


var bumplist[0] = i;
for (i = 0; i < 30; i++) {
  relist
}

function relist (bump, placeListing) {
  bumplist[1]click()
  placeListing.click()
}

teste = document.getElementsByClassName('btn btn-xs btn-bottom btn-default listing-relist listing-bump')[0].click()

setTimeout(function() { unpause(); }, 30min);
funcion unpause = {

https://marketplace.tf/buyorders
MPTF.BuyOrder.MassManage('CREDIT', 'UNPAUSE')
every 30min

maybe document.getElementsByClassName('btn btn-success btn-sm')[1]

///////////////////////

https://marketplace.tf/buyorders?all=1

Name = document.getElementsByClassName('item-html-name')
for (var i = 0; i < Name.length; i++) { console.log( Name[i].textContent ); }


//

for (i = 0; i < 1000; i++) {
  setDelay(i);
}
function setDelay(i) {
  setTimeout(function(){
    document.getElementsByClassName('btn btn-sm btn-primary setPriceBtn')[i].click();
    document.getElementById('set-price-item-transfer-lowest').click();
    document.getElementsByClassName('btn btn-primary')[3].click();
  }, 10000);
}
*/

/*setTimeout(function ohNo(){
for (i = 0; i < 1000; i++) {
  document.getElementsByClassName('btn btn-sm btn-primary setPriceBtn')[i].click()
  document.getElementById('set-price-item-transfer-lowest').click()
  document.getElementsByClassName('btn btn-primary')[3].click()
  console.log(i)
  }
}, 10000);

ass.forEach(element => ass.style.backgroundColor = "white"));

for (i = 0; i < 30; i++) {
    ass = document.getElementsByClassName('item-box appid-440')[i]
      ass.style.backgroundColor = "white"}

const Action = {
  powerOn()  { alert("damn"); }
}

const keyAction = {
  w: { keydown: Action.powerOn }
}

const keyHandler = (ev) => {
    if (ev.repeat) return;                             
    if (!(ev.key in keyAction) || !(ev.type in keyAction[ev.key])) return;
    keyAction[ev.key][ev.type]();
  };

document.querySelector('body').onkeydown = function(){
  if (e.keyCode == 13)
  botao.click()
};
*/