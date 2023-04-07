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


    breathFirst(){
        
    }
}


module.exports = Graph;