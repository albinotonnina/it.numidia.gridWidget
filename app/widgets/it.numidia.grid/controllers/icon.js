var IconicFont;

var _icon = 'icon-sign-blank',
	_iconFont = 'FontAwesome';


function applyProperties(_props) {
	var apply = {};

	if (!IconicFont || (_props.iconFont && _props.iconFont !== _iconFont)) {
		// Require IconicFont
		IconicFont = require('IconicFont').IconicFont({
			font: _iconFont,
			ligature: false
		});
	}


	if (_props.icon) {
		_icon = _props.icon;
	}

	// Always set text
	apply.text = IconicFont.icon(_icon);

	_.extend(apply, _.pick(_props, 'color', 'shadowOffset', 'shadowColor'));

	// Font needs to be cloned
	apply.font = _props.font ? _.clone(_props.font) : $.icon.font;

	// Overwrite fontSize by iconSize if given
	if (_props.iconSize) {
		apply.font.fontSize = _props.iconSize;
	}


	// Always overwrite fontFamily
	apply.font.fontFamily = IconicFont.fontfamily();

	$.icon.applyProperties(apply);
}

if (arguments[0]) {
	applyProperties(arguments[0]);
}

exports.applyProperties = applyProperties;