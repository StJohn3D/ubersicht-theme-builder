refreshFrequency: false,

render: function () {
	window.utb = {
		root  : "ubersicht-theme-builder.widget/",
		themes: {
			root: "ubersicht-theme-builder.widget/themes/"
		}
	};

	var Theme = function(name) {
		/// ************************************************************************
	    /// Constructor Safe Check
	    /// ************************************************************************
	    if ( !( this instanceof Theme ) ) return new Theme(name);

        /// ************************************************************************
        /// Public Properties
        /// ************************************************************************
        this.status = 'LOADING';
        this.name = name;
        this.opts = null;

    	/// ************************************************************************
        /// Private Properties
        /// ************************************************************************
        var _widgetStack = [];

        /// ************************************************************************
	    /// Private Methods
	    /// ************************************************************************
	    var executeWidgetStack = function(options) {
	    	while (_widgetStack.length > 0) {
	    		var widget = _widgetStack.pop();
	    		console.log('passing options to #' + widget.obj.id);
	    		widget.render(widget.obj.id, options);
	    	}
	    };

	    /// ************************************************************************
	    /// Privileged Methods
	    /// ************************************************************************
	    this.onLoaded = function(widget, renderFunc) {
	    	_widgetStack.push( { obj: widget, render: renderFunc} );

	    	if (this.status === 'READY') {
	    		executeWidgetStack(this.opts);
	    	} else if (this.status !== 'LOADING') {
	    		return "<h1>ERROR loading " + this.name + " theme</h1>" +
	    		"<p>" + this.status + "</p>";
	    	};
	    }

	    this.load = function(options) {
	    	console.log('Loading ' + this.name + ' with these options...');
	    	console.log(options);
	    	this.opts = options;
	    	this.status = 'READY';
	    	executeWidgetStack(options);
	    };
	};

	utb.registerTheme = function(themeName) {
	    console.log("Registering " + themeName + "...");

	    var theme = utb.themes[themeName] = new Theme(themeName);

		$.getJSON(utb.themes.root + themeName + "_theme/" + themeName + "_config.json", function(json) {
		    console.log(' - registered ' + theme.name + ' successfully');
			theme.load(json);
		});
	};
}