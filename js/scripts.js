console.log('int ok');

const containerGrid = document.getElementById('container-grid');

for (let i = 1 ; i <= 100 ; i++){
    const newCell = document.createElement('div');
    newCell.classList.add('cell');
    newCell.innerHTML = i;
    containerGrid.append(newCell);

    newCell.addEventListener('click',
        function () {
            if(newCell.classList.contains('cell-active')){
                newCell.classList.remove('cell-active');
                console.log('Hai cliccato su ', i);
            }
            else{
                newCell.classList.add('cell-active');
                console.log('Hai cliccato su ', i);

            }
        }
    )
}

