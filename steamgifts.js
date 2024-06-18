var i = 1;
Pontos = document.querySelector('html body header.pinned nav div.nav__right-container div.nav__button-container a.nav__button.nav__button--is-dropdown span.nav__points').textContent;
Botao = document.getElementsByClassName('btnSingle');

document.getElementsByClassName('pinned-giveaways__button')[0].click()
function DOIT(Botao, i, Pontos) {
    do {
    console.log(Pontos);
    if (Botao[i].value === 'Join'){
 Botao[i].click();
  i++;
  console.log(i)
    } else if (Botao[i].value === 'Leave' || Botao[i].value === 'Not enough points'){
        i++;
        console.log(i)
    }
    }
    while(Pontos >= 0)
    
}

do {DOIT}
while (Pontos => 0)
