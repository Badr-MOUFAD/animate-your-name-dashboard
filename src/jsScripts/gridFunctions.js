// to initilize a grid
export function initGrid(nbRs, nbCs) {
  // init a grid full of 0
  const grid = [];

  for (let i = 0; i < nbRs; i++) {
    const row = [];

    for (let j = 0; j < nbCs; j++) {
      row.push(0);
    }

    grid.push(row);
  }

  return grid;
}

// transform grid from arr to string
export function gridToString(arr) {
  const [n, m] = [arr.length, arr[0].length];

  let stringArr = "[\n";

  for (let i = 0; i < n; i++) {
    let rowString = "[";

    for (let j = 0; j < m - 1; j++) {
      rowString += `${String(arr[i][j])}, `;
    }

    rowString += `${arr[i][m - 1]}]\n`;

    stringArr += rowString + ",";
  }

  stringArr += "]";

  return stringArr;
}
