var data;
var graph;

function preload() {
	data = loadJSON('kevinbacon.json');
}

function Node() {
	this.value;
	this.edges = [];
	this.searched = false;
	this.parent = null;
}

Node.prototype.addEdge = function(neighbor) {
    this.edges.push(neighbor);
    
    neighbor.edges.push(this)
};

function setup() {
	graph = new Graph();
	var movies = data.movies;

	for (var i = 0; i < movies.length; i++) {
		var movie = movies[i].title;
		var cast = movies[i].cast;

		var movieNode = new Node(movie);
		graph.addNode(movieNode);

		for (var j = 0; j < cast.length; j++) {
			var actor = cast[j];
			var actorNode = graph.getNode(actor);

			if (actorNode == undefined) {
				actorNode = new Node(actor);
			}
			graph.addNode(actorNode);
			movieNode.addEdge(actorNode);
		}
	}
}

function Graph() {
	(this.nodes = []), (this.graph = {});
}

Graph.prototype.addNote = function(n) {
	//Nodes into array

	this.nodes.push(n);
	var title = n.value;

	//Node into 'hash'
	this.graph[title] = n;
};

Graph.prototype.getNode = function(actor) {
	var n = this.graph[actor];
	return n;
};
