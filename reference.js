console.log("Script loaded");

// options popup

document.addEventListener("DOMContentLoaded", function() {
    const openPopupBtn = document.getElementById('open-popup');
    const closePopupBtn = document.getElementById('close-popup');
    const popup = document.getElementById('popup');

    console.log(openPopupBtn); // Debugging
    console.log(closePopupBtn); // Debugging
    console.log(popup); // Debugging

    openPopupBtn.addEventListener('click', function() {
      popup.style.display = 'block';
      console.log('Options button was clicked');
    });

    closePopupBtn.addEventListener('click', function() {
      popup.style.display = 'none';
    });

    // Close popup when clicking outside of it
    window.addEventListener('click', function(event) {
      if (event.target === popup) {
        popup.style.display = 'none';
      }
    });
});

//Link languages:

const optionsSelect = document.getElementById('language');

// optionsSelect.addEventListener('change', function() {
//   const selectedOption = optionsSelect.value;
//   console.log('Selected option:', selectedOption);
//   // You can perform any action based on the selected option here
// });


// Get references to the volume input, the volume value display, and the audio element
const volumeControl = document.getElementById('musicVolume');
const volumeValueDisplay = document.getElementById('volume-value');
const bgMusic = document.getElementById('bg-music');

// Add event listener to the volume input
volumeControl.addEventListener('input', function() {
  const volumeValue = volumeControl.value;
  volumeValueDisplay.textContent = volumeValue;
  
  // Set the volume of the audio element based on the value of the input
  bgMusic.volume = volumeValue / 100;
});

//Login PopUp

document.addEventListener("DOMContentLoaded", function() {
    const openPopupBtnL = document.getElementById('open-popupL');
    const closePopupBtnL = document.getElementById('close-popupL');
    const popupL = document.getElementById('popupL');
  
    openPopupBtnL.addEventListener('click', function() {
      popupL.style.display = 'block'; /* Show the popup */
    });
  
    closePopupBtnL.addEventListener('click', function() {
      popupL.style.display = 'none'; /* Hide the popup */
    });
  
    // Close popup when clicking outside of it
    window.addEventListener('click', function(event) {
      if (event.target === popupL) {
        popupL.style.display = 'none';
      }
    });
  });
  
//Leader Board Pop-up

document.addEventListener("DOMContentLoaded", function() {
  const openPopupBtnlb = document.getElementById('open-popup-lb');
  const closePopupBtnlb = document.getElementById('close-popup-lb');
  const popuplb = document.getElementById('popup-lb');

  console.log(openPopupBtnlb); // Debugging
  console.log(closePopupBtnlb); // Debugging
  console.log(popuplb); // Debugging

  openPopupBtnlb.addEventListener('click', function() {
    popuplb.style.display = 'block';
  });

  closePopupBtnlb.addEventListener('click', function() {
    popuplb.style.display = 'none';
  });

  // Close popup when clicking outside of it
  window.addEventListener('click', function(event) {
    if (event.target === popuplb) {
      popuplb.style.display = 'none';
    }
  });
});
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-auth.js';
import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-database.js';


// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAGxOXZNWDmwzUyyHlcQ4MsjdtHtXC5E00",
    authDomain: "castlecrawlers-f0369.firebaseapp.com",
    projectId: "castlecrawlers-f0369",
    storageBucket: "castlecrawlers-f0369.appspot.com",
    messagingSenderId: "137343873527",
    appId: "1:137343873527:web:d52d121d4d926a16fbbef2",
    databaseURL: "https://castlecrawlers-f0369-default-rtdb.firebaseio.com/"
};



// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Get Auth and Database instances
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

// Event listener for login button
document.getElementById('login-btn').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Sign in with email and password
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            alert('Login successful');
            // You can redirect to another page or perform other actions here
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
});

// Event listener for register button
document.getElementById('register-btn').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;

    // Create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            // Store additional user data in Realtime Database
            set(ref(database, 'users/' + user.uid), {
                email: user.email,
                username: username
            });
            alert('User registered successfully');
            // You can redirect to another page or perform other actions here
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
});

// DEPTH FIRST SEARCH MAZE IMPLEMENTATION IN JAVASCRIPT BY CONOR BAILEY

// Initialize the canvas
let maze = document.querySelector(".maze");
let ctx = maze.getContext("2d");
let generationComplete = false;

let current;
let goal;

class Maze {
    constructor(size, rows, columns) {
        this.size = size;
        this.columns = columns;
        this.rows = rows;
        this.grid = [];
        this.stack = [];
    }

    // Set the grid: Create new this.grid array based on number of instance rows and columns
    setup() {
        for (let r = 0; r < this.rows; r++) {
            let row = [];
            for (let c = 0; c < this.columns; c++) {
                // Create a new instance of the Cell class for each element in the 2D array and push to the maze grid array
                let cell = new Cell(r, c, this.grid, this.size);
                row.push(cell);
            }
            this.grid.push(row);
        }
        // Set the starting grid
        current = this.grid[0][0];
        this.grid[this.rows - 1][this.columns - 1].goal = true;
    }

    // Draw the canvas by setting the size and placing the cells in the grid array on the canvas.
    draw() {
        maze.width = this.size;
        maze.height = this.size;
        maze.style.backgroundImage = "url('MAZE/assets/background.jpg')"; // Replace 'your-background-image.jpg' with the path to your background image
        maze.style.backgroundSize = "cover";
        maze.style.backgroundPosition = "center";

        // Set the first cell as visited
        current.visited = true;
        // Loop through the 2d grid array and call the show method for each cell instance
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.columns; c++) {
                let grid = this.grid;
                grid[r][c].show(this.size, this.rows, this.columns);
            }
        }
        // This function will assign the variable 'next' to random cell out of the current cells available neighbouting cells
        let next = current.checkNeighbours();
        // If there is a non visited neighbour cell
        if (next) {
            next.visited = true;
            // Add the current cell to the stack for backtracking
            this.stack.push(current);
            // this function will highlight the current cell on the grid. The parameter columns is passed
            // in order to set the size of the cell
            current.highlight(this.columns);
            // This function compares the current cell to the next cell and removes the relevant walls for each cell
            current.removeWalls(current, next);
            // Set the nect cell to the current cell
            current = next;

            // Else if there are no available neighbours start backtracking using the stack
        } else if (this.stack.length > 0) {
            let cell = this.stack.pop();
            current = cell;
            current.highlight(this.columns);
        }
        // If no more items in the stack then all cells have been visted and the function can be exited
        if (this.stack.length === 0) {
            generationComplete = true;
            return;
        }

        // Recursively call the draw function. This will be called up until the stack is empty
        window.requestAnimationFrame(() => {
            this.draw();
        });
        //     setTimeout(() => {rd
        //       this.draw();
        //     }, 10);
    }
}

class Cell {
    constructor(rowNum, colNum, parentGrid, parentSize) {
        this.rowNum = rowNum;
        this.colNum = colNum;
        this.visited = false;
        this.walls = {
            topWall: true,
            rightWall: true,
            bottomWall: true,
            leftWall: true,
        };
        this.goal = false;
        this.hasKey = false; // Property to represent whether a key is present
        // parentGrid and parentSize remain the same
        // parentGrid is passed in to enable the checkneighbours method.
        // parentSize is passed in to set the size of each cell on the grid
        this.parentGrid = parentGrid;
        this.parentSize = parentSize;
    }

    checkNeighbours() {
        let grid = this.parentGrid;
        let row = this.rowNum;
        let col = this.colNum;
        let neighbours = [];

        // The following lines push all available neighbours to the neighbours array
        // undefined is returned where the index is out of bounds (edge cases)
        let top = row !== 0 ? grid[row - 1][col] : undefined;
        let right = col !== grid.length - 1 ? grid[row][col + 1] : undefined;
        let bottom = row !== grid.length - 1 ? grid[row + 1][col] : undefined;
        let left = col !== 0 ? grid[row][col - 1] : undefined;

        // if the following are not 'undefined' then push them to the neighbours array
        if (top && !top.visited) neighbours.push(top);
        if (right && !right.visited) neighbours.push(right);
        if (bottom && !bottom.visited) neighbours.push(bottom);
        if (left && !left.visited) neighbours.push(left);

        // Choose a random neighbour from the neighbours array
        if (neighbours.length !== 0) {
            let random = Math.floor(Math.random() * neighbours.length);
            return neighbours[random];
        } else {
            return undefined;
        }
    }

    // Wall drawing functions for each cell. Will be called if relevent wall is set to true in cell constructor
    drawTopWall(x, y, size, columns, rows) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + size / columns, y);
        ctx.stroke();
    }

    drawRightWall(x, y, size, columns, rows) {
        ctx.beginPath();
        ctx.moveTo(x + size / columns, y);
        ctx.lineTo(x + size / columns, y + size / rows);
        ctx.stroke();
    }

    drawBottomWall(x, y, size, columns, rows) {
        ctx.beginPath();
        ctx.moveTo(x, y + size / rows);
        ctx.lineTo(x + size / columns, y + size / rows);
        ctx.stroke();
    }

    drawLeftWall(x, y, size, columns, rows) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + size / rows);
        ctx.stroke();
    }

    // Highlights the current cell on the grid. Columns is once again passed in to set the size of the grid.
    highlight(columns) {
        let x = (this.colNum * this.parentSize) / columns + 1;
        let y = (this.rowNum * this.parentSize) / columns + 1;

        let img = new Image();
        img.src = 'MAZE/assets/character.png'; // Path to your character image
        img.onload = () => {
            ctx.drawImage(img, x, y, this.parentSize / columns - 3, this.parentSize / columns - 3);
        };
    }


    removeWalls(cell1, cell2) {
        // compares to two cells on x axis
        let x = cell1.colNum - cell2.colNum;
        // Removes the relevant walls if there is a different on x axis
        if (x === 1) {
            cell1.walls.leftWall = false;
            cell2.walls.rightWall = false;
        } else if (x === -1) {
            cell1.walls.rightWall = false;
            cell2.walls.leftWall = false;
        }
        // compares to two cells on x axis
        let y = cell1.rowNum - cell2.rowNum;
        // Removes the relevant walls if there is a different on x axis
        if (y === 1) {
            cell1.walls.topWall = false;
            cell2.walls.bottomWall = false;
        } else if (y === -1) {
            cell1.walls.bottomWall = false;
            cell2.walls.topWall = false;
        }
    }

    show(size, rows, columns) {
        let x = (this.colNum * size) / columns;
        let y = (this.rowNum * size) / rows;

        // Set the fill style with transparency
        ctx.strokeStyle = "#ffffff";
        ctx.fillStyle = "rgba(0, 0, 0, 0.1)"; // Adjust alpha value as needed (0.5 for 50% transparency)
        ctx.lineWidth = 2.5;

        // Check if the cell is the goal cell and all keys are collected
        if (this.goal && allKeysCollected()) {
            let img = new Image();
            img.src = 'MAZE/assets/opened.png'; // Path to your opened door image
            img.onload = () => {
                ctx.drawImage(img, x, y, size / columns, size / rows);
            };
        } else {
            // Draw walls if present
            if (this.walls.topWall) this.drawTopWall(x, y, size, columns, rows);
            if (this.walls.rightWall) this.drawRightWall(x, y, size, columns, rows);
            if (this.walls.bottomWall) this.drawBottomWall(x, y, size, columns, rows);
            if (this.walls.leftWall) this.drawLeftWall(x, y, size, columns, rows);

            // Fill the cell if visited
            if (this.visited) {
                ctx.fillRect(x + 1, y + 1, size / columns - 2, size / rows - 2);
            }

            // Fill the cell with a different color if it's the goal cell
            if (this.goal) {
                let img = new Image();
                img.src = 'MAZE/assets/closed.png'; // Path to your closed door image
                img.onload = () => {
                    ctx.drawImage(img, x, y, size / columns, size / rows);
                };
            }
        }

        // Render keys if present
        if (this.hasKey) {
            let img = new Image();
            img.src = 'MAZE/assets/key.png'; // Path to your key image
            img.onload = () => {
                ctx.drawImage(img, x, y, size / columns, size / rows);
            };
        }
    }

}

// Function to check if all keys are collected
function allKeysCollected() {
    // Count the number of keys collected
    let collected = 0;
    for (let r = 0; r < newMaze.rows; r++) {
        for (let c = 0; c < newMaze.columns; c++) {
            if (newMaze.grid[r][c].hasKey) {
                collected++;
            }
        }
    }
    // Return true if all keys are collected, false otherwise
    return collected === 0;
}

// Function to generate keys within the maze
function generateKeys(maze) {
    // Limit the number of keys to 5
    let numKeys = 5;

    for (let i = 0; i < numKeys; i++) {
        let row;
        let col;
        do {
            row = Math.floor(Math.random() * maze.rows);
            col = Math.floor(Math.random() * maze.columns);
        } while ((row === 0 && col === 0) || (row === maze.rows - 1 && col === maze.columns - 1) || maze.grid[row][col].hasKey);
        // Ensure keys don't spawn on start or end cell, or where another key already exists

        maze.grid[row][col].hasKey = true;
    }
    // Add a method to the Maze class to check if all keys are collected
    Maze.prototype.allKeysCollected = function () {
        for (let row of this.grid) {
            for (let cell of row) {
                if (cell.hasKey && !cell.collected) {
                    return false;
                }
            }
        }
        return true;
    };

    // Modify the move function to check if the player has reached the goal cell with all keys collected
    function move(e) {
        if (!generationComplete) return;
        let key = e.key;
        let row = current.rowNum;
        let col = current.colNum;

        switch (key) {
            case "ArrowUp":
                if (!current.walls.topWall) {
                    let next = newMaze.grid[row - 1][col];
                    current = next;
                    newMaze.draw();
                    current.highlight(newMaze.columns);
                    if (current.goal && newMaze.allKeysCollected()) {
                        // Check if all keys are collected and the goal is reached
                        // Move to the next level
                        nextLevel();
                    }
                }
                break;

            case "ArrowRight":
                if (!current.walls.rightWall) {
                    let next = newMaze.grid[row][col + 1];
                    current = next;
                    newMaze.draw();
                    current.highlight(newMaze.columns);
                    if (current.goal && newMaze.allKeysCollected()) {
                        nextLevel();
                    }
                }
                break;

            case "ArrowDown":
                if (!current.walls.bottomWall) {
                    let next = newMaze.grid[row + 1][col];
                    current = next;
                    newMaze.draw();
                    current.highlight(newMaze.columns);
                    if (current.goal && newMaze.allKeysCollected()) {
                        nextLevel();
                    }
                }
                break;

            case "ArrowLeft":
                if (!current.walls.leftWall) {
                    let next = newMaze.grid[row][col - 1];
                    current = next;
                    newMaze.draw();
                    current.highlight(newMaze.columns);
                    if (current.goal && newMaze.allKeysCollected()) {
                        nextLevel();
                    }
                }
                break;
        }
    }

    // Function to move to the next level
    function nextLevel() {
        // Implement logic to move to the next level
        // For example, increment a level counter and reload the page with the new level
        // You can also generate a new maze with increased difficulty
        alert("Congratulations! You completed the level!");
        location.reload(); // Reload the page for simplicity
    }

}
// Initialize your maze and set it up
// let newMaze = new Maze(700, 20, 20);
// newMaze.setup();
// generateKeys(newMaze); // Call the generateKeys function after setting up the maze
// newMaze.draw(); // Draw the maze

let form = document.querySelector("#settings");
let complete = document.querySelector(".complete");
let replay = document.querySelector(".replay");
let close = document.querySelector(".close");

let newMaze; // Define newMaze outside of any function scope

form.addEventListener("submit", generateMaze);
document.addEventListener("keydown", move);
replay.addEventListener("click", () => {
    location.reload();
});

close.addEventListener("click", () => {
    complete.style.display = "none";
});

function generateMaze(e) {
    e.preventDefault();

    // Generate the maze
    let mazeSize = 600; // Predefined maze size
    let number = 20; // Predefined rows/columns

    form.style.display = "none";

    newMaze = new Maze(700, 10, 10); // Assign newMaze within generateMaze function
    newMaze.setup();
    generateKeys(newMaze);
    newMaze.draw();
}

let collectedKeys = 0; // Global variable to keep track of collected keys

function move(e) {
    if (!generationComplete) return;
    let key = e.key;
    let row = current.rowNum;
    let col = current.colNum;

    let next;
    let nextCell;

    switch (key) {
        case "ArrowUp":
            if (!current.walls.topWall) {
                next = newMaze.grid[row - 1][col];
                nextCell = moveCharacter(next);
            }
            break;

        case "ArrowRight":
            if (!current.walls.rightWall) {
                next = newMaze.grid[row][col + 1];
                nextCell = moveCharacter(next);
            }
            break;

        case "ArrowDown":
            if (!current.walls.bottomWall) {
                next = newMaze.grid[row + 1][col];
                nextCell = moveCharacter(next);
            }
            break;

        case "ArrowLeft":
            if (!current.walls.leftWall) {
                next = newMaze.grid[row][col - 1];
                nextCell = moveCharacter(next);
            }
            break;
    }

    // Redraw the maze if the character moved to a new cell
    if (nextCell) {
        current = nextCell;
        newMaze.draw();
        current.highlight(newMaze.columns);

        // Check if all keys are collected and the player is at the goal cell
        if (current.goal && collectedKeys === 5) {
            complete.style.display = "block"; // Display completion message
            // Here you can proceed to the next level or perform any other action
        }
    }
}

function moveCharacter(nextCell) {
    // Check if the next cell has a key
    if (nextCell.hasKey) {
        // Collect the key
        collectedKeys++;
        nextCell.hasKey = false; // Remove the key from the cell
        return nextCell;
    }
    return nextCell;
}


