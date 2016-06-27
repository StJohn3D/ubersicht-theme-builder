command: "",
refreshFrequency: '5h', // in ms or '2 days', '1d', '10h', '2.5 hrs', '2h', '1m', or '5s'.


render: function (output) { // Initial html setup
	// console.log(this.filePath);
	var opts = utb.themes.habitica.opts;
	var htmlString = function(options) {
		return ("<div class='container'>" +
			"<image src='https://habitica.com/export/avatar-" + options.userID + ".png' class='corner_TL padd_10' />" +
		"</div>");
	};

	if (!opts) {
		utb.themes.habitica.onLoaded(this, function(domEl, options) {
			$('#' + domEl).html( htmlString(options) );
		});
	} else {
		return htmlString(opts);
	};
},

// afterRender: function(domEl) { // Widget Logic here.
// },

// update: function(output, domEl){ // Selective Dom manipulation
	
// },
// For awesome CSS effects, http://enjoycss.com/start#textShadow
style: ""