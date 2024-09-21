function validTicTacToe(board: string[]): boolean {
    let [xCount, oCount] = [0, 0];
    let columns = [["   "], ["   "], ["   "]];
    let diagonals: string[][] = [[], []];

    const containsInValidSeq = (arr: string[]) => arr.includes("XXX") && arr.includes("OOO");

    const isRowInValid = containsInValidSeq(board);
    if (isRowInValid) return false;

    for (let i = 0; i < board.length; i++) {
        const row = board[i];
        for (let j = 0; j < row.length; j++) {
            const move = row[j];
            xCount = move === "X" ? xCount + 1 : xCount;
            oCount = move === "O" ? oCount + 1 : oCount;
            columns[j][i] = move;
            if (i == j) {
                diagonals[0].push(move);
            }
            if ((i == 0 && j == 2) || (i == 1 && j == 1) || (i == 2 && j == 0)) {
                diagonals[1].push(move);
            }
        }
    }

    const finalColumns = columns.map((col) => col.join(""));
    const finalDiagonals = diagonals.map((diagonal) => diagonal.join(""));

    const diff = xCount - oCount;

    if (board.includes("XXX") && diff < 1) return false; // having valid XXX row and more O
    if (diff < 0 || diff > 1) return false; // O can not be greater than X, first character X
    if (containsInValidSeq(finalColumns)) return false; // has invalid column seq

    if (containsInValidSeq(finalDiagonals)) return false; // has invalid diagonal seq
    if (finalDiagonals.includes("OOO") && xCount >= oCount) return false;
    if (finalDiagonals.includes("XXX") && xCount <= oCount) return false;

    return true;
}

console.clear();
const board = ["XOO", "OX ", "  X"];
// XOO
// OX
//   X

// 00 11 22
// 02 11 20
const res_tic_tac = validTicTacToe(board);
console.log(res_tic_tac);
