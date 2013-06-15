

function applyProperties(_props) {
	var apply = {};

	//Underscode.js love
	_.extend(apply, _.pick(_props, 'text','textAlign', 'font', 'color', 'shadowOffset', 'shadowColor'));

	$.label.applyProperties(apply);
}

if (arguments[0]) {
	applyProperties(arguments[0]);
}

exports.applyProperties = applyProperties;