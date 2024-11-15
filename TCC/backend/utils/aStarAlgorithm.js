class Node {
    constructor(position, parent = null) {
      this.position = position;
      this.parent = parent;
      this.g = 0; // Cost from start to node
      this.h = 0; // Heuristic cost from node to end
      this.f = 0; // Total cost (g + h)
    }
  }
  
  const aStar = (start, end, grid) => {
    const openList = [];
    const closedList = [];
    const startNode = new Node(start);
    const endNode = new Node(end);
    openList.push(startNode);
  
    while (openList.length > 0) {
      let currentNode = openList.reduce((prev, curr) => (prev.f < curr.f ? prev : curr));
      if (currentNode.position === endNode.position && currentNode.position === endNode.position) {
        const path = [];
        let current = currentNode;
        while (current) {
          path.push(current.position);
          current = current.parent;
        }
        return path.reverse();
      }
  
      openList.splice(openList.indexOf(currentNode), 1);
      closedList.push(currentNode);
  
      const neighbors = getNeighbors(currentNode.position, grid);
      for (let neighborPosition of neighbors) {
        const neighborNode = new Node(neighborPosition, currentNode);
        if (closedList.find(node => node.position === neighborNode.position && node.position === neighborNode.position)) {
          continue;
        }
  
        neighborNode.g = currentNode.g + 1;
        neighborNode.h = heuristic(neighborNode.position, endNode.position);
        neighborNode.f = neighborNode.g + neighborNode.h;
  
        if (openList.find(node => node.position === neighborNode.position && node.position === neighborNode.position && node.g < neighborNode.g)) {
          continue;
        }
  
        openList.push(neighborNode);
      }
    }
  
    return [];
  };
  
  const getNeighbors = (position, grid) => {
    const [x, y] = position;
    const neighbors = [];
    if (grid[x - 1] && grid[x - 1][y]) neighbors.push([x - 1, y]);
    if (grid[x + 1] && grid[x + 1][y]) neighbors.push([x + 1, y]);
    if (grid[x][y - 1]) neighbors.push([x, y - 1]);
    if (grid[x][y + 1]) neighbors.push([x, y + 1]);
    return neighbors;
  };
  
  const heuristic = (pos0, pos1) => {
    const d1 = Math.abs(pos1 - pos0);
    const d2 = Math.abs(pos1 - pos0);
    return d1 + d2;
  };
  
  module.exports = aStar;