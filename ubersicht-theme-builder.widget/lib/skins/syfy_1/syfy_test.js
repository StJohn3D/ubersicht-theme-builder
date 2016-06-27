command: 'echo [HHHHHHH]', // shell command, might need escaped characters
refreshFrequency: false, // in ms or '2 days', '1d', '10h', '2.5 hrs', '2h', '1m', or '5s'.

render: function (output) { // Initial html setup
	var thisRoot = "ubersicht-theme-builder.widget/com/skins/syfy_1/";
	$('head').append('<link rel="stylesheet" type="text/css" href="' + thisRoot + 'syfy_1.css">');

	output = "The outside edge decoration will automatgically fit any size content!";
	// return "<div class='container'>" +
	// 	"<div class='glow_lt_blue center_HV tight blur-bg-10'>" +
	// 		"<h1 class='txt_white tight'>" + output + "</h1>" +
	// 		"<img class='theme TL-xs' src='" + thisRoot + "syfy_TL.png'/>" +
	// 		"<img class='theme T-xs' src='" + thisRoot + "syfy_T.png'/>" +
	// 		"<img class='theme TR-xs' src='" + thisRoot + "syfy_TL.png'/>" +
	// 		"<img class='theme L-xs' src='" + thisRoot + "syfy_L.png'/>" +
	// 		"<img class='theme R-xs' src='" + thisRoot + "syfy_R.png'/>" +
	// 		"<img class='theme BL-xs' src='" + thisRoot + "syfy_BL.png'/>" +
	// 		"<img class='theme B-xs' src='" + thisRoot + "syfy_B.png'/>" +
	// 		"<img class='theme BR-xs' src='" + thisRoot + "syfy_BR.png'/>" +
	// 	"</div>" +
	// "</div>";

	// return "<div class='container'>" +
	// 	"<div class='glow_lt_blue center_V tight'>" +
	// 		"<div class='syfy_1'>" +
	// 			"<div class='content'>" +
	// 				"<h1 class='txt_white tight'>" + output + "</h1>" +
	// 			"</div>" +
	// 		"</div>" +
	// 	"</div>" +
	// "</div>";

	return "<div class='container'>" +
		"<div class='glow_lt_blue center_V theme syfy-1-corners'>" +
			"<div class='syfy-1-content'>" +
				"<h1 class='txt_white tight'>" + output + "</h1>" +
				"<h1 class='txt_white tight'>" + output + "</h1>" +
				"<h1 class='txt_white tight'>" + output + "</h1>" +
				"<h1 class='txt_white tight'>" + output + "</h1>" +
			"</div>" +
		"</div>" +
	"</div>";
},

afterRender: function(domEl) { // Widget Logic here.

},

update: function(output, domEl){ // Selective Dom manipulation
},
// For awesome CSS effects, http://enjoycss.com/start#textShadow
style: ""