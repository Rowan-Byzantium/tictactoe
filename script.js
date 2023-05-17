
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
 * @returns {Element} the new li element
 */
function createBox(row, col){
    const box = document.createElement("li");
    const grid = document.querySelector(".list");
    grid.appendChild(box);
    box.classList.add("list-itm");
    box.dataset.row = row;
    box.dataset.col = col;
    return box;
}

// -------------- SCRIPT -------------------
/**
 * 0 = Empty
 * 1 = player1
 * 2 = player2
 */
const arrayBoxes = [
    [0, 0, 0], 
    [0, 0, 0], 
    [0, 0, 0]
];

const boxes = [];

//Call createbox function for each column of each row
for (const row in arrayBoxes){
    for (const col in arrayBoxes[row]){
        boxes.push(createBox(row, col));
    }
}

// Initialize a counter
let counter = 0;

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
            arrayBoxes[this.dataset.row][this.dataset.col] = 1;
        }
        else {
            this.innerHTML = "❌"; //put a cross in the box
            arrayBoxes[this.dataset.row][this.dataset.col] = 2;
        }
        // compare 1st line's contents
        if (arrayBoxes[0][0] === arrayBoxes[0][1] && arrayBoxes[0][1] === arrayBoxes[0][2] && arrayBoxes[0][0] !== 0){
            console.log("gagnéééé");
        }
        
        counter++;
        displayPlayerTurn();
    })
});
