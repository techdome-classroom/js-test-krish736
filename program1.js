const dfs = (grid, i, j) => {
  if (
    i < 0 ||
    i >= grid.size ||
    j < 0 ||
    j >= grid[0].size ||
    grid[i][j] != "1"
  ) {
    return;
  }

  grid[i][j] = "0";
  dfs(grid, i + 1, j);
  dfs(grid, i - 1, j);
  dfs(grid, i, j + 1);
  dfs(grid, i, j - 1);
  console.log(grid);
};

const getTotalIsles = function (grid) {
  // write your code here
  let output = 0;

  for (let i = 0; i < grid.size; i++) {
    for (let j = 0; j < grid[0].size; j++) {
      if (grid[i][j] == "1") {
        output++;
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