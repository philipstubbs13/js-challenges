const Queue = require("./queue");

function breadthFirstTraversal(graph, startingVertex) {
  const visited = new Set();
  const result = [];
  const queue = new Queue();

  queue.enqueue(startingVertex);
  visited.add(startingVertex);

  while (!queue.isEmpty()) {
    const currentVertex = queue.dequeue();
    result.push(currentVertex);

    for (const neighbor of graph.adjacencyList[currentVertex]) {
      if (!visited.has(neighbor)) {
        queue.enqueue(neighbor);
        visited.add(neighbor);
      }
      // Alternatively, you can use the spread operator for the adjacencyList to avoid creating a new array:
    }
  }

  return result;
}

module.exports = breadthFirstTraversal;
