command: 'echo Hello World!', // shell command, might need escaped characters
refreshFrequency: false, // in ms or '2 days', '1d', '10h', '2.5 hrs', '2h', '1m', or '5s'.

render: function (output) { // Initial html setup
	return "<div class='container'>" +
		"<div class='glow_lt_blue center_HV'><h1 class='txt_white'>" + output + "</h1></div>" +
	"</div>";
},

afterRender: function(domEl) { // Widget Logic here.

},

update: function(output, domEl){ // Selective Dom manipulation
},
// For awesome CSS effects, http://enjoycss.com/start#textShadow
style: ""