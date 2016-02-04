refreshFrequency: false,

render: function (output) {
	// For awesome CSS effects, http://enjoycss.com/start#textShadow
	$('head').append('<link rel="stylesheet" type="text/css" href="' + utb.root + 'com/styles/glow.css">');
	$('head').append('<link rel="stylesheet" type="text/css" href="' + utb.root + 'com/styles/position.css">');
	$('head').append('<link rel="stylesheet" type="text/css" href="' + utb.root + 'com/styles/padding.css">');
	$('head').append('<link rel="stylesheet" type="text/css" href="' + utb.root + 'com/styles/text_colors.css">');
}