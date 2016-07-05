var nextInt = require('./random').nextInt;
var measure = require('./measure')

var world = {
	xLimit: 0,
	yLimit: 0,
	zLimit: 0
}

var self = {
	pos: {
		x: 0,
		y: 0,
		z: 0
	},
	goal: {
		x: 0,
		y: 0,
		z: 0
	},
	speed: {
		max: 8,
		rateOfChange: 0.5,
		stoppingPower: 2
	},
	velocity: {
		x: 0,
		y: 0,
		z: 0
	}
}
self.velocity.increase = function(axis) {
	if (self.velocity[axis] < self.speed.max) {
		self.velocity[axis] += self.speed.rateOfChange;
	}
	if (self.velocity[axis] > self.speed.max) {
		self.velocity[axis] = self.speed.max;
	}
}
self.velocity.decrease = function(axis) {
	if (self.velocity[axis] > -self.speed.max) {
		self.velocity[axis] += -self.speed.rateOfChange;
	}
	if (self.velocity[axis] < -self.speed.max) {
		self.velocity[axis] = -self.speed.max;
	}
}
self.velocity.stop = function(axis) {
	self.velocity[axis] /= self.speed.stoppingPower;
	if (Math.abs(self.velocity[axis]) < 0.25) self.velocity[axis] = 0;
}

var updateVelocity = function(axis, range) {
	var pos = self.pos;
	var goal = self.goal;
	if (pos[axis] < goal[axis]) {
		self.velocity.increase(axis)	;	
	} else if (pos[axis] > goal[axis]) {
		self.velocity.decrease(axis);
	}
	if (measure(pos[axis]).isWithin(range).of(goal[axis])) {
		self.velocity.stop(axis);
	}
}
var takeStep = function() {
	self.pos.x += self.velocity.x;
	self.pos.y += self.velocity.y;
	self.pos.z += self.velocity.z;
	return self.pos;
}
var getIdleTick = function() {
	// self.speed.current = 0;
	return ((Math.sin( Date.now() / 200 ) / 2 + 0.5) * 5);
}

setInterval(function() {
	self.goal.x = nextInt(world.xLimit);
	self.goal.y = nextInt(world.yLimit);
	self.goal.z = nextInt(world.zLimit);
}, 10000);

module.exports = {
	setBounds: function(x, y, z) {
		world.xLimit = isNaN(x) ? 0 : x;
		world.yLimit = isNaN(y) ? 0 : y;
		world.zLimit = isNaN(z) ? 0 : z;
	},
	setPosition: function(x, y, z) {
		self.pos.x = isNaN(x) ? 0 : x;
		self.pos.y = isNaN(y) ? 0 : y;
		self.pos.z = isNaN(z) ? 0 : z;
	},
	getNextStep: function() {
		var range = 25;
		updateVelocity('x', range);
		updateVelocity('y', range);
		updateVelocity('z', range);

		return takeStep();
	}
}