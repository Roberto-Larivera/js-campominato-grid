console.log('int ok');

const containerGrid = document.getElementById('container-grid');
console.log('containerGrid',containerGrid);
const submitStart = document.getElementById('submit-start');

submitStart.addEventListener('click',                   // click su start

    function(){                                         // click su start
        if(containerGrid.innerHTML == ""){
            console.log('La griglia è VUOTA')
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
        }
        else{
            console.log('La griglia è PIENA, verrà svuotata e poi riempita di nuovo')
            containerGrid.innerHTML = "";
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
        }

        

    }                                                   // fine click su start

)                                                       // fine click su start


