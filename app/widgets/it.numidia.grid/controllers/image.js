function applyProperties(_props) {
	var apply = {};

	//Underscode.js love
	_.extend(apply, _.pick(_props, 'src','width', 'height','backgroundImage'));

	if(apply.src){
		apply.backgroundImage = apply.src;
	}

	$.image.applyProperties(apply);
}

if (arguments[0]) {
	applyProperties(arguments[0]);
}

exports.applyProperties = applyProperties;