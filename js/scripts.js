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
            // funzione principale
        createCellGrid(containerGrid,100,'cell-easy');                  //chiamata funzione principale
        
        }
        else if(selectionDif == 'medium'){
            console.log('Hai inserito MEDIUM');
            // funzione principale
        createCellGrid(containerGrid,81,'cell-medium');                  //chiamata funzione principale
        
        }
        else if(selectionDif == 'hard'){
            console.log('Hai inserito HARD');
            // funzione principale
        createCellGrid(containerGrid,49,'cell-hard');                  //chiamata funzione principale
        
        }
        else{
            alert('Seleziona una difficoltÃ ')
        }


        

    }                                                   // fine click su start
)                                                       // fine click su start


















function createCellGrid(containerGrid,numberN,difS){                 //funzione principale ---- creazione celle dentro griglia 
    containerGrid.innerHTML = "";                       //serve per svuotare il div prima di doverlo riempire
    for (let i = 1 ; i <= numberN ; i++){
        
        const newCell = document.createElement('div');
        newCell.classList.add('cell',difS);
        //newCell.classList.add(difS);
        newCell.innerHTML = i;
        containerGrid.append(newCell);

        controlCellActive (newCell, i);                   //chiamata controllo click per cella attiva

    }
}

function controlCellActive (newCell, i){                          //controllo click per cella attiva
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