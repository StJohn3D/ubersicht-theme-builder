refreshFrequency: false,

render: function () {
	window.utb = {
		root  : "ubersicht-theme-builder.widget/",
		themes: {
			root: "ubersicht-theme-builder.widget/themes/"
		}
	};

	utb.registerTheme = function(themeName) {
	    console.log("Registering " + themeName + "...");
		$.getJSON(utb.themes.root + themeName + "_theme/" + themeName + "_config.json", function(json) {
		    utb.themes[themeName] = json;
		    console.log(" - " + themeName + " registered successfully");
		});
	};
}