module.exports = function(num) {
	return {
		isWithin: function(range) {
			return {
				of: function(target) {
					return Math.abs(num - target) <= range;
				}
			}
		}
	}
}