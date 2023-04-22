'use strict';

const Vertex = require("./vertex");
const Edge = require("./directedEdge");

class Graph{
    constructor(){
        this.vertices = new Set();
        this.edges = new Map();
    }

    addVertex(value){
        let newVertex = new Vertex;
        this.vertices.add(newVertex);
        this.edges.set(newVertex, []);

        return newVertex;

    }

    addEdge(start, end, weight){
        if(!this.vertices.has(start) ||!this.vertices.has(end)) throw new Error("invalid vertices");

        let newEdge = new DirectedEdge(end, weight);
        let neighbors = this.edges.get(start);
        neighbors.push(newEdge);
    }

    getNeighbors(vertex){
        return this.edges.get(vertex);
    }

    getSize(){
        return this.vertices.size;
    }


    breathFirst(graph, start){
        let traversal = [];
        let visited = new Set();
        visited.add(start)
        while(traversal.length>0){
            let current = traversal.pop();
            this.getNeighbors(start)
            .filter(n=> !visited.has(n))
            .forEach(n=>{
                visited.add(n);
                traversal.shift(n);
            })
        }
    }
}


module.exports = Graph;