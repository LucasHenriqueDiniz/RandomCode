painel = document.getElementsByClassName("panel panel-info panel-full-height")[1]
painel.style.height = "275px"
  btn = document.createElement('meuVal')
  btn.innerHTML = ambosList
  painel.appendChild(btn);

//teste = document.getElementById('clock').textContent
//localStorage.setItem('relogio', teste)
//localStorage.relogio
//sessionStorage.setItem
//
//var itemName = document.getElementsByClassName('item-html-name')[1].textContent;
//itemName
//function getNames() {
//  for (var nu = 0; nu < 500; nu++) {
//  console.log(nu)
//	 }
//} ,setInterval 10

////nome item pagiina

nomeItemPagina = document.getElementsByClassName('item-title').item(0).textContent.trim()

//nomes.split(',')[0]

if (nomes.includes(nomeItemPagina)) {
  //procurar valor do item
  } else {
    console.log('2')
  }

/////
//  itemName = document.getElementsByClassName('item-html-name')[i]
// for (var i = 0; i < Name.length; i++) { console.log( Name[i].textContent ); }

var i;
var s;
var names = []
var preços = []
var ambos = []

elements = document.getElementsByClassName('item-html-name')
valores = document.querySelectorAll('td')

  for (i = 0; i < 25; i++) {
    names.push(elements[i].textContent)
  }

var nameList = names.join()

  for (s = 2; s < 125; s+=5) {
    preços.push(valores[s].textContent.trim())
}

var preçosList = preços.join()
/* 
function DUP (names, preços) {
  for (eoq = 0; eoq < 250; eoq++)
       {
         ambos.push(names[eoq] +++ preços[eoq])
       }
  var ambosList = ambos.join()
};
*/
//////////////////////////////////////////

  for (eoq = 0; eoq < 25; eoq++)
       {
         ambos.push(names[eoq] + " is for " + preços[eoq])
       }
  var ambosList = ambos.join()
  ambosList



  //pagiina dos props

  var i;
  var s;
  var names = []
  var preços = []
  var ambos = []
  
  money = document.querySelector('div.value-display:nth-child(6) > span:nth-child(1)').textContent.substr(1)
  elements = document.getElementsByClassName('item-html-name')
  valores = document.querySelectorAll('td')
  
    for (i = 0; i < 500; i++) {
      names.push(elements[i].textContent)
    }
  
  var nameList = names.join()
    localStorage.setItem('nomes', nameList)
  
    for (s = 2; s < 500; s+=5) {
      preços.push(valores[s].textContent.trim())
  }
  
  var preçosList = preços.join()
    localStorage.setItem('valores', preçosList)
  
  for (eoq = 0; eoq < 500; eoq++)
         {
           ambos.push(names[eoq] + " is for " + preços[eoq])
         }
    var ambosList = ambos.join()
    localStorage.setItem('ambos', ambosList)
    
// misc de variaveis

var ambos = localStorage.getItem("ambos");
var valores = localStorage.getItem("valores");
var nomes = localStorage.getItem("nomes");

//

  nomeItemPagina = document.getElementsByClassName('item-title').item(0).textContent.trim()

  var ambos = localStorage.getItem("ambos");
  var valores = localStorage.getItem("valores");
  var nomes = localStorage.getItem("nomes");
  
  gorila = nomes.split(',')
  
  tete = gorila.indexOf(nomeItemPagina)
  pyke = valores.split(',')[tete]

  painel = document.getElementsByClassName("panel panel-info panel-full-height")[1]
  painel.style.height = "275px"
    btn = document.createElement('meuVal')
    btn.innerHTML = pyke
    painel.appendChild(btn);

    //pagina do item

    maiorProp = document.querySelector('html body div.container div.row.row-eq-height div.col-md-6.col-panel-padding div.panel.panel-info.panel-full-height div.table-responsive table.table.table-bordered tbody tr td').textContent
    nomeItemPagina = document.getElementsByClassName('item-title').item(0).textContent.trim()
      var ambos = localStorage.getItem("ambos");
      var valores = localStorage.getItem("valores");
      var nomes = localStorage.getItem("nomes");

      //valoresS = valores.split(',')
      //ambosS = ambos.split(',')
      nomesS = nomes.split(',')
      quant = nomesS.indexOf(nomeItemPagina)
      valoresS = valores.split(',')[quant]
      ambosS = ambos.split(',')[quant]
    
      painel = document.getElementsByClassName("panel panel-info panel-full-height")[1]
      painel.style.height = "275px"
        btn = document.createElement('meuVal')
        btn.innerHTML = ambosS
          painel.appendChild(btn);
    
    if (maiorProp !== valoresS) {
      alert('maiorProp diferente do valoresS')
      hm = parseFloat(maiorProp.substr(1) +++ 0.01).toFixed(2)
      quantia = parseFloat(money / valoresS.substr(1)).toFixed(3).charAt(0)

      preçoPag = document.querySelector('html body div.container div.panel.panel-info div.flex-row div.col-3 div.auction-options div.current-bid div.current-bid-amount').textContent.trim().replaceAll(' each', '').substr(1)
      proçoMax = parseFloat(preçoPag - (10 * preçoPag / 100)).toFixed(2)

          cancel = document.querySelector('html body div.container div.row.row-eq-height div.col-md-6.col-panel-padding div.panel.panel-info.panel-full-height div.panel-body.text-center.flex-center div div.buy-order-button-container button.btn.btn-primary.btn-sm')
       
        if (cancel == null)
        {
          document.querySelector('.buy-order-button-container > button:nth-child(1)').click()
          document.getElementById('buyorder-option-CREDIT').click();
          document.getElementById('buyOrderPrice').value = hm
          document.getElementById('buyOrderAmount').value = quantia;
          document.getElementById('create-buy-order').click();    
        } 
        else if (cancel.textContent.trim() === 'Cancel this order')
        {
          cancel.click()
          document.querySelector('.buy-order-button-container > button:nth-child(1)').click()
          document.getElementById('buyorder-option-CREDIT').click();
          document.getElementById('buyOrderPrice').value = hm
          document.getElementById('buyOrderAmount').value = quantia;
          document.getElementById('create-buy-order').click();
        }
    } 
      else 
    {
        document.querySelector('html body div.container div.row.row-eq-height div.col-md-6.col-panel-padding div.panel.panel-info.panel-full-height div.table-responsive table.table.table-bordered tbody tr td').style.color = 'red'
    }