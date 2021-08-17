function sameRow(a, b) {
  return Math.floor(a / 9) === Math.floor(b / 9);
}

function sameCol(a, b) {
  return a % 9 === b % 9;
}

function sameBox(a, b) {
  return (
    Math.floor(a / 27) === Math.floor(b / 27) &&
    Math.floor((a % 9) / 3) === Math.floor((b % 9) / 3)
  );
}

export { sameRow, sameCol, sameBox };