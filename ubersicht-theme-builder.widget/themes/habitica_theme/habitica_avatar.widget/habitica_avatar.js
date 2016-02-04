command: "",
userID: "",
refreshFrequency: '5h', // in ms or '2 days', '1d', '10h', '2.5 hrs', '2h', '1m', or '5s'.


render: function (output) { // Initial html setup
	//"https://habitica.com/export/avatar-" + this.userID + ".png"
	var dummyQuery = Date.now();
	var opts = utb.themes.habitica;
	this.userID = opts.userID;

	return "<div class='container'>" +
		"<image src='https://habitica.com/export/avatar-" + this.userID + ".png' class='center_V' />" +
		//"<image src='https://habitica-assets.s3.amazonaws.com/avatars%2Fb0a89939-23da-4f3a-81d0-7aa3ce7e55b5.png?dummy=" + dummyQuery + "' class='center_V' />" +
	"</div>";
},

afterRender: function(domEl) { // Widget Logic here.
},

update: function(output, domEl){ // Selective Dom manipulation
	
},
// For awesome CSS effects, http://enjoycss.com/start#textShadow
style: ""