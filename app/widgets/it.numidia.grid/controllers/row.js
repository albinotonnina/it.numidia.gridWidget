

function applyProperties(_props) {
	var apply = {};
	_props.height = _props.height + 'dp';
	_props.width = _props.width + 'dp';
	//Underscode.js love
	_.extend(apply, _.pick(_props, 'height','width', 'backgroundColor', 'borderColor', 'borderWidth'));

	
	$.Wrapper.applyProperties(apply);
}

if (arguments[0]) {
	applyProperties(arguments[0]);
}

exports.applyProperties = applyProperties;


exports.addCell = function(_cell){
$.Wrapper.add(_cell.getView());
}