// -------------- FUNCTIONS --------------
/**
 * Get player turn 
 * @returns {string} a sentence with player turn
 */

function getPlayerTurn(){
    return `Your turn player ${counter%2+1} !`; 
}

function displayPlayerTurn(){
    document.getElementById('playerTurn').innerText = getPlayerTurn();
}

// -------------- SCRIPT -------------------


//select every elements with list-itm class
const boxes = document.querySelectorAll(".list-itm");
// Initialize a counter
let counter = 0;

displayPlayerTurn();

//for each boxes 
boxes.forEach(function(box){

    //execute the code when we click on the box
    box.addEventListener('click', function(event){
        
        //if the box is empty 
        if (this.innerHTML === ""){ 

            
            // if the counter is even then add a circle otherwise add a cross
            if (counter % 2 === 0) {
                // add circle in box
                this.innerHTML = "⭕";
            }
            else {
                this.innerHTML = "❌"; //put a cross in the box
                // console.log("Player2"); 
            }
            counter++;
            displayPlayerTurn();
        }
    
    })
    
});
