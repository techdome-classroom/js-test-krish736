const dfs = (grid, i, j) => {
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[0].length ||
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

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == "L") {
        output++;
        dfs(grid, i, j);
      }
    }
  }
  return output;
};

module.exports = getTotalIsles;
