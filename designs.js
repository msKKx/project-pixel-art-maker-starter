let size = document.getElementById('sizePicker'); //select size 
let grid = document.getElementById('pixelCanvas'); // select pixel canvas
let height = 0; // select height 
let width = 0; // select width 

function makeGrid(height, width) { // function, that creates a canvas of the size set by the user
    for (i = 0; i < height; i++) {
        var row = grid.insertRow(i); // row of the table
        for (j = 0; j < width; j++) {
            var cell = row.insertCell(j); // cell of the table 
            cell.addEventListener('click', function (event) { // event, that colors the pixel in the grid, if the user clicks on it
                let color = document.getElementById('colorPicker').value; // select color
                event.target.style.backgroundColor = color; // change background color 
            })
        }
    }
}

size.addEventListener('submit', function (event) {//event, that calls the makeGrid function, if the submit button is pressed
    event.preventDefault();
    for (i=0; i< height; i++){
        grid.deleteRow(i);
    }
    height = document.getElementById('inputHeight').value; // select height 
    width = document.getElementById('inputWidth').value; // select width 
    makeGrid(height, width);
})

