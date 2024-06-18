//function getNames() {
//} ,setInterval 10
// misc de variaveis

var ambos = localStorage.getItem("ambos");
var valores = localStorage.getItem("preços");
var nomes = localStorage.getItem("nomes");
var money = localStorage.getItem("money");

    //pagina do item

    var ambos = localStorage.getItem("ambos");
    var valores = localStorage.getItem("preços");
    var nomes = localStorage.getItem("nomes");
    var money = localStorage.getItem("money");
    var nomeItemPagina = document.getElementsByClassName('item-title').item(0).textContent.trim()
    maiorProp = document.querySelector('html body div.container div.row.row-eq-height div.col-md-6.col-panel-padding div.panel.panel-info.panel-full-height div.table-responsive table.table.table-bordered tbody tr td').textContent.substr(1)
    var nomeItemPagina = document.getElementsByClassName('item-title').item(0).textContent.trim()
    var cancel = document.querySelector('html body div.container div.row.row-eq-height div.col-md-6.col-panel-padding div.panel.panel-info.panel-full-height div.panel-body.text-center.flex-center div div.buy-order-button-container button.btn.btn-primary.btn-sm')
    
    nomesS = nomes.split(',')
    quant = nomesS.indexOf(nomeItemPagina)
    valoresS = valores.split(',')[quant]
    ambosS = ambos.split(',')[quant]
    
    if (nomesS.indexOf(nomeItemPagina) === -1) 
      { 
        makeOne = document.createElement('BUTTON')
        makeOne.innerHTML = "Auto Buy Order";
        makeOne.onclick = createBuyOrder
        makeOne.style.backgroundColor = '#3498db';
        makeOne.style.color = '#ffffff';
        makeOne.style.padding = '6px 9px';
        makeOne.style.fontSize = '13px';
        makeOne.style.borderRadius = '3px';
        makeOne.style.border = '1px'
        makeOne.style.borderWidth = '2px'
        makeOne.style.borderColor = 'solid transparent'			
        makeOne.style.lineHeight = '1.5'
        document.querySelector('html body div.container div.panel.panel-info div.item-title-container div.item-buttons').appendChild(makeOne); 
      } 
        else 
      {
        
        painel = document.getElementsByClassName("panel panel-info panel-full-height")[1]
        painel.style.height = "275px"
          btn = document.createElement('meuVal')
          btn.innerHTML = ambosS
            painel.appendChild(btn);
        
         if (maiorProp !== valoresS) {
            maiorPropPlus = parseFloat(maiorProp +++ 0.01).toFixed(2)
            quantia = parseFloat(money / valoresS.substr(1)).toFixed(3).charAt(0)
             
            preçoPag = document.querySelector('html body div.container div.panel.panel-info div.flex-row div.col-3 div.auction-options div.current-bid div.current-bid-amount').textContent.trim().replaceAll(' each', '').substr(1)
            proçoMax = parseFloat(preçoPag - maiorPropPlus).toFixed(2)
             if (cancel == null)
            {
              document.querySelector('html body div.container div.row.row-eq-height div.col-md-6.col-panel-padding div.panel.panel-info.panel-full-height div.panel-body.text-center.flex-center div div.buy-order-button-container button.btn.btn-primary').click();
              document.querySelector('.buy-order-button-container > button:nth-child(1)').click();
              document.getElementById('buyorder-option-CREDIT').click();
              document.getElementById('buyOrderPrice').value = maiorPropPlus;
              document.getElementById('buyOrderAmount').value = quantia;
              document.getElementById('create-buy-order').click();    
            } 
              else if (cancel.textContent.trim() === 'Cancel this order')
            {
              cancel.click()
              document.querySelector('.buy-order-button-container > button:nth-child(1)').click();
              document.getElementById('buyorder-option-CREDIT').click();
              document.getElementById('buyOrderPrice').value = maiorPropPlus;
              document.getElementById('buyOrderAmount').value = quantia;
              document.getElementById('create-buy-order').click();
            } 
         }
      }
    
    function createBuyOrder(maiorPropPlus, quantia, cancel) 
      {
          if (cancel == null)
            {
              document.querySelector('html body div.container div.row.row-eq-height div.col-md-6.col-panel-padding div.panel.panel-info.panel-full-height div.panel-body.text-center.flex-center div div.buy-order-button-container button.btn.btn-primary').click();
              document.querySelector('.buy-order-button-container > button:nth-child(1)').click();
              document.getElementById('buyorder-option-CREDIT').click();
              document.getElementById('buyOrderPrice').value = maiorPropPlus;
              document.getElementById('buyOrderAmount').value = quantia;
              document.getElementById('create-buy-order').click();    
            } 
              else if (cancel.textContent.trim() === 'Cancel this order')
            {
              cancel.click()
              document.querySelector('.buy-order-button-container > button:nth-child(1)').click();
              document.getElementById('buyorder-option-CREDIT').click();
              document.getElementById('buyOrderPrice').value = maiorPropPlus;
              document.getElementById('buyOrderAmount').value = quantia;
              document.getElementById('create-buy-order').click();
            }  
      }