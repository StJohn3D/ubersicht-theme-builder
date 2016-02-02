root: 'ubersicht-theme-builder.widget/',
refreshFrequency: false,

render: function (output) {
	// For awesome CSS effects, http://enjoycss.com/start#textShadow
	$('head').append('<link rel="stylesheet" type="text/css" href="' + this.root + 'com/styles/glow.css">');
	$('head').append('<link rel="stylesheet" type="text/css" href="' + this.root + 'com/styles/position.css">');
	$('head').append('<link rel="stylesheet" type="text/css" href="' + this.root + 'com/styles/text_colors.css">');
}