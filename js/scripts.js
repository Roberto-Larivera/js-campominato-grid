console.log('int ok');

const containerGrid = document.getElementById('container-grid');
console.log('containerGrid',containerGrid);

const submitStart = document.getElementById('submit-start');

submitStart.addEventListener('click',                   // click su start

    function(){                                         // click su start
        const selectionDif = document.getElementById('select-difficulty').value;
        console.log('selectionDif',selectionDif);
        
        if(selectionDif == 'easy'){
            console.log('Hai inserito EASY');
        }
        else if(selectionDif == 'medium'){
            console.log('Hai inserito MEDIUM');
        }
        else if(selectionDif == 'hard'){
            console.log('Hai inserito HARD');
        }
        else{
            alert('Seleziona una difficoltà')
        }


        // funzione principale
        const newCell = createCellGrid(containerGrid);
        

    }                                                   // fine click su start
)                                                       // fine click su start


function createCellGrid(containerGrid){
    containerGrid.innerHTML = "";                       //serve per svuotare il div prima di doverlo riempire
    for (let i = 1 ; i <= 100 ; i++){
        
        const newCell = document.createElement('div');
        newCell.classList.add('cell');
        newCell.innerHTML = i;
        containerGrid.append(newCell);


        const controlCellActive = controlCellActive (newCell);
        /*
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
            )*/

    }
}

function controlCellActive (newCell){                          //controllo click per cella attiva
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