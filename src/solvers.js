/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

// O(n * n^n) => recursive call within for loop
window.findNRooksSolution = function(n) {
  let board = new Board({n: n});
  let foundSolution = false;

  var nRooks = function(r) {
    if (r === n) {
      foundSolution = true;
      return;
    }
    for (let c = 0; c < n; c++) {
      board.togglePiece(r, c);
      if (!board.hasAnyRooksConflicts()) {
        nRooks(r + 1);
      }
      if (foundSolution) {
        return;
      }
      board.togglePiece(r, c);
    }
  };
  nRooks(0);
  return board.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other

// O(n * n^n) => recursive call within for loop
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  let board = new Board({n: n});

  var nRooks = function (r) {
    if (r === n) {
      solutionCount++;
      return;
    }
    let row = board.get(r);
    for (var c = 0; c < n; c++) {
      board.togglePiece(r, c);
      if (board.hasAnyRooksConflicts()) {
        board.togglePiece(r, c);
        continue;
      }
      nRooks(r + 1);
      board.togglePiece(r, c);
    }
  };

  nRooks(0);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other

// O(n * n^n) => recursive call within for loop
window.findNQueensSolution = function(n) {

  let board = new Board({n: n});

  if (n === 0) { return board.rows(); }
  if (n === 1) {
    board.togglePiece(0, 0);
    return board.rows();
  }

  var foundSolution = false;
  var nQueens = function (r) {
    if (r === n) {
      foundSolution = true;
      return;
    }

    for (var c = 0; c < n; c++) {
      board.togglePiece(r, c);
      if (!board.hasAnyQueensConflicts()) {
        nQueens(r + 1);
      }
      if (foundSolution) {
        return;
      }
      board.togglePiece(r, c);
    }
  };

  nQueens(0);
  return board.rows();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other

// O(n * n^n) => recursive call within for loop
window.countNQueensSolutions = function(n) {

  var solutionCount = 0;
  let board = new Board({n: n});

  var nQueens = function (r) {
    if (r === n) {
      solutionCount++;
      return;
    }
    let row = board.get(r);
    for (var c = 0; c < n; c++) {
      board.togglePiece(r, c);
      if (board.hasAnyQueensConflicts()) {
        board.togglePiece(r, c);
        continue;
      }
      nQueens(r + 1);
      board.togglePiece(r, c);
    }
  };

  nQueens(0);
  return solutionCount;
};
