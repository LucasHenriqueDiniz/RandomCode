node2 = document.createElement('cu');
node2.type = 'button';
node2.name = 'sal';
node2.innerHTML = 'AUTOCREATE';
node2.border = '10';
node2.onclick = teste;

function teste() {
    MP.BuyOrder.CreateModal.Show()
}

   node2.addEventListener('click', function() {
        MP.BuyOrder.CreateModal.Show()
    })

document.getElementsByClassName('panel-body text-center flex-center')[0].appendChild(node2);
