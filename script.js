//⭕
//select every elements with list-itm class
const boxes = document.querySelectorAll(".list-itm");
// Initialize a counter
let counter = 0;


//for each boxes 
boxes.forEach(function(box){

    //execute the code when we click on the box
    box.addEventListener('click', function(event){
        
        //if the box is empty 
        if (this.innerHTML === ""){ 
            counter++;
            console.log(counter);
            this.innerHTML = "❌"; //put a cross in the box
        }
    
    })
    
});
