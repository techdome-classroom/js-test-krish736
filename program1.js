const dfs = (grid, i, j) => {
  if (
    i < 0 ||
    i >= grid.size ||
    j < 0 ||
    j >= grid[0].size ||
    grid[i][j] != "L"
  ) {
    return;
  }

  grid[i][j] = "W";
  dfs(grid, i + 1, j);
  dfs(grid, i - 1, j);
  dfs(grid, i, j + 1);
  dfs(grid, i, j - 1);
};

const getTotalIsles = function (grid) {
  // write your code here
  let output = 0;
  const n = grid.size
  const r = grid[0].size
  console.log(grid.size);

  while(n){
    console.log('1');
    n--;
  }
  for (let i = 0; i < grid.size; i++) {
    for (let j = 0; j < grid[0].size; j++) {
      if (grid[i][j] == "L") {
        output++;
        console.log(i,j);
        dfs(grid, i, j);
      }
    }
  }
  console.log(output);
  console.log(grid);
};

module.exports = getTotalIsles;

const grid = [
  ["L", "L", "L", "L", "W"],
  ["L", "L", "W", "L", "W"],
  ["L", "L", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
];

getTotalIsles(grid)


