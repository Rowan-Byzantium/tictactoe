
// -------------- FUNCTIONS --------------
/**
 * Get player turn 
 * @returns {string} a sentence with player turn
 */
function getPlayerTurn() {
    return `Your turn player ${counter % 2 + 1} !`;
}


/**
 * 
 * Display player turn
 *
 */
function displayPlayerTurn() {
    document.getElementById('playerTurn').innerText = getPlayerTurn();
}

/**
 * Create li in HTML (box) with dataset row & col
 * @param {number} row - row number in the grid
 * @param {number} col - column number in the grid
 */
function createBox(row, col){
    const box = document.createElement("li");
    const grid = document.querySelector(".list");
    grid.appendChild(box);
    box.classList.add("list-itm");
    box.dataset.row = row;
    box.dataset.col = col;
}

// -------------- SCRIPT -------------------
/**
 * 0 = Empty
 * 1 = player1
 * 2 = player2
 */
const arrayBoxes = [
    [0, 0, 4], 
    [0, 7, 0], 
    [11, 0, 0]
];



//select every elements with list-itm class
const boxes = document.querySelectorAll(".list-itm");
// Initialize a counter
let counter = 0;

console.log(arrayBoxes[2][0]);
displayPlayerTurn();

//for each boxes 
boxes.forEach(function (box) {

    //execute the code when we click on the box
    box.addEventListener('click', function (event) {

        //if the box is not empty , stop.
        if (this.innerHTML !== "") return;
        
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
    })
});
