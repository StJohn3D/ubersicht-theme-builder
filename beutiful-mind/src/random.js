module.exports = {
	nextInt: function(max, min) {
		min = isNaN(min) ? 0 : min;
		return Math.floor(Math.random() * (max - min +1)) + min;
	}
}