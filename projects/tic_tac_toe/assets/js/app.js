//Const and let

const statusDisplay = document.querySelector(".game-status");
let gameActive = true;
let currentPlayer = "X";
let gameState = ["","","","","","","","",""];
const winningMessage = () =>`Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

//Start the game
statusDisplay.innerHTML = currentPlayerTurn();


//Functions
function handleCellPlayed(){

}
function handlePlayerChange(){
    
}
function handleResultValidation(){
    
}
function handleCellClick(clickedCellEvent){
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(
        clickedCell.getAttribute('data-cell-index')
    );
    if (gameState[clickedCellIndex] !== "" || !gameActive){
        return;
    }
    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}
function handleRestartGame(){
    
}
//And finally we add our event listeners to the actual game cells, as well as our restart button
document.querySelectorAll(".cell").forEach(cell => cell.addEventListener("click", handleCellClick));
document.querySelector(".game-restart").addEventListener("click", handleRestartGame);