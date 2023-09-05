class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacencyList = {};
    }

    addVertex(node) {
        this.adjacencyList[node] = [];
        return this
    }

    addEdge(node1, node2) {
        this.adjacencyList[node1].push(node2)
        this.adjacencyList[node2].push(node1)
        return this
    }

    showConnections() {
        const ans = [];
        for (let key in this.adjacencyList) {
            let string = ""
            string += key + "-->"
            for (let node of this.adjacencyList[key]) {
                string += " " + node;
            }
            ans.push(string)
        }

        return ans
    }
}

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');

console.log(myGraph.showConnections()); 