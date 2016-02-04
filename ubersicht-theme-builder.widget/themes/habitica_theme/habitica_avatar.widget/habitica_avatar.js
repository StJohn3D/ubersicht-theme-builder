command: "",
userID: "",
refreshFrequency: '5h', // in ms or '2 days', '1d', '10h', '2.5 hrs', '2h', '1m', or '5s'.


render: function (output) { // Initial html setup
	var opts = utb.themes.habitica;
	this.userID = opts.userID;

	return "<div class='container'>" +
		"<image src='https://habitica.com/export/avatar-" + this.userID + ".png' class='corner_TL padd_10' />" +
	"</div>";
},

afterRender: function(domEl) { // Widget Logic here.
},

update: function(output, domEl){ // Selective Dom manipulation
	
},
// For awesome CSS effects, http://enjoycss.com/start#textShadow
style: ""