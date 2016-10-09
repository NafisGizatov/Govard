Car = function(name, id){
	this.name = name;
	this.id = id;
	initCarRandomNum();
}

Car.prototype.initCarRandomNum = function(){
	this.Num = Math.flore(random(100));
	
}


