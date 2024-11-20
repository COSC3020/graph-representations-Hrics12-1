# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.


So, $V$ is the total number of vertices and the function has two nested loops that iterates over the matrix. The outerloop goes $V$ times for the number of rows in the matrix. The number of rows is the number vertices in the graph. The inner loop also iterates $V$ times for each iteration of the the outerloop because it goes through each column in the current row. The number of rows also corresponds to the number of vertices. This would gve the number of iterations $V*V$ and a time complexity of $O(V^2)$. The edges aren't depended on for the complexity because the function has to check every cell in the matrix to figure out if an edge exists between the vertices. This means it depends on the number of vertices and not the number of edegs.

Source:
https://www.geeksforgeeks.org/convert-adjacency-matrix-to-adjacency-list-representation-of-graph/
https://stackoverflow.com/questions/55111120/how-to-convert-adjacency-matrix-to-adjacency-list-in-javascript

I used my repo from last semester


## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.
