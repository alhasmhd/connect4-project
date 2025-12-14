// Für Praktikum 10 Aufgabe 2 Abgabe
function connect4Winner(player, board) {
    const rows = 6
    const cols = 7
    
    // Horizontal
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols - 3; col++) {
            if (board[row][col] === player &&
                board[row][col + 1] === player &&
                board[row][col + 2] === player &&
                board[row][col + 3] === player) {
                return true
            }
        }
    }
    
    // Vertikal
    for (let row = 0; row < rows - 3; row++) {
        for (let col = 0; col < cols; col++) {
            if (board[row][col] === player &&
                board[row + 1][col] === player &&
                board[row + 2][col] === player &&
                board[row + 3][col] === player) {
                return true
            }
        }
    }
    
    // Diagonal (links oben nach rechts unten)
    for (let row = 0; row < rows - 3; row++) {
        for (let col = 0; col < cols - 3; col++) {
            if (board[row][col] === player &&
                board[row + 1][col + 1] === player &&
                board[row + 2][col + 2] === player &&
                board[row + 3][col + 3] === player) {
                return true
            }
        }
    }
    
    // Diagonal (rechts oben nach links unten)
    for (let row = 0; row < rows - 3; row++) {
        for (let col = 3; col < cols; col++) {
            if (board[row][col] === player &&
                board[row + 1][col - 1] === player &&
                board[row + 2][col - 2] === player &&
                board[row + 3][col - 3] === player) {
                return true
            }
        }
    }
    
    return false
}

module.exports = { connect4Winner }